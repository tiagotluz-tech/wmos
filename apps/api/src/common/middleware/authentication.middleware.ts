import { Injectable, NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
import { MockAuthService } from '../../auth/mock-auth.service';
import type { RequestWithUser } from '../../auth/auth.types';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly mockAuthService: MockAuthService) {}

  use(request: Request, _response: Response, next: NextFunction) {
    const authorization = request.headers.authorization;
    const user = this.mockAuthService.resolveUserFromAuthorization(authorization);

    if (user) {
      (request as RequestWithUser).user = user;
    }

    next();
  }
}
