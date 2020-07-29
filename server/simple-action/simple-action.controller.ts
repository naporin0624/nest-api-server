import { Controller, Get, Post, Body } from "@nestjs/common";
import { ApiUseTags, ApiCreatedResponse } from "@nestjs/swagger";
import { SimpleAction } from "../entities/SimpleAction.entity";
import { SimpleActionService } from "./simple-action.service";
import { SimpleActionRequestDto } from "./dto/SimpleActionRequestDto.dto";

@ApiUseTags("simple-action")
@Controller("simple-action")
export class SimpleActionController {
  constructor(private readonly simpleActionService: SimpleActionService) {}

  @Get("v2")
  @ApiCreatedResponse({ type: [SimpleAction] })
  async getAllSimpleAction() {
    return this.simpleActionService.getAllSimpleAction();
  }

  @Post("v2")
  @ApiCreatedResponse({ type: SimpleAction })
  async createNewSimpleAction(
    @Body() simpleActionRequestDto: SimpleActionRequestDto,
  ) {
    const result = await this.simpleActionService.createSimpleAction(
      simpleActionRequestDto,
    );
    return result;
  }
}
