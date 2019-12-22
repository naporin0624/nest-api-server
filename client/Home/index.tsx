import * as React from "react";
import { Container } from "./styles";
import { ObjectCounterGraph } from "./ObjectCounterGraphs/index";
import { ProximityGraphs } from "./ProximityGraphs";

export const Home: React.FC = () => {
  return (
    <Container>
      <ObjectCounterGraph />
      <ProximityGraphs />
    </Container>
  );
};
