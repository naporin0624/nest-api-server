import { Document } from "mongoose";

interface Tag {
  tagId: string;
  antennaNo: number;
  rssi: number;
  phase: number;
  doppler: number;
}

export interface Tags extends Document {
  readTime: string;
  tags: Tag[];
  createdAt: Date;
}
