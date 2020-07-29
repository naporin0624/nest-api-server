import { Test, TestingModule } from '@nestjs/testing';
import { SimpleActionController } from './simple-action.controller';

describe('SimpleAction Controller', () => {
  let controller: SimpleActionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimpleActionController],
    }).compile();

    controller = module.get<SimpleActionController>(SimpleActionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
