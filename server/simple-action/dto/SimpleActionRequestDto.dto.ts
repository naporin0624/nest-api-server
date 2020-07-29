import { ApiModelProperty } from "@nestjs/swagger";

import { IsDefined, IsString, IsNumber } from "class-validator";

export abstract class SimpleActionRequestDto {
  @ApiModelProperty()
  @IsDefined()
  @IsString()
  readonly name: string;

  @ApiModelProperty()
  @IsDefined()
  @IsNumber()
  readonly userId: number;
}
