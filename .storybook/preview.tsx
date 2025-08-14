import type { Preview } from '@storybook/react';
import { themes } from 'storybook/theming';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use(CanvasRenderer);

const preview: Preview = {
  parameters: {
    parameters: {
      docs: {
        theme: themes.dark,
      },
      themes,
    },
  },
};

export default preview;
