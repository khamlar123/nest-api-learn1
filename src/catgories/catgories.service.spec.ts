import { Test, TestingModule } from '@nestjs/testing';
import { CatgoriesService } from './catgories.service';

describe('CatgoriesService', () => {
  let service: CatgoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatgoriesService],
    }).compile();

    service = module.get<CatgoriesService>(CatgoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
