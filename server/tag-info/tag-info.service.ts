import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { TagInfo } from "@/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { TagInfoDto } from "./dto/tagInfo.dto";

@Injectable()
export class TagInfoService {
  constructor(
    @InjectRepository(TagInfo)
    private readonly tagInfoRepository: Repository<TagInfo>,
  ) {}

  async createTagInfo(tagInfoDto: TagInfoDto) {
    return await this.tagInfoRepository.save(tagInfoDto);
  }
}
