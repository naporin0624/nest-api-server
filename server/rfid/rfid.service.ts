import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/createTags.dto";
import { subHours, subMinutes, subDays } from "date-fns";
import { CountTags } from "./interfaces/count.interface";

import { TagContainer, Tag, CompanyEncode, Filter, Group } from "@/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, LessThanOrEqual, MoreThan } from "typeorm";
import { WssGateway } from "@/wss/wss.gateway";
import { TagInfo } from "../entities/TagInfo.entity";
import { Parser, parse } from "json2csv";

@Injectable()
export class RfidService {
  constructor(
    @InjectModel("RfidTags") private readonly tagsModel: Model<Tags>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    @InjectRepository(TagInfo)
    private readonly tagInfoRepository: Repository<TagInfo>,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
    @InjectRepository(CompanyEncode)
    private readonly companyEncodeRepository: Repository<CompanyEncode>,
    @InjectRepository(Filter)
    private readonly filterRepository: Repository<Filter>,
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    private readonly gateway: WssGateway,
  ) {}

  async findRangeDate(end: Date, start: Date) {
    return this.tagRepository.find({
      join: {
        alias: "tag",
        leftJoinAndSelect: {
          tagInfo: "tag.tagInfo",
        },
      },
      where: [
        { createdAt: MoreThan(start) },
        { createdAt: LessThanOrEqual(end) },
      ],
    });
  }

  json2csv(json: Tag[]) {
    const JSON2CSV = new Parser({
      fields: [
        "rssi",
        "doppler",
        "phase",
        "tagInfo.epc",
        "tagInfo.companyName",
        "tagInfo.groupName",
        "tagInfo.filterName",
        "createdAt",
      ],
    });
    return JSON2CSV.parse(json);
  }

  async create(createTagsDto: CreateTagsDto) {
    // mongoへログを保存
    const createTags = new this.tagsModel(createTagsDto);
    createTags.save();

    // MySQLに保存
    const _tagContainer = new TagContainer();
    const tags = await this.tagRepository.create(createTagsDto.tags);
    const tagsAppendInfo = await this.addTagInfoTo(tags);
    _tagContainer.tags = tagsAppendInfo;
    _tagContainer.readTime = createTagsDto.readTime;
    await this.tagRepository.save(tagsAppendInfo);
    const tagContainer = await this.tagContainerRepository.save(_tagContainer);
    this.gateway.wss.emit("add_tags", tagContainer);
    return tagContainer;
  }

  async findByDelete(rfidID: string) {}

  async findAtTimeRange(
    startTime = subHours(new Date(), 1),
    endTime = new Date(),
  ) {}

  async countReadAntennaRangeDate(
    antennaNo: number,
    startTime = subMinutes(new Date(), 1),
    endTime = new Date(),
  ) {}

  async getEncodeMap(companyId: number) {
    const companyEncode = await this.companyEncodeRepository.findOne(companyId);
    const filters = await this.filterRepository.find({
      where: { companyEncodeId: companyId },
    });
    const groups = await this.groupRepository.find({
      where: { companyEncodeId: companyId },
    });
    companyEncode.filters = filters;
    companyEncode.groups = groups;
    return {
      ...companyEncode,
      filters,
      groups,
    };
  }

  private addTagInfoTo(tags: Tag[]) {
    return Promise.all(
      tags.map(async tag => {
        tag.tagInfo = await this.tagInfoRepository.findOne({
          epc: tag.tagId,
        });
        return tag;
      }),
    );
  }
}
