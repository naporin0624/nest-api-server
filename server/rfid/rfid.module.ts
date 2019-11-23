import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TagsSchema } from "./schemas/tags.schema";
import { RfidController } from "./rfid.controller";
import { RfidService } from "./rfid.service";
import { WssModule } from "@/wss/wss.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  TagContainer,
  TagInfo,
  Tag,
  CompanyEncode,
  Filter,
  Group,
} from "@/entities";

@Module({
  imports: [
    WssModule,
    MongooseModule.forFeature([{ name: "RfidTags", schema: TagsSchema }]),
    TypeOrmModule.forFeature([
      TagContainer,
      TagInfo,
      Tag,
      CompanyEncode,
      Filter,
      Group,
    ]),
  ],
  controllers: [RfidController],
  providers: [RfidService],
  exports: [RfidService],
})
export class RfidModule {}
