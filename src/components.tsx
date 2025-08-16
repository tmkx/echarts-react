import type {
  ComposeOption,
  DatasetComponentOption,
  DataZoomComponentOption,
  GraphicComponentOption,
  LegendComponentOption,
  MarkAreaComponentOption,
  MarkLineComponentOption,
  MarkPointComponentOption,
  PolarComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  VisualMapComponentOption,
} from 'echarts';
import {
  DatasetComponent,
  DataZoomComponent,
  GraphicComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  PolarComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
} from 'echarts/components';
import type { ComponentOption } from 'echarts/types/src/util/types.js';
import React from 'react';
import { useChartContext, useRegister, type EChartExt } from './shared.js';

function defineComponent<T extends ComponentOption>(ext: EChartExt) {
  return function ChartComponent(props: ComposeOption<T>) {
    const ctx = useChartContext();

    useRegister((echarts) => {
      echarts.use(ext);
    });

    React.useLayoutEffect(() => {
      ctx.options.push(props);
    });

    return null;
  };
}

export const Dataset = /*#__PURE__*/ defineComponent<DatasetComponentOption>([DatasetComponent, TransformComponent]);

export const DataZoom = /*#__PURE__*/ defineComponent<DataZoomComponentOption>([DataZoomComponent]);

export const Graphic = /*#__PURE__*/ defineComponent<GraphicComponentOption>([GraphicComponent]);

export const Legend = /*#__PURE__*/ defineComponent<LegendComponentOption>(LegendComponent);

export const MarkArea = /*#__PURE__*/ defineComponent<MarkAreaComponentOption>(MarkAreaComponent);

export const MarkLine = /*#__PURE__*/ defineComponent<MarkLineComponentOption>(MarkLineComponent);

export const MarkPoint = /*#__PURE__*/ defineComponent<MarkPointComponentOption>(MarkPointComponent);

export const Polar = /*#__PURE__*/ defineComponent<PolarComponentOption>(PolarComponent);

export const Title = /*#__PURE__*/ defineComponent<TitleComponentOption>(TitleComponent);

export const Toolbox = /*#__PURE__*/ defineComponent<ToolboxComponentOption>(ToolboxComponent);

export const Tooltip = /*#__PURE__*/ defineComponent<TooltipComponentOption>(TooltipComponent);

export const VisualMap = /*#__PURE__*/ defineComponent<VisualMapComponentOption>(VisualMapComponent);
