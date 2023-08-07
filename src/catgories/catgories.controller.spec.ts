import { Test, TestingModule } from '@nestjs/testing';
import { CatgoriesController } from './catgories.controller';
import { CatgoriesService } from './catgories.service';

describe('CatgoriesController', () => {
  let controller: CatgoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatgoriesController],
      providers: [CatgoriesService],
    }).compile();

    controller = module.get<CatgoriesController>(CatgoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
