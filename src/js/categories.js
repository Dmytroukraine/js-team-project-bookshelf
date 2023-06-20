import axios from 'axios';
import renderingByCategory from './renderingByCategory';
const category_list = document.querySelector('.nav-categories-list');

async function getCategoryList() {
  const { data } = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );
  return data;
}

const renderCategories = async () => {
  try {
    const category = await getCategoryList();
    category_list.innerHTML = await markupCategoriesList(category);
    const listCategory = document.querySelectorAll('.nav-category-item');
    listCategory.forEach(itemCategory => {
      itemCategory.addEventListener('click', event => {
        const ActiveCategory = document.querySelector(
          '.nav-category-item.active'
        );
        if (ActiveCategory) {
          ActiveCategory.classList.remove('active');
        }
        event.target.classList.add('active');
      });
    });
  } catch (error) {
    console.log('Oops! Something went wrong');
  }
};

renderCategories();
category_list.addEventListener('click', checkCategory);

function checkCategory(e) {
  if (e.target.dataset.id) {
    renderingByCategory(e);
  }
}

function markupCategoriesList(categories) {
  return `<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${categories
          .map(
            category => `<li class="nav-category-item" data-id="${category.list_name}">
        ${category.list_name}
        </li>`
          )
          .join('')}`;
}
