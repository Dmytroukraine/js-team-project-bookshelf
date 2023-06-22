import axios from 'axios';
import {
  spinnerStart,
  spinnerStop,
  spinnerStartForCategories,
  spinerStopForCategories,
} from './spin';

export async function fetchingByCategory(query) {
  try {
    spinnerStartForCategories();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${query}`
    );
    spinerStopForCategories();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingTopBooks() {
  try {
    spinnerStart();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );
    spinnerStop();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingCategories() {
  try {
    spinnerStartForCategories();
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    spinerStopForCategories();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}

export async function fetchingByBook(id) {
  try {
    spinnerStart();
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    spinnerStop();
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}
