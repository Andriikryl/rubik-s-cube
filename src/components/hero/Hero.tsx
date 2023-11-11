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
} from "../helpers/helpers";
import Cube from "../cube/Cube";
import style from "./style.module.css";
import { operations } from "../operations/operations";
import Cube3D from "../cube3D/Cube3D";

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

  let handelAction = (action: UpdateAction) => {
    dispatch(action);
    setLastAction(action);
  };
  return (
    <section>
      <Container>
        <div>
          <Cube3D />
        </div>
        {/* <div className={style.flex__group}>
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
        </div> */}
      </Container>
    </section>
  );
}
