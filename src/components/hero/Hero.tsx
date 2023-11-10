"use client";
import React, { useReducer, useState } from "react";
import { CubeData, UpdateAction } from "../types/types";
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

export default function Hero() {
  const [lastAction, setLastAction] = useState<UpdateAction>();
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
      animations: ["left", "right"],
    },
    US: {
      operation: [
        [-1, -1, -1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.X,
      animations: ["left", "right"],
    },
    DS: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ],
      cycle: cycels.X,
      animations: ["left", "right"],
    },
    D: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [-1, -1, -1],
      ],
      cycle: cycels.X,
      animations: ["left", "right"],
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
      animations: ["left", "right"],
    },
    LS: {
      operation: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
      ],
      cycle: cycels.Y,
      rotateMatrix: LRRotateMatrix,
      animations: ["left", "right"],
    },
    RS: {
      operation: [
        [0, 0, -1],
        [0, 0, -1],
        [0, 0, -1],
      ],
      cycle: cycels.Y,
      rotateMatrix: LRRotateMatrix,
      animations: ["left", "right"],
    },
    R: {
      operation: [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
      ],
      cycle: cycels.Y,
      rotateMatrix: LRRotateMatrix,
      animations: ["left", "right"],
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
      animations: ["left", "right"],
    },
    FS: {
      operation: [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
      cycle: cycels.Z,
      rotateMatrix: sideRotateMatrix,
      animations: ["left", "right"],
    },
    BS: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [-1, -1, -1],
      ],
      cycle: cycels.Z,
      rotateMatrix: sideRotateMatrix,
      animations: ["left", "right"],
    },
    B: {
      operation: [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ],
      cycle: cycels.Z,
      rotateMatrix: sideRotateMatrix,
      animations: ["left", "right"],
    },
  };

  // const cube2 = shift(cube, cycel, operation);
  let handelAction = (action: UpdateAction) => {
    dispatch(action);
    setLastAction(action);
  };
  return (
    <section>
      <Container>
        <div className={style.flex__group}>
          <Cube cube={cube} lastAction={lastAction} />
        </div>
        <div>
          {Object.entries(operations).map(([name, action], index) => {
            return (
              <button key={index} onClick={() => handelAction(action)}>
                {name}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
