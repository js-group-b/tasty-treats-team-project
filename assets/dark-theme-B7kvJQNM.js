import{a as l}from"./vendor-BhqcI0kQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=document.querySelectorAll(".pop-recipe-img");f.forEach(a=>{a.addEventListener("click",y)});async function y(a){let o=`https://tasty-treats-backend.p.goit.global/api/recipes/${a.target.id}`;const i=(await l.get(o)).data;document.querySelector("#id=see-recipes-modal-name").innerText=i.title.toUpperCase();let t=i.youtube.replace("watch?v=","embed/");document.querySelector("#see-recipes-modal-video").innerHTML=`
    <iframe src="${t}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,document.querySelector("#see-recipes-modal-tags").innerText=i.category,document.querySelector("#see-recipes-modal-rating").innerText=i.rating,document.querySelector("#see-recipes-modal-time").innerText=`${i.time} min`,document.querySelector("#see-recipes-modal-material").innerText=i.ingredients.join(", "),document.querySelector("#see-recipes-modal-instructions").innerText=i.instructions}async function v(a){const o=document.querySelector("#see-recipes-modal-form"),i=`https://tasty-treats-backend.p.goit.global/api/recipes/${a}`,e=await l.get(i),t=document.querySelector(".see-recipes-modal-content");let p=e.data.youtube.replace("watch?v=","embed/");const m=e.data.ingredients.map(r=>`
      <div class="ingredient">
        <span class="ingredient-name">${r.name}</span>
        <span class="ingredient-amount">${r.measure}</span>
      </div>
    `).join(""),u=`<div>
        <h2 id="see-recipes-modal-name-tablet-desktop">${e.data.title.toUpperCase()}</h2>
       <div id="see-recipes-modal-video">
          <iframe src="${p}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       <h2 id="see-recipes-modal-name-mobil">${e.data.title.toUpperCase()}</h2>

        <div id="see-recipes-modal-info-tablet-desktop">
         <div id="see-recipes-modal-info">
        <p id="see-recipes-modal-tags">${e.data.tags.map(r=>`<span>#${r}</span>`).join("")}</p>
       <p><span id="see-recipes-modal-rating">${e.data.rating}</span>
       <span id="see-recipes-modal-rating-stars" class="stars">
         ${"★ ".repeat(Math.round(e.data.rating))} ${"☆".repeat(5-Math.round(e.data.rating))}
       </span></p>
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
       <p id="see-recipes-modal-tags">${e.data.tags.map(r=>`<span>#${r}</span>`).join("")}</p>
       </div>
       <p id="see-recipes-modal-instructions">${e.data.instructions}</p>
    </div>
     <div id="see-recipes-modal-btn">
  <button id="see-recipes-modal-favorite-btn">Add to favorite</button>
  <button id="see-recipes-modal-rating-btn">Give a rating</button>
    </div>
  `;t.innerHTML=u,o.style.display="flex";const g=document.querySelector(".see-recipes-close-btn"),c=document.querySelector("#see-recipes-modal");g.addEventListener("click",d),document.addEventListener("keydown",r=>{r.key==="Escape"&&d()}),c.addEventListener("click",r=>{r.target===c&&d()});function d(){const r=document.querySelector("#see-recipes-modal-form");r.style.display="none"}}window.global||(window.global=window);document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".switch input");localStorage.getItem("theme")==="dark"?(document.body.classList.add("dark-mode"),a.checked=!0):(document.body.classList.remove("dark-mode"),a.checked=!1),a.addEventListener("change",()=>{a.checked?(document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light"))})});export{v as m};
//# sourceMappingURL=dark-theme-B7kvJQNM.js.map
