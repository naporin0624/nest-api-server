import { Test, TestingModule } from "@nestjs/testing";
import { GrpcRfidController } from "./grpc-rfid.controller";

describe("GrpcRfid Controller", () => {
  let controller: GrpcRfidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrpcRfidController],
    }).compile();

    controller = module.get<GrpcRfidController>(GrpcRfidController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
