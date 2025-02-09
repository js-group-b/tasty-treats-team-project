import axios from 'axios';

const popularRecipesImg = document.querySelectorAll(".pop-recipe-img");

popularRecipesImg.forEach((img) => {
  img.addEventListener('click', handleClickSeeRecipesButton);
});

async function handleClickSeeRecipesButton(event) {
  // console.log("Tıklanan tarifin id'si:", event.target.id);
  let getRecipeByIdURL = `https://tasty-treats-backend.p.goit.global/api/recipes/${event.target.id}`;
  const responseRecipe = await axios.get(getRecipeByIdURL);
  const recipeData = responseRecipe.data;
  // console.log("Tıklanan tarife ait modal'da kullanılacak data:", recipeData);

  document.querySelector("#id=see-recipes-modal-name").innerText = recipeData.title.toUpperCase();

  let youtubeUrl = recipeData.youtube;
  let embedUrl = youtubeUrl.replace("watch?v=", "embed/");

  document.querySelector("#see-recipes-modal-video").innerHTML = `
    <iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;

  document.querySelector("#see-recipes-modal-tags").innerText = recipeData.category;
  document.querySelector("#see-recipes-modal-rating").innerText = recipeData.rating;
  document.querySelector("#see-recipes-modal-time").innerText = `${recipeData.time} min`;
  document.querySelector("#see-recipes-modal-material").innerText = recipeData.ingredients.join(', ');
  document.querySelector("#see-recipes-modal-instructions").innerText = recipeData.instructions;

  const modal = document.querySelector('#see-recipes-modal-form');
  // console.log(modal);

  const closeButton = document.querySelector('.see-recipes-close-btn');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });



}



export async function MakeSeeRecipeModalVisible(recipeID) {
  const modal = document.querySelector('#see-recipes-modal-form');
  const recipeId = recipeID;
  const recpieURL = `https://tasty-treats-backend.p.goit.global/api/recipes/${recipeId}`;
  const response = await axios.get(recpieURL);
  const seeRecipesContent = document.querySelector(".see-recipes-modal-content");

  let youtubeUrl = response.data.youtube;
  let embedUrl = youtubeUrl.replace("watch?v=", "embed/");

  // console.log(response.data);

  const ingredientsHTML = response.data.ingredients.map(ingredient => {
    return `
      <div class="ingredient">
        <span class="ingredient-name">${ingredient.name}</span>
        <span class="ingredient-amount">${ingredient.measure}</span>
      </div>
    `;
  }).join('');

  const modalInnerHTML =
    `<div>
        <h2 id="see-recipes-modal-name-tablet-desktop">${response.data.title.toUpperCase()}</h2>
       <div id="see-recipes-modal-video">
          <iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       <h2 id="see-recipes-modal-name-mobil">${response.data.title.toUpperCase()}</h2>

        <div id="see-recipes-modal-info-tablet-desktop">
         <div id="see-recipes-modal-info">
        <p id="see-recipes-modal-tags">${response.data.tags.map(tag => `<span>#${tag}</span>`).join('')}</p>
       <p><span id="see-recipes-modal-rating">${response.data.rating}</span>
       <span id="see-recipes-modal-rating-stars" class="stars">
         ${'★ '.repeat(Math.round(response.data.rating))} ${'☆'.repeat(5 - Math.round(response.data.rating))}
       </span></p>
        <p id="see-recipes-modal-time">${response.data.time} min</p>
         </div>
        </div>


       <div id="see-recipes-modal-info-mobil">
       <div id="see-recipes-modal-info-rat">
       <p><span id="see-recipes-modal-rating">${response.data.rating}</span>
       <span id="see-recipes-modal-rating-stars" class="stars">
         ${'★ '.repeat(Math.round(response.data.rating))} ${'☆'.repeat(5 - Math.round(response.data.rating))}
       </span></p>
        <p id="see-recipes-modal-time">${response.data.time} min</p>
           </div>
        </div>


       <span class="see-recipes-close-btn">&times;</span>
       <div id="see-recipes-modal-material">${ingredientsHTML}</div>
       <div id="see-recipes-modal-info-mobil">
       <p id="see-recipes-modal-tags">${response.data.tags.map(tag => `<span>#${tag}</span>`).join('')}</p>
       </div>
       <p id="see-recipes-modal-instructions">${response.data.instructions}</p>
    </div>
     <div id="see-recipes-modal-btn">
  <button id="see-recipes-modal-favorite-btn">Add to favorite</button>
  <button id="see-recipes-modal-rating-btn">Give a rating</button>
    </div>
  `;

  seeRecipesContent.innerHTML = modalInnerHTML;
  modal.style.display = 'flex';
}

const modelCloseButton = document.querySelector(".see-recipes-close-btn");

modelCloseButton.addEventListener('click', closeSeeRecipeModal);

function closeSeeRecipeModal() {
  const modal = document.querySelector('#see-recipes-modal-form');
  modal.style.display = 'none';
}
