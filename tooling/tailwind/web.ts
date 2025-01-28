import base from './base';

import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config = {
  presets: [base],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  prefix: '',
  plugins: [tailwindcssAnimate, aspectRatio],
} satisfies Config;

export default config;
