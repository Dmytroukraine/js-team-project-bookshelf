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

const addBookBtn = document.querySelector('.fav-add-book-btn');
const addBookNotif = document.querySelector('.add-book-notification');

async function onBookClick(event) {
    
    const dataId = event.currentTarget.dataset.id;
    const book = await fetchBookById(event.currentTarget.dataset.id);
    if (loadFromLocalStorage(dataId) == null) {
        
        addBookNotif.classList.add('hidden');
        addBookBtn.textContent = 'add to shopping list';
    } else {
        addBookNotif.classList.remove('hidden');
        addBookBtn.textContent = 'remove from the shopping list';
    }
    renderModalMarkup(book);
    FavModal();
  
console.log(booksArray)
    addBookBtn.addEventListener('click', onAddBookBtn);

    function onAddBookBtn() {
        if (loadFromLocalStorage(dataId) == null) {
            // saveToLocalStorage(book);

            booksArray.push(book);
            const dataJSON = JSON.stringify(booksArray);
            localStorage.setItem('books', dataJSON);

          addBookNotif.classList.remove('hidden');
          addBookBtn.textContent = 'remove from the shopping list';
        } else {
            // removingBookFromShoppingList(dataId);
            addBookNotif.classList.add('hidden');
            addBookBtn.textContent = 'add to shopping list';

            const index = booksArray.findIndex(book => book._id === dataId);
            if (index !== -1) {
                booksArray.splice(index, 1);
                localStorage.setItem('books', JSON.stringify(booksArray));
                booksArray = [];
                Notiflix.Notify.info('Book removed from shopping list');
            }

        }
    }
    
}




export { onBookClick };