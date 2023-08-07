import { Injectable } from '@nestjs/common';
import { CreateCatgoryDto } from './dto/create-catgory.dto';
import { UpdateCatgoryDto } from './dto/update-catgory.dto';

@Injectable()
export class CatgoriesService {
  create(createCatgoryDto: CreateCatgoryDto) {
    return 'This action adds a new catgory';
  }

  findAll() {
    return `This action returns all catgories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catgory`;
  }

  update(id: number, updateCatgoryDto: UpdateCatgoryDto) {
    return `This action updates a #${id} catgory`;
  }

  remove(id: number) {
    return `This action removes a #${id} catgory`;
  }
}
