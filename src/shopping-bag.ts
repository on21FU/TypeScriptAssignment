import { shoppingBagCointainer } from "./dom-utils";
import { allArticles } from "./manage-data";

let shoppingCart: Object[] = [];

export function addToCart(event: any){
    let articleID = Number.parseInt(getArticleID(event));
    let article = getArticle(articleID);
    shoppingCart.push(article);    
    buildCartArticle();
}


function getArticleID(event: any){
    return (event.target.parentElement.previousElementSibling.childNodes[1].innerHTML) // gibt die ID vom jeweiligen Produkt
}
function getArticle(articleID: Number){
    for (let article of allArticles){
        if(article.id === articleID){
            return article
        }
    }
}
function buildCartArticle(){
    if(shoppingBagCointainer.childNodes[1].nodeName === "P"){
        shoppingBagCointainer.childNodes[1].remove();
    }
    
}