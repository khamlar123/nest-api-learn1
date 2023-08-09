import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Todo } from '../../todos/entities/todo.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  parentId: number;

  @OneToMany(() => Todo, (todo) => todo.category)
  @JoinTable()
  todos: Todo[];
}
