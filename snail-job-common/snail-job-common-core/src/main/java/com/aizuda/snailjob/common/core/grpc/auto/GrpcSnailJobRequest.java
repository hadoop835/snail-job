// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: snail_job_grpc_service.proto

package com.aizuda.snailjob.common.core.grpc.auto;

/**
 * Protobuf type {@code GrpcSnailJobRequest}
 */
public final class GrpcSnailJobRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:GrpcSnailJobRequest)
    GrpcSnailJobRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GrpcSnailJobRequest.newBuilder() to construct.
  private GrpcSnailJobRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GrpcSnailJobRequest() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GrpcSnailJobRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.aizuda.snailjob.common.core.grpc.auto.SnailJobGrpcService.internal_static_GrpcSnailJobRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.aizuda.snailjob.common.core.grpc.auto.SnailJobGrpcService.internal_static_GrpcSnailJobRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest.class, com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest.Builder.class);
  }

  private int bitField0_;
  public static final int REQID_FIELD_NUMBER = 1;
  private long reqId_ = 0L;
  /**
   * <code>int64 reqId = 1;</code>
   * @return The reqId.
   */
  @java.lang.Override
  public long getReqId() {
    return reqId_;
  }

  public static final int METADATA_FIELD_NUMBER = 2;
  private com.aizuda.snailjob.common.core.grpc.auto.Metadata metadata_;
  /**
   * <code>.Metadata metadata = 2;</code>
   * @return Whether the metadata field is set.
   */
  @java.lang.Override
  public boolean hasMetadata() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>.Metadata metadata = 2;</code>
   * @return The metadata.
   */
  @java.lang.Override
  public com.aizuda.snailjob.common.core.grpc.auto.Metadata getMetadata() {
    return metadata_ == null ? com.aizuda.snailjob.common.core.grpc.auto.Metadata.getDefaultInstance() : metadata_;
  }
  /**
   * <code>.Metadata metadata = 2;</code>
   */
  @java.lang.Override
  public com.aizuda.snailjob.common.core.grpc.auto.MetadataOrBuilder getMetadataOrBuilder() {
    return metadata_ == null ? com.aizuda.snailjob.common.core.grpc.auto.Metadata.getDefaultInstance() : metadata_;
  }

  public static final int BODY_FIELD_NUMBER = 3;
  private com.google.protobuf.Any body_;
  /**
   * <code>.google.protobuf.Any body = 3;</code>
   * @return Whether the body field is set.
   */
  @java.lang.Override
  public boolean hasBody() {
    return ((bitField0_ & 0x00000002) != 0);
  }
  /**
   * <code>.google.protobuf.Any body = 3;</code>
   * @return The body.
   */
  @java.lang.Override
  public com.google.protobuf.Any getBody() {
    return body_ == null ? com.google.protobuf.Any.getDefaultInstance() : body_;
  }
  /**
   * <code>.google.protobuf.Any body = 3;</code>
   */
  @java.lang.Override
  public com.google.protobuf.AnyOrBuilder getBodyOrBuilder() {
    return body_ == null ? com.google.protobuf.Any.getDefaultInstance() : body_;
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (reqId_ != 0L) {
      output.writeInt64(1, reqId_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(2, getMetadata());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      output.writeMessage(3, getBody());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (reqId_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(1, reqId_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getMetadata());
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(3, getBody());
    }
    size += getUnknownFields().getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest)) {
      return super.equals(obj);
    }
    com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest other = (com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest) obj;

    if (getReqId()
        != other.getReqId()) return false;
    if (hasMetadata() != other.hasMetadata()) return false;
    if (hasMetadata()) {
      if (!getMetadata()
          .equals(other.getMetadata())) return false;
    }
    if (hasBody() != other.hasBody()) return false;
    if (hasBody()) {
      if (!getBody()
          .equals(other.getBody())) return false;
    }
    if (!getUnknownFields().equals(other.getUnknownFields())) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + REQID_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getReqId());
    if (hasMetadata()) {
      hash = (37 * hash) + METADATA_FIELD_NUMBER;
      hash = (53 * hash) + getMetadata().hashCode();
    }
    if (hasBody()) {
      hash = (37 * hash) + BODY_FIELD_NUMBER;
      hash = (53 * hash) + getBody().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code GrpcSnailJobRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:GrpcSnailJobRequest)
      com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.aizuda.snailjob.common.core.grpc.auto.SnailJobGrpcService.internal_static_GrpcSnailJobRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.aizuda.snailjob.common.core.grpc.auto.SnailJobGrpcService.internal_static_GrpcSnailJobRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest.class, com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest.Builder.class);
    }

    // Construct using com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
        getMetadataFieldBuilder();
        getBodyFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      reqId_ = 0L;
      metadata_ = null;
      if (metadataBuilder_ != null) {
        metadataBuilder_.dispose();
        metadataBuilder_ = null;
      }
      body_ = null;
      if (bodyBuilder_ != null) {
        bodyBuilder_.dispose();
        bodyBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.aizuda.snailjob.common.core.grpc.auto.SnailJobGrpcService.internal_static_GrpcSnailJobRequest_descriptor;
    }

    @java.lang.Override
    public com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest getDefaultInstanceForType() {
      return com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest build() {
      com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest buildPartial() {
      com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest result = new com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.reqId_ = reqId_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.metadata_ = metadataBuilder_ == null
            ? metadata_
            : metadataBuilder_.build();
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.body_ = bodyBuilder_ == null
            ? body_
            : bodyBuilder_.build();
        to_bitField0_ |= 0x00000002;
      }
      result.bitField0_ |= to_bitField0_;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest) {
        return mergeFrom((com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest other) {
      if (other == com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest.getDefaultInstance()) return this;
      if (other.getReqId() != 0L) {
        setReqId(other.getReqId());
      }
      if (other.hasMetadata()) {
        mergeMetadata(other.getMetadata());
      }
      if (other.hasBody()) {
        mergeBody(other.getBody());
      }
      this.mergeUnknownFields(other.getUnknownFields());
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 8: {
              reqId_ = input.readInt64();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 18: {
              input.readMessage(
                  getMetadataFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              input.readMessage(
                  getBodyFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000004;
              break;
            } // case 26
            default: {
              if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                done = true; // was an endgroup tag
              }
              break;
            } // default:
          } // switch (tag)
        } // while (!done)
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.unwrapIOException();
      } finally {
        onChanged();
      } // finally
      return this;
    }
    private int bitField0_;

    private long reqId_ ;
    /**
     * <code>int64 reqId = 1;</code>
     * @return The reqId.
     */
    @java.lang.Override
    public long getReqId() {
      return reqId_;
    }
    /**
     * <code>int64 reqId = 1;</code>
     * @param value The reqId to set.
     * @return This builder for chaining.
     */
    public Builder setReqId(long value) {

      reqId_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>int64 reqId = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearReqId() {
      bitField0_ = (bitField0_ & ~0x00000001);
      reqId_ = 0L;
      onChanged();
      return this;
    }

    private com.aizuda.snailjob.common.core.grpc.auto.Metadata metadata_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.aizuda.snailjob.common.core.grpc.auto.Metadata, com.aizuda.snailjob.common.core.grpc.auto.Metadata.Builder, com.aizuda.snailjob.common.core.grpc.auto.MetadataOrBuilder> metadataBuilder_;
    /**
     * <code>.Metadata metadata = 2;</code>
     * @return Whether the metadata field is set.
     */
    public boolean hasMetadata() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>.Metadata metadata = 2;</code>
     * @return The metadata.
     */
    public com.aizuda.snailjob.common.core.grpc.auto.Metadata getMetadata() {
      if (metadataBuilder_ == null) {
        return metadata_ == null ? com.aizuda.snailjob.common.core.grpc.auto.Metadata.getDefaultInstance() : metadata_;
      } else {
        return metadataBuilder_.getMessage();
      }
    }
    /**
     * <code>.Metadata metadata = 2;</code>
     */
    public Builder setMetadata(com.aizuda.snailjob.common.core.grpc.auto.Metadata value) {
      if (metadataBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        metadata_ = value;
      } else {
        metadataBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.Metadata metadata = 2;</code>
     */
    public Builder setMetadata(
        com.aizuda.snailjob.common.core.grpc.auto.Metadata.Builder builderForValue) {
      if (metadataBuilder_ == null) {
        metadata_ = builderForValue.build();
      } else {
        metadataBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.Metadata metadata = 2;</code>
     */
    public Builder mergeMetadata(com.aizuda.snailjob.common.core.grpc.auto.Metadata value) {
      if (metadataBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          metadata_ != null &&
          metadata_ != com.aizuda.snailjob.common.core.grpc.auto.Metadata.getDefaultInstance()) {
          getMetadataBuilder().mergeFrom(value);
        } else {
          metadata_ = value;
        }
      } else {
        metadataBuilder_.mergeFrom(value);
      }
      if (metadata_ != null) {
        bitField0_ |= 0x00000002;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.Metadata metadata = 2;</code>
     */
    public Builder clearMetadata() {
      bitField0_ = (bitField0_ & ~0x00000002);
      metadata_ = null;
      if (metadataBuilder_ != null) {
        metadataBuilder_.dispose();
        metadataBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.Metadata metadata = 2;</code>
     */
    public com.aizuda.snailjob.common.core.grpc.auto.Metadata.Builder getMetadataBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getMetadataFieldBuilder().getBuilder();
    }
    /**
     * <code>.Metadata metadata = 2;</code>
     */
    public com.aizuda.snailjob.common.core.grpc.auto.MetadataOrBuilder getMetadataOrBuilder() {
      if (metadataBuilder_ != null) {
        return metadataBuilder_.getMessageOrBuilder();
      } else {
        return metadata_ == null ?
            com.aizuda.snailjob.common.core.grpc.auto.Metadata.getDefaultInstance() : metadata_;
      }
    }
    /**
     * <code>.Metadata metadata = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.aizuda.snailjob.common.core.grpc.auto.Metadata, com.aizuda.snailjob.common.core.grpc.auto.Metadata.Builder, com.aizuda.snailjob.common.core.grpc.auto.MetadataOrBuilder> 
        getMetadataFieldBuilder() {
      if (metadataBuilder_ == null) {
        metadataBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.aizuda.snailjob.common.core.grpc.auto.Metadata, com.aizuda.snailjob.common.core.grpc.auto.Metadata.Builder, com.aizuda.snailjob.common.core.grpc.auto.MetadataOrBuilder>(
                getMetadata(),
                getParentForChildren(),
                isClean());
        metadata_ = null;
      }
      return metadataBuilder_;
    }

    private com.google.protobuf.Any body_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Any, com.google.protobuf.Any.Builder, com.google.protobuf.AnyOrBuilder> bodyBuilder_;
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     * @return Whether the body field is set.
     */
    public boolean hasBody() {
      return ((bitField0_ & 0x00000004) != 0);
    }
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     * @return The body.
     */
    public com.google.protobuf.Any getBody() {
      if (bodyBuilder_ == null) {
        return body_ == null ? com.google.protobuf.Any.getDefaultInstance() : body_;
      } else {
        return bodyBuilder_.getMessage();
      }
    }
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     */
    public Builder setBody(com.google.protobuf.Any value) {
      if (bodyBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        body_ = value;
      } else {
        bodyBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     */
    public Builder setBody(
        com.google.protobuf.Any.Builder builderForValue) {
      if (bodyBuilder_ == null) {
        body_ = builderForValue.build();
      } else {
        bodyBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     */
    public Builder mergeBody(com.google.protobuf.Any value) {
      if (bodyBuilder_ == null) {
        if (((bitField0_ & 0x00000004) != 0) &&
          body_ != null &&
          body_ != com.google.protobuf.Any.getDefaultInstance()) {
          getBodyBuilder().mergeFrom(value);
        } else {
          body_ = value;
        }
      } else {
        bodyBuilder_.mergeFrom(value);
      }
      if (body_ != null) {
        bitField0_ |= 0x00000004;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     */
    public Builder clearBody() {
      bitField0_ = (bitField0_ & ~0x00000004);
      body_ = null;
      if (bodyBuilder_ != null) {
        bodyBuilder_.dispose();
        bodyBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     */
    public com.google.protobuf.Any.Builder getBodyBuilder() {
      bitField0_ |= 0x00000004;
      onChanged();
      return getBodyFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     */
    public com.google.protobuf.AnyOrBuilder getBodyOrBuilder() {
      if (bodyBuilder_ != null) {
        return bodyBuilder_.getMessageOrBuilder();
      } else {
        return body_ == null ?
            com.google.protobuf.Any.getDefaultInstance() : body_;
      }
    }
    /**
     * <code>.google.protobuf.Any body = 3;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Any, com.google.protobuf.Any.Builder, com.google.protobuf.AnyOrBuilder> 
        getBodyFieldBuilder() {
      if (bodyBuilder_ == null) {
        bodyBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.google.protobuf.Any, com.google.protobuf.Any.Builder, com.google.protobuf.AnyOrBuilder>(
                getBody(),
                getParentForChildren(),
                isClean());
        body_ = null;
      }
      return bodyBuilder_;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:GrpcSnailJobRequest)
  }

  // @@protoc_insertion_point(class_scope:GrpcSnailJobRequest)
  private static final com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest();
  }

  public static com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GrpcSnailJobRequest>
      PARSER = new com.google.protobuf.AbstractParser<GrpcSnailJobRequest>() {
    @java.lang.Override
    public GrpcSnailJobRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      Builder builder = newBuilder();
      try {
        builder.mergeFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(builder.buildPartial());
      } catch (com.google.protobuf.UninitializedMessageException e) {
        throw e.asInvalidProtocolBufferException().setUnfinishedMessage(builder.buildPartial());
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(e)
            .setUnfinishedMessage(builder.buildPartial());
      }
      return builder.buildPartial();
    }
  };

  public static com.google.protobuf.Parser<GrpcSnailJobRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GrpcSnailJobRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.aizuda.snailjob.common.core.grpc.auto.GrpcSnailJobRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

