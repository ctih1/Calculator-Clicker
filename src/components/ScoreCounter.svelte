<script lang="ts">
    export let score: number;
    let numbers: Array<number> = [];
    function scoreChanged(score:number):void {
        numbers = Math.round(score).toString().split("").map(Number);
        console.log(numbers);
    }
    $: scoreChanged(score);
    console.log("Finished loading ScoreCounter.svelte");

</script>

<div class="holder">
    <div class="score-holder">
        {#each numbers as number, index (index)}
            <h1 class="score-text">{number}</h1>
        {/each}
    </div>
    <h1 class="score-shadow">888888888888888888888888</h1>
</div>


<style>
    @font-face {
        font-family: "Digital-7";
        src: url("../fonts/digital-7.ttf");
    }

    h1 {
        font-family: "Digital-7";
        font-size: 6rem;
        line-height: 1;
    }

    .holder {
        background: radial-gradient(rgb(135, 145, 146),rgb(135, 146, 135));
        width: 100%;
        height: fit-content;
    }

    .score-text {
        margin-left: auto;
        margin-right: auto;
        text-align: end;
    }

    .score-holder {
        display: flex;
        width: fit-content;
        margin-left: auto;
        margin-right: 0;
        flex-direction: row;
        text-align: end;
    }

    .score-holder h1 {
        margin: 0px;
        width: 3rem;
    }
    
    .score-shadow {
        position: absolute;
        top: 0;
        opacity: 0.025;
        width: 100%;
        margin: 0px;
        text-align: end;
    }
</style>