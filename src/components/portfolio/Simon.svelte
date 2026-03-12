<script lang="ts">
    import {draggable, type DragOptions} from "@neodrag/svelte"
    import { find } from "@svgdotjs/svg.js";
    import {onMount} from "svelte"

    const dragOptions: DragOptions = {
        bounds: 'body',
        onDragStart: (_) => {isDragging = true},
        onDragEnd: (_) => {
            isDragging = false,
            speechBubbleChange()
        },
    }

    let simonElement: HTMLElement
    let isDragging = false

    const speechBubbleReference: {querySelector: string, text: string}[] = 
    [
        {
            querySelector: ".profile-pic-square", text: "So handsome!"
        },
        {
            querySelector: ".tech-text", text: "So Smart!"
        },
        {
            querySelector: ".graphic-design", text: "What cool designs!"
        },
        {
            querySelector: ".youtube", text: "So insighful!"
        },
        {
            querySelector: ".music-section", text: "Between Me & You is my favourite!"
        },
        {
            querySelector: ".footer", text: "It really means a lot!"
        }
    ]

    let speechBubbleIndex = -1
    let speechBubbleCheckpoints: {height: number, text: string}[]

    const findPositions = () => {
        speechBubbleCheckpoints = speechBubbleReference.map(reference => {
            const ele = document.querySelector(reference.querySelector)
            if(!ele) {
                console.error("Unable to find elemnent from query", reference.querySelector)
            }
            
            return {
                height: ele!.getBoundingClientRect().top + window.scrollY,
                text: reference.text
            }
        })
    }

    onMount(findPositions)

    const speechBubbleChange = () => {
        if(!speechBubbleCheckpoints || !simonElement) { return }

        let checkpoint = speechBubbleCheckpoints
                .findLast(checkpoint => simonElement.getBoundingClientRect().top + window.scrollY > checkpoint.height)

        if(!checkpoint) {
            speechBubbleIndex = -1
            return
        }

        speechBubbleIndex = speechBubbleCheckpoints.indexOf(checkpoint)
    }   

    const getCurrentBubble = (): "none" | string => {
        if(speechBubbleIndex === -1) {
            return "none"
        }

        return speechBubbleCheckpoints[speechBubbleIndex].text
    }
</script>

<svelte:window on:resize={findPositions}/>

<div class="simon-container" bind:this={simonElement}
    use:draggable={dragOptions}
    >

    <img  draggable="false" 
        alt="Simon the dog"
        src="/images/simon/simon.webp"
        />

    {#if isDragging}
        {#if getCurrentBubble() === "none"}
            <!-- svelte-ignore a11y-missing-attribute -->
            <img 
                class="woof"
                src="/images/simon/woof.svg"
                />
        {:else}
            <div class="blank-container">
                <h2>{getCurrentBubble()}</h2>
                <!-- svelte-ignore a11y-missing-attribute -->
                <img 
                    class="blank"
                    src="/images/simon/blank.svg"
                    />
                
            </div>
        {/if}
    {/if}
</div>

<style>
    .simon-container {
        width: 200px;
        height: 200px;
        position: absolute;
        left: 20px;
        top: 550px;

    }

    img {
        width: 100%;
        height: 100%;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        pointer-events: none;
    }

    .woof {
        width: 150px;
        height: 150px;
        
        position: absolute;
        left: 60px;
        bottom: 110px;
    }

    h2 {
        position: absolute;
        left: 40px;
        bottom: 205px;
        max-width: 300px;
        border: 4px black solid;
        border-radius: 30px;
        background-color: white;
        padding: 2rem;
    }

    .blank {
        position: absolute;
        left: 60px;
        bottom: 120px;
        width: 100px;
        height: 100px;
    }
</style>