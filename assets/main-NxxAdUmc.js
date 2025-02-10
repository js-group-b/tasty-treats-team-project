import{a as l}from"./vendor-BhqcI0kQ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g=document.querySelectorAll(".pop-recipe-img");g.forEach(s=>{s.addEventListener("click",y)});async function y(s){let a=`https://tasty-treats-backend.p.goit.global/api/recipes/${s.target.id}`;const i=(await l.get(a)).data;document.querySelector("#id=see-recipes-modal-name").innerText=i.title.toUpperCase();let t=i.youtube.replace("watch?v=","embed/");document.querySelector("#see-recipes-modal-video").innerHTML=`
    <iframe src="${t}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,document.querySelector("#see-recipes-modal-tags").innerText=i.category,document.querySelector("#see-recipes-modal-rating").innerText=i.rating,document.querySelector("#see-recipes-modal-time").innerText=`${i.time} min`,document.querySelector("#see-recipes-modal-material").innerText=i.ingredients.join(", "),document.querySelector("#see-recipes-modal-instructions").innerText=i.instructions}async function v(s){const a=document.querySelector("#see-recipes-modal-form"),i=`https://tasty-treats-backend.p.goit.global/api/recipes/${s}`,e=await l.get(i),t=document.querySelector(".see-recipes-modal-content");let p=e.data.youtube.replace("watch?v=","embed/");const m=e.data.ingredients.map(r=>`
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
  `;t.innerHTML=u,a.style.display="flex";const f=document.querySelector(".see-recipes-close-btn"),c=document.querySelector("#see-recipes-modal");f.addEventListener("click",d),document.addEventListener("keydown",r=>{r.key==="Escape"&&d()}),c.addEventListener("click",r=>{r.target===c&&d()});function d(){const r=document.querySelector("#see-recipes-modal-form");r.style.display="none"}}window.global||(window.global=window);export{v as M};
//# sourceMappingURL=main-NxxAdUmc.js.map
