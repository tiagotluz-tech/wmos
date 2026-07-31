import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import type { Request } from 'express';
import { Observable, tap } from 'rxjs';
import type { RequestWithUser } from '../../auth/auth.types';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AuditInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<Request & RequestWithUser>();
    const startedAt = Date.now();

    return next.handle().pipe(
      tap(() => {
        if (request.method === 'GET' && request.path === '/health') {
          return;
        }

        this.logger.log({
          userId: request.user?.id ?? 'anonymous',
          action: `${request.method} ${request.path}`,
          entity: context.getClass().name,
          ip: request.ip,
          durationMs: Date.now() - startedAt,
        });
      }),
    );
  }
}
