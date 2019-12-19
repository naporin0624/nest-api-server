import {
  MigrationInterface,
  QueryRunner,
  getRepository,
  getManager,
  In,
} from "typeorm";
import { TagInfo } from "@/server/entities";
import { tagInfoSeed } from "@/server/seeds/tagInfo.seed";

export class TagInfoSeeding1574494652653 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await getRepository(TagInfo).save(tagInfoSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await getManager().transaction(async transactionalEntityManager => {
      const epcList = tagInfoSeed.map(i => i.epc);
      await transactionalEntityManager.delete(TagInfo, {
        epc: In(epcList),
      });
    });
  }
}
