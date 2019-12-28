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
    @InjectRepository(TagInfoForLab)
    private readonly tagInfoForLabRepository: Repository<TagInfoForLab>,
  ) {}

  async choiceTagTenSecondReadCounter(name: string) {
    const data = (await this.tagRepository
      .createQueryBuilder("tag")
      .innerJoinAndMapOne(
        "tag.tagInfoForLab",
        TagInfoForLab,
        "tagInfoForLab",
        "tag.tagId = tagInfoForLab.epc",
      )
      .where("tagInfoForLab.name like :name", { name: `${name}%` })
      .andWhere(":start < tag.createdAt", {
        start: addHours(subSeconds(new Date(), 10), 0),
      })
      .getMany()) as TagJoinTagInfoForLab[];

    const antennaList = [...new Set(data.map(t => t.antennaNo))].sort();
    const counter = antennaList.map(a => ({
      name: `antenna${a}`,
      ...this.valueCounter(
        data.filter(t => t.antennaNo === a).map(t => t.tagInfoForLab.name),
      ),
    }));

    return counter;
  }

  async choiceTagReadResult(name: string) {
    return (await this.tagContainerRepository
      .createQueryBuilder("container")
      .leftJoinAndSelect("container.tags", "tags")
      .innerJoinAndMapOne(
        "tags.tagInfoForLab",
        TagInfoForLab,
        "tagInfoForLab",
        "tags.tagId = tagInfoForLab.epc",
      )
      .where("tagInfoForLab.name like :name", { name: `%${name}%` })
      .andWhere(":start < container.createdAt", {
        start: subSeconds(new Date(), 30),
      })
      .getMany()) as TagContainerJoinTagInfoForLab[];
  }

  async checkExistenceTag(tagId: string) {
    return await this.tagRepository
      .createQueryBuilder("tag")
      .where("tag.tagId = :tagId", { tagId })
      .andWhere(":start < tag.createdAt", { start: subMinutes(new Date(), 5) })
      .orderBy("tag.createdAt", "DESC")
      .limit(1)
      .getOne();
  }

  async findRegisteredTags(environment: string) {
    return await this.tagInfoForLabRepository.find({ where: { environment } });
  }

  valueCounter(arr: string[]) {
    let counts: { [key: string]: number } = {};
    arr.forEach(el => (counts[el] ? counts[el]++ : (counts[el] = 1)));
    return counts;
  }
}
