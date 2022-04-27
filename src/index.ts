import {
  categorySelector,
  closeShoppingCartButton,
  innerShopContainer,
  shoppingCartIcon,
  sortBySelector,
} from "./dom-utils";
import { selected, updateSelected, sortArticle } from "./filter-options";
import { allArticles, loadArticles, removeArticles } from "./manage-data";
import { closeShoppingCart, showShoppingCart } from "./shopping-cart";
import { addEventListenersToCartButtons, formatePrice } from "./side-functions";

loadArticles().then(main);

function main() {
  createArticles();
  function createArticles() {
    removeArticles();
    for (let article of allArticles) {
      if (selected === "all" || selected === article.category) {
        const newArticle = document.createElement("div");
        newArticle.classList.add("article");
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
  }
  categorySelector.addEventListener("change", () =>
    updateSelected(categorySelector.value)
  );
  categorySelector.addEventListener("change", createArticles);
  categorySelector.addEventListener("change", () =>
    sortArticle(sortBySelector.value)
  );
  sortBySelector.addEventListener("change", () =>
    sortArticle(sortBySelector.value)
  );
  shoppingCartIcon.addEventListener("click", showShoppingCart);
  closeShoppingCartButton.addEventListener("click", closeShoppingCart);
}
