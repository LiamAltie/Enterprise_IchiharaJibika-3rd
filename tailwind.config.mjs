/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        firefly: 'rgb(21, 66, 61)',
        tango: 'rgb(238, 118, 38)',
        'bondi-blue': '#00ABB3',
      },
      fontFamily: {
        'zen-maru': ['Zen Maru Gothic', 'sans-serif'],
        'noto-sans': ['Noto Sans JP', 'sans-serif'],
      },
      fontSize: {
        'heading-main': '2.75rem',    // 27.5px - .heading-leaf
        'heading-sub': '2rem',        // 20px - .heading-sub
        'body-large': '1.7rem',       // 17px - default body
        'body-small': '1.6rem',       // 16px - smaller text
      },
      letterSpacing: {
        'heading': '0.25rem',
      },
      boxShadow: {
        'content': '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'content': '1rem',
      }
    },
  },
  plugins: [],
}