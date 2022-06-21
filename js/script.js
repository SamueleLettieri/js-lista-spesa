const shoppingList = [
    "Latte",
    "Lova",
    "Farina",
    "Cacao",
    "Mele",
    "Banane"
];

let boxList = document.querySelector("ul");


let i = 0

while (i < shoppingList.length){
    let newLi = document.createElement("li");
    newLi.innerHTML = shoppingList[i]
    boxList.append(newLi);
    i++
}