import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToOne(() => Category, (category) => category.todos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  category: Category;
}
