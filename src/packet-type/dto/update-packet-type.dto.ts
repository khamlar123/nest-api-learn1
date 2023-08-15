import { PartialType } from '@nestjs/mapped-types';
import { CreatePacketTypeDto } from './create-packet-type.dto';

export class UpdatePacketTypeDto extends PartialType(CreatePacketTypeDto) {}
