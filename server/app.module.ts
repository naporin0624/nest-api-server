import { Module, MiddlewareConsumer, HttpModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { RfidModule } from "./rfid/rfid.module";
import { WssModule } from "./wss/wss.module";
import { DatabaseModule } from "./database/database.module";
import { TagInfoModule } from "./tag-info/tag-info.module";
import { ExperimentModule } from "./experiment/experiment.module";
import { ServeStaticModule } from "./serve-static/serve-static.module";
import { join } from "path";
import { Configuration } from "webpack";

import config from "@/webpack/client/webpack.config.dev";
@Module({
  imports: [
    RfidModule,
    WssModule,
    HttpModule,
    DatabaseModule,
    TagInfoModule,
    ExperimentModule,
    ServeStaticModule.forRoot({
      renderPath: "/",
      rootPath: join(process.cwd(), "dist", "public"),
      webpackConfig: config as Configuration,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/*");
  }
}
