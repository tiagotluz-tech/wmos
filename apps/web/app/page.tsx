import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 rounded-full border border-slate-700 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-300">
          CGW
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Centro de Governança Wittel</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Plataforma corporativa para governança executiva, operação escalável e tomada de decisão estratégica.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Button>Versão v0.1</Button>
        </div>
      </section>
    </main>
  );
}
