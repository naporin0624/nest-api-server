import { Controller, Get, Logger } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";

import { GrpcMethod } from "@nestjs/microservices";
import { rfid, test } from "@/static/proto/api_schema_pb";
import { RfidService } from "./rfid/rfid.service";
import { DeepRequired } from "ts-essentials";

@ApiUseTags("root")
@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly rfidService: RfidService) {}

  @Get()
  sayHello() {
    return "Hello World";
  }

  @GrpcMethod("TagDataSenderService", "Send")
  async kodemariTags(tagList: DeepRequired<rfid.ITagList>) {
    await this.rfidService.create(tagList);
    return new rfid.Response({ statusCode: 200, message: "ok" });
  }

  @GrpcMethod("TestService", "Send")
  async testGrpcService(req: Required<test.IRequest>) {
    this.logger.debug(req);
    return new test.Response({ vtuber: test.Love.SANA_SAORI.toString() });
  }
}
