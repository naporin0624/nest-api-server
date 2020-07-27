import { Injectable } from "@nestjs/common";

@Injectable()
export class SimpleActionService {
  constructor() {}

  async getAllSimpleAction() {
    return [];
  }
}
