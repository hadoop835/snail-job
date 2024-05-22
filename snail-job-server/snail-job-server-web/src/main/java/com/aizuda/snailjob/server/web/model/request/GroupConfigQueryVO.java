package com.aizuda.snailjob.server.web.model.request;

import com.aizuda.snailjob.server.web.model.base.BaseQueryVO;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;


/**
 * @author: opensnail
 * @date : 2021-11-22 13:45
 */
@Data
public class GroupConfigQueryVO extends BaseQueryVO {

    @NotBlank(message = "组名称不能为空")
    @Pattern(regexp = "^[A-Za-z0-9_-]{1,64}$", message = "仅支持长度为1~64字符且类型为数字、字母、下划线和短横线")
    private String groupName;

    @NotNull(message = "组状态不能为空")
    private Integer groupStatus;

}
