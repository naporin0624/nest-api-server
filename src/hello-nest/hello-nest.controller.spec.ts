import { Test, TestingModule } from '@nestjs/testing';
import { HelloNestController } from './hello-nest.controller';

describe('HelloNest Controller', () => {
  let controller: HelloNestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloNestController],
    }).compile();

    controller = module.get<HelloNestController>(HelloNestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
