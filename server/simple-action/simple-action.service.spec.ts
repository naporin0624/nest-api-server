import { Test, TestingModule } from '@nestjs/testing';
import { SimpleActionService } from './simple-action.service';

describe('SimpleActionService', () => {
  let service: SimpleActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleActionService],
    }).compile();

    service = module.get<SimpleActionService>(SimpleActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
