import React from 'react';
import * as echarts from 'echarts/core';
import type { SetOptionOpts } from 'echarts/core';

export { echarts };

export type EChartsCore = typeof echarts;

export interface ChartContextValue {
  options: echarts.EChartsCoreOption[];
}

export const defaultSetOptionOpt: SetOptionOpts = {
  notMerge: false,
  lazyUpdate: true,
};

export const ChartContext = React.createContext<ChartContextValue | null>(null);

export const useInitialChartContext = () => {
  const [chartContextValue] = React.useState<ChartContextValue>(() => ({
    options: [],
  }));
  return chartContextValue;
};

export const useChartContext = () => {
  const ctx = React.useContext(ChartContext);
  if (process.env.NODE_ENV === 'development' && !ctx)
    throw new Error('The component should render within ChartContext');
  return ctx!;
};

export function useRegister(fn: (echarts: EChartsCore) => void) {
  const isExecuted = React.useRef(false);
  if (isExecuted.current) return;
  isExecuted.current = true;
  fn(echarts);
}

export type EChartExt = Parameters<(typeof echarts)['use']>[0];
