import React from 'react';
import * as echarts from 'echarts/core';

export { echarts };

export type EChartsCore = typeof echarts;

export interface ChartContextValue {
  options: unknown[];
}

export const ChartContext = React.createContext<ChartContextValue | null>(null);

export function useRegister(fn: (echarts: EChartsCore) => void) {
  const isExecuted = React.useRef(false);
  if (isExecuted.current) return;
  isExecuted.current = true;
  fn(echarts);
}
