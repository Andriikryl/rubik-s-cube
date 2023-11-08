import React from "react";
import { ShiftOperation } from "../types/types";
import { Container } from "../container/Container";
import { createCube, shift } from "../helpers/helpers";
import Cube from "../cube/Cube";
import style from "./style.module.css";

export default function Hero() {
  const cube = createCube();
  const cycel = [2, 3, 4, 5] as const;

  const operation: ShiftOperation = [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const cube2 = shift(cube, cycel, operation);

  return (
    <section>
      <Container>
        <div className={style.flex__group}>
          <Cube cube={cube} />
          <Cube cube={cube2} />
        </div>
      </Container>
    </section>
  );
}
