const inputTheme = document.querySelector('.theme-switch__control');
const spanTheme = document.querySelector('.span-theme');
const logoIcon = document.querySelector('.header-logo-icon');
const logoIcon1 = document.querySelector('.header-logo-icon1');
const body = document.querySelector('body');
let indexTheme = false;

inputTheme.addEventListener('change', () => {
  if (indexTheme) {
    indexTheme = false;
    localStorage.setItem('userTheme', 'light'); 
  } else {
    indexTheme = true;
    localStorage.setItem('userTheme', 'dark'); 
  }
  
  currentTheme();
});

function currentTheme() {
  try {
    indexTheme = localStorage.getItem('userTheme') === 'dark' ? true : false;
  } catch (error) {
    indexTheme = false;
  }

  
  if (indexTheme) {
    body.classList.add('dark-theme');
    spanTheme.style.left = '20px';
    logoIcon.style.width = '0px';
    logoIcon1.style.width = '109px';
  } else {
    body.classList.remove('dark-theme');
    spanTheme.style.left = '2px';
    logoIcon1.style.width = '0px';
    logoIcon.style.width = '109px';
  }
}

currentTheme();


const headerNavLinks = document.querySelector('.header-nav-link').querySelectorAll('a');
if (document.querySelector('.home-page') === null) {
  for (let index = 0; index < headerNavLinks.length; index++) {
    headerNavLinks[index].classList.toggle("header-active"); 
    
  }
}

