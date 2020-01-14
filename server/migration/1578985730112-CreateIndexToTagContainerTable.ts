import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateIndexToTagContainerTable1578985730112
  implements MigrationInterface {
  name = "CreateIndexToTagContainerTable1578985730112";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE INDEX `IDX_a29aa53808b39b570da792c3f2` ON `tag_container` (`createdAt`)",
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "DROP INDEX `IDX_a29aa53808b39b570da792c3f2` ON `tag_container`",
      undefined,
    );
  }
}
