import{g as J,c as k,b as O,f as K,a as Q,d as V,e as Z,h as ee,r as te,i as C,j as M,N as ne}from"./shopping-list-9972f952.js";var P="Expected a function",w=0/0,oe="[object Symbol]",re=/^\s+|\s+$/g,ie=/^[-+]0x[0-9a-f]+$/i,le=/^0b[01]+$/i,ae=/^0o[0-7]+$/i,se=parseInt,ce=typeof k=="object"&&k&&k.Object===Object&&k,de=typeof self=="object"&&self&&self.Object===Object&&self,ge=ce||de||Function("return this")(),ue=Object.prototype,fe=ue.toString,me=Math.max,he=Math.min,j=function(){return ge.Date.now()};function ye(e,t,n){var o,l,r,c,a,d,f=0,I=!1,m=!1,T=!0;if(typeof e!="function")throw new TypeError(P);t=W(t)||0,L(n)&&(I=!!n.leading,m="maxWait"in n,r=m?me(W(n.maxWait)||0,t):r,T="trailing"in n?!!n.trailing:T);function S(i){var g=o,h=l;return o=l=void 0,f=i,c=e.apply(h,g),c}function G(i){return f=i,a=setTimeout(v,t),I?S(i):c}function Y(i){var g=i-d,h=i-f,B=t-g;return m?he(B,r-h):B}function R(i){var g=i-d,h=i-f;return d===void 0||g>=t||g<0||m&&h>=r}function v(){var i=j();if(R(i))return _(i);a=setTimeout(v,Y(i))}function _(i){return a=void 0,T&&o?S(i):(o=l=void 0,c)}function U(){a!==void 0&&clearTimeout(a),f=0,o=d=l=a=void 0}function X(){return a===void 0?c:_(j())}function H(){var i=j(),g=R(i);if(o=arguments,l=this,d=i,g){if(a===void 0)return G(d);if(m)return a=setTimeout(v,t),S(d)}return a===void 0&&(a=setTimeout(v,t)),c}return H.cancel=U,H.flush=X,H}function be(e,t,n){var o=!0,l=!0;if(typeof e!="function")throw new TypeError(P);return L(n)&&(o="leading"in n?!!n.leading:o,l="trailing"in n?!!n.trailing:l),ye(e,t,{leading:o,maxWait:t,trailing:l})}function L(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function pe(e){return!!e&&typeof e=="object"}function ve(e){return typeof e=="symbol"||pe(e)&&fe.call(e)==oe}function W(e){if(typeof e=="number")return e;if(ve(e))return w;if(L(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=L(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(re,"");var n=le.test(e);return n||ae.test(e)?se(e.slice(2),n?2:8):ie.test(e)?w:+e}var ke=be;const Le=J(ke);function E(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}function N(e){return`  <div class="gallery-book-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}function A(e){return`  <div class="gallery-book-home-link" data-id="${e._id}">
              <div class="gallery-book-card">
                <div class="gallery-book-cover" style="background-image: url('${e.book_image}')">
                </div>
                <p class="gallery-book-name">${e.title}</p>
                <p class="gallery-author">${e.author}</p>
              </div>
            </div>`}const{bookInfo:u,modal:Te}=E();function D(e){let t="",n=0;const o=e.currentTarget.dataset.id;(O===null?-1:O.findIndex(r=>r._id===o))!==-1?(t="Remove from shopping list",n=501):(t="ADD TO SHOPPING LIST",n=465),K(e.currentTarget.dataset.id).then(r=>{u.style.height=`${n}px`,u.innerHTML="";const c=`<div class="img-book" style="background-image: url('${r.book_image}');   background-size: cover;">
                    </div>
                    <div class="description-info">
                        <h2 class="title-name">${r.title}</h2>
                        <h3 class="title-author">${r.author}</h3>
                        <p class="description-book">${r.description}</p>
                        <ul class="shop-book">
                        <li class="name-shop-book">
                          <a href="${r.buy_links[0].url}" target="_blank" class="brightness">
                            <img
                            src="${Q}"
                            alt="logo Amazon"
                            width="62"
                            height="19"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${r.buy_links[1].url}" target="_blank">
                            <img
                            src="${V}"
                            alt="logo Yellow shop"
                            width="33"
                            height="32"
                            />
                          </a>
                        </li>
                        <li class="name-shop-book">
                          <a href="${r.buy_links[4].url}" target="_blank">
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
                    <button type="submit" class="choice-btn" data-id="${r._id}">${t}</button>
                    <p class="congrats"></p>`;u.insertAdjacentHTML("beforeend",c),Te.classList.remove("is-hidden"),document.body.style.overflow="hidden",z();const a=document.querySelector(".choice-btn");a.addEventListener("click",d=>{a.innerHTML==="ADD TO SHOPPING LIST"?(ee(d),document.documentElement.clientWidth<768?u.style.height="806px":u.style.height="501px",a.innerHTML="Remove from shopping list",a.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”."):(document.documentElement.clientWidth<768?u.style.height="762px":u.style.height="465px",a.innerHTML="ADD TO SHOPPING LIST",a.nextElementSibling.innerHTML="",te(d))})})}function z(){const e=document.querySelector(".container-modal-fav"),t=document.querySelector(".choice-btn");t.innerHTML==="Remove from shopping list"?(t.nextElementSibling.innerHTML="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",document.documentElement.clientWidth<768?e.style.height="806px":e.style.height="501px"):(t.nextElementSibling.innerHTML="",document.documentElement.clientWidth<768?e.style.height="762px":e.style.height="465px")}function p(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let n=0;n<e.length;n++)e[n].addEventListener("click",D);for(let n=0;n<t.length;n++)t[n].addEventListener("click",D)}const{galleryRef:y,categoriesRef:Se}=E();function $(e){if(y.innerHTML="",e.target.innerHTML==="See more"){y.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),y.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const o=document.querySelector(".gallery-list2"),l=e.target.dataset.category.split(" ").join("%20");C(l).then(r=>{r.map(c=>{o.insertAdjacentHTML("beforeend",N(c))}),p()}),Se.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){q(),window.scrollTo(0,0);return}y.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),y.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),n=e.target.innerHTML.trim().split(" ").join("%20");C(n).then(o=>{o.map(l=>t.insertAdjacentHTML("beforeend",N(l))),p()}),window.scrollTo(0,0)}const{galleryRef:s}=E();function q(){s.innerHTML="",document.documentElement.clientWidth<768?(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let n of e)s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>`),s.insertAdjacentHTML("beforeend",A(n.books[0])),s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",$);p()})):document.documentElement.clientWidth<1440?(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let n of e){s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);const o=document.querySelectorAll(".gallery-list"),l=o[o.length-1];for(let r=0;r<3;r++)l.insertAdjacentHTML("beforeend",A(n.books[r]));s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`)}const t=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<t.length;n++)t[n].addEventListener("click",$);p()})):(s.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),M().then(e=>{for(let o of e){s.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const l=t[t.length-1];for(let r=0;r<5;r++)l.insertAdjacentHTML("beforeend",A(o.books[r]));s.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const n=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<n.length;o++)n[o].addEventListener("click",$);p()})),window.scrollTo(0,0)}q();let b=document.documentElement.clientWidth;onresize=Le(e=>{e.preventDefault();let t=document.documentElement.clientWidth;b<768?t>767&&(x(),b=t):b<1440?(t>1439||t<768)&&(x(),b=t):t<1440&&(x(),b=t),document.querySelector("[data-modal]").classList.contains("is-hidden")||z()},100);function x(){document.querySelector(".active").innerHTML.trim()==="All categories"&&q()}const He=()=>fetch("https://books-backend.p.goit.global/books/category-list").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}),F=document.querySelector(".book-category");He().then(e=>{Me(e)}).catch(e=>{console.log(e),ne.Notify.failure("Oops! Something went wrong! Try reloading the page!")});function Me(e){F.innerHTML=e.map(t=>` <li class="list_name">${t.list_name}</li>`).join("")}F.addEventListener("click",je);function je(e){e.target.nodeName==="LI"&&(e.target.classList.contains("active")?e.target.classList.remove("active"):(document.querySelectorAll(".list_name").forEach(n=>n.classList.remove("active")),e.target.classList.add("active")))}
