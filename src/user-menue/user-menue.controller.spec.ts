import { Test, TestingModule } from '@nestjs/testing';
import { UserMenueController } from './user-menue.controller';
import { UserMenueService } from './user-menue.service';

describe('UserMenueController', () => {
  let controller: UserMenueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMenueController],
      providers: [UserMenueService],
    }).compile();

    controller = module.get<UserMenueController>(UserMenueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
