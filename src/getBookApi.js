import axios from 'axios';


const URL = {
  all: 'https://books-backend.p.goit.global/books/category-list',
  top: 'https://books-backend.p.goit.global/books/top-books',
  category: 'https://books-backend.p.goit.global/books/category?category=',
  bookId: 'https://books-backend.p.goit.global/books/',
};

export default async function getBookAPI(type, value = '') {
    const response = await axios.get(`${URL[type]}${value}`);
    console.log(response.data);
    return response.data;
    
}

