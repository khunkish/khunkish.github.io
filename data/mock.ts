export type Category = 'Drinks' | 'Food' | 'Desserts';

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
};

export const mockProducts: Product[] = [
  { id: 'p1', name: 'Midnight Latte', category: 'Drinks', price: 120, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
  { id: 'p2', name: 'Truffle Croissant', category: 'Food', price: 180, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
  { id: 'p3', name: 'Golden Tiramisu', category: 'Desserts', price: 210, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' },
  { id: 'p4', name: 'Espresso Noir', category: 'Drinks', price: 95, image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=600&q=80' },
  { id: 'p5', name: 'Smoked Salmon Toast', category: 'Food', price: 230, image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80' }
];

export const mockOrders = [
  { id: 'ORD-1001', date: '2026-03-17', items: 5, total: 1140 },
  { id: 'ORD-1002', date: '2026-03-16', items: 3, total: 720 },
  { id: 'ORD-1003', date: '2026-03-15', items: 7, total: 1660 }
];

export const dailySales = [
  { name: 'Mon', sales: 8000 },
  { name: 'Tue', sales: 9200 },
  { name: 'Wed', sales: 7800 },
  { name: 'Thu', sales: 9800 },
  { name: 'Fri', sales: 12200 },
  { name: 'Sat', sales: 15000 },
  { name: 'Sun', sales: 13800 }
];

export const weeklySales = [
  { name: 'W1', sales: 63000 },
  { name: 'W2', sales: 71000 },
  { name: 'W3', sales: 68400 },
  { name: 'W4', sales: 74600 }
];
