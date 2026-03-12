<script lang="ts">

    import Modal from "./Modal.svelte";

    let { showModal = $bindable(false), timeString = "", shareText } : { showModal: boolean, timeString: string, shareText: string} = $props()

    const share = async () => {
        if (navigator.share) { 
            await navigator.share({
                text: shareText
            })
        } else {
            await navigator.clipboard.writeText(shareText)
        }
    }

    const buttonText = $derived( (timeString !== "") 
        ? (navigator.share !== undefined) ? "Share..." : "Copy to clipboard"
        : "Okay")
</script>
<Modal 
    bind:showModal={showModal}
    onclick={share}
    confirmText={buttonText}>

    <div class="container">
        <div>
            {#if timeString === ""}
                <h1>Almost!</h1>
                <p>At least one square is incorrect</p>
            {:else}
                <h1>Congrats!</h1>
                <p>You finished today's puzzle in {timeString}</p>
                
                <img src="/images/thumbsup.png" alt="me giving you a thumbs up for you doing a good job">
    
                <br/>

            {/if}

        </div>
        
    </div>
</Modal>

<style>
    .container {
        display: flex;
        justify-content: center;
        text-align: center;
    }
    
</style>
