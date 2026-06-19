import { ChordChart, Legend, Title, Tooltip } from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';
import type { ChordSeriesOption } from 'echarts';
import type { TitleOption } from 'echarts/types/dist/shared';

const meta = {
  title: 'Chord',
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof meta>;

export const ChordSimple: Story = {
  name: 'Basic Chord',
  render() {
    return (
      <ChordChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            type: 'chord',
            clockwise: false,
            label: { show: true },
            lineStyle: { color: 'target' },
            data: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }],
            links: [
              { source: 'A', target: 'B', value: 40 },
              { source: 'A', target: 'C', value: 20 },
              { source: 'B', target: 'D', value: 20 },
            ],
          },
        ]}
      >
        <Tooltip tooltip={{}} />
        <Legend legend={{}} />
      </ChordChart>
    );
  },
};

export const ChordMinAngle: Story = {
  name: 'Chord minAngle',
  render() {
    return (
      <ChordChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            type: 'chord',
            label: { show: true },
            minAngle: 30,
            data: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'E' }, { name: 'F' }],
            links: [
              { source: 'A', target: 'B', value: 40 },
              { source: 'B', target: 'C', value: 20 },
              { source: 'E', target: 'A', value: 5 },
            ],
          },
        ]}
      >
        <Tooltip tooltip={{}} />
        <Legend legend={{}} />
      </ChordChart>
    );
  },
};

export const ChordLineStyleColor: Story = {
  name: 'Chord lineStyle.color',
  render() {
    function generateSeries(id: number, lineColor: string): ChordSeriesOption {
      return {
        type: 'chord',
        label: { show: true },
        center: [((id * 2 + 1) / 6) * 100 + '%', '50%'],
        radius: ['28%', '32%'],
        lineStyle: { color: lineColor },
        data: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }],
        links: [
          { source: 'A', target: 'B', value: 30 },
          { source: 'A', target: 'C', value: 20 },
          { source: 'B', target: 'D', value: 10 },
          { source: 'C', target: 'A', value: 15 },
          { source: 'D', target: 'A', value: 25 },
        ],
      };
    }
    function generateTitle(id: number, text: string): TitleOption {
      return { text, left: ((id * 2 + 1) / 6) * 100 + '%', top: '25%', textAlign: 'center', padding: 0 };
    }

    return (
      <ChordChart
        style={{ width: 720, height: 500 }}
        series={[
          generateSeries(0, 'source'), //
          generateSeries(1, 'target'),
          generateSeries(2, 'gradient'),
        ]}
      >
        <Tooltip tooltip={{}} />
        <Legend legend={{}} />
        <Title
          title={[
            { text: 'lineStyle.color', textStyle: { fontSize: 24 } },
            generateTitle(0, 'source'),
            generateTitle(1, 'target'),
            generateTitle(2, 'gradient'),
          ]}
        />
      </ChordChart>
    );
  },
};

export const ChordStyle: Story = {
  name: 'Chord Style',
  render() {
    return (
      <ChordChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            type: 'chord',
            padAngle: 1,
            center: ['50%', '48%'],
            radius: ['70%', '80%'],
            data: [
              { name: 'A' },
              { name: 'B' },
              { name: 'C' },
              { name: 'D' },
              { name: 'E' },
              { name: 'F' },
              { name: 'G' },
            ],
            itemStyle: { borderRadius: [0, 15], borderWidth: 2, borderColor: '#fff' },
            lineStyle: {
              opacity: 0.3,
              color: 'gradient', // or 'source' (default), 'target'
            },
            emphasis: {
              focus: 'self', // or 'none', 'adjacency' (default)
            },
            label: { show: true, position: 'inside', color: '#fff', fontWeight: 'bold' },
            links: [
              { source: 'A', target: 'B', value: 14 },
              { source: 'A', target: 'C', value: 8 },
              { source: 'B', target: 'C', value: 20 },
              { source: 'B', target: 'E', value: 15 },
              { source: 'C', target: 'B', value: 8 },
              { source: 'C', target: 'E', value: 3 },
              { source: 'D', target: 'A', value: 12 },
              { source: 'D', target: 'B', value: 3 },
              { source: 'E', target: 'A', value: 15 },
              { source: 'E', target: 'C', value: 5 },
              { source: 'F', target: 'C', value: 5 },
              { source: 'G', target: 'A', value: 6 },
              { source: 'G', target: 'B', value: 8 },
              { source: 'G', target: 'D', value: 4 },
            ],
          },
        ]}
      >
        <Tooltip tooltip={{}} />
        <Legend legend={{}} />
      </ChordChart>
    );
  },
};
