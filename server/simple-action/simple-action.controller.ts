import { Controller, Get } from "@nestjs/common";
import { ApiUseTags, ApiCreatedResponse } from "@nestjs/swagger";
import { SimpleAction } from "../entities/SimpleAction.entity";
import { SimpleActionService } from "./simple-action.service";

@ApiUseTags("simple-action")
@Controller("simple-action")
export class SimpleActionController {
  constructor(private readonly simpleActionService: SimpleActionService) {}

  @Get("v2")
  @ApiCreatedResponse({ type: [SimpleAction] })
  async getAllSimpleAction() {
    return this.simpleActionService.getAllSimpleAction();
  }
}
