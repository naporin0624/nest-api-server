import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";

import { RfidService } from "./rfid.service";
import { CreateTagsDto } from "./dto/createTags.dto";
import { WssGateway } from "@/server/wss/wss.gateway";

@ApiUseTags("rfid")
@Controller("rfid")
export class RfidController {
  constructor(
    private rfidService: RfidService,
    private readonly gateway: WssGateway,
  ) {}

  @Post("tags")
  @UsePipes(new ValidationPipe())
  async create(@Body() createTagsDto: CreateTagsDto) {
    const response = await this.rfidService.create(createTagsDto);
    this.gateway.wss.emit("add_tags", response);
    return response;
  }
}
