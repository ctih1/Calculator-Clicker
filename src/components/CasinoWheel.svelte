<script lang="ts">
    import { onMount } from "svelte";
    var rotateModifier: number = 360*10;
    let spinner: HTMLDivElement;
    var selectedRotation = 180;

    function spinWheel():void {
        var rotation:number = selectedRotation + Math.random()*rotateModifier*10;
        var deg:number = Math.round(rotation/360)*360; // snap number to nearest 360, so the target value is always hit
        spinner.style.transform = `rotate(${deg}deg)`;
    }
</script>

<div bind:this={spinner} class="spinner">
    <button on:click={spinWheel}>Spin!</button>
</div>  

<style>
    .spinner {
        top:0;
        margin-left: auto;
        margin-right: auto;
        width: 50vw;
        aspect-ratio: 1;
        height: auto;
        transition: transform 20s cubic-bezier(0,1,0,1);
        background: radial-gradient(red,blue);
    }
</style>