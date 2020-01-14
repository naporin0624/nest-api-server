import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RfidService } from "./rfid/rfid.service";
import { WssGateway } from "./wss/wss.gateway";
import { DatabaseModule } from "./database/database.module";
import { HttpService } from "@nestjs/common";
import { TagInfoService } from "./tag-info/tag-info.service";
import { ExperimentV1Service } from "./experiment/experiment.v1.service";
import { ServeStaticModule } from "./serve-static/serve-static.module";
import { Configuration } from "webpack";
import { getModelToken } from "@nestjs/mongoose";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Tag } from "./rfid/dto/tag.dto";
import { TagContainer, TagInfoForLab, TagInfo } from "./entities";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      imports: [
        ServeStaticModule.forRoot({
          renderPath: "/*",
          webpackConfig: {} as Configuration,
        }),
      ],
      providers: [
        AppService,
        RfidService,
        WssGateway,
        TagInfoService,
        ExperimentV1Service,
        ExperimentV1Service,
        {
          provide: DatabaseModule,
          useValue: {},
        },
        {
          provide: HttpService,
          useValue: {},
        },
        {
          provide: WssGateway,
          useValue: {},
        },
        {
          provide: getModelToken("RfidTags"),
          useValue: {},
        },
        {
          provide: getRepositoryToken(Tag),
          useValue: {},
        },
        {
          provide: getRepositoryToken(TagContainer),
          useValue: {},
        },
        {
          provide: getRepositoryToken(TagInfoForLab),
          useValue: {},
        },
        {
          provide: getRepositoryToken(TagInfo),
          useValue: {},
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.sayHello()).toEqual(expect.any(String));
    });
  });
});
