<script lang="ts">

    import GridDisplay from "../grid/GridDisplay.svelte";
    import Input from "../input/Input.svelte";
    import type {CrosswordManagers} from "../types"
    import DesktopClueDisplay from "../clues/DesktopClueDisplay.svelte";
    import Banner2 from "../UI/Banner2.svelte";
    import GameEnd from "./GameEnd.svelte";
    const { managers }: {managers: CrosswordManagers} = $props()
    const {grid, cursor, orderNumbers, review, info} = managers

</script>


<article>
    <GameEnd {grid} {info}/>
    <Banner2
        {review}
    />
    <hr>

    <div class="crossword">
        <div class="grid">

            <GridDisplay 
                {grid}
                {cursor}
                {orderNumbers}
                />
        </div>

        <div class="clues">
            <DesktopClueDisplay 
                {cursor}
                clues={managers.clues.clues}/>

        </div>
    </div>

    <Input 
            {cursor}
            isMobile={false}
            />
</article>

<!-- <Footer/> -->


<style>
    article {
        margin: auto;
        max-width: 1132px;
    }

    .crossword {
        align-items: flex-start;
        display: flex;
        justify-content: space-around;
        
    }

    .clues {
        flex: 1;
    }

    .grid {
        flex: 1;
        padding: 10px;
    }
</style>