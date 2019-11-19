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

export interface NumalabTagEncode {
  companies: CompanyEncode[];
}

interface CompanyEncode {
  name: string;
  bit: number;
  filters: string[];
  groups: Group[];
  createdAt: Date;
  updatedAt: Date;
}

interface Group {
  name: string;
  bit: number;
  existingNum: number;
}
