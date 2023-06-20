

function renderModalMarkup({
  book_image,
  title,
  author,
  description,
  buy_links,
  _id,
}) {

  const bookRef = document.querySelector('.modal-fav-book');
  let buyMarkup = [];
  let markupImg;
  let markupTitle;
  let markupAuthor;
  let markupDescription;
  // bookRef.addEventListener('click', onIdBookClick);
  // function onIdBookClick(event) {
  //   console.log(event.target, _id);
  // }



  buy_links.forEach(link => {
   
    if (link.name === 'Amazon') {
      
      const amazon = `<a href="${link.url}" target="_blank" rel="noreferrer noopener">
          <picture class="buy-img">
            <source
              srcset="../images/amazon.png 1x, ../images/amazon-2x.png 2x"
              type="image/jpeg"
            />
            <img
              src="../images/amazon.png"
              alt="amazon label"
            />
          </picture>
        </a>`;

      buyMarkup.push(amazon);
    }

    if (link.name === 'Apple Books') {
      const apple = `<a href="${link.url}" target="_blank" rel="noreferrer noopener">
          <picture class="buy-img">
            <source
              srcset="../images/apple-books.png 1x, ../images/apple-books-2x.png 2x"
              type="image/png"
            />
            <img
              src="../images/apple-books.png"
              alt="apple label"
      
            />
          </picture>
        </a>`;

      buyMarkup.push(apple);
    }

    if (link.name === 'Barnes and Noble') {
      
      const barnes = `<a href="${link.url}" target="_blank" rel="noreferrer noopener">
            <picture class="buy-img">
              <source
                srcset="../images/book-shop.png 1x, ../images/book-shop-2x.png 2x"
                type="image/png"
              />
              <img
                src="../images/book-shop.png"
                alt="apple label"

              />
            </picture>
          </a>`;

      buyMarkup.push(barnes);
    }
  });

  if (book_image !== '') {
     markupImg = `<img class="modal-fav-image" src="${book_image}" alt="book-cover"/>`
  } else {
      markupImg = `<img class="modal-fav-image" src="../images/Logotype.png" alt="book-cover"/>`;
  };
  
  if (title !== '') {
    markupTitle = `<h1 class="modal-fav-title">${title}</h1>`
  } else {
    markupTitle = `<h1 class="modal-fav-title">No title</h1>`
  };
 
  if (author !== '') {
    markupAuthor = `<h2 class="modal-fav-author">${author}</h2>`
  } else {
    markupAuthor = `<h2 class="modal-fav-author">No author name</h2>`
  };
  
  if (description !=='')
  {
    markupDescription = `<p class="modal-fav-descr">${description}</p>`
  } else {
    markupDescription = `<p class="modal-fav-descr">No description</p>`
  };
   

  const markup = `${markupImg}
   <div class="book-descr-wrapper">${markupTitle}
${markupAuthor}
${markupDescription}
<div class="buy-label">${buyMarkup.join('')}</div>
</div>`;
  bookRef.innerHTML = markup;
}






//   const markup = `<img class="modal-fav-image" src="${book_image}" alt="book-cover" width="287" />
//    <div class="book-descr-wrapper"><h1 class="modal-fav-title">${title}</h1>
// <h2 class="modal-fav-author">${author}</h2>
// <p class="modal-fav-descr">${description}</p>
// <div class="buy-label">${buyMarkup.join('')}</div>
// </div>`;
//   bookRef.innerHTML = markup;
// }


export { renderModalMarkup };