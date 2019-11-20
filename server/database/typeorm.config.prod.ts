import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Tag, TagContainer } from "@/entities";
import ormConfig from "../../ormconfig.json";

const options: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "nest-api-database",
  entities: [Tag, TagContainer],
  synchronize: false,
  ...ormConfig,
};

export = options;
