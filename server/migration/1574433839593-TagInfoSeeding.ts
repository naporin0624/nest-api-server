import { getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { TagInfo } from "../entities";
import { TagInfoSeed } from "../seeds/tagInfo.seed"

export class TagInfoSeeding1574433839593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await getRepository(TagInfo).save(TagInfoSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
