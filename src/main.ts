import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { grpcClientOptions } from "./microservices/grpc/grpc.options";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
  const options = new DocumentBuilder()
    .setTitle("test")
    .setDescription("test api description")
    .setVersion("1.0")
    .addTag("rfid")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap().catch();
