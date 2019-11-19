import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/createTags.dto";
import { subHours, subMinutes } from "date-fns";
import { CountTags } from "./interfaces/count.interface";
import { TagContainer, Tag } from "@/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RfidService {
  constructor(
    @InjectModel("RfidTags") private readonly tagsModel: Model<Tags>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
  ) {}

  async findAll() {
    return this.tagContainerRepository.find({ relations: ["tags"] });
  }

  async create(createTagsDto: CreateTagsDto) {
    const createTags = new this.tagsModel(createTagsDto);
    createTags.save();
    const tagContainer = new TagContainer();
    const tags = await this.tagRepository.create(createTagsDto.tags);
    tagContainer.tags = tags;
    await this.tagRepository.save(tags);
    return this.tagContainerRepository.save(tagContainer);
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
}
