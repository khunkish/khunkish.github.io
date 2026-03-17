import './globals.css';
import { ReactNode } from 'react';
import { Sidebar } from '@/components/sidebar';

export const metadata = {
  title: 'Midnight Luxury POS'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell flex gap-2 p-2">
          <Sidebar />
          <main className="glass m-3 flex-1 rounded-[40px] p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
