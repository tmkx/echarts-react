import { Legend, PieChart, Title, Tooltip } from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pie',
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof meta>;

export const PieSimple: Story = {
  name: 'Referer of a Website',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ]}
      >
        <Title title={{ text: 'Referer of a Website', subtext: 'Fake Data', left: 'center' }} />
        <Tooltip tooltip={{ trigger: 'item' }} />
        <Legend legend={{ orient: 'vertical', left: 'left' }} />
      </PieChart>
    );
  },
};

export const PieBorderRadius: Story = {
  name: 'Doughnut Chart with Rounded Corner',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
            label: { show: false, position: 'center' },
            emphasis: { label: { show: true, fontSize: 40, fontWeight: 'bold' } },
            labelLine: { show: false },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
          },
        ]}
      >
        <Tooltip tooltip={{ trigger: 'item' }} />
        <Legend legend={{ top: '5%', left: 'center' }} />
      </PieChart>
    );
  },
};

export const PieDoughnut: Story = {
  name: 'Doughnut Chart',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: { show: false, position: 'center' },
            emphasis: { label: { show: true, fontSize: 40, fontWeight: 'bold' } },
            labelLine: { show: false },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
          },
        ]}
      >
        <Tooltip tooltip={{ trigger: 'item' }} />
        <Legend legend={{ top: '5%', left: 'center' }} />
      </PieChart>
    );
  },
};
