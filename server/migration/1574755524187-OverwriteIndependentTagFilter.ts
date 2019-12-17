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
            const tagInfoList = await transactionalEntityManager.find(TagInfo, { epc: In(epcList) });        
            await Promise.all(tagInfoList.map(async tagInfo => {
                tagInfo.filterName = tagInfoSeed.find(s => s.epc === tagInfo.epc).filterName;
                await transactionalEntityManager.save(TagInfo, tagInfo);
            }))
        });
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
