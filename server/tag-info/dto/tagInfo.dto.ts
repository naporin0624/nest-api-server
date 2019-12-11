import { IsDefined, IsString, Length } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export abstract class TagInfoDto {
  @ApiModelProperty()
  @IsDefined()
  @IsString()
  @Length(29)
  readonly epc: string;

  @ApiModelProperty()
  @IsDefined()
  @IsString()
  readonly companyName: string;

  @ApiModelProperty()
  @IsDefined()
  @IsString()
  readonly filterName: string;

  @ApiModelProperty()
  @IsDefined()
  @IsString()
  readonly groupName: string;
}
