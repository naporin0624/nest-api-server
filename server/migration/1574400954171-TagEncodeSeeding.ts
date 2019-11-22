import { getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { FilterSeed } from "../seeds/filter.seed";
import { CompanyEncodeSeed } from "../seeds/companyEncode.seed";
import { GroupSeed } from "../seeds/group.seed";
import { Filter, Group, CompanyEncode } from "../entities";

export class TagEncodeSeeding1574400954171 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const filters = await getRepository(Filter).save(FilterSeed);
    const groups = await getRepository(Group).save(GroupSeed);
    const companyEncodeSeed: any = CompanyEncodeSeed;
    companyEncodeSeed.filters = filters;
    companyEncodeSeed.groups = groups;
    await getRepository(CompanyEncode).save(companyEncodeSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }
}
