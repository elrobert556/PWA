if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let o={};const n=e=>r(e,a),d={module:{uri:a},exports:o,require:n};i[a]=Promise.all(s.map((e=>d[e]||n(e)))).then((e=>(c(...e),o)))}}define(["./workbox-6c9c7848"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/styles.css",revision:"a34ffd1f70317e4348cee7546848ba06"},{url:"img/ensalada-cesar.jpg",revision:"ce5eeb45ac8e738c1dbf6ffaace05bb6"},{url:"img/espagueti-carbonara.jpg",revision:"165d23e9498384a1d5f3068691bba7a6"},{url:"img/hamburguesa.webp",revision:"2a4f796a530cea9cc3e36ea3461cf15a"},{url:"img/hotcakes.jpg",revision:"c8969bc9d88f5d9058dd8dfc9de9a464"},{url:"img/icon.png",revision:"0138ab4b41aa19257a6e86f6f4d7d150"},{url:"img/papa-rellena.webp",revision:"734ec4bd355d172c6f78b342c698d117"},{url:"img/recetas-con-pechuga-de-pollo.jpg",revision:"7e62780b0de6b6366f5e099cabb632e2"},{url:"img/tacos-pescado.jpg",revision:"29237314967f70917dc548b4913f5697"},{url:"img/tacos.webp",revision:"db3850ba6e20fd0762558b6618945a78"},{url:"index.html",revision:"e25b7c5b87fc67cb3d924d6c32148b66"},{url:"js/script.js",revision:"4dec3fe3200ff991baf2b7aee78fd004"},{url:"manifest.json",revision:"d8ab40b38703882d329e6bac51eb87eb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map