<script lang="ts">
    import GridManager from "./grid.svelte";
    import type {SquareOptions} from "./types"

    const { solid, x, y, value, isFocusedSquare, onclick, isSecondarilyHighlighted, layout, order, checked }: SquareOptions = $props()

    let char : string = $state("")

    $effect(() => { //update the current squares display when it updates
        layout

        char = GridManager.cellAt({x: x, y: y}, layout).char
    })
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<g
    {x}
    {y}
    {onclick}
    
    class="square"
    role="cell"
    tabindex="0"
    class:solid={solid}
    class:focused={isFocusedSquare}
    class:secondarilyHighlighted={isSecondarilyHighlighted}
    transform="{`translate(${x}, ${y})`}"
    >
    <rect 
        width={1} 
        height={1}>
    </rect>

    {#if char}
        <text
            class="char"
            x="0.5"
            y="0.82"
            text-anchor="middle"
            font-weight="bold"
            class:checked={checked && char !== "" && char === value}>

            {char.toLocaleUpperCase()}
            
        </text>
    {/if}

    {#if order}
        <text class="order" x="0.08" y="0.2" text-anchor="start">
            {order}
        </text>
    {/if}

    {#if checked && char !== "" && char !== value}
        <line 
            x1={0}
            y1={0}
            x2={1}
            y2={1}

            stroke="red" 
            stroke-width="0.002rem"/>
    {/if}
</g>

<style>
    g {
        cursor: pointer;
        user-select: none;
    }

    rect {
        stroke-width: .01px;
        stroke: blue;
        fill: white;
        transition: fill 0.05s ease-out;
    }

    
    .solid rect {
        fill: blue;
        cursor: initial;
    }

    .secondarilyHighlighted rect {
        fill: #e7e2f1;
    }


    .focused rect {
        fill: #18de74;
    }

    .checked {
        fill:blue
    }

    g:focus {
        outline: none;
    }

    
    text {
        pointer-events: none;
        line-height: 1;
        font-family: Arial, Helvetica, sans-serif;

    }

    .char {
        font-size: 0.05em;
        font-weight: 400;
        font-weight: bolder;
    }

    .order {
        font-size: 0.012em;
    }
</style>