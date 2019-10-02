import { IsDefined, IsString, IsNumber, IsOptional } from "class-validator";

export class Tag {
  @IsDefined()
  @IsString()
  tagId: string;

  @IsDefined()
  @IsNumber()
  antennaNo: number;

  @IsNumber()
  @IsNumber()
  rssi: number;

  @IsDefined()
  @IsNumber()
  phase: number;

  @IsOptional()
  @IsNumber()
  doppler: number;
}
