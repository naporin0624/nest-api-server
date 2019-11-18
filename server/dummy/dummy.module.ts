import { Module, DynamicModule } from "@nestjs/common";

@Module({})
export class DummyModule {
  static forRoot(): DynamicModule {
    return {
      module: DummyModule,
    };
  }
}
