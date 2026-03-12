<script>
    export let backgroundcolor = "white"
    export let color = "blue"
    export let href= "/"
</script>


<div class="box">
    <a href={href}>
        <div class="star"
            style={`background-color: ${backgroundcolor}; color: ${color}`}>
            <div class="text">
                <slot/>
            </div>
        </div>
    </a>
</div>



<style>
    .text {
        width: 6ch;
        text-align: center;
    }

    a {
        text-decoration: none;
    }
   
    .star {
        
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        aspect-ratio: 1;
        clip-path: polygon(99.96% 52%,72.74% 57.68%,90.95% 78.69%,64.98% 68.75%,68.94% 96.28%,52.46% 73.87%,40.91% 99.17%,39.17% 71.42%,15.77% 86.45%,29.31% 62.16%,1.5% 62.16%,26.02% 49.04%,2.63% 34.01%,30.34% 36.23%,18.79% 10.93%,40.91% 27.79%,44.87% 0.26%,54.36% 26.4%,72.57% 5.39%,66.43% 32.5%,93.11% 24.67%,73.28% 44.16%);
    }

    .box {
        
        clip-path: circle(50% at 50% 50%);
        transition: transform .7s ease-in-out;
    }
    .box:hover {
        transform: rotate(360deg);
    }
</style>