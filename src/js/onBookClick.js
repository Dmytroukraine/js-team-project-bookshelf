import { renderModalMarkup } from './renderModalMarkup';
import { fetchBookById } from './fetchBookById';
import { FavModal } from './modalFav';



// onBookClick();
async function onBookClick(event) {
    // ;
    console.log(event.currentTarget.dataset.id);
    renderModalMarkup(await fetchBookById(event.currentTarget.dataset.id));
    FavModal();
    
}

export { onBookClick };