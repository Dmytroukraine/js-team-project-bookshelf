export default function getRefs() {
  return {
    seeMoreBtnRef: document.querySelectorAll('.gallery-see-more-btn'),
    galleryRef: document.querySelector('.gallery'),
    activeCategory: document.querySelectorAll('.active'),
    categoriesRef: document.querySelector('.nav-categories-list'),
    bookInfo: document.querySelector('.container-modal-fav'),
    modal: document.querySelector('[data-modal]'),
  };
}
