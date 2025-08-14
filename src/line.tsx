import React, { useLayoutEffect, useRef } from 'react';
import { LineChart as EChartLineChart, type LineSeriesOption } from 'echarts/charts';
import type { ComposeOption } from 'echarts/core';
import { GridComponent, type GridComponentOption } from 'echarts/components';
import { echarts, useRegister } from './shared.js';

export interface LineChartProps extends ComposeOption<LineSeriesOption | GridComponentOption> {
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

  useRegister((echarts) => {
    echarts.use([EChartLineChart, GridComponent]);
  });

  useLayoutEffect(() => {
    const chart = (chartRef.current = echarts.init(ref.current, null));
    return () => chart.dispose();
  }, []);

  useLayoutEffect(() => {
    chartRef.current?.setOption(props);
  });

  return (
    <div className={className} style={style} {...containerProps} ref={ref}>
      {children}
    </div>
  );
}
