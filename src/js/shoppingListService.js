import Notiflix from 'notiflix';
import{fetchingByBook} from './apiService';
import amazon from '../images/amazon.png';
import appleBook from '../images/apple-books.png';
import bookShop from '../images/book-shop.png';
import trash from '../images/icon.svg';

const emptyRef= document.querySelector('.empty-shopping-list');
const bookList = document.querySelector('.shopping-list');

// отримання даних з localStorage

export let bookCart = JSON.parse(localStorage.getItem('books'));

renderingShoppingList();
function renderingShoppingList(){
    if(!bookList){
        return;
    }
    // перевірка наповненості shopping list  
    const data = localStorage.getItem('books');
    const books = JSON.parse(data);
    // якщо немає доданих книг ми показуємо дів з порожньою корзиною
    if(books === null){
        emptyRef.classList.remove('visuallyhidden')
    } else {
    bookList.innerHTML = '';

    const dataJSON = localStorage.getItem('books');
    if(dataJSON){
        // отримуємо валідне значення книги
        booksArray = JSON.parse(dataJSON);
    }
  }
   //   якщо є додані книги
  if(booksArray !== null){
    if(booksArray.length > 0){
         // якщо в корзину додана книга,ховаємо div empty
        emptyRef.classList.add('visuallyhidden');
    }
    for (let i = 0; i < booksArray.length; i += 1) {
        const book = loadFromLocalStorage(booksArray[i]._id);
        // додаємо розмітку картки книги
        bookList.insertAdjacentHTML('beforeend',
        `<div class = "shopping-list-thumb">
            <button class="delete-shopping-list-btn" type="button" data-id= "${book._id}">
                <svg class="delete-shopping-list-icon">
                    <use href="${trash}"></use>
                </svg>
            </button>
                <div class="cover-shopping-list" style="background-image: url('${book.book_image}'); background-size: cover;">
      </div>
            <div class="book-interface">
                <h2 class="shopping-list-book-title">${book.title}</h2>
          <p class="shopping-list-book-category">${book.list_name}</p>
                <p class=" shopping-list-book-about">${book.description}</p>
                <p class="shopping-list-book-author">#{book.author}</p>
                <ul class="shopping-list-trading">
                    <li class="shopping-list-trading-item">
                        <a class="shopping-list-trading-link brightness" href="${book.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
                            <img scr="${amazon}" class="shopping-list-trading-icon-amazon" alt="Amazon icon"/>
                        </a>
                    </li>
                    <li class="shopping-list-trading-item">
                        <a class="shopping-list-trading-link" href="${book.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
                            <img scr="${appleBook}" class="shopping-list-trading-icon-apple-books" alt="AppleBook icon"/>
                        </a>
                    </li>
                    <li class="shopping-list-trading-item">
                        <a class="shopping-list-trading-link" href="${book.buy_links[2].url}" target="_blank" rel="noopener noreferrer">
                            <img scr="${bookShop}" class="shopping-list-trading-icon-book-shop" alt="BookShop icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `
      );
    }
  }
   //   кнопка видалення книги
  const deleteBtnRefs = document.querySelectorAll('.delete-shopping-list-btn');
  for (let i = 0; i < deleteBtnRefs.length; i++){
    deleteBtnRefs[i].addEventListener('click', removingBookFromShoppingList);
  }
  
}

export async function addToShopList(e) {
    const book = await fetchingByBook(e.target.dataset.id);
     
    saveToLocalStorage(book);
    Notiflix.Notify.success('book added to shoping list');

}

export function removingBookFromShoppingList(event) {
const id = e.currentTarget.dataset.id;
const index = booksArray.findIndex(book=> book._id === id);
if (index !== -1){
    booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksArray));
    Notiflix.Notify.info('Book removed from shopping list');
   }   
   renderingShoppingList();

 if (booksArray.length === 0 ) {
    emptyRef.classList.remove('visuallyhidden')
 }
}


 
function saveToLocalStorage(book) {
    try{
        if(booksArray === null){
            booksArray = [];
        }
        booksArray.push(book);
        const dataJSON = JSON.stringify(booksArray);
        localStorage.setItem('books', dataJSON);
    } catch(error){
        console.log(error)
    }  
}


function loadFromLocalStorage(id) {
    try{
        const dataJSON = localStorage.getItem('books');
        if(dataJSON){
            const booksArray = JSON.parse(dataJSON);
             return booksArray.find(book => book._id === id);
        } else{
            return null
        }
    } catch (error){
        console.log(error)
    }
    
}
// перевірка наявності товарів у корзині
// if(Object.keys(cart).length === 0){
// } else{
//     // додаємо клас invisible, що приховати div 
//     emptyRef.classList.remove('invisible')
// }
