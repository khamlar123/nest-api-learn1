import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatgoriesService } from './catgories.service';
import { CreateCatgoryDto } from './dto/create-catgory.dto';
import { UpdateCatgoryDto } from './dto/update-catgory.dto';

@Controller('catgories')
export class CatgoriesController {
  constructor(private readonly catgoriesService: CatgoriesService) {}

  @Post()
  create(@Body() createCatgoryDto: CreateCatgoryDto) {
    return this.catgoriesService.create(createCatgoryDto);
  }

  @Get()
  findAll() {
    return this.catgoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catgoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatgoryDto: UpdateCatgoryDto) {
    return this.catgoriesService.update(+id, updateCatgoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catgoriesService.remove(+id);
  }
}
