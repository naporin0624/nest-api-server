import {
  IsDefined,
  IsString,
  IsDate,
  ValidateNested,
  IsOptional,
} from "class-validator";

interface Tag {
  tagId: string;
  antennaNo: number;
  rssi: number;
  phase: number;
  doppler: number;
}

export class CreateTagsDto {
  @IsDefined()
  @IsString()
  readonly readTime: string;

  @IsDefined()
  @ValidateNested()
  readonly tags: Tag[];

  @IsOptional()
  @IsDate()
  readonly createdAt?: Date;
}
