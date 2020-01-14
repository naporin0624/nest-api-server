import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { grpcClientOptions } from "./addons/grpc.options";
import { swaggerOptions } from "./addons/swagger.options";
import { NestExpressApplication } from "@nestjs/platform-express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "@/webpack/client/webpack.config.dev";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { TimeoutInterceptor } from "./interceptors/timeout.interceptor";
import { Logger } from "@nestjs/common";

declare const module: any;

function webpackDevServer(app: NestExpressApplication): void {
  if (process.env.NODE_ENV === "development") {
    config.entry.unshift(
      "webpack-hot-middleware/client?reload=true&timeout=1000",
    );
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(config);

    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: { colors: true },
      }),
    );

    app.use(
      webpackHotMiddleware(compiler, {
        log: Logger.debug,
      }),
    );
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  webpackDevServer(app);
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
