import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config.mjs';

export default defineConfig({
  ...viteConfig,
  test: {
    dir: 'tests',
    coverage: {
      include: ['src/**/*'],
    },
  },
});
