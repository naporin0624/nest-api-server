import { Module, MiddlewareConsumer, HttpModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { MongooseModule } from "@nestjs/mongoose";
import { RfidModule } from "./rfid/rfid.module";

@Module({
  imports: [
    HttpModule,
    // MongooseModule.forRoot("mongodb://mongo.nm.cs.uec.ac.jp:27017/mimamori", {
    //   useNewUrlParser: true,
    //   user: "numalab",
    //   pass: "Numa0Lab",
    // }),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
      {
        useNewUrlParser: true,
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASS,
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
