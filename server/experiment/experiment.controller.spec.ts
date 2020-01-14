import { Test, TestingModule } from "@nestjs/testing";
import { ExperimentV1Controller } from "./experiment.v1.controller";
import { ExperimentV1Service } from "./experiment.v1.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Tag, TagContainer, TagInfoForLab } from "../entities";
import { TagJoinTagInfoForLab } from "../../types/";

class mockTagRepository {
  createQueryBuilder(table: string) {
    return this;
  }

  innerJoinAndMapOne(
    table: string,
    entity: Function,
    alias: string,
    condition: string,
  ) {
    return this;
  }

  where(condition: string, options: { name: string }) {
    return this;
  }

  andWhere(condition: string, options: { start: Date }) {
    return this;
  }

  orderBy(columns: string, order: string) {
    return this;
  }

  limit(n: number) {
    return this;
  }

  getMany(): TagJoinTagInfoForLab[] {
    return [];
  }

  getOne(): Promise<Tag | undefined> {
    return Promise.resolve(undefined);
  }
}
describe("Experiment Controller", () => {
  let controller: ExperimentV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperimentV1Controller],
      providers: [
        ExperimentV1Service,
        {
          provide: getRepositoryToken(Tag),
          useValue: new mockTagRepository(),
        },
        {
          provide: getRepositoryToken(TagContainer),
          useValue: {},
        },
        {
          provide: getRepositoryToken(TagInfoForLab),
          useValue: {
            find: ({ where: { environment } }) => [],
          } as {
            find: (payload: {
              where: { environment: string };
            }) => TagInfoForLab[];
          },
        },
      ],
    }).compile();

    controller = module.get<ExperimentV1Controller>(ExperimentV1Controller);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
  it("checkExistenceTag", async () => {
    expect(await controller.checkExistenceTag("")).toEqual({
      isExist: expect.any(Boolean),
    });
  });
  it("registeredTags", async () => {
    expect(await controller.registeredTags("")).toBeDefined();
  });
});
