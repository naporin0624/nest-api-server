import { Module, MiddlewareConsumer, HttpModule, Logger } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { MongooseModule } from "@nestjs/mongoose";
import { RfidModule } from "./rfid/rfid.module";
import { WssModule } from "./wss/wss.module";
import { join } from "path";
import { DummyModule } from "./dummy/dummy.module";
import { ServeStaticModule } from "@nestjs/serve-static";


const ServerStaticAndDummyModule = process.env.NODE_ENV === "production" ? ServeStaticModule.forRoot({ rootPath: join(__dirname, "..", "public"), renderPath: "/" }) : DummyModule.forRoot();
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
      {
        useNewUrlParser: true,
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASS,
      },
    ),
    RfidModule,
    WssModule,
    HttpModule,
    ServerStaticAndDummyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/*");
  }
}
