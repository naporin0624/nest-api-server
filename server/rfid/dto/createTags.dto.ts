import { Tag } from "./tag.dto";
import {
  IsDefined,
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

import { ApiModelProperty } from "@nestjs/swagger";
export class CreateTagsDto {
  @ApiModelProperty({ example: new Date().toDateString() })
  @IsDefined()
  @IsString()
  readonly readTime: string;

  @ApiModelProperty({ type: Tag, isArray: true })
  @IsDefined()
  @ValidateNested()
  @Type(() => Tag)
  readonly tags: Tag[];

  @IsOptional()
  @IsDate()
  readonly createdAt?: Date;
}
