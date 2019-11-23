import { MigrationInterface, QueryRunner, getManager, IsNull } from "typeorm";
import { Tag } from "@/entities/Tag.entity";
import { TagInfo } from "../entities/TagInfo.entity";

export class AppendTagInfoNoInfoTags1574495917152
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await getManager().transaction(async transactionalEntityManager => {
      const tags = await transactionalEntityManager.find(Tag, {
        tagInfo: IsNull(),
      });
      tags.forEach(async tag => {
        const tagInfo = await transactionalEntityManager.findOne(TagInfo, {
          epc: tag.tagId,
        });
        tag.tagInfo = tagInfo;
        await transactionalEntityManager.save(Tag, tag);
      });
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
