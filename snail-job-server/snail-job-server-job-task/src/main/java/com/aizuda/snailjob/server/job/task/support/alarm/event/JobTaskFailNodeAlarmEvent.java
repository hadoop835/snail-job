package com.aizuda.snailjob.server.job.task.support.alarm.event;

import com.aizuda.snailjob.server.job.task.dto.JobTaskFailAlarmEventDTO;
import lombok.Getter;
import org.springframework.context.ApplicationEvent;

/**
 * job任务失败事件（没有可执行的客户端节点）
 *
 * @author: zuoJunLin
 * @date : 2023-12-02 21:40
 * @since 2.5.0
 */
@Getter
public class JobTaskFailNodeAlarmEvent extends ApplicationEvent {

    private JobTaskFailAlarmEventDTO jobTaskFailAlarmEventDTO;

    public JobTaskFailNodeAlarmEvent(JobTaskFailAlarmEventDTO jobTaskFailAlarmEventDTO) {
        super(jobTaskFailAlarmEventDTO);
        this.jobTaskFailAlarmEventDTO = jobTaskFailAlarmEventDTO;
    }

}
