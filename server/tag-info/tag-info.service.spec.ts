import { Test, TestingModule } from '@nestjs/testing';
import { TagInfoService } from './tag-info.service';

describe('TagInfoService', () => {
  let service: TagInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagInfoService],
    }).compile();

    service = module.get<TagInfoService>(TagInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
