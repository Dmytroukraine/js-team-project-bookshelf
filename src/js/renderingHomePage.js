import { homeRefs } from "./homeRefs";
import { fetchingTopBooks, fetchingByCategory } from './apiService';
import { createHomeBookCard } from "./createBookCard";
import { renderingByCategory } from "./renderingByCategory";
import { addBooksListeners } from "./addBooksListeners";

export async function renderingHomePage() {
  let count = 5;
  if (window.innerWidth < 768) {
    count = 1;
  } else if (window.innerWidth < 1440) {
    count = 3;
  }
  const data = await fetchingTopBooks();
  const topBooks = data
    .map(({ list_name, books }) => {
      return `<div class="top-category-wrapper">
        <p class="top-category-title">${list_name}</p>
         ${createHomeBookCard(books.splice(0, count))}
        <button type="button" class="top-category-btn js-top-btn" data-id="${list_name}">See more</button>
      </div>`;
    })
    .join('');
    return topBooks;
}
homeRefs.renderingContainer.addBooksListeners('click', seeMoreBtnClickHandler);
export async function seeMoreBtnClickHandler(e) {
  e.preventDefault();
  if (!e.target.classList.contains('js-top-btn')) return;

  const id = e.target.dataset.id;
  const data = await fetchingByCategory();

renderingByCategory();
    window.scrollTo(0, 0);

    addBooksListeners();
}