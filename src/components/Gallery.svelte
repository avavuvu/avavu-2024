<script lang="ts">
    export let record: any

    export let special: {index: number, html: string} = {index: -1, html: ""}

    import GalleryImage from "./GalleryItem.svelte";
</script>

<div class="gallery">
    <div class="wrapper">
        {#each record as poster, index}
            {#if index === special.index}
                <GalleryImage specialText={special.html}/>
            {/if}

            <GalleryImage imgSrc={poster.default.src}/>

        {/each}
    </div>
</div>

<style>
    .gallery {
        grid-column: full;
        display: grid;
        grid-template-columns: inherit;
        padding-block: var(--space-md);
        overflow-x: scroll;
        overscroll-behavior-x: contain;
        scroll-snap-type: x proximity;
        /* scrollbar-width: 5px; */
        scrollbar-width: none;
    }

    .gallery .wrapper {
        grid-column: content;
        display: flex;
        align-items: center;
        gap: var(--space);
       
    }
/* 
    .gallery .wrapper::after {
        content: "";
        align-self: stretch;
        padding-inline-end: max(
            var(--space),
            (100vw - var(--content-max-width)) / 2 - var(--space)
        );
    } */

    
</style>