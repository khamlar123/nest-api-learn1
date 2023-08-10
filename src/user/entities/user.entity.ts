import { Todo } from 'src/todos/entities/todo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  @JoinTable()
  todos: Todo[];
}
