import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tag, TagContainer } from "@/server/entities";
import { Repository } from "typeorm";
import { subSeconds, subMinutes } from "date-fns";

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
      .where(":start < tag.createdAt AND tag.createdAt <= :end", {
        start: subSeconds(new Date(), 10),
        end: new Date(),
      })
      .innerJoinAndSelect("tag.tagInfoForLab", "tag_info")
      .getMany();
  }

  async humanReadResult() {
    return await this.tagContainerRepository
      .createQueryBuilder("container")
      .where(":start < container.createdAt and container.createdAt <= :end", {
        start: subMinutes(new Date(), 10),
        end: new Date(),
      })
      .leftJoinAndSelect("container.tags", "tags")
      .leftJoinAndSelect("tags.tagInfoForLab", "tagInfoForLab")
      .where("tagInfoForLab.name like :name", { name: "%NameTag%" })
      .getMany();
  }

  valueCounter(arr: string[]) {
    let counts: { [key: string]: number } = {};
    arr.forEach(el => (!!counts[el] ? counts[el]++ : (counts[el] = 1)));
    return counts;
  }
}
