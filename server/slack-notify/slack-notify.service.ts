import { Injectable, HttpService, Logger } from "@nestjs/common";
import { map } from "rxjs/operators";
import { format } from "date-fns";

@Injectable()
export class SlackNotifyService {
  private readonly logger = new Logger();
  constructor(private readonly httpService: HttpService) {}

  async postMessage(message: string) {
    if (process.env.NODE_ENV === "development") {
      this.logger.debug(message);
      return;
    }

    const resText = await this.httpService
      .post(process.env.SLACK_NOTIFY_URL, {
        text: `[${process.env.NODE_ENV}] - ${format(
          new Date(),
          "yyyy-MM-dd HH:mm ",
        )} ${message}`,
      })
      .pipe(map(x => x.data))
      .toPromise();
    return resText === "ok";
  }
}
