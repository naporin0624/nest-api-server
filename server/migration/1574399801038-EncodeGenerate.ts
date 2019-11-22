import {MigrationInterface, QueryRunner} from "typeorm";

export class EncodeGenerate1574399801038 implements MigrationInterface {
    name = 'EncodeGenerate1574399801038'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `filter` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `filterId` int NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `companyEncodeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `group` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `groupId` int NOT NULL, `filterId` int NOT NULL, `existingNum` int NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `companyEncodeId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `company_encode` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `companyId` int NOT NULL, `phase` int NOT NULL, `doppler` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `filter` ADD CONSTRAINT `FK_c6acf2a35597d9a9c98d9adc785` FOREIGN KEY (`companyEncodeId`) REFERENCES `company_encode`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `group` ADD CONSTRAINT `FK_0229e30e6fc9522aaef4151c801` FOREIGN KEY (`companyEncodeId`) REFERENCES `company_encode`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `group` DROP FOREIGN KEY `FK_0229e30e6fc9522aaef4151c801`", undefined);
        await queryRunner.query("ALTER TABLE `filter` DROP FOREIGN KEY `FK_c6acf2a35597d9a9c98d9adc785`", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `doppler` `doppler` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `phase` `phase` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `tag` CHANGE `rssi` `rssi` float(12) NOT NULL", undefined);
        await queryRunner.query("DROP TABLE `company_encode`", undefined);
        await queryRunner.query("DROP TABLE `group`", undefined);
        await queryRunner.query("DROP TABLE `filter`", undefined);
    }

}
