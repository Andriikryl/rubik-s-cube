export type CubeSide = [
    [Color, Color, Color],
    [Color, Color, Color],
    [Color, Color, Color],
]

export enum Color {
    LEPTEUH = 0,
    YELLOW = 1,
    BLUE = 2,
    RED = 3,
    GREEN = 4,
    ORANGE  = 5,
}

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