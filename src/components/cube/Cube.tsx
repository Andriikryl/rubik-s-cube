import React from "react";
import { Side } from "../types/types";

interface CubeProps {
  side: Side;
}

export default function Cube({ side }: CubeProps) {
  return <div>Cube</div>;
}
