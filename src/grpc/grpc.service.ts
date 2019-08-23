import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/create-tags.dto";

@Injectable()
export class GrpcService {
  constructor(
    @InjectModel("gRPCTags") private readonly tagsModel: Model<Tags>,
  ) {}

  async findAll(): Promise<Tags[]> {
    return await this.tagsModel.find().exec();
  }

  async create(createTagsDto: CreateTagsDto): Promise<Tags> {
    const createTags = new this.tagsModel(createTagsDto);
    return await createTags.save();
  }
}
