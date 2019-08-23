import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getStatus(req: any): number {
    try {
      // fluentLogger.emit("mimamori", req);
      return 1;
    } catch (e) {
      return 0;
    }
  }
}
