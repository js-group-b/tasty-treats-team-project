import{a as p}from"./vendor-BhqcI0kQ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelectorAll(".pop-recipe-img");f.forEach(s=>{s.addEventListener("click",b)});async function b(s){let a=`https://tasty-treats-backend.p.goit.global/api/recipes/${s.target.id}`;const r=(await p.get(a)).data;document.querySelector("#id=see-recipes-modal-name").innerText=r.title.toUpperCase();let t=r.youtube.replace("watch?v=","embed/");document.querySelector("#see-recipes-modal-video").innerHTML=`
    <iframe src="${t}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,document.querySelector("#see-recipes-modal-tags").innerText=r.category,document.querySelector("#see-recipes-modal-rating").innerText=r.rating,document.querySelector("#see-recipes-modal-time").innerText=`${r.time} min`,document.querySelector("#see-recipes-modal-material").innerText=r.ingredients.join(", "),document.querySelector("#see-recipes-modal-instructions").innerText=r.instructions}async function h(s){const a=document.querySelector("#see-recipes-modal-form"),r=`https://tasty-treats-backend.p.goit.global/api/recipes/${s}`,e=await p.get(r),t=document.querySelector(".see-recipes-modal-content");let m=e.data.youtube.replace("watch?v=","embed/");const u=e.data.ingredients.map(i=>`
      <div class="ingredient">
        <span class="ingredient-name">${i.name}</span>
        <span class="ingredient-amount">${i.measure}</span>
      </div>
    `).join(""),g=`<div>
        <h2 id="see-recipes-modal-name-tablet-desktop">${e.data.title.toUpperCase()}</h2>
       <div id="see-recipes-modal-video">
          <iframe src="${m}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       <h2 id="see-recipes-modal-name-mobil">${e.data.title.toUpperCase()}</h2>
        <div id="see-recipes-modal-info-tablet-desktop">
         <div id="see-recipes-modal-info">
        <p id="see-recipes-modal-tags">${e.data.tags.map(i=>`<span>#${i}</span>`).join("")}</p>
       <p><span id="see-recipes-modal-rating">${e.data.rating}</span>
       <span id="see-recipes-modal-rating-stars" class="stars">
         ${Array.from({length:5},(i,c)=>c<Math.round(e.data.rating)?'<img src="./public/img/star.png">':'<img src="./public/img/star-empty.png">').join("")}
       </span></p>
        <p id="see-recipes-modal-time">${e.data.time} min</p>
         </div>
        </div>
       <div id="see-recipes-modal-info-mobil">
       <div id="see-recipes-modal-info-rat">
       <p><span id="see-recipes-modal-rating">${e.data.rating}</span>
       <span id="see-recipes-modal-rating-stars" class="stars">
       ${Array.from({length:5},(i,c)=>c<Math.round(e.data.rating)?'<img src="./public/img/star.png">':'<img src="./public/img/star-empty.png">').join("")}
       </span></p>
        <p id="see-recipes-modal-time">${e.data.time} min</p>
           </div>
        </div>
       <span class="see-recipes-close-btn">&times;</span>
       <div id="see-recipes-modal-material">${u}</div>
       <div id="see-recipes-modal-info-mobil">
       <p id="see-recipes-modal-tags">${e.data.tags.map(i=>`<span>#${i}</span>`).join("")}</p>
       </div>
       <p id="see-recipes-modal-instructions">${e.data.instructions}</p>
    </div>
     <div id="see-recipes-modal-btn">
  <button id="see-recipes-modal-favorite-btn">Add to favorite</button>
  <button id="see-recipes-modal-rating-btn">Give a rating</button>
    </div>
  `;t.innerHTML=g,a.style.display="flex";const y=document.querySelector(".see-recipes-close-btn"),l=document.querySelector("#see-recipes-modal");y.addEventListener("click",d),document.addEventListener("keydown",i=>{i.key==="Escape"&&d()}),l.addEventListener("click",i=>{i.target===l&&d()});function d(){const i=document.querySelector("#see-recipes-modal-form");i.style.display="none"}}window.global||(window.global=window);document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".switch input");localStorage.getItem("theme")==="dark"?(document.body.classList.add("dark-mode"),s.checked=!0):(document.body.classList.remove("dark-mode"),s.checked=!1),s.addEventListener("change",()=>{s.checked?(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light"))})});export{h as m};
//# sourceMappingURL=dark-theme-BfWPDguG.js.map
