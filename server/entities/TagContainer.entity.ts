import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from "typeorm";
import { Tag } from "./Tag.entity";

@Entity()
export class TagContainer {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  readTime: string;

  @OneToMany(
    () => Tag,
    tag => tag.tagContainer,
  )
  tags: Tag[];

  @Index()
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
