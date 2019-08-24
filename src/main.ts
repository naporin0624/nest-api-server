import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { grpcClientOptions } from "./microservices/grpc/grpc.options";
import { swaggerOptions } from "./addons/swagger.options";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(3000);
}
bootstrap().catch();
