import axios from 'axios';

const baseUrl4recipes = 'https://tasty-treats-backend.p.goit.global/api/recipes?';
const searchParams = new URLSearchParams({
    title: '',
    category: '',
    area: '',
    ingredient: '',
    time: '',
    page: 1,
    limit:9,
  });


async function getRecipesCardData(){
   try {
       const response = await axios.get(baseUrl4recipes,{ params: searchParams })
       return response.data.results;
    }
    catch(error){
        console.log(error)
    }
}

const  cardsData = await getRecipesCardData();
const cardsSectionUL = document.querySelector(".cards-section-ul")

const cardsSectionMarkup = cardsData.map(
    ({ preview, title, description, rating }) =>
        `<li class="cards-section-card-items">
                <div class="cards-section-card-item-inner-div">
                    <button class="cards-section-favorites-button">
                        <img src="../img/heart-filled.png" alt="hearth-shaped-icon" />
                    </button>
                    <img class="cards-section-card-image" src="${preview}" />
                    <div class="cards-section-card-content">
                        <h3 class="cards-section-card-content-title">${title.toUpperCase()}</h3>
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
                                <button class="cards-section-see-recipe-button">See recipe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`
    ).join("");

    cardsSectionUL.innerHTML = cardsSectionMarkup;