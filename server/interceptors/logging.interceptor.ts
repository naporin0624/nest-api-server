import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.log(
      `${context.getClass().name}_${context.getHandler().name}: Before...`,
    );
    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(
            `${context.getClass().name}_${
              context.getHandler().name
            }: After... ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
