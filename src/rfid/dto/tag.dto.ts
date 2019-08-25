import { IsDefined, IsString, IsNumber } from "class-validator";

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

  @IsDefined()
  @IsNumber()
  doppler: number;
}
