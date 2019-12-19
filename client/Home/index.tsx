import * as React from "react";
import { Container } from "./styles";
import { ObjectCounterGraph } from "./ObjctCounterGraph/index";

export const Home: React.FC = () => {
  return (
    <Container>
      <ObjectCounterGraph />
    </Container>
  );
};
