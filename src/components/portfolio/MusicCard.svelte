<script lang="ts">
    export let isReverse = false
    export let imageSrc: string
    export let year: string
    export let title: string
    export let info: string = ""

    export let appleMusic 
    export let spotify
    export let bandcamp 

</script>

<!-- We needt this first div so the order css dosent affect the outsider flex -->
<div class="card">
    <div class="container" class:reverse={isReverse}>
        <div class="album-cover">
            <a href={bandcamp}>
                <svg class="stack-item" width="100%" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" fill="white" />
                    <image width="100%" href={imageSrc}/>
                </svg>
            </a>
        </div>
        <div class="album-title" class:album-title-reverse={isReverse}>
            <h2>{title}</h2>
        </div>
        <div class="abum-info">
            <span>{year}</span>
            <hr>
            {#if info !== ""}
                <span><i>{info}</i></span>
                
            {/if}

            <div class="links">

                <a href={appleMusic}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="white" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                </a>
                <a href={spotify}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="white" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
                </a>
                <a href={bandcamp}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="white" d="M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zm48.2 326.1h-181L207.9 178h181z"/></svg>
                </a>
            </div>
            

        </div>
    </div>
</div>

<style>
    .links {
        margin-bottom: 1rem;
    }

    .card {
        margin: 0 1rem;
        width: min(90%, 65ch);
    }

    .reverse {
        order: -1;
    }

    hr {
        color: white;
        margin: 1rem 0;
    }

    .container {
        background-color: blue;
        color: white;
        border-radius: 1rem;
        
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr; 
        grid-template-rows: auto 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "album-cover album-title album-title"
            "album-cover abum-info abum-info"; 
    }
    .album-cover { 
        grid-area: album-cover; 
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .album-title { 
        grid-area: album-title; 
        display: flex;
        align-items: center;
        padding: 1rem 1rem 0 0;
    }

    .album-title-reverse {
        padding: 1rem 0 0 1rem;
    }
    
    .abum-info { 
        grid-area: abum-info; 
        }
</style>