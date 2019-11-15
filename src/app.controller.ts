import { Controller, HttpService, Get } from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";

import { AppService } from "./app.service";
import { GrpcMethod } from "@nestjs/microservices";
import { rfid, test } from "static/proto/api_schema_pb";

@ApiUseTags("root")
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  sayHello() {
    return "Hello World";
  }

  @GrpcMethod("TagDataSenderService", "Send")
  async kodemariTags(tagList: Required<rfid.ITagList>) {
    await this.httpService
      .post("http://localhost:3000/rfid/tags/", tagList)
      .toPromise();
    return new rfid.Response({ statusCode: 200, message: "ok" });
  }

  @GrpcMethod("TestService", "Send")
  async testGrpcService(req: Required<test.IRequest>) {
    console.log(req);
    return new test.Response({ vtuber: test.Love.SANA_SAORI.toString() });
  }
}
