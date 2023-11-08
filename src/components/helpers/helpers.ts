import { Color, CubeData, CubeSide, Cycle, ShiftOperation } from "../types/types";

export function createSide (color: Color): CubeSide {
    return [
        [color, color, color,],
        [color, color, color,],
        [color, color, color,],
    ]
}


export function createCube ():CubeData {
    const result: CubeSide[] = [];
    for(const color of Object.values(Color)){
        if(typeof color === "number"){
            result.push(createSide(color))
        }
    }
    return result as CubeData
}

export function shift (cube:CubeData, cycle:Cycle, map:ShiftOperation):CubeData {
    return cube
}