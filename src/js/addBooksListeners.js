import { onBookClick } from './onBookClick';

export default function addBooksListeners() {
  const booksRefs = document.querySelectorAll('.gallery-book-home-link');
  const booksRefs2 = document.querySelectorAll('.gallery-book-link');
  for (let i = 0; i < booksRefs.length; i++) {
    booksRefs[i].addEventListener('click', onBookClick);
  }
  for (let i = 0; i < booksRefs2.length; i++) {
    booksRefs2[i].addEventListener('click', onBookClick);
  }
}
