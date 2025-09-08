import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-vite';
import { Plugin, defineConfig, mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx', //
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs', //
  ],
  framework: '@storybook/react-vite',
  viteFinal: (config) =>
    mergeConfig(
      config,
      defineConfig({
        base: process.env.ASSET_PREFIX,
        plugins: [readmeAliasPlugin()],
      })
    ),
};

function readmeAliasPlugin(): Plugin {
  const README_PATH = path.resolve(__dirname, '../stories/README.mdx');
  return {
    name: 'readme-alias',
    enforce: 'pre',
    async load(id) {
      if (id !== README_PATH) return;
      return await this.fs.readFile(path.resolve(__dirname, '../README.md'), { encoding: 'utf8' });
    },
  };
}

export default config;
