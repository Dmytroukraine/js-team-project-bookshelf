import amazonLink from '../images/amazon.png';
import appleBooks from '../images/apple-books.png';
import bookShop from '../images/book-shop.png';

let isAuth;
let isAuthSrt;

function renderModalMarkup({
  book_image,
  title,
  author,
  description,
  buy_links,
  _id,
}) {
  const bookRef = document.querySelector('.modal-fav-book');
  const modalRef = document.querySelector('.modal-fav');
  const btnWrap = document.querySelector('.btn-wrap');
  let buyMarkup = [];
  let markupImg;
  let markupTitle;
  let markupAuthor;
  let markupDescription;

  isAuthSrt = localStorage.getItem('isAuthenticated');

  try {
    isAuth = JSON.parse(isAuthSrt);
  } catch (error) {
    console.log(error);
  }

  buy_links.forEach(link => {
    if (link.name === 'Amazon') {
      const amazon = `<a href="${link.url}" target="_blank" rel="noreferrer noopener">
            <img
            // src="${amazonLink}"
            alt="amazon label"
            class="buy-img amaz"
            />
        </a>`;

      buyMarkup.push(amazon);
    }

    if (link.name === 'Apple Books') {
      const apple = `<a href="${link.url}" target="_blank" rel="noreferrer noopener">
            <img
            src="${appleBooks}"
            alt="apple label"
            class="buy-img"
                />
        </a>`;

      buyMarkup.push(apple);
    }

    if (link.name === 'Barnes and Noble') {
      const barnes = `<a href="${link.url}" target="_blank" rel="noreferrer noopener">
              <img
                src="${bookShop}"
                alt="apple label"
                class="buy-img"
              />
                </a>`;

      buyMarkup.push(barnes);
    }
  });

  if (book_image !== '') {
    markupImg = `<img class="modal-fav-image" src="${book_image}" alt="book-cover"/>`;
  } else {
    markupImg = `<img class="modal-fav-image" src="../images/Logotype.png" alt="book-cover"/>`;
  }

  if (title !== '') {
    markupTitle = `<h1 class="modal-fav-title">${title}</h1>`;
  } else {
    markupTitle = `<h1 class="modal-fav-title">No title</h1>`;
  }

  if (author !== '') {
    markupAuthor = `<h2 class="modal-fav-author">${author}</h2>`;
  } else {
    markupAuthor = `<h2 class="modal-fav-author">No author name</h2>`;
  }

  if (description !== '') {
    markupDescription = `<p class="modal-fav-descr">${description}</p>`;
  } else {
    markupDescription = `<p class="modal-fav-descr">No description</p>`;
  }

  const markup = `${markupImg}
   <div class="book-descr-wrapper">${markupTitle}
${markupAuthor}
${markupDescription}
<div class="buy-label">${buyMarkup.join('')}</div>

</div>`;
  bookRef.innerHTML = markup;
  if (isAuth) {
    btnWrap.innerHTML =
      '<button class="fav-add-book-btn" data-id = ${_id} type="button">add to shopping list</button>';
  } else {
    return;
  }
}

export { renderModalMarkup, isAuth };
