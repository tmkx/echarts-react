import type { Preview } from '@storybook/react';
import type { DocsTypes } from '@storybook/addon-docs';
import type { CoreTypes } from 'storybook/internal/csf';
import { themes } from 'storybook/theming';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { SWRConfig } from 'swr';

echarts.use(CanvasRenderer);

const preview: Preview = {
  parameters: {
    docs: {
      codePanel: true,
      theme: themes.dark,
    },
  } satisfies (CoreTypes & DocsTypes)['parameters'],
  decorators: [
    (Story) => {
      return (
        <SWRConfig
          value={{
            fetcher: (url: string) =>
              fetch(`https://corsproxy.io/?url=${encodeURIComponent(url)}`).then((res) => res.json()),
          }}
        >
          <Story />
        </SWRConfig>
      );
    },
  ],
};

export default preview;
