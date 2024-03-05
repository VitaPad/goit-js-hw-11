import{S as l,i as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="42651911-b9e9cf23b752713c606cec899",f="https://pixabay.com/api/";function m(a){const s=new URLSearchParams({key:p,q:a,image_type:"horizontal",safesearch:"true",orientation:"horizontal"});return fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(a){const s=document.querySelector(".gallery-container"),t=a.hits.map(o=>`<div class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
  <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}">
  </a>
  <div class="gallery-info">
  <p class="gallety-info-item"><span class="gallery-item-text">Likes:</span>${o.likes}</p>
  <p class="gallety-info-item"><span class="gallery-item-text">Views:</span>${o.views}</p>
  <p class="gallety-info-item"><span class="gallery-item-text">Comments:</span>${o.comments}</p>
  <p class="gallety-info-item"><span class="gallery-item-text">Downloads:</span>${o.downloads}</p>
  </div>
    </div>`).join("");s.innerHTML=t}const i=document.querySelector(".gallery-container"),c=document.querySelector(".form-input"),g=new l(".gallery-link",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".form");d.addEventListener("submit",function(a){a.preventDefault(),i.innerHTML='<span class="loader"></span>';const s=c.value.trim();s!==""?m(s).then(t=>{y(t),g.refresh()}).catch(t=>console.log(t)):(i.innerHTML="",u.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),c.value=""});
//# sourceMappingURL=commonHelpers.js.map
