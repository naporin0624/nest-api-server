import {
  MigrationInterface,
  QueryRunner,
  getRepository,
  IsNull,
  getManager,
} from "typeorm";
import { Tag, TagInfo } from "@/entities";

export class AppendTagInfoNoInfoTags1574520844950
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const tags = await getRepository(Tag).find({
      tagInfo: IsNull(),
    });
    await getManager().transaction(async transactionEntityManager => {
      const tagInfoRepository = transactionEntityManager.getRepository(TagInfo);
      const tagRepository = transactionEntityManager.getRepository(Tag);
      await Promise.all(
        tags.map(async tag => {
          const tagInfo = await tagInfoRepository.findOne({
            epc: tag.tagId,
          });
          tag.tagInfo = tagInfo;
          return await tagRepository.save(tag);
        }),
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
