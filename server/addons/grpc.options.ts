import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:${5000}`,
    package: "api",
    protoPath: join(process.cwd(), "static/proto/api_service.proto"),
  },
};
