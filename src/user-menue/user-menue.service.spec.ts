import { Test, TestingModule } from '@nestjs/testing';
import { UserMenueService } from './user-menue.service';

describe('UserMenueService', () => {
  let service: UserMenueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMenueService],
    }).compile();

    service = module.get<UserMenueService>(UserMenueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
