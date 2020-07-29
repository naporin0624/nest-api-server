import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { SimpleAction } from "@/server/entities/SimpleAction.entity";
import { SimpleActionRequestDto } from "./dto/SimpleActionRequestDto.dto";

@Injectable()
export class SimpleActionService {
  constructor(
    @InjectRepository(SimpleAction)
    private readonly simpleActionRepository: Repository<SimpleAction>,
  ) {}

  async getAllSimpleAction() {
    return await this.simpleActionRepository.find();
  }

  async createSimpleAction(simpleActionRequestDto: SimpleActionRequestDto) {
    return await this.simpleActionRepository.save(simpleActionRequestDto);
  }
}
