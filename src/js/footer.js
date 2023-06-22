const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  footer: document.querySelector('.footer'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.footer.classList.add('show-modal');
  //   rotateFooterCrossOn();
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.footer.classList.remove('show-modal');
  //   rotateFooterCrossOff();
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

// ! move footer__btn-close with modal, when modal scroll
