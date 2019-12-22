import { Controller, Get, Query } from "@nestjs/common";
import { ExperimentV1Service } from "./experiment.v1.service";

@Controller("experiment/v1")
export class ExperimentV1Controller {
  constructor(private readonly experimentV1Service: ExperimentV1Service) {}

  @Get("check_existence_tag")
  async checkExistenceTag(@Query("tag_id") tagId: string) {
    const isExist = !!(await this.experimentV1Service.checkExistenceTag(tagId));
    return { isExist };
  }

  @Get("registered_tags")
  async registeredTags(@Query("environment") environment: string) {
    return this.experimentV1Service.findRegisteredTags(environment);
  }
}
