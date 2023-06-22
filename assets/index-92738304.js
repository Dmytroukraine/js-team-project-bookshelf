import{g as V,c as $,n as E,a as _,f as Z,l as W,b as k,N as z}from"./shopping-list-db2d1d87.js";var Y="Expected a function",F=0/0,ee="[object Symbol]",te=/^\s+|\s+$/g,oe=/^[-+]0x[0-9a-f]+$/i,ne=/^0b[01]+$/i,re=/^0o[0-7]+$/i,ae=parseInt,ie=typeof $=="object"&&$&&$.Object===Object&&$,se=typeof self=="object"&&self&&self.Object===Object&&self,le=ie||se||Function("return this")(),ce=Object.prototype,de=ce.toString,ge=Math.max,ue=Math.min,q=function(){return le.Date.now()};function fe(e,t,o){var n,r,a,l,s,c,g=0,b=!1,u=!1,y=!0;if(typeof e!="function")throw new TypeError(Y);t=D(t)||0,H(o)&&(b=!!o.leading,u="maxWait"in o,a=u?ge(D(o.maxWait)||0,t):a,y="trailing"in o?!!o.trailing:y);function h(i){var m=n,v=r;return n=r=void 0,g=i,l=e.apply(v,m),l}function f(i){return g=i,s=setTimeout(M,t),b?h(i):l}function p(i){var m=i-c,v=i-g,O=t-m;return u?ue(O,a-v):O}function I(i){var m=i-c,v=i-g;return c===void 0||m>=t||m<0||u&&v>=a}function M(){var i=q();if(I(i))return N(i);s=setTimeout(M,p(i))}function N(i){return s=void 0,y&&n?h(i):(n=r=void 0,l)}function K(){s!==void 0&&clearTimeout(s),g=0,n=c=r=s=void 0}function Q(){return s===void 0?l:N(q())}function x(){var i=q(),m=I(i);if(n=arguments,r=this,c=i,m){if(s===void 0)return f(c);if(u)return s=setTimeout(M,t),h(c)}return s===void 0&&(s=setTimeout(M,t)),l}return x.cancel=K,x.flush=Q,x}function me(e,t,o){var n=!0,r=!0;if(typeof e!="function")throw new TypeError(Y);return H(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),fe(e,t,{leading:n,maxWait:t,trailing:r})}function H(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ye(e){return!!e&&typeof e=="object"}function pe(e){return typeof e=="symbol"||ye(e)&&de.call(e)==ee}function D(e){if(typeof e=="number")return e;if(pe(e))return F;if(H(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=H(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(te,"");var o=ne.test(e);return o||re.test(e)?ae(e.slice(2),o?2:8):oe.test(e)?F:+e}var be=me;const he=V(be);function U(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}const ve=()=>{E.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},ke=()=>{E.Loading.remove()},Le=()=>{E.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},Se=()=>{E.Loading.remove()};async function P(e){try{Le();const t=await _.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return Se(),t.data}catch(t){console.log("catch error",t)}}async function C(){try{ve();const e=await _.get("https://books-backend.p.goit.global/books/top-books");return ke(),e.data}catch(e){console.log("catch error",e)}}function G(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function B(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function Te({book_image:e,title:t,author:o,description:n,buy_links:r,_id:a}){const l=document.querySelector(".modal-fav-book");document.querySelector(".modal-fav");const s=document.querySelector(".btn-wrap");let c=[],g,b,u,y;r.forEach(f=>{if(f.name==="Amazon"){const p=`<a href="${f.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;c.push(p)}if(f.name==="Apple Books"){const p=`<a href="${f.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;c.push(p)}if(f.name==="Barnes and Noble"){const p=`<a href="${f.url}" target="_blank" rel="noreferrer noopener">
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
          </a>`;c.push(p)}}),e!==""?g=`<img class="modal-fav-image" src="${e}" alt="book-cover"/>`:g='<img class="modal-fav-image" src="../images/Logotype.png" alt="book-cover"/>',t!==""?b=`<h1 class="modal-fav-title">${t}</h1>`:b='<h1 class="modal-fav-title">No title</h1>',o!==""?u=`<h2 class="modal-fav-author">${o}</h2>`:u='<h2 class="modal-fav-author">No author name</h2>',n!==""?y=`<p class="modal-fav-descr">${n}</p>`:y='<p class="modal-fav-descr">No description</p>';const h=`${g}
   <div class="book-descr-wrapper">${b}
${u}
${y}
<div class="buy-label">${c.join("")}</div>

</div>`;l.innerHTML=h,s.innerHTML='<button class="fav-add-book-btn" data-id = ${_id} type="button">add to shopping list</button>'}function Me(){const e=document.querySelector("[data-modal-close]"),t=document.querySelector("[data-modal]");document.body.classList.add("modal-open"),t.classList.remove("is-hidden"),e.addEventListener("click",o);function o(){document.body.classList.remove("modal-open"),t.classList.add("is-hidden"),t.removeEventListener("click",n),e.removeEventListener("click",o),document.removeEventListener("keydown",r)}t.addEventListener("click",n);function n(a){a.target===a.currentTarget&&o()}document.addEventListener("keydown",r);function r(a){a.code==="Escape"&&o()}}const j=document.querySelector(".add-book-notification");async function J(e){const t=e.currentTarget.dataset.id,o=await Z(e.currentTarget.dataset.id);Te(o);const n=document.querySelector(".fav-add-book-btn");W(t)==null?(j.classList.add("hidden"),n.textContent="add to shopping list"):(j.classList.remove("hidden"),n.textContent="remove from the shopping list"),Me(),n.addEventListener("click",r);function r(){if(W(t)==null)try{k.push(o),localStorage.setItem("books",JSON.stringify(k)),j.classList.remove("hidden"),n.textContent="remove from the shopping list",z.Notify.info("You have added the book to the shopping list.")}catch(a){console.log(a)}else try{j.classList.add("hidden"),n.textContent="add to shopping list";const a=k.findIndex(l=>l._id==t);a!==-1&&(k.splice(a,1),localStorage.setItem("books",JSON.stringify(k)),z.Notify.info("You have removed the book from the shopping list."))}catch(a){console.log(a)}}}function T(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let o=0;o<e.length;o++)e[o].addEventListener("click",J);for(let o=0;o<t.length;o++)t[o].addEventListener("click",J)}const{galleryRef:L,categoriesRef:$e}=U();function A(e){if(L.innerHTML="",e.target.innerHTML==="See more"){L.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,e.target.innerHTML.length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),L.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const n=document.querySelector(".gallery-list2"),r=e.target.dataset.category.split(" ").join("%20");P(r).then(a=>{a.map(l=>{n.insertAdjacentHTML("beforeend",G(l))}),T()}),$e.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){w(),window.scrollTo(0,0);return}L.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,e.target.innerHTML.length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),L.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),o=e.target.innerHTML.trim().split(" ").join("%20");P(o).then(n=>{n.map(r=>t.insertAdjacentHTML("beforeend",G(r))),T()}),window.scrollTo(0,0)}const{galleryRef:d}=U();function w(){d.innerHTML="",document.documentElement.clientWidth<768?(d.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let o of e)d.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>`),d.insertAdjacentHTML("beforeend",B(o.books[0])),d.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<t.length;o++)t[o].addEventListener("click",A);T()})):document.documentElement.clientWidth<1440?(d.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let o of e){d.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);const n=document.querySelectorAll(".gallery-list"),r=n[n.length-1];for(let a=0;a<3;a++)r.insertAdjacentHTML("beforeend",B(o.books[a]));d.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const t=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<t.length;o++)t[o].addEventListener("click",A);T()})):(d.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let n of e){d.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const r=t[t.length-1];for(let a=0;a<5;a++)r.insertAdjacentHTML("beforeend",B(n.books[a]));d.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`)}const o=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<o.length;n++)o[n].addEventListener("click",A);T()})),window.scrollTo(0,0)}w();let S=document.documentElement.clientWidth;onresize=he(e=>{e.preventDefault();let t=document.documentElement.clientWidth;S<768?t>767&&(R(),S=t):S<1440?(t>1439||t<768)&&(R(),S=t):t<1440&&(R(),S=t)},100);function R(){document.querySelector(".active").innerHTML.trim()==="All categories"&&w()}const X=document.querySelector(".nav-categories-list");async function je(){const{data:e}=await _.get("https://books-backend.p.goit.global/books/category-list");return e}const Ae=async()=>{try{const e=await je();X.innerHTML=await Ee(e),document.querySelectorAll(".nav-category-item").forEach(o=>{o.addEventListener("click",n=>{const r=document.querySelector(".nav-category-item.active");r&&r.classList.remove("active"),n.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};Ae();X.addEventListener("click",He);function He(e){e.target.dataset.id&&A(e)}function Ee(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}
