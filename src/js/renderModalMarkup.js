

function renderModalMarkup({
  book_image,
  title,
  author,
  description,
  buy_links,
}) {

  const bookRef = document.querySelector('.modal-fav-book');
  let buyMarkup = [];
    
  buy_links.forEach(link => {
    console.log(link.name);
    if (link.name === 'Amazon') {
      console.log(link.url, '!');
      const amazon = `<a href="${link.url}" target="_blank" rel="noreferrer noopener">
          <picture class="buy-img">
            <source
              srcset="../images/amazon.png 1x, /src/images/amazon-2x.png 2x"
              type="image/jpeg"
            />
            <img
              class="buyImg"
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
              class="buyImg"
              src="../images/apple-books.png"
              alt="apple label"
      
            />
          </picture>
        </a>`;

      buyMarkup.push(apple);
    }

    if (link.name === 'Barnes and Noble') {
      console.log(link.url, '!');
      const barnes = `<a href="${link.url}" target="_blank" rel="noreferrer noopener">
            <picture class="buy-img">
              <source
                srcset="../images/book-shop.png 1x, ../images/book-shop-2x.png 2x"
                type="image/png"
              />
              <img
                class="buyImg"
                src="../images/book-shop.png"
                alt="apple label"

              />
            </picture>
          </a>`;

      buyMarkup.push(barnes);
    }
  });

  console.log(buyMarkup);

//   console.log(data);

  const markup = `<img class="modal-fav-image" src="${book_image}" alt="book-cover" width="287" height: "408"/>
   <h1 class="modal-fav-title">${title}</h1>
<h2 class="modal-fav-author">${author}</h2>
<p class="modal-fav-descr">${description}</p>
<div class="buy-label">${buyMarkup.join('')}</div>`;

  bookRef.insertAdjacentHTML('beforeend', markup);
}


export { renderModalMarkup };