import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Delete,
  Param,
  HttpCode,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Query,
} from "@nestjs/common";
import { ApiUseTags, ApiImplicitQuery } from "@nestjs/swagger";

import { RfidService } from "./rfid.service";
import { Response } from "express";
import { CreateTagsDto } from "./dto/createTags.dto";
import { subHours, format } from "date-fns";

@ApiUseTags("rfid")
@Controller("rfid")
export class RfidController {
  constructor(private rfidService: RfidService) {}
  @Get("tags")
  async findAll(@Res() res: Response) {
    const tagsList = await this.rfidService.findAll();
    return res.status(HttpStatus.OK).json(tagsList);
  }

  @Post("tags")
  @UsePipes(new ValidationPipe())
  async create(@Body() createTagsDto: CreateTagsDto) {
    return await this.rfidService.create(createTagsDto);
  }

  @Delete("tags/:id")
  @HttpCode(204)
  async findByDelete(@Param("id") id: string) {
    await this.rfidService.findByDelete(id);
  }

  @Get("antenna/:id")
  @ApiImplicitQuery({
    name: "startTime",
    required: false,
    type: String,
    description: format(subHours(new Date(), 1), "yyyy/MM/dd HH:mm:ss"),
  })
  @ApiImplicitQuery({
    name: "endTime",
    required: false,
    type: String,
    description: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  })
  async findTagsWhereAntenna(
    @Param("id") id: string,
    @Query("startTime") startTime,
    @Query("endTime") endTime,
  ) {
    console.log(new Date(startTime));
    const tagsCount = await this.rfidService.countReadAntennaRangeDate(
      parseInt(id, 10),
      startTime ? new Date(startTime) : subHours(new Date(), 1),
      endTime ? new Date(endTime) : new Date(),
    );
    return tagsCount;
  }
}
