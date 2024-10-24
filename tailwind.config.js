import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-rs-light-gray',
    'border-green-700',
    'border-4',
    'bg-rs-light-green'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'hero-grid': '5fr 2fr',
        'calc-input-grid': '1fr 52px 52px',
        'about-grid': '3fr 5fr',
        'footer-grid': '2fr 2fr 1fr 1fr'
      },
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        'rs-green': '#00984D',
        'rs-light-green': '#F2FAF6'
      },
      backgroundColor: {
        'rs-light-green': '#F2FAF6',
        'rs-light-gray': '#F4F4F4',
        'rs-red': '#BA2D2D',
        'rs-green': '#00984D',
        'rs-dark-blue': '#030620',
        'rs-dark-blue-2': '#030724',
        'rs-dark-blue-3': 'rgb(9, 16, 65)'
      },
      boxShadow: {
        'rs-shadow': '0px 4px 0px #00984D',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
