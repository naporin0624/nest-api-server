import { MigrationInterface, QueryRunner } from "typeorm";

export class simpleAction1595835839800 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TABLE `simple_action` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `userId` int default NULL,`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB",
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE `simple_action`", undefined);
  }
}
