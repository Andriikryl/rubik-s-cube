"use client";
import React, { useReducer } from "react";
import { CubeData, Cycle, RotateMatrix, ShiftOperation } from "../types/types";
import { Container } from "../container/Container";
import {
  rotateCube,
  createCube,
  rotate0,
  shift,
  reveersRotateMatrix,
} from "../helpers/helpers";
import Cube from "../cube/Cube";
import style from "./style.module.css";

interface UpdateAction {
  operation: ShiftOperation;
  cycle: Cycle;
  rotate?: RotateMatrix;
}

export default function Hero() {
  const [cube, dispatch] = useReducer(
    (cube: CubeData, { operation, cycle, rotate }: UpdateAction) => {
      rotate = rotate || [rotate0, rotate0, rotate0, rotate0];
      const rotatedCube = rotateCube(cube, cycle, rotate);
      let shiftedCube = shift(rotatedCube, cycle, operation);
      return rotateCube(shiftedCube, cycle, reveersRotateMatrix(rotate));
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
    },
    US: {
      operation: [
        [-1, -1, -1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.X,
    },
    DS: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ],
      cycle: cycels.X,
    },
    D: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [-1, -1, -1],
      ],
      cycle: cycels.X,
    },

    //////////////////////////////////////////////////////////

    L: {
      operation: [
        [-1, 0, 0],
        [-1, 0, 0],
        [-1, 0, 0],
      ],
      cycle: cycels.Y,
    },
    LS: {
      operation: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
      ],
      cycle: cycels.Y,
    },
    RS: {
      operation: [
        [0, 0, -1],
        [0, 0, -1],
        [0, 0, -1],
      ],
      cycle: cycels.Y,
    },
    R: {
      operation: [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
      ],
      cycle: cycels.Y,
    },

    ///////////////////////////////////////////////

    F: {
      operation: [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.Z,
    },
    FS: {
      operation: [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.Z,
    },
    BS: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ],
      cycle: cycels.Z,
    },
    B: {
      operation: [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
      ],
      cycle: cycels.Z,
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
