import { BarChart, LineChart, PieChart } from '@fanciers/echarts-react';
import type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  XAXisComponentOption,
  YAXisComponentOption,
} from 'echarts';
import { describe, it, expectTypeOf } from 'vitest';

type Arrayable<T> = T | T[];

describe('TypeScript Definitions', () => {
  it('should accept basic props', () => {
    expectTypeOf(LineChart).toBeFunction();
    expectTypeOf(LineChart<[]>)
      .parameter(0)
      .pick<'xAxis' | 'yAxis' | 'series'>()
      .toEqualTypeOf<{
        xAxis?: Arrayable<XAXisComponentOption>;
        yAxis?: Arrayable<YAXisComponentOption>;
        series?: Arrayable<LineSeriesOption>;
      }>();
  });

  it('should support compose single chart', () => {
    expectTypeOf(LineChart<[typeof BarChart]>)
      .parameter(0)
      .pick<'series'>()
      .toEqualTypeOf<{ series?: Arrayable<LineSeriesOption | BarSeriesOption> }>();
  });

  it('should support compose multiple charts', () => {
    expectTypeOf(LineChart<[typeof BarChart, typeof PieChart]>)
      .parameter(0)
      .pick<'series'>()
      .toEqualTypeOf<{ series?: Arrayable<LineSeriesOption | BarSeriesOption | PieSeriesOption> }>();
  });
});
