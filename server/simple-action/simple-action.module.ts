import { Module } from "@nestjs/common";
import { SimpleActionController } from "./simple-action.controller";
import { SimpleActionService } from "./simple-action.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SimpleAction } from "@/server/entities/";

@Module({
  imports: [TypeOrmModule.forFeature([SimpleAction])],
  controllers: [SimpleActionController],
  providers: [SimpleActionService],
})
export class SimpleActionModule {}
