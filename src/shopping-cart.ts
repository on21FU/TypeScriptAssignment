import { noScrollContainer, darkBackground, shoppingBagCointainer, shoppingCartSidebar, innerShopContainer, shoppingBagAmount } from "./dom-utils";
import { allArticles } from "./manage-data";
import { formatePrice } from "./side-functions";

let shoppingCart: Array<any> = [];

export function showShoppingCart(){
    shoppingCartSidebar.style.right = "0";
    darkBackground.style.display = "block";
    noScrollContainer.classList.add('stop-scrolling');
}

export function closeShoppingCart(){
    shoppingCartSidebar.style.right = "-600px";
    darkBackground.style.display = "none";
    noScrollContainer.classList.remove('stop-scrolling');
}

export function addToCart(event: any){
    let articleID = Number.parseInt(getArticleID(event));
    let article = getArticle(articleID);
    shoppingCart.push(article);    
    buildCartArticle();
    event.target.innerHTML = "Im Warenkorb";
    updateShoppingCartAmount();
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
                <p id="articleID">${article.id}<p>
                <p>${article.title}</p></br>
                <p id="price">${formatePrice(article.price)} €</p>
            </div>
            <div class="cartArticle-removebtn">
                <p>X</p>
            </div>
        `;
        shoppingBagCointainer.appendChild(newCartArticle);

        addEventListenersToRemoveBtn()

        const divider = document.createElement('div');
        divider.classList.add('divider');
        shoppingBagCointainer.appendChild(divider);
}
function addEventListenersToRemoveBtn(){
    const cartArticleRemoveBtns = document.querySelectorAll('.cartArticle-removebtn') as NodeListOf<HTMLDivElement>;
    cartArticleRemoveBtns[cartArticleRemoveBtns.length-1].addEventListener('click', function(event){
        removeArticleFromCart(event);
    });
}
function removeArticleFromCart(event: any){
    event.target.parentElement.nextElementSibling.remove();     // entfernt den letzten Divider vom Warenkorb
    event.target.parentElement.remove();    // entfernt Artikel von Warenkorb
    removeArticleFromCartArray(event.target.parentElement.childNodes[3].childNodes[1].innerHTML);
    updateShoppingCartAmount();
}
function removeArticleFromCartArray(articleID: string){
    for(let cartArticle of shoppingCart){
        if(cartArticle.id === Number.parseInt(articleID)){
            shoppingCart.splice(shoppingCart.indexOf(cartArticle), 1);
        }
    }
    resetCartButton(articleID);
}
function resetCartButton(articleID: string){
    for(let i = innerShopContainer.childNodes.length-1; i>=1; i--){   
        let actualArticleID = innerShopContainer.childNodes[i].childNodes[3].childNodes[1].textContent;
        if(actualArticleID === articleID){
            innerShopContainer.childNodes[i].childNodes[5].childNodes[3].textContent = "In den Warenkorb";
        }
    }
}
function updateShoppingCartAmount(){
    let amount = 0;
    for(let article of shoppingCart){
        amount += article.price;
    }
    shoppingBagAmount.innerText = formatePrice(amount) + " €";
}