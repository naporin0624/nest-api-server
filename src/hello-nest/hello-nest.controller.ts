import { Controller, Get } from "@nestjs/common";

@Controller("hello-nest")
export class HelloNestController {
  @Get()
  index(): string {
    return "Hello Nest Server";
  }
}
