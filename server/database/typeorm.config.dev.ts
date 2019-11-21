import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import ormConfig from "@@/ormconfig.dev.js";

const options = ormConfig as TypeOrmModuleOptions;

export = options;
