import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Tag } from "./Tag.entity";

@Entity()
export class TagContainer {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToMany(type => Tag, tag => tag.tagContainer)
  tags: Tag[];
}
