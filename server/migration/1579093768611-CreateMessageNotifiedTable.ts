import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMessageNotifiedTable1579093768611
  implements MigrationInterface {
  name = "CreateMessageNotifiedTable1579093768611";

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      "CREATE TABLE `message_notified` (`id` int NOT NULL AUTO_INCREMENT, `type` varchar(255) NOT NULL, `message` text NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB",
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE `message_notified`", undefined);
  }
}
