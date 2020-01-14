import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateIndexToTagInfoForLab1578990506690
  implements MigrationInterface {
  name = "CreateIndexToTagInfoForLab1578990506690";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE INDEX `IDX_e3a6a7a8f5ee89c463e9cccddd` ON `tag_info_for_lab` (`name`)",
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "DROP INDEX `IDX_e3a6a7a8f5ee89c463e9cccddd` ON `tag_info_for_lab`",
      undefined,
    );
  }
}
