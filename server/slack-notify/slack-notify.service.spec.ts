import { Test, TestingModule } from "@nestjs/testing";
import { SlackNotifyService } from "./slack-notify.service";
import { HttpService } from "@nestjs/common";

describe("SlackNotifyService", () => {
  let service: SlackNotifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SlackNotifyService,
        {
          provide: HttpService,
          useValue: {
            post: (url: string, payload: { text: string }) =>
              Promise.resolve(payload.text === "ok"),
          },
        },
      ],
    }).compile();

    service = module.get<SlackNotifyService>(SlackNotifyService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  //it("response ok == true", async () => {
  //expect(await service.postMessage("ok")).toEqual(true);
  //});
  //it("response is not Ok == false", async () => {
  //expect(await service.postMessage("not ok")).toEqual(false);
  //});
});
