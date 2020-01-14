import { Test, TestingModule } from "@nestjs/testing";
import { TagInfoService } from "./tag-info.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { TagInfoForLab, TagInfo } from "../entities";

describe("TagInfoService", () => {
  let service: TagInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TagInfoService,
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

    service = module.get<TagInfoService>(TagInfoService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
