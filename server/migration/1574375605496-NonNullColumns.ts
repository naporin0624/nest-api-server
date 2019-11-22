import {MigrationInterface, QueryRunner} from "typeorm";

export class NonNullColumns1574375605496 implements MigrationInterface {
    name = 'NonNullColumns1574375605496'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float(12) NOT NULL", undefined);
    }

}
