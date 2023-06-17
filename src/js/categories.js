import Notiflix from 'notiflix';
import axios from 'axios';


const  fetchCategories = () => {
    return fetch(`https://books-backend.p.goit.global/books/category-list`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  };

  const categoryList = document.querySelector('.book-category');
  
  fetchCategories()
  .then(categories => {
    renderCategoryList(categories);
  })
  .catch(error => {
        console.log(error);
      });


function renderCategoryList(categories){

    categoryList.innerHTML = categories.map(category => {
        return `<li class="list_name">${category.list_name}</li>`;
      }).join('');
}