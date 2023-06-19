

// function FavModal() {


//   const closeModalBtn = document.querySelector('[data-modal-close]');
//   const modalFav = document.querySelector('[data-modal]');
// document.body.classList.add('modal-open');
//   closeModalBtn.addEventListener('click', closeModal);

//   function closeModal() {
//     document.body.classList.remove('modal-open');
//     modalFav.classList.add('is-hidden');
//     modalFav.removeEventListener('click', onBackdropCloseModal);
//     closeModalBtn.removeEventListener('click', closeModal);
//     document.removeEventListener('keydown', onEscCloseModal);
//   }

//   modalFav.addEventListener('click', onBackdropCloseModal);
//   function onBackdropCloseModal(event) {
//     if (event.target !== event.currentTarget) {
//        return;
//      }
//     closeModal();
//   }

//   document.addEventListener('keydown', onEscCloseModal);

//   function onEscCloseModal(event) {
//      if (event.code === 'Escape') {
//        closeModal();
//      }
//   }

// }
// export {FavModal}


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  // вихід по кнопці
  document.addEventListener('keydown', onEscPress);

  function onEscPress(e) {
    if (e.code === 'Escape') {
      //не строка
      refs.modal.classList.add('is-hidden');
      document.removeEventListener('keydown', onEscPress);
      console.log('esc');
    }
  }

  // закриття модалки по тицю пальцем
  refs.modal.addEventListener('click', closeModalOnBackdropClick);

  function closeModalOnBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    toggleModal();
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.style.overflow = '';
  }
})();
