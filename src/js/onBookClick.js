import { renderModalMarkup } from './renderModalMarkup';
import { fetchBookById } from './fetchBookById';
import { FavModal } from './modalFav';


onBookClick();
async function onBookClick() {
    renderModalMarkup(await fetchBookById());
    FavModal();

}