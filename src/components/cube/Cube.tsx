import React from "react";
import { CubeData, UpdateAction } from "../types/types";
import Side from "./Side";
import styles from "./style.module.css";

interface CubeProps {
  cube: CubeData;
  lastAction?: UpdateAction;
}

export default function Cube({ cube, lastAction }: CubeProps) {
  return (
    <div className={styles.layout}>
      {cube.map((side, index) => {
        const style = { gridArea: "s" + index };
        const animationDiraction = lastAction?.operation.map((r) => {
          return r.map((o) => {
            return (
              (o &&
                lastAction?.cycle.includes(index) &&
                (o === -1
                  ? lastAction.animations[1]
                  : lastAction.animations[0])) ||
              undefined
            );
          });
        });
        return (
          <div key={index} style={style} className={styles["side-" + index]}>
            <Side animationDiraction={animationDiraction} side={side}></Side>
          </div>
        );
      })}
    </div>
  );
}
