import{g as J,c as S,n as $,a as x,f as K}from"./button_up-33ff2d01.js";var N="Expected a function",I=0/0,Q="[object Symbol]",V=/^\s+|\s+$/g,Y=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,ee=/^0o[0-7]+$/i,te=parseInt,re=typeof S=="object"&&S&&S.Object===Object&&S,oe=typeof self=="object"&&self&&self.Object===Object&&self,ne=re||oe||Function("return this")(),ae=Object.prototype,ie=ae.toString,le=Math.max,se=Math.min,H=function(){return ne.Date.now()};function ce(e,t,r){var o,n,a,d,l,s,u=0,p=!1,f=!1,b=!0;if(typeof e!="function")throw new TypeError(N);t=O(t)||0,j(r)&&(p=!!r.leading,f="maxWait"in r,a=f?le(O(r.maxWait)||0,t):a,b="trailing"in r?!!r.trailing:b);function g(i){var m=o,v=n;return o=n=void 0,u=i,d=e.apply(v,m),d}function y(i){return u=i,l=setTimeout(T,t),p?g(i):d}function G(i){var m=i-s,v=i-u,w=t-m;return f?se(w,a-v):w}function R(i){var m=i-s,v=i-u;return s===void 0||m>=t||m<0||f&&v>=a}function T(){var i=H();if(R(i))return _(i);l=setTimeout(T,G(i))}function _(i){return l=void 0,b&&o?g(i):(o=n=void 0,d)}function U(){l!==void 0&&clearTimeout(l),u=0,o=s=n=l=void 0}function X(){return l===void 0?d:_(H())}function A(){var i=H(),m=R(i);if(o=arguments,n=this,s=i,m){if(l===void 0)return y(s);if(f)return l=setTimeout(T,t),g(s)}return l===void 0&&(l=setTimeout(T,t)),d}return A.cancel=U,A.flush=X,A}function de(e,t,r){var o=!0,n=!0;if(typeof e!="function")throw new TypeError(N);return j(r)&&(o="leading"in r?!!r.leading:o,n="trailing"in r?!!r.trailing:n),ce(e,t,{leading:o,maxWait:t,trailing:n})}function j(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ge(e){return!!e&&typeof e=="object"}function ue(e){return typeof e=="symbol"||ge(e)&&ie.call(e)==Q}function O(e){if(typeof e=="number")return e;if(ue(e))return I;if(j(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=j(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(V,"");var r=Z.test(e);return r||ee.test(e)?te(e.slice(2),r?2:8):Y.test(e)?I:+e}var fe=de;const me=J(fe);function D(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}const ye=()=>{$.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},pe=()=>{$.Loading.remove()},be=()=>{$.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},ve=()=>{$.Loading.remove()};async function W(e){try{be();const t=await x.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return ve(),t.data}catch(t){console.log("catch error",t)}}async function E(){try{ye();const e=await x.get("https://books-backend.p.goit.global/books/top-books");return pe(),e.data}catch(e){console.log("catch error",e)}}function z(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function q(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function he({book_image:e,title:t,author:r,description:o,buy_links:n,_id:a}){const d=document.querySelector(".modal-fav-book");let l=[],s,u,p,f;n.forEach(g=>{if(g.name==="Amazon"){const y=`<a href="${g.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;l.push(y)}if(g.name==="Apple Books"){const y=`<a href="${g.url}" target="_blank" rel="noreferrer noopener">
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
        </a>`;l.push(y)}if(g.name==="Barnes and Noble"){const y=`<a href="${g.url}" target="_blank" rel="noreferrer noopener">
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
          </a>`;l.push(y)}}),e!==""?s=`<img class="modal-fav-image" src="${e}" alt="book-cover"/>`:s='<img class="modal-fav-image" src="../images/Logotype.png" alt="book-cover"/>',t!==""?u=`<h1 class="modal-fav-title">${t}</h1>`:u='<h1 class="modal-fav-title">No title</h1>',r!==""?p=`<h2 class="modal-fav-author">${r}</h2>`:p='<h2 class="modal-fav-author">No author name</h2>',o!==""?f=`<p class="modal-fav-descr">${o}</p>`:f='<p class="modal-fav-descr">No description</p>';const b=`${s}
   <div class="book-descr-wrapper">${u}
${p}
${f}
<div class="buy-label">${l.join("")}</div>
</div>`;d.innerHTML=b}function ke(){const e=document.querySelector("[data-modal-close]"),t=document.querySelector("[data-modal]");document.body.classList.add("modal-open"),t.classList.remove("is-hidden"),e.addEventListener("click",r);function r(){document.body.classList.remove("modal-open"),t.classList.add("is-hidden"),t.removeEventListener("click",o),e.removeEventListener("click",r),document.removeEventListener("keydown",n)}t.addEventListener("click",o);function o(a){a.target===a.currentTarget&&r()}document.addEventListener("keydown",n);function n(a){a.code==="Escape"&&r()}}async function F(e){console.log(e.currentTarget.dataset.id),he(await K(e.currentTarget.dataset.id)),ke()}function L(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let r=0;r<e.length;r++)e[r].addEventListener("click",F);for(let r=0;r<t.length;r++)t[r].addEventListener("click",F)}const{galleryRef:h,categoriesRef:Le}=D();function M(e){if(h.innerHTML="",e.target.innerHTML==="See more"){h.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),h.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const o=document.querySelector(".gallery-list2"),n=e.target.dataset.category.split(" ").join("%20");W(n).then(a=>{a.map(d=>{o.insertAdjacentHTML("beforeend",z(d))}),L()}),Le.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){B(),window.scrollTo(0,0);return}h.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),h.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),r=e.target.innerHTML.trim().split(" ").join("%20");W(r).then(o=>{o.map(n=>t.insertAdjacentHTML("beforeend",z(n))),L()}),window.scrollTo(0,0)}const{galleryRef:c}=D();function B(){c.innerHTML="",document.documentElement.clientWidth<768?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),E().then(e=>{for(let r of e)c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${r.books[0].list_name}</h3>`),c.insertAdjacentHTML("beforeend",q(r.books[0])),c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${r.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let r=0;r<t.length;r++)t[r].addEventListener("click",M);L()})):document.documentElement.clientWidth<1440?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),E().then(e=>{for(let r of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${r.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);const o=document.querySelectorAll(".gallery-list"),n=o[o.length-1];for(let a=0;a<3;a++)n.insertAdjacentHTML("beforeend",q(r.books[a]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${r.books[0].list_name}">See more</button>`)}const t=document.querySelectorAll(".gallery-see-more-btn");for(let r=0;r<t.length;r++)t[r].addEventListener("click",M);L()})):(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),E().then(e=>{for(let o of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const n=t[t.length-1];for(let a=0;a<5;a++)n.insertAdjacentHTML("beforeend",q(o.books[a]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const r=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<r.length;o++)r[o].addEventListener("click",M);L()})),window.scrollTo(0,0)}B();let k=document.documentElement.clientWidth;onresize=me(e=>{e.preventDefault();let t=document.documentElement.clientWidth;k<768?t>767&&(C(),k=t):k<1440?(t>1439||t<768)&&(C(),k=t):t<1440&&(C(),k=t),document.querySelector("[data-modal]").classList.contains("is-hidden")||renderingModal()},100);function C(){document.querySelector(".active").innerHTML.trim()==="All categories"&&B()}const P=document.querySelector(".nav-categories-list");async function Te(){const{data:e}=await x.get("https://books-backend.p.goit.global/books/category-list");return e}const Se=async()=>{try{const e=await Te();P.innerHTML=await je(e),document.querySelectorAll(".nav-category-item").forEach(r=>{r.addEventListener("click",o=>{const n=document.querySelector(".nav-category-item.active");n&&n.classList.remove("active"),o.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};Se();P.addEventListener("click",Me);function Me(e){e.target.dataset.id&&M(e)}function je(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}
