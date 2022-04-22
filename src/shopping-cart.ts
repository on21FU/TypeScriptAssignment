import { darkBackground, shoppingCart } from "./dom-utils";

export function showShoppingCart(){
    shoppingCart.style.right = "0";
    darkBackground.style.display = "block";
}
export function closeShoppingCart(){
    shoppingCart.style.right = "-600px";
    darkBackground.style.display = "none";
}