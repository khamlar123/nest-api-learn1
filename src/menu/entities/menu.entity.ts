import { UserMenue } from 'src/user-menue/entities/user-menue.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  parentId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => UserMenue, (usermenue) => usermenue.menu, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  userMenue: UserMenue;
}
