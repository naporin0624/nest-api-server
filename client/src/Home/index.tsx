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
  const { addTagContainer, readCountEachAntenna } = useEnhance();

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
        {[
          { n: 1, c: "#b0c4de" },
          { n: 2, c: "#00fa9a" },
          { n: 3, c: "#778899" },
          { n: 4, c: "#ffa500" },
          { n: 5, c: "#87cefa" },
        ].map(l => (
          <Line
            key={l.n}
            type="monotone"
            dataKey={`antenna${l.n}`}
            strokeWidth={2}
            stroke={l.c}
          />
        ))}
      </LineChart>
    </Container>
  );
};
