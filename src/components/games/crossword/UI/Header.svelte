<script lang="ts">
    import type { DocumentBundle } from "../types";
    import { startGameInfo } from "./startGameInfo";

    const {bundle}: {bundle: DocumentBundle} = $props()

    const info = startGameInfo(bundle)
</script>

<div class="container">
    <div>
        <div class="heading"><h1>{info.posessive} {info.weekday} Crossword</h1></div>
        <div class="heading"><h3>{info.date}</h3></div>

        <div>
            <span>{info.author}</span>
            {#if info.authorByLine}
                <b>-</b> {info.authorByLine}
            {/if}
        </div>
    </div>
    
</div>

<style>
    .container {
        margin: auto;
        max-width: 1300px;
        padding-bottom: 1.5rem;
    }

    .heading {
        display: inline-block;
    }

    h1 {
        all: unset;
        font-weight: bold;
        font-size: xx-large;
    }

    h3 {
        all: unset;
        font-size: xx-large;
    }
</style>