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
  core: {
    disableProjectJson: true,
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  framework: '@storybook/react-vite',
  viteFinal: (config) =>
    mergeConfig(
      config,
      defineConfig({
        base: process.env.ASSET_PREFIX,
        build: {
          rolldownOptions: {
            output: {
              // This fixes the production output issue for Storybook, which displays the error "__STORYBOOK_MODULE_CLIENT_LOGGER__ is not defined"
              // https://github.com/vitejs/rolldown-vite/issues/562#issuecomment-3663544321
              strictExecutionOrder: true,
            },
          },
        },
        plugins: [
          readmeAliasPlugin(), //
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

export default config;
