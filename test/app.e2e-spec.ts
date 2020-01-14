/* eslint-disable no-undef */
import { Test, TestingModule } from "@nestjs/testing";
import request from "supertest";
import { INestApplication, HttpService } from "@nestjs/common";
import { AppController } from "../server/app.controller";
import { ServeStaticModule } from "../server/serve-static/serve-static.module";
import { Configuration } from "webpack";
import { AppService } from "../server/app.service";
import { RfidService } from "../server/rfid/rfid.service";
import { WssGateway } from "../server/wss/wss.gateway";
import { TagInfoService } from "../server/tag-info/tag-info.service";
import { ExperimentV1Service } from "../server/experiment/experiment.v1.service";
import { DatabaseModule } from "../server/database/database.module";
import { getModelToken } from "@nestjs/mongoose";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Tag } from "../server/rfid/dto/tag.dto";
import { TagContainer, TagInfoForLab, TagInfo } from "../server/entities";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
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

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World");
  });
});
