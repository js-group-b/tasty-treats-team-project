import axios from 'axios';
import {MakeSeeRecipeModalVisible} from './see-recipes-modal'

const popiRecipesUrl = "https://tasty-treats-backend.p.goit.global/api/recipes/popular";

async function getPopularRecipesData(){
    try {
        const response = await axios.get(popiRecipesUrl)
        const  popularRecipesData = response.data
        const popularRecipesUL = document.querySelector(".popular-recipes-ul")
        const popularRecipesMarkup = popularRecipesData.map(
            ({ preview, title, description, _id }) =>
                `<li class="popular-recipes-li-element">
                        <!-- MAP ELEMENT START -->
                        <div class="pop-recipe-unit-div">
                            <img id="${_id}" class="pop-recipe-img" src="${preview}" alt="${title}"/>
                            <div class="pop-recipe-header-n-text-div">
                                <h3 class="popular-recipe-title">${title.toUpperCase()}</h3>
                                <p class="popular-recipe-text">${description.substring(0,77)}...</p>
                            </div>
                        </div>
                        <!-- MAP ELEMENT END -->
                    </li>     `
            ).join("");
        popularRecipesUL.innerHTML = popularRecipesMarkup;

    }
    catch(error){
        console.log(error)
    }
}

await getPopularRecipesData();

//adding event listener to popular recipes images and getting the data for that particular recipe

const popularRecipesImg = document.getElementsByClassName("pop-recipe-img");

for (let i = 0 ; i < popularRecipesImg.length ; i++){
    popularRecipesImg[i].addEventListener('click', handleClickSeeRecipesButton);
}


async function handleClickSeeRecipesButton(event){
    console.log("tıklanan tarifin id'si:",event.target.id);
    let getRecipeByIdURL = `https://tasty-treats-backend.p.goit.global/api/recipes/${event.target.id}`;
    const responseRecipe = await axios.get(getRecipeByIdURL);
    console.log("tıklanan tarife ait modal'da kullanılacak data:", responseRecipe.data);
    MakeSeeRecipeModalVisible();
}