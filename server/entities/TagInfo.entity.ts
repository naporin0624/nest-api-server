import { ApiModelProperty } from "@nestjs/swagger";
import { InitialDataBase1574368743160 } from "../migration/1574368743160-InitialDataBase";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class TagInfo {
  @ApiModelProperty({
    description: "primary key",
  })
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiModelProperty({ description: "tag id", default: "0000 0000 0000 0000" })
  @Column("varchar", { unique: true })
  epc: string;

  @ApiModelProperty({ description: "Installation location", default: "house" })
  @Column("varchar")
  companyName: string;

  @ApiModelProperty()
  @Column("varchar")
  filterName: string;

  @ApiModelProperty()
  @Column("varchar")
  groupName: string;

  @ApiModelProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiModelProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
