import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyEncode } from "./CompanyEncode.entity";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("varchar")
  name: string;

  @Column("int")
  groupId: number;

  @Column("int")
  filterId: number;

  @Column("int")
  existingNum: number;

  @Column("varchar")
  description?: string;

  @ManyToOne(() => CompanyEncode, companyEncode => companyEncode.groups)
  companyEncode: CompanyEncode;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
