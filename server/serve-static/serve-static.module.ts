import { Module, DynamicModule, OnModuleInit, Inject } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

import { SERVE_STATIC_MODULE_OPTIONS } from "./serve-static-options.constant";
import { ServeStaticOptions } from "./serve-static-options.interface";

import { ServeStaticModule as ServeStaticModuleOrigin } from "@nestjs/serve-static";
import { ServeStaticProvider } from "./serve-static.provider";

@Module({
  providers: [ServeStaticProvider],
})
export class ServeStaticModule implements OnModuleInit {
  constructor(
    @Inject(SERVE_STATIC_MODULE_OPTIONS)
    private readonly serveStaticOptions: ServeStaticOptions,
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly clientProvider: ServeStaticProvider,
  ) {}

  static forRoot(options: ServeStaticOptions): DynamicModule {
    return process.env.NODE_ENV !== "development"
      ? ServeStaticModuleOrigin.forRoot(options)
      : {
          module: ServeStaticModule,
          providers: [
            {
              provide: SERVE_STATIC_MODULE_OPTIONS,
              useValue: options,
            },
          ],
        };
  }

  public async onModuleInit() {
    if (process.env.NODE_ENV !== "development") return;

    const httpAdapter = this.httpAdapterHost.httpAdapter;
    const { webpackConfig } = this.serveStaticOptions;
    this.clientProvider.register(httpAdapter, webpackConfig);
  }
}
