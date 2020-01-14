import { ServeStaticModuleOptions } from "@nestjs/serve-static";
import { Configuration } from "webpack";

export interface ServeStaticOptions extends ServeStaticModuleOptions {
  webpackConfig: Configuration;
}
