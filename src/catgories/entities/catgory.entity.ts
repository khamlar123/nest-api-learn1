import { Product } from 'src/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Catgory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  catName: string;

  @Column()
  parentId: number;

  @OneToMany(() => Product, (product) => product.catgory)
  products: Product[];
}
