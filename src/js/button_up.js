
const btnRef=document.querySelector('.btn_up')

let img = document.createElement('img');
img.src = new URL('../images/btn-up.svg', import.meta.url);
img.class = 'icon-btn_up'
img.width = '16';
img.height='16'
btnRef.appendChild(img);



    // <img src="../images/btn-up.svg" class="icon-btn_up" width="16" height="16" ></img>


  window.addEventListener("scroll", function() {
  if (window.pageYOffset > 1000) {
    addBtnUp();
  } else {
   removeBtnUp();
  }
});
 
btnRef.addEventListener('click', scrollToTop)

function scrollToTop() {
  window.scrollTo({
      top: 0,
      left:0,
    behavior: "smooth"
  });
}

    

function removeBtnUp() {
      btnRef.classList.add('hide-btn_up')
}
function addBtnUp() {
      btnRef.classList.remove('hide-btn_up')
  }
 