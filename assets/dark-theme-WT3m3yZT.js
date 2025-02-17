import{a as l}from"./vendor-eBkKLmX4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y=document.querySelectorAll(".pop-recipe-img");y.forEach(a=>{a.addEventListener("click",b)});async function b(a){let s=`https://tasty-treats-backend.p.goit.global/api/recipes/${a.target.id}`;const r=(await l.get(s)).data;document.querySelector("#id=see-recipes-modal-name").innerText=r.title.toUpperCase();let t=r.youtube.replace("watch?v=","embed/");document.querySelector("#see-recipes-modal-video").innerHTML=`
    <iframe src="${t}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,document.querySelector("#see-recipes-modal-tags").innerText=r.category,document.querySelector("#see-recipes-modal-rating").innerText=r.rating,document.querySelector("#see-recipes-modal-time").innerText=`${r.time} min`,document.querySelector("#see-recipes-modal-material").innerText=r.ingredients.join(", "),document.querySelector("#see-recipes-modal-instructions").innerText=r.instructions}async function h(a){const s=document.querySelector("#see-recipes-modal-form"),r=`https://tasty-treats-backend.p.goit.global/api/recipes/${a}`,e=await l.get(r),t=document.querySelector(".see-recipes-modal-content");let p=e.data.youtube.replace("watch?v=","embed/");const m=e.data.ingredients.map(i=>`
      <div class="ingredient">
        <span class="ingredient-name">${i.name}</span>
        <span class="ingredient-amount">${i.measure}</span>
      </div>
    `).join(""),u=`<div>
        <h2 id="see-recipes-modal-name-tablet-desktop">${e.data.title.toUpperCase()}</h2>
       <div id="see-recipes-modal-video">
          <iframe src="${p}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       <h2 id="see-recipes-modal-name-mobil">${e.data.title.toUpperCase()}</h2>

        <div id="see-recipes-modal-info-tablet-desktop">
         <div id="see-recipes-modal-info">
        <p id="see-recipes-modal-tags">${e.data.tags.map(i=>`<span>#${i}</span>`).join("")}</p>
       <p><span id="see-recipes-modal-rating">${e.data.rating}</span>
      <span id="see-recipes-modal-rating-stars" class="stars">
  ${Array.from({length:5},(i,f)=>f<Math.round(e.data.rating)?'<img src="./public/img/star.png">':'<img src="./public/img/star-empty.png">').join("")}
</span>
        <p id="see-recipes-modal-time">${e.data.time} min</p>
         </div>
        </div>


       <div id="see-recipes-modal-info-mobil">
       <div id="see-recipes-modal-info-rat">
       <p><span id="see-recipes-modal-rating">${e.data.rating}</span>
       <span id="see-recipes-modal-rating-stars" class="stars">
         ${"★ ".repeat(Math.round(e.data.rating))} ${"☆".repeat(5-Math.round(e.data.rating))}
       </span></p>
        <p id="see-recipes-modal-time">${e.data.time} min</p>
           </div>
        </div>


       <span class="see-recipes-close-btn">&times;</span>
       <div id="see-recipes-modal-material">${m}</div>
       <div id="see-recipes-modal-info-mobil">
       <p id="see-recipes-modal-tags">${e.data.tags.map(i=>`<span>#${i}</span>`).join("")}</p>
       </div>
       <p id="see-recipes-modal-instructions">${e.data.instructions}</p>
    </div>
     <div id="see-recipes-modal-btn">
  <button id="see-recipes-modal-favorite-btn">Add to favorite</button>
  <button id="see-recipes-modal-rating-btn">Give a rating</button>
    </div>
  `;t.innerHTML=u,s.style.display="flex";const g=document.querySelector(".see-recipes-close-btn"),c=document.querySelector("#see-recipes-modal");g.addEventListener("click",d),document.addEventListener("keydown",i=>{i.key==="Escape"&&d()}),c.addEventListener("click",i=>{i.target===c&&d()});function d(){const i=document.querySelector("#see-recipes-modal-form");i.style.display="none"}}window.global||(window.global=window);document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".switch input");localStorage.getItem("theme")==="dark"?(document.body.classList.add("darkMode"),a.checked=!0):(document.body.classList.remove("darkMode"),a.checked=!1),a.addEventListener("change",()=>{a.checked?(document.body.classList.add("darkMode"),localStorage.setItem("theme","light")):(document.body.classList.remove("darkMode"),localStorage.setItem("theme","dark"))})});export{h as M};
//# sourceMappingURL=dark-theme-WT3m3yZT.js.map
