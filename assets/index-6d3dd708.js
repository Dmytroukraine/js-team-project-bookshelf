import{N as v,f as h}from"./shopping-list-1515176d.js";const k=()=>fetch("https://books-backend.p.goit.global/books/category-list").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}),u=document.querySelector(".book-category");k().then(e=>{b(e)}).catch(e=>{console.log(e),v.Notify.failure("Oops! Something went wrong! Try reloading the page!")});function b(e){u.innerHTML=e.map(a=>` <li class="list_name">${a.list_name}</li>`).join("")}u.addEventListener("click",y);function y(e){e.target.nodeName==="LI"&&(e.target.classList.contains("active")?e.target.classList.remove("active"):(document.querySelectorAll(".list_name").forEach(o=>o.classList.remove("active")),e.target.classList.add("active")))}function L(){const e=document.querySelector("[data-modal-close]"),a=document.querySelector("[data-modal]");document.body.classList.add("modal-open"),e.addEventListener("click",o);function o(){document.body.classList.remove("modal-open"),a.classList.add("is-hidden"),a.removeEventListener("click",s),e.removeEventListener("click",o),document.removeEventListener("keydown",c)}a.addEventListener("click",s);function s(r){r.target===r.currentTarget&&o()}document.addEventListener("keydown",c);function c(r){r.code==="Escape"&&o()}}function $({book_image:e,title:a,author:o,description:s,buy_links:c,_id:r}){const g=document.querySelector(".modal-fav-book");let l=[],i,m,d,p;c.forEach(t=>{if(t.name==="Amazon"){const n=`<a href="${t.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;l.push(n)}if(t.name==="Apple Books"){const n=`<a href="${t.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;l.push(n)}if(t.name==="Barnes and Noble"){const n=`<a href="${t.url}" target="_blank" rel="noreferrer noopener">
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
          </a>`;l.push(n)}}),e!==""?i=`<img class="modal-fav-image" src="${e}" alt="book-cover"/>`:i='<img class="modal-fav-image" src="../images/Logotype.png" alt="book-cover"/>',a!==""?m=`<h1 class="modal-fav-title">${a}</h1>`:m='<h1 class="modal-fav-title">No title</h1>',o!==""?d=`<h2 class="modal-fav-author">${o}</h2>`:d='<h2 class="modal-fav-author">No author name</h2>',s!==""?p=`<p class="modal-fav-descr">${s}</p>`:p='<p class="modal-fav-descr">No description</p>';const f=`${i}
   <div class="book-descr-wrapper">${m}
${d}
${p}
<div class="buy-label">${l.join("")}</div>
</div>`;g.innerHTML=f}E();async function E(e){$(await h()),L()}
