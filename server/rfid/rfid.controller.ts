import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from "@nestjs/common";
import { ApiUseTags } from "@nestjs/swagger";

import { RfidService } from "./rfid.service";
import { CreateTagsDto } from "./dto/createTags.dto";

@ApiUseTags("rfid")
@Controller("rfid")
export class RfidController {
  constructor(private readonly rfidService: RfidService) {}

  @Post("tags")
  @HttpCode(204)
  @UsePipes(new ValidationPipe())
  async create(@Body() createTagsDto: CreateTagsDto) {
    this.rfidService.create(createTagsDto);
  }
}
