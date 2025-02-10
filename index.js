const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hero-BIVW-IUc.css"])))=>i.map(i=>d[i]);
import{M as I}from"./assets/main-BL66V_KS.js";import{a as v}from"./assets/vendor-BhqcI0kQ.js";const B="https://tasty-treats-backend.p.goit.global/api/recipes?",f=new URLSearchParams({title:"",category:"",area:"",ingredient:"",time:"",page:1,limit:9});async function h(){try{const t=await(await v.get(B,{params:f})).data.results,a=document.querySelector(".cards-section-ul");let r=localStorage.getItem("favorites");r===null&&(r=[]);const n=t.map(({preview:d,title:m,description:i,rating:c,_id:g})=>{let u="";for(let y=0;y<5;y++)y<Math.floor(c+.4)?u+='<img class="cards-section-card-bottom-div-rating-star" src="./img/star.png" alt="star" />':u+='<img class="cards-section-card-bottom-div-rating-star" src="./img/star-empty.png" alt="star" />';return`<li class="cards-section-card-items">
                       <div class="cards-section-card-item-inner-div">
                       
                            ${r.indexOf(g)>=0?`<svg id="svg__${g}"class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${g}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" fill="#F8F8F8"/>
                                </svg>`:`<svg id="svg__${g}" class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${g}" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`}
                            
                           <img class="cards-section-card-image" style=" background: linear-gradient(rgba(5, 5, 5, .5), rgba(5, 5, 5, .5)), url(${d});" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${m.length<20?m.toUpperCase():m.toUpperCase().substring(0,20)+"..."}</h3>
                               <p class="cards-section-card-content-p">${i.substring(0,57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                        <p class="cards-section-card-bottom-div-rating-p">${c}</p>                 
                                        ${u}
                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${g}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>`}).join("");a.innerHTML=n;const s=document.getElementsByClassName("cards-section-see-recipe-button");for(let d=0;d<s.length;d++)s[d].addEventListener("click",o);async function o(d){await I(d.target.id)}const p=document.getElementsByClassName("cards-section-favorites-button");for(let d=0;d<p.length;d++)p[d].addEventListener("click",l);async function l(d){const m=d.target.id.substring(5);let i=localStorage.getItem("favorites"),c;i===null?(i=[],i.push(m),c=JSON.stringify(i),localStorage.setItem("favorites",c),h()):i.indexOf(m)>=0?(c=localStorage.getItem("favorites"),i=await JSON.parse(c),i.splice(i.indexOf(m),1),c=JSON.stringify(i),localStorage.setItem("favorites",c),h()):(c=localStorage.getItem("favorites"),i=await JSON.parse(c),i.push(m),c=JSON.stringify(i),localStorage.removeItem("favorites"),localStorage.setItem("favorites",c),i=localStorage.getItem("favorites"),h())}}catch(e){console.log(e)}}h();const T="https://tasty-treats-backend.p.goit.global/api/categories?";async function $(){try{const e=`${T}`,a=(await v.get(e)).data,r=document.querySelector("#categories-list");r.innerHTML="",a.forEach(n=>{const s=document.createElement("li");s.textContent=n.name,s.setAttribute("data-id",n.id),s.setAttribute("tabindex","0"),r.appendChild(s),s.addEventListener("click",o=>{f.set("category",o.target.textContent),h(),o.target.focus()})})}catch(e){console.error("Error fetching categories:",e)}}$();const q=document.querySelector(".all-categories-btn");q.addEventListener("click",M);async function M(){f.set("category",""),await h()}const U="https://tasty-treats-backend.p.goit.global/api/recipes/popular";async function x(){try{const t=(await v.get(U)).data,a=document.querySelector(".popular-recipes-ul"),r=t.map(({preview:o,title:p,description:l,_id:d})=>`<li class="popular-recipes-li-element">
                        <!-- MAP ELEMENT START -->
                        <div class="pop-recipe-unit-div">
                            <img id="${d}" class="pop-recipe-img" src="${o}" alt="${p}"/>
                            <div class="pop-recipe-header-n-text-div">
                                <h3 class="popular-recipe-title">${p.toUpperCase()}</h3>
                                <p class="popular-recipe-text">${l.substring(0,77)}...</p>
                            </div>
                        </div>
                        <!-- MAP ELEMENT END -->
                    </li>     `).join("");a.innerHTML=r;const n=document.getElementsByClassName("pop-recipe-img");for(let o=0;o<n.length;o++)n[o].addEventListener("click",s);async function s(o){await I(o.target.id)}}catch(e){console.log(e)}}x();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("orderModal"),t=document.getElementById("openModal"),a=document.getElementById("closeModal"),r=document.getElementById("imitation");if(!e||!t||!a){console.error("Modal veya butonlar bulunamadı!");return}function n(l){l.preventDefault(),e.style.display="flex",document.addEventListener("keydown",o),e.addEventListener("click",p)}function s(){e.style.display="none",document.removeEventListener("keydown",o),e.removeEventListener("click",p)}function o(l){l.key==="Escape"&&s()}function p(l){l.target===e&&s()}t.addEventListener("click",n),a.addEventListener("click",s),r.addEventListener("click",n)});const A="modulepreload",z=function(e){return"/tasty-treats-team-project/"+e},k={},O=function(t,a,r){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),p=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(a.map(l=>{if(l=z(l),l in k)return;k[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const i=document.createElement("link");if(i.rel=d?"stylesheet":A,d||(i.as="script"),i.crossOrigin="",i.href=l,p&&i.setAttribute("nonce",p),document.head.appendChild(i),d)return new Promise((c,g)=>{i.addEventListener("load",c),i.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=o,window.dispatchEvent(p),!p.defaultPrevented)throw o}return n.then(o=>{for(const p of o||[])p.status==="rejected"&&s(p.reason);return t().catch(s)})};async function R(){try{const t=await(await v.get("https://tasty-treats-backend.p.goit.global/api/events")).data,a=document.querySelector(".chef1png");a.src=t[0].cook.imgUrl;const r=document.querySelector(".plate1png");r.src=t[0].topic.previewUrl;const n=document.querySelector(".platezoom1png");n.src=t[0].topic.imgUrl;const s=document.querySelector(".chef2png");s.src=t[1].cook.imgUrl;const o=document.querySelector(".pizzapicturepng");o.src=t[1].topic.previewUrl;const p=document.querySelector(".pizzapicturezoompng");p.src=t[1].topic.imgUrl;const l=document.querySelector(".chef3png");l.src=t[2].cook.imgUrl;const d=document.querySelector(".piepng");d.src=t[2].topic.previewUrl;const m=document.querySelector(".pizezoompng");m.src=t[2].topic.imgUrl}catch(e){console.error("Veri çekme sırasında bir hata oluştu:",e)}}R();document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{O(()=>Promise.resolve({}),__vite__mapDeps([0])).then(()=>{const e=document.querySelector(".header-chefs-main"),t=document.querySelectorAll(".slide"),a=document.querySelectorAll(".lazy-image"),r=document.querySelector(".slide-button");let n=0,s=100;(()=>{const c=new IntersectionObserver((g,u)=>{g.forEach(y=>{if(y.isIntersecting){const E=y.target;E.src=imageArr[Number(E.dataset.src)-1],E.classList.remove("lazy-image"),u.unobserve(E)}})},{threshold:.1});a.forEach(g=>c.observe(g))})(),t.forEach((c,g)=>{const u=document.createElement("div");u.classList.add("indicator"),u.addEventListener("click",()=>m(g)),r.appendChild(u)});const p=document.querySelectorAll(".indicator");function l(){e.style.transform=`translateX(-${n*s}%)`,d()}function d(){p.forEach((c,g)=>{g===n?c.classList.add("active"):c.classList.remove("active")})}function m(c){n=c,l()}function i(){const c=e.offsetWidth;window.innerWidth>=1280?s=602/c*100:window.innerWidth>=768&&window.innerWidth<945?s=c/1/c*100:s=100,l()}i(),l(),window.addEventListener("resize",i),setInterval(()=>{n=(n+1)%t.length,l()},5e3)}).catch(e=>{console.error("CSS yüklenirken bir hata oluştu:",e)})},100)});const D="https://tasty-treats-backend.p.goit.global/api/ingredients",H="https://tasty-treats-backend.p.goit.global/api/areas";P();F();const S=(e,t)=>{e.addEventListener("click",()=>{const a=document.getElementById(t);a?a.classList.toggle("filter-hidden-dropdown"):console.error(`Element with ID "${t}" not found.`)})},b=(e,t)=>{document.querySelectorAll(e).forEach(r=>{r.addEventListener("click",()=>{const n=r.textContent,s=document.getElementById(t),o=r.closest(".filter-custom-select-container").querySelector(".filter-custom-select-trigger");s&&(s.textContent=n),o&&o.classList.add("selected"),r.closest(".filter-custom-select-container").querySelector("ul").classList.add("filter-hidden-dropdown")})})};async function P(){try{const t=(await v.get(D)).data;if(!Array.isArray(t))throw new Error("Invalid data format");const a=t.map(({name:n,_id:s})=>`
        <li data-ingredient="${s}" data-name="ingredient" class="option">
          ${n}
        </li>`).join(""),r=document.getElementById("ingredient-options");if(r){r.innerHTML=a;const n=document.getElementById("ingredient-trigger");n&&S(n,"ingredient-options"),b("#ingredient-options .option","ingredient-trigger-text")}else console.error('Element with ID "ingredient-options" not found.')}catch(e){console.error("Error fetching ingredients:",e)}}async function F(){try{const t=(await v.get(H)).data;if(!Array.isArray(t))throw new Error("Invalid data format");const a=t.map(({name:n,_id:s})=>`<li data-area="${s}" data-name="area" class="option">${n}</li>`).join(""),r=document.getElementById("area-options");if(r){r.insertAdjacentHTML("beforeend",a);const n=document.getElementById("area-trigger");n&&S(n,"area-options"),b("#area-options .option","area-trigger-text")}}catch(e){console.error("Error fetching regions:",e)}}const N=Array.from({length:24},(e,t)=>(t+1)*5),j=N.map(e=>`
    <li data-time="${e}" data-name="time" class="option">
      ${e} min
    </li>`).join(""),L=document.getElementById("time-options");if(L){L.insertAdjacentHTML("beforeend",j);const e=document.getElementById("time-trigger");e&&S(e,"time-options"),b("#time-options .option","time-trigger-text")}else console.error('Element with ID "time-options" not found.');const C=document.getElementById("reset-filter-btn");C&&C.addEventListener("click",()=>{const e=document.getElementById("search");e&&(e.value="",f.set("title",""),f.set("category",""),f.set("area",""),f.set("ingredient",""),f.set("time",""),h()),document.querySelectorAll(".filter-custom-select-trigger").forEach(r=>{r.classList.remove("selected");const n=r.querySelector("span");n&&(n.textContent="Select")}),document.querySelectorAll(".filter-options").forEach(r=>{r.classList.add("filter-hidden-dropdown")})});const w=document.getElementById("scroll-page-up");function _(){window.scrollY>350?w.style.display="block":w.style.display="none"}function W(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",_);w.addEventListener("click",e=>W(e));document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".switch input");localStorage.getItem("theme")==="dark"?(document.body.classList.add("dark-mode"),e.checked=!0):(document.body.classList.remove("dark-mode"),e.checked=!1),e.addEventListener("change",()=>{e.checked?(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light"))})});
//# sourceMappingURL=index.js.map
