import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TaglistSchema } from "./schemas/taglist.shema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "kodemari_rfid", schema: TaglistSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class CatsModule {}
