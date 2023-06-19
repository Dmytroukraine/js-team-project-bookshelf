import throttle from 'lodash.throttle';
import { renderingHomePage } from './renderingHomePage';
import { renderingModal } from './onBookClick';

renderingHomePage();

let screenSize = document.documentElement.clientWidth;

onresize = throttle(e => {
  e.preventDefault();
  let currentScreenSize = document.documentElement.clientWidth;

  if (screenSize < 768) {
    if (currentScreenSize > 767) {
      reloadingHomePage();
      screenSize = currentScreenSize;
    }
  } else if (screenSize < 1440) {
    if (currentScreenSize > 1439 || currentScreenSize < 768) {
      reloadingHomePage();
      screenSize = currentScreenSize;
    }
  } else {
    if (currentScreenSize < 1440) {
      reloadingHomePage();
      screenSize = currentScreenSize;
    }
  }
  if (!document.querySelector('[data-modal]').classList.contains('is-hidden')) {
    renderingModal();
  }
}, 100);

function reloadingHomePage() {
  const activeCategory = document.querySelector('.active');
  if (activeCategory.innerHTML.trim() === 'All categories') {
    renderingHomePage();
  }
}
