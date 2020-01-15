import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TagsSchema } from "./schemas/tags.schema";
import { RfidController } from "./rfid.controller";
import { RfidService } from "./rfid.service";
import { WssModule } from "@/server/wss/wss.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagInfoForLab } from "@/server/entities";
import { ExperimentModule } from "@/server/experiment/experiment.module";
import {
  TagContainer,
  TagInfo,
  Tag,
  CompanyEncode,
  Filter,
  Group,
} from "@/server/entities";

@Module({
  imports: [
    WssModule,
    ExperimentModule,
    MongooseModule.forFeature([{ name: "RfidTags", schema: TagsSchema }]),
    TypeOrmModule.forFeature([
      TagContainer,
      TagInfo,
      Tag,
      CompanyEncode,
      Filter,
      Group,
      TagInfoForLab,
    ]),
  ],
  controllers: [RfidController],
  providers: [RfidService],
  exports: [RfidService],
})
export class RfidModule {}
