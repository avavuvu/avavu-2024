<script lang="ts">
    import type { Coord } from "../types";
    import type Cursor from "../grid/cursor.svelte";
    import Keyboard from "./Keyboard.svelte";


    type InputProps = {
        cursor: Cursor,
        isMobile: boolean
    }

    const { cursor, isMobile }: InputProps = $props()

    
    const onkeydown = (event: KeyboardEvent) => {
        event.preventDefault()
        
        switch(event.key) {
            case "Tab": 
                cursor.cycleClues(1)
            break;
            case "Enter": 
                cursor.cycleClues(1)
            break;
            case "Backspace":
                cursor.backspace()
            break;
            case "ArrowLeft":
                cursor.move({x: -1, y: 0})
            break;
            case "ArrowRight":
                cursor.move({x: 1, y: 0})
            break;
            case "ArrowUp":
                cursor.move({x: 0, y: -1})
            break;
            case "ArrowDown":
                cursor.move({x: 0, y: 1})  
            break;
            default:
                if (event.key.match(/^[a-zA-Z]$/)) {
                    cursor.char(event.key.toLowerCase())
                }
            break;
        }
    }
</script>

<svelte:window {onkeydown}/>
{#if isMobile}
    <Keyboard {onkeydown}/>
{/if}
