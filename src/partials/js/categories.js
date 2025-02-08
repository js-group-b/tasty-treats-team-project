import axios from 'axios';
import { searchParams } from './cards.js';
import { fetchAndMapCardsData } from './cards.js';

const baseUrlCategories = 'https://tasty-treats-backend.p.goit.global/api/categories?';
async function fetchCategories() {
  try {
    const urlCategory = `${baseUrlCategories}`;
    const response = await axios.get(urlCategory);
    console.log(response);
    const categories = response.data;
    const categoryList = document.querySelector('#categories-list');
    categoryList.innerHTML = '';

    categories.forEach(category => {
      const listItem = document.createElement('li');
      listItem.textContent = category.name;
      listItem.setAttribute('data-id', category.id);
      categoryList.appendChild(listItem);

      listItem.addEventListener('click', (event) => {
        searchParams.set('category', event.target.textContent);
        fetchAndMapCardsData();
      });
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

fetchCategories();





