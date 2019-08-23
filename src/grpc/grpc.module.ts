import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TagsSchema } from "./schemas/tags.shcema";
import { GrpcRfidController } from "./grpc-rfid.controller";
import { GrpcService } from "./grpc.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "gRPCTags", schema: TagsSchema }]),
  ],
  controllers: [GrpcRfidController],
  providers: [GrpcService],
})
export class GrpcModule {}
