import { ApiModelProperty } from "@nestjs/swagger";

import { IsDefined, IsString } from "class-validator";

export abstract class TagInfoForLabDto {
  @ApiModelProperty()
  @IsDefined()
  @IsString()
  readonly epc: string;

  @ApiModelProperty()
  @IsDefined()
  @IsString()
  readonly environment: string;

  @ApiModelProperty()
  @IsDefined()
  @IsString()
  readonly name: string;

  @ApiModelProperty()
  @IsDefined()
  @IsString()
  readonly description: string;
}
