import { innerShopContainer } from "./dom-utils";

export let allArticles: Array<any>; // wenn ich <object> mache, kennt TS den Inhalt vom Object nicht

export function loadArticles(){
    return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => allArticles = data)
    .catch(error => console.error(error));
}
export function removeArticles(){
    for(let i = innerShopContainer.childNodes.length-1; i>=1; i--){      // shopContainer ist da wo alle Artikel-Divs rein kommen // childNodes ist ein Array mit allen Kinderelementen eines Elements
        innerShopContainer.removeChild(innerShopContainer.childNodes[i]);     // löscht alle Kinderelemente (Einträge aus childNodes, außer [0], weil das ein Standartchild ist was nicht gelöscht werden sollte)
    }
}