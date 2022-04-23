import { body, darkBackground, shoppingCart } from "./dom-utils";

export function showShoppingCart(){
    shoppingCart.style.right = "0";
    darkBackground.style.display = "block";
    body.classList.add('stop-scrolling');
}
export function closeShoppingCart(){
    shoppingCart.style.right = "-600px";
    darkBackground.style.display = "none";
    body.classList.remove('stop-scrolling');
}