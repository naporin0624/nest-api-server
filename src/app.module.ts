import { Module, MiddlewareConsumer, HttpModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { MongooseModule } from "@nestjs/mongoose";
import { RfidModule } from "./rfid/rfid.module";

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot(
      "mongodb://numalab:Numa0Lab@mongo.nm.cs.uec.ac.jp/mimamori",
      {
        useNewUrlPrser: true,
        port: 27017,
        authenticationDatabase: "admin",
      },
    ),
    RfidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/*");
  }
}
