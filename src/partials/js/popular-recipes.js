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
        `<li class="popular-recipes-li-element">
                <!-- MAP ELEMENT START -->
                <div class="pop-recipe-unit-div">
                    <img class="pop-recipe-img" src="${preview}" alt="${title}"/>
                    <div class="pop-recipe-header-n-text-div">
                        <h3 class="popular-recipe-title">${title.toUpperCase()}</h3>
                        <p class="popular-recipe-text">${description.substring(0,77)}...</p>
                    </div>
                </div>
                <!-- MAP ELEMENT END -->
            </li>     `
    ).join("");
  
popularRecipesUL.innerHTML = popularRecipesMarkup;


/*
mobile view'da popular categories 2 element dönmeli 4 değil

// Function to update height and width
function isMobileView() {
    let w = window.innerWidth;
    if (w < 768){
        return true;
    }
    return false;
}

// Add event listener for window resize
window.addEventListener('resize', isMobileView);

// Initial update
isMobileView();
*/
