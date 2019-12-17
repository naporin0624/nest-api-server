import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TagInfoService } from "./tag-info.service";
import { TagInfoDto } from "./dto/tagInfo.dto";
import { TagInfo, TagInfoForLab } from "@/entities";
import {
  ApiUseTags,
  ApiResponse,
  ApiImplicitBody,
  ApiCreatedResponse,
} from "@nestjs/swagger";
import { TagInfoForLabDto } from "./dto/tagInfoForLab.dto";

@ApiUseTags("tag-info")
@Controller("tag-info")
export class TagInfoController {
  constructor(private readonly tagInfoService: TagInfoService) {}

  @Post("v1")
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({
    description: "tag info has been successfully created",
    type: TagInfo,
  })
  async createNewTagInfoRecord(@Body() tagInfoDto: TagInfoDto) {
    return await this.tagInfoService.createTagInfo(tagInfoDto);
  }

  @Post("v2")
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({ type: TagInfoForLab })
  async createNewTagInfoForLabRecord(@Body() tagInfoLabDto: TagInfoForLabDto) {
    return await this.tagInfoService.createTagInfoForLab(tagInfoLabDto);
  }
}
