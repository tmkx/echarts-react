import {
  DatasetComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent,
  type DatasetComponentOption,
  type LegendComponentOption,
  type MarkLineComponentOption,
  type MarkPointComponentOption,
  type TitleComponentOption,
  type ToolboxComponentOption,
  type TooltipComponentOption,
  type VisualMapComponentOption,
} from 'echarts/components';
import { defineComponent } from './shared';

export const Dataset = /*#__PURE__*/ defineComponent<DatasetComponentOption>([DatasetComponent, TransformComponent]);

export const Legend = /*#__PURE__*/ defineComponent<LegendComponentOption>(LegendComponent);

export const MarkLine = /*#__PURE__*/ defineComponent<MarkLineComponentOption>(MarkLineComponent);

export const MarkPoint = /*#__PURE__*/ defineComponent<MarkPointComponentOption>(MarkPointComponent);

export const Title = /*#__PURE__*/ defineComponent<TitleComponentOption>(TitleComponent);

export const Toolbox = /*#__PURE__*/ defineComponent<ToolboxComponentOption>(ToolboxComponent);

export const Tooltip = /*#__PURE__*/ defineComponent<TooltipComponentOption>(TooltipComponent);

export const VisualMap = /*#__PURE__*/ defineComponent<VisualMapComponentOption>(VisualMapComponent);
