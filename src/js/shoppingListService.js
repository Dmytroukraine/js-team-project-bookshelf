import Notiflix from 'notiflix';
import{fetchByBook} from './apiService';
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
        bookCart = JSON.parse(dataJSON);
    }
  }
   //   якщо є додані книги
  if(bookCart !== null){
    if(bookCart.length > 0){
         // якщо в корзину додана книга,ховаємо div empty
        emptyRef.classList.add('visuallyhidden');
    }
    for (let i = 0; i < bookCart.length; i += 1) {
        const book = loadFromLocalStorage(bookCart[i]._id);
        // додаємо розмітку картки книги
        bookList.insertAdjacentHTML('beforeend',
        <div class = "chopping-list-thumb">
            <button class="delete-shopping-list-btn" type="button" data-id= "${book._id}">
                <svg class="delete-shopping-list-icon">
                    <use href="${trash}"></use>
                </svg>
            </button>
            <div class="book-interface">
                <h2 class="shopping-list-book-title">${book.title}</h2>
                <p class=" shopping-list-book-about">${book.description}</p>
                <p class="shopping-list-book-author">#{book.author}</p>
                <ul class="shopping-list-trading">
                    <li class="shopping-list-trading-item">
                        <a class="shopping-list-trading-link brightness" href="${book.buy_links[0].url}" target="_blunk" rel="noopener noreferrer">
                            <img scr="${amazon}" class="shopping-list-trading-icon-amazon" alt="Amazon icon"/>
                        </a>
                    </li>
                    <li class="shopping-list-trading-item">
                        <a class="shopping-list-trading-link" href="${book.buy_links[1].url}" target="_blunk" rel="noopener noreferrer">
                            <img scr="${appleBook}" class="shopping-list-trading-icon-apple-book" alt="AppleBook icon"/>
                        </a>
                    </li>
                    <li class="shopping-list-trading-item">
                        <a class="shopping-list-trading-link" href="${book.buy_links[2].url}" target="_blunk" rel="noopener noreferrer">
                            <img scr="${bookShop}" class="shopping-list-trading-icon-book-shop" alt="BookShop icon"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      );
    }
  }
   //   кнопка видалення книги
  const deleteBtnRefs = document.querySelectorAll('.delete-shopping-list-btn');
  for (let i = 0; i < deleteBtnRefs.length; i += 1){
    deleteBtnRefs[i].addEventListener('click', removeBook);
  }
  
}

export function removeBook(event) {
const id = event.currentTarget.dataset.id;
const index = bookCart.findIndex(book=> book._id === id);
if (index !== -1){
    bookCart.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(bookCart));
    Notiflix.Notify.info('Book removed from shopping list');
   }   
   renderingShoppingList();

 if (bookCart.length === 0 ) {
    emptyRef.classList.remove('visuallyhidden')
 }
}

export async function addToShopList(event) {
    const book = await fetchByBook(event.target.dataset.id);
     
    saveToLocalStorage(book);
    Notiflix.Notify.success('book added to shoping list');
    
}
 
function saveToLocalStorage(book) {
    try{
        if(bookCart === null){
            bookCart = [];
        }
        bookCart.push(book);
        const dataJSON = JSON.stringify(bookCart);
        localStorage.setItem('books', dataJSON);
    } catch(error){
        console.log(error)
    }  
}


function loadFromLocalStorage(id) {
    try{
        const dataJSON = localStorage.getItem('books');
        if(dataJSON){
            const bookCart = JSON.parse(dataJSON);
             return bookCart.find(book => book._id === id);
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