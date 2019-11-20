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
  export class Filter {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column("varchar")
    name: string;
  
    @Column("int")
    filterId: number;
  
    @Column("varchar")
    description?: string;
  
    @ManyToOne(() => CompanyEncode, companyEncode => companyEncode.filters)
    companyEncode: CompanyEncode;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  