import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { TagDataSender } from "./protos/tag_pb";
import Res = TagDataSender.Res;

@Controller("/grpc/")
export class GrpcRfidController {
  @GrpcMethod("TagDataSenderService", "Send")
  sendStatus(tagList: TagDataSender.ITagList): Res {
    console.log(tagList);
    const res = new Res({ status: 1 });
    return res;
  }
}
