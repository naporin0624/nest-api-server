import { Module } from "@nestjs/common";
import { ExperimentV1Service } from "./experiment.v1.service";
import { ExperimentV1Controller } from "./experiment.v1.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagContainer, Tag, TagInfoForLab } from "@/server/entities";
import { WssModule } from "@/server/wss/wss.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Tag, TagContainer, TagInfoForLab]),
    WssModule,
  ],
  providers: [ExperimentV1Service],
  controllers: [ExperimentV1Controller],
  exports: [ExperimentV1Service],
})
export class ExperimentModule {}
