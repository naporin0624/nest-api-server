import { Test, TestingModule } from "@nestjs/testing";
import { RfidService } from "./rfid.service";

describe("RfidService", () => {
  let service: RfidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RfidService],
    }).compile();

    service = module.get<RfidService>(RfidService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
