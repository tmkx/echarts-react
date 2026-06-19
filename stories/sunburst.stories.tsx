import { SunburstChart, Title, VisualMap } from '@fanciers/echarts-react';
import type { Meta, StoryObj } from '@storybook/react';
import type { SunburstSeriesNodeItemOption } from 'echarts/types/src/chart/sunburst/SunburstSeries.js';

const meta = {
  title: 'Sunburst',
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof meta>;

export const SunburstSimple: Story = {
  name: 'Basic Sunburst',
  render() {
    return (
      <SunburstChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            type: 'sunburst',
            data: [
              {
                name: 'Grandpa',
                children: [
                  {
                    name: 'Uncle Leo',
                    value: 15,
                    children: [
                      { name: 'Cousin Jack', value: 2 },
                      { name: 'Cousin Mary', value: 5, children: [{ name: 'Jackson', value: 2 }] },
                      { name: 'Cousin Ben', value: 4 },
                    ],
                  },
                  {
                    name: 'Father',
                    value: 10,
                    children: [
                      { name: 'Me', value: 5 },
                      { name: 'Brother Peter', value: 1 },
                    ],
                  },
                ],
              },
              {
                name: 'Nancy',
                children: [
                  {
                    name: 'Uncle Nike',
                    children: [
                      { name: 'Cousin Betty', value: 1 },
                      { name: 'Cousin Jenny', value: 2 },
                    ],
                  },
                ],
              },
            ],
            radius: [0, '90%'],
            label: { rotate: 'radial' },
          },
        ]}
      />
    );
  },
};

export const SunburstBorderRadius: Story = {
  name: 'Sunburst with Rounded Corner',
  render() {
    return (
      <SunburstChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            type: 'sunburst',
            data: [
              {
                name: 'Grandpa',
                children: [
                  {
                    name: 'Uncle Leo',
                    value: 15,
                    children: [
                      { name: 'Cousin Jack', value: 2 },
                      { name: 'Cousin Mary', value: 5, children: [{ name: 'Jackson', value: 2 }] },
                      { name: 'Cousin Ben', value: 4 },
                    ],
                  },
                  {
                    name: 'Father',
                    value: 10,
                    children: [
                      { name: 'Me', value: 5 },
                      { name: 'Brother Peter', value: 1 },
                    ],
                  },
                ],
              },
              {
                name: 'Nancy',
                children: [
                  {
                    name: 'Uncle Nike',
                    children: [
                      { name: 'Cousin Betty', value: 1 },
                      { name: 'Cousin Jenny', value: 2 },
                    ],
                  },
                ],
              },
            ],
            radius: [60, '90%'],
            itemStyle: { borderRadius: 7, borderWidth: 2 },
            label: { show: false },
          },
        ]}
      />
    );
  },
};

export const SunburstLabelRotate: Story = {
  name: 'Sunburst Label Rotate',
  render() {
    return (
      <SunburstChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            type: 'sunburst',
            radius: ['15%', '80%'],
            emphasis: { focus: 'ancestor' },
            data: [
              {
                value: 8,
                children: [
                  { value: 4, children: [{ value: 2 }, { value: 1 }, { value: 1 }, { value: 0.5 }] },
                  { value: 2 },
                ],
              },
              { value: 4, children: [{ children: [{ value: 2 }] }] },
              { value: 4, children: [{ children: [{ value: 2 }] }] },
              { value: 3, children: [{ children: [{ value: 1 }] }] },
            ],
            label: {
              color: '#000',
              textBorderColor: '#fff',
              textBorderWidth: 2,
              formatter: function (param: any) {
                var depth = param.treePathInfo.length;
                if (depth === 2) return 'radial';
                else if (depth === 3) return 'tangential';
                else if (depth === 4) return '0';
                return '';
              },
            },
            levels: [
              {},
              { itemStyle: { color: '#CD4949' }, label: { rotate: 'radial' } },
              { itemStyle: { color: '#F47251' }, label: { rotate: 'tangential' } },
              { itemStyle: { color: '#FFC75F' }, label: { rotate: 0 } },
            ],
          },
        ]}
      />
    );
  },
};

export const SunburstMonochrome: Story = {
  name: 'Monochrome Sunburst',
  render() {
    const item1 = { color: '#F54F4A' };
    const item2 = { color: '#FF8C75' };
    const item3 = { color: '#FFB499' };
    const data = [
      {
        children: [
          {
            value: 5,
            children: [
              { value: 1, itemStyle: item1 },
              { value: 2, children: [{ value: 1, itemStyle: item2 }] },
              { children: [{ value: 1 }] },
            ],
            itemStyle: item1,
          },
          {
            value: 10,
            children: [
              {
                value: 6,
                children: [{ value: 1, itemStyle: item1 }, { value: 1 }, { value: 1, itemStyle: item2 }, { value: 1 }],
                itemStyle: item3,
              },
              { value: 2, children: [{ value: 1 }], itemStyle: item3 },
              { children: [{ value: 1, itemStyle: item2 }] },
            ],
            itemStyle: item1,
          },
        ],
        itemStyle: item1,
      },
      {
        value: 9,
        children: [
          {
            value: 4,
            children: [{ value: 2, itemStyle: item2 }, { children: [{ value: 1, itemStyle: item1 }] }],
            itemStyle: item1,
          },
          { children: [{ value: 3, children: [{ value: 1 }, { value: 1, itemStyle: item2 }] }], itemStyle: item3 },
        ],
        itemStyle: item2,
      },
      {
        value: 7,
        children: [
          {
            children: [
              { value: 1, itemStyle: item3 },
              { value: 3, children: [{ value: 1, itemStyle: item2 }, { value: 1 }], itemStyle: item2 },
              { value: 2, children: [{ value: 1 }, { value: 1, itemStyle: item1 }], itemStyle: item1 },
            ],
            itemStyle: item3,
          },
        ],
        itemStyle: item1,
      },
      {
        children: [
          {
            value: 6,
            children: [
              { value: 1, itemStyle: item2 },
              { value: 2, children: [{ value: 2, itemStyle: item2 }], itemStyle: item1 },
              { value: 1, itemStyle: item3 },
            ],
            itemStyle: item3,
          },
          {
            value: 3,
            children: [{ value: 1 }, { children: [{ value: 1, itemStyle: item2 }] }, { value: 1 }],
            itemStyle: item3,
          },
        ],
        itemStyle: item1,
      },
    ];
    return (
      <SunburstChart
        style={{ width: 720, height: 500 }}
        series={[
          {
            radius: ['15%', '80%'],
            type: 'sunburst',
            emphasis: { focus: 'ancestor' },
            data,
            label: { rotate: 'radial' },
            levels: [],
            itemStyle: { color: '#ddd', borderWidth: 2 },
          },
        ]}
      />
    );
  },
};

export const SunburstVisualMap: Story = {
  name: 'Sunburst VisualMap',
  render() {
    const data = [
      {
        name: 'Grandpa',
        children: [
          {
            name: 'Uncle Leo',
            value: 15,
            children: [
              { name: 'Cousin Jack', value: 2 },
              { name: 'Cousin Mary', value: 5, children: [{ name: 'Jackson', value: 2 }] },
              { name: 'Cousin Ben', value: 4 },
            ],
          },
          { name: 'Aunt Jane', children: [{ name: 'Cousin Kate', value: 4 }] },
          {
            name: 'Father',
            value: 10,
            children: [
              { name: 'Me', value: 5, itemStyle: { color: 'red' } },
              { name: 'Brother Peter', value: 1 },
            ],
          },
        ],
      },
      {
        name: 'Mike',
        children: [
          {
            name: 'Uncle Dan',
            children: [
              { name: 'Cousin Lucy', value: 3 },
              { name: 'Cousin Luck', value: 4, children: [{ name: 'Nephew', value: 2 }] },
            ],
          },
        ],
      },
      {
        name: 'Nancy',
        children: [
          {
            name: 'Uncle Nike',
            children: [
              { name: 'Cousin Betty', value: 1 },
              { name: 'Cousin Jenny', value: 2 },
            ],
          },
        ],
      },
    ];
    return (
      <SunburstChart
        style={{ width: 720, height: 500 }}
        series={{
          type: 'sunburst',
          data: data,
          radius: [0, '90%'],
          label: { rotate: 'radial' },
        }}
      >
        <VisualMap
          visualMap={{
            type: 'continuous',
            min: 0,
            max: 10,
            inRange: { color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862'] },
          }}
        />
      </SunburstChart>
    );
  },
};

export const SunburstDrink: Story = {
  name: 'Drink Flavors',
  render() {
    const data = [
      {
        name: 'Flora',
        itemStyle: { color: '#da0d68' },
        children: [
          { name: 'Black Tea', value: 1, itemStyle: { color: '#975e6d' } },
          {
            name: 'Floral',
            itemStyle: { color: '#e0719c' },
            children: [
              { name: 'Chamomile', value: 1, itemStyle: { color: '#f99e1c' } },
              { name: 'Rose', value: 1, itemStyle: { color: '#ef5a78' } },
              { name: 'Jasmine', value: 1, itemStyle: { color: '#f7f1bd' } },
            ],
          },
        ],
      },
      {
        name: 'Fruity',
        itemStyle: { color: '#da1d23' },
        children: [
          {
            name: 'Berry',
            itemStyle: { color: '#dd4c51' },
            children: [
              { name: 'Blackberry', value: 1, itemStyle: { color: '#3e0317' } },
              { name: 'Raspberry', value: 1, itemStyle: { color: '#e62969' } },
              { name: 'Blueberry', value: 1, itemStyle: { color: '#6569b0' } },
              { name: 'Strawberry', value: 1, itemStyle: { color: '#ef2d36' } },
            ],
          },
          {
            name: 'Dried Fruit',
            itemStyle: { color: '#c94a44' },
            children: [
              { name: 'Raisin', value: 1, itemStyle: { color: '#b53b54' } },
              { name: 'Prune', value: 1, itemStyle: { color: '#a5446f' } },
            ],
          },
          {
            name: 'Other Fruit',
            itemStyle: { color: '#dd4c51' },
            children: [
              { name: 'Coconut', value: 1, itemStyle: { color: '#f2684b' } },
              { name: 'Cherry', value: 1, itemStyle: { color: '#e73451' } },
              { name: 'Pomegranate', value: 1, itemStyle: { color: '#e65656' } },
              { name: 'Pineapple', value: 1, itemStyle: { color: '#f89a1c' } },
              { name: 'Grape', value: 1, itemStyle: { color: '#aeb92c' } },
              { name: 'Apple', value: 1, itemStyle: { color: '#4eb849' } },
              { name: 'Peach', value: 1, itemStyle: { color: '#f68a5c' } },
              { name: 'Pear', value: 1, itemStyle: { color: '#baa635' } },
            ],
          },
          {
            name: 'Citrus Fruit',
            itemStyle: { color: '#f7a128' },
            children: [
              { name: 'Grapefruit', value: 1, itemStyle: { color: '#f26355' } },
              { name: 'Orange', value: 1, itemStyle: { color: '#e2631e' } },
              { name: 'Lemon', value: 1, itemStyle: { color: '#fde404' } },
              { name: 'Lime', value: 1, itemStyle: { color: '#7eb138' } },
            ],
          },
        ],
      },
      {
        name: 'Sour/\nFermented',
        itemStyle: { color: '#ebb40f' },
        children: [
          {
            name: 'Sour',
            itemStyle: { color: '#e1c315' },
            children: [
              { name: 'Sour Aromatics', value: 1, itemStyle: { color: '#9ea718' } },
              { name: 'Acetic Acid', value: 1, itemStyle: { color: '#94a76f' } },
              { name: 'Butyric Acid', value: 1, itemStyle: { color: '#d0b24f' } },
              { name: 'Isovaleric Acid', value: 1, itemStyle: { color: '#8eb646' } },
              { name: 'Citric Acid', value: 1, itemStyle: { color: '#faef07' } },
              { name: 'Malic Acid', value: 1, itemStyle: { color: '#c1ba07' } },
            ],
          },
          {
            name: 'Alcohol/\nFremented',
            itemStyle: { color: '#b09733' },
            children: [
              { name: 'Winey', value: 1, itemStyle: { color: '#8f1c53' } },
              { name: 'Whiskey', value: 1, itemStyle: { color: '#b34039' } },
              { name: 'Fremented', value: 1, itemStyle: { color: '#ba9232' } },
              { name: 'Overripe', value: 1, itemStyle: { color: '#8b6439' } },
            ],
          },
        ],
      },
      {
        name: 'Green/\nVegetative',
        itemStyle: { color: '#187a2f' },
        children: [
          { name: 'Olive Oil', value: 1, itemStyle: { color: '#a2b029' } },
          { name: 'Raw', value: 1, itemStyle: { color: '#718933' } },
          {
            name: 'Green/\nVegetative',
            itemStyle: { color: '#3aa255' },
            children: [
              { name: 'Under-ripe', value: 1, itemStyle: { color: '#a2bb2b' } },
              { name: 'Peapod', value: 1, itemStyle: { color: '#62aa3c' } },
              { name: 'Fresh', value: 1, itemStyle: { color: '#03a653' } },
              { name: 'Dark Green', value: 1, itemStyle: { color: '#038549' } },
              { name: 'Vegetative', value: 1, itemStyle: { color: '#28b44b' } },
              { name: 'Hay-like', value: 1, itemStyle: { color: '#a3a830' } },
              { name: 'Herb-like', value: 1, itemStyle: { color: '#7ac141' } },
            ],
          },
          { name: 'Beany', value: 1, itemStyle: { color: '#5e9a80' } },
        ],
      },
      {
        name: 'Other',
        itemStyle: { color: '#0aa3b5' },
        children: [
          {
            name: 'Papery/Musty',
            itemStyle: { color: '#9db2b7' },
            children: [
              { name: 'Stale', value: 1, itemStyle: { color: '#8b8c90' } },
              { name: 'Cardboard', value: 1, itemStyle: { color: '#beb276' } },
              { name: 'Papery', value: 1, itemStyle: { color: '#fefef4' } },
              { name: 'Woody', value: 1, itemStyle: { color: '#744e03' } },
              { name: 'Moldy/Damp', value: 1, itemStyle: { color: '#a3a36f' } },
              { name: 'Musty/Dusty', value: 1, itemStyle: { color: '#c9b583' } },
              { name: 'Musty/Earthy', value: 1, itemStyle: { color: '#978847' } },
              { name: 'Animalic', value: 1, itemStyle: { color: '#9d977f' } },
              { name: 'Meaty Brothy', value: 1, itemStyle: { color: '#cc7b6a' } },
              { name: 'Phenolic', value: 1, itemStyle: { color: '#db646a' } },
            ],
          },
          {
            name: 'Chemical',
            itemStyle: { color: '#76c0cb' },
            children: [
              { name: 'Bitter', value: 1, itemStyle: { color: '#80a89d' } },
              { name: 'Salty', value: 1, itemStyle: { color: '#def2fd' } },
              { name: 'Medicinal', value: 1, itemStyle: { color: '#7a9bae' } },
              { name: 'Petroleum', value: 1, itemStyle: { color: '#039fb8' } },
              { name: 'Skunky', value: 1, itemStyle: { color: '#5e777b' } },
              { name: 'Rubber', value: 1, itemStyle: { color: '#120c0c' } },
            ],
          },
        ],
      },
      {
        name: 'Roasted',
        itemStyle: { color: '#c94930' },
        children: [
          { name: 'Pipe Tobacco', value: 1, itemStyle: { color: '#caa465' } },
          { name: 'Tobacco', value: 1, itemStyle: { color: '#dfbd7e' } },
          {
            name: 'Burnt',
            itemStyle: { color: '#be8663' },
            children: [
              { name: 'Acrid', value: 1, itemStyle: { color: '#b9a449' } },
              { name: 'Ashy', value: 1, itemStyle: { color: '#899893' } },
              { name: 'Smoky', value: 1, itemStyle: { color: '#a1743b' } },
              { name: 'Brown, Roast', value: 1, itemStyle: { color: '#894810' } },
            ],
          },
          {
            name: 'Cereal',
            itemStyle: { color: '#ddaf61' },
            children: [
              { name: 'Grain', value: 1, itemStyle: { color: '#b7906f' } },
              { name: 'Malt', value: 1, itemStyle: { color: '#eb9d5f' } },
            ],
          },
        ],
      },
      {
        name: 'Spices',
        itemStyle: { color: '#ad213e' },
        children: [
          { name: 'Pungent', value: 1, itemStyle: { color: '#794752' } },
          { name: 'Pepper', value: 1, itemStyle: { color: '#cc3d41' } },
          {
            name: 'Brown Spice',
            itemStyle: { color: '#b14d57' },
            children: [
              { name: 'Anise', value: 1, itemStyle: { color: '#c78936' } },
              { name: 'Nutmeg', value: 1, itemStyle: { color: '#8c292c' } },
              { name: 'Cinnamon', value: 1, itemStyle: { color: '#e5762e' } },
              { name: 'Clove', value: 1, itemStyle: { color: '#a16c5a' } },
            ],
          },
        ],
      },
      {
        name: 'Nutty/\nCocoa',
        itemStyle: { color: '#a87b64' },
        children: [
          {
            name: 'Nutty',
            itemStyle: { color: '#c78869' },
            children: [
              { name: 'Peanuts', value: 1, itemStyle: { color: '#d4ad12' } },
              { name: 'Hazelnut', value: 1, itemStyle: { color: '#9d5433' } },
              { name: 'Almond', value: 1, itemStyle: { color: '#c89f83' } },
            ],
          },
          {
            name: 'Cocoa',
            itemStyle: { color: '#bb764c' },
            children: [
              { name: 'Chocolate', value: 1, itemStyle: { color: '#692a19' } },
              { name: 'Dark Chocolate', value: 1, itemStyle: { color: '#470604' } },
            ],
          },
        ],
      },
      {
        name: 'Sweet',
        itemStyle: { color: '#e65832' },
        children: [
          {
            name: 'Brown Sugar',
            itemStyle: { color: '#d45a59' },
            children: [
              { name: 'Molasses', value: 1, itemStyle: { color: '#310d0f' } },
              { name: 'Maple Syrup', value: 1, itemStyle: { color: '#ae341f' } },
              { name: 'Caramelized', value: 1, itemStyle: { color: '#d78823' } },
              { name: 'Honey', value: 1, itemStyle: { color: '#da5c1f' } },
            ],
          },
          { name: 'Vanilla', value: 1, itemStyle: { color: '#f89a80' } },
          { name: 'Vanillin', value: 1, itemStyle: { color: '#f37674' } },
          { name: 'Overall Sweet', value: 1, itemStyle: { color: '#e75b68' } },
          { name: 'Sweet Aromatics', value: 1, itemStyle: { color: '#d0545f' } },
        ],
      },
    ];
    return (
      <SunburstChart
        style={{ width: 720, height: 500 }}
        series={{
          type: 'sunburst',
          data: data,
          radius: [0, '95%'],
          emphasis: { focus: 'ancestor' },
          levels: [
            {},
            { r0: '15%', r: '35%', itemStyle: { borderWidth: 2 }, label: { rotate: 'tangential' } },
            { r0: '35%', r: '70%', label: { align: 'right' } },
            {
              r0: '70%',
              r: '72%',
              label: { position: 'outside', padding: 3, silent: false },
              itemStyle: { borderWidth: 3 },
            },
          ],
        }}
      >
        <Title
          title={{
            text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
            subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
            textStyle: { fontSize: 14, align: 'center' },
            subtextStyle: { align: 'center' },
            sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/',
          }}
        />
      </SunburstChart>
    );
  },
};

export const SunburstBook: Story = {
  name: 'Book Records',
  render() {
    const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
    const bgColor = '#2E2733';
    const itemStyle: Record<
      'star5' | 'star4' | 'star3' | 'star2',
      NonNullable<SunburstSeriesNodeItemOption['itemStyle']>
    > = {
      star5: { color: colors[0]! },
      star4: { color: colors[1]! },
      star3: { color: colors[2]! },
      star2: { color: colors[3]! },
    };
    const data: SunburstSeriesNodeItemOption[] = [
      {
        name: '虚构',
        itemStyle: { color: colors[1]! },
        children: [
          {
            name: '小说',
            children: [
              { name: '5☆', children: [{ name: '疼' }, { name: '慈悲' }, { name: '楼下的房客' }] },
              { name: '4☆', children: [{ name: '虚无的十字架' }, { name: '无声告白' }, { name: '童年的终结' }] },
              { name: '3☆', children: [{ name: '疯癫老人日记' }] },
            ],
          },
          {
            name: '其他',
            children: [
              { name: '5☆', children: [{ name: '纳博科夫短篇小说全集' }] },
              { name: '4☆', children: [{ name: '安魂曲' }, { name: '人生拼图版' }] },
              { name: '3☆', children: [{ name: '比起爱你，我更需要你' }] },
            ],
          },
        ],
      },
      {
        name: '非虚构',
        itemStyle: { color: colors[2]! },
        children: [
          {
            name: '设计',
            children: [
              { name: '5☆', children: [{ name: '无界面交互' }] },
              { name: '4☆', children: [{ name: '数字绘图的光照与渲染技术' }, { name: '日本建筑解剖书' }] },
              { name: '3☆', children: [{ name: '奇幻世界艺术\n&RPG地图绘制讲座' }] },
            ],
          },
          {
            name: '社科',
            children: [
              { name: '5☆', children: [{ name: '痛点' }] },
              { name: '4☆', children: [{ name: '卓有成效的管理者' }, { name: '进化' }, { name: '后物欲时代的来临' }] },
              { name: '3☆', children: [{ name: '疯癫与文明' }] },
            ],
          },
          {
            name: '心理',
            children: [
              { name: '5☆', children: [{ name: '我们时代的神经症人格' }] },
              { name: '4☆', children: [{ name: '皮格马利翁效应' }, { name: '受伤的人' }] },
              { name: '3☆' },
              { name: '2☆', children: [{ name: '迷恋' }] },
            ],
          },
          {
            name: '居家',
            children: [
              { name: '4☆', children: [{ name: '把房子住成家' }, { name: '只过必要生活' }, { name: '北欧简约风格' }] },
            ],
          },
          {
            name: '绘本',
            children: [
              { name: '5☆', children: [{ name: '设计诗' }] },
              { name: '4☆', children: [{ name: '假如生活糊弄了你' }, { name: '博物学家的神秘动物图鉴' }] },
              { name: '3☆', children: [{ name: '方向' }] },
            ],
          },
          { name: '哲学', children: [{ name: '4☆', children: [{ name: '人生的智慧' }] }] },
          {
            name: '技术',
            children: [
              { name: '5☆', children: [{ name: '代码整洁之道' }] },
              { name: '4☆', children: [{ name: 'Three.js 开发指南' }] },
            ],
          },
        ],
      },
    ];
    for (let j = 0; j < data.length; ++j) {
      let level1 = data[j]!.children!;
      for (let i = 0; i < level1.length; ++i) {
        let block = level1[i]!.children!;
        let bookScore: { color: string; value: number }[] = [];
        let bookScoreId: number | undefined;
        for (let star = 0; star < block.length; ++star) {
          let style: NonNullable<SunburstSeriesNodeItemOption['itemStyle']> | undefined = (function (name) {
            switch (name) {
              case '5☆':
                bookScoreId = 0;
                return itemStyle.star5;
              case '4☆':
                bookScoreId = 1;
                return itemStyle.star4;
              case '3☆':
                bookScoreId = 2;
                return itemStyle.star3;
              case '2☆':
                bookScoreId = 3;
                return itemStyle.star2;
            }
          })(block[star]!.name);
          block[star]!.label = { color: style!.color as string };
          if (block[star]!.children) {
            style = { opacity: 1, color: style!.color! };
            block[star]!.children!.forEach(function (book) {
              book.value = 1;
              book.itemStyle = style!;
              book.label = { color: style!.color as string };
              let value = 1;
              if (bookScoreId === 0 || bookScoreId === 3) value = 5;
              if (bookScore[bookScoreId!]) bookScore[bookScoreId!]!.value += value;
              else bookScore[bookScoreId!] = { color: colors[bookScoreId!]!, value: value };
            });
          }
        }
        level1[i]!.itemStyle = { color: data[j]!.itemStyle!.color! };
      }
    }

    return (
      <SunburstChart
        style={{ width: 720, height: 500 }}
        backgroundColor={bgColor}
        color={colors}
        series={[
          {
            type: 'sunburst',
            center: ['50%', '48%'],
            data,
            sort: function (a, b) {
              if (a.depth === 1) return b.getValue() - a.getValue();
              else return a.dataIndex - b.dataIndex;
            },
            label: { rotate: 'radial', color: bgColor },
            itemStyle: { borderColor: bgColor, borderWidth: 2 },
            levels: [
              {},
              { r0: 0, r: 40, label: { rotate: 0 } },
              { r0: 40, r: 105 },
              {
                r0: 115,
                r: 140,
                itemStyle: { shadowBlur: 2, shadowColor: colors[2]!, color: 'transparent' },
                label: { rotate: 'tangential', fontSize: 10, color: colors[0]! },
              },
              {
                r0: 140,
                r: 145,
                itemStyle: { shadowBlur: 80, shadowColor: colors[0]! },
                label: { position: 'outside', textShadowBlur: 5, textShadowColor: '#333' },
              },
            ],
          },
        ]}
      />
    );
  },
};
