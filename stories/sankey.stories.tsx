import { SankeyChart, Title, Tooltip } from "@fanciers/echarts-react";
import type { Meta, StoryObj } from "@storybook/react";
import useSWR from "swr";

const meta = {
  title: "Sankey",
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof meta>;

export const SankeySimple: Story = {
  name: "Basic Sankey",
  render() {
    return (
      <SankeyChart
        style={{ width: 480, height: 300 }}
        series={{
          type: "sankey",
          emphasis: { focus: "adjacency" },
          data: [{ name: "a" }, { name: "b" }, { name: "a1" }, { name: "a2" }, { name: "b1" }, { name: "c" }],
          links: [
            { source: "a", target: "a1", value: 5 },
            { source: "a", target: "a2", value: 3 },
            { source: "b", target: "b1", value: 8 },
            { source: "a", target: "b1", value: 3 },
            { source: "b1", target: "a1", value: 1 },
            { source: "b1", target: "c", value: 2 },
          ],
        }}
      />
    );
  },
};

export const SankeyVertical: Story = {
  name: "Sankey Orient Vertical",
  render() {
    return (
      <SankeyChart
        style={{ width: 480, height: 300 }}
        animation={false}
        series={[
          {
            type: "sankey",
            bottom: "10%",
            emphasis: { focus: "adjacency" },
            data: [{ name: "a" }, { name: "b" }, { name: "a1" }, { name: "b1" }, { name: "c" }, { name: "e" }],
            links: [
              { source: "a", target: "a1", value: 5 },
              { source: "e", target: "b", value: 3 },
              { source: "a", target: "b1", value: 3 },
              { source: "b1", target: "a1", value: 1 },
              { source: "b1", target: "c", value: 2 },
              { source: "b", target: "c", value: 1 },
            ],
            orient: "vertical",
            label: { position: "top" },
            lineStyle: { color: "source", curveness: 0.5 },
          },
        ]}
      >
        <Tooltip tooltip={{ trigger: "item", triggerOn: "mousemove" }} />
      </SankeyChart>
    );
  },
};

export const SankeyNodeAlignLeft: Story = {
  name: "Node Align Left in Sankey",
  render() {
    const { data } = useSWR("https://echarts.apache.org/examples/data/asset/data/energy.json");

    return (
      <SankeyChart
        style={{ width: 720, height: 500 }}
        animation={false}
        series={[
          {
            type: "sankey",
            emphasis: {
              focus: "adjacency",
            },
            nodeAlign: "left",
            data: data?.nodes || [],
            links: data?.links || [],
            lineStyle: {
              color: "source",
              curveness: 0.5,
            },
          },
        ]}
      >
        <Title title={{ text: "Node Align Left" }} />
        <Tooltip tooltip={{ trigger: "item", triggerOn: "mousemove" }} />
      </SankeyChart>
    );
  },
};
