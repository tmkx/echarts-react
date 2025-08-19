import { BarChart, Tooltip } from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Bar',
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof meta>;

export const BarSimple: Story = {
  name: 'Basic Bar',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }}
        yAxis={{ type: 'value' }}
        series={[
          {
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130],
          },
        ]}
      />
    );
  },
};

export const BarTickAlign: Story = {
  name: 'Axis Align with Tick',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
        xAxis={[
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: { alignWithLabel: true },
          },
        ]}
        yAxis={[{ type: 'value' }]}
        series={[{ name: 'Direct', type: 'bar', barWidth: '60%', data: [10, 52, 200, 334, 390, 330, 220] }]}
      >
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
      </BarChart>
    );
  },
};

export const BarBackground: Story = {
  name: 'Bar with Background',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
        yAxis={{ type: 'value' }}
        series={[
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: { color: 'rgba(180, 180, 180, 0.2)' },
          },
        ]}
      />
    );
  },
};

export const BarDataColor: Story = {
  name: 'Set Style of Single Bar',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }}
        yAxis={{ type: 'value' }}
        series={[
          {
            type: 'bar',
            data: [120, { value: 200, itemStyle: { color: '#505372' } }, 150, 80, 70, 110, 130],
          },
        ]}
      />
    );
  },
};
