import * as React from "react";
import { Container } from "./styles";
import { ObjectCounterGraphs } from "./ObjectCounterGraphs";
import { ProximityGraphs } from "./ProximityGraphs";

export const Room806: React.FC = () => {
  return (
    <Container>
      <ObjectCounterGraphs />
      <ProximityGraphs />
    </Container>
  );
};
