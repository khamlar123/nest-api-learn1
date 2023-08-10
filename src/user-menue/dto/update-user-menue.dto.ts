import { PartialType } from '@nestjs/mapped-types';
import { CreateUserMenueDto } from './create-user-menue.dto';

export class UpdateUserMenueDto extends PartialType(CreateUserMenueDto) {}
