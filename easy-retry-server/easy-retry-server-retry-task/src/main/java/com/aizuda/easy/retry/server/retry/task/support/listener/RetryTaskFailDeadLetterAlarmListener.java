package com.aizuda.easy.retry.server.retry.task.support.listener;

import com.aizuda.easy.retry.common.core.alarm.AlarmContext;
import com.aizuda.easy.retry.common.core.log.LogUtils;
import com.aizuda.easy.retry.common.core.util.EnvironmentUtils;
import com.aizuda.easy.retry.common.core.util.HostUtils;
import com.aizuda.easy.retry.server.common.Lifecycle;
import com.aizuda.easy.retry.server.common.flow.control.AbstractFlowControl;
import com.aizuda.easy.retry.server.common.util.DateUtils;
import com.aizuda.easy.retry.server.common.triple.ImmutableTriple;
import com.aizuda.easy.retry.server.common.triple.Triple;
import com.aizuda.easy.retry.server.retry.task.support.event.RetryTaskFailDeadLetterAlarmEvent;
import com.aizuda.easy.retry.template.datasource.access.AccessTemplate;
import com.aizuda.easy.retry.template.datasource.persistence.po.NotifyConfig;
import com.aizuda.easy.retry.template.datasource.persistence.po.RetryDeadLetter;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

/**
 * 重试任务失败进入死信队列监听器
 *
 * @author: zuoJunLin
 * @date : 2023-11-20 21:40
 * @since 2.5.0
 */
@Component
@Slf4j
public class RetryTaskFailDeadLetterAlarmListener extends AbstractFlowControl<RetryTaskFailDeadLetterAlarmEvent> implements Runnable, Lifecycle {

    /**
     * 死信告警数据
     */
    private LinkedBlockingQueue<List<RetryDeadLetter>> queue = new LinkedBlockingQueue<>(1000);

    private static String retryTaskDeadTextMessagesFormatter =
        "<font face=\"微软雅黑\" color=#ff0000 size=4>{}环境 重试任务失败进入死信队列</font>  \n" +
            "> 组名称:{}  \n" +
            "> 执行器名称:{}  \n" +
            "> 场景名称:{}  \n" +
            "> 业务数据:{}  \n" +
            "> 时间:{}  \n";

    @Autowired
    protected AccessTemplate accessTemplate;

    private Thread thread;

    @Override
    public void start() {
        thread = new Thread(this);
        thread.start();
    }

    @Override
    public void close() {
        if (Objects.nonNull(thread)) {
            thread.interrupt();
        }
    }

    @Override
    public void run() {
        LogUtils.info(log, "RetryTaskFailDeadLetterAlarmListener time[{}] ip:[{}]", LocalDateTime.now(),
            HostUtils.getIp());
        while (!Thread.currentThread().isInterrupted()) {
            try {
                List<RetryDeadLetter> allRetryDeadLetterList = queue.poll(5, TimeUnit.SECONDS);
                if (CollectionUtils.isEmpty(allRetryDeadLetterList)) {
                    continue;
                }

                Set<String> namespaceIds = new HashSet<>();
                Set<String> groupNames = new HashSet<>();
                Set<String> sceneNames = new HashSet<>();
                Map<Triple<String, String, String>, List<RetryDeadLetter>> retryDeadLetterMap = getRetryDeadLetterMap(
                    allRetryDeadLetterList, namespaceIds, groupNames, sceneNames);

                Map<Triple<String, String, String>, List<NotifyConfig>> notifyConfigMap = getNotifyConfigMap(
                    namespaceIds, groupNames, sceneNames);
                if (notifyConfigMap == null) {
                    continue;
                }

                // 循环发送消息
                retryDeadLetterMap.forEach((key, list) -> {
                    List<NotifyConfig> notifyConfigsList = notifyConfigMap.get(key);
                    for (RetryDeadLetter retryDeadLetter : list) {
                        doSendAlarm(key, notifyConfigsList, AlarmDTOConverter.INSTANCE.toAlarmDTO(retryDeadLetter));
                    }
                });
            } catch (InterruptedException e) {
                LogUtils.info(log, "retry task fail dead letter alarm stop");
                Thread.currentThread().interrupt();
            } catch (Exception e) {
                LogUtils.error(log, "RetryTaskFailDeadLetterAlarmListener queue poll Exception", e);
            }
        }
    }

    @NotNull
    private static Map<Triple<String, String, String>, List<RetryDeadLetter>> getRetryDeadLetterMap(
        final List<RetryDeadLetter> allRetryDeadLetterList, final Set<String> namespaceIds,
        final Set<String> groupNames, final Set<String> sceneNames) {
        return allRetryDeadLetterList.stream()
            .collect(Collectors.groupingBy(i -> {

                String namespaceId = i.getNamespaceId();
                String groupName = i.getGroupName();
                String sceneName = i.getSceneName();

                namespaceIds.add(namespaceId);
                groupNames.add(groupName);
                sceneNames.add(sceneName);

                return ImmutableTriple.of(namespaceId, groupName, sceneName);
            }));
    }

    @Override
    public void onApplicationEvent(RetryTaskFailDeadLetterAlarmEvent event) {
        if (queue.offer(event.getRetryDeadLetters())) {
            LogUtils.warn(log, "任务重试失败进入死信队列告警队列已满");
        }
    }

    @Override
    protected AlarmContext buildAlarmContext(final AlarmDTO alarmDTO, final NotifyConfig notifyConfig) {

        // 预警
        return AlarmContext.build().text(retryTaskDeadTextMessagesFormatter,
                EnvironmentUtils.getActiveProfile(),
                alarmDTO.getGroupName(),
                alarmDTO.getExecutorName(),
                alarmDTO.getSceneName(),
                alarmDTO.getArgsStr(),
                DateUtils.format(alarmDTO.getCreateDt(), DateUtils.NORM_DATETIME_PATTERN))
            .title("组:[{}] 场景:[{}] 环境重试任务失败进入死信队列",
                alarmDTO.getGroupName(), alarmDTO.getSceneName())
            .notifyAttribute(notifyConfig.getNotifyAttribute());
    }
}
