import type { Meta } from '@storybook/react';
import {
  AxisBreak,
  Dataset,
  DataZoom,
  echarts,
  Graphic,
  Legend,
  LineChart,
  MarkArea,
  MarkLine,
  MarkPoint,
  Polar,
  Title,
  Toolbox,
  Tooltip,
  VisualMap,
} from '@fanciers/echarts-react';
import type { LineSeriesOption } from 'echarts/charts';
import type { DatasetOption, GridOption, TitleOption, XAXisOption, YAXisOption } from 'echarts/types/dist/shared';
import React from 'react';
import useSWR from 'swr';
import type {
  MarkLine1DDataItemOption,
  MarkLine2DDataItemOption,
} from 'echarts/types/src/component/marker/MarkLineModel.js';
import type { LineLabelOption } from 'echarts/types/src/util/types.js';

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

export function AreaStackGradient() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      color={['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00']}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          name: 'Line 1',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)',
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [140, 232, 101, 264, 90, 340, 250],
        },
        {
          name: 'Line 2',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(0, 221, 255)',
              },
              {
                offset: 1,
                color: 'rgb(77, 119, 255)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [120, 282, 111, 234, 220, 340, 310],
        },
        {
          name: 'Line 3',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(55, 162, 255)',
              },
              {
                offset: 1,
                color: 'rgb(116, 21, 219)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [320, 132, 201, 334, 190, 130, 220],
        },
        {
          name: 'Line 4',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 0, 135)',
              },
              {
                offset: 1,
                color: 'rgb(135, 0, 157)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [220, 402, 231, 134, 190, 230, 120],
        },
        {
          name: 'Line 5',
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          label: {
            show: true,
            position: 'top',
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 191, 0)',
              },
              {
                offset: 1,
                color: 'rgb(224, 62, 76)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [220, 302, 181, 234, 210, 290, 150],
        },
      ]}
    >
      <Title title={{ text: 'Gradient Stacked Area Chart' }} />
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
      <Legend legend={{ data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'] }} />
      <Toolbox toolbox={{ feature: { saveAsImage: {} } }} />
    </LineChart>
  );
}

export function BumpChart() {
  const names = ['Orange', 'Tomato', 'Apple', 'Sakana', 'Banana', 'Iwashi', 'Snappy Fish', 'Lemon', 'Pasta'];
  const years = ['2001', '2002', '2003', '2004', '2005', '2006'];
  const shuffle = (array: unknown[]) => {
    let currentIndex = array.length;
    let randomIndex = 0;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };
  const generateRankingData = () => {
    const map = new Map();
    const defaultRanking = Array.from({ length: names.length }, (_, i) => i + 1);
    for (const _ of years) {
      const shuffleArray = shuffle(defaultRanking);
      names.forEach((name, i) => {
        map.set(name, (map.get(name) || []).concat(shuffleArray[i]));
      });
    }
    return map;
  };
  const generateSeriesList = () => {
    const seriesList: LineSeriesOption[] = [];
    const rankingMap = generateRankingData();
    rankingMap.forEach((data, name) => {
      const series: LineSeriesOption = {
        name,
        symbolSize: 20,
        type: 'line',
        smooth: true,
        emphasis: { focus: 'series' },
        endLabel: { show: true, formatter: '{a}', distance: 20 },
        lineStyle: { width: 4 },
        data,
      };
      seriesList.push(series);
    });
    return seriesList;
  };

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      color={['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00']}
      xAxis={{
        type: 'category',
        splitLine: { show: true },
        axisLabel: { margin: 30, fontSize: 16 },
        boundaryGap: false,
        data: years,
      }}
      yAxis={{
        type: 'value',
        axisLabel: { margin: 30, fontSize: 16, formatter: '#{value}' },
        inverse: true,
        interval: 1,
        min: 1,
        max: names.length,
      }}
      grid={{ left: 30, right: 110, bottom: 30, containLabel: true }}
      series={generateSeriesList()}
    >
      <Title title={{ text: 'Bump Chart (Ranking)' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
      <Legend legend={{ data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'] }} />
      <Toolbox toolbox={{ feature: { saveAsImage: {} } }} />
    </LineChart>
  );
}

export function LineMarker() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{
        type: 'value',
        axisLabel: { formatter: '{value} °C' },
      }}
      series={[
        {
          name: 'Highest',
          type: 'line',
          data: [10, 11, 13, 11, 12, 12, 9],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' },
            ],
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
          },
        },
        {
          name: 'Lowest',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' },
              [
                { symbol: 'none', x: '90%', yAxis: 'max' },
                {
                  symbol: 'circle',
                  label: { position: 'start', formatter: 'Max' },
                  type: 'max',
                  name: '最高点',
                },
              ],
            ],
          },
        },
      ]}
    >
      <Title title={{ text: 'Temperature Change in the Coming Week' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{}} />
      <Toolbox
        toolbox={{
          show: true,
          feature: {
            dataZoom: { yAxisIndex: 'none' },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {},
          },
        }}
      />
      <MarkLine />
      <MarkPoint />
    </LineChart>
  );
}

export function AreaPieces() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', boundaryGap: false }}
      yAxis={{ type: 'value', boundaryGap: [0, '30%'] }}
      series={[
        {
          type: 'line',
          smooth: 0.6,
          symbol: 'none',
          lineStyle: { color: '#5470C6', width: 5 },
          markLine: {
            symbol: ['none', 'none'],
            label: { show: false },
            data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
          },
          areaStyle: {},
          data: [
            ['2019-10-10', 200],
            ['2019-10-11', 560],
            ['2019-10-12', 750],
            ['2019-10-13', 580],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100],
          ],
        },
      ]}
    >
      <VisualMap
        visualMap={{
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            { gt: 1, lt: 3, color: 'rgba(0, 0, 180, 0.4)' },
            { gt: 5, lt: 7, color: 'rgba(0, 0, 180, 0.4)' },
          ],
        }}
      />
    </LineChart>
  );
}

export function DataTransformFilter() {
  const { data } = useSWR('https://echarts.apache.org/examples/data/asset/data/life-expectancy-table.json');

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', nameLocation: 'middle' }}
      yAxis={{ name: 'Income' }}
      series={[
        {
          type: 'line',
          datasetId: 'dataset_since_1950_of_germany',
          showSymbol: false,
          encode: {
            x: 'Year',
            y: 'Income',
            itemName: 'Year',
            tooltip: ['Income'],
          },
        },
        {
          type: 'line',
          datasetId: 'dataset_since_1950_of_france',
          showSymbol: false,
          encode: {
            x: 'Year',
            y: 'Income',
            itemName: 'Year',
            tooltip: ['Income'],
          },
        },
      ]}
    >
      <Title title={{ text: 'Income of Germany and France since 1950' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Dataset
        dataset={
          data
            ? [
                { id: 'dataset_raw', source: data },
                {
                  id: 'dataset_since_1950_of_germany',
                  fromDatasetId: 'dataset_raw',
                  transform: {
                    type: 'filter',
                    config: {
                      and: [
                        { dimension: 'Year', gte: 1950 },
                        { dimension: 'Country', '=': 'Germany' },
                      ],
                    },
                  },
                },
                {
                  id: 'dataset_since_1950_of_france',
                  fromDatasetId: 'dataset_raw',
                  transform: {
                    type: 'filter',
                    config: {
                      and: [
                        { dimension: 'Year', gte: 1950 },
                        { dimension: 'Country', '=': 'France' },
                      ],
                    },
                  },
                },
              ]
            : []
        }
      />
    </LineChart>
  );
}

export function LineGradient() {
  // prettier-ignore
  const data: [string, number][] = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
  const dateList = data.map((item) => item[0]);
  const valueList = data.map((item) => item[1]);
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={[{ data: dateList }, { data: dateList, gridIndex: 1 }]}
      yAxis={[{}, { gridIndex: 1 }]}
      grid={[{ bottom: '60%' }, { top: '60%' }]}
      series={[
        { type: 'line', showSymbol: false, data: valueList },
        { type: 'line', showSymbol: false, data: valueList, xAxisIndex: 1, yAxisIndex: 1 },
      ]}
    >
      <VisualMap
        visualMap={[
          { show: false, type: 'continuous', seriesIndex: 0, min: 0, max: 400 },
          { show: false, type: 'continuous', seriesIndex: 1, dimension: 0, min: 0, max: dateList.length - 1 },
        ]}
      />
      <Title
        title={[
          { left: 'center', text: 'Gradient along the y axis' },
          { top: '55%', left: 'center', text: 'Gradient along the x axis' },
        ]}
      />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  );
}

export function LineSections() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{
        type: 'category',
        boundaryGap: false,
        // prettier-ignore
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
      }}
      yAxis={{
        type: 'value',
        axisLabel: { formatter: '{value} W' },
        axisPointer: { snap: true },
      }}
      series={[
        {
          name: 'Electricity',
          type: 'line',
          smooth: true,
          // prettier-ignore
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
          markArea: {
            itemStyle: {
              color: 'rgba(255, 173, 177, 0.4)',
            },
            data: [
              [{ name: 'Morning Peak', xAxis: '07:30' }, { xAxis: '10:00' }],
              [{ name: 'Evening Peak', xAxis: '17:30' }, { xAxis: '21:15' }],
            ],
          },
        },
      ]}
    >
      <VisualMap
        visualMap={{
          show: false,
          dimension: 0,
          pieces: [
            { lte: 6, color: 'green' },
            { gt: 6, lte: 8, color: 'red' },
            { gt: 8, lte: 14, color: 'green' },
            { gt: 14, lte: 17, color: 'red' },
            { gt: 17, color: 'green' },
          ],
        }}
      />
      <Title title={{ text: 'Distribution of Electricity', subtext: 'Fake Data' }} />
      <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'cross' } }} />
      <Toolbox toolbox={{ show: true, feature: { saveAsImage: {} } }} />
      <MarkArea />
    </LineChart>
  );
}

export function AreaSimple() {
  let base = +new Date(1968, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let date = [];
  let data = [Math.random() * 300];
  for (let i = 1; i < 20000; i++) {
    var now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + (data[i - 1] || 0)));
  }
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', boundaryGap: false, data: date }}
      yAxis={{ type: 'value', boundaryGap: [0, '100%'] }}
      series={[
        {
          name: 'Fake Data',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: { color: 'rgb(255, 70, 131)' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgb(255, 158, 68)' },
              { offset: 1, color: 'rgb(255, 70, 131)' },
            ]),
          },
          data: data,
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'axis', position: (pt) => [pt[0], '10%'] }} />
      <Title title={{ left: 'center', text: 'Large Area Chart' }} />
      <DataZoom
        dataZoom={[
          { type: 'inside', start: 0, end: 10 },
          { start: 0, end: 10 },
        ]}
      />
      <Toolbox toolbox={{ feature: { dataZoom: { yAxisIndex: 'none' }, restore: {}, saveAsImage: {} } }} />
    </LineChart>
  );
}

export function ConfidenceBand() {
  const { data } = useSWR<{ date: string; value: number; u: number; l: number }[]>(
    'https://echarts.apache.org/examples/data/asset/data/confidence-band.json'
  );
  var base = -(
    data?.reduce(function (min, val) {
      return Math.floor(Math.min(min, val.l));
    }, Infinity) ?? 0
  );

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{
        type: 'category',
        data: data?.map((item) => item.date) || [],
        axisLabel: {
          formatter(value, idx) {
            var date = new Date(value);
            return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
          },
        },
        boundaryGap: false,
      }}
      yAxis={{
        axisLabel: { formatter: (val: number) => (val - base) * 100 + '%' },
        axisPointer: { label: { formatter: (params) => ((Number(params.value) - base) * 100).toFixed(1) + '%' } },
        splitNumber: 3,
      }}
      grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
      series={[
        {
          name: 'L',
          type: 'line',
          data: data?.map((item) => item.l + base) || [],
          lineStyle: { opacity: 0 },
          stack: 'confidence-band',
          symbol: 'none',
        },
        {
          name: 'U',
          type: 'line',
          data: data?.map((item) => item.u - item.l) || [],
          lineStyle: { opacity: 0 },
          areaStyle: { color: '#ccc' },
          stack: 'confidence-band',
          symbol: 'none',
        },
        {
          type: 'line',
          data: data?.map((item) => item.value + base) || [],
          itemStyle: { color: '#333' },
          showSymbol: false,
        },
      ]}
    >
      <Title title={{ text: 'Confidence Band', subtext: 'Example in MetricsGraphics.js', left: 'center' }} />
      <Tooltip
        tooltip={{
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#ccc',
              borderColor: '#aaa',
              borderWidth: 1,
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              color: '#222',
            },
          },
          formatter(params) {
            if (!Array.isArray(params)) return '';
            return params[2]!.name + '<br />' + (((params[2]!.value as number) - base) * 100).toFixed(1) + '%';
          },
        }}
      />
    </LineChart>
  );
}

export function LineAQI() {
  const { data } = useSWR<[date: string, value: number][]>(
    'https://echarts.apache.org/examples/data/asset/data/aqi-beijing.json'
  );

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      grid={{ left: '5%', right: '15%', bottom: '10%' }}
      xAxis={{ data: data?.map((item) => item[0]) || [] }}
      yAxis={{}}
      series={{
        name: 'Beijing AQI',
        type: 'line',
        data: data?.map((item) => item[1]) || [],
        markLine: {
          silent: true,
          lineStyle: { color: '#333' },
          data: [{ yAxis: 50 }, { yAxis: 100 }, { yAxis: 150 }, { yAxis: 200 }, { yAxis: 300 }],
        },
      }}
    >
      <Title title={{ text: 'Beijing AQI', left: '1%' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Toolbox toolbox={{ right: 10, feature: { dataZoom: { yAxisIndex: 'none' }, restore: {}, saveAsImage: {} } }} />
      <DataZoom dataZoom={[{ startValue: '2014-06-01' }, { type: 'inside' }]} />
      <VisualMap
        visualMap={{
          top: 50,
          right: 10,
          pieces: [
            { gt: 0, lte: 50, color: '#93CE07' },
            { gt: 50, lte: 100, color: '#FBDB0F' },
            { gt: 100, lte: 150, color: '#FC7D02' },
            { gt: 150, lte: 200, color: '#FD0100' },
            { gt: 200, lte: 300, color: '#AA069F' },
            { gt: 300, color: '#AC3B2A' },
          ],
          outOfRange: { color: '#999' },
        }}
      />
      <MarkLine />
    </LineChart>
  );
}

export function MultipleXAxis() {
  const colors = ['#5470C6', '#EE6666'];
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      color={colors}
      xAxis={[
        {
          type: 'category',
          axisTick: { alignWithLabel: true },
          axisLine: { onZero: false, lineStyle: { color: colors[1]! } },
          axisPointer: {
            label: {
              formatter: (params) =>
                'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0]!.data : ''),
            },
          },
          // prettier-ignore
          data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
        },
        {
          type: 'category',
          axisTick: { alignWithLabel: true },
          axisLine: { onZero: false, lineStyle: { color: colors[0]! } },
          axisPointer: {
            label: {
              formatter: (params) =>
                'Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0]!.data : ''),
            },
          },
          // prettier-ignore
          data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
        },
      ]}
      yAxis={[{ type: 'value' }]}
      grid={{ top: 70, bottom: 50 }}
      series={[
        {
          name: 'Precipitation(2015)',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          emphasis: { focus: 'series' },
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        },
        {
          name: 'Precipitation(2016)',
          type: 'line',
          smooth: true,
          emphasis: { focus: 'series' },
          data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'none', axisPointer: { type: 'cross' } }} />
      <Legend legend={{}} />
    </LineChart>
  );
}

export function AreaTimeAxis() {
  let base = +new Date(1988, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1]![1]!)]);
  }

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'time', boundaryGap: [0, 0] }}
      yAxis={{ type: 'value', boundaryGap: [0, '100%'] }}
      series={[{ name: 'Fake Data', type: 'line', smooth: true, symbol: 'none', areaStyle: {}, data: data }]}
    >
      <Tooltip tooltip={{ trigger: 'axis', position: (pt) => [pt[0], '10%'] }} />
      <Title title={{ left: 'center', text: 'Large Ara Chart' }} />
      <Toolbox toolbox={{ feature: { dataZoom: { yAxisIndex: 'none' }, restore: {}, saveAsImage: {} } }} />
      <DataZoom
        dataZoom={[
          { type: 'inside', start: 0, end: 20 },
          { start: 0, end: 20 },
        ]}
      />
    </LineChart>
  );
}

export function DynamicData2() {
  const oneDay = 24 * 3600 * 1000;
  const nowRef = React.useRef(new Date(1997, 9, 3));
  const valueRef = React.useRef(Math.random() * 1000);

  function randomData() {
    const now = (nowRef.current = new Date(+nowRef.current + oneDay));
    valueRef.current = valueRef.current + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(valueRef.current)],
    };
  }

  const [data, setData] = React.useState(() => {
    const data = [];
    for (var i = 0; i < 1000; i++) data.push(randomData());
    return data;
  });

  React.useEffect(() => {
    const timer = setInterval(function () {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }
      setData([...data]);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'time', splitLine: { show: false } }}
      yAxis={{ type: 'value', boundaryGap: [0, '100%'], splitLine: { show: false } }}
      series={{ name: 'Fake Data', type: 'line', showSymbol: false, data: data }}
    >
      <Title title={{ text: 'Dynamic Data & Time Axis' }} />
      <Tooltip
        tooltip={{
          trigger: 'axis',
          formatter(params) {
            if (!Array.isArray(params) || !params[0]) return '';
            const param = params[0];
            var date = new Date(param.name);
            return (
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' : ' +
              (param.value as number[])[1]
            );
          },
          axisPointer: { animation: false },
        }}
      />
    </LineChart>
  );
}

export function LineFunction() {
  function func(x: number) {
    x /= 10;
    return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  }
  function generateData() {
    let data = [];
    for (let i = -200; i <= 200; i += 0.1) data.push([i, func(i)]);
    return data;
  }

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      animation={false}
      xAxis={{ name: 'x', minorTick: { show: true }, minorSplitLine: { show: true } }}
      yAxis={{ name: 'y', min: -100, max: 100, minorTick: { show: true }, minorSplitLine: { show: true } }}
      series={[{ type: 'line', showSymbol: false, clip: true, data: generateData() }]}
      grid={{ top: 40, left: 50, right: 40, bottom: 50 }}
    >
      <DataZoom
        dataZoom={[
          { show: true, type: 'inside', filterMode: 'none', xAxisIndex: [0], startValue: -20, endValue: 20 },
          { show: true, type: 'inside', filterMode: 'none', yAxisIndex: [0], startValue: -20, endValue: 20 },
        ]}
      />
    </LineChart>
  );
}

export function LineRace() {
  const { data } = useSWR('https://echarts.apache.org/examples/data/asset/data/life-expectancy-table.json');

  const countries = ['Finland', 'France', 'Germany', 'Iceland', 'Norway', 'Poland', 'Russia', 'United Kingdom'];
  const datasetWithFilters: DatasetOption[] = [];
  const seriesList: LineSeriesOption[] = [];
  echarts.util.each(countries, function (country) {
    var datasetId = 'dataset_' + country;
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'Year', gte: 1950 },
            { dimension: 'Country', '=': country },
          ],
        },
      },
    });
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: country,
      endLabel: {
        show: true,
        formatter(params) {
          const value = params.value;
          if (!Array.isArray(value)) return '';
          return value[3] + ': ' + value[0];
        },
      },
      labelLayout: { moveOverlap: 'shiftY' },
      emphasis: { focus: 'series' },
      encode: { x: 'Year', y: 'Income', label: ['Country', 'Income'], itemName: 'Year', tooltip: ['Income'] },
    });
  });

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      animationDuration={10000}
      xAxis={{ type: 'category', nameLocation: 'middle' }}
      yAxis={{ name: 'Income' }}
      grid={{ right: 140 }}
      series={seriesList}
    >
      <Title title={{ text: 'Income of Germany and France since 1950' }} />
      <Tooltip tooltip={{ order: 'valueDesc', trigger: 'axis' }} />
      <Dataset dataset={data ? [{ id: 'dataset_raw', source: data }, ...datasetWithFilters] : []} />
    </LineChart>
  );
}

export function LineMarkline() {
  const markLine: (MarkLine1DDataItemOption | MarkLine2DDataItemOption)[] = [];
  const positions: NonNullable<LineLabelOption['position']>[] = [
    'start',
    'middle',
    'end',
    'insideStart',
    'insideStartTop',
    'insideStartBottom',
    'insideMiddle',
    'insideMiddleTop',
    'insideMiddleBottom',
    'insideEnd',
    'insideEndTop',
    'insideEndBottom',
  ];
  for (var i = 0; i < positions.length; ++i) {
    markLine.push({
      name: positions[i]!,
      yAxis: 1.8 - 0.2 * Math.floor(i / 3),
      label: { formatter: '{b}', position: positions[i]! },
    });
    if (positions[i] !== 'middle') {
      const name = positions[i] === 'insideMiddle' ? 'insideMiddle / middle' : positions[i]!;
      markLine.push([
        { name: 'start: ' + positions[i], coord: [0, 0.3], label: { formatter: name, position: positions[i]! } },
        { name: 'end: ' + positions[i], coord: [3, 1] },
      ]);
    }
  }

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      animation={false}
      textStyle={{ fontSize: 14 }}
      xAxis={{ data: ['A', 'B', 'C', 'D', 'E'], boundaryGap: true, splitArea: { show: true } }}
      yAxis={{ max: 2 }}
      grid={{ top: 30, left: 60, right: 60, bottom: 40 }}
      series={[
        {
          name: 'line',
          type: 'line',
          stack: 'all',
          symbolSize: 6,
          data: [0.3, 1.4, 1.2, 1, 0.6],
          markLine: { data: markLine, label: { distance: [20, 8] } },
        },
      ]}
    >
      <MarkLine />
    </LineChart>
  );
}

export function LineStyle() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          symbol: 'triangle',
          symbolSize: 20,
          lineStyle: { color: '#5470C6', width: 4, type: 'dashed' },
          itemStyle: { borderWidth: 3, borderColor: '#EE6666', color: 'yellow' },
        },
      ]}
    />
  );
}

export function LineInCartesianCoordinateSystem() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{}}
      yAxis={{}}
      series={[
        {
          data: [
            [10, 40],
            [50, 100],
            [40, 20],
          ],
          type: 'line',
        },
      ]}
    />
  );
}

export function LineLog() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{
        type: 'category',
        name: 'x',
        splitLine: { show: false },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      }}
      yAxis={{ type: 'log', name: 'y', minorSplitLine: { show: true } }}
      grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
      series={[
        { name: 'Log2', type: 'line', data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669] },
        { name: 'Log3', type: 'line', data: [1, 2, 4, 8, 16, 32, 64, 128, 256] },
        {
          name: 'Log1/2',
          type: 'line',
          data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
        },
      ]}
    >
      <Title title={{ text: 'Log Axis', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b} : {c}' }} />
      <Legend legend={{ left: 'left' }} />
    </LineChart>
  );
}

export function LineStep() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
      series={[
        { name: 'Step Start', type: 'line', step: 'start', data: [120, 132, 101, 134, 90, 230, 210] },
        { name: 'Step Middle', type: 'line', step: 'middle', data: [220, 282, 201, 234, 290, 430, 410] },
        { name: 'Step End', type: 'line', step: 'end', data: [450, 432, 401, 454, 590, 530, 510] },
      ]}
    >
      <Title title={{ text: 'Step Line' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{ data: ['Step Start', 'Step Middle', 'Step End'] }} />
      <Toolbox toolbox={{ feature: { saveAsImage: {} } }} />
    </LineChart>
  );
}

export function LineEasing() {
  const easingFuncs = {
    linear: function (k: number) {
      return k;
    },
    quadraticIn: function (k: number) {
      return k * k;
    },
    quadraticOut: function (k: number) {
      return k * (2 - k);
    },
    quadraticInOut: function (k: number) {
      if ((k *= 2) < 1) return 0.5 * k * k;
      return -0.5 * (--k * (k - 2) - 1);
    },
    cubicIn: function (k: number) {
      return k * k * k;
    },
    cubicOut: function (k: number) {
      return --k * k * k + 1;
    },
    cubicInOut: function (k: number) {
      if ((k *= 2) < 1) return 0.5 * k * k * k;
      return 0.5 * ((k -= 2) * k * k + 2);
    },
    quarticIn: function (k: number) {
      return k * k * k * k;
    },
    quarticOut: function (k: number) {
      return 1 - --k * k * k * k;
    },
    quarticInOut: function (k: number) {
      if ((k *= 2) < 1) return 0.5 * k * k * k * k;
      return -0.5 * ((k -= 2) * k * k * k - 2);
    },
    quinticIn: function (k: number) {
      return k * k * k * k * k;
    },
    quinticOut: function (k: number) {
      return --k * k * k * k * k + 1;
    },
    quinticInOut: function (k: number) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k * k;
      }
      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    },
    sinusoidalIn: function (k: number) {
      return 1 - Math.cos((k * Math.PI) / 2);
    },
    sinusoidalOut: function (k: number) {
      return Math.sin((k * Math.PI) / 2);
    },
    sinusoidalInOut: function (k: number) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    },
    exponentialIn: function (k: number) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    exponentialOut: function (k: number) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    exponentialInOut: function (k: number) {
      if (k === 0) return 0;
      if (k === 1) return 1;
      if ((k *= 2) < 1) {
        return 0.5 * Math.pow(1024, k - 1);
      }
      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    },
    circularIn: function (k: number) {
      return 1 - Math.sqrt(1 - k * k);
    },
    circularOut: function (k: number) {
      return Math.sqrt(1 - --k * k);
    },
    circularInOut: function (k: number) {
      if ((k *= 2) < 1) return -0.5 * (Math.sqrt(1 - k * k) - 1);
      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    },
    elasticIn: function (k: number) {
      var s;
      var a = 0.1;
      var p = 0.4;
      if (k === 0) return 0;
      if (k === 1) return 1;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p));
    },
    elasticOut: function (k: number) {
      var s;
      var a = 0.1;
      var p = 0.4;
      if (k === 0) return 0;
      if (k === 1) return 1;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      return a * Math.pow(2, -10 * k) * Math.sin(((k - s) * (2 * Math.PI)) / p) + 1;
    },
    elasticInOut: function (k: number) {
      var s;
      var a = 0.1;
      var p = 0.4;
      if (k === 0) return 0;
      if (k === 1) return 1;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p * Math.asin(1 / a)) / (2 * Math.PI);
      }
      if ((k *= 2) < 1) return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p));
      return a * Math.pow(2, -10 * (k -= 1)) * Math.sin(((k - s) * (2 * Math.PI)) / p) * 0.5 + 1;
    },
    backIn: function (k: number) {
      var s = 1.70158;
      return k * k * ((s + 1) * k - s);
    },
    backOut: function (k: number) {
      var s = 1.70158;
      return --k * k * ((s + 1) * k + s) + 1;
    },
    backInOut: function (k: number) {
      var s = 1.70158 * 1.525;
      if ((k *= 2) < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }
      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    },
    // 创建弹跳效果
    bounceIn: function (k: number) {
      return 1 - easingFuncs.bounceOut(1 - k);
    },
    bounceOut: function (k: number) {
      if (k < 1 / 2.75) return 7.5625 * k * k;
      else if (k < 2 / 2.75) return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      else if (k < 2.5 / 2.75) return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      else return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
    },
    bounceInOut: function (k: number) {
      if (k < 0.5) return easingFuncs.bounceIn(k * 2) * 0.5;
      return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    },
  };

  const N_POINT = 30;
  const grids: GridOption[] = [];
  const xAxes: XAXisOption[] = [];
  const yAxes: YAXisOption[] = [];
  const series: LineSeriesOption[] = [];
  const titles: TitleOption[] = [];
  let count = 0;
  Object.keys(easingFuncs).forEach(function (easingName) {
    var easingFunc = easingFuncs[easingName as keyof typeof easingFuncs];
    var data = [];
    for (var i = 0; i <= N_POINT; i++) {
      var x = i / N_POINT;
      var y = easingFunc(x);
      data.push([x, y]);
    }
    grids.push({ show: true, borderWidth: 0, shadowColor: 'rgba(0, 0, 0, 0.3)', shadowBlur: 2 });
    xAxes.push({ type: 'value', show: false, min: 0, max: 1, gridIndex: count });
    yAxes.push({ type: 'value', show: false, min: -0.4, max: 1.4, gridIndex: count });
    series.push({
      name: easingName,
      type: 'line',
      xAxisIndex: count,
      yAxisIndex: count,
      data: data,
      showSymbol: false,
      animationEasing: easingName as keyof typeof easingFuncs,
      animationDuration: 1000,
    });
    titles.push({ textAlign: 'center', text: easingName, textStyle: { fontSize: 12, fontWeight: 'normal' } });
    count++;
  });
  var rowNumber = Math.ceil(Math.sqrt(count));
  grids.forEach(function (grid, idx) {
    grid.left = ((idx % rowNumber) / rowNumber) * 100 + 0.5 + '%';
    grid.top = (Math.floor(idx / rowNumber) / rowNumber) * 100 + 0.5 + '%';
    grid.width = (1 / rowNumber) * 100 - 1 + '%';
    grid.height = (1 / rowNumber) * 100 - 1 + '%';
    titles[idx]!.left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
    titles[idx]!.top = parseFloat(grid.top) + '%';
  });

  return (
    <LineChart style={{ width: 480, height: 300 }} xAxis={xAxes} yAxis={yAxes} grid={grids} series={series}>
      <Title title={[...titles, { text: 'Different Easing Functions', top: 'bottom', left: 'center' }]} />
    </LineChart>
  );
}

export function LineFisheyeLens() {
  var GRID_TOP = 120;
  var GRID_BOTTOM = 80;
  var GRID_LEFT = 60;
  var GRID_RIGHT = 60;
  var Y_DATA_ROUND_PRECISION = 0;
  var _breakAreaStyle = {
    expandOnClick: false,
    zigzagZ: 200,
    zigzagAmplitude: 0,
    itemStyle: { borderColor: '#777', opacity: 0 },
  };

  const chartRef = React.useRef<echarts.ECharts>(null);

  /**
   * This is some interaction logic with axis break:
   *  - Brush to fisheye-magnify an area.
   *
   * You can ignore this part if you do not need it.
   */
  function initAxisBreakInteraction() {
    const myChart = chartRef.current;
    if (!myChart) return;
    var _brushingEl: any = null;
    myChart.on('click', function (params) {
      if (params.name === 'clearAxisBreakBtn') {
        var option: echarts.EChartsCoreOption = { xAxis: { breaks: [] }, yAxis: { breaks: [] } };
        addClearButtonUpdateOption(option, false);
        myChart.setOption(option);
      }
    });
    function addClearButtonUpdateOption(option: echarts.EChartsCoreOption, show: boolean) {
      option.graphic = [
        {
          elements: [
            {
              type: 'rect',
              ignore: !show,
              name: 'clearAxisBreakBtn',
              top: 5,
              left: 5,
              shape: { r: 3, width: 70, height: 30 },
              style: { fill: '#eee', stroke: '#999', lineWidth: 1 },
              textContent: { type: 'text', style: { text: 'Reset', fontSize: 15, fontWeight: 'bold' } },
              textConfig: { position: 'inside' },
            },
          ],
        },
      ];
    }
    myChart.getZr().on('mousedown', function (params) {
      _brushingEl = new echarts.graphic.Rect({
        shape: { x: params.offsetX, y: params.offsetY },
        style: { stroke: 'none', fill: '#ccc' },
        ignore: true,
      });
      myChart.getZr().add(_brushingEl);
    });
    myChart.getZr().on('mousemove', function (params) {
      if (!_brushingEl) return;
      var initX = _brushingEl.shape.x;
      var initY = _brushingEl.shape.y;
      var currPoint: [number, number] = [params.offsetX, params.offsetY];
      _brushingEl.setShape('width', currPoint[0] - initX);
      _brushingEl.setShape('height', currPoint[1] - initY);
      _brushingEl.ignore = false;
    });
    document.addEventListener('mouseup', function (params) {
      if (!_brushingEl) return;
      var initX = _brushingEl.shape.x;
      var initY = _brushingEl.shape.y;
      var currPoint: [number, number] = [params.offsetX, params.offsetY];
      var xPixelSpan = Math.abs(currPoint[0] - initX);
      var yPixelSpan = Math.abs(currPoint[1] - initY);
      if (xPixelSpan > 2 && yPixelSpan > 2) {
        updateAxisBreak(myChart, [initX, initY], currPoint, xPixelSpan, yPixelSpan);
      }
      myChart.getZr().remove(_brushingEl);
      _brushingEl = null;
    });
    function updateAxisBreak(
      myChart: echarts.ECharts,
      initXY: number[],
      currPoint: number[],
      xPixelSpan: number,
      yPixelSpan: number
    ) {
      var dataXY0 = myChart.convertFromPixel({ gridIndex: 0 }, initXY);
      var dataXY1 = myChart.convertFromPixel({ gridIndex: 0 }, currPoint);
      function makeDataRange(v0: number, v1: number) {
        var dataRange: [number, number] = [roundXYValue(v0), roundXYValue(v1)];
        if (dataRange[0] > dataRange[1]) dataRange.reverse();
        return dataRange;
      }
      var xDataRange = makeDataRange(dataXY0[0]!, dataXY1[0]!);
      var yDataRange = makeDataRange(dataXY0[1]!, dataXY1[1]!);
      var xySpan = getXYAxisPixelSpan(myChart);
      var xGapPercentStr = (xPixelSpan / xySpan[0]) * 100 + '%';
      var yGapPercentStr = (yPixelSpan / xySpan[1]) * 100 + '%';
      function makeOption(xGapPercentStr: string, yGapPercentStr: string) {
        return {
          xAxis: { breaks: [{ start: xDataRange[0], end: xDataRange[1], gap: xGapPercentStr }] },
          yAxis: { breaks: [{ start: yDataRange[0], end: yDataRange[1], gap: yGapPercentStr }] },
        };
      }
      // This is to make a transition animation effect - firstly create axis break
      // on the brushed area, then collapse it to a small gap.
      myChart.setOption(makeOption(xGapPercentStr, yGapPercentStr));
      setTimeout(() => {
        var option = makeOption('80%', '80%');
        addClearButtonUpdateOption(option, true);
        myChart.setOption(option);
      }, 0);
    }
    function getXYAxisPixelSpan(myChart: echarts.ECharts): [number, number] {
      return [myChart.getWidth() - GRID_LEFT - GRID_RIGHT, myChart.getHeight() - GRID_BOTTOM - GRID_TOP];
    }
  } // End of initAxisBreakInteraction
  function roundXYValue(val: number) {
    return +(+val).toFixed(Y_DATA_ROUND_PRECISION);
  }
  function generateSeriesData() {
    function makeRandom(lastYVal: number, range: [number, number], factor: number) {
      lastYVal = lastYVal - range[0];
      var delta = (Math.random() - 0.5 * Math.sin(lastYVal / factor)) * (range[1] - range[0]) * 0.8;
      return roundXYValue(lastYVal + delta + range[0]);
    }
    var seriesData = [];
    var DATA_COUNT = 1000;
    var reset1 = true;
    var reset2 = true;
    let yVal = 0;
    for (var idx = 0; idx < DATA_COUNT; idx++) {
      if (idx < DATA_COUNT / 4) {
        yVal = makeRandom(yVal, [100, 10000], 50000);
      } else if (idx < (2 * DATA_COUNT) / 3) {
        if (reset1) {
          yVal = 110010;
          reset1 = false;
        }
        yVal = makeRandom(yVal, [100000, 105000], 50000);
      } else {
        if (reset2) {
          yVal = 300100;
          reset2 = false;
        }
        yVal = makeRandom(yVal, [300000, 305000], 20000);
      }
      seriesData.push([idx, yVal]);
    }
    return seriesData;
  }

  React.useEffect(() => {
    initAxisBreakInteraction();
  }, []);

  return (
    <LineChart
      ref={chartRef}
      style={{ width: 480, height: 300 }}
      xAxis={[{ splitLine: { show: false }, breakArea: _breakAreaStyle }]}
      yAxis={[{ axisTick: { show: true }, breakArea: _breakAreaStyle }]}
      grid={{ top: GRID_TOP, bottom: GRID_BOTTOM, left: GRID_LEFT, right: GRID_RIGHT }}
      series={[
        {
          type: 'line',
          name: 'Data A',
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 5,
          data: generateSeriesData(),
        },
      ]}
    >
      <Title
        title={{
          text: 'Fisheye Lens on Line Chart',
          subtext: 'Brush to magnify the details',
          left: 'center',
          textStyle: { fontSize: 20 },
          subtextStyle: { color: '#175ce5', fontSize: 15, fontWeight: 'bold' },
        }}
      />
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{}} />
      <AxisBreak />
      <Graphic />
    </LineChart>
  );
}

export function LineYCategory() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'value', axisLabel: { formatter: '{value} °C' } }}
      yAxis={{
        type: 'category',
        axisLine: { onZero: false },
        axisLabel: { formatter: '{value} km' },
        boundaryGap: false,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
      }}
      grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
      series={[
        {
          name: 'Altitude (km) vs. temperature (°C)',
          type: 'line',
          symbolSize: 10,
          symbol: 'circle',
          smooth: true,
          lineStyle: { width: 3, shadowColor: 'rgba(0,0,0,0.3)', shadowBlur: 10, shadowOffsetY: 8 },
          data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5],
        },
      ]}
    >
      <Legend legend={{ data: ['Altitude (km) vs. temperature (°C)'] }} />
      <Tooltip tooltip={{ trigger: 'axis', formatter: 'Temperature : <br/>{b}km : {c}°C' }} />
    </LineChart>
  );
}

export function LineGraphic() {
  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      xAxis={{ type: 'value', axisLabel: { formatter: '{value} °C' } }}
      yAxis={{
        type: 'category',
        axisLine: { onZero: false },
        axisLabel: { formatter: '{value} km' },
        boundaryGap: true,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
      }}
      grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
      series={[
        {
          name: 'Altitude (km) vs. temperature (°C)',
          type: 'line',
          smooth: true,
          data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'axis', formatter: 'Temperature : <br/>{b}km : {c}°C' }} />
      <Graphic
        graphic={[
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 110,
            bottom: 110,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: { width: 400, height: 50 },
                style: { fill: 'rgba(0,0,0,0.3)' },
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: { fill: '#fff', text: 'ECHARTS LINE CHART', font: 'bold 26px sans-serif' },
              },
            ],
          },
          {
            type: 'group',
            left: '10%',
            top: 'center',
            children: [
              {
                type: 'rect',
                z: 100,
                left: 'center',
                top: 'middle',
                shape: { width: 240, height: 90 },
                style: {
                  fill: '#fff',
                  stroke: '#555',
                  lineWidth: 1,
                  shadowBlur: 8,
                  shadowOffsetX: 3,
                  shadowOffsetY: 3,
                  shadowColor: 'rgba(0,0,0,0.2)',
                },
              },
              {
                type: 'text',
                z: 100,
                left: 'center',
                top: 'middle',
                style: {
                  fill: '#333',
                  width: 220,
                  overflow: 'break',
                  text: 'xAxis represents temperature in °C, yAxis represents altitude in km, An image watermark in the upper right, This text block can be placed in any place',
                  font: '14px Microsoft YaHei',
                },
              },
            ],
          },
        ]}
      />
    </LineChart>
  );
}

export function LinePen() {
  const symbolSize = 20;
  const [data, setData] = React.useState(() => [
    [15, 0],
    [-50, 10],
    [-56.5, 20],
    [-46.5, 30],
    [-22.1, 40],
  ]);
  const chartRef = React.useRef<echarts.ECharts>(null);

  React.useEffect(() => {
    const myChart = chartRef.current;
    if (!myChart) return;
    var zr = myChart.getZr();
    zr.on('click', function (params) {
      var pointInPixel = [params.offsetX, params.offsetY];
      var pointInGrid = myChart.convertFromPixel('grid', pointInPixel);
      if (myChart.containPixel('grid', pointInPixel)) {
        setData((prev) => [...prev, pointInGrid]);
      }
    });
    zr.on('mousemove', function (params) {
      var pointInPixel = [params.offsetX, params.offsetY];
      zr.setCursorStyle(myChart.containPixel('grid', pointInPixel) ? 'copy' : 'default');
    });
    return () => zr.dispose();
  }, []);

  return (
    <LineChart
      ref={chartRef}
      style={{ width: 480, height: 300 }}
      xAxis={{ min: -60, max: 20, type: 'value', axisLine: { onZero: false } }}
      yAxis={{ min: 0, max: 40, type: 'value', axisLine: { onZero: false } }}
      grid={{ left: '3%', right: '4%', bottom: '3%', containLabel: true }}
      series={[{ id: 'a', type: 'line', smooth: true, symbolSize: symbolSize, data: data }]}
    >
      <Title title={{ text: 'Click to Add Points' }} />
      <Tooltip
        tooltip={{
          formatter: function (params) {
            if (Array.isArray(params)) return '';
            var data = (params.data as [number, number] | undefined) || [0, 0];
            return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
          },
        }}
      />
    </LineChart>
  );
}

export function LinePolar() {
  const data = [];
  for (let i = 0; i <= 100; i++) {
    let theta = (i / 100) * 360;
    let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
    data.push([r, theta]);
  }

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      series={[{ coordinateSystem: 'polar', name: 'line', type: 'line', data }]}
    >
      <Title title={{ text: 'Two Value-Axes in Polar' }} />
      <Legend legend={{ data: ['line'] }} />
      <Polar polar={{}} angleAxis={{ type: 'value', startAngle: 0 }} radiusAxis={{}} />
      <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'cross' } }} />
    </LineChart>
  );
}

export function LinePolar2() {
  const data = [];
  for (let i = 0; i <= 360; i++) {
    let t = (i / 180) * Math.PI;
    let r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
  }

  return (
    <LineChart
      style={{ width: 480, height: 300 }}
      animationDuration={2000}
      series={[{ coordinateSystem: 'polar', name: 'line', type: 'line', showSymbol: false, data }]}
    >
      <Title title={{ text: 'Two Value-Axes in Polar' }} />
      <Legend legend={{ data: ['line'] }} />
      <Polar polar={{ center: ['50%', '54%'] }} angleAxis={{ type: 'value', startAngle: 0 }} radiusAxis={{ min: 0 }} />
      <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'cross' } }} />
    </LineChart>
  );
}

export function LineTooltipTouch() {
  let base = +new Date(2016, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let valueBase = Math.random() * 300;
  let valueBase2 = Math.random() * 50;
  let data = [];
  let data2 = [];
  for (var i = 1; i < 10; i++) {
    var now = new Date((base += oneDay));
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);
    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
  }

  return (
    <LineChart
      style={{ width: 480, height: 360 }}
      xAxis={{
        type: 'time',
        axisPointer: {
          value: '2016-10-7',
          snap: true,
          lineStyle: { color: '#7581BD', width: 2 },
          label: {
            show: true,
            formatter: (params) => echarts.time.format(params.value, '{yyyy}-{MM}-{dd}', true),
            backgroundColor: '#7581BD',
          },
          handle: { show: true, color: '#7581BD' },
        },
        splitLine: { show: false },
      }}
      yAxis={{
        type: 'value',
        axisTick: { inside: true },
        splitLine: { show: false },
        axisLabel: { inside: true, formatter: '{value}\n' },
        z: 10,
      }}
      grid={{ top: 110, left: 15, right: 15, height: 160 }}
      series={[
        {
          name: 'Fake Data',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          sampling: 'average',
          itemStyle: { color: '#0770FF' },
          stack: 'a',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(58,77,233,0.8)' },
              { offset: 1, color: 'rgba(58,77,233,0.3)' },
            ]),
          },
          data: data,
        },
        {
          name: 'Fake Data',
          type: 'line',
          smooth: true,
          stack: 'a',
          symbol: 'circle',
          symbolSize: 5,
          sampling: 'average',
          itemStyle: { color: '#F2597F' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(213,72,120,0.8)' },
              { offset: 1, color: 'rgba(213,72,120,0.3)' },
            ]),
          },
          data: data2,
        },
      ]}
    >
      <Title title={{ left: 'center', text: 'Tootip and dataZoom on Mobile Device' }} />
      <Legend legend={{ top: 'bottom', data: ['Intention'] }} />
      <Tooltip tooltip={{ triggerOn: 'none', position: (pt) => [pt[0], 130] }} />
      <Toolbox
        toolbox={{ left: 'center', itemSize: 25, top: 55, feature: { dataZoom: { yAxisIndex: 'none' }, restore: {} } }}
      />
      <DataZoom dataZoom={{ type: 'inside', throttle: 50 }} />
    </LineChart>
  );
}

// FIXME: The tooltip behaves inconsistently when dragging the points.
export function LineDraggable() {
  type GraphicComponentLooseOption = Exclude<React.ComponentProps<typeof Graphic>['graphic'], any[] | undefined>;
  const symbolSize = 20;
  const [data, setData] = React.useState(() => [
    [40, -10],
    [-30, -5],
    [-76.5, 20],
    [-63.5, 40],
    [-22.1, 50],
  ]);
  const [graphic, setGraphic] = React.useState<GraphicComponentLooseOption[]>([]);
  const chartRef = React.useRef<echarts.ECharts>(null);
  const dataRef = React.useRef(data);
  dataRef.current = data;

  React.useEffect(() => {
    const myChart = chartRef.current;
    if (!myChart) return;
    const showTip = (dataIndex: number) => {
      myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex });
    };
    const hideTip = () => {
      myChart.dispatchAction({ type: 'hideTip' });
    };
    const onPointDragging = (dataIndex: number, pos: number[]) => {
      const dataCopy = [...dataRef.current];
      dataCopy[dataIndex] = myChart.convertFromPixel('grid', pos);
      setData(dataCopy);
      updatePosition();
    };
    const updatePosition = () => {
      setGraphic(
        dataRef.current.map<GraphicComponentLooseOption>(function (item, dataIndex) {
          return {
            type: 'circle',
            position: myChart.convertToPixel('grid', item),
            shape: { cx: 0, cy: 0, r: symbolSize / 2 },
            invisible: true,
            draggable: true,
            ondrag(_dx: number, _dy: number) {
              // @ts-expect-error
              onPointDragging(dataIndex, [this.x, this.y]);
            },
            onmousemove: () => showTip(dataIndex),
            onmouseout: () => hideTip(),
            z: 100,
          } as GraphicComponentLooseOption;
        })
      );
    };
    window.addEventListener('resize', updatePosition);
    myChart.on('dataZoom', updatePosition);
    updatePosition();
    return () => {
      window.removeEventListener('reset', updatePosition);
      myChart.off('dataZoom', updatePosition);
    };
  }, []);

  return (
    <LineChart
      ref={chartRef}
      style={{ width: 480, height: 360 }}
      xAxis={{ min: -100, max: 70, type: 'value', axisLine: { onZero: false } }}
      yAxis={{ min: -30, max: 60, type: 'value', axisLine: { onZero: false } }}
      grid={{ top: '8%', bottom: '12%' }}
      series={[{ id: 'a', type: 'line', smooth: true, symbolSize, data }]}
    >
      <Title title={{ text: 'Try Dragging these Points', left: 'center' }} />
      <Tooltip
        tooltip={{
          triggerOn: 'none',
          formatter(params) {
            if (Array.isArray(params)) return '';
            const data = params.data as [number, number];
            return 'X: ' + data[0].toFixed(2) + '<br>Y: ' + data[1].toFixed(2);
          },
        }}
      />
      <DataZoom
        dataZoom={[
          { type: 'slider', xAxisIndex: 0, filterMode: 'none' },
          { type: 'slider', yAxisIndex: 0, filterMode: 'none' },
          { type: 'inside', xAxisIndex: 0, filterMode: 'none' },
          { type: 'inside', yAxisIndex: 0, filterMode: 'none' },
        ]}
      />
      <Graphic graphic={graphic} />
    </LineChart>
  );
}

export function IntradayBreaks1() {
  var roundTime = echarts.time.roundTime;
  var formatTime = echarts.time.format;
  var BREAK_GAP = '1%';
  var DATA_ZOOM_MIN_VALUE_SPAN = 3600 * 1000;
  function generateData() {
    var seriesData = [];
    var breaks = [];
    var time = new Date('2024-04-09T00:00:00Z');
    var endTime = new Date('2024-04-12T23:59:59Z').getTime();
    var todayCloseTime = new Date();
    updateDayTime(time, todayCloseTime);
    function updateDayTime(time: Date, todayCloseTime: Date) {
      roundTime(time, 'day', true);
      todayCloseTime.setTime(time.getTime());
      time.setUTCHours(9, 30); // Open time
      todayCloseTime.setUTCHours(16, 0); // Close time
    }
    var valBreak = false;
    for (var val = 1669; time.getTime() <= endTime; ) {
      var delta;
      if (valBreak) {
        delta = Math.floor((Math.random() - 0.5 * Math.sin(val / 1000)) * 20 * 100) / 10;
        valBreak = false;
      } else {
        delta = Math.floor((Math.random() - 0.5 * Math.sin(val / 1000)) * 20 * 100) / 100;
      }
      val = val + delta;
      val = +val.toFixed(2);
      seriesData.push([time.getTime(), val]);
      time.setMinutes(time.getMinutes() + 1);
      if (time.getTime() > todayCloseTime.getTime()) {
        // Use `NaN` to break the line.
        seriesData.push([time.getTime(), NaN]);
        var breakStart = todayCloseTime.getTime();
        time.setUTCDate(time.getUTCDate() + 1);
        updateDayTime(time, todayCloseTime);
        var breakEnd = time.getTime();
        valBreak = true;
        breaks.push({ start: breakStart, end: breakEnd, gap: BREAK_GAP });
      }
    }
    return { seriesData, breaks };
  }
  var _data = generateData();

  return (
    <LineChart
      style={{ width: 480, height: 360 }}
      useUTC
      grid={{ top: '25%', bottom: '40%' }}
      xAxis={[
        {
          type: 'time',
          interval: 1000 * 60 * 30,
          axisLabel: {
            showMinLabel: true,
            showMaxLabel: true,
            formatter(timestamp, _, opt) {
              if (opt.break) {
                // The third parameter is `useUTC: true`.
                return formatTime(timestamp, '{HH}:{mm}\n{weak|{dd}d}', true);
              }
              return formatTime(timestamp, '{HH}:{mm}', true);
            },
            rich: { weak: { color: '#999' } },
          },
          breaks: _data.breaks,
          breakArea: {
            expandOnClick: false,
            zigzagAmplitude: 0,
            zigzagZ: 200,
            itemStyle: { borderColor: 'none', opacity: 0 },
          },
        },
      ]}
      yAxis={{ type: 'value', min: 'dataMin' }}
      series={[{ type: 'line', symbolSize: 0, areaStyle: {}, data: _data.seriesData }]}
    >
      <Title title={{ text: 'Intraday Chart with Breaks', left: 'center' }} />
      <Tooltip tooltip={{ show: true, trigger: 'axis', axisPointer: { type: 'cross' } }} />
      <DataZoom
        dataZoom={[
          { type: 'inside', minValueSpan: DATA_ZOOM_MIN_VALUE_SPAN },
          { type: 'slider', bottom: '30%', minValueSpan: DATA_ZOOM_MIN_VALUE_SPAN },
        ]}
      />
      <AxisBreak />
    </LineChart>
  );
}

export function DatasetLink() {
  const chartRef = React.useRef<echarts.ECharts>(null);
  const [dimension, setDimension] = React.useState('2012');

  React.useEffect(() => {
    const myChart = chartRef.current;
    if (!myChart) return;
    const listener = (event: any) => {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        setDimension(dimension);
      }
    };
    myChart.on('updateAxisPointer', listener);
    return () => {
      myChart.off('updateAxisPointer', listener);
    };
  }, []);

  return (
    <LineChart
      ref={chartRef}
      style={{ width: 480, height: 360 }}
      useUTC
      xAxis={{ type: 'category' }}
      yAxis={{ gridIndex: 0 }}
      grid={{ top: '55%' }}
      series={[
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        {
          type: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: { focus: 'self' },
          label: { formatter: `{b}: {@${dimension}} ({d}%)` },
          encode: { itemName: 'product', value: dimension, tooltip: dimension },
        },
      ]}
    >
      <Legend legend={{}} />
      <Tooltip tooltip={{ trigger: 'axis', showContent: false }} />
      <Dataset
        dataset={{
          source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1],
          ],
        }}
      />
    </LineChart>
  );
}
