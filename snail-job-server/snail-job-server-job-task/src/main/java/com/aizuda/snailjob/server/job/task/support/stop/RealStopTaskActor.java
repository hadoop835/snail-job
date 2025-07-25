package com.aizuda.snailjob.server.job.task.support.stop;

import com.aizuda.snailjob.server.common.dto.InstanceKey;
import com.aizuda.snailjob.server.common.dto.InstanceLiveInfo;
import com.aizuda.snailjob.server.common.handler.InstanceManager;
import lombok.RequiredArgsConstructor;
import  org.apache.pekko.actor.AbstractActor;
import com.aizuda.snailjob.client.model.StopJobDTO;
import com.aizuda.snailjob.common.core.model.Result;
import com.aizuda.snailjob.common.core.util.JsonUtil;
import com.aizuda.snailjob.server.common.pekko.ActorGenerator;
import com.aizuda.snailjob.server.common.rpc.client.RequestBuilder;
import com.aizuda.snailjob.server.job.task.client.JobRpcClient;
import com.aizuda.snailjob.server.job.task.dto.RealStopTaskInstanceDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.Objects;

/**
 * @author: opensnail
 * @date : 2023-10-07 10:45
 * @since : 2.4.0
 */
@Component(ActorGenerator.JOB_REAL_STOP_TASK_INSTANCE_ACTOR)
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
@RequiredArgsConstructor
public class RealStopTaskActor extends AbstractActor {
    private final InstanceManager instanceManager;

    @Override
    public Receive createReceive() {
        return receiveBuilder().match(RealStopTaskInstanceDTO.class, realStopTaskInstanceDTO -> {
            try {
                doStop(realStopTaskInstanceDTO);
            } catch (Exception e) {
                log.error("Stopping task execution failed. [{}]", JsonUtil.toJsonString(realStopTaskInstanceDTO), e);
            }
        }).build();
    }

    private void doStop(final RealStopTaskInstanceDTO realStopTaskInstanceDTO) {

        // 检查客户端是否存在
        InstanceLiveInfo instanceLiveInfo = instanceManager.getInstanceALiveInfoSet(InstanceKey.builder()
                .namespaceId(realStopTaskInstanceDTO.getNamespaceId())
                .groupName(realStopTaskInstanceDTO.getGroupName())
                .hostId(realStopTaskInstanceDTO.getClientId())
                .build());
        if (Objects.nonNull(instanceLiveInfo)) {
            // 不用关心停止的结果，若服务端尝试终止失败,客户端会兜底进行关闭
            requestClient(realStopTaskInstanceDTO, instanceLiveInfo);
        }
    }

    private Result<Boolean> requestClient(RealStopTaskInstanceDTO realStopTaskInstanceDTO, InstanceLiveInfo instanceLiveInfo) {
        JobRpcClient rpcClient = RequestBuilder.<JobRpcClient, Result>newBuilder()
                .nodeInfo(instanceLiveInfo)
                .failRetry(Boolean.TRUE)
                .retryTimes(3)
                .retryInterval(1)
                .client(JobRpcClient.class)
                .build();

        StopJobDTO stopJobDTO = new StopJobDTO();
        stopJobDTO.setTaskBatchId(realStopTaskInstanceDTO.getTaskBatchId());
        stopJobDTO.setJobId(realStopTaskInstanceDTO.getJobId());
        stopJobDTO.setGroupName(realStopTaskInstanceDTO.getGroupName());
        return rpcClient.stop(stopJobDTO);
    }
}
