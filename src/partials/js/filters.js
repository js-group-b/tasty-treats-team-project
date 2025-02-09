// import axios from 'axios';
// import { searchParams } from './cards';
// import { fetchAndMapCardsData } from './cards';
// searchParams.set('ingredients', 'Fish Pie');
// fetchAndMapCardsData();


// const allIngredientsURL =
//   'https://tasty-treats-backend.p.goit.global/api/ingredients';
// const allRegionsUrl = 'https://tasty-treats-backend.p.goit.global/api/areas';
// fetchIngredients();
// fetchRegions();
// async function fetchIngredients() {
//   try {
//     const response = await axios.get(allIngredientsURL);
//     const ingredients = response.data;
//     if (!Array.isArray(ingredients)) {
//       throw new Error('Invalid data format');
//     }
//     const markupIngredient = ingredients
//       .map(
//         ({ name, _id }) => `
//         <li data-ingredient="${_id}" data-name="ingredient" class="option">
//           ${name}
//         </li>`
//       )
//       .join('');
//     const ingredientUL = document.getElementById('ingredient-options');
//     if (ingredientUL) {
//       ingredientUL.innerHTML = markupIngredient;
//       ingredientUL.style.display = 'flex';
//     } else {
//       console.error('Element with ID "ingredient-options" not found.');
//     }
//   } catch (error) {
//     console.error('Error fetching ingredients:', error);
//   }
// }
// async function fetchRegions() {
//   try {
//     const response = await axios.get(allRegionsUrl);
//     const regions = response.data;
//     if (!Array.isArray(regions)) {
//       throw new Error('Invalid data format');
//     }
//     const markup = regions
//       .map(
//         ({ name, _id }) =>
//           `<li data-area="${_id}" data-name="area" class="option">${name}</li>`
//       )
//       .join('');
//     const regionList = document.getElementById('area-options');
//     if (regionList) {
//       regionList.insertAdjacentHTML('beforeend', markup);
//       regionList.style.display = 'flex';
//     }
//   } catch (error) {
//     console.error('Error fetching regions:', error);
//   }
// }
// const timeArr = Array.from({ length: 24 }, (_, index) => (index + 1) * 5);
// const markupTime = timeArr
//   .map(
//     time => `
//     <li data-time="${time}" data-name="time" class="option">
//       ${time} min
//     </li>`
//   )
//   .join('');
// const timeUL = document.getElementById('time-options');
// if (timeUL) {
//   timeUL.insertAdjacentHTML('beforeend', markupTime);
//   timeUL.style.display = 'flex';
// } else {
//   console.error('Element with ID "time-options" not found.');
// }


import axios from 'axios';
import { searchParams } from './cards';
import { fetchAndMapCardsData } from './cards';

searchParams.set('ingredients', 'Fish Pie');
fetchAndMapCardsData();

const allIngredientsURL =
  'https://tasty-treats-backend.p.goit.global/api/ingredients';
const allRegionsUrl = 'https://tasty-treats-backend.p.goit.global/api/areas';

fetchIngredients();
fetchRegions();

// Tüm form toggle işlevsini ekle
const toggleForm = (trigger, formId) => {
  trigger.addEventListener('click', () => {
    const formContent = document.getElementById(formId);
    if (formContent) {
      formContent.classList.toggle('filter-hidden-dropdown');
    } else {
      console.error(`Element with ID "${formId}" not found.`);
    }
  });
};

async function fetchIngredients() {
  try {
    const response = await axios.get(allIngredientsURL);
    const ingredients = response.data;
    if (!Array.isArray(ingredients)) {
      throw new Error('Invalid data format');
    }
    const markupIngredient = ingredients
      .map(
        ({ name, _id }) => `
        <li data-ingredient="${_id}" data-name="ingredient" class="option">
          ${name}
        </li>`
      )
      .join('');
    const ingredientUL = document.getElementById('ingredient-options');
    if (ingredientUL) {
      ingredientUL.innerHTML = markupIngredient;
      // Açma/Kapama işlevini butona ekle
      const ingredientTrigger = document.getElementById('ingredient-trigger');
      if (ingredientTrigger) {
        toggleForm(ingredientTrigger, 'ingredient-options');
      }
    } else {
      console.error('Element with ID "ingredient-options" not found.');
    }
  } catch (error) {
    console.error('Error fetching ingredients:', error);
  }
}

async function fetchRegions() {
  try {
    const response = await axios.get(allRegionsUrl);
    const regions = response.data;
    if (!Array.isArray(regions)) {
      throw new Error('Invalid data format');
    }
    const markup = regions
      .map(
        ({ name, _id }) =>
          `<li data-area="${_id}" data-name="area" class="option">${name}</li>`
      )
      .join('');
    const regionList = document.getElementById('area-options');
    if (regionList) {
      regionList.insertAdjacentHTML('beforeend', markup);
      // Açma/Kapama işlevini butona ekle
      const regionTrigger = document.getElementById('area-trigger');
      if (regionTrigger) {
        toggleForm(regionTrigger, 'area-options');
      }
    }
  } catch (error) {
    console.error('Error fetching regions:', error);
  }
}

// Time options
const timeArr = Array.from({ length: 24 }, (_, index) => (index + 1) * 5);
const markupTime = timeArr
  .map(
    time => `
    <li data-time="${time}" data-name="time" class="option">
      ${time} min
    </li>`
  )
  .join('');
const timeUL = document.getElementById('time-options');
if (timeUL) {
  timeUL.insertAdjacentHTML('beforeend', markupTime);
  // Açma/Kapama işlevini butona ekle
  const timeTrigger = document.getElementById('time-trigger');
  if (timeTrigger) {
    toggleForm(timeTrigger, 'time-options');
  }
} else {
  console.error('Element with ID "time-options" not found.');
}

