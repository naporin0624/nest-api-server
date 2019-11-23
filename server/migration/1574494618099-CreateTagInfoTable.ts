import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTagInfoTable1574494618099 implements MigrationInterface {
    name = 'CreateTagInfoTable1574494618099'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `tag_info` (`id` int NOT NULL AUTO_INCREMENT, `epc` varchar(255) NOT NULL, `companyName` varchar(255) NOT NULL, `filterName` varchar(255) NOT NULL, `groupName` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_53e35768ff454fc2513dbb405d` (`epc`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `tag` ADD `tagInfoId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` ADD UNIQUE INDEX `IDX_5b54eb727555293f82d7fda847` (`tagInfoId`)", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float NOT NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_5b54eb727555293f82d7fda847` ON `tag` (`tagInfoId`)", undefined);
        await queryRunner.query("ALTER TABLE `tag` ADD CONSTRAINT `FK_5b54eb727555293f82d7fda847a` FOREIGN KEY (`tagInfoId`) REFERENCES `tag_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` DROP FOREIGN KEY `FK_5b54eb727555293f82d7fda847a`", undefined);
        await queryRunner.query("DROP INDEX `REL_5b54eb727555293f82d7fda847` ON `tag`", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` DROP INDEX `IDX_5b54eb727555293f82d7fda847`", undefined);
        await queryRunner.query("ALTER TABLE `tag` DROP COLUMN `tagInfoId`", undefined);
        await queryRunner.query("DROP INDEX `IDX_53e35768ff454fc2513dbb405d` ON `tag_info`", undefined);
        await queryRunner.query("DROP TABLE `tag_info`", undefined);
    }

}
