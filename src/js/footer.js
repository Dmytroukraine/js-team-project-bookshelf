const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  footer: document.querySelector('.footer'),
  card: document.querySelector('.footer__card'),
  link: document.querySelector('.footer__social-link'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.footer.classList.add('show-modal');
  
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.footer.classList.remove('show-modal');

}

function onBackdropClick(event) {
  if (event.target === refs.backdrop) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.key === 'Escape') {
    onCloseModal();
  }
}

