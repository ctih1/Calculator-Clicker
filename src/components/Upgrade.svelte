<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let price: string | Number | undefined = undefined;
    export let type: string = "gray";
    const dispatch = createEventDispatcher();
    let button: HTMLButtonElement;

    export function getButton():HTMLButtonElement {
        return button;
    }
    console.log("Finished loading Upgrade.svelte");
</script>

<button bind:this={button} class="{type}" on:click={()=>dispatch("upgraded")}>
    <span class="name"><slot></slot></span>
    {#if price !== undefined}
        <span class="price">{price}</span>
    {/if}
</button>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    button {
        aspect-ratio: 1;
        scale: 1;
        border-radius: 1.5em;
        border-width: 0;
        color: white;
        transition: scale 0.1s;
        min-width: 110px;
        min-height: 110px;
    }

    .gray {
        background: radial-gradient(rgb(15, 14, 14),rgb(68, 68, 68)) !important;
    }

    .green {
        background: radial-gradient(rgb(94, 203, 94),rgb(99, 140, 99)) !important;
    }

    .red {
        background: radial-gradient(rgb(203, 94, 94),rgb(140, 99, 99)) !important;
        /**Wip*/
    }

    button:active {
        scale: 0.98;
    }

    .name {
        font-family: "Fira Sans", "Ubuntu", "Rubik", "Inter", "Lato", sans-serif;
        font-size: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
        font-size: max(3em, 1em + 2cqi);
    }
    .price {
        font-size: 2em;
    }
</style>