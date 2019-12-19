import { TagInfo } from "./TagInfo.type";

export interface Tag {
  id: number;
  tagId: string;
  antennaNo: number;
  rssi: number;
  phase: number;
  doppler: number;
  tagInfo: TagInfo;
  createdAt: Date;
  updatedAt: Date;
}
