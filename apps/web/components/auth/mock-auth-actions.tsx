'use client';

import { useMockAuth } from './mock-auth-provider';
import { Button } from '../ui/button';

export function MockLoginButton() {
  const { login } = useMockAuth();

  return <Button onClick={login}>Entrar com autenticação simulada</Button>;
}

export function MockLogoutButton() {
  const { logout } = useMockAuth();

  return (
    <Button variant="outline" onClick={logout}>
      Sair
    </Button>
  );
}
