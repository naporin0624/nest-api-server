import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/createTags.dto";

import {
  TagContainer,
  Tag,
  CompanyEncode,
  Filter,
  Group,
} from "@/server/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WssGateway } from "@/server/wss/wss.gateway";
import { ExperimentV1Service } from "@/server/experiment/experiment.v1.service";

@Injectable()
export class RfidService {
  private readonly logger = new Logger(RfidService.name);
  constructor(
    @InjectModel("RfidTags") private readonly tagsModel: Model<Tags>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
    @InjectRepository(CompanyEncode)
    private readonly companyEncodeRepository: Repository<CompanyEncode>,
    @InjectRepository(Filter)
    private readonly filterRepository: Repository<Filter>,
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    private readonly gateway: WssGateway,
    private readonly experimentV1Service: ExperimentV1Service,
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

    this.notifyWebSocket(tagContainer);
    return tagContainer;
  }

  async notifyWebSocket(tagContainer: TagContainer) {
    // websocketでinsertを通知
    // this.gateway.wss.emit("add_tags", tagContainer);
    this.gateway.wss.emit(
      "chair_count",
      await this.experimentV1Service.choiceTagTenSecondReadCounter("Chair"),
    );
    this.gateway.wss.emit(
      "floor_count",
      await this.experimentV1Service.choiceTagTenSecondReadCounter("Floor"),
    );
    this.gateway.wss.emit(
      "border_count",
      await this.experimentV1Service.choiceTagTenSecondReadCounter("Border"),
    );
    this.gateway.wss.emit(
      "human_read_result",
      await this.experimentV1Service.choiceTagReadResult("NameTag"),
    );
    this.gateway.wss.emit(
      "wheel_chair_read_result",
      await this.experimentV1Service.choiceTagReadResult("Wheelchair"),
    );
    this.gateway.wss.emit(
      "slipper_read_result",
      await this.experimentV1Service.choiceTagReadResult("Slipper"),
    );
    this.gateway.wss.emit(
      "wear_read_result",
      await this.experimentV1Service.choiceTagReadResult("Waer"),
    );
  }
}
