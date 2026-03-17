'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { dailySales, weeklySales } from '@/data/mock';
import { dictionary, useAppStore } from '@/store/app-store';
import { formatCurrency } from '@/components/currency';

export default function ReportsPage() {
  const { language } = useAppStore();
  const t = dictionary[language];
  const today = 24500;
  const total = 352000;
  const goal = 76;

  return (
    <div className="inner-scroll grid h-full grid-cols-2 gap-4 pr-1">
      <div className="glass rounded-[32px] p-5"><div className="text-xs uppercase tracking-widest">{t.todaySales}</div><div className="mt-2 text-3xl text-luxury">{formatCurrency(today)}</div><div className="text-green-300">+12.4%</div></div>
      <div className="glass rounded-[32px] p-5"><div className="text-xs uppercase tracking-widest">{t.totalRevenue}</div><div className="mt-2 text-3xl text-luxury">{formatCurrency(total)}</div><div className="text-green-300">+8.2%</div></div>
      <div className="glass rounded-[32px] p-5"><div className="mb-3 text-xs uppercase tracking-widest">Daily Sales</div><div className="h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={dailySales}><XAxis dataKey="name" stroke="#fff" /><YAxis stroke="#fff" /><Tooltip /><Bar dataKey="sales" fill="#d4af37" radius={[12, 12, 0, 0]} /></BarChart></ResponsiveContainer></div></div>
      <div className="glass rounded-[32px] p-5"><div className="mb-3 text-xs uppercase tracking-widest">Weekly Sales</div><div className="h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={weeklySales}><XAxis dataKey="name" stroke="#fff" /><YAxis stroke="#fff" /><Tooltip /><Bar dataKey="sales" fill="#f4e2a3" radius={[12, 12, 0, 0]} /></BarChart></ResponsiveContainer></div></div>
      <div className="glass col-span-2 rounded-[32px] p-5"><div className="mb-2 text-xs uppercase tracking-widest">{t.monthlyGoal}</div><div className="h-3 rounded-full bg-white/10"><div className="h-3 rounded-full bg-luxury" style={{ width: `${goal}%` }} /></div><div className="mt-2 text-sm">{goal}%</div></div>
    </div>
  );
}
