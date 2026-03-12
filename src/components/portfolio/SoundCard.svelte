<script lang="ts">
    export let videoLink: string
    export let year: string

    export let title: string
    export let info: string
</script>

<div class="card">
    <a href={videoLink}>
        <div class="container">
            <div class="title">
                <h2>
                    <span>{title}</span>
                </h2>
            </div>
            <div class="info">
                <p class="year">
                    <span>{info} | {year}</span>
                </p>
                <hr>
                
            </div>
        </div>
    </a>
</div>

<style>
    a {
        all: unset;
        cursor:pointer;
        
    }

    * {
        color: pink;
    }

    hr {
        border: 1px solid pink;
    }

    .year {
        text-align: right;
    }

    .card {
        width: min(90%, 1000px)
    }

    .container {  
        border: 1px pink solid;
        border-radius: 0 10rem 10rem 10rem;
        padding: 1rem;
        
        display: grid; 
        grid-template-columns: 5% 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "thumbnail title title"
            "thumbnail info info"; 
    }

    .title { 
        grid-area: title; 
        text-align: center;
    }

    .info { grid-area: info; }

</style>