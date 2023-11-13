import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";

interface RotateTabel {
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}

export interface Cell3D extends RotateTabel {
  id: string;
  x: number;
  y: number;
  z: number;
  initialX: number;
  initialY: number;
  initialZ: number;
}

interface Cube3DProps {
  cells: Cell3D[];
  rotate: RotateTabel;
}

export default function Cube3D({ rotate, cells }: Cube3DProps) {
  const elements = [
    { name: "left", color: "#ffff" },
    { name: "right", color: "#ffee80" },
    { name: "bottom", color: "#0751ef" },
    { name: "top", color: "#ff0000" },
    { name: "front", color: "#009d19" },
    { name: "back", color: "#ff9700" },
  ];

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.cube}
        style={{
          transform: `
                perspective(1500px)
                rotateY(${rotate.rotateY}deg)
                rotateX(${rotate.rotateX}deg)
                rotateZ(${rotate.rotateZ}deg)
                `,
        }}
      >
        {cells.map((cell) => {
          return (
            <div
              key={cell.id}
              className={styles.cell__wrapper}
              style={{
                transform: `
            rotateX(${cell.rotateX}deg)
            rotateY(${cell.rotateY}deg)
            rotateZ(${cell.rotateZ}deg)
            `,
              }}
            >
              <div
                key={cell.id}
                className={styles.cell}
                style={{
                  transform: `
                  rotateX(${cell.rotateX}deg)
                  rotateY(${cell.rotateY}deg)
                  rotateZ(${cell.rotateZ}deg)
                translate3d(calc(var(--cell-size) * ${
                  cell.initialX - 1
                }), calc(var(--cell-size) * ${
                    cell.initialY - 1
                  }), calc(var(--cell-size) * ${cell.initialZ - 1}))
                `,
                }}
              >
                {elements.map((element, index) => {
                  return (
                    <div
                      className={clsx(styles.side, styles[`${element.name}`])}
                      key={index}
                      style={{ backgroundColor: element.color }}
                    >
                      {cell.x}:{cell.y}:{cell.z}#${cell.id}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
