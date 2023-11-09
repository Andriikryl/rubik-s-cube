import React from "react";
import { CubeData } from "../types/types";
import Side from "./Side";
import styles from "./style.module.css";

interface CubeProps {
  cube: CubeData;
}

export default function Cube({ cube }: CubeProps) {
  return (
    <div className={styles.layout}>
      {cube.map((side, index) => {
        const style = { gridArea: "s" + index };
        return (
          <div key={index} style={style} className={styles["side-" + index]}>
            <Side side={side}></Side>
          </div>
        );
      })}
    </div>
  );
}
