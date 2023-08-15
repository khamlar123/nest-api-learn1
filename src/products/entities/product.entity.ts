import { Category } from 'src/category/entities/category.entity';
import { PacketType } from 'src/packet-type/entities/packet-type.entity';
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
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  flag: string;

  @Column()
  status: number;

  @Column()
  categoryId: number;

  @Column()
  price: number;

  @Column()
  srp: number;

  @Column()
  qty: number;

  @Column()
  packetTypeId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.product, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  category: Category;

  @ManyToOne(() => PacketType, (packetType) => packetType.product, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  packetType: PacketType;
}
