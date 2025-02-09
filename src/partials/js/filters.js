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
import debounce from 'lodash/debounce';
import { searchParams } from './cards';
import { fetchAndMapCardsData } from './cards';

const searchInput = document.getElementById('search');
const cancelButton = document.getElementById('filter-cancel-btn');
const ingredientUL = document.getElementById('ingredient-options');
const regionList = document.getElementById('area-options');
const timeUL = document.getElementById('time-options');
const allIngredientsURL =
  'https://tasty-treats-backend.p.goit.global/api/ingredients';
const allRegionsUrl = 'https://tasty-treats-backend.p.goit.global/api/areas';
const filterTriggers = document.querySelectorAll(
  '.filter-custom-select-trigger'
);
const filterDropdowns = document.querySelectorAll('.filter-options');

searchParams.set('ingredients', 'Fish Pie');
fetchAndMapCardsData();

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
    if (ingredientUL) {
      ingredientUL.innerHTML = markupIngredient;
      ingredientUL.style.display = 'flex';
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
        ({ name, _id }) => `
      <li data-area="${_id}" data-name="area" class="option">${name}</li>`
      )
      .join('');
    if (regionList) {
      regionList.insertAdjacentHTML('beforeend', markup);
      regionList.style.display = 'flex';
    }
  } catch (error) {
    console.error('Error fetching regions:', error);
  }
}

const timeArr = Array.from({ length: 24 }, (_, index) => (index + 1) * 5);
const markupTime = timeArr
  .map(
    time => `
  <li data-time="${time}" data-name="time" class="option">
    ${time} min
  </li>`
  )
  .join('');
if (timeUL) {
  timeUL.insertAdjacentHTML('beforeend', markupTime);
  timeUL.style.display = 'flex';
} else {
  console.error('Element with ID "time-options" not found.');
}

const debouncedSearch = debounce(() => {
  const query = searchInput.value.trim();
  searchParams.set('search', query);
  fetchAndMapCardsData();
}, 300);

searchInput.addEventListener('input', () => {
  debouncedSearch();
});

cancelButton.addEventListener('click', () => {
  searchInput.value = '';
  searchParams.delete('search');
  fetchAndMapCardsData();
});

filterTriggers.forEach(trigger => {
  trigger.addEventListener('click', event => {
    const dropdown = event.currentTarget.nextElementSibling;
    if (dropdown) {
      dropdown.classList.toggle('filter-hidden-dropdown');
    }
  });
});

document.addEventListener('click', event => {
  if (!event.target.closest('.filter-custom-select-container')) {
    filterDropdowns.forEach(dropdown =>
      dropdown.classList.add('filter-hidden-dropdown')
    );
  }
});

fetchIngredients();
fetchRegions();
