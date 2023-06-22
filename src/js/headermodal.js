// Mobile modal 2 codepen

const burgerBtn = document.querySelector('.js-open-menu');
const closeBtn = document.querySelector('.js-close-menu');
const modal = document.querySelector('.js-modal');

const modalChannel = new BroadcastChannel('modal-channel');

burgerBtn.addEventListener('click', function () {
  // modal.style.display = 'block';
  modal.classList.add('menu-is-open');
  burgerBtn.classList.add('hidden');
  modalChannel.postMessage({ action: 'openModal' });
});

closeBtn.addEventListener('click', function () {
  // modal.style.display = 'none';
  modal.classList.remove('menu-is-open');
  burgerBtn.classList.remove('hidden');
});

modalChannel.addEventListener('message', function (event) {
  if (event.data.action === 'openModal') {
    modal.style.display = 'block';
    burgerBtn.classList.add('hidden');
  }
});

window.addEventListener('beforeunload', function () {
  modalChannel.close();
});
