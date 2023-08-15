import { Injectable } from '@nestjs/common';
import { CreatePacketTypeDto } from './dto/create-packet-type.dto';
import { UpdatePacketTypeDto } from './dto/update-packet-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PacketType } from './entities/packet-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacketTypeService {
  constructor(
    @InjectRepository(PacketType) private packetTypeRes: Repository<PacketType>,
  ) {}

  async create(createPacketTypeDto: CreatePacketTypeDto) {
    try {
      const addPacketType = await this.packetTypeRes.save(createPacketTypeDto);
      return addPacketType.id;
    } catch (e) {
      return e.message;
    }
  }

  async findAll() {
    try {
      const finAllItem = await this.packetTypeRes.find();
      return finAllItem;
    } catch (e) {
      return e.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.packetTypeRes.findOneBy({ id });
    } catch (e) {
      return e.message;
    }
  }

  async update(id: number, updatePacketTypeDto: UpdatePacketTypeDto) {
    try {
      const updateItem = await this.packetTypeRes.update(
        id,
        updatePacketTypeDto,
      );

      return updateItem.affected > 0 ? 'update done!' : 'update error!';
    } catch (e) {
      return e.message;
    }
  }

  async remove(id: number) {
    try {
      const removeItem = await this.packetTypeRes.delete(id);
      return removeItem.affected > 0 ? 'remove done!' : 'remove err!';
    } catch (e) {
      return e.message;
    }
  }
}
