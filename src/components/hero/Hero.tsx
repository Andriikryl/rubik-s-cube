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
  shift: typeof shift;
}

export default function Hero() {
  const [cube, dispatch] = useReducer(
    (cube: CubeData, { operation, cycle }: UpdateAction) => {
      return shift(cube, cycle, operation);
    },
    createCube()
  );

  // const cycel = [2, 3, 4, 5] as const;

  const cycels = {
    X: [2, 3, 4, 5],
    Y: [1, 3, 0, 5],
    Z: [2, 1, 4, 0],
  } as const;

  const operations: Record<string, UpdateAction> = {
    U: {
      operation: [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.X,
      shift,
    },
    US: {
      operation: [
        [-1, -1, -1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.X,
      shift,
    },
    DS: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ],
      cycle: cycels.X,
      shift,
    },
    D: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [-1, -1, -1],
      ],
      cycle: cycels.X,
      shift,
    },

    //////////////////////////////////////////////////////////

    L: {
      operation: [
        [-1, 0, 0],
        [-1, 0, 0],
        [-1, 0, 0],
      ],
      cycle: cycels.Y,
      shift,
    },
    LS: {
      operation: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
      ],
      cycle: cycels.Y,
      shift,
    },
    RS: {
      operation: [
        [0, 0, -1],
        [0, 0, -1],
        [0, 0, -1],
      ],
      cycle: cycels.Y,
      shift,
    },
    R: {
      operation: [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
      ],
      cycle: cycels.Y,
      shift,
    },

    ///////////////////////////////////////////////

    F: {
      operation: [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.Z,
      shift,
    },
    FS: {
      operation: [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.Z,
      shift,
    },
    BS: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ],
      cycle: cycels.Z,
      shift,
    },
    B: {
      operation: [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
      ],
      cycle: cycels.Z,
      shift,
    },
  };

  // const cube2 = shift(cube, cycel, operation);

  return (
    <section>
      <Container>
        <div className={style.flex__group}>
          <Cube cube={cube} />
        </div>
        <div>
          {Object.entries(operations).map(([name, action], index) => {
            return (
              <button key={index} onClick={() => dispatch(action)}>
                {name}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
