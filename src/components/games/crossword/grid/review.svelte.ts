import type Cursor from "./cursor.svelte";
import GridManager from "./grid.svelte";

export type ReviewRequests = "checkall" | "checkword" | "checksquare" | "revealall" | "revealword" | "revealsquare" | "reset"

class Review {
    grid: GridManager
    cursor: Cursor

    constructor(_grid: GridManager, _cursor: Cursor) {
        this.grid = _grid
        this.cursor = _cursor
    }

    review(review: ReviewRequests) {
        switch(review) {
            case "revealall":
                this.grid.grid = this.grid.completedGrid
                
                break;
            case "revealword":
                this.cursor.currentClue.coords.forEach(coord => {
                    this.grid.tileAt(coord).char = this.grid.filledTileAt(coord).char
                })
                break;
            case "revealsquare":
                this.grid.tileAt(this.cursor.focusedSquare).char = this.grid.filledTileAt(this.cursor.focusedSquare).char
                break;
            case "checksquare":
                this.grid.tileAt(this.cursor.focusedSquare).checked = true
                console.log("checked")
                break;
            case "checkword":
                this.cursor.currentClue.coords.forEach(coord => {
                    this.grid.tileAt(coord).checked = true
                })
                break;
            case "checkall":
                this.grid.grid.forEach(tile => {
                    tile.checked = true
                })
                break;
            case "reset":
                this.grid.grid.forEach(tile => {
                    tile.char = ""
                })
                break;
        }
    }
}

export default Review