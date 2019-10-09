import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tags } from "./interfaces/tags.interface";
import { CreateTagsDto } from "./dto/createTags.dto";

type MapExclude<T, U> = {
  [K in keyof T]: Exclude<T[K], U>;
};

type RequireOne<T, K extends keyof T = keyof T> = K extends keyof T
  ? PartialRequire<T, K>
  : never;

type PartialRequire<O, K extends keyof O> = {
  [P in K]-?: O[P];
} &
  O;

type OneOptional<T, U extends keyof T> = {
  [K in keyof T]: K extends U ? Partial<T[K]> : T[K];
};

@Injectable()
export class RfidService {
  constructor(
    @InjectModel("RfidTags") private readonly tagsModel: Model<Tags>,
  ) {}

  async findAll() {
    return this.tagsModel.find();
  }

  async create(createTagsDto: CreateTagsDto) {
    const createTags = new this.tagsModel(createTagsDto);
    return createTags.save();
  }

  async findByDelete(rdidID: string) {
    return this.tagsModel.findByIdAndDelete(rdidID);
  }
}
