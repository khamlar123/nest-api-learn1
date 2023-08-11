import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    try {
      return await this.todoRepository.save(createTodoDto);
    } catch (e) {
      return e.message;
    }
  }

  async findAll() {
    try {
      const item = await this.todoRepository
        .createQueryBuilder('todo')
        .leftJoinAndSelect('todo.category', 'category')
        .leftJoinAndSelect('todo.user', 'user')
        .getMany();
      return item;
    } catch (e) {
      return e.message;
    }
  }

  async findOne(id: number) {
    try {
      const item = await this.todoRepository
        .createQueryBuilder('todo')
        .leftJoinAndSelect('todo.category', 'category')
        .leftJoinAndSelect('todo.user', 'user')
        .where('todo.id = :id', { id })
        .getOne();
      return item;
    } catch (e) {
      return e.message;
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      return await this.todoRepository.update(id, updateTodoDto);
    } catch (e) {
      return e.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.todoRepository.delete(id);
    } catch (e) {
      return e.message;
    }
  }
}
