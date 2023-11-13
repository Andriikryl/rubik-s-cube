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
import Cube3D, { Cell3D } from "../cube3D/Cube3D";

const initialCells: Cell3D[] = new Array(27).fill(0).map((_, i) => {
  return {
    id: i.toString(),
    x: i % 3,
    y: Math.floor((i / 3) % 3),
    z: Math.floor(i / 9),
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  };
});

export default function Hero() {
  // const [lastAction, setLastAction] = useState<UpdateAction>();
  // const [cube, dispatch] = useReducer(
  //   (cube: CubeData, { operation, cycle, rotateMatrix }: UpdateAction) => {
  //     rotateMatrix = rotateMatrix || [rotate0, rotate0, rotate0, rotate0];
  //     const rotatedCube = rotateCube(cube, cycle, rotateMatrix);
  //     let shiftedCube = shift(rotatedCube, cycle, operation);
  //     return rotateCube(shiftedCube, cycle, reveersRotateMatrix(rotateMatrix));
  //   },
  //   createCube()
  // );

  // let handelAction = (action: UpdateAction) => {
  //   dispatch(action);
  //   setLastAction(action);
  // };
  const [rotateX, setRotateX] = useState(-30);
  const [rotateY, setRotateY] = useState(-30);
  const [rotateZ, setRotateZ] = useState(0);
  const [cells, dispatch] = useReducer((state: Cell3D[], action: string) => {
    return state.map((cell) => {
      if (cell.x === 2) {
        return {
          ...cell,
          z: 2 - cell.y,
          y: cell.z,
          rotateX: cell.rotateX - 90,
        };
      }
      return cell;
    });
  }, initialCells);

  return (
    <section>
      <Container>
        <div>
          <Cube3D cells={cells} rotate={{ rotateX, rotateY, rotateZ }} />
        </div>
        {/* <div className={style.flex__group}>
          <Cube cube={cube} lastAction={lastAction} />
        </div> */}
        <div>
          <input
            type="range"
            value={rotateX}
            min={-180}
            max={180}
            onChange={(e) => setRotateX(+e.target.value)}
          />
          <input
            type="range"
            value={rotateY}
            min={-180}
            max={180}
            onChange={(e) => setRotateY(+e.target.value)}
          />
          <input
            type="range"
            value={rotateZ}
            min={-180}
            max={180}
            onChange={(e) => setRotateZ(+e.target.value)}
          />
          {Object.entries(operations).map(([name, action], index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  dispatch(name);
                }}
              >
                {name}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
