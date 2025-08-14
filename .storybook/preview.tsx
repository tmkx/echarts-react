import type { Preview } from '@storybook/react';
import { themes } from 'storybook/theming';

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
