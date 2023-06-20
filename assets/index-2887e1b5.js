import{g as Y,c as j,n as H,a as _,f as Z,l as W}from"./shopping-list-ca487988.js";var J="Expected a function",z=0/0,ee="[object Symbol]",te=/^\s+|\s+$/g,oe=/^[-+]0x[0-9a-f]+$/i,ne=/^0b[01]+$/i,re=/^0o[0-7]+$/i,ae=parseInt,se=typeof j=="object"&&j&&j.Object===Object&&j,le=typeof self=="object"&&self&&self.Object===Object&&self,ie=se||le||Function("return this")(),ce=Object.prototype,de=ce.toString,ge=Math.max,ue=Math.min,C=function(){return ie.Date.now()};function fe(e,t,o){var n,r,a,d,l,i,u=0,b=!1,f=!1,v=!0;if(typeof e!="function")throw new TypeError(J);t=F(t)||0,E(o)&&(b=!!o.leading,f="maxWait"in o,a=f?ge(F(o.maxWait)||0,t):a,v="trailing"in o?!!o.trailing:v);function g(s){var m=n,h=r;return n=r=void 0,u=s,d=e.apply(h,m),d}function y(s){return u=s,l=setTimeout(M,t),b?g(s):d}function K(s){var m=s-i,h=s-u,N=t-m;return f?ue(N,a-h):N}function w(s){var m=s-i,h=s-u;return i===void 0||m>=t||m<0||f&&h>=a}function M(){var s=C();if(w(s))return O(s);l=setTimeout(M,K(s))}function O(s){return l=void 0,v&&n?g(s):(n=r=void 0,d)}function Q(){l!==void 0&&clearTimeout(l),u=0,n=i=r=l=void 0}function V(){return l===void 0?d:O(C())}function x(){var s=C(),m=w(s);if(n=arguments,r=this,i=s,m){if(l===void 0)return y(i);if(f)return l=setTimeout(M,t),g(i)}return l===void 0&&(l=setTimeout(M,t)),d}return x.cancel=Q,x.flush=V,x}function me(e,t,o){var n=!0,r=!0;if(typeof e!="function")throw new TypeError(J);return E(o)&&(n="leading"in o?!!o.leading:n,r="trailing"in o?!!o.trailing:r),fe(e,t,{leading:n,maxWait:t,trailing:r})}function E(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ye(e){return!!e&&typeof e=="object"}function pe(e){return typeof e=="symbol"||ye(e)&&de.call(e)==ee}function F(e){if(typeof e=="number")return e;if(pe(e))return z;if(E(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=E(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(te,"");var o=ne.test(e);return o||re.test(e)?ae(e.slice(2),o?2:8):oe.test(e)?z:+e}var be=me;const ve=Y(be);function U(){return{seeMoreBtnRef:document.querySelectorAll(".gallery-see-more-btn"),galleryRef:document.querySelector(".gallery"),activeCategory:document.querySelectorAll(".active"),categoriesRef:document.querySelector(".nav-categories-list"),bookInfo:document.querySelector(".container-modal-fav"),modal:document.querySelector("[data-modal]")}}const he=()=>{H.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},ke=()=>{H.Loading.remove()},Le=()=>{H.Loading.pulse("Wait please...",{svgColor:"#4f2ee8"})},Se=()=>{H.Loading.remove()};async function D(e){try{Le();const t=await _.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return Se(),t.data}catch(t){console.log("catch error",t)}}async function q(){try{he();const e=await _.get("https://books-backend.p.goit.global/books/top-books");return ke(),e.data}catch(e){console.log("catch error",e)}}function P(e){return`  <div class="gallery-book-link" data-id="${e._id}">
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
            </div>`}function Te({book_image:e,title:t,author:o,description:n,buy_links:r,_id:a}){const d=document.querySelector(".modal-fav-book");let l=[],i,u,b,f;r.forEach(g=>{if(g.name==="Amazon"){const y=`<a href="${g.url}" target="_blank" rel="noreferrer noopener">
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
          </a>`;l.push(y)}}),e!==""?i=`<img class="modal-fav-image" src="${e}" alt="book-cover"/>`:i='<img class="modal-fav-image" src="../images/Logotype.png" alt="book-cover"/>',t!==""?u=`<h1 class="modal-fav-title">${t}</h1>`:u='<h1 class="modal-fav-title">No title</h1>',o!==""?b=`<h2 class="modal-fav-author">${o}</h2>`:b='<h2 class="modal-fav-author">No author name</h2>',n!==""?f=`<p class="modal-fav-descr">${n}</p>`:f='<p class="modal-fav-descr">No description</p>';const v=`${i}
   <div class="book-descr-wrapper">${u}
${b}
${f}
<div class="buy-label">${l.join("")}</div>
</div>`;d.innerHTML=v}function Me(){const e=document.querySelector("[data-modal-close]"),t=document.querySelector("[data-modal]");document.body.classList.add("modal-open"),t.classList.remove("is-hidden"),e.addEventListener("click",o);function o(){document.body.classList.remove("modal-open"),t.classList.add("is-hidden"),t.removeEventListener("click",n),e.removeEventListener("click",o),document.removeEventListener("keydown",r)}t.addEventListener("click",n);function n(a){a.target===a.currentTarget&&o()}document.addEventListener("keydown",r);function r(a){a.code==="Escape"&&o()}}const k=document.querySelector(".fav-add-book-btn"),A=document.querySelector(".add-book-notification");let p=[];async function G(e){const t=e.currentTarget.dataset.id;console.log(t);const o=await Z(e.currentTarget.dataset.id);W(t)==null?(A.classList.add("hidden"),k.textContent="add to shopping list"):(A.classList.remove("hidden"),k.textContent="remove from the shopping list"),Te(o),Me(),k.addEventListener("click",n);function n(){if(W(t)==null)console.log(t,"add"),p.push(o),console.log(p,"add"),localStorage.setItem("books",JSON.stringify(p)),A.classList.remove("hidden"),k.textContent="remove from the shopping list";else{A.classList.add("hidden"),k.textContent="add to shopping list";const r=p.findIndex(a=>a._id==t);console.log(t,"rem"),r!==-1&&(console.log(r,"index"),p.splice(r,1),console.log(p,"rem"),localStorage.setItem("books",JSON.stringify(p)))}}}function T(){const e=document.querySelectorAll(".gallery-book-home-link"),t=document.querySelectorAll(".gallery-book-link");for(let o=0;o<e.length;o++)e[o].addEventListener("click",G);for(let o=0;o<t.length;o++)t[o].addEventListener("click",G)}const{galleryRef:L,categoriesRef:je}=U();function $(e){if(L.innerHTML="",e.target.innerHTML==="See more"){L.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.dataset.category.split(" ").slice(0,length-1).join(" ")} <span>${e.target.dataset.category.split(" ").pop()}</span></h2>`),L.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const n=document.querySelector(".gallery-list2"),r=e.target.dataset.category.split(" ").join("%20");D(r).then(a=>{a.map(d=>{n.insertAdjacentHTML("beforeend",P(d))}),T()}),je.querySelector(".active").classList.remove("active"),document.querySelector(`[data-id="${e.target.dataset.category}"]`).classList.add("active"),window.scrollTo(0,0);return}if(e.target.innerHTML.trim()==="All categories"){I(),window.scrollTo(0,0);return}L.insertAdjacentHTML("beforeend",`<h2 class="gallery-title">${e.target.innerHTML.trim().split(" ").slice(0,length-1).join(" ")} <span>${e.target.innerHTML.trim().split(" ").pop()}</span></h2>`),L.insertAdjacentHTML("beforeend",'<div class="gallery-list2"></div>');const t=document.querySelector(".gallery-list2"),o=e.target.innerHTML.trim().split(" ").join("%20");D(o).then(n=>{n.map(r=>t.insertAdjacentHTML("beforeend",P(r))),T()}),window.scrollTo(0,0)}const{galleryRef:c}=U();function I(){c.innerHTML="",document.documentElement.clientWidth<768?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),q().then(e=>{for(let o of e)c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>`),c.insertAdjacentHTML("beforeend",B(o.books[0])),c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`);const t=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<t.length;o++)t[o].addEventListener("click",$);T()})):document.documentElement.clientWidth<1440?(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),q().then(e=>{for(let o of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${o.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);const n=document.querySelectorAll(".gallery-list"),r=n[n.length-1];for(let a=0;a<3;a++)r.insertAdjacentHTML("beforeend",B(o.books[a]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${o.books[0].list_name}">See more</button>`)}const t=document.querySelectorAll(".gallery-see-more-btn");for(let o=0;o<t.length;o++)t[o].addEventListener("click",$);T()})):(c.insertAdjacentHTML("beforeend",'<h2 class="gallery-title">Best Sellers <span>Books</span></h2>'),q().then(e=>{for(let n of e){c.insertAdjacentHTML("beforeend",`<h3 class="gallery-category">${n.books[0].list_name}</h3>
          <div class="gallery-list"></div>`);var t=document.querySelectorAll(".gallery-list");const r=t[t.length-1];for(let a=0;a<5;a++)r.insertAdjacentHTML("beforeend",B(n.books[a]));c.insertAdjacentHTML("beforeend",`<button class="gallery-see-more-btn" data-category="${n.books[0].list_name}">See more</button>`)}const o=document.querySelectorAll(".gallery-see-more-btn");for(let n=0;n<o.length;n++)o[n].addEventListener("click",$);T()})),window.scrollTo(0,0)}I();let S=document.documentElement.clientWidth;onresize=ve(e=>{e.preventDefault();let t=document.documentElement.clientWidth;S<768?t>767&&(R(),S=t):S<1440?(t>1439||t<768)&&(R(),S=t):t<1440&&(R(),S=t),document.querySelector("[data-modal]").classList.contains("is-hidden")||renderingModal()},100);function R(){document.querySelector(".active").innerHTML.trim()==="All categories"&&I()}const X=document.querySelector(".nav-categories-list");async function Ae(){const{data:e}=await _.get("https://books-backend.p.goit.global/books/category-list");return e}const $e=async()=>{try{const e=await Ae();X.innerHTML=await He(e),document.querySelectorAll(".nav-category-item").forEach(o=>{o.addEventListener("click",n=>{const r=document.querySelector(".nav-category-item.active");r&&r.classList.remove("active"),n.target.classList.add("active")})})}catch{console.log("Oops! Something went wrong")}};$e();X.addEventListener("click",Ee);function Ee(e){e.target.dataset.id&&$(e)}function He(e){return`<li class="nav-category-item active" data-id="all-categories">
        All categories</li>
        ${e.map(t=>`<li class="nav-category-item" data-id="${t.list_name}">
        ${t.list_name}
        </li>`).join("")}`}
