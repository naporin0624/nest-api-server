import {
    MigrationInterface,
    QueryRunner,
    getRepository,
    getManager,
    In,
  } from "typeorm";
  import { TagInfo } from "@/entities";
  import { tagInfoSeed } from "@/seeds/tagInfo.seed";

export class OverwriteIndependentTagFilter1574755524187 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await getManager().transaction(async transactionalEntityManager => {
            const epcList = tagInfoSeed.map(i => i.epc);
            await transactionalEntityManager.delete(TagInfo, {
              epc: In(epcList),
            });
          });
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
