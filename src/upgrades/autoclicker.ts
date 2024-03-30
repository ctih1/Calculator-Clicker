import { upgrade } from "./template"

let button: HTMLButtonElement | undefined;
console.log("Loaded autoclicker.ts");
export function linkButton(button_: HTMLButtonElement) {
    button = button_;
}

export let Autoclicker = new upgrade( 
    5, // starting price
    1.125, // price modifier,
    1,
    newClicker
);

function newClicker() {
    console.log("RUnning new clicker");
    setInterval(function(){
        button?.click();
    },1000);
}