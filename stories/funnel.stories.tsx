import { FunnelChart, Legend, Title, Toolbox, Tooltip } from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Funnel',
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof meta>;

export const BasicFunnel: Story = {
  name: 'Funnel Chart',
  render() {
    return (
      <FunnelChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: { show: true, position: 'inside' },
            labelLine: { length: 10, lineStyle: { width: 1, type: 'solid' } },
            itemStyle: { borderColor: '#fff', borderWidth: 1 },
            emphasis: { label: { fontSize: 20 } },
            data: [
              { value: 60, name: 'Visit' },
              { value: 40, name: 'Inquiry' },
              { value: 20, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
        ]}
      >
        <Title title={{ text: 'Funnel' }} />
        <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b} : {c}%' }} />
        <Toolbox toolbox={{ feature: { dataView: { readOnly: false }, restore: {}, saveAsImage: {} } }} />
        <Legend legend={{ data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'] }} />
      </FunnelChart>
    );
  },
};

export const FunnelAlign: Story = {
  name: 'Funnel Compare',
  render() {
    return (
      <FunnelChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            name: 'Funnel',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '50%',
            funnelAlign: 'right',
            data: [
              { value: 60, name: 'Prod C' },
              { value: 30, name: 'Prod D' },
              { value: 10, name: 'Prod E' },
              { value: 80, name: 'Prod B' },
              { value: 100, name: 'Prod A' },
            ],
          },
          {
            name: 'Pyramid',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '5%',
            sort: 'ascending',
            funnelAlign: 'right',
            data: [
              { value: 60, name: 'Prod C' },
              { value: 30, name: 'Prod D' },
              { value: 10, name: 'Prod E' },
              { value: 80, name: 'Prod B' },
              { value: 100, name: 'Prod A' },
            ],
          },
          {
            name: 'Funnel',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '5%',
            funnelAlign: 'left',
            data: [
              { value: 60, name: 'Prod C' },
              { value: 30, name: 'Prod D' },
              { value: 10, name: 'Prod E' },
              { value: 80, name: 'Prod B' },
              { value: 100, name: 'Prod A' },
            ],
          },
          {
            name: 'Pyramid',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            sort: 'ascending',
            funnelAlign: 'left',
            data: [
              { value: 60, name: 'Prod C' },
              { value: 30, name: 'Prod D' },
              { value: 10, name: 'Prod E' },
              { value: 80, name: 'Prod B' },
              { value: 100, name: 'Prod A' },
            ],
          },
        ]}
      >
        <Title title={{ text: 'Funnel Compare', subtext: 'Fake Data', left: 'left', top: 'bottom' }} />
        <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b} : {c}%' }} />
        <Toolbox
          toolbox={{
            show: true,
            orient: 'vertical',
            top: 'center',
            feature: { dataView: { readOnly: false }, restore: {}, saveAsImage: {} },
          }}
        />
        <Legend
          legend={{ orient: 'vertical', left: 'left', data: ['Prod A', 'Prod B', 'Prod C', 'Prod D', 'Prod E'] }}
        />
      </FunnelChart>
    );
  },
};

export const FunnelCustomize: Story = {
  name: 'Customized Funnel',
  render() {
    return (
      <FunnelChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            name: 'Expected',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: { formatter: '{b}Expected' },
            labelLine: { show: false },
            itemStyle: { opacity: 0.7 },
            emphasis: { label: { position: 'inside', formatter: '{b}Expected: {c}%' } },
            data: [
              { value: 60, name: 'Visit' },
              { value: 40, name: 'Inquiry' },
              { value: 20, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
          {
            name: 'Actual',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: { position: 'inside', formatter: '{c}%', color: '#fff' },
            itemStyle: { opacity: 0.5, borderColor: '#fff', borderWidth: 2 },
            emphasis: { label: { position: 'inside', formatter: '{b}Actual: {c}%' } },
            data: [
              { value: 30, name: 'Visit' },
              { value: 10, name: 'Inquiry' },
              { value: 5, name: 'Order' },
              { value: 50, name: 'Click' },
              { value: 80, name: 'Show' },
            ],
            // Ensure outer shape will not be over inner shape when hover.
            z: 100,
          },
        ]}
      >
        <Title title={{ text: 'Funnel' }} />
        <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b} : {c}%' }} />
        <Toolbox toolbox={{ feature: { dataView: { readOnly: false }, restore: {}, saveAsImage: {} } }} />
        <Legend legend={{ data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'] }} />
      </FunnelChart>
    );
  },
};

export const FunnelMultiple: Story = {
  name: 'Multiple Funnels',
  render() {
    return (
      <FunnelChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            name: 'Funnel',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '50%',
            data: [
              { value: 60, name: 'Visit' },
              { value: 30, name: 'Inquiry' },
              { value: 10, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
          {
            name: 'Pyramid',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '5%',
            sort: 'ascending',
            data: [
              { value: 60, name: 'Visit' },
              { value: 30, name: 'Inquiry' },
              { value: 10, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
          {
            name: 'Funnel',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '5%',
            label: { position: 'left' },
            data: [
              { value: 60, name: 'Visit' },
              { value: 30, name: 'Inquiry' },
              { value: 10, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
          {
            name: 'Pyramid',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            sort: 'ascending',
            label: { position: 'left' },
            data: [
              { value: 60, name: 'Visit' },
              { value: 30, name: 'Inquiry' },
              { value: 10, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
        ]}
      >
        <Title title={{ text: 'Funnel', left: 'left', top: 'bottom' }} />
        <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b} : {c}%' }} />
        <Toolbox
          toolbox={{
            orient: 'vertical',
            top: 'center',
            feature: { dataView: { readOnly: false }, restore: {}, saveAsImage: {} },
          }}
        />
        <Legend legend={{ orient: 'vertical', left: 'left', data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'] }} />
      </FunnelChart>
    );
  },
};
