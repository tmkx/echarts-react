import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';
import { InlineConfig, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx', //
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs', //
  ],
  framework: '@storybook/react-vite',
  viteFinal: (config) => {
    const README_PATH = path.resolve(__dirname, '../stories/README.mdx');

    return mergeConfig(config, {
      base: process.env.ASSET_PREFIX,
      plugins: [
        {
          name: 'README-alias',
          enforce: 'pre',
          async load(id) {
            if (id !== README_PATH) return;
            return await this.fs.readFile(path.resolve(__dirname, '../README.md'), { encoding: 'utf8' });
          },
        },
      ],
    } satisfies InlineConfig);
  },
};

export default config;
