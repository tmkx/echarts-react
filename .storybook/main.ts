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
        plugins: [
          readmeAliasPlugin(), //
          fixStorybookMockerEntryPlugin(),
        ],
      })
    ),
};

function readmeAliasPlugin(): Plugin {
  const README_PATH = path.resolve(import.meta.dirname, '../stories/README.mdx');
  return {
    name: 'readme-alias',
    enforce: 'pre',
    async load(id) {
      if (id !== README_PATH) return;
      return await this.fs.readFile(path.resolve(import.meta.dirname, '../README.md'), { encoding: 'utf8' });
    },
  };
}

function fixStorybookMockerEntryPlugin(): Plugin {
  return {
    name: 'fix-storybook-mocker-entry',
    enforce: 'post',
    transformIndexHtml(html) {
      // https://github.com/storybookjs/storybook/blob/2657cc33826d1abf76334f94fef4b82b10f1e1c0/code/core/src/core-server/presets/vitePlugins/vite-inject-mocker/plugin.ts#L11
      const entryPath = '/vite-inject-mocker-entry.js';
      return html.replace(`"${entryPath}"`, `".${entryPath}"`);
    },
  };
}

export default config;
