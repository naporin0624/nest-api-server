import * as React from "react";
import { Container, GraphLabel } from "./styles";
import { useEnhance } from "./enhance";
import { TagContainerJoinTagInfoForLab } from "@/types/";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ScatterChart,
  Scatter,
} from "recharts";
export interface Props {
  label: string;
  colors: string[];
  filterNames: string[];
  container: TagContainerJoinTagInfoForLab[];
}
export const Proximity: React.FC<Props> = (props: Props) => {
  const { movementData } = useEnhance(props);

  return (
    <Container>
      <GraphLabel>{props.label}</GraphLabel>
      <ScatterChart width={500} height={300}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis
          dataKey="createdAt"
          name="createdAt"
          allowDuplicatedCategory={false}
        />
        <YAxis
          type="number"
          domain={[0, "dataMax"]}
          dataKey="antennaNo"
          name="antennaNo"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        {movementData.map((h, idx) => (
          <Scatter
            key={h.name}
            name={h.name}
            data={h.value}
            fill={props.colors[idx]}
          />
        ))}
      </ScatterChart>
    </Container>
  );
};
