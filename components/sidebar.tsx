'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Coffee, Package, ReceiptText, Settings } from 'lucide-react';
import { dictionary, useAppStore } from '@/store/app-store';

const navItems = [
  { href: '/pos', key: 'pos', icon: Coffee },
  { href: '/products', key: 'products', icon: Package },
  { href: '/orders', key: 'orders', icon: ReceiptText },
  { href: '/reports', key: 'reports', icon: BarChart3 },
  { href: '/settings', key: 'settings', icon: Settings }
] as const;

export function Sidebar() {
  const pathname = usePathname();
  const language = useAppStore((s) => s.language);
  const t = dictionary[language];

  return (
    <aside className="glass m-3 flex w-72 flex-col rounded-[40px] p-6">
      <div className="mb-10 text-xl font-semibold tracking-widest text-luxury">MIDNIGHT POS</div>
      <nav className="space-y-3">
        {navItems.map(({ href, key, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm uppercase tracking-widest transition ${pathname === href ? 'bg-luxury/20 text-luxury shadow-luxury' : 'hover:bg-white/5'}`}
          >
            <Icon size={18} />
            <span>{t[key]}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
