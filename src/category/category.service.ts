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
    try {
      return (await this.catRepository.save(createCategoryDto)).id;
    } catch (e) {
      return e.message;
    }
  }

  async findAll() {
    try {
      const item = await this.catRepository
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.todos', 'todo')
        .getMany();
      return item;
    } catch (e) {
      return e.message;
    }
  }

  async findOne(id: number) {
    try {
      const item = await this.catRepository
        .createQueryBuilder('category')
        .leftJoinAndSelect('category.todos', 'todo')
        .where('category.id = :id', { id })
        .getOne();
      return item;
    } catch (e) {
      return e.message;
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      return await this.catRepository.update(id, updateCategoryDto);
    } catch (e) {
      return e.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.catRepository.delete(id);
    } catch (e) {
      return e.message;
    }
  }
}
