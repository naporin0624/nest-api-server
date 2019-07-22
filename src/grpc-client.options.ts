import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
const port = 5000;
export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:${port}`,
    package: 'TagDataSender',
    protoPath: join(__dirname, './protos/schema.proto'),
  },
};
