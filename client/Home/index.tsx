import * as React from "react";
import { Container } from "./styles";
import { ObjectCounterGraph } from "./ObjectCounterGraph/index";
import { HumanTag } from "./HumanTag";

export const Home: React.FC = () => {
  return (
    <Container>
      <ObjectCounterGraph />
      <HumanTag />
    </Container>
  );
};
