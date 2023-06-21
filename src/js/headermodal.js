// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
  
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
  
//       const scrollLockMethod = !isMenuOpen
//         ? 'disableBodyScroll'
//         : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     // Close the mobile menu on wider screens if the device orientation changes
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
//   })();


// Mobile modal 2 codepen



const burgerBtn = document.querySelector('.js-open-menu');
const closeBtn = document.querySelector('.js-close-menu');
const modal = document.querySelector('.js-modal');

const modalChannel = new BroadcastChannel('modal-channel');

burgerBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  burgerBtn.classList.add('hidden');
  modalChannel.postMessage({ action: 'openModal' });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  burgerBtn.classList.remove('hidden');
});

modalChannel.addEventListener('message', function(event) {
  if (event.data.action === 'openModal') {
    modal.style.display = 'block';
    burgerBtn.classList.add('hidden');
  }
});

window.addEventListener('beforeunload', function() {
  modalChannel.close();
});
