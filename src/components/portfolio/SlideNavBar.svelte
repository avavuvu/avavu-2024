<script lang="ts">
    import {onMount} from "svelte"

    let sidebar: HTMLElement

    const scrollThreshold = 200;

    const slideInNav = () => {
        if (window.scrollY >= scrollThreshold) {
            //Sidebar
            sidebar.style.left = "10px"

            return;
        } 

        //Magic number
        sidebar.style.left = "-200px"
    }

      // Define your list items as an array of strings
    let items = [
        { href: "#profile", text: "me" },
        { href: "#graphic-design", text: "graphic design" },
        { href: "#youtube", text: "youtube" },
        { href: "#sound-design", text: "sound design" },
        { href: "#music", text: "music" }
    ]

</script>

<svelte:window on:scroll={slideInNav}/>

<nav bind:this={sidebar}>
    <ul>
        {#each items as listitem}
            <li style={`transform:rotate(${Math.random() * 20 - 20}deg)`}><a href={listitem.href}>{listitem.text}</a></li>
        {/each}
    </ul>
</nav>

<style>

    nav {
        position: fixed;

        left: -200px;
        transition: left 0.3s ease; /* TRANSITION FOR SIDEBAR SLIDE IN */
        
        bottom: 10px;
        z-index: 200;
        background-color: white;
        padding: 1rem;
    }

    nav ul {
        all: unset;

        list-style-type: none;
    }

    nav a {
        color: blue;
    }

</style>