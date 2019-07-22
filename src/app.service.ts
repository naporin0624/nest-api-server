import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(status: number): number {
    return status;
  }
}
