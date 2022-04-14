import {  } from "./dom-utils";
import { allArticles, loadArticles } from "./manage-data"

loadArticles().then(main);

function main(){
    console.log(allArticles);

}
