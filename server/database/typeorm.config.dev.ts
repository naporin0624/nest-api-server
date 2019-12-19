import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import ormConfig from "@/ormconfig.dev";

export const options = ormConfig as TypeOrmModuleOptions;
