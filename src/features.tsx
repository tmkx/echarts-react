import { AxisBreak as EChartAxisBreak } from 'echarts/features';
import { useRegister } from './shared.js';

export function AxisBreak() {
  useRegister((echarts) => {
    echarts.use(EChartAxisBreak);
  });

  return null;
}
