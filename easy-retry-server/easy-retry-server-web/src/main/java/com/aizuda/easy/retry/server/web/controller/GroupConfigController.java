package com.aizuda.easy.retry.server.web.controller;

import cn.hutool.core.util.ReUtil;
import com.aizuda.easy.retry.server.common.config.SystemProperties;
import com.aizuda.easy.retry.server.web.model.base.PageResult;
import com.aizuda.easy.retry.server.web.model.request.GroupConfigQueryVO;
import com.aizuda.easy.retry.server.web.model.request.GroupConfigRequestVO;
import com.aizuda.easy.retry.server.web.model.response.GroupConfigResponseVO;
import com.aizuda.easy.retry.server.web.annotation.LoginRequired;
import com.aizuda.easy.retry.server.web.annotation.RoleEnum;
import com.aizuda.easy.retry.server.web.service.GroupConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * 重试组接口
 *
 * @author: www.byteblogs.com
 * @date : 2021-11-22 14:38
 */
@RestController
@RequestMapping("/group")
public class GroupConfigController {

    @Autowired
    private GroupConfigService groupConfigService;
    @Autowired
    private SystemProperties systemProperties;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @LoginRequired(role = RoleEnum.ADMIN)
    @PostMapping("")
    public Boolean addGroup(@RequestBody @Validated GroupConfigRequestVO groupConfigRequestVO) {
        return groupConfigService.addGroup(groupConfigRequestVO);
    }

    @LoginRequired
    @PutMapping("")
    public Boolean updateGroup(@RequestBody @Validated GroupConfigRequestVO groupConfigRequestVO) {
        return groupConfigService.updateGroup(groupConfigRequestVO);
    }

    @LoginRequired
    @PutMapping("status")
    public Boolean updateGroupStatus(@RequestBody @Validated GroupConfigRequestVO groupConfigRequestVO) {
        String groupName = groupConfigRequestVO.getGroupName();
        Integer groupStatus = groupConfigRequestVO.getGroupStatus();
        return groupConfigService.updateGroupStatus(groupName, groupStatus);
    }

    @LoginRequired
    @GetMapping("list")
    public PageResult<List<GroupConfigResponseVO>> getGroupConfigForPage(GroupConfigQueryVO queryVO) {
        return groupConfigService.getGroupConfigForPage(queryVO);
    }

    @LoginRequired
    @GetMapping("{groupName}")
    public GroupConfigResponseVO getGroupConfigByGroupName(@PathVariable("groupName") String groupName) {
        return groupConfigService.getGroupConfigByGroupName(groupName);
    }

    @LoginRequired
    @PostMapping("/all/group-name/list")
    public List<GroupConfigResponseVO> getAllGroupNameList(@RequestBody List<String> namespaceIds) {
        return groupConfigService.getAllGroupNameList(namespaceIds);
    }

    @Deprecated
    @LoginRequired
    @GetMapping("/partition")
    public Integer getTotalPartition() {
        // 组分区从0开始,所以是最大值减一
        return systemProperties.getTotalPartition() - 1;
    }

    @LoginRequired
    @GetMapping("/partition-table/list")
    public List<Integer> getTablePartitionList() {
        // https://gitee.com/aizuda/easy-retry/issues/I8DAMH
        List<String> tableList = jdbcTemplate.queryForList("SHOW TABLES LIKE 'retry_task_%'", String.class);
        return tableList.stream().map(ReUtil::getFirstNumber).filter(i -> !Objects.isNull(i) && i <= systemProperties.getTotalPartition()).distinct().collect(Collectors.toList());
    }
}
