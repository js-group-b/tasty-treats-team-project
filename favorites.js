import"./assets/dark-theme-DGa9OxoV.js";import{a as d}from"./assets/vendor-BhqcI0kQ.js";async function n(){let c=localStorage.getItem("favorites"),s;if(c==null){if(s=[],!document.querySelector(".no-favorites-message")){const t=document.createElement("div");t.className="no-favorites-message",t.innerHTML=`
                <p>It appears that you haven't added any recipes to your favorites yet. 
                To get started, you can add recipes that you like to your favorites 
                for easier access in the future.</p>
            `,favoriteCardsSectionUL.appendChild(t)}}else s=await JSON.parse(c);for(let t=0;t<s.length;t++)await l(s[t]);const o=document.getElementsByClassName("cards-section-favorites-button");for(let t=0;t<o.length;t++)o[t].addEventListener("click",e);async function e(t){const r=t.target.id.substring(5);let i=localStorage.getItem("favorites"),a;a=localStorage.getItem("favorites"),i=await JSON.parse(a),i.splice(i.indexOf(r),1),a=JSON.stringify(i),localStorage.setItem("favorites",a),document.querySelector(".favorite-cards-section-ul").innerHTML="",n()}}async function l(c){try{const s=`https://tasty-treats-backend.p.goit.global/api/recipes/${c}`,e=await(await d.get(s)).data,t=document.querySelector(".favorite-cards-section-ul");let r="";for(let a=0;a<5;a++)a<Math.floor(e.rating+.4)?r+='<img class="cards-section-card-bottom-div-rating-star" src="./img/star.png" alt="star" />':r+='<img class="cards-section-card-bottom-div-rating-star" src="./img/star-empty.png" alt="star" />';const i=`<li class="cards-section-card-items">
                       <div class="favorite-cards-section-card-item-inner-div">

                            <svg id="svg__${e._id}"class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="path_${e._id}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" fill="#F8F8F8"/>
                            </svg>

                           <img class="cards-section-card-image" style=" background: linear-gradient(rgba(5, 5, 5, .5), rgba(5, 5, 5, .5)), url(${e.preview});" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${e.title.length<20?e.title.toUpperCase():e.title.toUpperCase().substring(0,20)+"..."}</h3>
                               <p class="cards-section-card-content-p">${e.description.substring(0,57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                       <p class="cards-section-card-bottom-div-rating-p">${e.rating}</p>     

                                        ${r}

                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${e._id}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li> `;t.innerHTML+=i}catch{console.log("error occurd while fetching the data :C")}}n();
//# sourceMappingURL=favorites.js.map
