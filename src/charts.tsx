import React from 'react';
import type {
  BarSeriesOption,
  ComposeOption,
  EffectScatterSeriesOption,
  GraphSeriesOption,
  GridComponentOption,
  HeatmapSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  ScatterSeriesOption,
} from 'echarts';
import {
  BarChart as EChartBarChart,
  EffectScatterChart as EChartEffectScatterChart,
  GraphChart as EChartGraphChart,
  HeatmapChart as EChartHeatmapChart,
  LineChart as EChartLineChart,
  PieChart as EChartPieChart,
  ScatterChart as EChartScatterChart,
} from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import type { ComponentOption } from 'echarts/types/src/util/types.js';
import {
  ChartContext,
  defaultSetOptionOpt,
  echarts,
  useInitialChartContext,
  useRegister,
  type EChartExt,
  type Simplify,
} from './shared.js';

function assignForwardedRef<T>(ref: React.ForwardedRef<T>, value: T | null) {
  if (!ref) return;
  if (typeof ref === 'function') ref(value);
  else ref.current = value;
}

interface ChartBaseProps<T extends readonly ChartComponentType[]> {
  className?: string;
  style?: React.CSSProperties;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  compose?: [...T];
  use?: EChartExt;
  children?: React.ReactNode;
}

type ResolveComponentOption<T extends ComponentOption | ChartComponentType> = T extends ComponentOption
  ? T
  : T extends ChartComponentType<infer P>
  ? P
  : never;

interface ChartComponentType<in T extends ComponentOption = any> {
  <U extends readonly ChartComponentType[] = []>(
    props: ChartBaseProps<U> &
      echarts.EChartsCoreOption &
      Simplify<ComposeOption<ResolveComponentOption<T | U[number]>>> & {
        ref?: React.Ref<echarts.ECharts>;
      }
  ): React.JSX.Element;

  ext: EChartExt;
}

function defineChart<T extends ComponentOption>(ext: EChartExt) {
  const ChartComponent = React.forwardRef(
    (
      { className, style, containerProps, compose, use, children, ...props }: ChartBaseProps<any>,
      ref: React.ForwardedRef<echarts.ECharts>
    ) => {
      const containerRef = React.useRef<HTMLDivElement>(null);
      const chartRef = React.useRef<echarts.ECharts | null>(null);
      const ctx = useInitialChartContext();

      useRegister((echarts) => {
        echarts.use([ext, use, compose?.map((comp) => comp.ext).flat() || []].flat().filter(Boolean));
      });

      React.useLayoutEffect(() => {
        const chart = (chartRef.current = echarts.init(containerRef.current, null));
        assignForwardedRef(ref, chart);
        return () => {
          chart.dispose();
          assignForwardedRef(ref, null);
        };
      }, []);

      React.useLayoutEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;
        for (const opt of ctx.options) chart.setOption(opt, defaultSetOptionOpt);
        chart.setOption(props, defaultSetOptionOpt);
        chart.setOption(chart.getOption(), { notMerge: true }); // used for toolbox.restore snapshot
        ctx.options.length = 0;
      });

      return (
        <ChartContext.Provider value={ctx}>
          <div className={className} style={style} {...containerProps} ref={containerRef} />
          {children}
        </ChartContext.Provider>
      );
    }
  ) as unknown as ChartComponentType<T>;
  ChartComponent.ext = ext;
  return ChartComponent;
}

export const BarChart = /*#__PURE__*/ defineChart<BarSeriesOption | GridComponentOption>([
  EChartBarChart,
  GridComponent,
]);

export const EffectScatterChart = /*#__PURE__*/ defineChart<EffectScatterSeriesOption | GridComponentOption>([
  EChartEffectScatterChart,
  GridComponent,
]);

export const GraphChart = /*#__PURE__*/ defineChart<GraphSeriesOption>([EChartGraphChart]);

export const HeatmapChart = /*#__PURE__*/ defineChart<HeatmapSeriesOption>([EChartHeatmapChart]);

export const LineChart = /*#__PURE__*/ defineChart<LineSeriesOption | GridComponentOption>([
  EChartLineChart,
  GridComponent,
]);

export const PieChart = /*#__PURE__*/ defineChart<PieSeriesOption>([EChartPieChart]);

export const ScatterChart = /*#__PURE__*/ defineChart<ScatterSeriesOption | GridComponentOption>([
  EChartScatterChart,
  GridComponent,
]);
