import type {Tile, Layout, Coord, BundleLayout} from "../types"



class GridManager {
    grid: Tile[] = $state<Tile[]>([])
    completedGrid: Tile[] = []
    width: number = 0
    height: number = 0

    get layout() {
        return {
            width: this.width,
            height: this.height,
            grid: this.grid
        }
    }

    init(layout: BundleLayout) {
        this.width = layout.width,
        this.height = layout.height
        this.grid = layout.grid.map(char => ({
            char: "",
            solid: char === ".",
            checked: false
        }))

        this.completedGrid = layout.grid.map(char => ({
            char: (char === ".") ? "" : char,
            solid: char === ".",
            checked: false
        }))
    }

    tileAt(coord: Coord) {
        return this.grid[
            coord.y * this.width + coord.x
        ]
    }

    filledTileAt(coord: Coord) {
        return this.completedGrid[
            coord.y * this.width + coord.x
        ]
    }

    static cellAt(coord: Coord, layout: Layout) {
        return layout.grid[
            coord.y * layout.width + coord.x
        ]
    }
}


export default GridManager