import { categorySelector, filterApplyButton, innerShopContainer } from "./dom-utils";
import { selected, updateSelected } from "./filter-options";
import { allArticles, loadArticles } from "./manage-data";
import { addEventListenersToCartButtons, formatePrice } from "./side-functions";

loadArticles().then(main);

function main(){
    createArticles();
    function createArticles(){
        for(let article of allArticles){
            if(selected === "all" || selected === article.category){
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
                        <p id="price">${formatePrice(article.price)} €</p>
                        <button class="cartButton">In den Warenkorb</button>
                    </div>            
                `;
                innerShopContainer.appendChild(newArticle);
                }
            }        
        addEventListenersToCartButtons();
        categorySelector.addEventListener('change', () => updateSelected(categorySelector.value));
        filterApplyButton.addEventListener('click', createArticles);
    }

    

}
