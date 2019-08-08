import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RfidGrpcController } from "./rfid-grpc/rfid-grpc.controller";
import { HelloNestController } from "./hello-nest/hello-nest.controller";

@Module({
  controllers: [AppController, RfidGrpcController, HelloNestController],
  providers: [AppService],
})
export class AppModule {}
