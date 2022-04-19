import { allArticles } from "./manage-data";

let shoppingCart: Array<any>;

export function addToCart(event: any){
    let articleTitel = getArticleTitle(event);
    let article = getArticle(articleTitel);
    shoppingCart.push(article);
    console.log(shoppingCart);
}



function getArticleTitle(event: any){
    let clickedButton = event.target;
    return (clickedButton.parentElement.childNodes[1].innerText) // gibt den Titel vom jeweiligen Produkt
}
function getArticle(articleTitel: String){
    for (let articles of allArticles){
        if(articles.title == articleTitel){
            return articles
        }
    }
}