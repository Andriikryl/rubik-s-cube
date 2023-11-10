"use client";
import React, { useState } from "react";
import { AnimationDiraction, CubeSide } from "../types/types";
import style from "./style.module.css";

interface SideProps {
  side: CubeSide;
  animationDiraction?: AnimationDiraction;
}

export default function Side({ side, animationDiraction }: SideProps) {
  const [animation, setAnimation] = useState("");
  return (
    <div className={style.side}>
      {side.map((row, indexY) => {
        return (
          <div key={indexY} className={style.row}>
            {row.map((cell, indexX) => (
              <div
                onClick={() => setAnimation("left")}
                key={cell.id}
                className={`${style["cell-" + cell.color]} ${style.cell} ${
                  style["animate-" + animationDiraction?.[indexY]?.[indexX]]
                } `}
              >
                {cell.id}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
