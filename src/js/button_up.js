
const btnRef=document.querySelector('.btn_up')



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
 