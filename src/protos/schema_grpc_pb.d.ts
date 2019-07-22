// package: TagDataSender
// file: src/protos/schemas.protos

/* tslint:disable */

import * as grpc from "grpc";
import * as src_proto_schema_pb from ".//schema_pb";

interface ITagDataSenderService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    send: ITagDataSenderService_ISend;
}

interface ITagDataSenderService_ISend extends grpc.MethodDefinition<src_proto_schema_pb.TagList, src_proto_schema_pb.Res> {
    path: string; // "/TagDataSender.TagDataSender/Send"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<src_proto_schema_pb.TagList>;
    requestDeserialize: grpc.deserialize<src_proto_schema_pb.TagList>;
    responseSerialize: grpc.serialize<src_proto_schema_pb.Res>;
    responseDeserialize: grpc.deserialize<src_proto_schema_pb.Res>;
}

export const TagDataSenderService: ITagDataSenderService;

export interface ITagDataSenderServer {
    send: grpc.handleUnaryCall<src_proto_schema_pb.TagList, src_proto_schema_pb.Res>;
}

export interface ITagDataSenderClient {
    send(request: src_proto_schema_pb.TagList, callback: (error: grpc.ServiceError | null, response: src_proto_schema_pb.Res) => void): grpc.ClientUnaryCall;
    send(request: src_proto_schema_pb.TagList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_schema_pb.Res) => void): grpc.ClientUnaryCall;
    send(request: src_proto_schema_pb.TagList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_schema_pb.Res) => void): grpc.ClientUnaryCall;
}

export class TagDataSenderClient extends grpc.Client implements ITagDataSenderClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public send(request: src_proto_schema_pb.TagList, callback: (error: grpc.ServiceError | null, response: src_proto_schema_pb.Res) => void): grpc.ClientUnaryCall;
    public send(request: src_proto_schema_pb.TagList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_schema_pb.Res) => void): grpc.ClientUnaryCall;
    public send(request: src_proto_schema_pb.TagList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_schema_pb.Res) => void): grpc.ClientUnaryCall;
}
