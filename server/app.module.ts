import {
  Module,
  MiddlewareConsumer,
  CacheModule,
  CacheInterceptor,
} from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ScheduleModule } from "nest-schedule";
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
import { SlackNotifyModule } from "./slack-notify/slack-notify.module";

import config from "@/webpack/client/webpack.config.dev";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagContainer, MessageNotified } from "./entities";
import { SimpleActionModule } from "./simple-action/simple-action.module";

@Module({
  imports: [
    RfidModule,
    WssModule,
    DatabaseModule,
    TagInfoModule,
    ExperimentModule,
    ServeStaticModule.forRoot({
      renderPath: "/*",
      rootPath: join(process.cwd(), "dist", "public"),
      webpackConfig: config as Configuration,
    }),
    CacheModule.register(),
    ScheduleModule.register(),
    SlackNotifyModule,
    TypeOrmModule.forFeature([TagContainer, MessageNotified]),
    SimpleActionModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/*");
  }
}
