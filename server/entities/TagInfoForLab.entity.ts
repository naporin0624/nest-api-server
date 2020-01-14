import { ApiModelProperty } from "@nestjs/swagger";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from "typeorm";

@Entity()
export class TagInfoForLab {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiModelProperty()
  @Column("varchar", { unique: true })
  epc: string;

  @ApiModelProperty()
  @Index()
  @Column("varchar")
  name: string;

  @ApiModelProperty()
  @Column("varchar")
  environment: string;

  @ApiModelProperty()
  @Column("varchar")
  description: string;

  @ApiModelProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiModelProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
