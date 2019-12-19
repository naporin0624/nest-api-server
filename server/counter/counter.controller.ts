import { Controller, Get } from "@nestjs/common";
import { CounterService } from "./counter.service";

@Controller("counter")
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get()
  async tenSecondReadCounter() {
    const tags = await this.counterService.findTagData();
    const antennaList = [...new Set(tags.map(t => t.antennaNo))].sort();

    return antennaList.map(a => ({
      [`antenna${a}`]: this.counterService.valueCounter(
        tags.filter(t => t.antennaNo === a).map(t => t.tagInfoForLab.name),
      ),
    }));
  }
}
