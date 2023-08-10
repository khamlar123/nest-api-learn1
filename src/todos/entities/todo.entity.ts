import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';

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

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.todos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;
}
