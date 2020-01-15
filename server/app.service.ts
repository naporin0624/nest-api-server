import { Injectable, Logger } from "@nestjs/common";
import { Interval, Timeout, NestSchedule } from "nest-schedule";
import { SlackNotifyService } from "./slack-notify/slack-notify.service";
import { InjectRepository } from "@nestjs/typeorm";
import { TagContainer } from "./entities";
import { Repository, Between } from "typeorm";
import { subHours } from "date-fns";
import { MessageType, MessageNotified } from "./entities/";

@Injectable()
export class AppService extends NestSchedule {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private readonly slackNotifyService: SlackNotifyService,
    @InjectRepository(TagContainer)
    private readonly tagContainerRepository: Repository<TagContainer>,
    @InjectRepository(MessageNotified)
    private readonly messageNotifiedRepository: Repository<MessageNotified>,
  ) {
    super();
  }

  @Timeout(1000)
  onceJob() {
    this.slackNotifyService.postMessage(
      MessageType.INFO,
      `starting ${process.env.NODE_ENV} server`,
    );
  }

  @Interval(60 * 60 * 1000)
  async intervalJob() {
    const tagContainer = await this.tagContainerRepository.findOne({
      where: { createdAt: Between(subHours(new Date(), 1), new Date()) },
    });

    if (tagContainer) return;

    const notify = await this.messageNotifiedRepository.findOne({
      where: { createdAt: Between(subHours(new Date(), 1.5), new Date()) },
    });
    if (notify.message === "1時間データがきてないよ") return;

    this.slackNotifyService.postMessage(
      MessageType.ERROR,
      "1時間データがきてないよ",
    );
  }
}
