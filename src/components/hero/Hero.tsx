"use client";
import React, { useReducer } from "react";
import { CubeData, Cycle, ShiftOperation } from "../types/types";
import { Container } from "../container/Container";
import { createCube, shift } from "../helpers/helpers";
import Cube from "../cube/Cube";
import style from "./style.module.css";

interface UpdateAction {
  operation: ShiftOperation;
  cycle: Cycle;
}

export default function Hero() {
  const [cube, dispatch] = useReducer(
    (cube: CubeData, { operation, cycle }: UpdateAction) => {
      return shift(cube, cycle, operation);
    },
    createCube()
  );

  // const cycel = [2, 3, 4, 5] as const;

  const cycels: Record<string, Cycle> = {
    HORIZONTAL: [2, 3, 4, 5],
  };

  const operations: Record<string, ShiftOperation> = {
    U1: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
  };

  // const cube2 = shift(cube, cycel, operation);

  return (
    <section>
      <Container>
        <div className={style.flex__group}>
          <Cube cube={cube} />
        </div>
        <button
          onClick={() =>
            dispatch({ operation: operations.U1, cycle: cycels.HORIZONTAL })
          }
        >
          left
        </button>
      </Container>
    </section>
  );
}
