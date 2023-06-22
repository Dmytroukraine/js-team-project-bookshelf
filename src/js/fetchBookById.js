import axios from 'axios';

import Notiflix from 'notiflix';

import { spinnerStart, spinnerStop } from './spin';

const bookRef = document.querySelector('.modal-fav-book');

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

async function fetchBookById(id) {
  try {
    spinnerStart();
    const { data } = await axios.get(id);
    spinnerStop();
    return data;
  } catch (error) {
    Notiflix.Notify.failure(
      `Oops! Something went wrong! Try reloading the page!`
    );
  }
}

export { fetchBookById };
