import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTagInfoForLabTable1576568027004 implements MigrationInterface {
    name = 'CreateTagInfoForLabTable1576568027004'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `tag_info_for_lab` (`id` int NOT NULL AUTO_INCREMENT, `epc` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `environment` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_3cd9c9401a849dad25c7607038` (`epc`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `tag` ADD `tagInfoForLabId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` ADD CONSTRAINT `FK_f074f1d545542fb0ea49a36811a` FOREIGN KEY (`tagInfoForLabId`) REFERENCES `tag_info_for_lab`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` DROP FOREIGN KEY `FK_f074f1d545542fb0ea49a36811a`", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` DROP COLUMN `tagInfoForLabId`", undefined);
        await queryRunner.query("DROP INDEX `IDX_3cd9c9401a849dad25c7607038` ON `tag_info_for_lab`", undefined);
        await queryRunner.query("DROP TABLE `tag_info_for_lab`", undefined);
    }

}
