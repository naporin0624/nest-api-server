import { Module } from "@nestjs/common";
import { TagInfoController } from "./tag-info.controller";
import { TagInfoService } from "./tag-info.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagInfo, TagInfoForLab } from "@/server/entities";

@Module({
  imports: [TypeOrmModule.forFeature([TagInfo, TagInfoForLab])],
  controllers: [TagInfoController],
  providers: [TagInfoService],
})
export class TagInfoModule {}
