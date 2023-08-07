import { PartialType } from '@nestjs/mapped-types';
import { CreateCatgoryDto } from './create-catgory.dto';

export class UpdateCatgoryDto extends PartialType(CreateCatgoryDto) {}
