import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { AuthenticatedUser } from './auth.types';

const DEFAULT_MOCK_USER: AuthenticatedUser = {
  id: 'mock-user-001',
  microsoftId: 'mock-entra-user-001',
  email: 'admin@wittel.com',
  displayName: 'Administrador CGW',
  roles: ['Administrador'],
  permissions: ['admin.full', 'dashboard.read', 'users.read', 'users.write'],
};

@Injectable()
export class MockAuthService {
  resolveUserFromAuthorization(authorization?: string): AuthenticatedUser | undefined {
    if (!authorization) {
      return undefined;
    }

    const [scheme, token] = authorization.split(' ');
    if (scheme?.toLowerCase() !== 'bearer' || !token) {
      throw new UnauthorizedException('Formato de autorização inválido.');
    }

    if (token === 'mock-admin-token') {
      return DEFAULT_MOCK_USER;
    }

    try {
      const payload = JSON.parse(Buffer.from(token, 'base64url').toString('utf8')) as Partial<AuthenticatedUser>;
      return {
        ...DEFAULT_MOCK_USER,
        ...payload,
        roles: payload.roles ?? DEFAULT_MOCK_USER.roles,
        permissions: payload.permissions ?? DEFAULT_MOCK_USER.permissions,
      };
    } catch {
      throw new UnauthorizedException('Token mock inválido.');
    }
  }

  getCurrentUser(user?: AuthenticatedUser): AuthenticatedUser {
    if (!user) {
      throw new UnauthorizedException('Usuário não autenticado.');
    }

    return user;
  }
}
