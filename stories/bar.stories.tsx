import {
  AxisBreak,
  BarChart,
  Brush,
  DataZoom,
  Graphic,
  Legend,
  LineChart,
  MarkLine,
  Polar,
  Title,
  Toolbox,
  Tooltip,
  echarts,
} from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';
import type { AxisBreakChangedEvent, BarSeriesOption } from 'echarts';
import type { TitleOption } from 'echarts/types/dist/shared';
import type { BarSeriesLabelOption } from 'echarts/types/src/chart/bar/BarSeries.js';
import type { AxisBreakOption, ECActionEvent, OptionDataValue } from 'echarts/types/src/util/types.js';
import React from 'react';

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
