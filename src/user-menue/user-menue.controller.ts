import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserMenueService } from './user-menue.service';
import { CreateUserMenueDto } from './dto/create-user-menue.dto';
import { UpdateUserMenueDto } from './dto/update-user-menue.dto';

@Controller('user-menue')
export class UserMenueController {
  constructor(private readonly userMenueService: UserMenueService) {}

  @Post()
  create(@Body() createUserMenueDto: CreateUserMenueDto) {
    return this.userMenueService.create(createUserMenueDto);
  }

  @Get()
  findAll() {
    return this.userMenueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userMenueService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserMenueDto: UpdateUserMenueDto,
  ) {
    return this.userMenueService.update(+id, updateUserMenueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userMenueService.remove(+id);
  }
}
