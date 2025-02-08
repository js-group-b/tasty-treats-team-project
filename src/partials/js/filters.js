import axios from 'axios';

const allIngredientsURL = "https://tasty-treats-backend.p.goit.global/api/ingredients";
const response = await axios.get(allIngredientsURL);
const ingredientUL = document.getElementById("ingredient-options");
ingredientUL.style.display = "flex";
for (let i=0 ; i<response.data.length ; i++){
    const markupLi = `<li class=filter-hidden-dropdown-li-ingredient>${response.data[i].name}</li>`
    ingredientUL.insertAdjacentHTML("beforeend", markupLi);
}


