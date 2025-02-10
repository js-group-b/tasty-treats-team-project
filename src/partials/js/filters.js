import axios from 'axios';
import { searchParams } from './cards';
import { fetchAndMapCardsData } from './cards';

//searchParams.set('ingredient', '640c2dd963a319ea671e3668');
//await fetchAndMapCardsData();

const allIngredientsURL = 'https://tasty-treats-backend.p.goit.global/api/ingredients';
const allRegionsUrl = 'https://tasty-treats-backend.p.goit.global/api/areas';

fetchIngredients();
fetchRegions();

// Toggle dropdown menu açma/kapatma
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

// Update selected option for each form individually
// Update selected option for each form individually
const updateSelectedOption = (optionSelector, triggerTextId) => {
  const options = document.querySelectorAll(optionSelector);
  options.forEach(option => {
    option.addEventListener('click', () => {
      const selectedText = option.textContent;
      const triggerText = document.getElementById(triggerTextId);
      const triggerElement = option.closest('.filter-custom-select-container').querySelector('.filter-custom-select-trigger');

      if (triggerText) {
        triggerText.textContent = selectedText; // Update the selected option on the header

        //console.log(triggerText);
        //console.log(triggerText.id);
        // if the time field is selected
        if (triggerText.id === "time-trigger-text"){

          // when selected time is 2 digits 10min to 95 min
          let timeParameter = selectedText.trim().substring(0,3);
          if(timeParameter[2] == ' '){
          timeParameter = timeParameter.substring(0,2);
          
        }
        // specific case where time is one digit (5 mins)
        if(timeParameter[2]== 'm'){
          timeParameter = timeParameter.substring(0,1);
        }
        //updating the search param
        searchParams.set('time', timeParameter);
        fetchAndMapCardsData();
        }
        



        // if the region is selected
        if(triggerText.id === "area-trigger-text"){
          searchParams.set('area', selectedText.trim());
          fetchAndMapCardsData();
        }

        

        // if the product/ingredient is selected
        if(triggerText.id === "ingredient-trigger-text"){
          //console.log(selectedText.trim());           
          // name of selected product

          async function FindIdOfIngredientWithItsName() {
            const response = await axios.get(allIngredientsURL)
            const responseData = await response.data;
            for (let i=0 ; i < responseData.length ; i ++){
              // loop through all response objects and if the name is matching, grab the id.
              if(responseData[i].name == selectedText.trim())
                //console.log(responseData[i]._id);
                // id of selected ingredient
                return responseData[i]._id
            }
          }


          async function ProductFilterFetching(){
            const idOfMyIngredient = await FindIdOfIngredientWithItsName();
            // update the parameter and fetch the card data
            searchParams.set('ingredient', idOfMyIngredient);
            fetchAndMapCardsData();
          }
          ProductFilterFetching();
        }
   
      }

      // Add 'selected' class to the trigger to make it bold
      if (triggerElement) {
        triggerElement.classList.add('selected');
      }

      // Close the dropdown menu after selection
      option.closest('.filter-custom-select-container').querySelector('ul').classList.add('filter-hidden-dropdown');
    });
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
        <li id="product_${_id}" data-ingredient="${_id}" data-name="ingredient" class="option ingredient-li">
          ${name}
        </li>`
      )
      .join('');
    const ingredientUL = document.getElementById('ingredient-options');
    if (ingredientUL) {
      ingredientUL.innerHTML = markupIngredient;
      // Toggle visibility for the ingredient form
      const ingredientTrigger = document.getElementById('ingredient-trigger');
      if (ingredientTrigger) {
        toggleForm(ingredientTrigger, 'ingredient-options');
      }
      // Update the selected ingredient only
      updateSelectedOption(
        '#ingredient-options .option',
        'ingredient-trigger-text'
      );
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
      // Toggle visibility for the region form
      const regionTrigger = document.getElementById('area-trigger');
      if (regionTrigger) {
        toggleForm(regionTrigger, 'area-options');
      }
      // Update the selected region only
      updateSelectedOption('#area-options .option', 'area-trigger-text');
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
  // Toggle visibility for the time form
  const timeTrigger = document.getElementById('time-trigger');
  if (timeTrigger) {
    toggleForm(timeTrigger, 'time-options');
  }
  // Update the selected time only
  updateSelectedOption('#time-options .option', 'time-trigger-text');
} else {
  console.error('Element with ID "time-options" not found.');
}

// Reset filter functionality
const resetButton = document.getElementById('reset-filter-btn');
if (resetButton) {
  resetButton.addEventListener('click', () => {
    // 1. Sıfırlama: Arama kutusunu temizle
    const searchInput = document.getElementById('search');
    if (searchInput) {

      // reset the search params & update the cards data
      searchInput.value = '';
      searchParams.set('title', '');
      searchParams.set('category', '');
      searchParams.set('area', '');
      searchParams.set('ingredient', '');
      searchParams.set('time', '');
      fetchAndMapCardsData();
    }

    // 2. Sıfırlama: Seçilen öğe başlıklarını eski haline getir
    const resetTriggers = document.querySelectorAll('.filter-custom-select-trigger');
    resetTriggers.forEach(trigger => {
      trigger.classList.remove('selected');  // 'selected' sınıfını kaldır
      const triggerText = trigger.querySelector('span');
      if (triggerText) {
        // Başlık metinlerini varsayılan hale getir
        triggerText.textContent = 'Select';
      }
    });

    // 3. Sıfırlama: Dropdown'ları kapat
    const allDropdowns = document.querySelectorAll('.filter-options');
    allDropdowns.forEach(dropdown => {
      dropdown.classList.add('filter-hidden-dropdown');
    });

  });
}



// selecting the text input in filters
const filterSearchTextField = document.querySelector(".filter-search-input");

//setup before functions
let typingTimer;                //timer identifier
let doneTypingInterval = 300;  //time in ms (2 seconds)

//on keyup, start the countdown
filterSearchTextField.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (filterSearchTextField.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

//user has finished typing 
async function doneTyping () {
  // updating the title param and then fetching the card data...
  searchParams.set('title', filterSearchTextField.value );
  await fetchAndMapCardsData();
}

