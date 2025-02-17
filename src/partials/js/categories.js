import axios from 'axios';
import { searchParams } from './cards.js';
import { fetchAndMapCardsData } from './cards.js';

const BASE_URL_CATEGORİES = 'https://tasty-treats-backend.p.goit.global/api/categories?';
async function fetchCategories() {
  try {
    const URL_CATEGORY = `${BASE_URL_CATEGORİES}`;
    const RESPONSE = await axios.get(URL_CATEGORY);
    const CATEGORİES = RESPONSE.data;
    const CATEGORY_LİST = document.querySelector('#CategoriesList');
    CATEGORY_LİST.innerHTML = '';

    CATEGORİES.forEach(category => {
      const LİST_ITEM = document.createElement('li');
      LİST_ITEM.textContent = category.name;
      LİST_ITEM.setAttribute('data-id', category.id);
      LİST_ITEM.setAttribute('tabindex', '0'); 
      CATEGORY_LİST.appendChild(LİST_ITEM);

      LİST_ITEM.addEventListener('click', (event) => {
        searchParams.set('category', event.target.textContent);
        fetchAndMapCardsData();
        event.target.focus();
      });
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

fetchCategories();


const ALL_CATEGORİES_BUTTON = document.querySelector(".AllCategoriesBtn");
ALL_CATEGORİES_BUTTON.addEventListener('click', resetCategoriesFiltering);

  async function resetCategoriesFiltering(){
    searchParams.set('category', '');
    await fetchAndMapCardsData();
  }


