'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { dictionary, useAppStore } from '@/store/app-store';
import { mockProducts } from '@/data/mock';
import { useCartStore } from '@/store/cart-store';
import { formatCurrency } from '@/components/currency';

const categories = ['All', 'Drinks', 'Food', 'Desserts'] as const;

export default function PosPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const { language } = useAppStore();
  const t = dictionary[language];
  const cart = useCartStore();

  const filtered = useMemo(
    () => mockProducts.filter((p) => (category === 'All' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())),
    [category, query]
  );

  return (
    <div className="grid h-full grid-cols-3 gap-6">
      <section className="col-span-2 flex flex-col gap-4 overflow-hidden">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`${t.search}...`} className="glass rounded-full px-5 py-3" />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-2 text-xs tracking-widest ${category === c ? 'bg-luxury text-black' : 'glass'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="inner-scroll grid flex-1 grid-cols-2 gap-4 pr-1">
          {filtered.map((product) => (
            <button key={product.id} onClick={() => cart.addItem(product)} className="glass text-left rounded-[32px] p-3">
              <div className="relative mb-3 h-36 overflow-hidden rounded-2xl">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="text-sm uppercase tracking-widest">{product.name}</div>
              <div className="text-xs text-white/60">{product.category}</div>
              <div className="mt-2 text-luxury">{formatCurrency(product.price)}</div>
            </button>
          ))}
        </div>
      </section>

      <aside className="glass flex flex-col rounded-[32px] p-4">
        <div className="mb-3 text-xs uppercase tracking-widest text-luxury">Cart</div>
        <div className="inner-scroll flex-1 space-y-3 pr-1">
          {cart.items.map((item) => (
            <div key={item.id} className="rounded-2xl bg-white/5 p-3">
              <div className="text-sm">{item.name}</div>
              <div className="text-xs text-white/60">{formatCurrency(item.price)}</div>
              <div className="mt-2 flex items-center gap-2">
                <button onClick={() => cart.updateQuantity(item.id, item.quantity - 1)} className="rounded-full bg-white/10 px-2">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => cart.updateQuantity(item.id, item.quantity + 1)} className="rounded-full bg-white/10 px-2">+</button>
                <button onClick={() => cart.removeItem(item.id)} className="ml-auto text-xs text-red-300">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-1 border-t border-white/10 pt-3 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(cart.getSubtotal())}</span></div>
          <div className="flex justify-between"><span>Tax 7%</span><span>{formatCurrency(cart.getTax())}</span></div>
          <div className="flex justify-between text-luxury"><span>Total</span><span>{formatCurrency(cart.getTotal())}</span></div>
        </div>
        <button className="mt-4 rounded-full bg-luxury py-3 text-sm font-semibold text-black" onClick={() => cart.clearCart()}>{t.checkout}</button>
      </aside>
    </div>
  );
}
