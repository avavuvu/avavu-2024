<script lang="ts">
    export let fill: string
    export let textLength: string = "85%"
    export let text: string
</script>

<svg width="100%" viewBox="0 0 200 25" xmlns="http://www.w3.org/2000/svg">
    <style>
        .header {
            font-weight: bold;
            text-align: center;
        }
    </style>
    
    <text class="header"
        y="75%"
        x="50%"
        text-anchor="middle"
        textLength={textLength}
        fill={fill}>

        {text}
    </text>
</svg>