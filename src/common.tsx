import {
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  type LegendComponentOption,
  type MarkLineComponentOption,
  type MarkPointComponentOption,
  type TitleComponentOption,
  type ToolboxComponentOption,
  type TooltipComponentOption,
} from 'echarts/components';
import { defineComponent } from './shared';

export const Legend = /*#__PURE__*/ defineComponent<LegendComponentOption>(LegendComponent);

export const MarkLine = /*#__PURE__*/ defineComponent<MarkLineComponentOption>(MarkLineComponent);

export const MarkPoint = /*#__PURE__*/ defineComponent<MarkPointComponentOption>(MarkPointComponent);

export const Title = /*#__PURE__*/ defineComponent<TitleComponentOption>(TitleComponent);

export const Toolbox = /*#__PURE__*/ defineComponent<ToolboxComponentOption>(ToolboxComponent);

export const Tooltip = /*#__PURE__*/ defineComponent<TooltipComponentOption>(TooltipComponent);
