const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hero-BIVW-IUc.css"])))=>i.map(i=>d[i]);
import{m as B}from"./assets/dark-theme-Bm0v6lpf.js";import{a as v}from"./assets/vendor-BhqcI0kQ.js";const M="https://tasty-treats-backend.p.goit.global/api/recipes?",m=new URLSearchParams({title:"",category:"",area:"",ingredient:"",time:"",page:1,limit:9});async function f(){try{const o=await(await v.get(M,{params:m})).data.results,a=document.querySelector(".cards-section-ul");let i=localStorage.getItem("favorites");i===null&&(i=[]);const t=o.map(({preview:d,title:p,description:c,rating:u,_id:g})=>{let y="";for(let h=0;h<5;h++)h<Math.floor(u+.4)?y+='<img class="cards-section-card-bottom-div-rating-star" src="./img/star.png" alt="star" />':y+='<img class="cards-section-card-bottom-div-rating-star" src="./img/star-empty.png" alt="star" />';return`<li class="cards-section-card-items">
                       <div class="cards-section-card-item-inner-div">
                       
                            ${i.indexOf(g)>=0?`<svg id="svg__${g}"class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${g}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" fill="#F8F8F8"/>
                                </svg>`:`<svg id="svg__${g}" class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path_${g}" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`}
                            
                           <img class="cards-section-card-image" style=" background: linear-gradient(rgba(5, 5, 5, .5), rgba(5, 5, 5, .5)), url(${d});" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${p.length<20?p.toUpperCase():p.toUpperCase().substring(0,20)+"..."}</h3>
                               <p class="cards-section-card-content-p">${c.substring(0,57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                        <p class="cards-section-card-bottom-div-rating-p">${u}</p>                 
                                        ${y}
                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${g}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>`}).join("");a.innerHTML=t;const r=document.getElementsByClassName("cards-section-see-recipe-button");for(let d=0;d<r.length;d++)r[d].addEventListener("click",n);async function n(d){await MakeSeeRecipeModalVisible(d.target.id)}const s=document.getElementsByClassName("cards-section-favorites-button");for(let d=0;d<s.length;d++)s[d].addEventListener("click",l);async function l(d){const p=d.target.id.substring(5);let c=localStorage.getItem("favorites"),u;c===null?(c=[],c.push(p),u=JSON.stringify(c),localStorage.setItem("favorites",u),f()):c.indexOf(p)>=0?(u=localStorage.getItem("favorites"),c=await JSON.parse(u),c.splice(c.indexOf(p),1),u=JSON.stringify(c),localStorage.setItem("favorites",u),f()):(u=localStorage.getItem("favorites"),c=await JSON.parse(u),c.push(p),u=JSON.stringify(c),localStorage.removeItem("favorites"),localStorage.setItem("favorites",u),c=localStorage.getItem("favorites"),f())}}catch(e){console.log(e)}}f();const $="https://tasty-treats-backend.p.goit.global/api/categories?";async function x(){try{const e=`${$}`,a=(await v.get(e)).data,i=document.querySelector("#categories-list");i.innerHTML="",a.forEach(t=>{const r=document.createElement("li");r.textContent=t.name,r.setAttribute("data-id",t.id),r.setAttribute("tabindex","0"),i.appendChild(r),r.addEventListener("click",n=>{m.set("category",n.target.textContent),f(),n.target.focus()})})}catch(e){console.error("Error fetching categories:",e)}}x();const A=document.querySelector(".all-categories-btn");A.addEventListener("click",U);async function U(){m.set("category",""),await f()}const z="https://tasty-treats-backend.p.goit.global/api/recipes/popular";async function D(){try{const o=(await v.get(z)).data,a=document.querySelector(".popular-recipes-ul"),i=o.map(({preview:n,title:s,description:l,_id:d})=>`<li class="popular-recipes-li-element">
                        <!-- MAP ELEMENT START -->
                        <div class="pop-recipe-unit-div">
                            <img id="${d}" class="pop-recipe-img" src="${n}" alt="${s}"/>
                            <div class="pop-recipe-header-n-text-div">
                                <h3 class="popular-recipe-title">${s.toUpperCase()}</h3>
                                <p class="popular-recipe-text">${l.substring(0,77)}...</p>
                            </div>
                        </div>
                        <!-- MAP ELEMENT END -->
                    </li>     `).join("");a.innerHTML=i;const t=document.getElementsByClassName("pop-recipe-img");for(let n=0;n<t.length;n++)t[n].addEventListener("click",r);async function r(n){await B(n.target.id)}}catch(e){console.log(e)}}D();document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("orderModal"),o=document.getElementById("openModal"),a=document.getElementById("closeModal"),i=document.getElementById("imitation");if(!e||!o||!a){console.error("Modal veya butonlar bulunamadı!");return}function t(l){l.preventDefault(),e.style.display="flex",document.addEventListener("keydown",n),e.addEventListener("click",s)}function r(){e.style.display="none",document.removeEventListener("keydown",n),e.removeEventListener("click",s)}function n(l){l.key==="Escape"&&r()}function s(l){l.target===e&&r()}o.addEventListener("click",t),a.addEventListener("click",r),i.addEventListener("click",t)});const O="modulepreload",R=function(e){return"/tasty-treats-team-project/"+e},k={},P=function(o,a,i){let t=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),s=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));t=Promise.allSettled(a.map(l=>{if(l=R(l),l in k)return;k[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":O,d||(c.as="script"),c.crossOrigin="",c.href=l,s&&c.setAttribute("nonce",s),document.head.appendChild(c),d)return new Promise((u,g)=>{c.addEventListener("load",u),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(n){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n}return t.then(n=>{for(const s of n||[])s.status==="rejected"&&r(s.reason);return o().catch(r)})};async function F(){try{const o=await(await v.get("https://tasty-treats-backend.p.goit.global/api/events")).data,a=document.querySelector(".chef1png");a.src=o[0].cook.imgUrl;const i=document.querySelector(".plate1png");i.src=o[0].topic.previewUrl;const t=document.querySelector(".platezoom1png");t.src=o[0].topic.imgUrl;const r=document.querySelector(".chef2png");r.src=o[1].cook.imgUrl;const n=document.querySelector(".pizzapicturepng");n.src=o[1].topic.previewUrl;const s=document.querySelector(".pizzapicturezoompng");s.src=o[1].topic.imgUrl;const l=document.querySelector(".chef3png");l.src=o[2].cook.imgUrl;const d=document.querySelector(".piepng");d.src=o[2].topic.previewUrl;const p=document.querySelector(".pizezoompng");p.src=o[2].topic.imgUrl}catch(e){console.error("Veri çekme sırasında bir hata oluştu:",e)}}F();document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{P(()=>Promise.resolve({}),__vite__mapDeps([0])).then(()=>{const e=document.querySelector(".header-chefs-main"),o=document.querySelectorAll(".slide"),a=document.querySelectorAll(".lazy-image"),i=document.querySelector(".slide-button");let t=0,r=100;(()=>{const u=new IntersectionObserver((g,y)=>{g.forEach(h=>{if(h.isIntersecting){const E=h.target;E.src=imageArr[Number(E.dataset.src)-1],E.classList.remove("lazy-image"),y.unobserve(E)}})},{threshold:.1});a.forEach(g=>u.observe(g))})(),o.forEach((u,g)=>{const y=document.createElement("div");y.classList.add("indicator"),y.addEventListener("click",()=>p(g)),i.appendChild(y)});const s=document.querySelectorAll(".indicator");function l(){e.style.transform=`translateX(-${t*r}%)`,d()}function d(){s.forEach((u,g)=>{g===t?u.classList.add("active"):u.classList.remove("active")})}function p(u){t=u,l()}function c(){const u=e.offsetWidth;window.innerWidth>=1280?r=602/u*100:window.innerWidth>=768&&window.innerWidth<945?r=u/1/u*100:r=100,l()}c(),l(),window.addEventListener("resize",c),setInterval(()=>{t=(t+1)%o.length,l()},5e3)}).catch(e=>{console.error("CSS yüklenirken bir hata oluştu:",e)})},100)});const q="https://tasty-treats-backend.p.goit.global/api/ingredients",N="https://tasty-treats-backend.p.goit.global/api/areas";H();_();const S=(e,o)=>{e.addEventListener("click",()=>{const a=document.getElementById(o);a?a.classList.toggle("filter-hidden-dropdown"):console.error(`Element with ID "${o}" not found.`)})},L=(e,o)=>{document.querySelectorAll(e).forEach(i=>{i.addEventListener("click",()=>{const t=i.textContent,r=document.getElementById(o),n=i.closest(".filter-custom-select-container").querySelector(".filter-custom-select-trigger");if(r){if(r.textContent=t,r.id==="time-trigger-text"){let s=t.trim().substring(0,3);s[2]==" "&&(s=s.substring(0,2)),s[2]=="m"&&(s=s.substring(0,1)),m.set("time",s),f()}if(r.id==="area-trigger-text"&&(m.set("area",t.trim()),f()),r.id==="ingredient-trigger-text"){async function s(){const p=await(await v.get(q)).data;for(let c=0;c<p.length;c++)if(p[c].name==t.trim())return p[c]._id}async function l(){const d=await s();m.set("ingredient",d),f()}l()}}n&&n.classList.add("selected"),i.closest(".filter-custom-select-container").querySelector("ul").classList.add("filter-hidden-dropdown")})})};async function H(){try{const o=(await v.get(q)).data;if(!Array.isArray(o))throw new Error("Invalid data format");const a=o.map(({name:t,_id:r})=>`
        <li id="product_${r}" data-ingredient="${r}" data-name="ingredient" class="option ingredient-li">
          ${t}
        </li>`).join(""),i=document.getElementById("ingredient-options");if(i){i.innerHTML=a;const t=document.getElementById("ingredient-trigger");t&&S(t,"ingredient-options"),L("#ingredient-options .option","ingredient-trigger-text")}else console.error('Element with ID "ingredient-options" not found.')}catch(e){console.error("Error fetching ingredients:",e)}}async function _(){try{const o=(await v.get(N)).data;if(!Array.isArray(o))throw new Error("Invalid data format");const a=o.map(({name:t,_id:r})=>`<li data-area="${r}" data-name="area" class="option">${t}</li>`).join(""),i=document.getElementById("area-options");if(i){i.insertAdjacentHTML("beforeend",a);const t=document.getElementById("area-trigger");t&&S(t,"area-options"),L("#area-options .option","area-trigger-text")}}catch(e){console.error("Error fetching regions:",e)}}const j=Array.from({length:24},(e,o)=>(o+1)*5),W=j.map(e=>`
    <li data-time="${e}" data-name="time" class="option">
      ${e} min
    </li>`).join(""),C=document.getElementById("time-options");if(C){C.insertAdjacentHTML("beforeend",W);const e=document.getElementById("time-trigger");e&&S(e,"time-options"),L("#time-options .option","time-trigger-text")}else console.error('Element with ID "time-options" not found.');const I=document.getElementById("reset-filter-btn");I&&I.addEventListener("click",()=>{const e=document.getElementById("search");e&&(e.value="",m.set("title",""),m.set("category",""),m.set("area",""),m.set("ingredient",""),m.set("time",""),f()),document.querySelectorAll(".filter-custom-select-trigger").forEach(i=>{i.classList.remove("selected");const t=i.querySelector("span");t&&(t.textContent="Select")}),document.querySelectorAll(".filter-options").forEach(i=>{i.classList.add("filter-hidden-dropdown")})});const w=document.querySelector(".filter-search-input");let T;const J=300;w.addEventListener("keyup",()=>{clearTimeout(T),w.value&&(T=setTimeout(V,J))});async function V(){m.set("title",w.value),await f()}const b=document.getElementById("scroll-page-up");function Y(){window.scrollY>350?b.style.display="block":b.style.display="none"}function Z(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",Y);b.addEventListener("click",e=>Z(e));document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mob-menu-btn"),o=document.querySelector(".mob-menu-btn-close"),a=document.querySelector(".mobile-menu"),i=document.querySelectorAll(".mobile-menu a");function t(){a.classList.add("open"),i.forEach(n=>n.style.color="white")}function r(){a.classList.remove("open")}e.addEventListener("click",function(n){n.preventDefault(),t()}),o.addEventListener("click",function(n){n.preventDefault(),r()}),i.forEach(n=>{n.addEventListener("click",function(){r()})})});
//# sourceMappingURL=index.js.map
