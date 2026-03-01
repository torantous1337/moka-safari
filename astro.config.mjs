import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://torantous1337.github.io',
  base: '/moka-safari',
  integrations: [tailwind()],
});
