import {
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  type LegendComponentOption,
  type TitleComponentOption,
  type ToolboxComponentOption,
  type TooltipComponentOption,
} from 'echarts/components';
import { defineComponent } from './shared';

export const Legend = /*#__PURE__*/ defineComponent<LegendComponentOption>(LegendComponent);

export const Title = /*#__PURE__*/ defineComponent<TitleComponentOption>(TitleComponent);

export const Toolbox = /*#__PURE__*/ defineComponent<ToolboxComponentOption>(ToolboxComponent);

export const Tooltip = /*#__PURE__*/ defineComponent<TooltipComponentOption>(TooltipComponent);
