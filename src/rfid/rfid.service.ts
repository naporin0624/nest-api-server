import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/createTags.dto";
import { subHours } from "date-fns";

@Injectable()
export class RfidService {
  constructor(
    @InjectModel("RfidTags") private readonly tagsModel: Model<Tags>,
  ) {}

  async findAll() {
    return this.tagsModel
      .find()
      .where("createdAt")
      .gte(subHours(new Date(), 1))
      .lt(new Date());
  }

  async create(createTagsDto: CreateTagsDto) {
    const createTags = new this.tagsModel(createTagsDto);
    return createTags.save();
  }

  async findByDelete(rdidID: string) {
    return this.tagsModel.findByIdAndDelete(rdidID);
  }

  async countReadAntennaRangeDate(
    antennaNo: number,
    startTime: Date,
    endTime: Date,
  ) {
    return this.tagsModel.aggregate([
      {
        $unwind: "$tags",
      },
      {
        $match: {
          "tags.antennaNo": antennaNo,
          createdAt: {
            $gte: startTime,
            $lt: endTime,
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          readTime: {
            $first: "$readTime",
          },
          readCount: {
            $sum: 1,
          },
          createdAt: {
            $first: "$createdAt",
          },
          // tags: {
          //   $push: {
          //     tags: "$tags",
          //   },
          // },
        },
      },
      {
        $sort: {
          createdAt: 1,
        },
      },
    ]);
  }
}
