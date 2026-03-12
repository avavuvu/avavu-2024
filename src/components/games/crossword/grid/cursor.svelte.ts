import type { CluePair, Coord } from "../types"
import type GridManager from "./grid.svelte"

class Cursor {
    focusedSquare: Coord = $state({x: -1, y: -1})
    isHorizontal: boolean = $state(true)
    private _clueIndex: number = 0
    private _grid: GridManager
    private _clues: CluePair[] = []

    constructor(clues: CluePair[], grid: GridManager) {
        this._clues = clues
        this._grid = grid
    }

    init(startPosition: Coord, ) {
        this.focusedSquare = startPosition
        
    }

    get currentClue(): CluePair {
        return this._clues[this.clueIndex]
    }


    set currentClue(clue: CluePair) {
        this.clueIndex = this._clues.indexOf(clue)
    }

    getClueFromCoord(coord: Coord) {
        const search = this._clues.filter(clue => 
            clue.isHorizontal === this.isHorizontal)
                .find(clue => 
                    clue.coords.find(clueCoord => 
                        clueCoord.x === coord.x && 
                        clueCoord.y === coord.y))

        if(!search) {
            console.error("Could not find clue that matched the focused square")
        }

        return this._clues.indexOf(search!)
    }

    get clueIndex() {
        return this.getClueFromCoord(this.focusedSquare)
    }

    set clueIndex(n: number) {
        this._clueIndex = n % this._clues.length

        this.focusedSquare = this._clues[this._clueIndex].start
        this.isHorizontal = this._clues[this._clueIndex].isHorizontal
    }

    get secondarilyFocusedSquares(): Coord[] {
        return this.currentClue.coords
    }

    cycleClues(direction: 1 | -1) {
        this.clueIndex = (this._clueIndex + direction + this._clues.length) % this._clues.length 
    }

    move(delta: {x?: number, y?: number}) {
        if((delta.x === 1 || delta.x === -1) !== this.isHorizontal) {
            this.isHorizontal = !this.isHorizontal
            return
        }
        
        delta.x = delta.x || 0
        delta.y = delta.y || 0

        let moveTo = {
            x: (this.focusedSquare.x + delta.x + this._grid.layout.width) % this._grid.layout.width,
            y: (this.focusedSquare.y + delta.y + this._grid.layout.height) % this._grid.layout.height
        }

        while(this._grid.tileAt(moveTo).solid) {
            moveTo = this.relativeCoord(moveTo, {x: delta.x, y: delta.y})
        }

        this.focusedSquare = moveTo
    }

    relativeCoord(position: Coord, delta: Coord): Coord {
        return {
            x: (position.x + delta.x + this._grid.layout.width) % this._grid.layout.width,
            y: (position.y + delta.y + this._grid.layout.height) % this._grid.layout.height
        }
    }

    char(char: string) {
        const currentSquare = this._grid.tileAt(this.focusedSquare)
        
        currentSquare.char = char
        currentSquare.checked = false
        
        const delta = {
            x: +this.isHorizontal,
            y: +!this.isHorizontal
        }

        const nextTile = {
            x: this.focusedSquare.x + delta.x,
            y: this.focusedSquare.y + delta.y
        }

        if(nextTile.x >= this._grid.layout.width ||
            nextTile.y >= this._grid.layout.height ||
            this._grid.tileAt(nextTile).solid) {
            return
        }
        
        this.move(delta)
    }

    backspace() {
        const currentSquare = this._grid.tileAt(this.focusedSquare)
        if(currentSquare.char !== "") {
            currentSquare.char = ""
            currentSquare.checked = false
            return
        }

        const backCoord = {
            x: -this.isHorizontal,
            y: -!this.isHorizontal
        }

        const previousSquare = this._grid.tileAt(this.relativeCoord(this.focusedSquare, backCoord))

        if(backCoord.x + this.focusedSquare.x < 0 ||
            backCoord.y + this.focusedSquare.y < 0 ||
            previousSquare.solid) {
            return
        }

        if(previousSquare.char !== "") {
            previousSquare.char = ""
            currentSquare.checked = false
        }

        

        this.move(backCoord)

    }
}

export default Cursor