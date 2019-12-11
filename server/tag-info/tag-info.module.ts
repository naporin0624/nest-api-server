import { Module } from "@nestjs/common";
import { TagInfoController } from "./tag-info.controller";
import { TagInfoService } from "./tag-info.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagInfo } from "@/entities";

@Module({
  imports: [TypeOrmModule.forFeature([TagInfo])],
  controllers: [TagInfoController],
  providers: [TagInfoService],
})
export class TagInfoModule {}
