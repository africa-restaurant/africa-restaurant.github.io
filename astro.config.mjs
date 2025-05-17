import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// test deploy
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hiwibeauty.co.uk',
  base: '/',
  trailingSlash: 'ignore',
});
