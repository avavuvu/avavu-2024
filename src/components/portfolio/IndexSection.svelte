
<script lang="ts">
    import Logo from "../Logo.svelte";
    import Marquee from "./Marquee.svelte"
    import IndexListItem from "./IndexListItem.svelte"

    const lines = [
        "WELCOME TO AVA'S WEBSITE! I HOPE YOU ENJOY YOUR STAY",
        "THE DOG'S NAME IS SIMON",
        "(˵ ͡~ ͜ʖ ͡°˵)ﾉ⌒♡*:・。.",
        "IT FEATURES THE WORK OF DESIGNER AVA DINH-VU, A TALENTED MELBOURNE BASED VISUAL DESIGNER",
        "HE IS ALSO A SKILLED PROGRAMMER, SOUND DESIGNER, YOUTUBER, MUSICIAN, AND WRITER",
        "THIS WEBSITE WAS CODED BY AVA DINH-VU USING ASTROJS AND SVELTE",
        "༼ ºل͟º ༽"
    ]
</script>

<section class="index">
    <Marquee lines={lines}/>
    
    <div class="logo-container">
        <Logo/>
    </div>
    <div class="links-container">
        <div class="links">
            <div class="list-item"> 
                <IndexListItem backgroundcolor="pink" href="#graphic-design">
                    graphic designer
                </IndexListItem>
            </div>
            <div class="list-item">
                <IndexListItem backgroundcolor="#6495ED" color="white" href="#youtube"> 
                    story teller
                </IndexListItem>
            </div>
            <div class="list-item">
                <IndexListItem backgroundcolor="#9FE2BF" href="#sound-design">
                    sound designer
                </IndexListItem>
            </div>
            <div class="list-item">
                <IndexListItem backgroundcolor="#ff1493" color="white" href="#contact">
                    contact
                </IndexListItem>
            </div>
            <div class="list-item">
                <IndexListItem backgroundcolor="#FFBF00" href="/blog/">
                    blog
                </IndexListItem>
            </div>
            <div class="list-item">
                <IndexListItem backgroundcolor="#CCCCFF" color="blue" href="https://crossword.blue">
                    games
                </IndexListItem>
            </div>
        </div>
    </div>
</section>

<style>

    .links-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .links {
        color: white;
        list-style: none;
        width: min(100%, 600px);
        
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            ". . ."
            ". . ."; 
    }

    .logo-container {
        margin-top: 4rem;
        padding-top: 2rem;
        padding-bottom: 2rem;

        height: 30%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .list-item {
        justify-self: center; 
        align-self: center; 
        width: 100%;
    }

    .index {
        min-height: 100dvh;
        background-color: rgb(0, 123, 255);
    }
</style>