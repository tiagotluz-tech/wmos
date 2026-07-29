import { MockLoginButton } from '../../components/auth/mock-auth-actions';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-50">
      <section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">CGW</p>
        <h1 className="mt-4 text-3xl font-bold">Login</h1>
        <p className="mt-4 text-slate-300">
          Autenticação simulada preparada para futura integração com Microsoft Entra ID. Nenhuma credencial real é utilizada nesta Sprint.
        </p>
        <div className="mt-8">
          <MockLoginButton />
        </div>
      </section>
    </main>
  );
}
