import { join } from "path";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Tag, TagContainer } from "@/entities";

export const options: TypeOrmModuleOptions = {
  type: "sqlite",
  database: join(__dirname, "..", "db", "development.sqlite3"),
  synchronize: true,
  entities: [Tag, TagContainer],
};
