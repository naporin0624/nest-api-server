export class TagContainer {
  id?: number;
  readTime: string;
  tags: Tag[];
  createdAt: Date;
  updatedAt: Date;
}

class Tag {
  id?: number;
  tagId: string;
  antennaNo: number;
  rssi: number;
  phase: number;
  doppler: number;
  createdAt: Date;
  updatedAt: Date;
}
