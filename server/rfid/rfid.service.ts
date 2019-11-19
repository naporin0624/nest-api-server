import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags, NumalabTagEncode } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/createTags.dto";
import { subHours, subMinutes } from "date-fns";
import { CountTags } from "./interfaces/count.interface";
import { json } from "body-parser";

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
    return createTags;
  }

  async findByDelete(rfidID: string) {
    return this.tagsModel.findByIdAndDelete(rfidID);
  }


  async findAtTimeRange(
    startTime = subHours(new Date(), 1),
    endTime = new Date(),
  ) {
    return this.tagsModel
      .find()
      .where("createdAt")
      .gte(startTime)
      .lt(endTime);
  }

  async countReadAntennaRangeDate(
    antennaNo: number,
    startTime = subMinutes(new Date(), 1),
    endTime = new Date(),
  ): Promise<CountTags[]> {
    return this.tagsModel.aggregate([
      {
        $unwind: "$tags",
      },
      {
        $match: {
          createdAt: {
            $gte: startTime,
            $lt: endTime,
          },
          "tags.antennaNo": antennaNo,
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

  async getEncodeMap(companyName: string) {
    return {};
  }
}
