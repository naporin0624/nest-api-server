import { Module } from '@nestjs/common';
import { SimpleActionController } from './simple-action.controller';
import { SimpleActionService } from './simple-action.service';

@Module({
  controllers: [SimpleActionController],
  providers: [SimpleActionService]
})
export class SimpleActionModule {}
