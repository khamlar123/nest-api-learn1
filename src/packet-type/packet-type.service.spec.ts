import { Test, TestingModule } from '@nestjs/testing';
import { PacketTypeService } from './packet-type.service';

describe('PacketTypeService', () => {
  let service: PacketTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacketTypeService],
    }).compile();

    service = module.get<PacketTypeService>(PacketTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
