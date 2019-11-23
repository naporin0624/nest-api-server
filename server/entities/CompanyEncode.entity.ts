import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Filter } from "./Filter.entity";
import { Group } from "./Group.entity";

@Entity()
export class CompanyEncode {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("varchar", { unique: true })
  name: string;

  @OneToMany(
    () => Filter,
    filter => filter.companyEncode,
    { onDelete: "CASCADE" },
  )
  filters: Filter[];

  @OneToMany(
    () => Group,
    group => group.companyEncode,
    { onDelete: "CASCADE" },
  )
  groups: Group[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
