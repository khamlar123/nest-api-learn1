import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PacketTypeService } from './packet-type.service';
import { CreatePacketTypeDto } from './dto/create-packet-type.dto';
import { UpdatePacketTypeDto } from './dto/update-packet-type.dto';

@Controller('packettype')
export class PacketTypeController {
  constructor(private readonly packetTypeService: PacketTypeService) {}

  @Post()
  create(@Body() createPacketTypeDto: CreatePacketTypeDto) {
    return this.packetTypeService.create(createPacketTypeDto);
  }

  @Get()
  findAll() {
    return this.packetTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packetTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePacketTypeDto: UpdatePacketTypeDto,
  ) {
    return this.packetTypeService.update(+id, updatePacketTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packetTypeService.remove(+id);
  }
}
