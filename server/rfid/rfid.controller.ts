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
import { subHours, format, subMinutes } from "date-fns";
import { WssGateway } from "@/wss/wss.gateway";

@ApiUseTags("rfid")
@Controller("rfid")
export class RfidController {
  constructor(
    private rfidService: RfidService,
    private readonly gateway: WssGateway,
  ) {}

  @Get("tags")
  async findAll(@Res() res: Response) {
    const tagsList = await this.rfidService.findAll();
    return res.status(HttpStatus.OK).json(tagsList);
  }

  @Post("tags")
  @UsePipes(new ValidationPipe())
  async create(@Body() createTagsDto: CreateTagsDto) {
    const response = await this.rfidService.create(createTagsDto);
    this.gateway.wss.emit("add_tags", response);
    return response;
  }

  @Delete("tags/:id")
  @HttpCode(204)
  async findByDelete(@Param("id") id: string) {
    await this.rfidService.findByDelete(id);
  }

  @Get("encode-map/numalab-tag-encode/:companyId")
  async getTagsCorrespondence(@Param("companyId") companyId: number) {
    const response = await this.rfidService.getEncodeMap(companyId);
    return response;
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
    @Query("startTime") startTime?: Date,
    @Query("endTime") endTime?: Date,
  ) {
    const tagsCount = await this.rfidService.countReadAntennaRangeDate(
      parseInt(id, 10),
      startTime,
      endTime,
    );
    return tagsCount;
  }

  @Get("at_time_range")
  @ApiImplicitQuery({
    name: "startTime",
    required: false,
    type: String,
    description: format(subMinutes(new Date(), 1), "yyyy/MM/dd HH:mm:ss"),
  })
  @ApiImplicitQuery({
    name: "endTime",
    required: false,
    type: String,
    description: format(new Date(), "yyyy/MM/dd HH:mm:ss"),
  })
  async atTimeRange(
    @Query("startTime") startTime?: Date,
    @Query("endTime") endTime?: Date,
  ) {
    return this.rfidService.findAtTimeRange(startTime, endTime);
  }
}
