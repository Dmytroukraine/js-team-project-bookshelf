import{N as p,f as g}from"./shopping-list-ed8dc75e.js";const u=()=>fetch("https://books-backend.p.goit.global/books/category-list").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}),l=document.querySelector(".book-category");u().then(e=>{f(e)}).catch(e=>{console.log(e),p.Notify.failure("Oops! Something went wrong! Try reloading the page!")});function f(e){l.innerHTML=e.map(o=>` <li class="list_name">${o.list_name}</li>`).join("")}l.addEventListener("click",b);function b(e){e.target.nodeName==="LI"&&(e.target.classList.contains("active")?e.target.classList.remove("active"):(document.querySelectorAll(".list_name").forEach(a=>a.classList.remove("active")),e.target.classList.add("active")))}function k(){const e=document.querySelector("[data-modal-close]"),o=document.querySelector("[data-modal]");document.body.classList.add("modal-open"),e.addEventListener("click",a);function a(){document.body.classList.remove("modal-open"),o.classList.add("is-hidden"),o.removeEventListener("click",n),e.removeEventListener("click",a),document.removeEventListener("keydown",c)}o.addEventListener("click",n);function n(s){s.target===s.currentTarget&&a()}document.addEventListener("keydown",c);function c(s){s.code==="Escape"&&a()}}function h({book_image:e,title:o,author:a,description:n,buy_links:c,_id:s}){const m=document.querySelector(".modal-fav-book");let i=[];c.forEach(t=>{if(t.name==="Amazon"){const r=`<a href="${t.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;i.push(r)}if(t.name==="Apple Books"){const r=`<a href="${t.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;i.push(r)}if(t.name==="Barnes and Noble"){const r=`<a href="${t.url}" target="_blank" rel="noreferrer noopener">
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
          </a>`;i.push(r)}});const d=`<img class="modal-fav-image" src="${e}" alt="book-cover" width="287" />
   <div class="book-descr-wrapper"><h1 class="modal-fav-title">${o}</h1>
<h2 class="modal-fav-author">${a}</h2>
<p class="modal-fav-descr">${n}</p>
<div class="buy-label">${i.join("")}</div>
</div>`;m.innerHTML=d}v();async function v(){h(await g()),k()}
