<script lang="ts">
    const height = 4

    let windowWidth = $state(window.outerWidth)
    let gridWidth = $derived(Math.floor(windowWidth / 20))

    const createGrid = (): {x: number, y: number, solid: boolean, char: string}[] => {
        let textIndex = 0
        let pos = []

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < gridWidth; x++) {
                let solid = ((x+y) % height === 0)

                pos.push({
                    x, 
                    y,
                    solid,
                    char: text[textIndex % text.length]
                })

                if(!solid) {
                    textIndex ++
                }
            }
        }

        return pos
    }


    const text = "ADAMSCROSSWORD".split("")
    
    let coords = $state(createGrid())
    
    $effect(() => {
        windowWidth;

        coords = createGrid()
    })

    const onresize = () => {
        windowWidth = window.outerWidth

    }
</script>

<svelte:window {onresize}/>

<svg viewBox="0 0 {gridWidth} {height}">
    {#each coords as {x, y, solid, char}}
        <g
        class="square"
        role="cell"
        tabindex="0"
        transform="{`translate(${x}, ${0})`}"
        >
            {#if solid}
                <rect width=1 height=1 {y} fill="blue"/>
            {:else}
                <rect width=1 height=1 y={y} fill="none" stroke="blue" stroke-width=0.05px/>
                        <!-- <text
                            class="char"
                            x="0.5"
                            y="{y + 0.82}"
                            text-anchor="middle"
                            font-weight="bold"
                            font-size="0.04em">

                            {char}
                        </text> -->
            {/if}

        </g>
    {/each}
    
    
</svg>

<style>
    svg {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>