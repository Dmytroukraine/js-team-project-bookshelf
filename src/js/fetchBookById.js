import axios from 'axios';

import Notiflix from 'notiflix';

import { renderModalMarkup } from './renderModalMarkup';

const bookRef = document.querySelector('.modal-fav-book');

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

async function fetchBookById(id) {
  try {
    const { data } = await axios.get(id);
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