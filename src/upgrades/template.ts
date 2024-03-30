
export class upgrade {
    
    startingPrice:number;
    priceModifier:number;
    price:number;
    level:number;
    upgradeAmount:number;
    upgradeFunction:Function|undefined;

    constructor(startingPrice:number,priceModifier:number, upgradeAmount: number, upgradeFunction: Function | undefined = undefined) {
        this.startingPrice=startingPrice;
        this.priceModifier=priceModifier;
        this.price=this.startingPrice;
        this.level=1;
        this.upgradeFunction=upgradeFunction;
        this.upgradeAmount=upgradeAmount;
    }
    upgrade(score:number):boolean {
        if(score>=this.price) {
            this.level+=this.upgradeAmount
            return true;
        }
        return false;
    }
    increasePrice():void {
        this.price=Math.round(this.price*this.priceModifier);
    }
    customFunction():void {
        if(this.upgradeFunction!==undefined) {
            this.upgradeFunction();
        }
    }
}