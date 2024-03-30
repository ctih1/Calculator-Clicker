<script lang="ts">
    import Upgrade from "../components/Upgrade.svelte";
    import ScoreCounter from "../components/ScoreCounter.svelte";
    import CasinoWheel from "../components/CasinoWheel.svelte";
    import { Multiplier } from "../upgrades/multiplier";
    import { Autoclicker,linkButton } from "../upgrades/autoclicker";

    export let buttonClicker: Upgrade;
    let score: number = 500_000;
    export function clickButton() {
        score+=1*Multiplier.level;
    }
    $: if(buttonClicker!=undefined){linkButton(buttonClicker.getButton())};
    console.log("Finished loading +page.svelte");
</script>

<ScoreCounter score={score}></ScoreCounter>
<CasinoWheel></CasinoWheel>
<Upgrade bind:this={buttonClicker} on:upgraded={()=>score+=Autoclicker.level*Multiplier.level}>Click</Upgrade>
<div class="game-upgrades">
    <Upgrade on:upgraded={()=>{
        if(Multiplier.upgrade(score)===true) {
            score-=Multiplier.price;
            Multiplier.increasePrice();
            Multiplier.price = Multiplier.price;
        }
        }}
        price={Multiplier.price}€>x{Multiplier.level}
    </Upgrade>
    <Upgrade on:upgraded={()=>{
        if(Autoclicker.upgrade(score)===true) {
            score-=Autoclicker.price;
            Autoclicker.increasePrice();
            Autoclicker.customFunction();
            Autoclicker.price = Autoclicker.price;
        }
    }} price={Autoclicker.price}€>{Autoclicker.level}</Upgrade>
    <Upgrade on:upgraded={()=>{console.log(Multiplier.level, Multiplier.price)}}></Upgrade>
</div>

<style>
    .game-upgrades {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        aspect-ratio: 1/1;
        grid-template-rows: repeat(3, max-content);
        grid-auto-rows: max-content;
        align-items: center;
        grid-gap: 0.5em;
        width: fit-content;
        margin-right: auto;
        margin-left: auto;
    }
</style>