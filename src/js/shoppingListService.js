import { fetchingByBook } from './apiService';
import Notiflix from 'notiflix';
import amazon from '../images/amazon.png';
import appleBooks from '../images/apple-books.png';
import bookShop from '../images/book-shop.png';
// import trash from '../images/trashh.svg#icon-bin';
const imageUrl = new URL('../images/trashh.svg#icon-bin',
import.meta.url
)

Notiflix.Notify.init({
  width: '370px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '10px',
  opacity: 1,
  borderRadius: '18px',
  timeout: 4000,

  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  fontFamily: 'DM Sans',
  cssAnimationStyle: 'from-top', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'

  info: {
    background: '#4F2EE8',
    textColor: '#FFFFFF',
    childClassName: 'notiflix-notify-info',
  },
});

export const emptyRef = document.querySelector ('.empty-shopping-list');
const booksList = document.querySelector('.shopping-list');
export let booksArray
try {
       booksArray = JSON.parse(localStorage.getItem('books'));    
} catch (error) {
  console.log(error)
  }
         if (booksArray === null) {
           booksArray = [];
         }


renderingShoppingList();

function renderingShoppingList() {
  if (!booksList) {
    return;
  }

  const data = localStorage.getItem('books');
  const books = JSON.parse(data);

  if (books === null) {
    emptyRef.classList.remove('visuallyhidden');
  } else {
    booksList.innerHTML = '';
    const dataJSON = localStorage.getItem('books');
    if (dataJSON) {
      booksArray = JSON.parse(dataJSON);
    }
  }

  if (booksArray !== null) {
    if (booksArray.length > 0) {
      emptyRef.classList.add('visuallyhidden');
    }
    for (let i = 0; i < booksArray.length; i++) {
      const book = loadFromLocalStorage(booksArray[i]._id);
      booksList.insertAdjacentHTML(
        'beforeend',
        `<div class="shopping-list-thumb">
        <div class="cover-shopping-list" style="background-image: url('${book.book_image}'); background-size: cover;">
          </div>
          <div class="book-interface">
          <div class="book-title-btn">
          <div>
          <h2 class="shopping-list-book-title">${book.title}</h2>
            <p class="shopping-list-book-category">${book.list_name}</p>
            </div>
          <button class="delete-shopping-list-btn" type="button" data-id="${book._id}">
            <svg class="delete-shopping-list-icon">
              <use href="${imageUrl}"></use>
            </svg>
          </button>
          </div>
            <p class="shopping-list-book-about">${book.description}</p>
            <div class="shopping-list-book">
            <p class="shopping-list-book-author">${book.author}</p>
            <ul class="shopping-list-trading">
              <li class="shopping-list-trading-item">
                <a class="shopping-list-trading-link brightness" href="${book.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
                  <img src="${amazon}" class="shopping-list-trading-icon-amazon" alt="Amazon icon" />
                </a>
              </li>
              <li class="shopping-list-trading-item">
                <a class="shopping-list-trading-link" href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
                  <img src="${appleBooks}" class="shopping-list-trading-icon-apple-books" alt="Apple icon" />
                </a>
              </li>
              <li class="shopping-list-trading-item">
                <a class="shopping-list-trading-link" href="${book.buy_links[2].url}" target="_blank" rel="noopener noreferrer">
                  <img src="${bookShop}" class="shopping-list-trading-icon-book-shop" alt="Book shop icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>`
      );
    }
  }

  const deleteBtnRefs = document.querySelectorAll('.delete-shopping-list-btn');
  for (let i = 0; i < deleteBtnRefs.length; i++) {
    deleteBtnRefs[i].addEventListener('click', removingBookFromShoppingList);
  }
}

export async function addingToShopList(e) {
  const book = await fetchingByBook(e.target.dataset.id);
  saveToLocalStorage(book);
  Notiflix.Notify.success('Book added to shopping list');
}

export function removingBookFromShoppingList(e) {
  const id = e.currentTarget.dataset.id;
  const index = booksArray.findIndex((book) => book._id === id);
  if (index !== -1) {
    booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksArray));
    Notiflix.Notify.info('Book removed from shopping list');
  }
  renderingShoppingList();

  if (booksArray.length === 0) {
    emptyRef.classList.remove('visuallyhidden');
  }
}
export { saveToLocalStorage };
function saveToLocalStorage(book) {
  try {
    if (booksArray === null) {
      booksArray = [];
    }
    booksArray.push(book);
    const dataJSON = JSON.stringify(booksArray);
    localStorage.setItem('books', dataJSON);
  } catch (error) {
    console.log(error);
  }
}

export function loadFromLocalStorage(id) {
  try {
    const dataJSON = localStorage.getItem('books');
    if (dataJSON) {
      const booksArray = JSON.parse(dataJSON);
      return booksArray.find((book) => book._id === id);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}



