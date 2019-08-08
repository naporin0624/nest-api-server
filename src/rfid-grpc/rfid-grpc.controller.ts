import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { TagList, Res } from "../protos/schema_pb";

@Controller("rfid-grpc")
export class RfidGrpcController {
  @GrpcMethod()
  postMongo(data: TagList): Res {
    const res = new Res();
    res.setStatus(1);
    return res;
  }
}
