import React, { Fragment } from "react";
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
export const ObjectCounterGraph: React.FC = () => {
  const { counter, barNames, colors } = useEnhance();
  return (
    <Fragment>
      <BarChart
        width={500}
        height={300}
        data={counter}
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
        {barNames.map((name, idx) => (
          <Bar dataKey={name} key={name} fill={colors[idx]} />
        ))}
      </BarChart>
    </Fragment>
  );
};
