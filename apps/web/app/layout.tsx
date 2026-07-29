import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Centro de Governança Wittel',
  description: 'Plataforma corporativa de governança executiva CGW.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
