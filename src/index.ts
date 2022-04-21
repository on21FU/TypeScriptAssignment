import { innerShopContainer, cartButtons } from "./dom-utils";
import { allArticles, loadArticles } from "./manage-data";
import { addToCart } from "./shopping-bag";

loadArticles().then(main);

function main(){
    createArticles();
    function createArticles(){
        for(let article of allArticles){
        const newArticle = document.createElement('div');
        newArticle.classList.add('article');
        newArticle.innerHTML = `
            <div class="article_picture">
                <img src="${article.image}">
            </div>
            <div class="article_content">
                <p id="articleID">${article.id}</p>
                <p>${article.title}</p>
            </div>
            <div class="article_buyInformation">
                <p id="price">${article.price} €</p>
                <button class="cartButton">In den Warenkorb</button>
            </div>            
        `;
        innerShopContainer.appendChild(newArticle);
        }
        for(let button of cartButtons){
            button.addEventListener("click", function(event){
                addToCart(event);
            });
        }
    }

    

}
