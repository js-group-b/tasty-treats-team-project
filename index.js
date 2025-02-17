const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hero-DhxbUU5b.css"])))=>i.map(i=>d[i]);
import{M as B}from"./assets/dark-theme-BDl8S1Or.js";import{a as h}from"./assets/vendor-BhqcI0kQ.js";const M="https://tasty-treats-backend.p.goit.global/api/recipes?",g=new URLSearchParams({title:"",category:"",area:"",ingredient:"",time:"",page:1,limit:9});async function v(){try{const o=await(await h.get(M,{params:g})).data.results,u=document.querySelector(".cards-section-ul");let c=localStorage.getItem("favorites");c===null&&(c=[]);const t=o.map(({preview:l,title:p,description:s,rating:d,_id:m})=>{let f="";for(let y=0;y<5;y++)y<Math.floor(d+.4)?f+='<img class="cards-section-card-bottom-div-rating-star" src="./img/star.png" alt="star" />':f+='<img class="cards-section-card-bottom-div-rating-star" src="./img/star-empty.png" alt="star" />';return`<li class="cards-section-card-items">
                       <div class="cards-section-card-item-inner-div">
                       
                            ${c.indexOf(m)>=0?`<svg id="svg__${m}"class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${m}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" fill="#F8F8F8"/>
                                </svg>`:`<svg id="svg__${m}" class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${m}" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`}
                            
                           <img class="cards-section-card-image" style=" background: linear-gradient(rgba(5, 5, 5, .5), rgba(5, 5, 5, .5)), url(${l});" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${p.length<20?p.toUpperCase():p.toUpperCase().substring(0,20)+"..."}</h3>
                               <p class="cards-section-card-content-p">${s.substring(0,57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                        <p class="cards-section-card-bottom-div-rating-p">${d}</p>                 
                                        ${f}
                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${m}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>`}).join("");u.innerHTML=t;const r=document.getElementsByClassName("cards-section-see-recipe-button");for(let l=0;l<r.length;l++)r[l].addEventListener("click",n);async function n(l){await B(l.target.id)}const i=document.getElementsByClassName("cards-section-favorites-button");for(let l=0;l<i.length;l++)i[l].addEventListener("click",a);async function a(l){const p=l.target.id.substring(5);let s=localStorage.getItem("favorites"),d;s===null?(s=[],s.push(p),d=JSON.stringify(s),localStorage.setItem("favorites",d),v()):s.indexOf(p)>=0?(d=localStorage.getItem("favorites"),s=await JSON.parse(d),s.splice(s.indexOf(p),1),d=JSON.stringify(s),localStorage.setItem("favorites",d),v()):(d=localStorage.getItem("favorites"),s=await JSON.parse(d),s.push(p),d=JSON.stringify(s),localStorage.removeItem("favorites"),localStorage.setItem("favorites",d),s=localStorage.getItem("favorites"),v())}}catch(e){console.log(e)}}v();FetchCategories();const A=document.querySelector(".AllCategoriesBtn");A.addEventListener("click",resetCategoriesFiltering);const U="https://tasty-treats-backend.p.goit.global/api/recipes/popular";async function $(){try{const o=(await h.get(U)).data,u=document.querySelector(".popular-recipes-ul"),c=o.map(({preview:n,title:i,description:a,_id:l})=>`<li class="popular-recipes-li-element">
                        <!-- MAP ELEMENT START -->
                        <div class="pop-recipe-unit-div">
                            <img id="${l}" class="pop-recipe-img" src="${n}" alt="${i}"/>
                            <div class="pop-recipe-header-n-text-div">
                                <h3 class="popular-recipe-title">${i.toUpperCase()}</h3>
                                <p class="popular-recipe-text">${a.substring(0,77)}...</p>
                            </div>
                        </div>
                        <!-- MAP ELEMENT END -->
                    </li>     `).join("");u.innerHTML=c;const t=document.getElementsByClassName("pop-recipe-img");for(let n=0;n<t.length;n++)t[n].addEventListener("click",r);async function r(n){await B(n.target.id)}}catch(e){console.log(e)}}$();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("orderModal"),o=document.getElementById("openModal"),u=document.getElementById("closeModal"),c=document.getElementById("imitation");if(!e||!o||!u){console.error("Modal veya butonlar bulunamadı!");return}function t(a){a.preventDefault(),e.style.display="flex",document.addEventListener("keydown",n),e.addEventListener("click",i)}function r(){e.style.display="none",document.removeEventListener("keydown",n),e.removeEventListener("click",i)}function n(a){a.key==="Escape"&&r()}function i(a){a.target===e&&r()}o.addEventListener("click",t),u.addEventListener("click",r),c.addEventListener("click",t)});const O="modulepreload",x=function(e){return"/tasty-treats-team-project/"+e},k={},D=function(o,u,c){let t=Promise.resolve();if(u&&u.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(u.map(a=>{if(a=x(a),a in k)return;k[a]=!0;const l=a.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${p}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":O,l||(s.as="script"),s.crossOrigin="",s.href=a,i&&s.setAttribute("nonce",i),document.head.appendChild(s),l)return new Promise((d,m)=>{s.addEventListener("load",d),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return t.then(n=>{for(const i of n||[])i.status==="rejected"&&r(i.reason);return o().catch(r)})};async function z(){try{const o=await(await h.get("https://tasty-treats-backend.p.goit.global/api/events")).data,u=document.querySelector(".chef1png");u.src=o[0].cook.imgUrl;const c=document.querySelector(".plate1png");c.src=o[0].topic.previewUrl;const t=document.querySelector(".platezoom1png");t.src=o[0].topic.imgUrl;const r=document.querySelector(".chef2png");r.src=o[1].cook.imgUrl;const n=document.querySelector(".pizzapicturepng");n.src=o[1].topic.previewUrl;const i=document.querySelector(".pizzapicturezoompng");i.src=o[1].topic.imgUrl;const a=document.querySelector(".chef3png");a.src=o[2].cook.imgUrl;const l=document.querySelector(".piepng");l.src=o[2].topic.previewUrl;const p=document.querySelector(".pizezoompng");p.src=o[2].topic.imgUrl}catch(e){console.error("Veri çekme sırasında bir hata oluştu:",e)}}z();document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{D(()=>Promise.resolve({}),__vite__mapDeps([0])).then(()=>{const e=document.querySelector(".header-chefs-main"),o=document.querySelectorAll(".slide"),u=document.querySelectorAll(".lazy-image"),c=document.querySelector(".slide-button");let t=0,r=100;(()=>{const d=new IntersectionObserver((m,f)=>{m.forEach(y=>{if(y.isIntersecting){const E=y.target;E.src=imageArr[Number(E.dataset.src)-1],E.classList.remove("lazy-image"),f.unobserve(E)}})},{threshold:.1});u.forEach(m=>d.observe(m))})(),o.forEach((d,m)=>{const f=document.createElement("div");f.classList.add("indicator"),f.addEventListener("click",()=>p(m)),c.appendChild(f)});const i=document.querySelectorAll(".indicator");function a(){e.style.transform=`translateX(-${t*r}%)`,l()}function l(){i.forEach((d,m)=>{m===t?d.classList.add("active"):d.classList.remove("active")})}function p(d){t=d,a()}function s(){const d=e.offsetWidth;window.innerWidth>=1280?r=602/d*100:window.innerWidth>=768&&window.innerWidth<945?r=d/1/d*100:r=100,a()}s(),a(),window.addEventListener("resize",s),setInterval(()=>{t=(t+1)%o.length,a()},5e3)}).catch(e=>{console.error("CSS yüklenirken bir hata oluştu:",e)})},100)});const q="https://tasty-treats-backend.p.goit.global/api/ingredients",F="https://tasty-treats-backend.p.goit.global/api/areas";R();N();const L=(e,o)=>{e.addEventListener("click",()=>{const u=document.getElementById(o);u?u.classList.toggle("filter-hidden-dropdown"):console.error(`Element with ID "${o}" not found.`)})},b=(e,o)=>{document.querySelectorAll(e).forEach(c=>{c.addEventListener("click",()=>{const t=c.textContent,r=document.getElementById(o),n=c.closest(".filter-custom-select-container").querySelector(".filter-custom-select-trigger");if(r){if(r.textContent=t,r.id==="time-trigger-text"){let i=t.trim().substring(0,3);i[2]==" "&&(i=i.substring(0,2)),i[2]=="m"&&(i=i.substring(0,1)),g.set("time",i),v()}if(r.id==="area-trigger-text"&&(g.set("area",t.trim()),v()),r.id==="ingredient-trigger-text"){async function i(){const p=await(await h.get(q)).data;for(let s=0;s<p.length;s++)if(p[s].name==t.trim())return p[s]._id}async function a(){const l=await i();g.set("ingredient",l),v()}a()}}n&&n.classList.add("selected"),c.closest(".filter-custom-select-container").querySelector("ul").classList.add("filter-hidden-dropdown")})})};async function R(){try{const o=(await h.get(q)).data;if(!Array.isArray(o))throw new Error("Invalid data format");const u=o.map(({name:t,_id:r})=>`
        <li id="product_${r}" data-ingredient="${r}" data-name="ingredient" class="option ingredient-li">
          ${t}
        </li>`).join(""),c=document.getElementById("ingredient-options");if(c){c.innerHTML=u;const t=document.getElementById("ingredient-trigger");t&&L(t,"ingredient-options"),b("#ingredient-options .option","ingredient-trigger-text")}else console.error('Element with ID "ingredient-options" not found.')}catch(e){console.error("Error fetching ingredients:",e)}}async function N(){try{const o=(await h.get(F)).data;if(!Array.isArray(o))throw new Error("Invalid data format");const u=o.map(({name:t,_id:r})=>`<li data-area="${r}" data-name="area" class="option">${t}</li>`).join(""),c=document.getElementById("area-options");if(c){c.insertAdjacentHTML("beforeend",u);const t=document.getElementById("area-trigger");t&&L(t,"area-options"),b("#area-options .option","area-trigger-text")}}catch(e){console.error("Error fetching regions:",e)}}const P=Array.from({length:24},(e,o)=>(o+1)*5),_=P.map(e=>`
    <li data-time="${e}" data-name="time" class="option">
      ${e} min
    </li>`).join(""),C=document.getElementById("time-options");if(C){C.insertAdjacentHTML("beforeend",_);const e=document.getElementById("time-trigger");e&&L(e,"time-options"),b("#time-options .option","time-trigger-text")}else console.error('Element with ID "time-options" not found.');const I=document.getElementById("reset-filter-btn");I&&I.addEventListener("click",()=>{const e=document.getElementById("search");e&&(e.value="",g.set("title",""),g.set("category",""),g.set("area",""),g.set("ingredient",""),g.set("time",""),v()),document.querySelectorAll(".filter-custom-select-trigger").forEach(c=>{c.classList.remove("selected");const t=c.querySelector("span");t&&(t.textContent="Select")}),document.querySelectorAll(".filter-options").forEach(c=>{c.classList.add("filter-hidden-dropdown")})});const w=document.querySelector(".filter-search-input");let T,H=300;w.addEventListener("keyup",()=>{clearTimeout(T),w.value&&(T=setTimeout(j,H))});async function j(){g.set("title",w.value),await v()}const S=document.getElementById("scroll-page-up");function W(){window.scrollY>350?S.style.display="block":S.style.display="none"}function J(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",W);S.addEventListener("click",e=>J(e));document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mob-menu-btn"),o=document.querySelector(".mob-menu-btn-close"),u=document.querySelector(".mobile-menu"),c=document.querySelectorAll(".mobile-menu a");function t(){u.classList.add("open"),c.forEach(n=>n.style.color="white")}function r(){u.classList.remove("open")}e.addEventListener("click",function(n){n.preventDefault(),t()}),o.addEventListener("click",function(n){n.preventDefault(),r()}),c.forEach(n=>{n.addEventListener("click",function(){r()})})});
//# sourceMappingURL=index.js.map
