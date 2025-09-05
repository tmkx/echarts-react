import {
  Dataset,
  Legend,
  LineChart,
  PieChart,
  Title,
  Toolbox,
  Tooltip,
  VisualMap,
  echarts,
} from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

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

export const PieHalfDonut: Story = {
  name: 'Half Doughnut Chart',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
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

export const PiePadAngle: Story = {
  name: 'Pie with padAngle',
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
            padAngle: 5,
            itemStyle: { borderRadius: 10 },
            label: { show: false, position: 'center' },
            emphasis: {
              label: { show: true, fontSize: 40, fontWeight: 'bold' },
            },
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

export const PieCustom: Story = {
  name: 'Customized Pie',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        backgroundColor="#2c343c"
        series={[
          {
            name: 'Access From',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 274, name: 'Union Ads' },
              { value: 235, name: 'Video Ads' },
              { value: 400, name: 'Search Engine' },
            ].sort((a, b) => a.value - b.value),
            roseType: 'radius',
            label: { color: 'rgba(255, 255, 255, 0.3)' },
            labelLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.3)' }, smooth: 0.2, length: 10, length2: 20 },
            itemStyle: { color: '#c23531', shadowBlur: 200, shadowColor: 'rgba(0, 0, 0, 0.5)' },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: () => Math.random() * 200,
          },
        ]}
      >
        <Title title={{ text: 'Customized Pie', left: 'center', top: 20, textStyle: { color: '#ccc' } }} />
        <Tooltip tooltip={{ trigger: 'item' }} />
        <Legend legend={{ top: '5%', left: 'center' }} />
        <VisualMap visualMap={{ show: false, min: 80, max: 600, inRange: { colorLightness: [0, 1] } }} />
      </PieChart>
    );
  },
};

export const PieRoseType: Story = {
  name: 'Nightingale Chart',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            name: 'Radius Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: { borderRadius: 5 },
            label: { show: false },
            emphasis: { label: { show: true } },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 33, name: 'rose 2' },
              { value: 28, name: 'rose 3' },
              { value: 22, name: 'rose 4' },
              { value: 20, name: 'rose 5' },
              { value: 15, name: 'rose 6' },
              { value: 12, name: 'rose 7' },
              { value: 10, name: 'rose 8' },
            ],
          },
          {
            name: 'Area Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: { borderRadius: 5 },
            data: [
              { value: 30, name: 'rose 1' },
              { value: 28, name: 'rose 2' },
              { value: 26, name: 'rose 3' },
              { value: 24, name: 'rose 4' },
              { value: 22, name: 'rose 5' },
              { value: 20, name: 'rose 6' },
              { value: 18, name: 'rose 7' },
              { value: 16, name: 'rose 8' },
            ],
          },
        ]}
      >
        <Title title={{ text: 'Nightingale Chart', subtext: 'Fake Data', left: 'center' }} />
        <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)' }} />
        <Legend
          legend={{
            left: 'center',
            top: 'bottom',
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8'],
          }}
        />
        <Toolbox
          toolbox={{
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          }}
        />
      </PieChart>
    );
  },
};

export const PieRoseTypeSimple: Story = {
  name: 'Nightingale Chart',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: { borderRadius: 8 },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' },
            ],
          },
        ]}
      >
        <Legend legend={{ top: 'bottom' }} />
        <Toolbox
          toolbox={{
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          }}
        />
      </PieChart>
    );
  },
};

export const PieAlignTo: Story = {
  name: 'Pie Label Align',
  render() {
    const data = [
      { name: 'Apples', value: 70 },
      { name: 'Strawberries', value: 68 },
      { name: 'Bananas', value: 48 },
      { name: 'Oranges', value: 40 },
      { name: 'Pears', value: 32 },
      { name: 'Pineapples', value: 27 },
      { name: 'Grapes', value: 18 },
    ];

    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: { position: 'outer', alignTo: 'none', bleedMargin: 5 },
            left: 0,
            right: '66.6667%',
            top: 0,
            bottom: 0,
          },
          {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: { position: 'outer', alignTo: 'labelLine', bleedMargin: 5 },
            left: '33.3333%',
            right: '33.3333%',
            top: 0,
            bottom: 0,
          },
          {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: { position: 'outer', alignTo: 'edge', margin: 20 },
            left: '66.6667%',
            right: 0,
            top: 0,
            bottom: 0,
          },
        ]}
      >
        <Title
          title={[
            { text: 'Pie label alignTo', left: 'center' },
            { subtext: 'alignTo: "none" (default)', left: '16.67%', top: '75%', textAlign: 'center' },
            { subtext: 'alignTo: "labelLine"', left: '50%', top: '75%', textAlign: 'center' },
            { subtext: 'alignTo: "edge"', left: '83.33%', top: '75%', textAlign: 'center' },
          ]}
        />
      </PieChart>
    );
  },
};

export const PieLabelLineAdjust: Story = {
  name: 'Label Line Adjust',
  render() {
    const chartRef = React.useRef<echarts.ECharts>(null);
    var datas = [
      [
        { name: '圣彼得堡来客', value: 5.6 },
        { name: '陀思妥耶夫斯基全集', value: 1 },
        { name: '史记精注全译（全6册）', value: 0.8 },
        { name: '加德纳艺术通史', value: 0.5 },
        { name: '表象与本质', value: 0.5 },
        { name: '其它', value: 3.8 },
      ],
      [
        { name: '银河帝国5：迈向基地', value: 3.8 },
        { name: '俞军产品方法论', value: 2.3 },
        { name: '艺术的逃难', value: 2.2 },
        { name: '第一次世界大战回忆录（全五卷）', value: 1.3 },
        { name: 'Scrum 精髓', value: 1.2 },
        { name: '其它', value: 5.7 },
      ],
      [
        { name: '克莱因壶', value: 3.5 },
        { name: '投资最重要的事', value: 2.8 },
        { name: '简读中国史', value: 1.7 },
        { name: '你当像鸟飞往你的山', value: 1.4 },
        { name: '表象与本质', value: 0.5 },
        { name: '其它', value: 3.8 },
      ],
    ];

    return (
      <PieChart
        ref={chartRef}
        style={{ width: 480, height: 300 }}
        series={datas.map(function (data, idx) {
          var top = idx * 33.3;
          return {
            type: 'pie',
            radius: [20, 60],
            top: top + '%',
            height: '33.33%',
            left: 'center',
            width: 400,
            itemStyle: { borderColor: '#fff', borderWidth: 1 },
            label: {
              alignTo: 'edge',
              formatter: '{name|{b}}\n{time|{c} 小时}',
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              rich: { time: { fontSize: 10, color: '#999' } },
            },
            labelLine: { length: 15, length2: 0, maxSurfaceAngle: 80 },
            labelLayout: function (params) {
              const isLeft = params.labelRect.x < (chartRef.current?.getWidth() || 0) / 2;
              const points = params.labelLinePoints!;
              // Update the end point.
              points[2]![0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
              return { labelLinePoints: points };
            },
            data: data,
          };
        })}
      >
        <Title
          title={{
            text: '阅读书籍分布',
            left: 'center',
            textStyle: { color: '#999', fontWeight: 'normal', fontSize: 14 },
          }}
        />
      </PieChart>
    );
  },
};

export const PieLegend: Story = {
  name: 'Pie with Scrollable Legend',
  render() {
    function genData(count: number) {
      // prettier-ignore
      const nameList = [
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
    ];
      const legendData = [];
      const seriesData = [];
      for (var i = 0; i < count; i++) {
        var name = Math.random() > 0.65 ? makeWord(4, 1) + '·' + makeWord(3, 0) : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({ name: name, value: Math.round(Math.random() * 100000) });
      }
      return { legendData: legendData, seriesData: seriesData };
      function makeWord(max: number, min: number) {
        const name = Array.from(
          { length: Math.ceil(Math.random() * max + min) },
          () => nameList[Math.round(Math.random() * nameList.length - 1)]
        );
        return name.join('');
      }
    }

    const data = React.useMemo(() => genData(50), []);

    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' } },
          },
        ]}
      >
        <Title title={{ text: '同名数量统计', subtext: '纯属虚构', left: 'center' }} />
        <Tooltip tooltip={{ trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)' }} />
        <Legend
          legend={{ type: 'scroll', orient: 'vertical', right: 10, top: 20, bottom: 20, data: data.legendData }}
        />
      </PieChart>
    );
  },
};

export const PieNest: Story = {
  name: 'Nested Pies',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
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
            // prettier-ignore
            data: ['Direct', 'Marketing', 'Search Engine', 'Email', 'Union Ads', 'Video Ads', 'Baidu', 'Google', 'Bing', 'Others'],
          }}
        />
      </PieChart>
    );
  },
};

export const DataTransformMultiplePie: Story = {
  name: 'Partition Data to Pies',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        media={[
          {
            query: { minAspectRatio: 1 },
            option: { series: [{ center: ['25%', '50%'] }, { center: ['50%', '50%'] }, { center: ['75%', '50%'] }] },
          },
          {
            option: { series: [{ center: ['50%', '25%'] }, { center: ['50%', '50%'] }, { center: ['50%', '75%'] }] },
          },
        ]}
        series={[
          { type: 'pie', radius: 50, center: ['50%', '25%'], datasetIndex: 1 },
          { type: 'pie', radius: 50, center: ['50%', '50%'], datasetIndex: 2 },
          { type: 'pie', radius: 50, center: ['50%', '75%'], datasetIndex: 3 },
        ]}
      >
        <Dataset
          dataset={[
            {
              source: [
                ['Product', 'Sales', 'Price', 'Year'],
                ['Cake', 123, 32, 2011],
                ['Cereal', 231, 14, 2011],
                ['Tofu', 235, 5, 2011],
                ['Dumpling', 341, 25, 2011],
                ['Biscuit', 122, 29, 2011],
                ['Cake', 143, 30, 2012],
                ['Cereal', 201, 19, 2012],
                ['Tofu', 255, 7, 2012],
                ['Dumpling', 241, 27, 2012],
                ['Biscuit', 102, 34, 2012],
                ['Cake', 153, 28, 2013],
                ['Cereal', 181, 21, 2013],
                ['Tofu', 395, 4, 2013],
                ['Dumpling', 281, 31, 2013],
                ['Biscuit', 92, 39, 2013],
                ['Cake', 223, 29, 2014],
                ['Cereal', 211, 17, 2014],
                ['Tofu', 345, 3, 2014],
                ['Dumpling', 211, 35, 2014],
                ['Biscuit', 72, 24, 2014],
              ],
            },
            { transform: { type: 'filter', config: { dimension: 'Year', value: 2011 } } },
            { transform: { type: 'filter', config: { dimension: 'Year', value: 2012 } } },
            { transform: { type: 'filter', config: { dimension: 'Year', value: 2013 } } },
          ]}
        />
      </PieChart>
    );
  },
};

export const DatasetDefault: Story = {
  name: 'Default arrangement',
  render() {
    return (
      <PieChart
        style={{ width: 480, height: 300 }}
        series={[
          {
            type: 'pie',
            radius: '20%',
            center: ['25%', '30%'],
            // No encode specified, by default, it is '2012'.
          },
          { type: 'pie', radius: '20%', center: ['75%', '30%'], encode: { itemName: 'product', value: '2013' } },
          { type: 'pie', radius: '20%', center: ['25%', '75%'], encode: { itemName: 'product', value: '2014' } },
          { type: 'pie', radius: '20%', center: ['75%', '75%'], encode: { itemName: 'product', value: '2015' } },
        ]}
      >
        <Legend legend={{}} />
        <Tooltip tooltip={{}} />
        <Dataset
          dataset={{
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
              ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
              ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1],
            ],
          }}
        />
      </PieChart>
    );
  },
};

export const DatasetLink: Story = {
  name: 'Share Dataset',
  render() {
    const chartRef = React.useRef<echarts.ECharts>(null);
    const [dimension, setDimension] = React.useState('2012');

    React.useEffect(() => {
      const myChart = chartRef.current;
      if (!myChart) return;
      const handler = (event: any) => {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          setDimension(dimension);
        }
      };
      myChart.on('updateAxisPointer', handler);
      return () => void myChart.off('updateAxisPointer', handler);
    }, []);

    return (
      <PieChart
        ref={chartRef}
        compose={[LineChart]}
        style={{ width: 480, height: 300 }}
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
      </PieChart>
    );
  },
};
