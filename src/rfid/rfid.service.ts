import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/create-tags.dto";
import * as moment from "moment";

@Injectable()
export class RfidService {
  constructor(
    @InjectModel("RfidTags") private readonly tagsModel: Model<Tags>,
  ) {}

  async findAll(): Promise<Tags[]> {
    return await this.tagsModel.find();
  }

  async playground() {
    const today = moment();
    return await this.tagsModel
      .find()
      .where("createdAt")
      .gte(today.startOf("day").toDate())
      .lte(today.endOf("day").toDate());
  }

  async create(createTagsDto: CreateTagsDto): Promise<Tags> {
    const createTags = new this.tagsModel(createTagsDto);
    return await createTags.save();
  }

  async findByDelete(rdidID: string) {
    return await this.tagsModel.findByIdAndDelete(rdidID);
  }
}
