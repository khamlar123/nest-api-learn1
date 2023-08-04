import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private cmyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const x = await this.cmyRepository.save(createCompanyDto);
    return x.id;
  }

  async findAll() {
    const filterItem = await this.cmyRepository.find();
    return filterItem;
  }

  async findOne(id: number) {
    return await this.cmyRepository.findOneBy({ id });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const udateItem = await this.cmyRepository.update(id, updateCompanyDto);
    return udateItem.affected > 0 ? 'update done' : 'update failed';
  }

  async remove(id: number) {
    return await this.cmyRepository.delete(id);
  }
}
