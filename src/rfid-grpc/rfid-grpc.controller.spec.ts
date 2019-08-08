import { Test, TestingModule } from "@nestjs/testing";
import { RfidGrpcController } from "./rfid-grpc.controller";

describe("RfidGrpc Controller", () => {
  let controller: RfidGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RfidGrpcController],
    }).compile();

    controller = module.get<RfidGrpcController>(RfidGrpcController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
