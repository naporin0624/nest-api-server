import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTagInfoColumnToTagTable1574520774870 implements MigrationInterface {
    name = 'AddTagInfoColumnToTagTable1574520774870'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` ADD `tagInfoId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `company_encode` ADD UNIQUE INDEX `IDX_30e5a16a1f91d25273ce1b9c02` (`name`)", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` ADD CONSTRAINT `FK_5b54eb727555293f82d7fda847a` FOREIGN KEY (`tagInfoId`) REFERENCES `tag_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` DROP FOREIGN KEY `FK_5b54eb727555293f82d7fda847a`", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `company_encode` DROP INDEX `IDX_30e5a16a1f91d25273ce1b9c02`", undefined);
        await queryRunner.query("ALTER TABLE `tag` DROP COLUMN `tagInfoId`", undefined);
    }

}
