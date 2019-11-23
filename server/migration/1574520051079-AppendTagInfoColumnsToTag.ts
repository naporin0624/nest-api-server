import {MigrationInterface, QueryRunner} from "typeorm";

export class AppendTagInfoColumnsToTag1574520051079 implements MigrationInterface {
    name = 'AppendTagInfoColumnsToTag1574520051079'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` DROP FOREIGN KEY `FK_5b54eb727555293f82d7fda847a`", undefined);
        await queryRunner.query("DROP INDEX `REL_5b54eb727555293f82d7fda847` ON `tag`", undefined);
        await queryRunner.query("ALTER TABLE `tag` DROP COLUMN `tagInfoId`", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` ADD `tagInfoId` int NULL", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_5b54eb727555293f82d7fda847` ON `tag` (`tagInfoId`)", undefined);
        await queryRunner.query("ALTER TABLE `tag` ADD CONSTRAINT `FK_5b54eb727555293f82d7fda847a` FOREIGN KEY (`tagInfoId`) REFERENCES `tag_info`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
