import { Test, TestingModule } from '@nestjs/testing';
import { CounterController } from './counter.controller';

describe('Counter Controller', () => {
  let controller: CounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounterController],
    }).compile();

    controller = module.get<CounterController>(CounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
