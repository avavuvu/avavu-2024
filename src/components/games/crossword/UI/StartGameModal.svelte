<script lang="ts">
    import Modal from "./Modal.svelte";
    import type {DocumentBundle} from "../types"
    import { startGameInfo } from "./startGameInfo";

    const {bundle}: {bundle: DocumentBundle} = $props()

    const info = startGameInfo(bundle)
</script>

<Modal 
    showModal={true}
    confirmText="Let's Play!">
    <div class="container">
        <h1>{info.title}</h1>
        <p class="date">{info.weekday}, {info.date}</p>
        <p>
            {info.author}
            {#if info.authorByLine},
                <br/>
                <span class="byline">{info.authorByLine}</span>
            {/if}
        </p>
        <hr/>
        <div class="difficulty-section">
            <span>Difficulty:</span>
            <span class="difficulty">
                {#each info.chillies as chilliSrc}
                    <!-- svelte-ignore a11y_missing_attribute -->
                    <img class="chilli" src={chilliSrc}>
                {/each}
            </span>

        </div>
    </div>
</Modal>

<style>
    h1 {
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .date {
        padding: 0;
        margin: 0;
        font-style: italic;
    }

    .byline {
        padding-top: 0;
        margin-top: 0;
    }

    .difficulty {
        display: inline-block
    }

    .difficulty-section {
        display: block;
    }

    .chilli {
        width: 1.5rem;
        user-select: none;
    }
</style>