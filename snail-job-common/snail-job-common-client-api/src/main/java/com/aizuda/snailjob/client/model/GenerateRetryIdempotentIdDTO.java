package com.aizuda.snailjob.client.model;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * 生成idempotentId模型
 *
 * @auther opensnail
 * @date 2022/03/25 10:06
 */
@Data
public class GenerateRetryIdempotentIdDTO {
    @NotBlank(message = "group 不能为空")
    private String group;
    @NotBlank(message = "scene 不能为空")
    private String scene;
    @NotBlank(message = "参数 不能为空")
    private String argsStr;
    @NotBlank(message = "executorName 不能为空")
    private String executorName;
}
