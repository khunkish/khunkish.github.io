'use client';

import { create } from 'zustand';

export type Language = 'EN' | 'TH';

type AppState = {
  language: Language;
  notifications: boolean;
  setLanguage: (language: Language) => void;
  toggleNotifications: () => void;
};

export const useAppStore = create<AppState>((set) => ({
  language: 'EN',
  notifications: true,
  setLanguage: (language) => set({ language }),
  toggleNotifications: () => set((state) => ({ notifications: !state.notifications }))
}));

export const dictionary = {
  EN: {
    pos: 'Point of Sale',
    products: 'Products',
    orders: 'Orders',
    reports: 'Reports',
    settings: 'Settings',
    search: 'Search',
    addProduct: 'Add Product',
    checkout: 'Checkout / Pay',
    monthlyGoal: 'Monthly Goal Achieved',
    todaySales: 'Today Sales',
    totalRevenue: 'Total Revenue',
    language: 'Language'
  },
  TH: {
    pos: 'หน้าขายสินค้า',
    products: 'จัดการสินค้า',
    orders: 'รายการคำสั่งซื้อ',
    reports: 'รายงาน',
    settings: 'ตั้งค่า',
    search: 'ค้นหา',
    addProduct: 'เพิ่มสินค้า',
    checkout: 'ชำระเงิน',
    monthlyGoal: 'เป้าหมายรายเดือน',
    todaySales: 'ยอดขายวันนี้',
    totalRevenue: 'รายได้รวม',
    language: 'ภาษา'
  }
} as const;
