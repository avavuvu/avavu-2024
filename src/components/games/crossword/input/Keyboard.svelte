<script lang="ts">
    import enterSVG from "./enter"
    import backspaceSVG from "./backspace"

    const {onkeydown}: {onkeydown: (key: KeyboardEvent) => void} = $props()
    const layout: string[] = [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "Enter z x c v b n m Backspace"
    ]

    const swaps: {[key: string]: string} = {
        "Backspace": backspaceSVG,
        "Enter": enterSVG
    }

    const rowData: {display: string, value: string}[][] = 
        layout.map(row => (
            row.split(" ").map(keyChar => ({
                display: (swaps[keyChar]) ? swaps[keyChar] : keyChar,
                value: keyChar
            }))
        ))

    let parent: HTMLElement

    const onclick = (key: string) => {
        onkeydown(new KeyboardEvent("keydown", {key: key}))
    }
    
</script>

{#snippet rows(display: string, value: string)}
    <button onclick={(event) => {onclick(value); event.preventDefault()}} class:special={value === "Backspace" || value === "Enter"}>
        <span>
            {#if display.includes("<svg")}
                {@html display}
            {:else}{display}{/if}
        </span>
    </button>
{/snippet}

<div class="keyboard-container">
    <div bind:this={parent} class="keyboard">
        {#each rowData as row, i}
            <div class={`row row-${i}`}>
                <div>
                    {#each row as {display, value}}
                        {@render rows(display, value)}
                    {/each}
                </div>
            </div>
            
        {/each}
    </div>

</div>

<style>
    .keyboard-container {
        display: flex;
        justify-content: center;
    }

    .keyboard {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .row {
        display: flex;
        justify-content: center;
    }

    .row > div {
        display: flex;
        justify-content: center;
        gap: 2px;
    }

    .row-0 > div {
        width: 100%;
    }

    .row-1 > div {
        width: 90.04%;
    }

    .row-2 > div {
        width: 100%;
    }

    button {
        all: unset;
        font-size: x-large;
        text-align: center;
        border-radius: 2px;
        background-color: rgb(230, 230, 230);
        cursor: pointer;
        border: none;
        border: 1px solid whitesmoke;
        border-radius: 4px;
        
        flex-basis: 100%;
        width: 0;
        padding: .3rem 1rem;
        text-align: center;
    }

    button > span {
        display: inline-block; 
        transform:translateX(-6px);
        user-select: none;
    }

    .special {
        background-color: rgb(202, 202, 202);
        width: 15.09%;
        text-align: center;
    }

    .special > span {
        transform: translateX(0px) translateY(2px);
    }
</style>