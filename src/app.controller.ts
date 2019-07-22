import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TagDataSender } from './static/schema';
import {MongoClient} from 'mongodb';
import TagList = TagDataSender.TagList;
import Response = TagDataSender.Res;
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('TagDataSender', 'Send')
  async Send(req: TagList): Promise<Response> {
    const status = this.appService.getStatus(req);
    return Response.create({status});
  }
}
