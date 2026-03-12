<script lang="ts">
    export let display: string
    export let reveal: string
    export let placeholder = "Click here for answer"

    let revealButton: HTMLElement

    const replace = () => {
        revealButton.innerHTML = reveal
    }
</script>

<div class="spoiler">
    <span>
        <h2>"{display}"</h2>
        <button
            bind:this={revealButton} 
            onclick={() => replace()}
            >{placeholder}</button>
    </span>
    
</div>

<style>
    .spoiler {
        text-align: center;
        background-color: blue;
        color: white;
        margin: 20px;
        padding: 10px;
        border-radius: 10px;

    }

    button {
        all: unset;
        cursor: pointer;
    }

    h2 {
        font-style: italic;
    }
</style>