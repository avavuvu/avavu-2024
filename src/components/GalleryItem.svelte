<script lang="ts">
    export let imgSrc: string = ""
    export let specialText: string = ""

    let item: HTMLElement

    const click = () => {
        // Calculate the scroll position to center the clicked item
        const scrollPosition = item.offsetLeft - (window.innerWidth - item.offsetWidth) / 2

        console.log("TEst")
  
        // Scroll the gallery to the calculated position
        // not exactly sexy code but it works: all items will have a wrapper and gallery
        item!.parentElement!.parentElement!.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        })

    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
{#if imgSrc !== ""}
    <img bind:this={item} on:click={click} class="item" loading="lazy" width="400" height="565" src={imgSrc}/>
{:else if specialText !== ""}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div bind:this={item} on:click={click} class="text-item item">
        <p>
            {@html specialText} 
        </p>
    </div>
{:else}
    <div class="item empty">

    </div>
{/if}

<style>
    .item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        scroll-snap-align: center;
        inline-size: 100%;
        max-inline-size: 25rem;

        font-size: 2rem;

        overflow: hidden;
    }

    .text-item {
        background-color: black;
        color: white;
        height: 100%;
        width: 400px;
        height: 565px;
        text-align: center;
        font-size: xx-large;
    }

    .empty {
        height: 100%;
        width: 400px;
        height: 565px;
    }

    .text-item > p {
        padding: 2rem;
    }
</style>