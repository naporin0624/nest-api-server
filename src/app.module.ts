import { Module, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GrpcRfidController } from "./grpc/grpc-rfid.controller";
import { LoggerMiddleware } from "./middleware/logger.middleware";

@Module({
  controllers: [AppController, GrpcRfidController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/*");
  }
}
