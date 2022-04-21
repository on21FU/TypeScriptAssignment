import { cartButtons } from "./dom-utils";
import { addToCart } from "./shopping-bag";

export function formatePrice(price: number){
    let priceSplit = price.toString().split(".");    
    if(priceSplit[1] != null && priceSplit[1].length == 1) {
        priceSplit[1] = priceSplit[1] + "0";
    }
    if(priceSplit[1] == null){
        priceSplit.push("-");
    }
    return priceSplit[0] + "," + priceSplit[1]
}

export function addEventListenersToCartButtons(){
    for(let button of cartButtons){
        button.addEventListener("click", function(event){
            addToCart(event);
        });
    }
}