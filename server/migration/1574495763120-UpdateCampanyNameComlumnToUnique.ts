import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateCampanyNameComlumnToUnique1574495763120 implements MigrationInterface {
    name = 'UpdateCampanyNameComlumnToUnique1574495763120'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_5b54eb727555293f82d7fda847` ON `tag`", undefined);
        await queryRunner.query("ALTER TABLE `company_encode` ADD UNIQUE INDEX `IDX_30e5a16a1f91d25273ce1b9c02` (`name`)", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `company_encode` DROP INDEX `IDX_30e5a16a1f91d25273ce1b9c02`", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_5b54eb727555293f82d7fda847` ON `tag` (`tagInfoId`)", undefined);
    }

}
