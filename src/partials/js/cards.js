import axios from 'axios';
import { makeSeeRecipeModalVisible } from './see-recipes-modal'
import { set } from 'lodash';

const baseUrl4recipes = 'https://tasty-treats-backend.p.goit.global/api/recipes?';
export const searchParams = new URLSearchParams({
    title: '',
    category: '',
    area: '',
    ingredient: '',
    time: '',
    page: 1,
    limit: 9,
});

export async function fetchAndMapCardsData() {
    try {
        const response = await axios.get(baseUrl4recipes, { params: searchParams })
        const cardsData = await response.data.results;
        const cardsSectionUL = document.querySelector(".cards-section-ul");

        let noResultsMessage = document.querySelector('.cards-section-content-div');
        const messageDivFilter = document.createElement("div");
        if (!cardsData || cardsData.length === 0) {
            messageDivFilter.className = "no-results-message";
            messageDivFilter.innerHTML = `
         <img src="./favicon/mstile-150x150.png">
        <p>It appears that you haven't added any recipes to your favorites yet. 
        To get started, you can add recipes that you like to your favorites for easier access in the future.</p>`;
            noResultsMessage.appendChild(messageDivFilter);
           
        }


        let mystr = localStorage.getItem('favorites');
        if (mystr === null) {
            mystr = [];
        }

        const cardsSectionMarkup = cardsData.map(
            ({ preview, title, description, rating, _id }) => {
                let setOfStars = "";
                for (let i = 0; i < 5; i++) {
                    if (i < Math.floor(rating + 0.4)) {
                        setOfStars += `<img class="cards-section-card-bottom-div-rating-star" src="./img/star.png" alt="star" />`
                    }
                    else {
                        setOfStars += `<img class="cards-section-card-bottom-div-rating-star" src="./img/star-empty.png" alt="star" />`
                    }
                }
                return `<li class="cards-section-card-items">
                       <div class="cards-section-card-item-inner-div">
                       
                            ${mystr.indexOf(_id) >= 0 ?
                        `<svg id="svg__${_id}"class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${_id}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" fill="#F8F8F8"/>
                                </svg>`
                        :
                        `<svg id="svg__${_id}" class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${_id}" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>` }
                            
                           <img class="cards-section-card-image" style=" background: linear-gradient(rgba(5, 5, 5, .5), rgba(5, 5, 5, .5)), url(${preview});" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${title.length < 20 ? title.toUpperCase() : title.toUpperCase().substring(0, 20) + "..."}</h3>
                               <p class="cards-section-card-content-p">${description.substring(0, 57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                        <p class="cards-section-card-bottom-div-rating-p">${rating}</p>                 
                                        ${setOfStars}
                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${_id}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>`}
        ).join("");
        cardsSectionUL.innerHTML = cardsSectionMarkup;



        // adding event listener to "see recipes" button
        const seeRecipeButtons = document.getElementsByClassName("cards-section-see-recipe-button");

        for (let i = 0; i < seeRecipeButtons.length; i++) {
            seeRecipeButtons[i].addEventListener('click', handleClickSeeRecipesButton);
        }

        async function handleClickSeeRecipesButton(event) {
            await makeSeeRecipeModalVisible(event.target.id);
        }



        // adding event listener to heart icon
        const heartIconSvg = document.getElementsByClassName("cards-section-favorites-button");

        for (let i = 0; i < heartIconSvg.length; i++) {
            heartIconSvg[i].addEventListener('click', HandleClickHerthIcon);
        }

        async function HandleClickHerthIcon(event) {
            const idOfClickedFavItem = event.target.id.substring(5);
            let currentFavs = localStorage.getItem('favorites');
            let stringifiedListOfFavs;
            // if there is no fav element in local storage
            if (currentFavs === null) {
                currentFavs = [];
                currentFavs.push(idOfClickedFavItem);
                stringifiedListOfFavs = JSON.stringify(currentFavs);
                localStorage.setItem('favorites', stringifiedListOfFavs);
                fetchAndMapCardsData();
            }
            // if there is fav element(s) in local storage
            else {
                // clicked item is in the list
                if (currentFavs.indexOf(idOfClickedFavItem) >= 0) {
                    stringifiedListOfFavs = localStorage.getItem('favorites');
                    currentFavs = await JSON.parse(stringifiedListOfFavs);
                    currentFavs.splice(currentFavs.indexOf(idOfClickedFavItem), 1);
                    stringifiedListOfFavs = JSON.stringify(currentFavs);
                    localStorage.setItem('favorites', stringifiedListOfFavs);
                    fetchAndMapCardsData();
                }
                // clicked item is not in the list
                else {
                    stringifiedListOfFavs = localStorage.getItem('favorites');
                    currentFavs = await JSON.parse(stringifiedListOfFavs);
                    currentFavs.push(idOfClickedFavItem);
                    stringifiedListOfFavs = JSON.stringify(currentFavs);
                    localStorage.removeItem('favorites');
                    localStorage.setItem('favorites', stringifiedListOfFavs);
                    currentFavs = localStorage.getItem('favorites');
                    fetchAndMapCardsData();
                }
            }
        }
    }
    catch (error) {
        console.log(error)
    }
}

fetchAndMapCardsData();


