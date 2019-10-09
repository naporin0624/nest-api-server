import { ClientOptions, Transport } from "@nestjs/microservices";
const port = 5000;

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:${port}`,
    package: "api",
    protoPath: "static/proto/api_service.proto",
  },
};
