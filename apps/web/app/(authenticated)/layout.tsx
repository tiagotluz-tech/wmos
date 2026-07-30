import { Header } from '../../components/layout/header';
import { Sidebar } from '../../components/layout/sidebar';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen flex-1">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
