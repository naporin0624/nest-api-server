import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import ormConfig from "@@/ormconfig.prod";

const options = ormConfig as TypeOrmModuleOptions;

export = options;
