import { Controller, Get } from "@nestjs/common";
import { CounterService } from "./counter.service";

@Controller("counter")
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get()
  async tenSecondReadCounter() {
    const tags = await this.counterService.findTagData();

    return this.counterService.valueCounter(
      tags.map(tag => tag.tagInfoForLab.name),
    );
  }
}
