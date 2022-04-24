import { shoppingBagCointainer } from "./dom-utils";
import { allArticles } from "./manage-data";
import { formatePrice } from "./side-functions";

let shoppingCart: Array<any> = [];

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
        const article = shoppingCart[shoppingCart.length-1];
    
        const newCartArticle = document.createElement('div');
        newCartArticle.classList.add('cartArticle');
        newCartArticle.innerHTML = `
            <div class="cartArticle-img">
            <img src="${article.image}">
            </div>
            <div class="cartArticle-content">
                <p>${article.title}</p></br>
                <p id="price">${formatePrice(article.price)} €</p>
            </div>
            <div class="cartArticle-removebtn">
                <p>X</p>
            </div>
        `;
        shoppingBagCointainer.appendChild(newCartArticle);

        const divider = document.createElement('div');
        divider.classList.add('divider');
        shoppingBagCointainer.appendChild(divider);
    
    
}