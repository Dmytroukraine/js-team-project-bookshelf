const inputTheme = document.querySelector('.theme-switch__control');
const spanTheme = document.querySelector('.span-theme');
const body = document.querySelector('body');
const logoIcon = document.querySelector('.header-logo-icon');
const logoIcon1 = document.querySelector('.header-logo-icon1');
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


function addDarkClassToHTML(){
    try {
        if (localStorage.getItem('theme') ==='dark') {
            document.querySelector('body').classList.add('dark');
            document.querySelector('header').classList.add('dark-header');
            document.querySelector('.header-mobile-menu').classList.add('dark-header');
            document.querySelector('#theme-switch-toggle').setAttribute('checked', true);
        }
        else {
            document.querySelector('body').classList.remove('dark');
            document.querySelector('header').classList.remove('dark-header');
            document.querySelector('.header-mobile-menu').classList.remove('dark-header');
            document.getElementById('.theme-switch__marker').checked = true;
        }
    } catch(error) { console.log(error.message);
    }

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

