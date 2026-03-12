<script lang="ts">
    export let source: string
</script>

<iframe 
    src={source} 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen></iframe>

<style>
    iframe {
        aspect-ratio: 16 / 9;
        width: 100%;
    }
</style>