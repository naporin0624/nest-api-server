import { IsDefined, IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export abstract class TagInfoDto {
  @ApiModelProperty()
  @IsDefined()
  @IsString()
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
