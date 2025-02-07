import axios from 'axios';

const baseUrl4recipes = 'https://tasty-treats-backend.p.goit.global/api/recipes?';
export const searchParams = new URLSearchParams({
    title: '',
    category: '',
    area: '',
    ingredient: '',
    time: '',
    page: 1,
    limit:9,
  });

export async function fetchAndMapCardsData(){
   try {
        const response = await axios.get(baseUrl4recipes,{ params: searchParams })
        const  cardsData = response.data.results;
        const cardsSectionUL = document.querySelector(".cards-section-ul");
        const cardsSectionMarkup = cardsData.map(
           ({ preview, title, description, rating, _id}) =>
               `<li class="cards-section-card-items">
                       <div class="cards-section-card-item-inner-div">
                           <button class="cards-section-favorites-button">
                               <img src="../img/heart-filled.png" alt="hearth-shaped-icon" />
                           </button>
                           <img class="cards-section-card-image" src="${preview}" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${ title.length < 20 ? title.toUpperCase() : title.toUpperCase().substring(0, 20) + "..."}</h3>
                               <p class="cards-section-card-content-p">${description.substring(0,57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                       <p class="cards-section-card-bottom-div-rating-p">${rating}</p>                                
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star-empty.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star-empty.png" alt="star" />
                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${_id}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>`
           ).join("");
        cardsSectionUL.innerHTML = cardsSectionMarkup;

    }
    catch(error){
        console.log(error)
    }
}

await fetchAndMapCardsData();


// adding event listener to "see recipes" button and getting the data for that particular recipe

const seeRecipeButtons = document.getElementsByClassName("cards-section-see-recipe-button");


for (let i = 0 ; i < seeRecipeButtons.length ; i++){
    seeRecipeButtons[i].addEventListener('click', handleClickSeeRecipesButton);
}

async function handleClickSeeRecipesButton(event){
    console.log("tıklanan tarifin id'si:",event.target.id);
    let getRecipeByIdURL = `https://tasty-treats-backend.p.goit.global/api/recipes/${event.target.id}`;
    const responseRecipe = await axios.get(getRecipeByIdURL);
    console.log("tıklanan tarife ait modal'da kullanılacak data:", responseRecipe.data);
}