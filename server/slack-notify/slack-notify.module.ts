import { Module, HttpModule } from "@nestjs/common";
import { SlackNotifyService } from "./slack-notify.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageNotified } from "@/server/entities";

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([MessageNotified])],
  providers: [SlackNotifyService],
  exports: [SlackNotifyService],
})
export class SlackNotifyModule {}
