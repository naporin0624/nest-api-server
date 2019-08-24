import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TagsSchema } from "./schemas/tags.shcema";
import { RfidController } from "./rfid.controller";
import { RfidService } from "./rfid.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "RfidTags", schema: TagsSchema }]),
  ],
  controllers: [RfidController],
  providers: [RfidService],
})
export class RfidModule {}
