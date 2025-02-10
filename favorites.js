import"./assets/main-CFA54l7e.js";import{a as d}from"./assets/vendor-N5iQpiFS.js";async function n(){let r=localStorage.getItem("favorites"),a=await JSON.parse(r);for(let s=0;s<a.length;s++)await l(a[s]);const c=document.getElementsByClassName("cards-section-favorites-button");for(let s=0;s<c.length;s++)c[s].addEventListener("click",t);async function t(s){const o=s.target.id.substring(5);let e=localStorage.getItem("favorites"),i;i=localStorage.getItem("favorites"),e=await JSON.parse(i),e.splice(e.indexOf(o),1),i=JSON.stringify(e),localStorage.setItem("favorites",i),document.querySelector(".favorite-cards-section-ul").innerHTML="",n()}}async function l(r){try{const a=`https://tasty-treats-backend.p.goit.global/api/recipes/${r}`,t=await(await d.get(a)).data,s=document.querySelector(".favorite-cards-section-ul"),o=`<li class="cards-section-card-items">
                       <div class="favorite-cards-section-card-item-inner-div">

                            <svg id="svg__${t._id}"class="cards-section-favorites-button" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="path_${t._id}" fill-rule="evenodd" clip-rule="evenodd" d="M10.9934 4.70783C9.16066 2.5652 6.10444 1.98884 3.80814 3.95085C1.51185 5.91285 1.18856 9.19323 2.99186 11.5137C4.49117 13.443 9.02863 17.5121 10.5158 18.8291C10.6821 18.9764 10.7653 19.0501 10.8624 19.0791C10.9471 19.1043 11.0397 19.1043 11.1244 19.0791C11.2215 19.0501 11.3046 18.9764 11.471 18.8291C12.9582 17.5121 17.4956 13.443 18.9949 11.5137C20.7982 9.19323 20.5144 5.89221 18.1786 3.95085C15.8429 2.00948 12.8261 2.5652 10.9934 4.70783Z" fill="#F8F8F8"/>
                            </svg>

                           <img class="cards-section-card-image" style=" background: linear-gradient(rgba(5, 5, 5, .5), rgba(5, 5, 5, .5)), url(${t.preview});" />
                           <div class="cards-section-card-content">
                               <h3 class="cards-section-card-content-title">${t.title.length<20?t.title.toUpperCase():t.title.toUpperCase().substring(0,20)+"..."}</h3>
                               <p class="cards-section-card-content-p">${t.description.substring(0,57)}...</p>
                               <div class="cards-section-card-bottom-div">
                                   <div class="cards-section-ratings-div">
                                       <p class="cards-section-card-bottom-div-rating-p">${t.rating}</p>                                
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star-empty.png" alt="star" />
                                       <img class="cards-section-card-bottom-div-rating-star" src="../img/star-empty.png" alt="star" />
                                   </div>
                                   <div class="cards-section-see-recipe-button-div">
                                       <button id="${t._id}" class="cards-section-see-recipe-button">See recipe</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li> `;s.innerHTML+=o}catch{console.log("error occurd while fetching the data :C")}}n();
//# sourceMappingURL=favorites.js.map
