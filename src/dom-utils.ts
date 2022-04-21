export const innerShopContainer = document.getElementById('inner_shop_container') as HTMLDivElement;
export const cartButtons = document.getElementsByClassName('cartButton');

export function formatePrice(price: number){
    let priceWithComma = price.toString().replace(".", ",");
    let priceSplit = priceWithComma.split(",");    
    if(priceSplit[1] != null && priceSplit[1].length == 1) {
        priceSplit[1] = priceSplit[1] + "0";
    }
    if(priceSplit[1] == null){
        priceSplit.push("-");
    }
    return priceSplit[0] + "," + priceSplit[1]
}

