import React from "react";
import { useEnhance } from "./enhance";
import { Container, Grid, SubTitle } from "./styles";
import { CounterGraph } from "@/client/common/CounterGraph";
export const ObjectCounterGraphs: React.FC = () => {
  const {
    chair,
    chairColors,
    floor,
    floorColors,
    border,
    borderColors,
  } = useEnhance();
  return (
    <Container>
      <SubTitle>10秒間に読まれたタグ数</SubTitle>
      <hr />
      <Grid>
        <CounterGraph label="椅子" data={chair} colors={chairColors} />
        <CounterGraph label="フロア" data={floor} colors={floorColors} />
        <CounterGraph label="ボーダー" data={border} colors={borderColors} />
      </Grid>
    </Container>
  );
};
