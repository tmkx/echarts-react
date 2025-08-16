import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import {
  LineChart as EChartLineChart,
  PieChart as EChartPieChart,
  type LineSeriesOption,
  type PieSeriesOption,
} from 'echarts/charts';
import type { ComposeOption } from 'echarts/core';
import { GridComponent, type GridComponentOption } from 'echarts/components';
import { ChartContext, defaultSetOptionOpt, echarts, useInitialChartContext, useRegister } from './shared.js';

function assignForwardedRef<T>(ref: React.ForwardedRef<T>, value: T | null) {
  if (!ref) return;
  if (typeof ref === 'function') ref(value);
  else ref.current = value;
}

type LineChartOption = echarts.EChartsCoreOption &
  ComposeOption<LineSeriesOption | GridComponentOption | PieSeriesOption>;

interface LineChartProps extends LineChartOption {
  className?: string;
  style?: React.CSSProperties;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const LineChart = forwardRef(
  (
    { className, style, containerProps, children, ...props }: React.PropsWithChildren<LineChartProps>,
    ref: React.ForwardedRef<echarts.ECharts>
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<echarts.ECharts | null>(null);
    const ctx = useInitialChartContext();

    useRegister((echarts) => {
      // TODO: Make different charts composable.
      echarts.use([EChartLineChart, GridComponent, EChartPieChart]);
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
) as (props: React.PropsWithChildren<LineChartProps> & { ref?: React.Ref<echarts.ECharts> }) => React.JSX.Element;
