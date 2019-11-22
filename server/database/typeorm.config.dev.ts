import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import ormConfig from "@@/ormconfig.dev.js";

export const options = ormConfig as TypeOrmModuleOptions;
