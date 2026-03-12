<script lang="ts">
    import type { CluePair, Coord, Layout, Tile } from "../types";
    import { onMount } from "svelte";
    import Square from "./Square.svelte";
    import type { SquareOptions } from "./types";
    import { create } from "@svgdotjs/svg.js";
    import type Cursor from "./cursor.svelte";
    import type GridManager from "./grid.svelte";

    type DisplayProps = {
        grid: GridManager,
        cursor: Cursor,
        orderNumbers: {order: string, coord: Coord}[]
    }

    let { grid, cursor, orderNumbers }: DisplayProps = $props()
    let squares: SquareOptions[]  = $state([])
    let secondarilyHighlightedSquares: Coord[] = $state(cursor.secondarilyFocusedSquares)

    $effect(() => { //make the layout on game start
        squares = createSquares(grid.layout)
    })
    $effect(() => { //when we move, also update the focused squares
        cursor.focusedSquare

        secondarilyHighlightedSquares = cursor.secondarilyFocusedSquares
    })

    const onSquareClick = (x: number, y: number) => {
        if(cursor.focusedSquare.x === x && cursor.focusedSquare.y === y) {
            cursor.isHorizontal = !cursor.isHorizontal
        }

        cursor.focusedSquare = {x, y}

        secondarilyHighlightedSquares = cursor.secondarilyFocusedSquares
    }

    const isFocusedSquare = (x: number, y: number): boolean => {
        return cursor.focusedSquare.x === x && cursor.focusedSquare.y === y
    }

    const isSecondarilyHighlighted = (x: number, y: number): boolean => {
        return secondarilyHighlightedSquares.some(coord => coord.x === x && coord.y === y)
    }

    const createSquares = (layout: Layout): SquareOptions[] => {
        
        
        return layout.grid.map((tile, index) => {
            const x = index % layout.width
            const y = Math.floor(index / layout.width)
            
            return {
                solid: tile.solid,
                value: grid.completedGrid[index].char,
                checked: tile.checked,
                x: x,
                y: y,
                order: orderNumbers.find(order => order.coord.x === x && order.coord.y === y)?.order || "",
                onclick: (tile.solid) ? () => {/* noop ! */}  : () => onSquareClick(x,y), 
                isFocusedSquare: isFocusedSquare(x,y),
                isSecondarilyHighlighted: isSecondarilyHighlighted(x, y),
                layout: grid.layout
            }
        })
    }
    
</script>

<div class="svg-container">
    <svg viewBox="0 0 {grid.layout.width} {grid.layout.height}">
        {#each squares as square }
            <Square {...square}/>
        {/each}
    </svg>
</div>

<style>
    svg {
        width: 100%;
        display: block;
        border: 1px solid blue;
    }


</style>