<script lang="ts">
    import type Review from "../grid/review.svelte";
    import type {ReviewRequests} from "../grid/review.svelte"
    import Modal from "./Modal.svelte";

    const { review }: { review: Review } = $props()

    type ReviewText = Record<string, string>
    const record: ReviewText = {
        "revealall": "All of the answers will be revealed.",
        "revealsquare": "One square will be revealed",
        "revealword": "This word will be revealed" 
    }

    let displayedMenu: "check" | "reveal" | "reset" | "none" = $state("none")

    let currentType: ReviewRequests = $state("revealsquare")
    let showModal = $state(false)

    const confirmModal = (type: ReviewRequests) => {
        currentType = type
        showModal = true
    }

    const onModalConfirmed = () => {
        review.review(currentType)
        displayedMenu = "none"
    }

</script>


<Modal bind:showModal={showModal} confirmText="I'm sure" onclick={onModalConfirmed}>
    <div class="modal">
        <h1>Are you sure?</h1>
        <hr>
        <p>{record[currentType]}</p>

    </div>
</Modal>

<div class="banner">
    <a class="tab image-link" href="/"> 
        <img src="/icon.svg" alt="adamdinhvu.com logo"/> 
    </a>
    <div class="tabs">
        <div class="tab">
            <button class="tab" onclick={() => displayedMenu === "reveal" ? displayedMenu = "none" : displayedMenu = "reveal"}>Reveal</button>
    
            <ul class="menu" class:show={displayedMenu === "reveal"}>
                <li><button onclick={() => confirmModal("revealall")}>
                    Reveal All
                </button></li>
                
                <li><button onclick={() => confirmModal("revealword")}>
                    Reveal Word
                </button></li>
                
                <li><button onclick={() => confirmModal("revealsquare")}>
                    Reveal Square
                </button></li>
            </ul>
        </div>
    
        <div class="tab">
            <button onclick={() => displayedMenu === "check" ? displayedMenu = "none" : displayedMenu = "check"}>Check</button>
    
            <ul class="menu" class:show={displayedMenu === "check"}>
                <li><button onclick={() => review.review("checkall")}>
                    Check All
                </button></li>
                
                <li><button onclick={() => review.review("checkword")}>
                    Check Word
                </button></li>
                
                <li><button onclick={() => review.review("checksquare")}>
                    Check Square
                </button></li>
            </ul>
        </div>
    
        <div class="tab">
            <button onclick={() => displayedMenu === "reset" ? displayedMenu = "none" : displayedMenu = "reset"}>Reset</button>
    
            <ul class="menu" class:show={displayedMenu === "reset"}>
                <li><button onclick={() => review.review("reset")}>
                    Reset All
                </button></li>
            </ul>
        </div>
    
        <a href="/archive" class="tab">Archive</a>
    </div>
</div>

<style>
    .modal {
        text-align: center;
    }

    button, a {
        all: unset;
        cursor: pointer;
        
    }

    li > button {
        background-color: #18de74;
        color: black;
        border-top: 2px white solid;
        min-height: 3rem;
        text-align: center;
        width: 100%;
    }

    .menu > :last-child > button {
        border-bottom: 2px white solid;
    }

    .menu {
        position: absolute;
        padding: 0;
        margin: 0;
        list-style: none;

        max-height: 0;
        overflow: hidden;

        background-color: #18de74;
    }

    .tab {
        position: relative;
        display: inline-block;
        border-left: 1px white solid;
    }

    .tab > button {
        text-align: center;
    }

    .banner {
        display: flex;
        justify-content:first baseline;

        background-color: #18de74;
        height: 2rem;
    }

    .tabs {
        display: flex;
        justify-content: space-between;
        width: 600px;
    }

    .image-link {
        width: 2rem;
        height: 100%;
        padding: .2rem;
        display: inline-block;
        background-color: white;
    }

    img {
        height: 2rem;
        width: 2rem;
    }

    .menu.show {
        max-height: 500px;
    }
</style>