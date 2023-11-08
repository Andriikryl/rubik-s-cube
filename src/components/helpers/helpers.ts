import { Color, Side } from "../types/types";

export function createSide (color: Color): Side {
    return [
        [color, color, color,],
        [color, color, color,],
        [color, color, color,],
    ]
}


export function createCube () {
    const result: Side[] = [];
    for(const color of Object.values(Color)){
        if(typeof color === "number"){
            result.push(createSide(color))
        }
    }
    return result
}