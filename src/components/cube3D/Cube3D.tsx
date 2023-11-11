import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";

interface Cell {
  id: string;
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}

export default function Cube3D() {
  const cells: Cell[] = [
    {
      id: "1",
      x: 0,
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    },
    {
      id: "2",
      x: 1,
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    },
  ];

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
      <div className={styles.cube}>
        {cells.map((cell) => {
          return (
            <div key={cell.id} className={styles.cell}>
              {elements.map((element, index) => {
                const style = { backgroundColor: element.color };
                return (
                  <div
                    className={clsx(styles.side, `styles.${element.name}`)}
                    key={index}
                    style={style}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
