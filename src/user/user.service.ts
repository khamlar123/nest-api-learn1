import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return (await this.userRepository.save(createUserDto)).id;
    } catch (e) {
      return e.message;
    }
  }

  async findAll() {
    try {
      return this.userRepository.find({
        relations: { todos: true, userMenue: { menu: true } },
      });
    } catch (e) {
      return e.message;
    }
  }

  async findOne(id: number) {
    try {
      return this.userRepository.findOne({
        where: { id },
        relations: { todos: true, userMenue: { menu: true } },
      });
    } catch (e) {
      return e.message;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updateItem = await this.userRepository.update(id, updateUserDto);
      return updateItem.affected > 0 ? 'update done !' : 'update error !';
    } catch (e) {
      return e.message;
    }
  }

  async remove(id: number) {
    try {
      const deleteItem = await this.userRepository.delete(id);
      return deleteItem.affected > 0 ? 'delete done!' : 'error';
    } catch (e) {
      return e.message;
    }
  }
}
