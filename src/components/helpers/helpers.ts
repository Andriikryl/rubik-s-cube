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

export function shift (cube:CubeData, cycle:Cycle, operation:ShiftOperation):CubeData {
    return cube.map((side, i) => {
        let index = cycle.indexOf(i)
        if(index === -1){
            return side
        } else {
            return side.map((row, rowIndex) => row.map((cell, sellIndex) => {
                const o = operation[rowIndex][sellIndex]
                const nextIndex = (index + o + cycle.length) % cycle.length;
                return cube[cycle[nextIndex]][rowIndex][sellIndex]
            }))
        }
    }) as CubeData
}



  export const rotate90 = (side:CubeSide):CubeSide => {
        return side.map((row, i) =>
            row.map((val, j) => side[side.length - 1 - j][i])
        ) as CubeSide;
}

export const rotate270 = (side:CubeSide):CubeSide => {
    return rotate90(rotate90(rotate90(side)))
}
export const rotate180 = (side:CubeSide):CubeSide => {
    return rotate90(rotate90(rotate90(side)))
}


const reversRotateMap ={
    
}