<script lang="ts">
    import type Review from "../grid/review.svelte";

    const { review }: { review: Review } = $props()

    type Tabs = "check" | "reveal" | "reset"
    let activeTab: Tabs = $state<Tabs>("check")

</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="">
    <div>
        <a class="tab image-link" href="/"> 
            <img src="/svg/favicon.svg" alt="adamdinhvu.com logo"/> 
        </a>
    </div>


    <div class="tabs right-tabs">
        <a href="https://crossword.blue" class="tab" id="archive">
            <span class="tab-text">Archive</span>
        </a>

        <div class="tab" class:active={activeTab === "check"} onclick={() => activeTab = "check"}>
            <span class="tab-text">Check</span>
            <div class="sub-tabs">
                <button onclick={() => review.review("checkall")}>
                    Check All
                </button>
                <button onclick={() => review.review("checkword")}>
                    Check Word
                </button>
                <button onclick={() => review.review("checksquare")}>
                    Check Square
                </button>
            </div>
        </div>
        <div class="tab" class:active={activeTab === "reveal"} onclick={() => activeTab = "reveal"}>
            <span class="tab-text">Reveal</span>
            <div class="sub-tabs">
                <button onclick={() => review.review("revealall")}>
                    Reveal All
                </button>
                <button onclick={() => review.review("revealword")}>
                    Reveal Word
                </button>
                <button onclick={() => review.review("revealsquare")}>
                    Reveal Square
                </button>
            </div>
        </div>
        <div class="tab" class:active={activeTab === "reset"} onclick={() => activeTab = "reset"}>
            <span class="tab-text">Reset</span>
            <div class="sub-tabs">
                <button onclick={() => review.review("reset")}>
                    Reset Puzzle
                </button>
            </div>
        </div>
        
    </div>
</div>

<style>
    button {
        all: unset;
        cursor: pointer;
        padding: 0 1rem;
        text-align: center;
    }

    a {
        all: unset;
        cursor: pointer;
    }

    .sub-tabs {
        display: flex;
        position: absolute;
        z-index: 1;
        top: 3em;
        right: 0;
        background: #fff;
        opacity: 0;
        display: none;
        height: 100%;
    }

    .tabs {
        position: relative;
        margin: 0 0 3rem 0;
        background: #18de74;
        display: flex;
        justify-content: left;
    }

    .right-tabs {
        justify-content: right;
    }

    .tabs::before,
    .tabs::after {
        content: "";
        display: table;
    }
    .tabs::after {
        clear: both;
    }
    .tab {
        float: left;
    }
    .tab-text {
        position: relative;
        display: block;
        line-height: 2.75em;
        height: 3em;
        padding: 0 1.618em;
        background: #18de74;
        cursor: pointer;
        top: 0;
        user-select: none;
    }

    .image-link {

        display: flex;
        justify-content: center;
        height: 6rem;
        width: 6rem;
    }

    img {
        height: 5rem;
        background-color: white;
    }

    .tab-text:hover {
        top: -0.25rem;
        transition: top 0.25s;
    }

    .active .tab-text {
        background: #fff;
        border-right: 0.125rem solid #fff;
        font-weight: bold;
        z-index: 1;
        top: -0.0625rem;
    }
    .active > .sub-tabs {
        z-index: 2;
        opacity: 1;
        display: flex;
    }
</style>