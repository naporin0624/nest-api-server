// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_proto_schema_pb = require('.//schema_pb.js');

function serialize_TagDataSender_Res(arg) {
  if (!(arg instanceof src_proto_schema_pb.Res)) {
    throw new Error('Expected argument of type TagDataSender.Res');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TagDataSender_Res(buffer_arg) {
  return src_proto_schema_pb.Res.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TagDataSender_TagList(arg) {
  if (!(arg instanceof src_proto_schema_pb.TagList)) {
    throw new Error('Expected argument of type TagDataSender.TagList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TagDataSender_TagList(buffer_arg) {
  return src_proto_schema_pb.TagList.deserializeBinary(new Uint8Array(buffer_arg));
}


// HelloRequest を受け取って HelloReply を返すメソッドの定義
var TagDataSenderService = exports.TagDataSenderService = {
  send: {
    path: '/TagDataSender.TagDataSender/Send',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_schema_pb.TagList,
    responseType: src_proto_schema_pb.Res,
    requestSerialize: serialize_TagDataSender_TagList,
    requestDeserialize: deserialize_TagDataSender_TagList,
    responseSerialize: serialize_TagDataSender_Res,
    responseDeserialize: deserialize_TagDataSender_Res,
  },
};

exports.TagDataSenderClient = grpc.makeGenericClientConstructor(TagDataSenderService);
