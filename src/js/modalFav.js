function FavModal() {
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modalFav = document.querySelector('[data-modal]');
  document.body.classList.add('modal-open');
  modalFav.classList.remove('is-hidden-fav');
  closeModalBtn.addEventListener('click', closeModal);

  function closeModal() {
    document.body.classList.remove('modal-open');
    modalFav.classList.add('is-hidden-fav');
    modalFav.removeEventListener('click', onBackdropCloseModal);
    closeModalBtn.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', onEscCloseModal);
  }

  modalFav.addEventListener('click', onBackdropCloseModal);
  function onBackdropCloseModal(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    closeModal();
  }

  document.addEventListener('keydown', onEscCloseModal);

  function onEscCloseModal(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
}
export { FavModal };
