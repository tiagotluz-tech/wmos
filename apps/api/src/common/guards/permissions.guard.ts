import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import type { RequestWithUser } from '../../auth/auth.types';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredPermissions?.length) {
      return true;
    }

    const permissions = requestUserPermissions(context);
    return requiredPermissions.every((permission) => permissions.includes(permission));
  }
}

function requestUserPermissions(context: ExecutionContext): string[] {
  const request = context.switchToHttp().getRequest<RequestWithUser>();
  return request.user?.permissions ?? [];
}
