'use client';

import { create } from 'zustand';
import { Product } from '@/data/mock';

export type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const current = state.items.find((item) => item.id === product.id);
      if (current) {
        return { items: state.items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)) };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    })),
  clearCart: () => set({ items: [] }),
  getSubtotal: () => get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
  getTax: () => get().getSubtotal() * 0.07,
  getTotal: () => get().getSubtotal() + get().getTax()
}));
