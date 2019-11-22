import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import ormConfig from "@@/ormconfig.prod";

export const options = ormConfig as TypeOrmModuleOptions;
