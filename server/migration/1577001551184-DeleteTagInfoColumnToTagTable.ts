import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteTagInfoColumnToTagTable1577001551184
  implements MigrationInterface {
  name = "DeleteTagInfoColumnToTagTable1577001551184";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `tag` DROP FOREIGN KEY `FK_5b54eb727555293f82d7fda847a`",
      undefined,
    );
    await queryRunner.query(
      "ALTER TABLE `tag` DROP FOREIGN KEY `FK_f074f1d545542fb0ea49a36811a`",
      undefined,
    );
    await queryRunner.query(
      "ALTER TABLE `tag` DROP COLUMN `tagInfoId`",
      undefined,
    );
    await queryRunner.query(
      "ALTER TABLE `tag` DROP COLUMN `tagInfoForLabId`",
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `tag` ADD `tagInfoForLabId` int NULL",
      undefined,
    );
    await queryRunner.query(
      "ALTER TABLE `tag` ADD `tagInfoId` int NULL",
      undefined,
    );
    await queryRunner.query(
      "ALTER TABLE `tag` ADD CONSTRAINT `FK_f074f1d545542fb0ea49a36811a` FOREIGN KEY (`tagInfoForLabId`) REFERENCES `tag_info_for_lab`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined,
    );
    await queryRunner.query(
      "ALTER TABLE `tag` ADD CONSTRAINT `FK_5b54eb727555293f82d7fda847a` FOREIGN KEY (`tagInfoId`) REFERENCES `tag_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined,
    );
  }
}
