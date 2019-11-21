import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialDataBase1574368743160 implements MigrationInterface {
  name = "InitialDataBase1574368743160";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TABLE `tag_container` (`id` int NOT NULL AUTO_INCREMENT, `readTime` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB",
      undefined,
    );
    await queryRunner.query(
      "CREATE TABLE `tag` (`id` int NOT NULL AUTO_INCREMENT, `tagId` varchar(255) NOT NULL, `antennaNo` int NOT NULL, `rssi` float NOT NULL, `phase` float NOT NULL, `doppler` float NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `tagContainerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB",
      undefined,
    );
    await queryRunner.query(
      "ALTER TABLE `tag` ADD CONSTRAINT `FK_a7bd62276dce48d687362da7e93` FOREIGN KEY (`tagContainerId`) REFERENCES `tag_container`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "ALTER TABLE `tag` DROP FOREIGN KEY `FK_a7bd62276dce48d687362da7e93`",
      undefined,
    );
    await queryRunner.query("DROP TABLE `tag`", undefined);
    await queryRunner.query("DROP TABLE `tag_container`", undefined);
  }
}
