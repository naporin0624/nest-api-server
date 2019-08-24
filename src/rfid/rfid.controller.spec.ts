import { Test, TestingModule } from "@nestjs/testing";
import { RfidController } from "./rfid.controller";

describe("Rfid Controller", () => {
  let controller: RfidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RfidController],
    }).compile();

    controller = module.get<RfidController>(RfidController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
