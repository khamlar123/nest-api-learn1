import { Test, TestingModule } from '@nestjs/testing';
import { PacketTypeController } from './packet-type.controller';
import { PacketTypeService } from './packet-type.service';

describe('PacketTypeController', () => {
  let controller: PacketTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacketTypeController],
      providers: [PacketTypeService],
    }).compile();

    controller = module.get<PacketTypeController>(PacketTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
