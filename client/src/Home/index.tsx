import * as React from "react";
import { Container, Text } from "./styles";
import enhance from "./enhance";
import axios from "axios";
export const Home: React.FC = () => {
  const { msg, setMsg } = enhance();
  React.useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get<"HelloWorld">("/api");
      setMsg(res.data);
    }, 2000);
  }, []);

  return (
    <Container>
      <Text>{msg}</Text>
    </Container>
  );
};
