import React from "react";
import { CubeData } from "../types/types";
import Side from "./Side";

interface CubeProps {
  cube: CubeData;
}

export default function Cube({ cube }: CubeProps) {
  return (
    <div>
      {cube.map((side, index) => (
        <Side key={index} side={side}></Side>
      ))}
    </div>
  );
}
