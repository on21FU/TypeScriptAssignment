import { allArticles } from "./manage-data";

let shoppingCart: Object[] = [];

export function addToCart(event: any){
    let articleID = Number.parseInt(getArticleID(event));
    let article = getArticle(articleID);
    shoppingCart.push(article);    
    console.log(shoppingCart);
}


function getArticleID(event: any){
    return (event.target.partentElement.previousElementSibling.childNodes[1].innerHTML) // gibt die ID vom jeweiligen Produkt
}
function getArticle(articleID: Number){
    for (let article of allArticles){
        if(article.id === articleID){
            return article
        }
    }
}