import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly catRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return (await this.catRepository.save(createCategoryDto)).id;
  }

  async findAll() {
    return this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findBy({ id });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.catRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return await this.catRepository.delete(id);
  }
}
