<script lang="ts">

    import Banner from "../UI/Banner.svelte";
    import MobileBanner from "../UI/MobileBanner.svelte";
    import MobileClueDisplay from "../clues/MobileClueDisplay.svelte";
    import GridDisplay from "../grid/GridDisplay.svelte";
    import Input from "../input/Input.svelte";
    import type {CrosswordManagers} from "../types"
    import GameEnd from "./GameEnd.svelte";

    const { managers }: {managers: CrosswordManagers} = $props()
    const {grid, cursor, orderNumbers, review, info} = managers

</script>


<article>
    <GameEnd {grid} {info}/>
    <MobileBanner
        {review}
        />

    <hr>
    <div class="game-grid">
        <GridDisplay 
            {grid}
            {cursor}
            {orderNumbers}
            />
        <MobileClueDisplay 
            {cursor}/>

        <Input 
            {cursor}
            isMobile={true}
        />
    </div>
</article>

<style>
    article {
        margin: auto;
        max-width: 500px;
    }

    .game-grid {
        margin: auto;
        max-width: 350px;
    }

</style>