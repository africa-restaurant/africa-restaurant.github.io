/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#a67c52',    // Tan/brown similar to Plume
        secondary: '#f7f3ef',  // Light cream/beige
        accent: '#d5c3b0',     // Lighter tan
        dark: '#463228',       // Dark brown
        light: '#faf8f6'       // Off-white with slight warmth
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
        serif: ['Droid Serif', 'serif']
      }
    },
  },
  plugins: [],
};