import { upgrade } from "./template"
console.log("Loaded multiplier.ts");

export let Multiplier = new upgrade( 
    10, // starting price
    1.25, // price modifier,
    0.25
);