import axios from 'axios';
// import { getRecipesCardData } from './card.js';

const baseUrlCategories = 'https://tasty-treats-backend.p.goit.global/api/categories?';
const searchParamsRecipes = new URLSearchParams({   //bu params gerekli mi buraya emin olamadım.
  page: 1,
});

async function fetchCategories() {
  try {
    const urlCategory = `${baseUrlCategories}${searchParamsRecipes.toString()}`;
    const response = await axios.get(urlCategory);
    const categories = response.data;
    const categoryList = document.querySelector('#categories-list');
    categoryList.innerHTML = '';

    categories.forEach(category => {
      const listItem = document.createElement('li');
      listItem.textContent = category.name;
      listItem.setAttribute('data-id', category.id);
      categoryList.appendChild(listItem);

      listItem.addEventListener('click', () => {
        searchParams.set('category', category.id);    // burada yapmak istediğim şey, click edilen kategoriyi cards.js'deki searchParams'a eklemek ama
        getRecipesCardData();                         // doğru mu yaptım emin olamadım
      });
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

fetchCategories();




