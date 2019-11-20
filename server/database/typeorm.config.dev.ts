import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Tag, TagContainer } from "@/entities";
import ormConfig from "../../ormconfig.json";

const options: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: parseInt(process.env.MYSQL_PORT || "3308"),
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "nest-api-database",
  entities: [Tag, TagContainer],
  synchronize: false,
  ...ormConfig,
};

export = options;
