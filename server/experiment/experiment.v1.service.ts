import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tag, TagContainer, TagInfoForLab } from "@/server/entities";
import { Repository } from "typeorm";
import { subSeconds, subMinutes, addHours } from "date-fns";
import { TagContainerJoinTagInfoForLab, TagJoinTagInfoForLab } from "@/types";

@Injectable()
export class ExperimentV1Service {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
  ) {}

  async findTagData() {
    return (await this.tagRepository
      .createQueryBuilder("tag")
      .innerJoinAndMapOne(
        "tag.tagInfoForLab",
        TagInfoForLab,
        "tagInfoForLab",
        "tag.tagId = tagInfoForLab.epc",
      )
      .where(":start < tag.createdAt", {
        start: addHours(subSeconds(new Date(), 10), 0),
      })
      .getMany()) as TagJoinTagInfoForLab[];
  }

  async humanReadResult() {
    return (await this.tagContainerRepository
      .createQueryBuilder("container")
      .leftJoinAndSelect("container.tags", "tags")
      .innerJoinAndMapOne(
        "tags.tagInfoForLab",
        TagInfoForLab,
        "tagInfoForLab",
        "tags.tagId = tagInfoForLab.epc",
      )
      .where("tagInfoForLab.name like :name", { name: "%NameTag%" })
      .andWhere(":start < container.createdAt", {
        start: addHours(subMinutes(new Date(), 10), 0),
      })
      .getMany()) as TagContainerJoinTagInfoForLab[];
  }

  valueCounter(arr: string[]) {
    let counts: { [key: string]: number } = {};
    arr.forEach(el => (counts[el] ? counts[el]++ : (counts[el] = 1)));
    return counts;
  }
}
