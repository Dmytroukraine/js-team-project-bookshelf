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
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
      });


function renderCategoryList(categories){

    categoryList.innerHTML = categories.map(category => {
        return ` <li class="list_name">${category.list_name}</li>`;
      }).join('');
}

categoryList.addEventListener('click', onCategoryClick);

function onCategoryClick(e){
  if (e.target.nodeName !== 'LI') {
    return;
  }


  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
   
} else {
    const items = document.querySelectorAll('.list_name');
    items.forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
   
}
}

