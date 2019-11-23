import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { TagInfo } from "@/entities";
import { tagInfoSeed } from "@/seeds/tagInfo.seed";

export class TagInfoSeeding1574433839593 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await getRepository(TagInfo).save(tagInfoSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
