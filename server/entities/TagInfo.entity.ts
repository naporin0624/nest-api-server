import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

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
