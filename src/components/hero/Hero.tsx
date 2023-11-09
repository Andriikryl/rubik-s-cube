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
  rotate180,
  rotate270,
  rotate90,
} from "../helpers/helpers";
import Cube from "../cube/Cube";
import style from "./style.module.css";

interface UpdateAction {
  operation: ShiftOperation;
  cycle: Cycle;
  rotateMatrix?: RotateMatrix;
}

export default function Hero() {
  const [cube, dispatch] = useReducer(
    (cube: CubeData, { operation, cycle, rotateMatrix }: UpdateAction) => {
      rotateMatrix = rotateMatrix || [rotate0, rotate0, rotate0, rotate0];
      const rotatedCube = rotateCube(cube, cycle, rotateMatrix);
      let shiftedCube = shift(rotatedCube, cycle, operation);
      return rotateCube(shiftedCube, cycle, reveersRotateMatrix(rotateMatrix));
    },
    createCube()
  );

  // const cycel = [2, 3, 4, 5] as const;

  const cycels = {
    X: [2, 3, 4, 5],
    Y: [1, 3, 0, 5],
    Z: [2, 1, 4, 0],
  } as const;

  const sideRotateMatrix = [rotate270, rotate180, rotate90, rotate0] as const;
  const LRRotateMatrix = [rotate0, rotate0, rotate0, rotate180] as const;
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
      rotateMatrix: LRRotateMatrix,
    },
    LS: {
      operation: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
      ],
      cycle: cycels.Y,
      rotateMatrix: LRRotateMatrix,
    },
    RS: {
      operation: [
        [0, 0, -1],
        [0, 0, -1],
        [0, 0, -1],
      ],
      cycle: cycels.Y,
      rotateMatrix: LRRotateMatrix,
    },
    R: {
      operation: [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
      ],
      cycle: cycels.Y,
      rotateMatrix: LRRotateMatrix,
    },

    ///////////////////////////////////////////////

    F: {
      operation: [
        [-1, -1, -1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.Z,
      rotateMatrix: sideRotateMatrix,
    },
    FS: {
      operation: [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.Z,
      rotateMatrix: sideRotateMatrix,
    },
    BS: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [-1, -1, -1],
      ],
      cycle: cycels.Z,
      rotateMatrix: sideRotateMatrix,
    },
    B: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ],
      cycle: cycels.Z,
      rotateMatrix: sideRotateMatrix,
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
