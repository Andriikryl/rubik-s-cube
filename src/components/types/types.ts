
export enum Color {
    LEPTEUH = 0,
    YELLOW = 1,
    BLUE = 2,
    RED = 3,
    GREEN = 4,
    ORANGE  = 5,
}

export interface Cell {
    color: Color,
    id: string,
}

export type CubeRow = readonly [Cell, Cell, Cell]

export type CubeSide = readonly [
    CubeRow,
    CubeRow,
    CubeRow,
]


export type CubeData = [
    CubeSide,
    CubeSide,
    CubeSide,
    CubeSide,
    CubeSide,
    CubeSide,
]

export type Cycle = readonly [
    number, number, number, number
]

type operations = -1 | 0 | 1;

export type ShiftOperation = readonly [
    readonly  [operations, operations,operations,],
    readonly  [operations, operations,operations,],
    readonly  [operations, operations,operations,],
]

export type RotateFn = (s:CubeSide) => CubeSide;
export type RotateMatrix = readonly [RotateFn, RotateFn, RotateFn, RotateFn] 

export type AnimationDiract = "left" | "top" | "right" | "bottom" | undefined;
export type AnimationDiraction = AnimationDiract[][];

export interface UpdateAction {
    operation: ShiftOperation;
    cycle: Cycle;
    rotateMatrix?: RotateMatrix;
    animations: [AnimationDiract, AnimationDiract]
  }

