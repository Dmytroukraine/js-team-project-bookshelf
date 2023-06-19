import{g as J,c as k,b as C,f as K,a as Q,d as V,e as Z,h as ee,r as te,i as w,j,k as ne}from"./shopping-list-81de4925.js";var N="Expected a function",O=0/0,oe="[object Symbol]",re=/^\s+|\s+$/g,ie=/^[-+]0x[0-9a-f]+$/i,le=/^0b[01]+$/i,ae=/^0o[0-7]+$/i,se=parseInt,ce=typeof k=="object"&&k&&k.Object===Object&&k,de=typeof self=="object"&&self&&self.Object===Object&&self,ge=ce||de||Function("return this")(),ue=Object.prototype,me=ue.toString,fe=Math.max,ye=Math.min,A=function(){return ge.Date.now()};function he(e,t,n){var o,r,i,c,a,d,m=0,B=!1,f=!1,S=!0;if(typeof e!="function")throw new TypeError(N);t=W(t)||0,T(n)&&(B=!!n.leading,f="maxWait"in n,i=f?fe(W(n.maxWait)||0,t):i,S="trailing"in n?!!n.trailing:S);function M(l){var g=o,y=r;return o=r=void 0,m=l,c=e.apply(y,g),c}function G(l){return m=l,a=setTimeout(v,t),B?M(l):c}function Y(l){var g=l-d,y=l-m,I=t-g;return f?ye(I,i-y):I}function R(l){var g=l-d,y=l-m;return d===void 0||g>=t||g<0||f&&y>=i}function v(){var l=A();if(R(l))return _(l);a=setTimeout(v,Y(l))}function _(l){return a=void 0,S&&o?M(l):(o=r=void 0,c)}function U(){a!==void 0&&clearTimeout(a),m=0,o=d=r=a=void 0}function X(){return a===void 0?c:_(A())}function H(){var l=A(),g=R(l);if(o=arguments,r=this,d=l,g){if(a===void 0)return G(d);if(f)return a=setTimeout(v,t),M(d)}return a===void 0&&(a=setTimeout(v,t)),c}return H.cancel=U,H.flush=X,H}function be(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(N);return T(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),he(e,t,{leading:o,maxWait:t,trailing:r})}function T(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function pe(e){return!!e&&typeof e=="object"}function ve(e){return typeof e=="symbol"||pe(e)&&me.call(e)==oe}function W(e){if(typeof e=="number")return e;if(ve(e))return O;if(T(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=T(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(re,"");var n=le.test(e);return n||ae.test(e)?se(e.slice(2),n?2:8):ie.test(e)?O:+e}var ke=be;const Le=J(ke);function q(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}function P(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function $(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}const{bookInfo:u,modal:Te}=q();function D(e){let t="",n=0;const o=e.currentTarget.dataset.id;(C===null?-1:C.findIndex(i=>i._id===o))!==-1?(t="Remove from shopping list",n=501):(t="ADD TO SHOPPING LIST",n=465),K(e.currentTarget.dataset.id).then(i=>{u.style.height=`${n}px`,u.innerHTML="";const c=`<div class="img-book" style="background-image: url('${i.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${i.title}</h2>
                        <h3 class="title-author">${i.author}</h3>
                        <p class="description-book">${i.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                          <a href="${i.buy_links[0].url}" target="_blank" class="brightness">
                            <img
                            src="${Q}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${i.buy_links[1].url}" target="_blank">
                            <img
                            src="${V}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${i.buy_links[4].url}" target="_blank">
                            <img
                            src="${Z}"
                            alt="logo Dark shop"
                            width="38"
                            height="36"
                            />
                          </a>
                        </li>
                        </ul>
                    </div>
                    <button type="submit" class="choice-btn" data-id="${i._id}">${t}</button>
                    <p class="congrats"></p>`;u.insertAdjacentHTML("beforeend",c),Te.classList.remove("is-hidden"),document.body.style.overflow="hidden",z();const a=document.querySelector(".choice-btn");a.addEventListener("click",d=>{a.innerHTML==="ADD TO SHOPPING LIST"?(ee(d),document.documentElement.clientWidth<768?u.style.height="806px":u.style.height="501px",a.innerHTML="Remove from shopping list",a.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."):(document.documentElement.clientWidth<768?u.style.height="762px":u.style.height="465px",a.innerHTML="ADD TO SHOPPING LIST",a.nextElementSibling.innerHTML="",te(d))})})}function z(){const e=document.querySelector(".container-modal-fav"),t=document.querySelector(".choice-btn");t.innerHTML==="Remove from shopping list"?(t.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",document.documentElement.clientWidth<768?e.style.height="806px":e.style.height="501px"):(t.nextElementSibling.innerHTML="",document.documentElement.clientWidth<768?e.style.height="762px":e.style.height="465px")}function p(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let n=0;n<e.length;n++)e[n].addEventListener("click",D);for(let n=0;n<t.length;n++)t[n].addEventListener("click",D)}const{galleryRef:h,categoriesRef:Se}=q();function L(e){if(h.innerHTML="",e.target.innerHTML==="See more"){h.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),h.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const o=document.querySelector(".gallery-list2"),r=e.target.dataset.category.split(" ").join("%20");w(r).then(i=>{i.map(c=>{o.insertAdjacentHTML("beforeend",P(c))}),p()}),Se.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){x(),window.scrollTo(0,0);return}h.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),h.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),n=e.target.innerHTML.trim().split(" ").join("%20");w(n).then(o=>{o.map(r=>t.insertAdjacentHTML("beforeend",P(r))),p()}),window.scrollTo(0,0)}const{galleryRef:s}=q();function x(){s.innerHTML="",document.documentElement.clientWidth<768?(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),j().then(e=>{for(let n of e)s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>`),s.insertAdjacentHTML("beforeend",$(n.books[0])),s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);p()})):document.documentElement.clientWidth<1440?(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),j().then(e=>{for(let n of e){s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);const o=document.querySelectorAll(".gallery-list"),r=o[o.length-1];for(let i=0;i<3;i++)r.insertAdjacentHTML("beforeend",$(n.books[i]));s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`)}const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",L);p()})):(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),j().then(e=>{for(let o of e){s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const r=t[t.length-1];for(let i=0;i<5;i++)r.insertAdjacentHTML("beforeend",$(o.books[i]));s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<n.length;o++)n[o].addEventListener("click",L);p()})),window.scrollTo(0,0)}x();let b=document.documentElement.clientWidth;onresize=Le(e=>{e.preventDefault();let t=document.documentElement.clientWidth;b<768?t>767&&(E(),b=t):b<1440?(t>1439||t<768)&&(E(),b=t):t<1440&&(E(),b=t),document.querySelector("[data-modal]").classList.contains("is-hidden")||z()},100);function E(){document.querySelector(".active").innerHTML.trim()==="All categories"&&x()}const F=document.querySelector(".nav-categories-list");async function Me(){const{data:e}=await ne.get("https://books-backend.p.goit.global/books/category-list");return e}const He=async()=>{try{const e=await Me();F.innerHTML=await Ae(e),document.querySelectorAll(".nav-category-item").forEach(n=>{n.addEventListener("click",o=>{const r=document.querySelector(".nav-category-item.active");r&&r.classList.remove("active"),o.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};He();F.addEventListener("click",je);function je(e){e.target.dataset.id&&L(e)}function Ae(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.closeModalBtn.addEventListener("click",o),document.addEventListener("keydown",t);function t(r){r.code==="Escape"&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown",t),console.log("esc"))}e.modal.addEventListener("click",n);function n(r){r.target===r.currentTarget&&o()}function o(){e.modal.classList.toggle("is-hidden"),document.body.style.overflow=""}})();
