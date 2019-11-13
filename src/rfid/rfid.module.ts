import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TagsSchema } from "./schemas/tags.schema";
import { RfidController } from "./rfid.controller";
import { RfidService } from "./rfid.service";
import { WssModule } from "@/wss/wss.module";

@Module({
  imports: [
    WssModule,
    MongooseModule.forFeature([{ name: "RfidTags", schema: TagsSchema }]),
  ],
  controllers: [RfidController],
  providers: [RfidService],
  exports: [RfidService],
})
export class RfidModule {}
