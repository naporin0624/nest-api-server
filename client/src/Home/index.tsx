import * as React from "react";
import { Container, Text } from "./styles";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

import enhance from "./enhance";
import axios from "axios";
export const Home: React.FC = () => {
  const { msg, setMsg, data } = enhance();
  React.useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get<"HelloWorld">("/api");
      setMsg(res.data);
    }, 2000);
  }, []);

  return (
    <Container>
      <Text>{msg}</Text>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        <Bar dataKey="amt" stackId="a" fill="#c2ca9c" />
      </BarChart>
    </Container>
  );
};
