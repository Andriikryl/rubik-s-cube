import React from "react";
import { CubeSide } from "../types/types";
import style from "./style.module.css";

interface SideProps {
  side: CubeSide;
}

export default function Side({ side }: SideProps) {
  return (
    <div className={style.side}>
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
