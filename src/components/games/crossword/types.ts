import type CluesManager from "./clues/cluesManager"
import type Cursor from "./grid/cursor.svelte"
import type GridManager from "./grid/grid.svelte"
import type Review from "./grid/review.svelte"

export type Tile = {
    char: string,
    solid: boolean,
    checked: boolean
}

export type Coord = {
    x: number,
    y: number
}

export type CluePairFromDocument = {
    word: string,
    clue: string,
    isHorizontal: boolean,
    start: Coord,
    order: number,
}

export type CluePair = CluePairFromDocument & {
    coords: Coord[]
}

export type BundleLayout = {
    grid: string[],
    width: number,
    height: number
}

export type Layout = {
    grid: Tile[],
    width: number,
    height: number
}

export type PuzzleBundle = {
    layout: Layout,
    clues: CluePair,
}


export type OldDocumentBundle = {
    author: string,
    date: Date,
    name: string
    grid: {col: number, array: string[]}[],
    clues: CluePair[],
    difficulty: number
}

export type DocumentBundle = {
    author: string,
    date: Date,
    name: string
    grid: string[],
    width: number,
    height: number
    clues: CluePair[],
    difficulty: number
}

export type CrosswordManagers = {
    grid: GridManager,
    clues: CluesManager,
    cursor: Cursor,
    review: Review,
    orderNumbers: {order: string, coord: Coord}[],
    info: {id: string, bundle: DocumentBundle}
}