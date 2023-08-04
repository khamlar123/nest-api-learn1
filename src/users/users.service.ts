import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const saveDate = await this.userRepository.save(createUserDto);
    return saveDate.id;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userRepository.update(id, updateUserDto);
    return updateUser.affected > 0 ? 'update done' : 'update failed';
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
