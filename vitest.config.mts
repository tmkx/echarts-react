import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@fanciers/echarts-react': path.resolve(import.meta.dirname, './src/index.ts'),
    },
  },
  test: {
    dir: 'tests',
    coverage: {
      include: ['src/**/*'],
    },
  },
});
