import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.todos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  category: Category;
}
