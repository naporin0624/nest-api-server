import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/createTags.dto";
import { subHours, subMinutes } from "date-fns";
import { CountTags } from "./interfaces/count.interface";
import { CompanyEncode } from "./interfaces/encode.interface";

const createdAt = new Date(2019, 11, 15);

const updatedAt = new Date(2019, 11, 15);

const groups = [
  // { name: "ex", id: 0, filterIndex: 0, existingNum: 1 },
  { name: "Antenna1", id: 1, filterIndex: 0, existingNum: 2 },
  { name: "Antenna2", id: 2, filterIndex: 0, existingNum: 2 },
  { name: "Antenna3", id: 3, filterIndex: 0, existingNum: 2 },
  { name: "Antenna4", id: 4, filterIndex: 0, existingNum: 2 },
  { name: "Antenna5", id: 5, filterIndex: 0, existingNum: 2 },
  { name: "Table1", id: 6, filterIndex: 0, existingNum: 2 },
  { name: "Table2", id: 7, filterIndex: 0, existingNum: 2 },
  { name: "Chair1", id: 8, filterIndex: 0, existingNum: 2 },
  { name: "Chair2", id: 9, filterIndex: 0, existingNum: 2 },
  { name: "Chair3", id: 10, filterIndex: 0, existingNum: 2 },
  { name: "Chair4", id: 11, filterIndex: 0, existingNum: 2 },
  { name: "Chair5", id: 12, filterIndex: 0, existingNum: 2 },
  { name: "Chair6", id: 13, filterIndex: 0, existingNum: 2 },
  { name: "Chair7", id: 14, filterIndex: 0, existingNum: 2 },
  { name: "Chair8", id: 15, filterIndex: 0, existingNum: 2 },
  { name: "Slipper1", id: 16, filterIndex: 1, existingNum: 2 },
  { name: "Slipper2", id: 17, filterIndex: 1, existingNum: 2 },
  { name: "Slipper3", id: 18, filterIndex: 1, existingNum: 2 },
  { name: "Slipper4", id: 19, filterIndex: 1, existingNum: 2 },
  { name: "Clothes1", id: 20, filterIndex: 1, existingNum: 2 },
  { name: "Clothes2", id: 21, filterIndex: 1, existingNum: 2 },
  { name: "Stick1", id: 22, filterIndex: 1, existingNum: 1 },
  { name: "Stick2", id: 23, filterIndex: 1, existingNum: 1 },
  { name: "Wheelchair1", id: 24, filterIndex: 1, existingNum: 1 },
  { name: "Wheelchair2", id: 25, filterIndex: 1, existingNum: 1 },
  { name: "NameTag1", id: 26, filterIndex: 1, existingNum: 1 },
  { name: "NameTag2", id: 27, filterIndex: 1, existingNum: 1 },
  { name: "NameTag3", id: 28, filterIndex: 1, existingNum: 1 },
  { name: "NameTag4", id: 29, filterIndex: 1, existingNum: 1 },
];

const companyEncode: CompanyEncode = {
  name: "kodemari",
  companyId: 1,
  filters: [
    "depenent",
    "independent",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
  groups: groups,
  createdAt: createdAt,
  updatedAt: updatedAt,
};
import { TagContainer, Tag } from "@/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WssGateway } from "@/wss/wss.gateway";

@Injectable()
export class RfidService {
  constructor(
    @InjectModel("RfidTags") private readonly tagsModel: Model<Tags>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
    private readonly gateway: WssGateway,
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
    tagContainer.readTime = createTagsDto.readTime;
    await this.tagRepository.save(tags);
    this.gateway.wss.emit("add_tags", tagContainer);
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

  async getEncodeMap(companyName: string) {
    if (companyName === "kodemari") {
      return companyEncode;
    } else return { name: "this company encode is not supported" };
  }
}
