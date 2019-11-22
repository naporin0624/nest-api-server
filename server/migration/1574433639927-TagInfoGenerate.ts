import {MigrationInterface, QueryRunner} from "typeorm";

export class TagInfoGenerate1574433639927 implements MigrationInterface {
    name = 'TagInfoGenerate1574433639927'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `tag_info` (`id` int NOT NULL AUTO_INCREMENT, `epc` varchar(255) NOT NULL, `companyName` varchar(255) NOT NULL, `filterName` varchar(255) NOT NULL, `groupName` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float(12) NOT NULL", undefined);
        await queryRunner.query("DROP TABLE `tag_info`", undefined);
    }

}
