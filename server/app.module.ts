import { Module, MiddlewareConsumer, HttpModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { RfidModule } from "./rfid/rfid.module";
import { WssModule } from "./wss/wss.module";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";
import { DatabaseModule } from "./database/database.module";
import { TagInfoModule } from './tag-info/tag-info.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
    RfidModule,
    WssModule,
    HttpModule,
    DatabaseModule,
    TagInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/*");
  }
}
