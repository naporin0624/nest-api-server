import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tag } from "@/server/entities";
import { Repository } from "typeorm";
import { subSeconds } from "date-fns";

@Injectable()
export class CounterService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
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
  valueCounter(arr: string[]) {
    let counts: { [key: string]: number } = {};
    arr.forEach(el => (!!counts[el] ? counts[el]++ : (counts[el] = 1)));
    return counts;
  }
}
