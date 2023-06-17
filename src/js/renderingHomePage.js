import { fetchingTopBooks } from './apiService';
export async function renderingHomePage(numCardsToRender) {

let numCardsToRender = 1;
if (window.innerWidth < 767) {
  numCardsToRender = 1;
} else if (window.innerWidth < 1439) {
  numCardsToRender = 3;
} else {
  numCardsToRender = 5;
}

  const data = await fetchingTopBooks();
  const topBooks = data
    .map(obj => {
      return `<div class = "category-container"><h2 class="home-book-category">${obj.list_name}</h2>
      <ul class="books-list js-book-list">
              ${obj.books.slice(0, numCardsToRender).map(
                ({ title, book_image, author, _id }) => `<li class="book-item"  data_id=${_id}>
                      <div class ="img-wrapper">
                          <img class = "book-img" src="${book_image}" alt="Poster of ${title}" loading="lazy" />
                          <a class = "overlay" href="http://"><span class = "text-overlay">QUICK VIEW</span></a>
                      </div>
                          <h3 class="book-name">${title}</h3>
                          <p class="author-name">${author}</p></li>`
              ).join('')}
              </ul><button class="btn-see-more" type="button" data-id="${obj.list_name}">SEE MORE</button></div>`
    })
    .join('');

  return topBooks;
}
