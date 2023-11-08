import React from "react";
import { Side } from "../types/types";
import { Container } from "../container/Container";
import Cube from "../cube/Cube";

export default function Hero() {
  const side: Side = [
    [1, 1, 2],
    [1, 3, 2],
    [1, 1, 2],
  ];
  return (
    <section>
      <Container>
        <Cube side={side} />
      </Container>
    </section>
  );
}
