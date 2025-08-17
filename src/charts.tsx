import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import {
  LineChart as EChartLineChart,
  PieChart as EChartPieChart,
  type LineSeriesOption,
  type PieSeriesOption,
} from 'echarts/charts';
import type { ComposeOption } from 'echarts/core';
import { GridComponent, type GridComponentOption } from 'echarts/components';
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

interface ChartBaseProps<T extends readonly ChartComponentType<any>[]> {
  className?: string;
  style?: React.CSSProperties;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  compose?: [...T];
  children?: React.ReactNode;
}

type InferChartComponentOption<
  T extends readonly ChartComponentType<any>[],
  U = T[number]
> = U extends ChartComponentType<infer P> ? P : never;

interface ChartComponentType<T extends ComponentOption> {
  <U extends readonly ChartComponentType<any>[] = []>(
    props: ChartBaseProps<U> &
      echarts.EChartsCoreOption &
      Simplify<ComposeOption<T | InferChartComponentOption<U>>> & { ref?: React.Ref<echarts.ECharts> }
  ): React.JSX.Element;

  ext: EChartExt;
}

function defineChart<T extends ComponentOption>(ext: EChartExt) {
  const ChartComponent = forwardRef(
    (
      { className, style, containerProps, compose, children, ...props }: ChartBaseProps<any>,
      ref: React.ForwardedRef<echarts.ECharts>
    ) => {
      const containerRef = useRef<HTMLDivElement>(null);
      const chartRef = useRef<echarts.ECharts | null>(null);
      const ctx = useInitialChartContext();

      useRegister((echarts) => {
        echarts.use([ext, compose?.map((comp) => comp.ext).flat() || []].flat());
      });

      useLayoutEffect(() => {
        const chart = (chartRef.current = echarts.init(containerRef.current, null));
        assignForwardedRef(ref, chart);
        return () => {
          chart.dispose();
          assignForwardedRef(ref, null);
        };
      }, []);

      useLayoutEffect(() => {
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

export const LineChart = /*#__PURE__*/ defineChart<LineSeriesOption | GridComponentOption>([
  EChartLineChart,
  GridComponent,
]);

export const PieChart = /*#__PURE__*/ defineChart<PieSeriesOption>([EChartPieChart]);
