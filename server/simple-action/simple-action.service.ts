import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { SimpleAction } from "@/server/entities/SimpleAction.entity";

@Injectable()
export class SimpleActionService {
  constructor(
    @InjectRepository(SimpleAction)
    private readonly simpleActionRepository: Repository<SimpleAction>,
  ) {}

  async getAllSimpleAction() {
    return await this.simpleActionRepository.find();
  }
}
