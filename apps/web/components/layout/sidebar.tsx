const navigationItems = ['Dashboard', 'Contratos', 'Usuários', 'Papéis', 'Permissões', 'Auditoria'];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950 p-6 text-slate-100 lg:block">
      <div className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">CGW</div>
      <nav className="mt-10 space-y-2">
        {navigationItems.map((item) => (
          <a
            className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
            href="#"
            key={item}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
