import { fetchingByBook } from './apiService';
import Notiflix from 'notiflix';
import amazon from '../images/amazon.png';
import appleBooks from '../images/apple-books.png';
import bookShop from '../images/book-shop.png';
import trash from '../images/icon.svg#icon-trash';

const emptyRef = document.querySelector('.empty-shopping-list');
const booksList = document.querySelector('.shopping-list');

export let booksArray = JSON.parse(localStorage.getItem('books'));

renderingShoppingList();

function renderingShoppingList() {
  // console.log('Rendering shopping list');
  if (!booksList) {
    return;
  }

  // Checking if the shopplist is empty and rendering the empty-shopping-list-image and text
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
        <button class="delete-shopping-list-btn" type="button" data-id="${book._id}">
        <svg class="delete-shopping-list-icon">
          <use href="${trash}"></use>
        </svg>
      </button>
      <div class="cover-shopping-list" style="background-image: url('${book.book_image}'); background-size: cover;">
      </div>
      <div class="book-interface">
        <h2 class="shopping-list-book-title">${book.title}</h2>
        <p class="shopping-list-book-category">${book.list_name}</p>
        <p class="shopping-list-book-about">${book.description}</p>
        <p class="shopping-list-book-author">${book.author}</p>
        <ul class="shopping-list-trading">
          <li class="shopping-list-trading-item">
            <a class="shopping-list-trading-link brightness" href="${book.buy_links[0].url}" target="_blank">
              <img
                src="${amazon}"
                class="shopping-list-trading-icon-amazon"
                alt="Amazon icon"
              />
            </a>
          </li>
          <li class="shopping-list-trading-item">
            <a class="shopping-list-trading-link" href="${book.buy_links[1].url}" target="_blank">
              <img
                src="${appleBooks}"
                class="shopping-list-trading-icon-apple-books"
                alt="Apple icon"
              />
            </a>
          </li>
          <li class="shopping-list-trading-item">
            <a class="shopping-list-trading-link" href="${book.buy_links[2].url}" target="_blank">
              <img
                src="${bookShop}"
                class="shopping-list-trading-icon-book-shop"
                alt="Book shop icon"
              />
            </a>
          </li>
        </ul>
      </div>
          </div>
      `
      );
    }  
  }

  const deleteBtnRefs = document.querySelectorAll('.delete-shopping-list-btn');
  for (let i = 0; i < deleteBtnRefs.length; i++) {
    deleteBtnRefs[i].addEventListener('click', removingBookFromShoppingList);
  }

  // if (!books === 0) {
  //   if (booksArray.length > 0) {
  //     emptyRef.classList.add('visuallyhidden');
  //   }
  // }  
}

export async function addingToShopList(e) {
  const book = await fetchingByBook(e.target.dataset.id);
  saveToLocalStorage(book);
  Notiflix.Notify.success('Book added to shopping list');
}

export function removingBookFromShoppingList(e) {
  const id = e.currentTarget.dataset.id;
  const index = booksArray.findIndex(book => book._id === id);
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

function loadFromLocalStorage(id) {
  try {
    const dataJSON = localStorage.getItem('books');
    if (dataJSON) {
      const booksArray = JSON.parse(dataJSON);
      return booksArray.find(book => book._id === id);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
