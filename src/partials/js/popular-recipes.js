import axios from 'axios';

const popiRecipesUrl = "https://tasty-treats-backend.p.goit.global/api/recipes/popular";

async function getPopularRecipesData(){
    try {
        const response = await axios.get(popiRecipesUrl)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}

const  popularRecipesData = await getPopularRecipesData();
const popularRecipesUL = document.querySelector(".popular-recipes-ul")

const popularRecipesMarkup = popularRecipesData.map(
    ({ preview, title, description }) =>
        `<li>
                <!-- MAP ELEMENT START -->
                <div class="pop-recipe-unit-div">
                    <img class="pop-recipe-img" src="${preview}" alt="${title}" width="64" height="64"/>
                    <div class="pop-recipe-header-n-text-div">
                        <h3 class="popular-recipe-title">${title}</h3>
                        <p class="popular-recipe-text">${description}</p>
                    </div>
                </div>
                <!-- MAP ELEMENT END -->
            </li>     `
    ).join("");
  
popularRecipesUL.innerHTML = popularRecipesMarkup;