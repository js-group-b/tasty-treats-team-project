import axios from 'axios';

const allIngredientsURL = "https://tasty-treats-backend.p.goit.global/api/ingredients";
const response = await axios.get(allIngredientsURL);
const ingredientUL = document.getElementById("ingredient-options");
ingredientUL.style.display = "flex";
let listOfAllIngredients = [];
for (let i=0 ; i<response.data.length ; i++){
    listOfAllIngredients.push(response.data[i].name)
    const markupLi = `<li class=filter-hidden-dropdown-li-ingredient>${response.data[i].name}</li>`
    ingredientUL.insertAdjacentHTML("beforeend", markupLi);
}
console.log("bütün içeriklerin listesi:", listOfAllIngredients);


