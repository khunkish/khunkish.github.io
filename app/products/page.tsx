'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { mockProducts, Product } from '@/data/mock';
import { dictionary, useAppStore } from '@/store/app-store';
import { formatCurrency } from '@/components/currency';

export default function ProductsPage() {
  const { language } = useAppStore();
  const t = dictionary[language];
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const visible = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setProducts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: String(form.get('name')), category: form.get('category') as Product['category'], price: Number(form.get('price')), image: String(form.get('image')) }
    ]);
    setOpen(false);
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex gap-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`${t.search}...`} className="glass flex-1 rounded-full px-4 py-3" />
        <button onClick={() => setOpen(true)} className="rounded-full bg-luxury px-5 py-2 text-black">{t.addProduct}</button>
      </div>
      <div className="inner-scroll flex-1 rounded-3xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-charcoal/80 text-left uppercase tracking-widest text-xs">
            <tr><th className="p-3">Image</th><th>Name</th><th>Category</th><th>Price</th><th /></tr>
          </thead>
          <tbody>
            {visible.map((p) => (
              <tr key={p.id} className="border-t border-white/10">
                <td className="p-3"><div className="relative h-14 w-14 overflow-hidden rounded-xl"><Image src={p.image} alt={p.name} fill className="object-cover" /></div></td>
                <td>{p.name}</td><td>{p.category}</td><td>{formatCurrency(p.price)}</td>
                <td><button onClick={() => setDeleting(p.id)} className="text-red-300">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 grid place-items-center bg-black/70">
          <form onSubmit={onSubmit} className="glass w-[420px] space-y-3 rounded-[32px] p-6">
            <input name="name" required placeholder="Name" className="w-full rounded-xl bg-white/10 p-3" />
            <input name="price" required type="number" placeholder="Price" className="w-full rounded-xl bg-white/10 p-3" />
            <select name="category" className="w-full rounded-xl bg-white/10 p-3"><option>Drinks</option><option>Food</option><option>Desserts</option></select>
            <input name="image" required placeholder="Image URL" className="w-full rounded-xl bg-white/10 p-3" />
            <div className="flex justify-end gap-2"><button type="button" onClick={() => setOpen(false)} className="px-4">Cancel</button><button className="rounded-full bg-luxury px-4 py-2 text-black">Save</button></div>
          </form>
        </div>
      )}

      {deleting && (
        <div className="fixed inset-0 grid place-items-center bg-black/70">
          <div className="glass rounded-[32px] p-6 text-center">
            <p className="mb-4">Confirm delete this product?</p>
            <div className="flex justify-center gap-2"><button onClick={() => setDeleting(null)}>Cancel</button><button className="rounded-full bg-red-500 px-4 py-1" onClick={() => { setProducts((prev) => prev.filter((p) => p.id !== deleting)); setDeleting(null); }}>Delete</button></div>
          </div>
        </div>
      )}
    </div>
  );
}
