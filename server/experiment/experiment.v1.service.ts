import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tag, TagContainer } from "@/server/entities";
import { Repository } from "typeorm";
import { subSeconds, subMinutes, addHours } from "date-fns";

@Injectable()
export class ExperimentV1Service {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
  ) {}

  async findTagData() {
    return await this.tagRepository
      .createQueryBuilder("tag")
      .where(":start < tag.createdAt", {
        start: addHours(subSeconds(new Date(), 10), 9),
      })
      .innerJoinAndSelect("tag.tagInfoForLab", "tag_info")
      .getMany();
  }

  async humanReadResult() {
    return this.tagContainerRepository
      .createQueryBuilder("container")
      .leftJoinAndSelect("container.tags", "tags")
      .leftJoinAndSelect("tags.tagInfoForLab", "tagInfoForLab")
      .where("tagInfoForLab.name like :name", { name: "%NameTag%" })
      .where(":start < container.createdAt", {
        start: addHours(subMinutes(new Date(), 10), 9),
      })
      .getMany();
  }

  valueCounter(arr: string[]) {
    let counts: { [key: string]: number } = {};
    arr.forEach(el => (counts[el] ? counts[el]++ : (counts[el] = 1)));
    return counts;
  }
}
