const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  footer: document.querySelector('.footer'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
  //   document.body.classList.add('show-modal');
  refs.footer.classList.add('show-modal');
}
