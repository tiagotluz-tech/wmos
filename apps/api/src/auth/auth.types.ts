import type { Request } from 'express';

export type AuthenticatedUser = {
  id: string;
  microsoftId?: string;
  email: string;
  displayName: string;
  roles: string[];
  permissions: string[];
};

export type RequestWithUser = Request & {
  user?: AuthenticatedUser;
};
