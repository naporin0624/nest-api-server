import { Controller, Get, HttpService } from "@nestjs/common";
import { AppService } from "./app.service";
import { GrpcMethod } from "@nestjs/microservices";
import { rfid, test } from "../static/proto/api_schema_pb";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}
  @Get()
  root(): string {
    return "Hello Nest Server";
  }

  @GrpcMethod("TagDataSenderService", "Send")
  async kodemariTags(tagList: rfid.ITagList) {
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
