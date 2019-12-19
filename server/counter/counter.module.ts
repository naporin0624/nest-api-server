import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tag } from "@/server/entities";
import { CounterController } from "./counter.controller";
import { CounterService } from "./counter.service";

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [CounterController],
  providers: [CounterService],
})
export class CounterModule {}
