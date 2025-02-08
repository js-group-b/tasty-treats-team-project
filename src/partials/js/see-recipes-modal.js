import axios from 'axios';

const popularRecipesImg = document.querySelectorAll(".pop-recipe-img");

popularRecipesImg.forEach((img) => {
  img.addEventListener('click', handleClickSeeRecipesButton);
});

async function handleClickSeeRecipesButton(event) {
  console.log("Tıklanan tarifin id'si:", event.target.id);
  let getRecipeByIdURL = `https://tasty-treats-backend.p.goit.global/api/recipes/${event.target.id}`;
  const responseRecipe = await axios.get(getRecipeByIdURL);
  const recipeData = responseRecipe.data;
  console.log("Tıklanan tarife ait modal'da kullanılacak data:", recipeData);

  document.querySelector("#see-recipes-modal-name").innerText = recipeData.title;
  document.querySelector("#see-recipes-modal-video").innerHTML = `
    <img src="${recipeData.preview}" alt="${recipeData.title}" />
    <!-- <iframe width="550" height="250" src="${recipeData.videoUrl}" frameborder="0" allowfullscreen></iframe> -->
  `;
  document.querySelector("#see-recipes-modal-tags").innerText = recipeData.category;
  document.querySelector("#see-recipes-modal-rating").innerText = recipeData.rating;
  document.querySelector("#see-recipes-modal-time").innerText = `${recipeData.time} min`;
  document.querySelector("#see-recipes-modal-material").innerText = recipeData.ingredients.join(', ');
  document.querySelector("#see-recipes-modal-instructions").innerText = recipeData.instructions;

  const modal = document.querySelector('#see-recipes-modal-form');
  console.log(modal); 
  modal.style.display = 'flex';

  const closeButton = document.querySelector('.see-recipes-close-btn');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

export async function MakeSeeRecipeModalVisible(recipeID){
  const modal = document.querySelector('#see-recipes-modal-form');
  const recipeId = recipeID;
  const recpieURL = `https://tasty-treats-backend.p.goit.global/api/recipes/${recipeId}`;
  const response = await axios.get(recpieURL);
  console.log(response.data);

  modal.style.display = 'flex';
}
MakeSeeRecipeModalVisible("6462a8f74c3d0ddd28897fc1")


const modelCloseButton = document.querySelector(".see-recipes-close-btn");

modelCloseButton.addEventListener('click', closeSeeRecipeModal);

function closeSeeRecipeModal(){
  const modal = document.querySelector('#see-recipes-modal-form');
  modal.style.display = 'none';
}


