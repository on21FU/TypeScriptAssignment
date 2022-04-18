import { innerShopContainer } from "./dom-utils";
import { allArticles, loadArticles } from "./manage-data"

loadArticles().then(main);

function main(){
    
    for(let article of allArticles){
        const newArticle = document.createElement('div');
        newArticle.classList.add('article');
        newArticle.innerHTML = `
            <div class="article_picture">
                <img src="${article.image}">
            </div>
            <div class="article_content">
                <p>${article.title}</p>
                <p id="price">${article.price} €</p>
               <button>In den Warenkorb</button>
            </div>
        `;
        innerShopContainer.appendChild(newArticle);
    }

}
