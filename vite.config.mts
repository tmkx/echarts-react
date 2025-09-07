import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@fanciers/echarts-react': path.resolve(import.meta.dirname, './src/index.ts'),
    },
  },
});
