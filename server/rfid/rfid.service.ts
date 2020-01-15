import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/createTags.dto";

import { TagContainer, Tag } from "@/server/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WssGateway } from "@/server/wss/wss.gateway";

@Injectable()
export class RfidService {
  private readonly logger = new Logger(RfidService.name);
  constructor(
    @InjectModel("RfidTags") private readonly tagsModel: Model<Tags>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
    private readonly gateway: WssGateway,
  ) {}

  async create(createTagsDto: CreateTagsDto) {
    // mongoへログを保存
    const createTags = new this.tagsModel(createTagsDto);
    createTags.save();

    // MySQLに保存
    // Tagデータを保存
    const tags = await this.tagRepository.create(createTagsDto.tags);
    await this.tagRepository.save(tags);

    // TagContainerとしてTagsをManyToOneで保存
    const _tagContainer = new TagContainer();
    _tagContainer.tags = tags;
    _tagContainer.readTime = createTagsDto.readTime;
    const tagContainer = await this.tagContainerRepository.save(_tagContainer);

    this.gateway.wss.emit("add_tags", tagContainer);
    return tagContainer;
  }
}
