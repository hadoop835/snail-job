package com.aizuda.snailjob.client.common.rpc.client;

import cn.hutool.core.lang.Assert;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import com.aizuda.snailjob.client.common.cache.GroupVersionCache;
import com.aizuda.snailjob.client.common.config.SnailJobProperties;
import com.aizuda.snailjob.client.common.exception.SnailJobRemoteException;
import com.aizuda.snailjob.common.core.constant.SystemConstants;
import com.aizuda.snailjob.common.core.context.SnailSpringContext;
import com.aizuda.snailjob.common.core.enums.HeadersEnum;
import com.aizuda.snailjob.common.core.grpc.auto.GrpcResult;
import com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest;
import com.aizuda.snailjob.common.core.grpc.auto.Metadata;
import com.aizuda.snailjob.common.core.util.NetUtil;
import com.aizuda.snailjob.common.log.SnailJobLog;
import com.google.common.util.concurrent.ListenableFuture;
import com.google.protobuf.Any;
import com.google.protobuf.UnsafeByteOperations;
import io.grpc.ManagedChannel;
import io.grpc.MethodDescriptor;
import io.grpc.protobuf.ProtoUtils;
import org.springframework.boot.autoconfigure.web.ServerProperties;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

/**
 * @author: opensnail
 * @date : 2024-08-22
 */
public final class GrpcChannel {

    private static ManagedChannel channel;

    public static void setChannel(ManagedChannel channel) {
        GrpcChannel.channel = channel;
    }

    /**
     * 服务端端口
     */
    private static final String SNAIL_JOB_SERVER_PORT = "snail-job.server.port";
    /**
     * 服务端host
     */
    private static final String SNAIL_JOB_SERVER_HOST = "snail-job.server.host";

    /**
     * 客户端端口
     */
    private static final String SNAIL_JOB_CLIENT_PORT = "snail-job.port";
    /**
     * 客户端host
     */
    private static final String SNAIL_JOB_CLIENT_HOST = "snail-job.host";

    private static final String HOST_ID = IdUtil.getSnowflake().nextIdStr();
    private static final int PORT;
    private static final String HOST;

    static {
        PORT = Integer.parseInt(System.getProperty(SNAIL_JOB_CLIENT_PORT, String.valueOf(1789)));
        HOST = System.getProperty(SNAIL_JOB_CLIENT_HOST, NetUtil.getLocalIpStr());
    }

    /**
     * 获取服务端端口
     *
     * @return port
     */
    public static int getServerPort() {
        SnailJobProperties snailJobProperties = SnailSpringContext.getContext().getBean(SnailJobProperties.class);
        SnailJobProperties.ServerConfig serverConfig = snailJobProperties.getServer();

        String port = System.getProperty(SNAIL_JOB_SERVER_PORT);
        if (StrUtil.isBlank(port)) {
            System.setProperty(SNAIL_JOB_SERVER_PORT, String.valueOf(serverConfig.getPort()));
        }

        return Integer.parseInt(System.getProperty(SNAIL_JOB_SERVER_PORT));
    }

    /**
     * 获取服务端host
     *
     * @return host
     */
    public static String getServerHost() {
        SnailJobProperties snailJobProperties = SnailSpringContext.getBean(SnailJobProperties.class);
        SnailJobProperties.ServerConfig serverConfig = snailJobProperties.getServer();

        String host = System.getProperty(SNAIL_JOB_SERVER_HOST);
        if (StrUtil.isBlank(host)) {
            System.setProperty(SNAIL_JOB_SERVER_HOST, serverConfig.getHost());
        }

        return System.getProperty(SNAIL_JOB_SERVER_HOST);
    }

    /**
     * 获取指定的客户IP
     *
     * @return 客户端IP
     */
    public static String getClientHost() {
        SnailJobProperties snailJobProperties = SnailSpringContext.getBean(SnailJobProperties.class);

        String host = snailJobProperties.getHost();
        // 获取客户端指定的IP地址
        if (StrUtil.isBlank(host)) {
            host = HOST;
        }

        return host;
    }

    /**
     * 获取客户端端口
     *
     * @return port 端口
     */
    public static Integer getClientPort() {
        SnailJobProperties snailJobProperties = SnailSpringContext.getBean(SnailJobProperties.class);
        ServerProperties serverProperties = SnailSpringContext.getBean(ServerProperties.class);

        Integer port = snailJobProperties.getPort();
        // 获取客户端指定的端口
        if (Objects.isNull(port)) {
            port = Optional.ofNullable(serverProperties.getPort()).orElse(PORT);
        }

        return port;
    }


    public static ListenableFuture<GrpcResult> sendOfUnary(String path, String body, final long reqId) {
        if (channel == null) {
            return null;
        }

        SnailJobProperties snailJobProperties = SnailSpringContext.getBean(SnailJobProperties.class);

        // server配置不能为空
        SnailJobProperties.ServerConfig serverConfig = snailJobProperties.getServer();
        if (Objects.isNull(serverConfig)) {
            SnailJobLog.LOCAL.error("snail job server config is null");
            return null;
        }

        Assert.notBlank(snailJobProperties.getGroup(),
            () -> new SnailJobRemoteException("The group is null, please check if your configuration is correct."));

        Map<String, String> headersMap = new HashMap<>();

        headersMap.put(HeadersEnum.HOST_ID.getKey(), HOST_ID);
        headersMap.put(HeadersEnum.HOST_IP.getKey(), getClientHost());
        headersMap.put(HeadersEnum.GROUP_NAME.getKey(), snailJobProperties.getGroup());
        headersMap.put(HeadersEnum.HOST_PORT.getKey(), String.valueOf(getClientPort()));
        headersMap.put(HeadersEnum.VERSION.getKey(), String.valueOf(GroupVersionCache.getVersion()));
        headersMap.put(HeadersEnum.HOST.getKey(), serverConfig.getHost());
        headersMap.put(HeadersEnum.NAMESPACE.getKey(), Optional.ofNullable(snailJobProperties.getNamespace()).orElse(
            SystemConstants.DEFAULT_NAMESPACE));
        headersMap.put(HeadersEnum.TOKEN.getKey(), Optional.ofNullable(snailJobProperties.getToken()).orElse(
            SystemConstants.DEFAULT_TOKEN));

        Metadata metadata = Metadata
            .newBuilder()
            .setUri(path)
            .putAllHeaders(headersMap)
            .build();
        Any build = Any.newBuilder().setValue(UnsafeByteOperations.unsafeWrap(body.getBytes()))
            .build();
        GrpcSnailJobRequest snailJobRequest = GrpcSnailJobRequest
            .newBuilder()
            .setMetadata(metadata)
            .setReqId(reqId)
            .setBody(build)
            .build();

        MethodDescriptor<GrpcSnailJobRequest, GrpcResult> methodDescriptor =
            MethodDescriptor.<GrpcSnailJobRequest, GrpcResult>newBuilder()
                .setType(MethodDescriptor.MethodType.UNARY)
                .setFullMethodName(MethodDescriptor.generateFullMethodName("UnaryRequest", "unaryRequest"))
                .setRequestMarshaller(ProtoUtils.marshaller(GrpcSnailJobRequest.getDefaultInstance()))
                .setResponseMarshaller(ProtoUtils.marshaller(GrpcResult.getDefaultInstance()))
                .build();

        // 创建动态代理调用方法
        return io.grpc.stub.ClientCalls.futureUnaryCall(
            channel.newCall(methodDescriptor, io.grpc.CallOptions.DEFAULT),
            snailJobRequest);
    }

}
