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
  UseFilters,
  Header,
} from "@nestjs/common";
import {
  ApiUseTags,
  ApiImplicitQuery,
  ApiResponse,
  ApiCreatedResponse,
} from "@nestjs/swagger";

import * as json2csv from "json2csv";
import { RfidService } from "./rfid.service";
import { Response } from "express";
import { CreateTagsDto } from "./dto/createTags.dto";
import { subHours, format, subMinutes, subDays, subWeeks } from "date-fns";
import { WssGateway } from "@/server/wss/wss.gateway";

@ApiUseTags("rfid")
@Controller("rfid")
export class RfidController {
  constructor(
    private rfidService: RfidService,
    private readonly gateway: WssGateway,
  ) {}

  @Get("tags/one-day")
  async oneDay(@Res() res: Response) {
    const tagsList = await this.rfidService.findRangeDate(
      new Date(),
      subDays(new Date(), 1),
    );

    res.setHeader("Content-disposition", "attachment; filename=data.csv");
    res.setHeader("Content-Type", "text/csv; charset=UTF-8");
    res.send(this.rfidService.json2csv(tagsList));
  }

  @Get("tags/one-week")
  async oneWeek(@Res() res: Response) {
    const tagsList = await this.rfidService.findRangeDate(
      new Date(),
      subWeeks(new Date(), 1),
    );

    res.setHeader("Content-disposition", "attachment; filename=data.csv");
    res.setHeader("Content-Type", "text/csv; charset=UTF-8");
    res.send(this.rfidService.json2csv(tagsList));
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
