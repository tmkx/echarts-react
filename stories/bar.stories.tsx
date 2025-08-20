import {
  AxisBreak,
  BarChart,
  Brush,
  DataZoom,
  Dataset,
  Graphic,
  Legend,
  LineChart,
  MarkLine,
  MarkPoint,
  Polar,
  Title,
  Toolbox,
  Tooltip,
  echarts,
} from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';
import type { AxisBreakChangedEvent, BarSeriesOption } from 'echarts';
import type { TitleOption, XAXisOption } from 'echarts/types/dist/shared';
import type { BarSeriesLabelOption } from 'echarts/types/src/chart/bar/BarSeries.js';
import type { AxisBreakOption, ECActionEvent, OptionDataValue } from 'echarts/types/src/util/types.js';
import React from 'react';
import useSWR from 'swr';

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

export const BarWaterfall: Story = {
  name: 'Waterfall Chart',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
        xAxis={{
          type: 'category',
          splitLine: { show: false },
          data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other'],
        }}
        yAxis={{ type: 'value' }}
        series={[
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: { borderColor: 'transparent', color: 'transparent' },
            emphasis: { itemStyle: { borderColor: 'transparent', color: 'transparent' } },
            data: [0, 1700, 1400, 1200, 300, 0],
          },
          {
            name: 'Life Cost',
            type: 'bar',
            stack: 'Total',
            label: { show: true, position: 'inside' },
            data: [2900, 1200, 300, 200, 900, 300],
          },
        ]}
      >
        <Title title={{ text: 'Waterfall Chart', subtext: 'Living Expenses in Shenzhen' }} />
        <Tooltip
          tooltip={{
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter(params) {
              if (!Array.isArray(params)) return '';
              var tar = params[1]!;
              return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            },
          }}
        />
      </BarChart>
    );
  },
};

export const BarNegative2: Story = {
  name: 'Bar Chart with Negative Value',
  render() {
    const labelRight: BarSeriesLabelOption = { position: 'right' };

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        grid={{ top: 80, bottom: 30 }}
        xAxis={{ type: 'value', position: 'top', splitLine: { lineStyle: { type: 'dashed' } } }}
        yAxis={{
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one'],
        }}
        series={[
          {
            name: 'Cost',
            type: 'bar',
            stack: 'Total',
            label: { show: true, formatter: '{b}' },
            data: [
              { value: -0.07, label: labelRight },
              { value: -0.09, label: labelRight },
              0.2,
              0.44,
              { value: -0.23, label: labelRight },
              0.08,
              { value: -0.17, label: labelRight },
              0.47,
              { value: -0.36, label: labelRight },
              0.18,
            ],
          },
        ]}
      >
        <Title title={{ text: 'Bar Chart with Negative Value' }} />
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
      </BarChart>
    );
  },
};

export const BarPolarLabelRadial: Story = {
  name: 'Radial Polar Bar Label Position',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        series={{
          type: 'bar',
          data: [2, 1.2, 2.4, 3.6],
          coordinateSystem: 'polar',
          label: { show: true, position: 'middle', formatter: '{b}: {c}' },
        }}
        animation={false}
      >
        <Title title={[{ text: 'Radial Polar Bar Label Position (middle)' }]} />
        <Polar
          polar={{ radius: [30, '80%'] }}
          radiusAxis={{ max: 4 }}
          angleAxis={{ type: 'category', data: ['a', 'b', 'c', 'd'], startAngle: 75 }}
        />
        <Tooltip tooltip={{}} />
      </BarChart>
    );
  },
};

export const BarPolarLabelTangential: Story = {
  name: 'Tangential Polar Bar Label Position',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        series={{
          type: 'bar',
          data: [2, 1.2, 2.4, 3.6],
          coordinateSystem: 'polar',
          label: { show: true, position: 'middle', formatter: '{b}: {c}' },
        }}
      >
        <Title title={[{ text: 'Tangential Polar Bar Label Position (middle)' }]} />
        <Polar
          polar={{ radius: [30, '80%'] }}
          angleAxis={{ max: 4, startAngle: 75 }}
          radiusAxis={{ type: 'category', data: ['a', 'b', 'c', 'd'] }}
        />
        <Tooltip tooltip={{}} />
      </BarChart>
    );
  },
};

export const BarYCategory: Story = {
  name: 'World Population',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={{ type: 'value', boundaryGap: [0, 0.01] }}
        yAxis={{ type: 'category', data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'] }}
        series={[
          { name: '2011', type: 'bar', data: [18203, 23489, 29034, 104970, 131744, 630230] },
          { name: '2012', type: 'bar', data: [19325, 23438, 31000, 121594, 134141, 681807] },
        ]}
      >
        <Title title={{ text: 'World Population' }} />
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
        <Legend legend={{}} />
      </BarChart>
    );
  },
};

export const PolarEndAngle: Story = {
  name: 'Polar EndAngle',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        series={[
          { type: 'bar', polarIndex: 0, data: [1, 2, 3], coordinateSystem: 'polar' },
          { type: 'bar', polarIndex: 1, data: [1, 2, 3], coordinateSystem: 'polar' },
        ]}
      >
        <Tooltip tooltip={{}} />
        <Polar
          polar={[{}, {}]}
          angleAxis={[
            { type: 'category', polarIndex: 0, startAngle: 90, endAngle: 0, data: ['S1', 'S2', 'S3'] },
            { type: 'category', polarIndex: 1, startAngle: -90, endAngle: -180, data: ['T1', 'T2', 'T3'] },
          ]}
          radiusAxis={[{ polarIndex: 0 }, { polarIndex: 1 }]}
        />
      </BarChart>
    );
  },
};

export const BarBreaksSimple: Story = {
  name: 'Bar Chart with Axis Breaks',
  render() {
    type GraphicComponentLooseOption = Exclude<React.ComponentProps<typeof Graphic>['graphic'], any[] | undefined>;
    const chartRef = React.useRef<echarts.ECharts>(null);
    const [currentAxisBreaks, setCurrentAxisBreaks] = React.useState<AxisBreakOption[]>(() => [
      { start: 5000, end: 100000, gap: '1.5%' },
      // `start` and `end` are also used as the identifier for a certain axis break.
      { start: 105000, end: 3100000, gap: '1.5%' },
    ]);
    const [graphic, setGraphic] = React.useState<GraphicComponentLooseOption[]>([]);

    React.useEffect(() => {
      const myChart = chartRef.current;
      if (!myChart) return;
      const axisBreakChangedHandler = (params: AxisBreakChangedEvent) => {
        // If there is any axis break expanded, we need to show the collapse button.
        const needReset = params.breaks.some((brk) => brk.isExpanded);
        setCurrentAxisBreaks((breaks) =>
          breaks.map((brk): typeof brk => {
            const newBrk = params.breaks.find((newBrk) => newBrk.start === brk.start && newBrk.end === brk.end);
            return newBrk ? { ...brk, isExpanded: newBrk.isExpanded } : brk;
          })
        );
        setGraphic(
          needReset
            ? [
                {
                  elements: [
                    {
                      type: 'rect',
                      name: 'collapseAxisBreakBtn',
                      top: 5,
                      left: 5,
                      shape: { r: 3, width: 140, height: 24 },
                      style: { fill: '#eee', stroke: '#999', lineWidth: 1 },
                      textContent: {
                        type: 'text',
                        style: { text: 'Collapse Axis Breaks', fontSize: 13, fontWeight: 'bold' },
                      },
                      textConfig: { position: 'inside' },
                    },
                  ],
                },
              ]
            : []
        );
      };
      const clickHandler = (params: echarts.ECElementEvent) => {
        if (params.name === 'collapseAxisBreakBtn') {
          setCurrentAxisBreaks((breaks) => breaks.map((brk) => ({ ...brk, isExpanded: false })));
          setGraphic([]);
        }
      };
      myChart.on('axisbreakchanged', axisBreakChangedHandler as any);
      myChart.on('click', clickHandler);
      return () => {
        myChart.off('axisbreakchanged', axisBreakChangedHandler);
        myChart.off('click', clickHandler);
      };
    }, []);
    return (
      <BarChart
        ref={chartRef}
        style={{ width: 480, height: 300 }}
        grid={{ top: 120 }}
        xAxis={[{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }]}
        yAxis={[{ type: 'value', breaks: currentAxisBreaks, breakArea: { itemStyle: { opacity: 1 }, zigzagZ: 200 } }]}
        series={[
          {
            name: 'Data A',
            type: 'bar',
            emphasis: { focus: 'series' },
            data: [1500, 2032, 2001, 3154, 2190, 4330, 2410],
          },
          {
            name: 'Data B',
            type: 'bar',
            emphasis: { focus: 'series' },
            data: [1200, 1320, 1010, 1340, 900, 2300, 2100],
          },
          {
            name: 'Data C',
            type: 'bar',
            emphasis: { focus: 'series' },
            data: [103200, 100320, 103010, 102340, 103900, 103300, 103200],
          },
          {
            name: 'Data D',
            type: 'bar',
            data: [3106212, 3102118, 3102643, 3104631, 3106679, 3100130, 3107022],
            emphasis: { focus: 'series' },
          },
        ]}
      >
        <Title
          title={{
            text: 'Bar Chart with Axis Breaks',
            subtext: 'Click the break area to expand it',
            left: 'center',
            textStyle: { fontSize: 20 },
            subtextStyle: { color: '#175ce5', fontSize: 15, fontWeight: 'bold' },
          }}
        />
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
        <Legend legend={{}} />
        <AxisBreak />
        <Graphic graphic={graphic} />
      </BarChart>
    );
  },
};

export const BarGradient: Story = {
  name: 'Clickable Column Chart with Gradient',
  render() {
    // prettier-ignore
    let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
    // prettier-ignore
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];

    const chartRef = React.useRef<echarts.EChartsType>(null);
    const zoomSize = 6;

    React.useEffect(() => {
      const myChart = chartRef.current;
      if (!myChart) return;
      const clickHandler = function (params: echarts.ECElementEvent) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
          type: 'dataZoom',
          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
          endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
        });
      };
      myChart.on('click', clickHandler);
      return () => {
        myChart.off('click', clickHandler);
      };
    }, []);

    return (
      <BarChart
        ref={chartRef}
        style={{ width: 480, height: 300 }}
        xAxis={{
          data: dataAxis,
          axisLabel: { inside: true, color: '#fff' },
          axisTick: { show: false },
          axisLine: { show: false },
          z: 10,
        }}
        yAxis={{ axisLine: { show: false }, axisTick: { show: false }, axisLabel: { color: '#999' } }}
        series={[
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' },
                ]),
              },
            },
            data: data,
          },
        ]}
      >
        <Title
          title={{
            text: '特性示例：渐变色 阴影 点击缩放',
            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
          }}
        />
        <DataZoom dataZoom={[{ type: 'inside' }]} />
        <Legend legend={{}} />
      </BarChart>
    );
  },
};

const barLabelRotationAlign = ['left', 'center', 'right'] as const;
const barLabelRotationVerticalAlign = ['top', 'middle', 'bottom'] as const;
const barLabelRotationPosition = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight',
] as const;
const barLabelRotationMeta = {
  component: (_props: {
    rotate: number;
    align: (typeof barLabelRotationAlign)[number];
    verticalAlign: (typeof barLabelRotationVerticalAlign)[number];
    position: (typeof barLabelRotationPosition)[number];
    distance: number;
  }) => null,
  argTypes: {
    rotate: { control: { type: 'number', min: -90, max: 90 } },
    align: { control: { type: 'inline-radio' }, options: barLabelRotationAlign },
    verticalAlign: { control: { type: 'inline-radio' }, options: barLabelRotationVerticalAlign },
    position: { control: { type: 'inline-radio' }, options: barLabelRotationPosition },
    distance: { control: { type: 'number', min: 0, max: 100 } },
  },
} satisfies Meta;

export const BarLabelRotation: StoryObj<typeof barLabelRotationMeta> = {
  name: 'Bar Label Rotation',
  argTypes: barLabelRotationMeta.argTypes,
  args: { rotate: 90, align: 'left', verticalAlign: 'middle', position: 'insideBottom', distance: 15 },
  render(args) {
    const labelOption: BarSeriesLabelOption = {
      ...args,
      show: true,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: { name: {} },
    };

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        compose={[LineChart]}
        xAxis={[{ type: 'category', axisTick: { show: false }, data: ['2012', '2013', '2014', '2015', '2016'] }]}
        yAxis={[{ type: 'value' }]}
        series={[
          {
            name: 'Forest',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: { focus: 'series' },
            data: [320, 332, 301, 334, 390],
          },
          {
            name: 'Steppe',
            type: 'bar',
            label: labelOption,
            emphasis: { focus: 'series' },
            data: [220, 182, 191, 234, 290],
          },
          {
            name: 'Desert',
            type: 'bar',
            label: labelOption,
            emphasis: { focus: 'series' },
            data: [150, 232, 201, 154, 190],
          },
          {
            name: 'Wetland',
            type: 'bar',
            label: labelOption,
            emphasis: { focus: 'series' },
            data: [98, 77, 101, 99, 40],
          },
        ]}
      >
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
        <Legend legend={{ data: ['Forest', 'Steppe', 'Desert', 'Wetland'] }} />
        <Toolbox
          toolbox={{
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar', 'stack'] },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          }}
        />
      </BarChart>
    );
  },
};

export const BarStack: Story = {
  name: 'Stacked Column Chart',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={[{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }]}
        yAxis={[{ type: 'value' }]}
        series={[
          {
            name: 'Direct',
            type: 'bar',
            emphasis: { focus: 'series' },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: { focus: 'series' },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: { focus: 'series' },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: { focus: 'series' },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: { focus: 'series' },
            markLine: { lineStyle: { type: 'dashed' }, data: [[{ type: 'min' }, { type: 'max' }]] },
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: { focus: 'series' },
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: { focus: 'series' },
            data: [120, 132, 101, 134, 290, 230, 220],
          },
          {
            name: 'Bing',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: { focus: 'series' },
            data: [60, 72, 71, 74, 190, 130, 110],
          },
          {
            name: 'Others',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: { focus: 'series' },
            data: [62, 82, 91, 84, 109, 110, 120],
          },
        ]}
      >
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
        <Legend legend={{}} />
        <MarkLine />
      </BarChart>
    );
  },
};

export const BarStackBorderRadius: Story = {
  name: 'Stacked Bar with BorderRadius',
  render() {
    var series: BarSeriesOption[] = [
      { data: [120, 200, 150, 80, 70, 110, 130], type: 'bar', stack: 'a', name: 'a' },
      { data: [10, 46, 64, '-', 0, '-', 0], type: 'bar', stack: 'a', name: 'b' },
      { data: [30, '-', 0, 20, 10, '-', 0], type: 'bar', stack: 'a', name: 'c' },
      { data: [30, '-', 0, 20, 10, '-', 0], type: 'bar', stack: 'b', name: 'd' },
      { data: [10, 20, 150, 0, '-', 50, 10], type: 'bar', stack: 'b', name: 'e' },
    ];
    const stackInfo: Record<string, any> = {};
    for (let i = 0; i < series[0]!.data!.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j]!.stack;
        if (!stackName) continue;
        if (!stackInfo[stackName]) stackInfo[stackName] = { stackStart: [], stackEnd: [] };
        const info = stackInfo[stackName];
        const data = series[j]!.data![i];
        if (data && data !== '-') {
          if (info.stackStart[i] == null) info.stackStart[i] = j;
          info.stackEnd[i] = j;
        }
      }
    }
    for (let i = 0; i < series.length; ++i) {
      const data = series[i]!.data!;
      const info = stackInfo[series[i]!.stack!];
      for (let j = 0; j < series[i]!.data!.length; ++j) {
        const isEnd = info.stackEnd[j] === i;
        const topBorder = isEnd ? 20 : 0;
        const bottomBorder = 0;
        data[j] = {
          value: data[j] as OptionDataValue,
          itemStyle: { borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder] },
        };
      }
    }

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
        yAxis={{ type: 'value' }}
        series={series}
      />
    );
  },
};

export const BarStackNormalization: Story = {
  name: 'Stacked Bar Normalization',
  render() {
    const rawData = [
      [100, 302, 301, 334, 390, 330, 320],
      [320, 132, 101, 134, 90, 230, 210],
      [220, 182, 191, 234, 290, 330, 310],
      [150, 212, 201, 154, 190, 330, 410],
      [820, 832, 901, 934, 1290, 1330, 1320],
    ];
    const totalData: number[] = [];
    for (let i = 0; i < rawData[0]!.length; ++i) {
      let sum = 0;
      for (let j = 0; j < rawData.length; ++j) sum += rawData[j]![i]!;
      totalData.push(sum);
    }
    const series = ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine'].map(
      (name, sid): BarSeriesOption => {
        return {
          name,
          type: 'bar',
          stack: 'total',
          barWidth: '60%',
          label: { show: true, formatter: (params) => Math.round((params.value as number) * 100) + '%' },
          data: rawData[sid]!.map((d, did) => (totalData[did]! <= 0 ? 0 : d / totalData[did]!)),
        };
      }
    );

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        yAxis={{ type: 'value' }}
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
        series={series}
      >
        <Legend legend={{ selectedMode: false }} />
      </BarChart>
    );
  },
};

export const BarStackNormalizationAndVariation: Story = {
  name: 'Stacked Bar Normalization and Variation',
  render() {
    const WIDTH = 480;
    const HEIGHT = 300;
    const rawData = [
      [100, 302, 301, 334, 390, 330, 320],
      [320, 132, 101, 134, 90, 230, 210],
      [220, 182, 191, 234, 290, 330, 310],
      [150, 212, 201, 154, 190, 330, 410],
      [820, 832, 901, 934, 1290, 1330, 1320],
    ];
    const totalData: number[] = [];
    for (let i = 0; i < rawData[0]!.length; ++i) {
      let sum = 0;
      for (let j = 0; j < rawData.length; ++j) sum += rawData[j]![i]!;
      totalData.push(sum);
    }
    const grid = { left: 100, right: 100, top: 50, bottom: 50 };
    const gridWidth = WIDTH - grid.left - grid.right;
    const gridHeight = HEIGHT - grid.top - grid.bottom;
    const categoryWidth = gridWidth / rawData[0]!.length;
    const barWidth = categoryWidth * 0.6;
    const barPadding = (categoryWidth - barWidth) / 2;
    const series = ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine'].map(
      (name, sid): BarSeriesOption => {
        return {
          name,
          type: 'bar',
          stack: 'total',
          barWidth: '60%',
          label: { show: true, formatter: (params) => Math.round((params.value as number) * 100) + '%' },
          data: rawData[sid]!.map((d, did) => (totalData[did]! <= 0 ? 0 : d / totalData[did]!)),
        };
      }
    );
    const color = ['#5070dd', '#b6d634', '#505372', '#ff994d', '#0ca8df'];
    const elements: any[] = [];
    for (let j = 1, jlen = rawData[0]!.length; j < jlen; ++j) {
      const leftX = grid.left + categoryWidth * j - barPadding;
      const rightX = leftX + barPadding * 2;
      let leftY = grid.top + gridHeight;
      let rightY = leftY;
      for (let i = 0, len = series.length; i < len; ++i) {
        const points = [];
        const leftBarHeight = (rawData[i]![j - 1]! / totalData[j - 1]!) * gridHeight;
        points.push([leftX, leftY]);
        points.push([leftX, leftY - leftBarHeight]);
        const rightBarHeight = (rawData[i]![j]! / totalData[j]!) * gridHeight;
        points.push([rightX, rightY - rightBarHeight]);
        points.push([rightX, rightY]);
        points.push([leftX, leftY]);
        leftY -= leftBarHeight;
        rightY -= rightBarHeight;
        elements.push({ type: 'polygon', shape: { points }, style: { fill: color[i], opacity: 0.25 } });
      }
    }

    return (
      <BarChart
        style={{ width: WIDTH, height: HEIGHT }}
        grid={grid}
        yAxis={{ type: 'value' }}
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
        series={series}
      >
        <Legend legend={{ selectedMode: false }} />
        <Graphic graphic={{ elements }} />
      </BarChart>
    );
  },
};

export const BarWaterfall2: Story = {
  name: 'Waterfall Chart',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
        xAxis={{ type: 'category', data: Array.from({ length: 12 }, (_, i) => `Nov ${i + 1}`) }}
        yAxis={{ type: 'value' }}
        series={[
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            silent: true,
            itemStyle: { borderColor: 'transparent', color: 'transparent' },
            emphasis: { itemStyle: { borderColor: 'transparent', color: 'transparent' } },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
          },
          {
            name: 'Income',
            type: 'bar',
            stack: 'Total',
            label: { show: true, position: 'top' },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
          },
          {
            name: 'Expenses',
            type: 'bar',
            stack: 'Total',
            label: { show: true, position: 'bottom' },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
          },
        ]}
      >
        <Title title={{ text: 'Accumulated Waterfall Chart' }} />
        <Tooltip
          tooltip={{
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter(params) {
              if (!Array.isArray(params)) return '';
              let tar;
              if (params[1] && params[1].value !== '-') tar = params[1];
              else tar = params[2];
              return tar ? tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value : '';
            },
          }}
        />
        <Legend legend={{ data: ['Expenses', 'Income'] }} />
      </BarChart>
    );
  },
};

export const BarYCategoryStack: Story = {
  name: 'Stacked Horizontal Bar',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={{ type: 'value' }}
        yAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
        series={[
          {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: { show: true },
            emphasis: { focus: 'series' },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: { show: true },
            emphasis: { focus: 'series' },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: { show: true },
            emphasis: { focus: 'series' },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: { show: true },
            emphasis: { focus: 'series' },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: { show: true },
            emphasis: { focus: 'series' },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ]}
      >
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
        <Legend legend={{}} />
      </BarChart>
    );
  },
};

// FIXME: not working
export const BarBrush: Story = {
  name: 'Brush Select on Column Chart',
  render() {
    const [[xAxisData, data1, data2, data3, data4]] = React.useState(() => {
      let xAxisData = [];
      let data1 = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      for (let i = 0; i < 10; i++) {
        xAxisData.push('Class' + i);
        data1.push(+(Math.random() * 2).toFixed(2));
        data2.push(+(Math.random() * 5).toFixed(2));
        data3.push(+(Math.random() + 0.3).toFixed(2));
        data4.push(+Math.random().toFixed(2));
      }
      return [xAxisData, data1, data2, data3, data4] as const;
    });

    var emphasisStyle: BarSeriesOption['emphasis'] = {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.3)',
      },
    };

    const [title, setTitle] = React.useState<TitleOption>({});
    const chartRef = React.useRef<echarts.ECharts>(null);

    React.useEffect(() => {
      const myChart = chartRef.current;
      if (!myChart) return;
      const brushSelectedHandler = function (this: any, params: ECActionEvent) {
        var brushed: string[] = [];
        var brushComponent = params.batch![0]!;
        for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
          var rawIndices = brushComponent.selected[sIdx].dataIndex;
          brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
        }
        setTitle({
          backgroundColor: '#333',
          text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
          bottom: 0,
          right: '10%',
          width: 100,
          textStyle: { fontSize: 12, color: '#fff' },
        });
      };
      myChart.on('brushSelected', brushSelectedHandler as any);
      return () => {
        myChart.off('brushSelected', brushSelectedHandler);
      };
    }, []);

    return (
      <BarChart
        ref={chartRef}
        style={{ width: 480, height: 300 }}
        xAxis={{
          data: xAxisData,
          name: 'X Axis',
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false },
        }}
        yAxis={{}}
        grid={{ bottom: 100 }}
        series={[
          { name: 'bar', type: 'bar', stack: 'one', emphasis: emphasisStyle, data: data1 },
          { name: 'bar2', type: 'bar', stack: 'one', emphasis: emphasisStyle, data: data2 },
          { name: 'bar3', type: 'bar', stack: 'two', emphasis: emphasisStyle, data: data3 },
          { name: 'bar4', type: 'bar', stack: 'two', emphasis: emphasisStyle, data: data4 },
        ]}
      >
        <Title title={title} />
        <Legend legend={{ data: ['bar', 'bar2', 'bar3', 'bar4'], left: '10%' }} />
        <Brush
          brush={{
            xAxisIndex: 0,
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            brushType: 'rect',
          }}
        />
        <Toolbox toolbox={{ feature: { magicType: { type: ['stack'] }, dataView: {} } }} />
        <Tooltip tooltip={{}} />
      </BarChart>
    );
  },
};

export const BarNegative: Story = {
  name: 'Bar Chart with Negative Value',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={[{ type: 'value' }]}
        yAxis={[
          { type: 'category', axisTick: { show: false }, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        ]}
        series={[
          {
            name: 'Profit',
            type: 'bar',
            label: { show: true, position: 'inside' },
            emphasis: { focus: 'series' },
            data: [200, 170, 240, 244, 200, 220, 210],
          },
          {
            name: 'Income',
            type: 'bar',
            stack: 'Total',
            label: { show: true },
            emphasis: { focus: 'series' },
            data: [320, 302, 341, 374, 390, 450, 420],
          },
          {
            name: 'Expenses',
            type: 'bar',
            stack: 'Total',
            label: { show: true, position: 'left' },
            emphasis: { focus: 'series' },
            data: [-120, -132, -101, -134, -190, -230, -210],
          },
        ]}
      >
        <Legend legend={{ data: ['Profit', 'Expenses', 'Income'] }} />
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
      </BarChart>
    );
  },
};

export const Bar1: Story = {
  name: 'Rainfall and Evaporation',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={[
          {
            type: 'category',
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        ]}
        yAxis={[{ type: 'value' }]}
        series={[
          {
            name: 'Rainfall',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' },
              ],
            },
            markLine: { data: [{ type: 'average', name: 'Avg' }] },
          },
          {
            name: 'Evaporation',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 },
              ],
            },
            markLine: { data: [{ type: 'average', name: 'Avg' }] },
          },
        ]}
      >
        <Toolbox
          toolbox={{
            show: true,
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          }}
        />
        <Title title={{ text: 'Rainfall vs Evaporation', subtext: 'Fake Data' }} />
        <Legend legend={{ data: ['Rainfall', 'Evaporation'] }} />
        <Tooltip tooltip={{ trigger: 'axis' }} />
        <MarkPoint />
        <MarkLine />
      </BarChart>
    );
  },
};

export const MixLineBar: Story = {
  name: 'Mixed Line and Bar',
  render() {
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        compose={[LineChart]}
        xAxis={[
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisPointer: { type: 'shadow' },
          },
        ]}
        yAxis={[
          {
            type: 'value',
            name: 'Precipitation',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: { formatter: '{value} ml' },
          },
          {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: { formatter: '{value} °C' },
          },
        ]}
        series={[
          {
            name: 'Evaporation',
            type: 'bar',
            tooltip: { valueFormatter: (value) => value + ' ml' },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          },
          {
            name: 'Precipitation',
            type: 'bar',
            tooltip: { valueFormatter: (value) => value + ' ml' },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          },
          {
            name: 'Temperature',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: (value) => value + ' °C',
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          },
        ]}
      >
        <Legend legend={{ data: ['Evaporation', 'Precipitation', 'Temperature'] }} />
        <Toolbox
          toolbox={{
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          }}
        />
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'cross', crossStyle: { color: '#999' } } }} />
      </BarChart>
    );
  },
};

export const MixZoomOnValue: Story = {
  name: 'Mix Zoom On Value',
  render() {
    const { data } = useSWR('https://echarts.apache.org/examples/data/asset/data/obama_budget_proposal_2012.list.json');

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        grid={{ top: '12%', left: '1%', right: '10%', containLabel: true }}
        xAxis={[{ type: 'category', data: data?.names || [] }]}
        yAxis={[
          {
            type: 'value',
            name: 'Budget (million USD)',
            axisLabel: { formatter: (a) => (isFinite(a) ? echarts.format.addCommas(+a / 1000) : '') },
          },
        ]}
        series={[
          { name: 'Budget 2011', type: 'bar', data: data?.budget2011List || [] },
          { name: 'Budget 2012', type: 'bar', data: data?.budget2012List || [] },
        ]}
      >
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow', label: { show: true } } }} />
        <Toolbox
          toolbox={{
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          }}
        />
        <Legend legend={{ data: ['Growth', 'Budget 2011', 'Budget 2012'], itemGap: 5 }} />
        <DataZoom
          dataZoom={[
            { show: true, start: 94, end: 100 },
            { type: 'inside', start: 94, end: 100 },
            {
              show: true,
              yAxisIndex: 0,
              filterMode: 'empty',
              width: 30,
              height: '80%',
              showDataShadow: false,
              left: '93%',
            },
          ]}
        />
      </BarChart>
    );
  },
};

export const MultipleYAxis: Story = {
  name: 'Multiple Y Axes',
  render() {
    const colors = ['#5070dd', '#b6d634', '#505372'];
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        compose={[LineChart]}
        color={colors}
        grid={{ right: '20%' }}
        xAxis={[
          {
            type: 'category',
            axisTick: { alignWithLabel: true },
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        ]}
        yAxis={[
          {
            type: 'value',
            name: 'Evaporation',
            position: 'right',
            alignTicks: true,
            axisLine: { show: true, lineStyle: { color: colors[0]! } },
            axisLabel: { formatter: '{value} ml' },
          },
          {
            type: 'value',
            name: 'Precipitation',
            position: 'right',
            alignTicks: true,
            offset: 80,
            axisLine: { show: true, lineStyle: { color: colors[1]! } },
            axisLabel: { formatter: '{value} ml' },
          },
          {
            type: 'value',
            name: '温度',
            position: 'left',
            alignTicks: true,
            axisLine: { show: true, lineStyle: { color: colors[2]! } },
            axisLabel: { formatter: '{value} °C' },
          },
        ]}
        series={[
          {
            name: 'Evaporation',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          },
          {
            name: 'Precipitation',
            type: 'bar',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          },
          {
            name: 'Temperature',
            type: 'line',
            yAxisIndex: 2,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          },
        ]}
      >
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'cross' } }} />
        <Toolbox
          toolbox={{
            feature: {
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          }}
        />
        <Legend legend={{ data: ['Evaporation', 'Precipitation', 'Temperature'] }} />
      </BarChart>
    );
  },
};

export const BarAnimationDelay: Story = {
  name: 'Animation Delay',
  render() {
    var xAxisData: string[] = [];
    var data1: number[] = [];
    var data2: number[] = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push('A' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={{ data: xAxisData, splitLine: { show: false } }}
        yAxis={{}}
        series={[
          { name: 'bar', type: 'bar', data: data1, emphasis: { focus: 'series' }, animationDelay: (idx) => idx * 10 },
          {
            name: 'bar2',
            type: 'bar',
            data: data2,
            emphasis: { focus: 'series' },
            animationDelay: (idx) => idx * 10 + 100,
          },
        ]}
        animationEasing="elasticOut"
        animationDelayUpdate={(idx) => idx * 5}
      >
        <Title title={{ text: 'Bar Animation Delay' }} />
        <Legend legend={{ data: ['bar', 'bar2'] }} />
        <Toolbox
          toolbox={{
            feature: {
              magicType: { type: ['stack'] },
              dataView: {},
              saveAsImage: { pixelRatio: 2 },
            },
          }}
        />
        <Tooltip tooltip={{}} />
      </BarChart>
    );
  },
};

// FIXME: animation
export const BarDrilldown: Story = {
  name: 'Bar Chart Drilldown Animation',
  render() {
    type GraphicComponentLooseOption = Exclude<React.ComponentProps<typeof Graphic>['graphic'], any[] | undefined>;
    const chartRef = React.useRef<echarts.ECharts>(null);

    const drilldownData = [
      {
        dataGroupId: 'animals',
        data: [
          ['Cats', 4],
          ['Dogs', 2],
          ['Cows', 1],
          ['Sheep', 2],
          ['Pigs', 1],
        ],
      },
      {
        dataGroupId: 'fruits',
        data: [
          ['Apples', 4],
          ['Oranges', 2],
        ],
      },
      {
        dataGroupId: 'cars',
        data: [
          ['Toyota', 4],
          ['Opel', 2],
          ['Volkswagen', 2],
        ],
      },
    ];

    const defaultXAxis: XAXisOption = { data: ['Animals', 'Fruits', 'Cars'] };
    const defaultSeries: BarSeriesOption = {
      type: 'bar',
      id: 'sales',
      data: [
        { value: 5, groupId: 'animals' },
        { value: 2, groupId: 'fruits' },
        { value: 4, groupId: 'cars' },
      ],
      universalTransition: { enabled: true, divideShape: 'clone' },
    };
    const [xAxis, setXAxis] = React.useState<XAXisOption>(defaultXAxis);
    const [series, setSeries] = React.useState<BarSeriesOption>(defaultSeries);
    const [graphic, setGraphic] = React.useState<GraphicComponentLooseOption[]>([]);

    React.useEffect(() => {
      const myChart = chartRef.current;
      if (!myChart) return;
      const clickHandler = (event: echarts.ECElementEvent) => {
        if (!event.data) return;
        var subData = drilldownData.find((data) => data.dataGroupId === (event.data as any).groupId);
        if (!subData) return;
        setXAxis({ data: subData.data.map((item) => item[0]!) });
        setSeries({
          type: 'bar',
          id: 'sales',
          dataGroupId: subData.dataGroupId,
          data: subData.data.map((item) => item[1]),
          universalTransition: { enabled: true, divideShape: 'clone' },
        });
        setGraphic([
          {
            type: 'text',
            left: 50,
            top: 20,
            style: { text: 'Back', fontSize: 18 },
            onclick() {
              setXAxis(defaultXAxis);
              setSeries(defaultSeries);
              setGraphic([]);
            },
          },
        ]);
      };
      myChart.on('click', clickHandler);
      return () => {
        myChart.off('click', clickHandler);
      };
    }, []);

    return (
      <BarChart
        ref={chartRef}
        style={{ width: 480, height: 300 }}
        xAxis={xAxis}
        yAxis={{}}
        animationDurationUpdate={500}
        series={series}
      >
        <Graphic graphic={graphic} />
      </BarChart>
    );
  },
};

export const BarLarge: Story = {
  name: 'Large Scale Bar Chart',
  render() {
    function generateData(count: number) {
      let baseValue = Math.random() * 1000;
      let time = +new Date(2011, 0, 1);
      let smallBaseValue: number;
      function next(idx: number) {
        smallBaseValue = idx % 30 === 0 ? Math.random() * 700 : smallBaseValue + Math.random() * 500 - 250;
        baseValue += Math.random() * 20 - 10;
        return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
      }
      const categoryData: string[] = [];
      const valueData: string[] = [];
      for (let i = 0; i < count; i++) {
        categoryData.push(echarts.time.format(time, '{yyyy}-{MM}-{dd}\n{hh}:{mm}:{ss}', false));
        valueData.push(next(i).toFixed(2));
        time += 1000;
      }
      return { categoryData, valueData };
    }
    const dataCount = 5e5;
    const data = React.useMemo(() => generateData(dataCount), []);

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        grid={{ bottom: 90 }}
        xAxis={{
          data: data.categoryData,
          silent: false,
          splitLine: { show: false },
          splitArea: { show: false },
        }}
        yAxis={{ splitArea: { show: false } }}
        series={[{ type: 'bar', data: data.valueData, large: true }]}
      >
        <Title title={{ text: echarts.format.addCommas(dataCount) + ' Data', left: 10 }} />
        <DataZoom dataZoom={[{ type: 'inside' }, { type: 'slider' }]} />
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
        <Toolbox toolbox={{ feature: { dataZoom: { yAxisIndex: false }, saveAsImage: { pixelRatio: 2 } } }} />
      </BarChart>
    );
  },
};

export const BarRace: Story = {
  name: 'Bar Race',
  render() {
    const [data, setData] = React.useState(() => Array.from({ length: 5 }, () => Math.round(Math.random() * 200)));

    React.useEffect(() => {
      function run() {
        setData((data) =>
          data.map((v) => {
            if (Math.random() > 0.9) return v + Math.round(Math.random() * 2000);
            else return v + Math.round(Math.random() * 200);
          })
        );
      }
      run();
      const timer = setInterval(run, 3000);
      return () => clearInterval(timer);
    }, []);

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        xAxis={{ max: 'dataMax' }}
        yAxis={{
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2, // only the largest 3 bars will be displayed
        }}
        series={[
          {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data,
            label: { show: true, position: 'right', valueAnimation: true },
          },
        ]}
        animationDuration={0}
        animationDurationUpdate={3000}
        animationEasing="linear"
        animationEasingUpdate="linear"
      >
        <Legend legend={{ show: true }} />
      </BarChart>
    );
  },
};

// FIXME: animation
export const BarMultiDrilldown: Story = {
  name: 'Bar Chart Multi-level Drilldown Animation',
  render() {
    // prettier-ignore
    const data_things = [['Animals', 3, 'things', 'animals'], ['Fruits', 3, 'things', 'fruits'], ['Cars', 2, 'things', 'cars']];
    // level 2
    // prettier-ignore
    const data_animals = [['Dogs', 3, 'animals', 'dogs'], ['Cats', 4, 'animals', 'cats'], ['Birds', 3, 'animals', 'birds']];
    // prettier-ignore
    const data_fruits = [['Pomes', 3, 'fruits', 'pomes'], ['Berries', 4, 'fruits', 'berries'], ['Citrus', 9, 'fruits', 'citrus']];
    // prettier-ignore
    const data_cars = [['SUV', 5, 'cars', 'suv'], ['Sports', 3, 'cars', 'sports']];
    // level 3
    // prettier-ignore
    const data_dogs = [['Corgi', 5, 'dogs'], ['Bulldog', 6, 'dogs'], ['Shiba Inu', 7, 'dogs']];
    // prettier-ignore
    const data_cats = [['American Shorthair', 2, 'cats'], ['British Shorthair', 9, 'cats'], ['Bengal', 2, 'cats'], ['Birman', 2, 'cats']];
    // prettier-ignore
    const data_birds = [['Goose', 1, 'birds'], ['Owl', 2, 'birds'], ['Eagle', 8, 'birds']];
    // prettier-ignore
    const data_pomes = [['Apple', 9, 'pomes'], ['Pear', 2, 'pomes'], ['Kiwi', 1, 'pomes']];
    // prettier-ignore
    const data_berries = [['Blackberries', 7, 'berries'], ['Cranberries', 2, 'berries'], ['Strawberries', 9, 'berries'], ['Grapes', 4, 'berries']];
    // prettier-ignore
    const data_citrus = [['Oranges', 3, 'citrus'], ['Grapefruits', 7, 'citrus'], ['Tangerines', 8, 'citrus'], ['Lemons', 7, 'citrus'], ['Limes', 3, 'citrus'], ['Kumquats', 2, 'citrus'], ['Citrons', 3, 'citrus'], ['Tengelows', 3, 'citrus'], ['Uglifruit', 1, 'citrus']];
    // prettier-ignore
    const data_suv = [['Mazda CX-30', 7, 'suv'], ['BMW X2', 7, 'suv'], ['Ford Bronco Sport', 2, 'suv'], ['Toyota RAV4', 9, 'suv'], ['Porsche Macan', 4, 'suv']];
    // prettier-ignore
    const data_sports = [['Porsche 718 Cayman', 2, 'sports'], ['Porsche 911 Turbo', 2, 'sports'], ['Ferrari F8', 4, 'sports']];
    // prettier-ignore
    const allLevelData = [data_things, data_animals, data_fruits, data_cars, data_dogs, data_cats, data_birds, data_pomes, data_berries, data_citrus, data_suv, data_sports];

    const allOptions: Record<string, { id: string | number; data: (string | number)[][] }> = {};
    allLevelData.forEach((data) => {
      // since dataItems of each data have same groupId in this
      // example, we can use groupId as optionId for optionStack.
      const optionId = data[0]![2]!;
      const option = { id: optionId, data };
      allOptions[optionId] = option;
    });
    const chartRef = React.useRef<echarts.ECharts>(null);
    const [data, setData] = React.useState(allOptions['things']!.data);
    // A stack to remember previous option id
    const optionStack = React.useRef<(string | number)[]>([]);
    const currentOptionId = React.useRef<string | number>('things');
    const goForward = (optionId: string) => {
      optionStack.current.push(currentOptionId.current); // push current option id into stack.
      currentOptionId.current = optionId;
      setData(allOptions[optionId]!.data);
    };
    const goBack = () => {
      if (optionStack.current.length === 0) {
        console.log('Already in root level!');
      } else {
        console.log('Go back to previous level.');
        setData(allOptions[(currentOptionId.current = optionStack.current.pop()!)]!.data);
      }
    };
    React.useEffect(() => {
      const myChart = chartRef.current;
      if (!myChart) return;
      const clickHandler = (params: echarts.ECElementEvent) => {
        const dataItem = params.data as any[];
        if (dataItem[3]) {
          // If current params is not belong to the "childest" data, it has data[3]
          const childGroupId = dataItem[3];
          // since we use groupId as optionId in this example,
          // we use childGroupId as the next level optionId.
          const nextOptionId = childGroupId;
          goForward(nextOptionId);
        }
      };
      myChart.on('click', 'series', clickHandler);
      return () => {
        myChart.off('click', clickHandler);
      };
    }, []);

    return (
      <BarChart
        ref={chartRef}
        style={{ width: 480, height: 300 }}
        xAxis={{ type: 'category' }}
        yAxis={{ minInterval: 1 }}
        series={{
          type: 'bar',
          dimensions: ['x', 'y', 'groupId', 'childGroupId'],
          encode: { x: 'x', y: 'y', itemGroupId: 'groupId', itemChildGroupId: 'childGroupId' },
          data,
          universalTransition: { enabled: true, divideShape: 'clone' },
        }}
        animationDurationUpdate={500}
      >
        <Graphic
          graphic={[
            {
              type: 'text',
              left: 50,
              top: 20,
              style: { text: 'Back', fontSize: 18, fill: 'grey' },
              onclick: () => goBack(),
            },
          ]}
        />
      </BarChart>
    );
  },
};

export const BarRaceCountry: Story = {
  name: 'Bar Race',
  render() {
    const updateFrequency = 2000;
    const dimension = 0;
    const countryColors = {
      Australia: '#00008b',
      Canada: '#f00',
      China: '#ffde00',
      Cuba: '#002a8f',
      Finland: '#003580',
      France: '#ed2939',
      Germany: '#000',
      Iceland: '#003897',
      India: '#f93',
      Japan: '#bc002d',
      'North Korea': '#024fa2',
      'South Korea': '#000',
      'New Zealand': '#00247d',
      Norway: '#ef2b2d',
      Poland: '#dc143c',
      Russia: '#d52b1e',
      Turkey: '#e30a17',
      'United Kingdom': '#00247d',
      'United States': '#b22234',
    };

    const { data } = useSWR<
      [income: number, lifeExpectancy: number, population: number, country: string, year: number][]
    >('https://echarts.apache.org/examples/data/asset/data/life-expectancy-table.json');
    const years = React.useMemo(() => {
      if (!data) return [];
      const result: number[] = [];
      for (let i = 1; i < data.length; ++i) {
        if (result[result.length - 1] !== data[i]![4]) result.push(data[i]![4]);
      }
      return result;
    }, [data]);

    const [startIndex, setStartIndex] = React.useState(0);
    const startYear = years[startIndex] || 0;

    React.useEffect(() => {
      if (!years.length) return;
      const timer = { current: 0 };
      let startIndex = 0;
      function tick() {
        if (startIndex < years.length - 1) {
          setStartIndex(++startIndex);
          timer.current = window.setTimeout(tick, updateFrequency);
        }
      }
      tick();
      return () => clearTimeout(timer.current);
    }, [years]);

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        grid={{ top: 10, bottom: 30, left: 150, right: 80 }}
        xAxis={{ max: 'dataMax', axisLabel: { formatter: (n: number) => Math.round(n).toString() } }}
        yAxis={{
          type: 'category',
          inverse: true,
          max: 10,
          axisLabel: { show: true, fontSize: 14 },
          animationDuration: 300,
          animationDurationUpdate: 300,
        }}
        series={[
          {
            realtimeSort: true,
            seriesLayoutBy: 'column',
            type: 'bar',
            itemStyle: {
              color: (param) => countryColors[(param.value as any[])[3] as keyof typeof countryColors] || '#5470c6',
            },
            encode: { x: dimension, y: 3 },
            label: { show: true, precision: 1, position: 'right', valueAnimation: true, fontFamily: 'monospace' },
          },
        ]}
        animationDuration={0}
        animationDurationUpdate={updateFrequency}
        animationEasing="linear"
        animationEasingUpdate="linear"
      >
        <Dataset dataset={{ source: data?.slice(1).filter((d) => d[4] === startYear) || [] }} />
        <Graphic
          graphic={{
            elements: [
              {
                type: 'text',
                right: 160,
                bottom: 60,
                style: { text: String(startYear), font: 'bolder 80px monospace', fill: 'rgba(100, 100, 100, 0.25)' },
                z: 100,
              },
            ],
          }}
        />
      </BarChart>
    );
  },
};

export const BarRichText: Story = {
  name: 'Wheater Statistics',
  render() {
    const seriesLabel: BarSeriesLabelOption = { show: true };
    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        grid={{ left: 100 }}
        xAxis={{ type: 'value', name: 'Days', axisLabel: { formatter: '{value}' } }}
        yAxis={{ type: 'category', inverse: true, data: ['Sunny', 'Cloudy', 'Showers'], axisLabel: { margin: 20 } }}
        series={[
          {
            name: 'City Alpha',
            type: 'bar',
            data: [165, 170, 30],
            label: seriesLabel,
            markPoint: {
              symbolSize: 1,
              symbolOffset: [0, '50%'],
              label: {
                formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                backgroundColor: 'rgb(242,242,242)',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                padding: [4, 10],
                lineHeight: 26,
                position: 'right',
                distance: 20,
                rich: {
                  a: {
                    align: 'center',
                    color: '#fff',
                    fontSize: 18,
                    textShadowBlur: 2,
                    textShadowColor: '#000',
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 1,
                    textBorderColor: '#333',
                    textBorderWidth: 2,
                  },
                  b: { color: '#333' },
                  c: { color: '#ff8811', textBorderColor: '#000', textBorderWidth: 1, fontSize: 22 },
                },
              },
              data: [
                { type: 'max', name: 'max days: ' },
                { type: 'min', name: 'min days: ' },
              ],
            },
          },
          { name: 'City Beta', type: 'bar', label: seriesLabel, data: [150, 105, 110] },
          { name: 'City Gamma', type: 'bar', label: seriesLabel, data: [220, 82, 63] },
        ]}
      >
        <Title title={{ text: 'Weather Statistics' }} />
        <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
        <Legend legend={{ data: ['City Alpha', 'City Beta', 'City Gamma'] }} />
        <Toolbox toolbox={{ show: true, feature: { saveAsImage: {} } }} />
        <MarkPoint />
      </BarChart>
    );
  },
};

export const DynamicData: Story = {
  name: 'Dynamic Data',
  render() {
    const [categories, setCategories] = React.useState(() => {
      let now = new Date();
      let res = [];
      let len = 10;
      while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(+now - 2000);
      }
      return res;
    });
    const [categories2, setCategories2] = React.useState(() => {
      let res = [];
      let len = 10;
      while (len--) res.push(10 - len - 1);
      return res;
    });
    const [data, setData] = React.useState(() => {
      let res = [];
      let len = 10;
      while (len--) res.push(Math.round(Math.random() * 1000));
      return res;
    });
    const [data2, setData2] = React.useState(() => {
      let res = [];
      let len = 0;
      while (len < 10) {
        res.push(+(Math.random() * 10 + 5).toFixed(1));
        len++;
      }
      return res;
    });

    const appCountRef = React.useRef(11);
    React.useEffect(() => {
      const timer = setInterval(function () {
        setCategories((categories) => {
          const copy = [...categories];
          const axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
          copy.shift();
          copy.push(axisData);
          return copy;
        });
        setCategories2((categories2) => {
          const copy = [...categories2];
          copy.shift();
          copy.push(appCountRef.current++);
          return copy;
        });
        setData((data) => {
          const copy = [...data];
          copy.shift();
          copy.push(Math.round(Math.random() * 1000));
          return copy;
        });
        setData2((data2) => {
          const copy = [...data2];
          data2.shift();
          data2.push(+(Math.random() * 10 + 5).toFixed(1));
          return copy;
        });
      }, 2100);
      return () => clearInterval(timer);
    });

    return (
      <BarChart
        style={{ width: 480, height: 300 }}
        compose={[LineChart]}
        xAxis={[
          { type: 'category', boundaryGap: true, data: categories },
          { type: 'category', boundaryGap: true, data: categories2 },
        ]}
        yAxis={[
          { type: 'value', scale: true, name: 'Price', max: 30, min: 0, boundaryGap: [0.2, 0.2] },
          { type: 'value', scale: true, name: 'Order', max: 1200, min: 0, boundaryGap: [0.2, 0.2] },
        ]}
        series={[
          {
            name: 'Dynamic Bar',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: data,
          },
          {
            name: 'Dynamic Line',
            type: 'line',
            data: data2,
          },
        ]}
      >
        <Title title={{ text: 'Dynamic Data' }} />
        <Tooltip
          tooltip={{
            trigger: 'axis',
            axisPointer: { type: 'cross', label: { backgroundColor: '#283b56' } },
          }}
        />
        <Legend legend={{}} />
        <Toolbox toolbox={{ show: true, feature: { dataView: { readOnly: false }, restore: {}, saveAsImage: {} } }} />
        <DataZoom dataZoom={{ show: false, start: 0, end: 100 }} />
      </BarChart>
    );
  },
};
