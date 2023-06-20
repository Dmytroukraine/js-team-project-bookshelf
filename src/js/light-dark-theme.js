

document.querySelector('#theme-switch-toggle').addEventListener('click', (event) => {

    event.preventDefault();
    if (localStorage.getItem('theme') ==='dark') {
        localStorage.removeItem('theme');
    }
    else { 
        localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHTML(); 
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
}

addDarkClassToHTML();


