const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hero-CzwFUWNJ.css"])))=>i.map(i=>d[i]);
import{M as B}from"./assets/main-CFA54l7e.js";import{a as h}from"./assets/vendor-N5iQpiFS.js";const T="https://tasty-treats-backend.p.goit.global/api/recipes?",f=new URLSearchParams({title:"",category:"",area:"",ingredient:"",time:"",page:1,limit:9});async function y(){try{const t=(await h.get(T,{params:f})).data.results,a=document.querySelector(".cards-section-ul");let r=localStorage.getItem("favorites"),n=await JSON.parse(r);n===null&&(n=[]);const o=t.map(({preview:p,title:g,description:s,rating:l,_id:m})=>`<li class="cards-section-card-items">
                       <div class="cards-section-card-item-inner-div">

                            ${n.indexOf(m)>=0?`<svg id="svg__${m}"class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${m}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" fill="#F8F8F8"/>
                                </svg>`:`<svg id="svg__${m}" class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${m}" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`}
                            
                           <img class="cards-section-card-image" style=" background: linear-gradient(rgba(5, 5, 5, .5), rgba(5, 5, 5, .5)), url(${p});" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${g.length<20?g.toUpperCase():g.toUpperCase().substring(0,20)+"..."}</h3>
                               <p class="cards-section-card-content-p">${s.substring(0,57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                       <p class="cards-section-card-bottom-div-rating-p">${l}</p>                                
                                       <img class="cards-section-card-bottom-div-rating-star" src="./img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../src/img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="./tasty-treats-team-project/img/star-empty.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="/tasty-treats-team-project/img/star-empty.png" alt="star" />
                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${m}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>`).join("");a.innerHTML=o;const i=document.getElementsByClassName("cards-section-see-recipe-button");for(let p=0;p<i.length;p++)i[p].addEventListener("click",d);async function d(p){await B(p.target.id)}const c=document.getElementsByClassName("cards-section-favorites-button");for(let p=0;p<c.length;p++)c[p].addEventListener("click",u);async function u(p){const g=p.target.id.substring(5);let s=localStorage.getItem("favorites"),l;s===null?(s=[],s.push(g),l=JSON.stringify(s),localStorage.setItem("favorites",l),y()):s.indexOf(g)>=0?(l=localStorage.getItem("favorites"),s=await JSON.parse(l),s.splice(s.indexOf(g),1),l=JSON.stringify(s),localStorage.setItem("favorites",l),y()):(l=localStorage.getItem("favorites"),s=await JSON.parse(l),s.push(g),l=JSON.stringify(s),localStorage.removeItem("favorites"),localStorage.setItem("favorites",l),s=localStorage.getItem("favorites"),y())}}catch(e){console.log(e)}}y();const $="https://tasty-treats-backend.p.goit.global/api/categories?";async function q(){try{const e=`${$}`,a=(await h.get(e)).data,r=document.querySelector("#categories-list");r.innerHTML="",a.forEach(n=>{const o=document.createElement("li");o.textContent=n.name,o.setAttribute("data-id",n.id),o.setAttribute("tabindex","0"),r.appendChild(o),o.addEventListener("click",i=>{f.set("category",i.target.textContent),y(),i.target.focus()})})}catch(e){console.error("Error fetching categories:",e)}}q();const U=document.querySelector(".all-categories-btn");U.addEventListener("click",M);async function M(){f.set("category",""),await y()}const x="https://tasty-treats-backend.p.goit.global/api/recipes/popular";async function A(){try{const t=(await h.get(x)).data,a=document.querySelector(".popular-recipes-ul"),r=t.map(({preview:n,title:o,description:i,_id:d})=>`<li class="popular-recipes-li-element">
                        <!-- MAP ELEMENT START -->
                        <div class="pop-recipe-unit-div">
                            <img id="${d}" class="pop-recipe-img" src="${n}" alt="${o}"/>
                            <div class="pop-recipe-header-n-text-div">
                                <h3 class="popular-recipe-title">${o.toUpperCase()}</h3>
                                <p class="popular-recipe-text">${i.substring(0,77)}...</p>
                            </div>
                        </div>
                        <!-- MAP ELEMENT END -->
                    </li>     `).join("");a.innerHTML=r}catch(e){console.log(e)}}A();const S=document.getElementsByClassName("pop-recipe-img");for(let e=0;e<S.length;e++)S[e].addEventListener("click",z);async function z(e){console.log("tıklanan tarifin id'si:",e.target.id);let t=`https://tasty-treats-backend.p.goit.global/api/recipes/${e.target.id}`;const a=await h.get(t);console.log("tıklanan tarife ait modal'da kullanılacak data:",a.data),B(e.target.id)}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("orderModal"),t=document.getElementById("openModal"),a=document.getElementById("closeModal"),r=document.getElementById("imitation");if(!e||!t||!a){console.error("Modal veya butonlar bulunamadı!");return}function n(c){c.preventDefault(),e.style.display="flex",document.addEventListener("keydown",i),e.addEventListener("click",d)}function o(){e.style.display="none",document.removeEventListener("keydown",i),e.removeEventListener("click",d)}function i(c){c.key==="Escape"&&o()}function d(c){c.target===e&&o()}t.addEventListener("click",n),a.addEventListener("click",o),r.addEventListener("click",n)});const R="modulepreload",O=function(e){return"/tasty-treats-team-project/"+e},L={},D=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),d=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(a.map(c=>{if(c=O(c),c in L)return;L[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":R,u||(g.as="script"),g.crossOrigin="",g.href=c,d&&g.setAttribute("nonce",d),document.head.appendChild(g),u)return new Promise((s,l)=>{g.addEventListener("load",s),g.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(i){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=i,window.dispatchEvent(d),!d.defaultPrevented)throw i}return n.then(i=>{for(const d of i||[])d.status==="rejected"&&o(d.reason);return t().catch(o)})};async function H(){try{const t=await(await h.get("https://tasty-treats-backend.p.goit.global/api/events")).data,a=document.querySelector(".chef1png");a.src=t[0].cook.imgUrl;const r=document.querySelector(".plate1png");r.src=t[0].topic.previewUrl;const n=document.querySelector(".platezoom1png");n.src=t[0].topic.imgUrl;const o=document.querySelector(".chef2png");o.src=t[1].cook.imgUrl;const i=document.querySelector(".pizzapicturepng");i.src=t[1].topic.previewUrl;const d=document.querySelector(".pizzapicturezoompng");d.src=t[1].topic.imgUrl;const c=document.querySelector(".chef3png");c.src=t[2].cook.imgUrl;const u=document.querySelector(".piepng");u.src=t[2].topic.previewUrl;const p=document.querySelector(".pizezoompng");p.src=t[2].topic.imgUrl}catch(e){console.error("Veri çekme sırasında bir hata oluştu:",e)}}H();document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{D(()=>Promise.resolve({}),__vite__mapDeps([0])).then(()=>{const e=document.querySelector(".header-chefs-main"),t=document.querySelectorAll(".slide"),a=document.querySelectorAll(".lazy-image"),r=document.querySelector(".slide-button");let n=0,o=100;(()=>{const s=new IntersectionObserver((l,m)=>{l.forEach(w=>{if(w.isIntersecting){const v=w.target;v.src=imageArr[Number(v.dataset.src)-1],v.classList.remove("lazy-image"),m.unobserve(v)}})},{threshold:.1});a.forEach(l=>s.observe(l))})(),t.forEach((s,l)=>{const m=document.createElement("div");m.classList.add("indicator"),m.addEventListener("click",()=>p(l)),r.appendChild(m)});const d=document.querySelectorAll(".indicator");function c(){e.style.transform=`translateX(-${n*o}%)`,u()}function u(){d.forEach((s,l)=>{l===n?s.classList.add("active"):s.classList.remove("active")})}function p(s){n=s,c()}function g(){const s=e.offsetWidth;window.innerWidth>=1280?o=602/s*100:window.innerWidth>=768&&window.innerWidth<945?o=s/1/s*100:o=100,c()}g(),c(),window.addEventListener("resize",g),setInterval(()=>{n=(n+1)%t.length,c()},5e3)}).catch(e=>{console.error("CSS yüklenirken bir hata oluştu:",e)})},100)});const P="https://tasty-treats-backend.p.goit.global/api/ingredients",j="https://tasty-treats-backend.p.goit.global/api/areas";N();F();const b=(e,t)=>{e.addEventListener("click",()=>{const a=document.getElementById(t);a?a.classList.toggle("filter-hidden-dropdown"):console.error(`Element with ID "${t}" not found.`)})},k=(e,t)=>{document.querySelectorAll(e).forEach(r=>{r.addEventListener("click",()=>{const n=r.textContent,o=document.getElementById(t),i=r.closest(".filter-custom-select-container").querySelector(".filter-custom-select-trigger");o&&(o.textContent=n),i&&i.classList.add("selected"),r.closest(".filter-custom-select-container").querySelector("ul").classList.add("filter-hidden-dropdown")})})};async function N(){try{const t=(await h.get(P)).data;if(!Array.isArray(t))throw new Error("Invalid data format");const a=t.map(({name:n,_id:o})=>`
        <li data-ingredient="${o}" data-name="ingredient" class="option">
          ${n}
        </li>`).join(""),r=document.getElementById("ingredient-options");if(r){r.innerHTML=a;const n=document.getElementById("ingredient-trigger");n&&b(n,"ingredient-options"),k("#ingredient-options .option","ingredient-trigger-text")}else console.error('Element with ID "ingredient-options" not found.')}catch(e){console.error("Error fetching ingredients:",e)}}async function F(){try{const t=(await h.get(j)).data;if(!Array.isArray(t))throw new Error("Invalid data format");const a=t.map(({name:n,_id:o})=>`<li data-area="${o}" data-name="area" class="option">${n}</li>`).join(""),r=document.getElementById("area-options");if(r){r.insertAdjacentHTML("beforeend",a);const n=document.getElementById("area-trigger");n&&b(n,"area-options"),k("#area-options .option","area-trigger-text")}}catch(e){console.error("Error fetching regions:",e)}}const _=Array.from({length:24},(e,t)=>(t+1)*5),W=_.map(e=>`
    <li data-time="${e}" data-name="time" class="option">
      ${e} min
    </li>`).join(""),C=document.getElementById("time-options");if(C){C.insertAdjacentHTML("beforeend",W);const e=document.getElementById("time-trigger");e&&b(e,"time-options"),k("#time-options .option","time-trigger-text")}else console.error('Element with ID "time-options" not found.');const I=document.getElementById("reset-filter-btn");I&&I.addEventListener("click",()=>{const e=document.getElementById("search");e&&(e.value="",f.set("title",""),f.set("category",""),f.set("area",""),f.set("ingredient",""),f.set("time",""),y()),document.querySelectorAll(".filter-custom-select-trigger").forEach(r=>{r.classList.remove("selected");const n=r.querySelector("span");n&&(n.textContent="Select")}),document.querySelectorAll(".filter-options").forEach(r=>{r.classList.add("filter-hidden-dropdown")})});const E=document.getElementById("scroll-page-up");function J(){window.scrollY>350?E.style.display="block":E.style.display="none"}function V(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",J);E.addEventListener("click",e=>V(e));document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".switch input");localStorage.getItem("theme")==="dark"?(document.body.classList.add("dark-mode"),e.checked=!0):(document.body.classList.remove("dark-mode"),e.checked=!1),e.addEventListener("change",()=>{e.checked?(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light"))})});
//# sourceMappingURL=index.js.map
