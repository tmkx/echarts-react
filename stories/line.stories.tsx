import type { Meta } from '@storybook/react';
import { Legend, LineChart, Title, Toolbox, Tooltip } from '@fanciers/echarts-react';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Line',
};

export default meta;

export function LineSimple() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ]}
    />
  );
}

export function LineSmooth() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
        },
      ]}
    />
  );
}

export function AreaBasic() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {},
        },
      ]}
    />
  );
}

export function LineStack() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ]}
      grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
    >
      <Title title={{ text: 'Stacked Line' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{ data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'] }} />
      <Toolbox toolbox={{ feature: { saveAsImage: {} } }} />
    </LineChart>
  );
}

export function AreaStack() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top',
          },
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ]}
    >
      <Title title={{ text: 'Stacked Area Chart' }} />
      <Tooltip
        tooltip={{
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        }}
      />
      <Legend legend={{ data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'] }} />
      <Toolbox toolbox={{ feature: { saveAsImage: {} } }} />
    </LineChart>
  );
}
