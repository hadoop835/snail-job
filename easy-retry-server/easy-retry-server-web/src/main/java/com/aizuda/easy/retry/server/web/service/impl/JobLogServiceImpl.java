package com.aizuda.easy.retry.server.web.service.impl;

import cn.hutool.core.util.ArrayUtil;
import com.aizuda.easy.retry.common.core.util.JsonUtil;
import com.aizuda.easy.retry.server.web.model.base.PageResult;
import com.aizuda.easy.retry.server.web.model.request.JobLogQueryVO;
import com.aizuda.easy.retry.server.web.model.response.JobLogResponseVO;
import com.aizuda.easy.retry.server.web.service.JobLogService;
import com.aizuda.easy.retry.server.web.service.convert.JobLogResponseVOConverter;
import com.aizuda.easy.retry.template.datasource.persistence.mapper.JobLogMessageMapper;
import com.aizuda.easy.retry.template.datasource.persistence.po.JobLogMessage;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author: www.byteblogs.com
 * @date : 2023-10-12 09:55
 * @since ：2.4.0
 */
@Service
public class JobLogServiceImpl implements JobLogService {

    @Autowired
    private JobLogMessageMapper jobLogMessageMapper;

    @Override
    public JobLogResponseVO getJobLogPage(final JobLogQueryVO queryVO) {

        PageDTO<JobLogMessage> pageDTO = new PageDTO<>(1, queryVO.getSize());

        LambdaQueryWrapper<JobLogMessage> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper
            .select(JobLogMessage::getId, JobLogMessage::getLogNum)
            .ge(JobLogMessage::getId, queryVO.getStartId())
            .eq(JobLogMessage::getJobId, queryVO.getJobId())
            .eq(JobLogMessage::getTaskBatchId, queryVO.getTaskBatchId())
            .eq(JobLogMessage::getTaskId, queryVO.getTaskId());

        queryWrapper.orderByAsc(JobLogMessage::getRealTime).orderByDesc(JobLogMessage::getId);
        PageDTO<JobLogMessage> selectPage = jobLogMessageMapper.selectPage(pageDTO, queryWrapper);
        List<JobLogMessage> records = selectPage.getRecords();
        if (CollectionUtils.isEmpty(records)) {
            JobLogResponseVO jobLogResponseVO = new JobLogResponseVO();
            jobLogResponseVO.setFinished(Boolean.TRUE);
            return jobLogResponseVO;
        }

        Integer fromIndex = Optional.ofNullable(queryVO.getFromIndex()).orElse(0);
        JobLogMessage firstRecord = records.get(0);
        List<Long> ids = Lists.newArrayList(firstRecord.getId());
        int total = firstRecord.getLogNum() - fromIndex;
        for (int i = 1; i < records.size(); i++) {
            JobLogMessage record = records.get(i);
            if (total + record.getLogNum() > queryVO.getSize()) {
                break;
            }

            total += record.getLogNum();
            ids.add(record.getId());
        }

        long nextStartId = 0;
        List<String> messages = Lists.newArrayList();
        List<JobLogMessage> jobLogMessages = jobLogMessageMapper.selectBatchIds(ids);
        for (final JobLogMessage jobLogMessage : jobLogMessages) {

            List<String> originalList = JsonUtil.parseObject(jobLogMessage.getMessage(), List.class);
            int size = originalList.size() - fromIndex;
            List<String> pageList = originalList.stream().skip(fromIndex).limit(queryVO.getSize())
                .collect(Collectors.toList());

            if (messages.size() + size >= queryVO.getSize()) {
                messages.addAll(pageList);
                nextStartId = jobLogMessage.getId();
                fromIndex = Math.min(fromIndex + queryVO.getSize(), originalList.size() - 1);
                break;
            }

            messages.addAll(pageList);
            nextStartId = jobLogMessage.getId() + 1;
            fromIndex = 0;
        }

        JobLogResponseVO jobLogResponseVO = new JobLogResponseVO();
        jobLogResponseVO.setMessage(messages);
        jobLogResponseVO.setNextStartId(nextStartId);
        jobLogResponseVO.setFromIndex(fromIndex);
        return jobLogResponseVO;
    }
}
