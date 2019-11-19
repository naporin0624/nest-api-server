import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { Tag } from "./Tag.entity";

@Entity()
export class TagContainer {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  readTime: string;

  @OneToMany(() => Tag, tag => tag.tagContainer)
  tags: Tag[];
}
