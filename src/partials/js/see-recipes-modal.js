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
  //modal.style.display = 'flex';

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
  const seeRecipesContent = document.querySelector(".see-recipes-modal-content");

  let xyz = await response.data.youtube;
  let x = xyz.substring(0,24);
  let z = xyz.substring(29);
  let src = `${x}embed${z}`;

  console.log(response.data);
  const modalInnerHTML = 
  `<div>
    <h2 id="see-recipes-modal-name">${response.data.title}</h2> 
    <iframe id="see-recipes-modal-video-frame" width="250" height="250" src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
    </iframe>
    <span class="see-recipes-close-btn">&times;</span>
    
    <p><span id="see-recipes-modal-tags">#</span></p>
     <p id="see-recipes-modal-instructions">${response.data.instructions}</p>
  </div>
  
  <button id="see-recipes-modal-favorite-btn">Add to favorite</button>
  <button id="see-recipes-modal-rating-btn">Give a rating</button>
  `
  

  seeRecipesContent.innerHTML = modalInnerHTML;
  modal.style.display = 'flex';
}


//MakeSeeRecipeModalVisible("6462a8f74c3d0ddd28897fc1");


const modelCloseButton = document.querySelector(".see-recipes-close-btn");

modelCloseButton.addEventListener('click', closeSeeRecipeModal);

function closeSeeRecipeModal(){
  const modal = document.querySelector('#see-recipes-modal-form');
  modal.style.display = 'none';
}




`{
  "_id": "6462a8f74c3d0ddd28897fc1",
  "title": "Chocolate Gateau",
  "category": "Dessert",
  "area": "French",
  "instructions": "Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.",
  "description": "A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.",
  "thumb": "https://ftp.goit.study/img/so-yummy/preview/Chocolate%20Gateau.jpg",
  "preview": "https://ftp.goit.study/img/so-yummy/preview/Chocolate%20Gateau.jpg",
  "time": "75",
  "youtube": "https://www.youtube.com/watch?v=dsJtgmAhFF4",
  "tags": [
    "Cake",
    "Chocolate",
    "Desert",
    "Pudding"
  ],
  "ingredients": [
    {
      "id": "640c2dd963a319ea671e3742",
      "measure": "250g",
      "name": "Plain Chocolate",
      "desc": "Plain chocolate, also known as dark chocolate, is made from cocoa solids, sugar, and cocoa butter. It has a higher percentage of cocoa solids than milk chocolate, and has a bittersweet taste. It is often used in baking, or enjoyed on its own as a treat.",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3742.png"
    },
    {
      "id": "640c2dd963a319ea671e367e",
      "measure": "175g",
      "name": "Butter",
      "desc": "A dairy product made from churning cream or milk, with a high fat content and a creamy, rich flavor that is often used in cooking and baking.",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e367e.png"
    },
    {
      "id": "640c2dd963a319ea671e371f",
      "measure": "2 tablespoons",
      "name": "Milk",
      "desc": "A white liquid produced by mammals as food for their young, commonly used as a drink or ingredient in cooking and baking.",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e371f.png"
    },
    {
      "id": "640c2dd963a319ea671e36ca",
      "measure": "5",
      "name": "Eggs",
      "desc": "A reproductive cell laid by female animals, often used in baking and cooking as a binding agent or to add texture and flavor",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ca.png"
    },
    {
      "id": "640c2dd963a319ea671e36ee",
      "measure": "175g",
      "name": "Granulated Sugar",
      "desc": "A common sweetener made from sugar cane or sugar beet that has been refined and granulated.",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ee.png"
    },
    {
      "id": "640c2dd963a319ea671e36d7",
      "measure": "125g",
      "name": "Flour",
      "desc": "A fine powder made from grinding grains, nuts, seeds, or roots. Used as a main ingredient in baking, cooking, and thickening sauces and soups.",
      "img": "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d7.png"
    }
  ],
  "rating": 3.99,
  "whoRated": 286
}`