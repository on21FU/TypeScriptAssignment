export let allArticles: Array<object>;

export function loadArticles(){
    return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => allArticles = data)
    .catch(error => console.error(error));
}
