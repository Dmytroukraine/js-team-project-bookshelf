// import { homeRefs } from "./homeRefs";
// import { fetchingTopBooks, fetchingByCategory } from './apiService';
// import { createHomeBookCard } from "./createBookCard";
// import { renderingByCategory } from "./renderingByCategory";
// import { addBooksListeners } from "./addBooksListeners";

import getRefs from './homeRefs';
import { fetchingTopBooks } from './apiService';
import { createHomeBookCard } from './createBookCard';
import renderingByCategory from './renderingByCategory';
import addBooksListeners from './addBooksListeners';
const { galleryRef } = getRefs();

export function renderingHomePage() {
  galleryRef.innerHTML = '';
  if (document.documentElement.clientWidth < 768) {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      '<h2 class="gallery-title">Best Sellers <span class="gellery-title-akcent">Books</span></h2>'
    );
    fetchingTopBooks().then(response => {
      for (let elem of response) {
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<h3 class="gallery-category">${elem.books[0].list_name}</h3>`
        );
        galleryRef.insertAdjacentHTML(
          'beforeend',
          createHomeBookCard(elem.books[0])
        );
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<button class="gallery-see-more-btn" data-category="${elem.books[0].list_name}">See more</button>`
        );
      }
      const btnRef = document.querySelectorAll('.gallery-see-more-btn');
      for (let i = 0; i < btnRef.length; i++) {
        btnRef[i].addEventListener('click', renderingByCategory);
      }
      addBooksListeners();
    });
  } else if (document.documentElement.clientWidth < 1440) {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      '<h2 class="gallery-title">Best Sellers <span class="gellery-title-akcent">Books</span></h2>'
    );
    fetchingTopBooks().then(response => {
      for (let elem of response) {
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<h3 class="gallery-category">${elem.books[0].list_name}</h3>
          <div class="gallery-list"></div>`
        );
        const nodes = document.querySelectorAll('.gallery-list');
        const galleryListRef = nodes[nodes.length - 1];
        for (let i = 0; i < 3; i++) {
          galleryListRef.insertAdjacentHTML(
            'beforeend',
            createHomeBookCard(elem.books[i])
          );
        }
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<button class="gallery-see-more-btn" data-category="${elem.books[0].list_name}">See more</button>`
        );
      }
      const btnRef = document.querySelectorAll('.gallery-see-more-btn');
      for (let i = 0; i < btnRef.length; i++) {
        btnRef[i].addEventListener('click', renderingByCategory);
      }
      addBooksListeners();
    });
  } else {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      '<h2 class="gallery-title">Best Sellers <span class="gellery-title-akcent">Books</span></h2>'
    );
    fetchingTopBooks().then(response => {
      for (let elem of response) {
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<h3 class="gallery-category">${elem.books[0].list_name}</h3>
          <div class="gallery-list"></div>`
        );
        var nodes = document.querySelectorAll('.gallery-list');
        const galleryListRef = nodes[nodes.length - 1];
        for (let i = 0; i < 5; i++) {
          galleryListRef.insertAdjacentHTML(
            'beforeend',
            createHomeBookCard(elem.books[i])
          );
        }
        galleryRef.insertAdjacentHTML(
          'beforeend',
          `<button class="gallery-see-more-btn" data-category="${elem.books[0].list_name}">See more</button>`
        );
      }
      const btnRef = document.querySelectorAll('.gallery-see-more-btn');
      for (let i = 0; i < btnRef.length; i++) {
        btnRef[i].addEventListener('click', renderingByCategory);
      }
      addBooksListeners();
    });
  }

  // scrolling to top
  window.scrollTo(0, 0);
}

// export async function renderingHomePage() {
//   let count = 5;
//   if (window.innerWidth < 768) {
//     count = 1;
//   } else if (window.innerWidth < 1440) {
//     count = 3;
//   }
//   const data = await fetchingTopBooks();
//   const topBooks = data
//     .map(({ list_name, books }) => {
//       return `<div class="top-category-wrapper">
//         <p class="top-category-title">${list_name}</p>
//          ${createHomeBookCard(books.splice(0, count))}
//         <button type="button" class="top-category-btn js-top-btn" data-id="${list_name}">See more</button>
//       </div>`;
//     })
//     .join('');
//     return topBooks;
// }
// homeRefs.renderingContainer.addBooksListeners('click', seeMoreBtnClickHandler);
// export async function seeMoreBtnClickHandler(e) {
//   e.preventDefault();
//   if (!e.target.classList.contains('js-top-btn')) return;

//   const id = e.target.dataset.id;
//   const data = await fetchingByCategory();

// renderingByCategory();
//     window.scrollTo(0, 0);

//     addBooksListeners();
// }