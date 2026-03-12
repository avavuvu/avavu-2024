<script lang="ts">
    import type { CluePair } from "../types";

    const { heading, clues, onclick, currentClue } : {heading: string, clues: CluePair[], onclick: (clue: CluePair) => void, currentClue: CluePair} = $props()

    //disabled because of general weirdeness
    $effect(() => { //when the clue changes, scroll clue into view
        currentClue;

        document.getElementById(`clue_${currentClue.order}${currentClue.isHorizontal}`)?.scrollIntoView({behavior: "smooth", block: "nearest"})
    })
</script>

<div>
    <h2>{heading}</h2>
    <ol>
        {#each clues as clue}
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <li id={`clue_${clue.order}${clue.isHorizontal}`} onclick={() => onclick(clue)} class="clue" class:selected={currentClue === clue}>
                <span class="clue-order">{clue.order}</span>
                
                <span class="clue-text">{clue.clue}</span>
            </li>
        {/each}
    </ol>
</div>

<style>

    ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
        overflow-y: scroll;
        height: 80%;
    }

    h2 {
        padding: 0;
        margin: 0;
    }


    .clue {
        display: flex;
        padding: 5px 1px;
        cursor: pointer
    }

    .selected {
        background-color: #18de74;
    }

    .clue-order {
        font-weight: bold;
        text-align: right;
        min-width: 24px;
        width: 24px;
    }

    .clue-text {
        margin-left: 5px;
    }
</style>