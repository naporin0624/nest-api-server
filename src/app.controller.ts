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
    const status = this.appService.getStatus(1);
    const client = await MongoClient.connect('mongodb://127.0.0.1/admin', {auth: {
      user: 'root',
      password: 'example',
    }});
    const db = client.db('test');
    const collection = db.collection('hoge');
    await collection.insertOne(req);
    return Response.create({status});
  }
}
