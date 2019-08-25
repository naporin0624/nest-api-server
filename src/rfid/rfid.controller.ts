import {
  Controller,
  Get,
  Res,
  Req,
  HttpStatus,
  Delete,
  Param,
  HttpCode,
} from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { TagDataSender } from "./protos/tag_pb";
import { RfidService } from "./rfid.service";
import { Response, Request } from "express";
@Controller("rfid")
export class RfidController {
  constructor(private rfidService: RfidService) {}
  @Get("tags")
  async findAll(@Res() res: Response, @Req() req: Request) {
    const tagsList = await this.rfidService.findAll();
    return res.status(HttpStatus.OK).json(tagsList);
  }

  @Delete("tags/:id")
  @HttpCode(204)
  async findByDelete(@Param("id") id: string) {
    await this.rfidService.findByDelete(id);
  }

  @GrpcMethod("TagDataSenderService", "Send")
  sendStatus(tagList: Required<TagDataSender.ITagList>): TagDataSender.Res {
    this.rfidService.create({
      readTime: tagList.readTime,
      tags: tagList.tags as Array<Required<TagDataSender.TagList.ITag>>,
    });
    const res = new TagDataSender.Res({ status: 1 });
    return res;
  }
}
