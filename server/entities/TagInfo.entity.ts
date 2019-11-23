import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { Tag } from "./Tag.entity";

@Entity()
export class TagInfo {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("varchar")
  epc: string;

  @Column("varchar")
  companyName: string;

  @Column("varchar")
  filterName: string;

  @Column("varchar")
  groupName: string;

  @OneToOne(
    () => Tag,
    tag => tag,
  )
  tag: Tag;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
