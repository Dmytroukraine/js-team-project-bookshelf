import { fetchingByBook } from './apiService';
import amazon from '../images/amazon.png';
import appleBooks from '../images/apple-books.png';
import bookShop from '../images/book-shop.png';
import getRefs from './homeRefs';
// i hate this fu#$g smell - Matrix
import {
  addingToShopList,
  removingBookFromShoppingList,
  booksArray,
} from './shoppingListService';
const { bookInfo, modal } = getRefs();

export default function onBookClick(e) {
  let btnText = '';
  let containerHeight = 0;
  const bookId = e.currentTarget.dataset.id;
//   WTF
  // const bookIndex = booksArray.findIndex(book => book._id === bookId);

  const bookIndex = booksArray === null ? -1 : booksArray.findIndex(book => book._id === bookId);
  
  if (bookIndex !== -1) {
    btnText = 'Remove from shopping list';
    containerHeight = 501;
  } else {
    btnText = 'ADD TO SHOPPING LIST';
    containerHeight = 465;
  }

//   не шаблон,а шаблоніще
  fetchingByBook(e.currentTarget.dataset.id).then(book => {
    bookInfo.style.height = `${containerHeight}px`;
    bookInfo.innerHTML = '';
    const markup = `<div class="img-book" style="background-image: url('${book.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${book.title}</h2>
                        <h3 class="title-author">${book.author}</h3>
                        <p class="description-book">${book.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                          <a href="${book.buy_links[0].url}" target="_blank" class="brightness">
                            <img
                            src="${amazon}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${book.buy_links[1].url}" target="_blank">
                            <img
                            src="${appleBooks}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${book.buy_links[4].url}" target="_blank">
                            <img
                            src="${bookShop}"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                          </a>
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn" data-id="${book._id}">${btnText}</button>
                    <p class="congrats"></p>`;

    bookInfo.insertAdjacentHTML('beforeend', markup);
    // показ модалки Паши
    modal.classList.remove('is-hidden');

    // Прибирання скролу
    document.body.style.overflow = 'hidden';

    renderingModal();

    // додавання до shopping list Христини
    const addToShoppingListBtn = document.querySelector('.choice-btn');
    addToShoppingListBtn.addEventListener('click', e => {
      if (addToShoppingListBtn.innerHTML === 'ADD TO SHOPPING LIST') {
        addingToShopList(e);
        if (document.documentElement.clientWidth < 768) {
          bookInfo.style.height = '806px';
        } else {
          bookInfo.style.height = '501px';
        }
        addToShoppingListBtn.innerHTML = 'Remove from shopping list';
        addToShoppingListBtn.nextElementSibling.innerHTML =
          'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
      } else {
        if (document.documentElement.clientWidth < 768) {
          bookInfo.style.height = '762px';
        } else {
          bookInfo.style.height = '465px';
        }
        addToShoppingListBtn.innerHTML = 'ADD TO SHOPPING LIST';
        addToShoppingListBtn.nextElementSibling.innerHTML = '';
        removingBookFromShoppingList(e);
      }
    });
  });
}

export function renderingModal() {
  const bookInfo = document.querySelector('.container-modal-fav');
  const addToShoppingListBtn = document.querySelector('.choice-btn');
  if (addToShoppingListBtn.innerHTML === 'Remove from shopping list') {
    addToShoppingListBtn.nextElementSibling.innerHTML =
      'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
    if (document.documentElement.clientWidth < 768) {
      bookInfo.style.height = '806px';
    } else {
      bookInfo.style.height = '501px';
    }
  } else {
    addToShoppingListBtn.nextElementSibling.innerHTML = '';
    if (document.documentElement.clientWidth < 768) {
      bookInfo.style.height = '762px';
    } else {
      bookInfo.style.height = '465px';
    }
  }
}

// function openTab(url) {
//   console.log(url);
//   window.open(url, '_blank').focus();
// }
