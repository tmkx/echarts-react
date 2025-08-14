import type { Meta } from '@storybook/react';
import { LineChart } from '@fanciers/echarts-react';

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
