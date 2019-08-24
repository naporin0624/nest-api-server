interface Tag {
  tagId: string;
  antennaNo: number;
  rssi: number;
  phase: number;
  doppler: number;
}

export class CreateTagsDto {
  readonly readTime: string;
  readonly tags: Tag[];
  readonly createdAt?: Date;
}
