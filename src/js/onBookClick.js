import { renderModalMarkup } from './renderModalMarkup';
import { fetchBookById } from './fetchBookById';
import { FavModal } from './modalFav';


onBookClick();
async function onBookClick(event) {
    renderModalMarkup(await fetchBookById());
    FavModal();
// console.log(event.currentTarget.dataset.id);
}