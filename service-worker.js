if(!self.define){let e,r={};const a=(a,i)=>(a=new URL(a+".js",i).href,r[a]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=r,document.head.appendChild(e)}else e=a,importScripts(a),r()})).then((()=>{let e=r[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let s={};const t=e=>a(e,n),u={module:{uri:n},exports:s,require:t};r[n]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(o(...e),s)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vizinho_restaurant"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vizinho_restaurant_producao/assets/logo.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"/vizinho_restaurant_producao/css/app.c456d6b4.css",revision:null},{url:"/vizinho_restaurant_producao/imagens/Beirute.jpg",revision:"f0baac13e4e0d50a27e962efd52bff3e"},{url:"/vizinho_restaurant_producao/imagens/Condimentos.jpg",revision:"8c226f371a2b95402df40bf143e9e25b"},{url:"/vizinho_restaurant_producao/imagens/Pratos.jpg",revision:"34b18750b3c71449fbdd09d51e9239cd"},{url:"/vizinho_restaurant_producao/imagens/bebidas.jpg",revision:"2e1304b6b1bd950b5c223655f978ddde"},{url:"/vizinho_restaurant_producao/imagens/marmita.jpg",revision:"9a15bda82838ee363ef7d13f6bcc8c25"},{url:"/vizinho_restaurant_producao/imagens/porcoes.jpg",revision:"47f6ae0b8a9a7317bac2de04c24a0515"},{url:"/vizinho_restaurant_producao/imagens/restaurantefundo.png",revision:"00e923c1ae6d01eb8258df87b0f9876d"},{url:"/vizinho_restaurant_producao/imagens/sobremesa.png",revision:"8361a3532c905a2afaeb963b0a77ca52"},{url:"/vizinho_restaurant_producao/imagens/vizinho.jpg",revision:"4aae0319e2de9535382cde3305cb0f87"},{url:"/vizinho_restaurant_producao/imagens/whatsapp.png",revision:"fc601ba58f923366416bd69b8be6cca4"},{url:"/vizinho_restaurant_producao/index.html",revision:"3bf86105e9f64a8f75f8bedd8d2b7671"},{url:"/vizinho_restaurant_producao/js/app.95781c78.js",revision:null},{url:"/vizinho_restaurant_producao/js/chunk-vendors.d96e0035.js",revision:null},{url:"/vizinho_restaurant_producao/manifest.json",revision:"08f02b427a53024561f3e20480518ef0"},{url:"/vizinho_restaurant_producao/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
