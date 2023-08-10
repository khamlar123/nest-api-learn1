import { Todo } from 'src/todos/entities/todo.entity';
import { UserMenue } from 'src/user-menue/entities/user-menue.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @OneToMany(() => UserMenue, (usermenue) => usermenue.user, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  userMenue: UserMenue;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
