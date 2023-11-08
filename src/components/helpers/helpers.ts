import { Color, Side } from "../types/types";

export function createSide (color: Color): Side {
    return [
        [color, color, color,],
        [color, color, color,],
        [color, color, color,],
    ]
}