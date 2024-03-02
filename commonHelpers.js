import{i as n,S as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function l(a){const s=document.querySelector(".gallery-container"),t=a.hits.map(o=>`<div class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
  <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}">
  </a>
  <div class="gallery-info">
  <p class="gallety-info-item"><span class="gallery-item-text">Likes:</span>${o.likes}</p>
  <p class="gallety-info-item"><span class="gallery-item-text">Views:</span>${o.views}</p>
  <p class="gallety-info-item"><span class="gallery-item-text">Comments:</span>${o.comments}</p>
  <p class="gallety-info-item"><span class="gallery-item-text">Downloads:</span>${o.downloads}</p>
  </div>
    </div>`).join("");s.innerHTML=t,lightbox.refresh()}const u="42651911-b9e9cf23b752713c606cec899",f="https://pixabay.com/api/";function p(a){const s=new URLSearchParams({key:u,q:a,image_type:"horizontal",safesearch:"true",orientation:"horizontal"});fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>l(t)).catch(t=>console.log(t))}const m=document.querySelector(".form");m.addEventListener("submit",function(a){a.preventDefault();const s=document.querySelector(".form-input"),t=s.value.trim();t!==""?p(t):n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),s.value=""});new c(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
