import type { StorybookConfig } from 'storybook-react-rsbuild';
import path from 'node:path';
import { mergeRsbuildConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx', //
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs', //
  ],
  framework: 'storybook-react-rsbuild',
  rsbuildFinal: (config) => {
    return mergeRsbuildConfig(config, {
      plugins: [pluginReact()],
      output: {
        assetPrefix: process.env.ASSET_PREFIX,
      },
      tools: {
        rspack: {
          resolve: {
            alias: {
              '@fanciers/echarts-react': path.resolve(__dirname, '../src'),
            },
          },
        },
      },
    });
  },
};

export default config;
