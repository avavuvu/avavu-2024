<script lang="ts">
    import type { CluePair } from "../types";
    import type Cursor from "../grid/cursor.svelte";
    import ClueColumn from "./ClueColumn.svelte";

    const { cursor, clues }: {cursor: Cursor, clues: CluePair[]} = $props()

    const onclick = (clue: CluePair) => {
        cursor.currentClue = clue
    }
</script>

<div class="clue-display">
    <ClueColumn clues={clues.filter(clue => clue.isHorizontal === true)} heading="Across" {onclick} currentClue={cursor.currentClue} />
    
    <ClueColumn clues={clues.filter(clue => clue.isHorizontal === false)} heading="Down" {onclick} currentClue={cursor.currentClue} />
    
</div>


<style>
    @media (min-width: 768px) {
        .clue-display {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 800px;
            
        }
    }

    @media (max-width: 768px) {
        .clue-display {
            display: grid;
            grid-template-rows: 50% 50%;
            height: 100%;
        }
    }
</style>