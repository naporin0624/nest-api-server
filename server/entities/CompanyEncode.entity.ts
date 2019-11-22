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

  @Column("varchar")
  name: string;

  @Column("int")
  companyId: number;

  @Column("int")
  phase: number;

  @Column("int")
  doppler: number;

  @OneToMany(
    () => Filter,
    filter => filter.companyEncode,
  )
  filters: Filter[];

  @OneToMany(
    () => Group,
    group => group.companyEncode,
  )
  groups: Group[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
