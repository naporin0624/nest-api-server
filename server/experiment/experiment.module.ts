import { Module } from "@nestjs/common";
import { ExperimentV1Service } from "./experiment.v1.service";
import { ExperimentV1Controller } from "./experiment.v1.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagContainer, Tag } from "@/server/entities";

@Module({
  imports: [TypeOrmModule.forFeature([Tag, TagContainer])],
  providers: [ExperimentV1Service],
  controllers: [ExperimentV1Controller],
})
export class ExperimentModule {}
