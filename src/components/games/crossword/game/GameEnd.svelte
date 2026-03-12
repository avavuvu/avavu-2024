<script lang="ts">
    import WinModal from "../UI/WinModal.svelte";
    import type GridManager from "../grid/grid.svelte";
    import type { DocumentBundle } from "../types";

    const { grid, info }: {grid: GridManager, info: {id: string, bundle: DocumentBundle}} = $props()

    const startTime = (new Date()).getTime()
    let endTime = 0
    let finishTime = $state(-1)
    let timeString = $state("")

    let hasShown = false
    let showEndModal = $state(false)

    let url = "https://crossword.blue"
    let shareText = $derived(`I finished the crossword in ${timeString}.\nHow fast can you beat it? ${url} ${grid.grid.map((tile, index) => 
        `${index % grid.width === 0 ? "\n" : ""}${tile.solid ? "🟦" : "⬜"}`).join("")}`)


    $effect(() => { //check if we have won the game
        for (let i = 0; i < grid.grid.length; i++) {
            const tile = grid.grid[i];

            if(tile.solid) { continue }
            if(tile.char === "") { return }
        }

        if(JSON.stringify(grid.grid.map(tile => tile.char)) === JSON.stringify(grid.completedGrid.map(tile => tile.char))) {
            endTime = (new Date()).getTime()
            finishTime = endTime - startTime
            let minutes = Math.floor(finishTime / 60000);
            let seconds = ((finishTime % 60000) / 1000).toFixed(0);

            timeString = (minutes > 1)
                ? `${minutes}:${seconds.padStart(2, '0')}`
                : `${seconds} seconds`

            showEndModal = true

            return
        }

        if(hasShown) { return }
        showEndModal = true
        hasShown = true
    })
</script>


<WinModal bind:showModal={showEndModal} timeString={timeString} shareText={shareText}/>
