import { Injectable } from '@nestjs/common';
import { TagDataSender } from './static/schema';
import TagList = TagDataSender.TagList;
import * as fluentLogger from 'fluent-logger/lib';
fluentLogger.configure('service', {
  host: '',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000, // 10 minutes
});
@Injectable()
export class AppService {
  getStatus(req: TagList): number {
    try {
      fluentLogger.emit('taglist', req);
      return 0;
    } catch (e) {
      return 0;
    }
  }
}
