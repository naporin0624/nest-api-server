import * as React from "react";
import { Container, Text } from "./styles";
import enhance from "./enhance";
export const Home: React.FC = () => {
  React.useEffect(() => {
    enhance();
  }, []);
  return (
    <Container>
      <Text>ddd</Text>
    </Container>
  );
};
