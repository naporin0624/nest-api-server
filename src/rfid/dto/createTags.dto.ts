import { Tag } from "./tag.dto";
import {
  IsDefined,
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

export class CreateTagsDto {
  @IsDefined()
  @IsString()
  readonly readTime: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => Tag)
  readonly tags: Tag[];

  @IsOptional()
  @IsDate()
  readonly createdAt?: Date;
}
