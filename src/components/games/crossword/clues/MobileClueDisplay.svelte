<script lang="ts">
    import type Cursor from "../grid/cursor.svelte";

    const { cursor }: { cursor: Cursor} = $props()

    const cycleClue = (direction: 1 | -1) => {
        cursor.cycleClues(direction)
    }

    let clueFontSize = $derived(
        (cursor.currentClue.clue.length > 45) ? "1rem" : "x-large"
    )
</script>

<div class="banner">
    <button class="arrow" onclick={(event) => {cycleClue(-1); event.preventDefault()}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    </button>

    <h1 style="font-size: {clueFontSize}">
        <span class="clue-order">{cursor.currentClue.order}{(cursor.currentClue.isHorizontal) ? "A" : "D"}: </span>
        <span class="clue-text">{cursor.currentClue.clue}</span>
    </h1>

    <button class="arrow" onclick={(event) => {cycleClue(1); event.preventDefault()}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </button>
</div>

<style>
    h1 {
        all: unset;

    }

    .clue-order {
        font-weight: bold;
    }

    .clue-text {
        font-weight: normal;
    }

    .banner {
        display: grid;
        grid-template-columns: 1fr 80% 1fr;
        background-color: white;
        min-height: 5rem;
    }

    .arrow {
        all: unset;
        cursor: pointer;
        fill: blue;
    }
</style>