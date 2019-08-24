import { Test, TestingModule } from "@nestjs/testing";
import { GrpcService } from "./grpc.service";

describe("GrpcService", () => {
  let service: GrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrpcService],
    }).compile();

    service = module.get<GrpcService>(GrpcService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
