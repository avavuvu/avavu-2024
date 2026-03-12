<script lang="ts">
    import type { CrosswordManagers, DocumentBundle, OldDocumentBundle } from "./types";
    import GridManager from "./grid/grid.svelte";
    import { attatchClues, convertBundle } from "./layout/layoutConvertor";
    import CluesManager from "./clues/cluesManager";
    import Cursor from "./grid/cursor.svelte";
    import Review from "./grid/review.svelte";
    import StartGameModal from "./UI/StartGameModal.svelte";
    import MobileCrossword from "./game/MobileCrossword.svelte";
    import DesktopCrossword from "./game/DesktopCrossword.svelte";
    import Header from "./UI/Header.svelte";
    import { onMount } from "svelte";
    import { UAParser } from "ua-parser-js"

    export let searchParams: Record<string, string> | null

    let puzzleInfo: {id: string, bundle: DocumentBundle}

    const fetchPuzzle = async (): Promise<DocumentBundle> => {
        const url = new URL("/api/crosswords", import.meta.env.PUBLIC_SITE)
            
        if(searchParams !== null && Object.keys(searchParams).length !== 0) {
            if(searchParams.date) {
                url.searchParams.set("date", searchParams.date)
                url.searchParams.set("always", "true")
            } else if(searchParams.id) {
                url.searchParams.set("id", searchParams.id)
            }
        } else {
            url.pathname += "/today.json"
        }

        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`HTTP error Status: ${response.status}`);
            }
            
            const json: OldDocumentBundle = await response.json()
            const bundle = convertBundle(json)

            puzzleInfo = {
                id: url.searchParams.get("id") || "",
                bundle: bundle
            }

            return bundle
        } catch (error) {
            console.error(error)
            // Handle the error appropriately
            throw error// Rethrow the error to be caught by the caller
        }
    }

    const startGame = async (documentBundle: DocumentBundle): Promise<CrosswordManagers> => {
        const gridManager = new GridManager()

        gridManager.init({
            grid: documentBundle.grid, 
            width: documentBundle.width, 
            height: documentBundle.height
        })

        const cluesManager = new CluesManager()
        cluesManager.init(documentBundle.clues)

        const cursor = new Cursor(cluesManager.clues, gridManager)
        cursor.init(cluesManager.clues[0].start)

        const review = new Review(gridManager, cursor)

        const orderNumbers = attatchClues(documentBundle)
        
        return {grid: gridManager, clues: cluesManager, cursor: cursor, review: review, orderNumbers: orderNumbers, info: puzzleInfo}
    }

    let isMobile = false

    onMount(async () => {
        const { device } = UAParser(navigator.userAgent)
        if(device.type === "mobile" || device.type === "tablet") {
            isMobile = true
        }
    })

</script>

{#await fetchPuzzle()}
    <div class="loading">
        loading...
    </div>
{:then json} 
    {#if isMobile}
        <StartGameModal bundle={json}/>
    {:else}
        <Header bundle={json}/>
    {/if}

    {#await startGame(json)}    
        ...
    {:then managers} 
        {#if isMobile}
            <MobileCrossword {managers}/>
        {:else}
            <DesktopCrossword {managers}/>
        {/if}
    {/await}

    
{/await}

<style>
    .loading {
        margin: auto;
        max-width: 500px;
        text-align: center;
        margin-top: 30%;
        font-size: xx-large;
    }
</style>