import { Test, TestingModule } from "@nestjs/testing";
import { WssGateway } from "./wss.gateway";

describe("WssGateway", () => {
  let gateway: WssGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WssGateway],
    }).compile();

    gateway = module.get<WssGateway>(WssGateway);
  });

  it("should be defined", () => {
    expect(gateway).toBeDefined();
  });
  it("wss", () => {
    expect(gateway.wss).toBeDefined();
  });
});
