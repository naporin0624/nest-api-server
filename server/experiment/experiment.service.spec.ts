import { Test, TestingModule } from "@nestjs/testing";
import { ExperimentV1Service } from "./experiment.v1.service";
import { TagJoinTagInfoForLab } from "../../types";
import { Tag, TagContainer, TagInfoForLab } from "../entities";
import { getRepositoryToken } from "@nestjs/typeorm";

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

describe("ExperimentService", () => {
  let service: ExperimentV1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ExperimentV1Service>(ExperimentV1Service);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
