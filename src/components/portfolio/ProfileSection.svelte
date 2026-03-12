<script lang="ts">
    import Contact from "./Contact.svelte";
</script>

<section id="profile">
    <div>
        <div class="container">
            <div class="profile-pic grid-item">
                <div class="profile-pic-square">
                    <img src="/images/profile/ava.jpg" alt="Ava Dinh-Vu with a bucket of popcorn outside the Melbourne Museum"/>
                </div>
            </div>
            <div class="bio grid-item">
                <div class="bio-text profile-text">
                    <div>
                        <p>
                            My name is Ava Dinh-Vu, I'm a Melbourne based designer. My primary discipline is <a href="https://www.instagram.com/dinhvudesigns/">graphic design</a>, but I love all art that is unapologetic.  My skills are numerous and ever expanding. I have worked <a href="#sound">extensively in sound</a>, with my work displayed in Melbourne’s Capitol Theatre. I have also collaborated on scores with animators, and released music as Anemia. 
                        </p>
                        <p>
                            If what you make is unique, <a href="#contact">then I’d love to get in touch.</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="tech grid-item">
                <div class="tech-text profile-text">
                    <div>
                        <p>
                            This website was coded by me using Svelte and AstroJS. It has been an incredibly rewarding experience coding something like this from scratch, and I have learned so much about the internet and web design. I really believe that as the internet has become more powerful, the barrier to entry has become very high. I really hope that tools like Svelte can make the internet easier to develop for, and hopefully allow people to create websites that are fun again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Contact/>
</section>

<style>

    a {
        color: lime;
    }

    .grid-item { 
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profile-pic-square {
        transform: skew(10deg, 10deg);
        background-color: #ff1493;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        padding: 1rem;
    }

    .profile-text {
        transform: skew(-10deg, -10deg);
        background-color: blue;
        color: white;
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: min(100%, 65ch);
    }

    .profile-text div {
        padding: 2rem 0 ;
        transform: skew(10deg, 10deg);
        max-width: min(70%, 65ch);
    }

    .tech-text {
        background-color: rgb(187, 73, 143);
        transform: skew(5deg, 5deg);
    }

    .tech-text div {
        transform: skew(-5deg, -5deg);
    }
    
    section {
        background-color: lavender;
    }

    section > div {
        display: flex;
        justify-content: center;
    }

    img {
        width: 400px;
    }

    .container {
        width: min(100%, 1500px);

        display: grid; 
        grid-template-columns: 50% 50%; 
        grid-template-rows: 3fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "profile-pic bio"
            "tech tech"; 
    }
    .tech { grid-area: tech; }
    .profile-pic { grid-area: profile-pic; }
    .bio { grid-area: bio; }

    @media (max-width: 1000px) {
        .container {
            display: block;
        }
    }
</style>