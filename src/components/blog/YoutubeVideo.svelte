<script lang="ts">
    import { onMount } from "svelte";


    export let id: string

    let title: string,
        thumbnailURL: string,
        channel: string,
        videoURL = `https://www.youtube.com/watch?v=${id}`

    onMount(async () => {
        const response = await fetch(
            `//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
        )

        const videoInfo = await response.json()
        title = videoInfo?.title
        thumbnailURL = videoInfo?.thumbnail_url
        channel = videoInfo?.author_name
    })
</script>

<a href={videoURL}>
    <img 
        src={thumbnailURL}
        alt={`Youtube video: ${title}`}
    />
    <span class="info">
        <h2>{title}</h2>
        <h2>{channel}</h2>
    </span>
</a>

<style> 

    a {
        margin: 10px 0;
    }

    .info {
        display: flex;
        text-decoration: unset;
        color: blue;
        gap: 10px;
        justify-content: center;
    }

    h2 {
        font-size: large;
    }

    img {
        aspect-ratio: 16 / 9;
        width: 100%;
        height: auto;
    }
</style>