import { Controller, Get } from "@nestjs/common";
import { ExperimentV1Service } from "./experiment.v1.service";

@Controller("experiment/v1")
export class ExperimentV1Controller {
  constructor(private readonly experimentV1Service: ExperimentV1Service) {}
  @Get("object_count")
  async tenSecondReadCounter() {
    const tags = await this.experimentV1Service.findTagData();
    const antennaList = [...new Set(tags.map(t => t.antennaNo))].sort();

    return antennaList.map(a => ({
      name: `antenna${a}`,
      ...this.experimentV1Service.valueCounter(
        tags.filter(t => t.antennaNo === a).map(t => t.tagInfoForLab.name),
      ),
    }));
  }

  @Get("human_data")
  async humanReadResult() {
    return this.experimentV1Service.humanReadResult();
  }
}
