import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import ormConfig from "@/ormconfig.prod";
import { getMetadataArgsStorage } from "typeorm";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { cli, migrations, ...typeOrmConfig } = {
  ...ormConfig,
  entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
};

export const options = typeOrmConfig as TypeOrmModuleOptions;
