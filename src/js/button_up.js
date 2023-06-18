
const btnRef=document.querySelector('.btn_up')



window.addEventListener('scroll', () => {
  
    
    isScrollAtBottom()
          ? addBtnUp()
          : removeBtnUp();
})
 
btnRef.addEventListener('click', scrollToTop)

function scrollToTop() {
  window.scrollTo({
      top: 0,
      left:0,
    behavior: "smooth"
  });
}

  

  function isScrollAtBottom() {
  const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
 const clientHeight = document.documentElement.clientHeight || window.innerHeight;
  
      const scrollThreshold = 100;

      const isNearBottom = scrollTop + clientHeight >= scrollHeight - scrollThreshold;
      
      return isNearBottom;
  }
    

function removeBtnUp() {
      btnRef.classList.add('hide-btn_up')
}
function addBtnUp() {
      btnRef.classList.remove('hide-btn_up')
  }
 