import { renderModalMarkup } from './renderModalMarkup';
import { fetchBookById } from './fetchBookById';
import { FavModal } from './modalFav';
import Notiflix from 'notiflix';
import getRefs from './homeRefs';
import {
  addingToShopList,
  removingBookFromShoppingList,
  booksArray,
  saveToLocalStorage,
  loadFromLocalStorage,
  emptyRef,
} from './shoppingListService';

const addBookNotif = document.querySelector('.add-book-notification');

async function onBookClick(event) {
  const dataId = event.currentTarget.dataset.id;
  // console.log(dataId);
  const book = await fetchBookById(event.currentTarget.dataset.id);
  renderModalMarkup(book);
  const addBookBtn = document.querySelector('.fav-add-book-btn');

  if (addBookBtn) {
    if (loadFromLocalStorage(dataId) == null) {
      addBookNotif.classList.add('hidden');
      addBookBtn.textContent = 'add to shopping list';
    } else {
      addBookNotif.classList.remove('hidden');
      addBookBtn.textContent = 'remove from the shopping list';
    }
    addBookBtn.addEventListener('click', onAddBookBtn);
  }

  FavModal();

  function onAddBookBtn() {
    if (loadFromLocalStorage(dataId) == null) {
      try {
        booksArray.push(book);
        // console.log(booksArray, 'add');
        localStorage.setItem('books', JSON.stringify(booksArray));
        addBookNotif.classList.remove('hidden');
        addBookBtn.textContent = 'remove from the shopping list';
        Notiflix.Notify.info('You have added the book to the shopping list.');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        addBookNotif.classList.add('hidden');
        addBookBtn.textContent = 'add to shopping list';
        const index = booksArray.findIndex(book => book._id == dataId);
        // console.log(dataId, 'rem');
        if (index !== -1) {
          booksArray.splice(index, 1);
          // console.log(booksArray, 'rem');
          localStorage.setItem('books', JSON.stringify(booksArray));
          Notiflix.Notify.info(
            'You have removed the book from the shopping list.'
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export { onBookClick };
