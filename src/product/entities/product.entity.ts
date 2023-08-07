import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Catgory } from '../../catgories/entities/catgory.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  desc: string;

  @Column()
  price: number;

  @Column()
  flag: number;

  @Column()
  status: number;

  @Column()
  catgoryId: number;

  @OneToOne(() => Catgory, (catgory) => catgory.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  catgory: Catgory;
}
