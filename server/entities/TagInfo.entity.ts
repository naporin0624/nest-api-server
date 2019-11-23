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

  @Column("varchar", { unique: true })
  epc: string;

  @Column("varchar")
  companyName: string;

  @Column("varchar")
  filterName: string;

  @Column("varchar")
  groupName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
