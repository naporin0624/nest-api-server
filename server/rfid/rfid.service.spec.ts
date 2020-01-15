import { Test, TestingModule } from "@nestjs/testing";
import { RfidService } from "./rfid.service";
import { TagsSchema } from "./schemas/tags.schema";
import { getModelToken } from "@nestjs/mongoose";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Tag, TagContainer } from "../../server/entities";
import { WssGateway } from "../wss/wss.gateway";
import { ExperimentV1Service } from "../experiment/experiment.v1.service";
import { TagInfoForLab } from "../entities/TagInfoForLab.entity";

describe("RfidService", () => {
  let service: RfidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RfidService,
        ExperimentV1Service,
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
      ],
    }).compile();

    service = module.get<RfidService>(RfidService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
