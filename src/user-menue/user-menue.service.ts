import { Injectable } from '@nestjs/common';
import { CreateUserMenueDto } from './dto/create-user-menue.dto';
import { UpdateUserMenueDto } from './dto/update-user-menue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMenue } from './entities/user-menue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserMenueService {
  constructor(
    @InjectRepository(UserMenue)
    private userMenuRepository: Repository<UserMenue>,
  ) {}

  async create(createUserMenueDto: CreateUserMenueDto) {
    try {
      return (await this.userMenuRepository.save(createUserMenueDto)).id;
    } catch (e) {
      return e.message;
    }
  }

  findAll() {
    // try {
    //   return this.userMenuRepository
    //     .createQueryBuilder('userMenue')
    //     .leftJoinAndSelect('userMenue.user', 'user')
    //     .leftJoinAndSelect('userMenue.menu', 'menu')
    //     .getMany();
    // } catch (e) {
    //   return e.message;
    // }

    try {
      return this.userMenuRepository.find({
        relations: { user: true, menu: true },
      });
    } catch (e) {
      return e.message;
    }
  }

  findOne(id: number) {
    try {
      return this.userMenuRepository.findOne({
        where: { id },
        relations: { user: true, menu: true },
      });
    } catch (e) {
      return e.message;
    }
  }

  update(id: number, updateUserMenueDto: UpdateUserMenueDto) {
    try {
      return this.userMenuRepository.update(id, updateUserMenueDto);
    } catch (e) {
      return e.message;
    }
  }

  remove(id: number) {
    try {
      return this.userMenuRepository.delete(id);
    } catch (e) {
      return e.message;
    }
  }
}
