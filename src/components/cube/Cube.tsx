import React from "react";
import { Side } from "../types/types";
import style from "./style.module.css";

interface CubeProps {
  side: Side;
}

export default function Cube({ side }: CubeProps) {
  return (
    <div>
      {side.map((row, index) => {
        return (
          <div key={index} className={style.row}>
            {row.map((cell, index) => (
              <div
                key={index}
                className={`${style["cell-" + cell]} ${style.cell}`}
              ></div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
