import React, { useLayoutEffect, useRef } from 'react';
import { LineChart as EChartLineChart, type LineSeriesOption } from 'echarts/charts';
import type { ComposeOption } from 'echarts/core';
import { GridComponent, type GridComponentOption } from 'echarts/components';
import { ChartContext, defaultSetOptionOpt, echarts, useInitialChartContext, useRegister } from './shared.js';

interface LineChartProps extends ComposeOption<LineSeriesOption | GridComponentOption> {
  className?: string;
  style?: React.CSSProperties;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function LineChart({
  className,
  style,
  containerProps,
  children,
  ...props
}: React.PropsWithChildren<LineChartProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);
  const ctx = useInitialChartContext();

  useRegister((echarts) => {
    echarts.use([EChartLineChart, GridComponent]);
  });

  useLayoutEffect(() => {
    const chart = (chartRef.current = echarts.init(ref.current, null));
    return () => chart.dispose();
  }, []);

  useLayoutEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    chart.setOption(props, defaultSetOptionOpt);
    for (const opt of ctx.options) chart.setOption(opt, defaultSetOptionOpt);
    ctx.options.length = 0;
  });

  return (
    <ChartContext.Provider value={ctx}>
      <div className={className} style={style} {...containerProps} ref={ref} />
      {children}
    </ChartContext.Provider>
  );
}
