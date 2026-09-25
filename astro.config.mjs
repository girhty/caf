import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/caf/',
  output: 'static',
  integrations: [tailwind()],
});