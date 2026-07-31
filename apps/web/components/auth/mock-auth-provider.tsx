'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type MockUser = {
  name: string;
  email: string;
  avatarInitials: string;
  roles: string[];
};

type MockAuthContextValue = {
  user: MockUser | null;
  login: () => void;
  logout: () => void;
};

const defaultUser: MockUser = {
  name: 'Administrador CGW',
  email: 'admin@wittel.com',
  avatarInitials: 'AC',
  roles: ['Administrador'],
};

const MockAuthContext = createContext<MockAuthContextValue | undefined>(undefined);

export function MockAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(defaultUser);

  const value = useMemo(
    () => ({
      user,
      login: () => setUser(defaultUser),
      logout: () => setUser(null),
    }),
    [user],
  );

  return <MockAuthContext.Provider value={value}>{children}</MockAuthContext.Provider>;
}

export function useMockAuth() {
  const context = useContext(MockAuthContext);

  if (!context) {
    throw new Error('useMockAuth deve ser utilizado dentro de MockAuthProvider.');
  }

  return context;
}
