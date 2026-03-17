import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luxury: '#d4af37',
        midnight: '#0f1118',
        charcoal: '#1a1f2d'
      },
      boxShadow: {
        luxury: '0 0 30px rgba(212, 175, 55, 0.25)',
        glass: '0 10px 35px rgba(255,255,255,0.04)'
      }
    }
  },
  plugins: []
};

export default config;
