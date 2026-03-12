<script lang="ts">
    import type { ReviewRequests } from "../grid/review.svelte";
    import type Review from "../grid/review.svelte";

    const { review }: { review: Review } = $props()

    let showDropdown: "options" | "moreOptions" | "none" = $state("none")

    const onclick = (option: ReviewRequests) => {
        review.review(option)
        showDropdown = "none"
    }
</script>

<ul>
    <li class="left-align">
        <a class="image-link" href="/"> 
            <img src="/svg/favicon.svg" alt="adamdinhvu.com logo"/> 
        </a>
    </li>
    <li class="dropdown menu-item" class:active={showDropdown !== "none"}>
        <button onclick={() => showDropdown = (showDropdown === "none") ? "options" : "none"} class="dropdown-label label">Options</button>
        <div class="dropdown-content" class:options={showDropdown === "options"}>
            <button onclick={() => onclick("checksquare")}>Check Square</button>
            <button onclick={() => onclick("checkword")}>Check Word</button>
            <button onclick={() => onclick("checkall")}>Check All</button>
            <button onclick={() => showDropdown = "moreOptions"}><b>More...</b></button>
        </div>
        <div class="dropdown-content" class:more-options={showDropdown === "moreOptions"}>
            <button onclick={() => onclick("revealsquare")}>Reveal Square</button>
            <button onclick={() => onclick("revealword")}>Reveal Word</button>
            <button onclick={() => onclick("revealall")}>Reveal All</button>
            <button onclick={() => onclick("reset")}>Reset Puzzle</button>
            <button onclick={() => showDropdown = "options"}><b>Back...</b></button>
        </div>
    </li>
    <li >
        <a class="label" href="https://crossword.blue">
            Archive
        </a>
    </li>
</ul>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #18de74;
        height: 3rem;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    li {
        float: right;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left-align {
        float: left;
        background-color: white;

    }

    .image-link {
        height: 100%;
    }

    img {
        height: 100%;
        
    }

    a {
        color:black;
    }

    li .label, .dropdown-label {
        text-align: center;
        padding: 0 16px;
        text-decoration: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li a:hover, .dropdown:hover .dropdown-label, .active .dropdown-label {
        background-color: white;
    }

    
    li.dropdown {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        right: 0px;
    }

    .dropdown-content button {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .options, .active .options,
    .more-options, .active .more-options {
        display: block;
    }
</style>