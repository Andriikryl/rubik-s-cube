import React from "react";
import { Color, Side } from "../types/types";
import { Container } from "../container/Container";
import Cube from "../cube/Cube";
import { createSide } from "../helpers/helpers";

export default function Hero() {
  const side: Side = createSide(Color.LEPTEUH);
  return (
    <section>
      <Container>
        <Cube side={side} />
      </Container>
    </section>
  );
}
