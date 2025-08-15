import type { Meta } from '@storybook/react';
import {
  Dataset,
  DataZoom,
  echarts,
  Legend,
  LineChart,
  MarkArea,
  MarkLine,
  MarkPoint,
  Title,
  Toolbox,
  Tooltip,
  VisualMap,
} from '@fanciers/echarts-react';
import type { LineSeriesOption } from 'echarts/charts';
import useSWR from 'swr';

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
