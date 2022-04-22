
import { innerShopContainer, shopContainerHeading } from "./dom-utils";
import { removeArticles } from "./manage-data";

export let selected = "all";

export function updateSelected(value: string){
    selected = value;
    updateShopHeading(value);
}

export function sortArticle(vaule: String){
    switch (vaule){
        case "any":            
            break;
        case "price down":
            let arrayUnsortedDown = getAllPrices();
            let arraySortedDown = sortArray(arrayUnsortedDown, "down");
            
            let newChildNodesDown = sortAllChildNodes(arraySortedDown);           
            removeArticles();
            addNewChilds(newChildNodesDown);

            break;
        case "price up":
            let arrayUnsortedUp = getAllPrices();
            let arraySortedUp = sortArray(arrayUnsortedUp, "up");

            let newChildNodesUp = sortAllChildNodes(arraySortedUp); 
            removeArticles();
            addNewChilds(newChildNodesUp);

            break;
    }    
}
function getAllPrices(){
    let allPrices = [];
    for(let i = innerShopContainer.childNodes.length-1; i>=1; i--){   
        let price = innerShopContainer.childNodes[i].childNodes[5].childNodes[1].textContent;
        allPrices.push(price);
    }
    let allPricesAsNumber = [];
    for(let price of allPrices){
        let priceWithDot = price!.replace(",", ".");
        allPricesAsNumber.push(Number.parseFloat(priceWithDot));
    }
    return allPricesAsNumber
}
function sortArray(array: Number[], direction: string){
    let newArray = [];
    while(array.length != 0){
        let maxormin = array[0];
        for (let number of array) {     // findet die größte Zahl
            switch (direction){
                case "down":
                    if (number >= maxormin) {
                        maxormin = number;
                    }
                    break;
                case "up":
                    if (number <= maxormin) {
                        maxormin = number;
                    }
                    break;
            }            
        }
        newArray.push(maxormin);             // fügt gefundene max zu newArray
        array.splice(array.indexOf(maxormin), 1);    // löscht dieses max aus altem Array
    }                                           // im nächst Schleifendurchgang gibt es ein anderes Max 
    return newArray;
}
function sortAllChildNodes(arraySorted: Array<Number>){
            let newChildNodes = [];            
            for(let arraySortedItems of arraySorted){
                for(let i = innerShopContainer.childNodes.length-1; i>=1; i--){
                    let comparedPrice = innerShopContainer.childNodes[i].childNodes[5].childNodes[1].textContent;
                    let comparedPriceWithDot = comparedPrice!.replace(",", ".");
                    let comparedPriceFloat = Number.parseFloat(comparedPriceWithDot);
                    if(arraySortedItems == comparedPriceFloat){
                        newChildNodes.push(innerShopContainer.childNodes[i]);
                    }
                }
            }
            return newChildNodes
}
function addNewChilds(newChildNodes: Array<any>){
    for(let newChild of newChildNodes){
        innerShopContainer.appendChild(newChild);
    }
}
function updateShopHeading(value: string){
    let newHeading: string;
    switch (value){
        case "men's clothing":
            newHeading = "Herrenklamotten";
            break;
        case "women's clothing":
            newHeading = "Damenklamotten";
            break;
        case "jewelery":
            newHeading = "Schmuck";
            break;
        case "electronics":
            newHeading = "Elektronik";
            break;
        default:
            newHeading = "Ergebnisse";
            break;
    }
    shopContainerHeading.innerText = newHeading;
}