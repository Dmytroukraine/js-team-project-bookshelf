import{g as V,c as $,n as E,a as _,f as Y,l as N}from"./shopping-list-ca487988.js";var J="Expected a function",z=0/0,Z="[object Symbol]",ee=/^\s+|\s+$/g,te=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,re=parseInt,ae=typeof $=="object"&&$&&$.Object===Object&&$,le=typeof self=="object"&&self&&self.Object===Object&&self,se=ae||le||Function("return this")(),ie=Object.prototype,ce=ie.toString,de=Math.max,ge=Math.min,x=function(){return se.Date.now()};function ue(e,t,o){var n,r,a,i,s,c,g=0,h=!1,u=!1,y=!0;if(typeof e!="function")throw new TypeError(J);t=F(t)||0,H(o)&&(h=!!o.leading,u="maxWait"in o,a=u?de(F(o.maxWait)||0,t):a,y="trailing"in o?!!o.trailing:y);function v(l){var f=n,k=r;return n=r=void 0,g=l,i=e.apply(k,f),i}function m(l){return g=l,s=setTimeout(M,t),h?v(l):i}function p(l){var f=l-c,k=l-g,W=t-f;return u?ge(W,a-k):W}function I(l){var f=l-c,k=l-g;return c===void 0||f>=t||f<0||u&&k>=a}function M(){var l=x();if(I(l))return O(l);s=setTimeout(M,p(l))}function O(l){return s=void 0,y&&n?v(l):(n=r=void 0,i)}function K(){s!==void 0&&clearTimeout(s),g=0,n=c=r=s=void 0}function Q(){return s===void 0?i:O(x())}function q(){var l=x(),f=I(l);if(n=arguments,r=this,c=l,f){if(s===void 0)return m(c);if(u)return s=setTimeout(M,t),v(c)}return s===void 0&&(s=setTimeout(M,t)),i}return q.cancel=K,q.flush=Q,q}function me(e,t,o){var n=!0,r=!0;if(typeof e!="function")throw new TypeError(J);return H(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),ue(e,t,{leading:n,maxWait:t,trailing:r})}function H(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function fe(e){return!!e&&typeof e=="object"}function ye(e){return typeof e=="symbol"||fe(e)&&ce.call(e)==Z}function F(e){if(typeof e=="number")return e;if(ye(e))return z;if(H(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=H(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ee,"");var o=oe.test(e);return o||ne.test(e)?re(e.slice(2),o?2:8):te.test(e)?z:+e}var pe=me;const be=V(pe);function U(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}const he=()=>{E.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},ve=()=>{E.Loading.remove()},ke=()=>{E.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},Le=()=>{E.Loading.remove()};async function D(e){try{ke();const t=await _.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return Le(),t.data}catch(t){console.log("catch error",t)}}async function C(){try{he();const e=await _.get("https://books-backend.p.goit.global/books/top-books");return ve(),e.data}catch(e){console.log("catch error",e)}}function P(e){return`  <div class="gallery-book-link" data-id="${e._id}">
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
            </div>`}function Se({book_image:e,title:t,author:o,description:n,buy_links:r,_id:a}){const i=document.querySelector(".modal-fav-book");document.querySelector(".modal-fav");const s=document.querySelector(".btn-wrap");let c=[],g,h,u,y;r.forEach(m=>{if(m.name==="Amazon"){const p=`<a href="${m.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;c.push(p)}if(m.name==="Apple Books"){const p=`<a href="${m.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;c.push(p)}if(m.name==="Barnes and Noble"){const p=`<a href="${m.url}" target="_blank" rel="noreferrer noopener">
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
          </a>`;c.push(p)}}),e!==""?g=`<img class="modal-fav-image" src="${e}" alt="book-cover"/>`:g='<img class="modal-fav-image" src="../images/Logotype.png" alt="book-cover"/>',t!==""?h=`<h1 class="modal-fav-title">${t}</h1>`:h='<h1 class="modal-fav-title">No title</h1>',o!==""?u=`<h2 class="modal-fav-author">${o}</h2>`:u='<h2 class="modal-fav-author">No author name</h2>',n!==""?y=`<p class="modal-fav-descr">${n}</p>`:y='<p class="modal-fav-descr">No description</p>';const v=`${g}
   <div class="book-descr-wrapper">${h}
${u}
${y}
<div class="buy-label">${c.join("")}</div>

</div>`;i.innerHTML=v,s.innerHTML='<button class="fav-add-book-btn" data-id = ${_id} type="button">add to shopping list</button>'}function Te(){const e=document.querySelector("[data-modal-close]"),t=document.querySelector("[data-modal]");document.body.classList.add("modal-open"),t.classList.remove("is-hidden"),e.addEventListener("click",o);function o(){document.body.classList.remove("modal-open"),t.classList.add("is-hidden"),t.removeEventListener("click",n),e.removeEventListener("click",o),document.removeEventListener("keydown",r)}t.addEventListener("click",n);function n(a){a.target===a.currentTarget&&o()}document.addEventListener("keydown",r);function r(a){a.code==="Escape"&&o()}}const j=document.querySelector(".add-book-notification");let b=[];async function G(e){const t=e.currentTarget.dataset.id;console.log(t);const o=await Y(e.currentTarget.dataset.id);Se(o);const n=document.querySelector(".fav-add-book-btn");N(t)==null?(j.classList.add("hidden"),n.textContent="add to shopping list"):(j.classList.remove("hidden"),n.textContent="remove from the shopping list"),Te(),n.addEventListener("click",r);function r(){if(N(t)==null)try{console.log(t,"add"),b.push(o),console.log(b,"add"),localStorage.setItem("books",JSON.stringify(b)),j.classList.remove("hidden"),n.textContent="remove from the shopping list"}catch(a){console.log(a)}else try{j.classList.add("hidden"),n.textContent="add to shopping list";const a=b.findIndex(i=>i._id==t);console.log(t,"rem"),a!==-1&&(b.splice(a,1),console.log(b,"rem"),localStorage.setItem("books",JSON.stringify(b)))}catch(a){console.log(a)}}}function T(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let o=0;o<e.length;o++)e[o].addEventListener("click",G);for(let o=0;o<t.length;o++)t[o].addEventListener("click",G)}const{galleryRef:L,categoriesRef:Me}=U();function A(e){if(L.innerHTML="",e.target.innerHTML==="See more"){L.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),L.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const n=document.querySelector(".gallery-list2"),r=e.target.dataset.category.split(" ").join("%20");D(r).then(a=>{a.map(i=>{n.insertAdjacentHTML("beforeend",P(i))}),T()}),Me.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){w(),window.scrollTo(0,0);return}L.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),L.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),o=e.target.innerHTML.trim().split(" ").join("%20");D(o).then(n=>{n.map(r=>t.insertAdjacentHTML("beforeend",P(r))),T()}),window.scrollTo(0,0)}const{galleryRef:d}=U();function w(){d.innerHTML="",document.documentElement.clientWidth<768?(d.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let o of e)d.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>`),d.insertAdjacentHTML("beforeend",B(o.books[0])),d.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<t.length;o++)t[o].addEventListener("click",A);T()})):document.documentElement.clientWidth<1440?(d.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let o of e){d.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);const n=document.querySelectorAll(".gallery-list"),r=n[n.length-1];for(let a=0;a<3;a++)r.insertAdjacentHTML("beforeend",B(o.books[a]));d.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const t=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<t.length;o++)t[o].addEventListener("click",A);T()})):(d.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),C().then(e=>{for(let n of e){d.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const r=t[t.length-1];for(let a=0;a<5;a++)r.insertAdjacentHTML("beforeend",B(n.books[a]));d.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`)}const o=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<o.length;n++)o[n].addEventListener("click",A);T()})),window.scrollTo(0,0)}w();let S=document.documentElement.clientWidth;onresize=be(e=>{e.preventDefault();let t=document.documentElement.clientWidth;S<768?t>767&&(R(),S=t):S<1440?(t>1439||t<768)&&(R(),S=t):t<1440&&(R(),S=t),document.querySelector("[data-modal]").classList.contains("is-hidden")||renderingModal()},100);function R(){document.querySelector(".active").innerHTML.trim()==="All categories"&&w()}const X=document.querySelector(".nav-categories-list");async function $e(){const{data:e}=await _.get("https://books-backend.p.goit.global/books/category-list");return e}const je=async()=>{try{const e=await $e();X.innerHTML=await He(e),document.querySelectorAll(".nav-category-item").forEach(o=>{o.addEventListener("click",n=>{const r=document.querySelector(".nav-category-item.active");r&&r.classList.remove("active"),n.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};je();X.addEventListener("click",Ae);function Ae(e){e.target.dataset.id&&A(e)}function He(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}
