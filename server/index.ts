import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { grpcClientOptions } from "./addons/grpc.options";
import { swaggerOptions } from "./addons/swagger.options";
import { NestExpressApplication } from "@nestjs/platform-express";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { TimeoutInterceptor } from "./interceptors/timeout.interceptor";
import compression from "compression";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger:
      process.env.NODE_ENV === "development"
        ? ["debug", "error", "log", "verbose", "warn"]
        : ["warn", "error"],
  });
  app.use(compression());
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup("swagger", app, document);

  app.setGlobalPrefix("api");
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new ErrorInterceptor(),
    new TimeoutInterceptor(),
  );
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap().catch();
