import React from "react";
import { Container, Label } from "./styles";
import { useEnhance } from "./enhance";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

export interface Props {
  label: string;
  colors: string[];
  data: Counter[];
}
interface Counter {
  [key: string]: string | number;
}
export const CounterGraph: React.FC<Props> = (props: Props) => {
  const { data, names } = useEnhance(props);
  return (
    <Container>
      <Label>{props.label}</Label>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {names.map((name, idx) => (
          <Bar dataKey={name} key={idx} fill={props.colors[idx]} />
        ))}
      </BarChart>
    </Container>
  );
};
