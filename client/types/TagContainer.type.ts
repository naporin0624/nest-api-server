import { Tag } from "./Tag.type";

export interface TagContainer {
  id: number;
  readTime: string;
  tags: Tag[];
  createdAt: Date;
  updatedAt: Date;
}
