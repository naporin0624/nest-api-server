import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { TagInfo, TagInfoForLab } from "@/server/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { TagInfoDto } from "./dto/tagInfo.dto";
import { TagInfoForLabDto } from "./dto/tagInfoForLab.dto";

@Injectable()
export class TagInfoService {
  constructor(
    @InjectRepository(TagInfo)
    private readonly tagInfoRepository: Repository<TagInfo>,
    @InjectRepository(TagInfoForLab)
    private readonly tagInfoForLabRepository: Repository<TagInfoForLab>,
  ) {}

  async findAllTagInfoForLab() {
    return await this.tagInfoForLabRepository.find();
  }

  async createTagInfo(tagInfoDto: TagInfoDto) {
    return await this.tagInfoRepository.save(tagInfoDto);
  }

  async createTagInfoForLab(tagInfoForLabDto: TagInfoForLabDto) {
    return await this.tagInfoForLabRepository.save(tagInfoForLabDto);
  }
}
