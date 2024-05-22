package com.aizuda.snailjob.server.retry.task.support.listener;

import com.aizuda.snailjob.common.core.alarm.AlarmContext;
import com.aizuda.snailjob.common.core.enums.RetryNotifySceneEnum;
import com.aizuda.snailjob.common.core.util.EnvironmentUtils;
import com.aizuda.snailjob.common.log.SnailJobLog;
import com.aizuda.snailjob.server.common.AlarmInfoConverter;
import com.aizuda.snailjob.server.common.Lifecycle;
import com.aizuda.snailjob.server.common.alarm.AbstractRetryAlarm;
import com.aizuda.snailjob.server.common.dto.NotifyConfigInfo;
import com.aizuda.snailjob.server.common.dto.RetryAlarmInfo;
import com.aizuda.snailjob.server.common.enums.SyetemTaskTypeEnum;
import com.aizuda.snailjob.server.common.util.DateUtils;
import com.aizuda.snailjob.server.retry.task.support.event.RetryTaskFailMoreThresholdAlarmEvent;
import com.aizuda.snailjob.template.datasource.persistence.po.RetryTask;
import com.google.common.collect.Lists;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionPhase;
import org.springframework.transaction.event.TransactionalEventListener;

import java.util.List;
import java.util.Objects;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

/**
 * 重试任务失败数量超过阈值监听器
 *
 * @author: zuoJunLin
 * @date : 2023-11-20 21:40
 * @since 2.5.0
 */
@Component
@Slf4j
public class RetryTaskFailMoreThresholdAlarmListener extends
        AbstractRetryAlarm<RetryTaskFailMoreThresholdAlarmEvent> implements Runnable, Lifecycle {

    /**
     * 重试任务失败数量超过阈值告警数据
     */
    private LinkedBlockingQueue<RetryTask> queue = new LinkedBlockingQueue<>(1000);
    private static String retryTaskFailMoreThresholdMessagesFormatter =
            "<font face=\"微软雅黑\" color=#ff0000 size=4>{}环境 任务重试次数超过{}个</font>  \n" +
                    "> 空间ID:{}  \n" +
                    "> 组名称:{}  \n" +
                    "> 执行器名称:{}  \n" +
                    "> 场景名称:{}  \n" +
                    "> 重试次数:{}  \n" +
                    "> 业务数据:{}  \n" +
                    "> 时间:{}  \n";

    @Override
    protected List<RetryAlarmInfo> poll() throws InterruptedException {
        // 无数据时阻塞线程
        RetryTask retryTask = queue.poll(100, TimeUnit.MILLISECONDS);
        if (Objects.isNull(retryTask)) {
            return Lists.newArrayList();
        }

        // 拉取100条
        List<RetryTask> lists = Lists.newArrayList(retryTask);
        queue.drainTo(lists, 200);

        return AlarmInfoConverter.INSTANCE.retryTaskToAlarmInfo(lists);
    }

    @Override
    @TransactionalEventListener(fallbackExecution = true, phase = TransactionPhase.AFTER_COMPLETION)
    public void doOnApplicationEvent(RetryTaskFailMoreThresholdAlarmEvent event) {
        if (!queue.offer(event.getRetryTask())) {
            SnailJobLog.LOCAL.warn("任务失败数量超过阈值告警队列已满");
        }
    }

    @Override
    protected AlarmContext buildAlarmContext(RetryAlarmInfo retryAlarmInfo, NotifyConfigInfo notifyConfig) {

        // 预警
        return AlarmContext.build().text(retryTaskFailMoreThresholdMessagesFormatter,
                        EnvironmentUtils.getActiveProfile(),
                        notifyConfig.getNotifyThreshold(),
                        retryAlarmInfo.getNamespaceId(),
                        retryAlarmInfo.getGroupName(),
                        retryAlarmInfo.getExecutorName(),
                        retryAlarmInfo.getSceneName(),
                        retryAlarmInfo.getRetryCount(),
                        retryAlarmInfo.getArgsStr(),
                        DateUtils.format(retryAlarmInfo.getCreateDt(), DateUtils.NORM_DATETIME_PATTERN))
                .title("组:[{}] 场景:[{}] 环境任务重试次数超过阈值", retryAlarmInfo.getGroupName(),
                        retryAlarmInfo.getSceneName());
    }

    @Override
    protected void startLog() {
        SnailJobLog.LOCAL.info("RetryTaskFailMoreThresholdAlarmListener started");
    }

    @Override
    protected List<SyetemTaskTypeEnum> getSystemTaskType() {
        return Lists.newArrayList(SyetemTaskTypeEnum.RETRY);
    }

    @Override
    protected int getNotifyScene() {
        return RetryNotifySceneEnum.RETRY_TASK_REACH_THRESHOLD.getNotifyScene();
    }
}
