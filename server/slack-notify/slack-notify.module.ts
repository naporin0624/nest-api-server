import { Module, HttpModule } from "@nestjs/common";
import { SlackNotifyService } from "./slack-notify.service";

@Module({
  imports: [HttpModule],
  providers: [SlackNotifyService],
  exports: [SlackNotifyService],
})
export class SlackNotifyModule {}
