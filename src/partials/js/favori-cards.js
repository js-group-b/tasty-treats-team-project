import axios from 'axios';
import {MakeSeeRecipeModalVisible} from './see-recipes-modal';




async function GetLocalStorageAndFetchAll(){
    let favsStr = localStorage.getItem('favorites');
    let myFavoritedRecipeIDs;
    if (favsStr == null){
        myFavoritedRecipeIDs = []
    }else{
        myFavoritedRecipeIDs = await JSON.parse(favsStr); 
    }

    for (let i = 0 ; i < myFavoritedRecipeIDs.length ; i++){
        await fetchRecipeData(myFavoritedRecipeIDs[i]);
    }
    // add event listeners to heart icons
    const heartIconSvg = document.getElementsByClassName("cards-section-favorites-button");

    for (let i = 0 ; i < heartIconSvg.length ; i++){
        heartIconSvg[i].addEventListener('click', HandleClickHerthIcon);
    }

    async function HandleClickHerthIcon(event){
        const idOfClickedFavItem = event.target.id.substring(5); 
        let currentFavs = localStorage.getItem('favorites');
        let stringifiedListOfFavs;
        stringifiedListOfFavs = localStorage.getItem('favorites');
        currentFavs = await JSON.parse(stringifiedListOfFavs);
        currentFavs.splice(currentFavs.indexOf(idOfClickedFavItem), 1);
        stringifiedListOfFavs = JSON.stringify(currentFavs);
        localStorage.setItem('favorites', stringifiedListOfFavs);
        document.querySelector(".favorite-cards-section-ul").innerHTML = "";
        GetLocalStorageAndFetchAll();  
    }

    // // adding event listener to "see recipes" button
    // const seeRecipeButtons = document.getElementsByClassName("cards-section-see-recipe-button");

    // for (let i = 0 ; i < seeRecipeButtons.length ; i++){
    //     seeRecipeButtons[i].addEventListener('click', handleClickSeeRecipesButton);
    // }

    // async function handleClickSeeRecipesButton(event){
    //     await MakeSeeRecipeModalVisible(event.target.id);
    // }
}

async function fetchRecipeData(recipeId){
    try {
        const recipeByIdURL =  `https://tasty-treats-backend.p.goit.global/api/recipes/${recipeId}`;

        const response = await axios.get(recipeByIdURL);
        const  favCardsData = await response.data;

        const favoriteCardsSectionUL = document.querySelector(".favorite-cards-section-ul");

        let setOfStars = "";
            for (let i =0 ; i< 5; i++ ){
               if (i < Math.floor(favCardsData.rating+0.4)){
                   setOfStars += `<img class="cards-section-card-bottom-div-rating-star" src="./img/star.png" alt="star" />`
               }
               else {
                   setOfStars += `<img class="cards-section-card-bottom-div-rating-star" src="./img/star-empty.png" alt="star" />`
               }
            } 


        const favCardsMarkup = `<li class="cards-section-card-items">
                       <div class="favorite-cards-section-card-item-inner-div">

                            <svg id="svg__${favCardsData._id}"class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="path_${favCardsData._id}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" fill="#F8F8F8"/>
                            </svg>

                           <img class="cards-section-card-image" style=" background: linear-gradient(rgba(5, 5, 5, .5), rgba(5, 5, 5, .5)), url(${favCardsData.preview});" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${ favCardsData.title.length < 20 ? favCardsData.title.toUpperCase() : favCardsData.title.toUpperCase().substring(0, 20) + "..."}</h3>
                               <p class="cards-section-card-content-p">${favCardsData.description.substring(0,57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                       <p class="cards-section-card-bottom-div-rating-p">${favCardsData.rating}</p>     

                                        ${setOfStars}

                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${favCardsData._id}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li> `;

        favoriteCardsSectionUL.innerHTML +=  favCardsMarkup;
        
    }
    catch{
        console.log("error occurd while fetching the data :C");
    }
}


GetLocalStorageAndFetchAll();


