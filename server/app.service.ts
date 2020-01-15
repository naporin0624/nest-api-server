import { Injectable, Logger } from "@nestjs/common";
import { Cron, Interval, Timeout, NestSchedule } from "nest-schedule";
import { SlackNotifyService } from "./slack-notify/slack-notify.service";
import { InjectRepository } from "@nestjs/typeorm";
import { TagContainer } from "./entities";
import { Repository, Between } from "typeorm";
import { subHours } from "date-fns";

@Injectable()
export class AppService extends NestSchedule {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private readonly slackNotifyService: SlackNotifyService,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
  ) {
    super();
  }

  @Timeout(1000)
  onceJob() {
    this.slackNotifyService.postMessage(
      `starting ${process.env.NODE_ENV} server`,
    );
  }

  @Interval(60 * 60 * 1000)
  async intervalJob() {
    const tagContainer = await this.tagContainerRepository.findOne({
      where: { createdAt: Between(subHours(new Date(), 1), new Date()) },
    });

    if (tagContainer) return;

    this.slackNotifyService.postMessage("1時間データがきてないよ");
  }
}
