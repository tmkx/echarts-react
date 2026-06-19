import { BarChart, Legend, LineChart, PieChart, Title, Toolbox, Tooltip } from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rich Text',
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof meta>;

const weatherIcons = {
  Sunny: 'https://echarts.apache.org/examples/data/asset/img/weather/sunny_128.png',
  Cloudy: 'https://echarts.apache.org/examples/data/asset/img/weather/cloudy_128.png',
  Showers: 'https://echarts.apache.org/examples/data/asset/img/weather/showers_128.png',
};

export const PieRichText: Story = {
  name: 'Pie Special Label',
  render() {
    return (
      <PieChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
              {
                value: 1548,
                name: 'CityE',
                label: {
                  formatter: [
                    '{title|{b}}{abg|}',
                    '  {weatherHead|Weather}{valueHead|Days}{rateHead|Percent}',
                    '{hr|}',
                    '  {Sunny|}{value|202}{rate|55.3%}',
                    '  {Cloudy|}{value|142}{rate|38.9%}',
                    '  {Showers|}{value|21}{rate|5.8%}',
                  ].join('\n'),
                  backgroundColor: '#eee',
                  borderColor: '#777',
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    title: { color: '#eee', align: 'center' },
                    abg: {
                      backgroundColor: '#333',
                      width: '100%',
                      align: 'right',
                      height: 25,
                      borderRadius: [4, 4, 0, 0],
                    },
                    Sunny: { height: 30, align: 'left', backgroundColor: { image: weatherIcons.Sunny } },
                    Cloudy: { height: 30, align: 'left', backgroundColor: { image: weatherIcons.Cloudy } },
                    Showers: { height: 30, align: 'left', backgroundColor: { image: weatherIcons.Showers } },
                    weatherHead: { color: '#333', height: 24, align: 'left' },
                    hr: { borderColor: '#777', width: '100%', borderWidth: 0.5, height: 0 },
                    value: { width: 20, padding: [0, 20, 0, 30], align: 'left' },
                    valueHead: { color: '#333', width: 20, padding: [0, 20, 0, 30], align: 'center' },
                    rate: { width: 40, align: 'right', padding: [0, 10, 0, 0] },
                    rateHead: { color: '#333', width: 40, align: 'center', padding: [0, 10, 0, 0] },
                  },
                },
              },
              { value: 735, name: 'CityC' },
              { value: 510, name: 'CityD' },
              { value: 434, name: 'CityB' },
              { value: 335, name: 'CityA' },
            ],
            emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } },
          },
        ]}
      >
        <Title title={{ text: 'Weather Statistics', subtext: 'Fake Data', left: 'center' }} />
        <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)' }} />
        <Legend legend={{ bottom: 10, left: 'center', data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE'] }} />
      </PieChart>
    );
  },
};

export const pieNested: Story = {
  name: 'Nested Pies',
  render() {
    return (
      <PieChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            name: 'Access From',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: { position: 'inner', fontSize: 14 },
            labelLine: { show: false },
            data: [
              { value: 1548, name: 'Search Engine' },
              { value: 775, name: 'Direct' },
              { value: 679, name: 'Marketing', selected: true },
            ],
          },
          {
            name: 'Access From',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: { length: 30 },
            label: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#F6F8FC',
              borderColor: '#8C8D8E',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: { color: '#6E7079', lineHeight: 22, align: 'center' },
                hr: { borderColor: '#8C8D8E', width: '100%', borderWidth: 1, height: 0 },
                b: { color: '#4C5058', fontSize: 14, fontWeight: 'bold', lineHeight: 33 },
                per: { color: '#fff', backgroundColor: '#4C5058', padding: [3, 4], borderRadius: 4 },
              },
            },
            data: [
              { value: 1048, name: 'Baidu' },
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 251, name: 'Google' },
              { value: 234, name: 'Union Ads' },
              { value: 147, name: 'Bing' },
              { value: 135, name: 'Video Ads' },
              { value: 102, name: 'Others' },
            ],
          },
        ]}
      >
        <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' }} />
        <Legend
          legend={{
            data: [
              'Direct',
              'Marketing',
              'Search Engine',
              'Email',
              'Union Ads',
              'Video Ads',
              'Baidu',
              'Google',
              'Bing',
              'Others',
            ],
          }}
        />
      </PieChart>
    );
  },
};

export const BarRichText: Story = {
  name: 'Weather Statistics',
  render() {
    const seriesLabel = {
      show: true,
    };

    return (
      <LineChart
        style={{ width: 720, height: 500 }}
        compose={[BarChart]}
        grid={{ left: 100 }}
        xAxis={{ type: 'value', name: 'Days', axisLabel: { formatter: '{value}' } }}
        yAxis={{
          type: 'category',
          inverse: true,
          data: ['Sunny', 'Cloudy', 'Showers'],
          axisLabel: {
            formatter: (value) => '{' + value + '| }\n{value|' + value + '}',
            margin: 20,
            rich: {
              value: { lineHeight: 30, align: 'center' },
              Sunny: { height: 40, align: 'center', backgroundColor: { image: weatherIcons.Sunny } },
              Cloudy: { height: 40, align: 'center', backgroundColor: { image: weatherIcons.Cloudy } },
              Showers: { height: 40, align: 'center', backgroundColor: { image: weatherIcons.Showers } },
            },
          },
        }}
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
                // shadowBlur: 5,
                // shadowColor: '#000',
                // shadowOffsetX: 0,
                // shadowOffsetY: 1,
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
      </LineChart>
    );
  },
};
