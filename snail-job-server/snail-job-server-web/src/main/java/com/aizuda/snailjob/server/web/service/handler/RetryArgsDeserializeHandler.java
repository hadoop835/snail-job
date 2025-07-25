package com.aizuda.snailjob.server.web.service.handler;

import cn.hutool.core.lang.Assert;
import com.aizuda.snailjob.client.model.RetryArgsDeserializeDTO;
import com.aizuda.snailjob.common.core.enums.StatusEnum;
import com.aizuda.snailjob.common.core.model.Result;
import com.aizuda.snailjob.common.core.util.JsonUtil;
import com.aizuda.snailjob.common.log.SnailJobLog;
import com.aizuda.snailjob.server.common.dto.InstanceLiveInfo;
import com.aizuda.snailjob.server.common.dto.InstanceSelectCondition;
import com.aizuda.snailjob.server.common.exception.SnailJobServerException;
import com.aizuda.snailjob.server.common.handler.InstanceManager;
import com.aizuda.snailjob.server.common.rpc.client.RequestBuilder;
import com.aizuda.snailjob.server.retry.task.client.RetryRpcClient;
import com.aizuda.snailjob.server.web.util.UserSessionUtils;
import com.aizuda.snailjob.template.datasource.access.AccessTemplate;
import com.aizuda.snailjob.template.datasource.persistence.po.RetrySceneConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Objects;

/**
 * <p>
 *
 * </p>
 *
 * @author opensnail
 * @date 2025-06-21
 */
@Component
@RequiredArgsConstructor
public class RetryArgsDeserializeHandler {
    private final InstanceManager instanceManager;
    private final AccessTemplate accessTemplate;

    public String deserialize(RetryArgsDeserializeDTO retryArgsDeserializeVO) {
        String namespaceId = UserSessionUtils.currentUserSession().getNamespaceId();

        RetrySceneConfig retrySceneConfig = accessTemplate.getSceneConfigAccess()
                .getSceneConfigByGroupNameAndSceneName(retryArgsDeserializeVO.getGroup(),
                        retryArgsDeserializeVO.getScene(), namespaceId);

        if (Objects.isNull(retrySceneConfig)) {
            return retryArgsDeserializeVO.getArgsStr();
        }
        InstanceSelectCondition condition = InstanceSelectCondition
                .builder()
                .allocKey(retrySceneConfig.getSceneName())
                .groupName(retrySceneConfig.getGroupName())
                .namespaceId(retrySceneConfig.getNamespaceId())
                .routeKey(retrySceneConfig.getRouteKey())
                .targetLabels(retrySceneConfig.getLabels())
                .build();
        InstanceLiveInfo instance = instanceManager.getALiveInstanceByRouteKey(condition);
        if (Objects.isNull(instance)) {
            return retryArgsDeserializeVO.getArgsStr();
        }
        try {
            // 委托客户端反序列化重试参数
            RetryRpcClient rpcClient = RequestBuilder.<RetryRpcClient, Result>newBuilder()
                    .nodeInfo(instance)
                    .retryTimes(3)
                    .failover(false)
                    .failRetry(true)
                    .retryInterval(1)
                    .client(RetryRpcClient.class)
                    .build();

            Result result = rpcClient.deserialize(retryArgsDeserializeVO);

            if (Objects.isNull(result) || Objects.isNull(result.getData()) || result.getStatus() == StatusEnum.NO.getStatus()) {
                return retryArgsDeserializeVO.getArgsStr();
            }

            return JsonUtil.toJsonString(result.getData());
        } catch (Throwable e) {
            SnailJobLog.LOCAL.error("deserialize is error. args:[{}]", retryArgsDeserializeVO.getArgsStr(), e);
        }

        return retryArgsDeserializeVO.getArgsStr();
    }
}
