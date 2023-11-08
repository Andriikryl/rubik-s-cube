import React from "react";
import { Color, CubeSide, ShiftOperation } from "../types/types";
import { Container } from "../container/Container";
import { createCube, createSide, shift } from "../helpers/helpers";
import Side from "../cube/Side";
import Cube from "../cube/Cube";
import style from "./style.module.css";

export default function Hero() {
  // const side: CubeSide = createSide(Color.BLUE);

  const cube = createCube();
  const cycel = [0, 1, 2, 3] as const;

  const operation: ShiftOperation = [
    [-1, -1, -1],
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
