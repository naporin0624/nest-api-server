import { IsDefined, IsString, IsNumber, IsOptional } from "class-validator";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class Tag {
  @ApiModelProperty({ example: "hoghogehoge" })
  @IsDefined()
  @IsString()
  tagId: string;

  @ApiModelProperty()
  @IsDefined()
  @IsNumber()
  antennaNo: number;

  @ApiModelProperty()
  @IsNumber()
  @IsNumber()
  rssi: number;

  @ApiModelProperty()
  @IsDefined()
  @IsNumber()
  phase: number;

  @ApiModelPropertyOptional()
  @IsOptional()
  @IsNumber()
  doppler: number;
}
