import React from "react";
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
import { Container, GraphLabel } from "./styles";
export const ObjectCounterGraph: React.FC = () => {
  const { counter, barNames, colors } = useEnhance();
  return (
    <Container>
      <GraphLabel>10秒間に読まれたタグ</GraphLabel>
      <BarChart width={500} height={300} data={counter}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {barNames.map((name, idx) => (
          <Bar dataKey={name} key={name} fill={colors[idx]} />
        ))}
      </BarChart>
    </Container>
  );
};
