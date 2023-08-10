import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    public menuRepository: Repository<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    try {
      return (await this.menuRepository.save(createMenuDto)).id;
    } catch (e) {
      return e.message;
    }
  }

  async findAll() {
    try {
      return await this.menuRepository.find();
    } catch (e) {
      return e.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.menuRepository.findBy({ id });
    } catch (e) {
      return e.message;
    }
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    try {
      return await this.menuRepository.update(id, updateMenuDto);
    } catch (e) {
      return e.message;
    }
  }

  remove(id: number) {
    try {
      this.menuRepository.delete(id);
    } catch (e) {
      return e.message;
    }
  }
}
