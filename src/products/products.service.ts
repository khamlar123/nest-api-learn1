import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRes: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const addProduct = await this.productRes.save(createProductDto);
      return addProduct.id;
    } catch (e) {
      return e.message;
    }
  }

  async findAll(kw: string, ststus: number) {
    try {      
      // const findAllItem = await this.productRes.find({
      //   relations: { category: true, packetType: true },
      //   where: {
      //     name:Like(`%${kw}%`),
      //      desc: Like(`%${kw}%`) 
      //   },
      // });

      const findAllItem =  this.productRes
      .createQueryBuilder('prod')
      .where('prod.name LIKE :kw OR prod.desc LIKE :kw', { kw: `%${kw}%` })
      .andWhere('prod.status = :ststus', { ststus })
      .leftJoinAndSelect('prod.category', 'category')
      .leftJoinAndSelect('prod.packetType', 'packetType')
      .getMany();
      return findAllItem;
    } catch (e) {
      return e.message;
    }
  }

  async findOne(id: number) {
    try {
      const findAllItem = await this.productRes.find({
        relations: { category: true },
        where: { id },
      });
      return findAllItem;
    } catch (e) {
      return e.message;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const updateItem = await this.productRes.update(id, updateProductDto);
      return updateItem.affected > 0 ? 'update done!' : 'update error';
    } catch (e) {
      return e.message;
    }
  }

  async remove(id: number) {
    try {
      return (await this.productRes.delete(id)).affected > 0
        ? 'delete done!'
        : 'delete error';
    } catch (e) {
      return e.message;
    }
  }
}
