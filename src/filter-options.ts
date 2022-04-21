export let selected = "all";

export function updateSelected(value: string){
    selected = value;
    console.log(selected);
}