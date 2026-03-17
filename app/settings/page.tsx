'use client';

import { dictionary, useAppStore } from '@/store/app-store';

export default function SettingsPage() {
  const { language, setLanguage, notifications, toggleNotifications } = useAppStore();
  const t = dictionary[language];

  return (
    <div className="space-y-4">
      <div className="glass rounded-[32px] p-5">
        <div className="mb-3 text-xs uppercase tracking-widest">General</div>
        <div className="flex items-center justify-between">
          <span>{t.language}</span>
          <div className="flex gap-2">
            <button onClick={() => setLanguage('EN')} className={`rounded-full px-4 py-1 ${language === 'EN' ? 'bg-luxury text-black' : 'glass'}`}>EN</button>
            <button onClick={() => setLanguage('TH')} className={`rounded-full px-4 py-1 ${language === 'TH' ? 'bg-luxury text-black' : 'glass'}`}>TH</button>
          </div>
        </div>
      </div>
      <div className="glass rounded-[32px] p-5">
        <div className="mb-3 text-xs uppercase tracking-widest">Security</div>
        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <button onClick={toggleNotifications} className={`rounded-full px-4 py-1 ${notifications ? 'bg-luxury text-black' : 'bg-white/10'}`}>{notifications ? 'On' : 'Off'}</button>
        </div>
      </div>
      <div className="glass rounded-[32px] p-5"><div className="mb-3 text-xs uppercase tracking-widest">About</div><p className="text-sm text-white/70">Midnight Luxury POS v1.0</p></div>
    </div>
  );
}
