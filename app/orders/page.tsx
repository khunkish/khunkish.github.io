'use client';

import { Eye } from 'lucide-react';
import { mockOrders } from '@/data/mock';
import { useState } from 'react';
import { formatCurrency } from '@/components/currency';

export default function OrdersPage() {
  const [query, setQuery] = useState('');
  const orders = mockOrders.filter((o) => o.id.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex gap-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Order ID" className="glass flex-1 rounded-full px-4 py-3" />
        <button className="glass rounded-full px-4">Filter</button>
      </div>
      <div className="inner-scroll flex-1 rounded-3xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-charcoal/80 text-left uppercase tracking-widest text-xs">
            <tr><th className="p-3">Order ID</th><th>Date</th><th>Items</th><th>Total</th><th /></tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-white/10"><td className="p-3">{o.id}</td><td>{o.date}</td><td>{o.items}</td><td>{formatCurrency(o.total)}</td><td><button><Eye size={16} /></button></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
