import axios from 'axios';

import Notiflix from 'notiflix';

import { renderModalMarkup } from './renderModalMarkup';

const bookRef = document.querySelector('.modal-fav-book');

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

async function fetchBookById() {
  try {
    const { data } = await axios.get('643282b1e85766588626a0b2');
    return data;
  } catch (error) {
    Notiflix.Notify.failure(
      `Oops! Something went wrong! Try reloading the page!`
    );
  }
}

// const bookRef = document.querySelector('.modal-fav-book');

// const data = await fetchBookById();

// renderModalMarkup(data);

export { fetchBookById };