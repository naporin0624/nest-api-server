import { Test, TestingModule } from "@nestjs/testing";
import { TagInfoController } from "./tag-info.controller";
import { TagInfoDto } from "./dto/tagInfo.dto";
import { TagInfo } from "../entities";
import { TagInfoService } from "./tag-info.service";
import { TagInfoModule } from "./tag-info.module";
import { getRepositoryToken } from "@nestjs/typeorm";

class DummyTagInfoService {
  async createNewTagInfoRecord(tagInfoDto: TagInfoDto): Promise<TagInfo> {
    return {
      ...tagInfoDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
describe("TagInfo Controller", () => {
  const tagInfos: TagInfo[] = [];
  let controller: TagInfoController;
  let tagInfoService: TagInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagInfoController],
      providers: [
        TagInfoService,
        {
          provide: getRepositoryToken(TagInfo),
          useValue: {
            save: (tagInfo: TagInfo): TagInfo => {
              const a = {
                ...tagInfo,
                id: tagInfos.length,
                createdAt: new Date(),
                updatedAt: new Date(),
              };
              tagInfos.push(a);
              return a;
            },
          },
        },
      ],
    })
      .overrideProvider(TagInfoService)
      .useClass(DummyTagInfoService)
      .compile();

    controller = module.get<TagInfoController>(TagInfoController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("root post endpoint", () => {
    const createTagDto: TagInfoDto = {
      epc: "",
      companyName: "",
      filterName: "",
      groupName: "",
    };
    it("validate type", async () => {
      expect(await controller.createNewTagInfoRecord(createTagDto)).toBe({
        ...createTagDto,
      });
    });
  });
});
