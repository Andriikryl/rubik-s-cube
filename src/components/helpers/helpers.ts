import { Color, CubeData, CubeSide, Cycle, RotateFn, RotateMatrix, ShiftOperation } from "../types/types";

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
    return rotate90(rotate90(side))
}
export const rotate0 = (side:CubeSide):CubeSide => {
    return side
}


const reversRotateMap = new Map<RotateFn, RotateFn>();
reversRotateMap.set(rotate270, rotate90);
reversRotateMap.set(rotate180, rotate180);
reversRotateMap.set(rotate90, rotate270);
reversRotateMap.set(rotate0, rotate0);


export function rotateCube(cube:CubeData, cycle:Cycle, matrix: RotateMatrix):CubeData{
    return cube.map((side, i) => {
        const index = cycle.indexOf(i)
        if(index === -1){
            return side
        } else {
            return matrix[index](side)
        }
    }) as CubeData
}

export function reveersRotateMatrix(matrix:RotateMatrix){
    return matrix.map(r => reversRotateMap.get(r) as RotateFn) as unknown as RotateMatrix
}