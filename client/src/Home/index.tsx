import * as React from "react";
import { Container, Text } from "./styles";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

import { useEnhance } from "./enhance";
export const Home: React.FC = () => {
  const { lineChartNames, readCountEachAntenna } = useEnhance();

  return (
    <Container>
      <LineChart
        width={500}
        height={300}
        data={readCountEachAntenna}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {lineChartNames.map(l => (
          <Line
            key={l.n}
            type="monotone"
            dataKey={`antenna${l.n}`}
            strokeWidth={2}
            stroke={l.c}
            strokeDasharray={`${l.n} ${l.n}`}
          />
        ))}
      </LineChart>
    </Container>
  );
};
