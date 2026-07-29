'use client';

import { MockLogoutButton } from '../auth/mock-auth-actions';
import { useMockAuth } from '../auth/mock-auth-provider';

export function Header() {
  const { user } = useMockAuth();

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 py-4 text-slate-100 backdrop-blur">
      <div>
        <p className="text-sm text-slate-400">Centro de Governança Wittel</p>
        <h1 className="text-xl font-semibold">Governança Executiva</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium">{user?.name ?? 'Visitante'}</p>
          <p className="text-xs text-slate-400">{user?.email ?? 'Sem sessão ativa'}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-950">
          {user?.avatarInitials ?? '--'}
        </div>
        <MockLogoutButton />
      </div>
    </header>
  );
}
