import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { TagContainer } from "./TagContainer.entity";
import { TagInfo } from "./TagInfo.entity";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("varchar")
  tagId: string;

  @Column("int")
  antennaNo: number;

  @Column("float")
  rssi: number;

  @Column("float")
  phase: number;

  @Column("float")
  doppler: number;

  @ManyToOne(() => TagInfo)
  @JoinColumn()
  tagInfo: TagInfo;

  @ManyToOne(
    () => TagContainer,
    tagContainer => tagContainer.tags,
  )
  tagContainer: TagContainer;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
