import { Module } from '@nestjs/common';
import { PacketTypeService } from './packet-type.service';
import { PacketTypeController } from './packet-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacketType } from './entities/packet-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PacketType])],
  controllers: [PacketTypeController],
  providers: [PacketTypeService],
})
export class PacketTypeModule {}
