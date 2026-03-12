<script lang="ts">
    export let lines: string[]
    export let color: string = "#ff1493"
</script>

<div class="marquee" style={`background-color: ${color}`}>
    <ul class="marquee-content">
        {#each lines as line}
            <li>{line}</li>  
        {/each}
    </ul> 
    <ul class="marquee-content" aria-hidden="true">
        {#each lines as line}
            <li>{line}</li>  
        {/each}

    </ul>
</div>


<style>

.marquee {
        margin: 0px;
        color: white;
        
        --gap: 1rem;
        display: flex;
        overflow: hidden;
        user-select: none;
        gap: var(--gap);
    }
    
    .marquee-content {
        list-style-type: "★";
        
        margin: 0px;
        flex-shrink: 0;
        display: flex;
        justify-content: space-around;
        min-width: 100%;
        gap: var(--gap);
        animation: scroll 45s linear -30s infinite;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - var(--gap)));
        }
    }

</style>