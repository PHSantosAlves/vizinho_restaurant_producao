if(!self.define){let e,r={};const s=(s,a)=>(s=new URL(s+".js",a).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let n={};const t=e=>s(e,o),u={module:{uri:o},exports:n,require:t};r[o]=Promise.all(a.map((e=>u[e]||t(e)))).then((e=>(i(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vizinho_restaurant"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vizinho_restaurant_producao/assets/imagens/Beirute.jpg",revision:"f0baac13e4e0d50a27e962efd52bff3e"},{url:"/vizinho_restaurant_producao/assets/imagens/Condimentos.jpg",revision:"8c226f371a2b95402df40bf143e9e25b"},{url:"/vizinho_restaurant_producao/assets/imagens/Pratos.jpg",revision:"34b18750b3c71449fbdd09d51e9239cd"},{url:"/vizinho_restaurant_producao/assets/imagens/bebidas.jpg",revision:"2e1304b6b1bd950b5c223655f978ddde"},{url:"/vizinho_restaurant_producao/assets/imagens/marmita.jpg",revision:"9a15bda82838ee363ef7d13f6bcc8c25"},{url:"/vizinho_restaurant_producao/assets/imagens/porcoes.jpg",revision:"47f6ae0b8a9a7317bac2de04c24a0515"},{url:"/vizinho_restaurant_producao/assets/imagens/restaurantefundo.png",revision:"00e923c1ae6d01eb8258df87b0f9876d"},{url:"/vizinho_restaurant_producao/assets/imagens/sobremesa.png",revision:"f5507a0fab041c58c9b3b9b20143687a"},{url:"/vizinho_restaurant_producao/assets/imagens/vizinho.jpg",revision:"4aae0319e2de9535382cde3305cb0f87"},{url:"/vizinho_restaurant_producao/assets/logo.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"/vizinho_restaurant_producao/css/app.feb9edae.css",revision:null},{url:"/vizinho_restaurant_producao/img/vizinho.f5c34be7.jpg",revision:null},{url:"/vizinho_restaurant_producao/index.html",revision:"62b929704b73a1af1a5c02e49e85cc1c"},{url:"/vizinho_restaurant_producao/js/app.676c20eb.js",revision:null},{url:"/vizinho_restaurant_producao/js/chunk-vendors.4fb7b560.js",revision:null},{url:"/vizinho_restaurant_producao/manifest.json",revision:"08f02b427a53024561f3e20480518ef0"},{url:"/vizinho_restaurant_producao/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
