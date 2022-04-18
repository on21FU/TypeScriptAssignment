export let allArticles: Array<any>; // wenn ich <object> mache, kennt TS den Inhalt vom Object nicht

export function loadArticles(){
    return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => allArticles = data)
    .catch(error => console.error(error));
}
