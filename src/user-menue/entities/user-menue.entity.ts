import { Menu } from './../../menu/entities/menu.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserMenue {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @ManyToOne(() => User, (user) => user.userMenue)
  @JoinColumn()
  user: User;
  @Column()
  menuId: number;
  @ManyToOne(() => Menu, (menu) => menu.userMenue)
  @JoinColumn()
  menu: Menu;
}
