import type { Coord, Layout, Tile } from "../types"

export type SquareOptions = {
    x: number,
    y: number,
    solid: boolean,
    value: string,
    order: string,
    onclick: () => void,
    isFocusedSquare: boolean,
    isSecondarilyHighlighted: boolean,
    layout: Layout,
    checked: boolean
}