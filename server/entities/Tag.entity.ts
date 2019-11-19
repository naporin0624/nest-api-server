import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { TagContainer } from "./TagContainer";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("varchar")
  tagId: string;

  @Column("varchar")
  antennaNo: number;

  @Column("int")
  rssi: number;

  @Column("int")
  phase: number;

  @Column("int")
  doppler: number;

  @ManyToOne(() => TagContainer, tagContainer => tagContainer.tags)
  tagContainer: TagContainer;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
