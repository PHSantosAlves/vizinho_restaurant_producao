(function(){"use strict";var e={648:function(e,a,o){var n=o(963),r=o(252);const i=e=>((0,r.dD)("data-v-5bdb1a80"),e=e(),(0,r.Cn)(),e),t=i((()=>(0,r._)("nav",null,null,-1)));function d(e,a){const o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[t,(0,r.Wm)(o)],64)}var c=o(744);const s={},m=(0,c.Z)(s,[["render",d],["__scopeId","data-v-5bdb1a80"]]);var u=m,l=o(205);(0,l.z)("/vizinho_restaurant_producao/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var p=o(201),g=o(577);function v(e,a,o,n,i,t){const d=(0,r.up)("Sitehomemain");return(0,r.wg)(),(0,r.iD)("div",{style:(0,g.j5)({backgroundImage:`url(${i.home_container_img})`}),class:"homeContainer"},[(0,r.Wm)(d)],4)}const h=(0,r.uE)('<nav><div class="collapse bg-dark" id="navbarHeader"><div class="container"><div class="row"><div class="col-sm-8 col-md-7 py-4"><h4 class="text-white">About</h4><p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p></div><div class="col-sm-4 offset-md-1 py-4"><h4 class="text-white">Contact</h4><ul class="list-unstyled"><li><a href="#" class="text-white">Follow on Twitter</a></li><li><a href="#" class="text-white">Like on Facebook</a></li><li><a href="#" class="text-white">Email me</a></li></ul></div></div></div></div><div class="navbar navbar-dark bg-dark shadow-sm"><div class="container"><a href="#" class="navbar-brand d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg><strong>Album</strong></a><div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></div></div></div></nav>',1),f=[h];function b(e,a){return(0,r.wg)(),(0,r.iD)("header",null,f)}const q={},_=(0,c.Z)(q,[["render",b]]);var w=_;const k={class:"py-5 fnd"},C=(0,r._)("div",{class:"container"},[(0,r._)("p",{class:"float-end mb-1"},[(0,r._)("a",{href:"#",class:"roll"},"Voltar Para cima")])],-1),j=[C];function y(e,a){return(0,r.wg)(),(0,r.iD)("footer",k,j)}const z={},P=(0,c.Z)(z,[["render",y]]);var x=P;const D=e=>((0,r.dD)("data-v-07d42bbc"),e=e(),(0,r.Cn)(),e),S=D((()=>(0,r._)("section",{class:"container"},[(0,r._)("h1",{class:"restaurant"},[(0,r._)("b",null,"Vizinho")]),(0,r._)("h1",{class:"favo"}," Venha comer no vizinho, pois a comida do Vizinho é sempre mais gostosa 🌹 ")],-1))),O={class:"containerOrders"};function B(e,a,o,n,i,t){const d=(0,r.up)("Ordervitrini");return(0,r.wg)(),(0,r.iD)("main",null,[S,(0,r._)("main",O,[(0,r.Wm)(d)])])}const T=e=>((0,r.dD)("data-v-a0d1f782"),e=e(),(0,r.Cn)(),e),F=T((()=>(0,r._)("div",{class:"cardTitle"},"Cardápio",-1))),I={id:"panelCardapio"},E={class:"cardFotoContainer"},A=["src"],M={class:"itemName"},H=["onClick"],V={class:"ingName"},N={class:"ingIndice"},R={class:"ingDesc"},Z={class:"ingSum"},L={class:"ingDet"},Y={class:"ingPreco"},Q={class:"ingQuant"},W=["onClick"],G={class:"quantValue"},K=["onClick"];function U(e,a,o,n,i,t){return(0,r.wg)(),(0,r.iD)(r.HY,null,[F,(0,r._)("section",I,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.cardapio,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"cardCategoria",key:e.id},[(0,r._)("div",E,[(0,r._)("img",{class:"cardFoto",src:e.item_img,alt:"image_item"},null,8,A)]),(0,r._)("h3",M,(0,g.zw)(e.nome),1),(0,r._)("div",{class:"btMostrarItens",onClick:a=>t.mostrarItens(e.id)}," Ingredientes ",8,H),e.item_view?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(e.ingredientes,((e,a)=>((0,r.wg)(),(0,r.iD)("div",{key:a},[(0,r._)("div",V,[(0,r._)("div",N,(0,g.zw)(a+1)+".",1),(0,r._)("div",R,(0,g.zw)(e.nome),1)]),(0,r._)("div",Z,[(0,r._)("div",L,[(0,r.Uk)(" Preço: "),(0,r._)("div",Y,(0,g.zw)(e.preco),1)]),(0,r._)("div",Q,[(0,r._)("div",{class:"decQuant",onClick:a=>t.decrementar(e)},"-",8,W),(0,r._)("div",G,(0,g.zw)(e.quantidade),1),(0,r._)("div",{class:"sumQuant",onClick:a=>t.incrementar(e)},"+",8,K)])])])))),128)):(0,r.kq)("",!0)])))),128))])],64)}var $={data(){return{cardapio:[{id:1,nome:"Lanches",item_img:"../assets/imagens/Beirute.jpg",item_view:!1,ingredientes:[{nome:"Hambúrguer com batata frita",preco:5,quantidade:0},{nome:"Cachorro-quente com molho especial",preco:5,quantidade:0},{nome:"Sanduíche natural com peito de peru",preco:5,quantidade:0},{nome:"Tapioca recheada com queijo e presunto",preco:5,quantidade:0},{nome:"Pizza fatiada com pepperoni",preco:5,quantidade:0},{nome:"Coxinha de frango com catupiry",preco:5,quantidade:0},{nome:"Pastel de carne com queijo",preco:5,quantidade:0},{nome:"Crepes doces com Nutella e morangos",preco:5,quantidade:0},{nome:"Salgadinhos variados",preco:5,quantidade:0},{nome:"Torradas com patê de frango",preco:5,quantidade:0}]},{id:2,nome:"Pratos",item_img:"../assets/imagens/Beirute.jpg",item_view:!1,ingredientes:[{nome:"Strogonoff de carne com arroz branco",preco:5,quantidade:0},{nome:"Feijoada completa com farofa e couve",preco:5,quantidade:0},{nome:"Arroz de camarão com batata palha",preco:5,quantidade:0},{nome:"Peixe grelhado com legumes na manteiga",preco:5,quantidade:0},{nome:"Frango assado com batata doce",preco:5,quantidade:0},{nome:"Lasanha à bolonhesa",preco:5,quantidade:0},{nome:"Macarrão ao alho e óleo com frutos do mar",preco:5,quantidade:0},{nome:"Ensopado de carne com legumes",preco:5,quantidade:0},{nome:"Risoto de funghi com parmesão",preco:5,quantidade:0},{nome:"Carne de panela com purê de batata ",preco:5,quantidade:0}]},{id:3,nome:"PORÇÕES",item_img:"../assets/imagens/Beirute.jpg",item_view:!1,ingredientes:[{nome:"Porção de batata frita com queijo e bacon",preco:5,quantidade:0},{nome:"Porção de calabresa acebolada",preco:5,quantidade:0},{nome:"Porção de frango a passarinho ",preco:5,quantidade:0},{nome:"Porção de camarão empanado",preco:5,quantidade:0},{nome:"Porção de linguiça de pernil ",preco:5,quantidade:0},{nome:"Porção de mandioca frita ",preco:5,quantidade:0},{nome:"Porção de polenta com queijo ",preco:5,quantidade:0},{nome:"Porção de bolinho de bacalhau",preco:5,quantidade:0},{nome:"Porção de pastéis variados ",preco:5,quantidade:0},{nome:"Porção de aipim com carne seca ",preco:5,quantidade:0}]},{id:4,nome:"BEBIDAS",item_img:"../assets/imagens/Beirute.jpg",item_view:!1,ingredientes:[{nome:"Refrigerante ",preco:5,quantidade:0},{nome:"Água com gás ",preco:5,quantidade:0},{nome:"Água Mineral ",preco:5,quantidade:0},{nome:"Água de coco ",preco:5,quantidade:0},{nome:"Chá Gelado ",preco:5,quantidade:0},{nome:"Suco Natural ",preco:5,quantidade:0},{nome:"Cocktail de frutas ",preco:5,quantidade:0},{nome:"Vinho tinto seco ",preco:5,quantidade:0},{nome:"Espanhola ",preco:5,quantidade:0},{nome:"Cerveja Gelada ",preco:5,quantidade:0}]},{id:5,nome:"SOBREMESAS",item_img:"../assets/imagens/Beirute.jpg",item_view:!1,ingredientes:[{nome:"Torta de limão com merengue ",preco:5,quantidade:0},{nome:"Pudim de leite condensado ",preco:5,quantidade:0},{nome:"Brigadeiro de colher ",preco:5,quantidade:0},{nome:"Sorvete de creme com calda de chocolate ",preco:5,quantidade:0},{nome:"Tiramisu clássico",preco:5,quantidade:0},{nome:"Bolo de cenoura com cobertura de chocolate ",preco:5,quantidade:0},{nome:"Mousse de maracujá ",preco:5,quantidade:0},{nome:"Pavê de chocolate com amêndoas",preco:5,quantidade:0},{nome:"Cheesecake de morango ",preco:5,quantidade:0},{nome:"Brownie com sorvete de baunilha ",preco:5,quantidade:0}]},{id:6,nome:"MARMITA",item_img:"../assets/imagens/Beirute.jpg",item_view:!1,ingredientes:[{nome:"Frango grelhado com arroz integral e legumes ",preco:5,quantidade:0},{nome:"Escondidinho de carne seca com purê de batata ",preco:5,quantidade:0},{nome:"Carne assada com batata doce e couve refogada ",preco:5,quantidade:0},{nome:"Feijoada completa com arroz, couve e farofa ",preco:5,quantidade:0},{nome:"Strogonoff de carne com arroz branco e batata palha ",preco:5,quantidade:0},{nome:"Tilápia grelhada com legumes e arroz branco ",preco:5,quantidade:0},{nome:"Frango ao curry com arroz e salada de folhas verdes  ",preco:5,quantidade:0},{nome:"Salada de quinoa com frango grelhado e legumes ",preco:5,quantidade:0},{nome:"Escondidinho de frango com purê de batata e salada ",preco:5,quantidade:0},{nome:"Peixe assado com batata doce e legumes no vapor  ",preco:5,quantidade:0}]}]}},methods:{formatarValor(e){let a=e.target.value.replace(/\D/g,""),o=parseFloat(a).toLocaleString("pt-BR",{minimumFractionDigits:2});this.ingrediente.preco=o},incrementar(e){e.quantidade++,e.precoTotal=e.preco*e.quantidade},decrementar(e){e.quantidade>0&&(e.quantidade--,e.precoTotal=e.preco*e.quantidade)},mostrarItens(e){var a=e-1;console.log(a),!1===this.cardapio[a].item_view?(console.log("encontrou como false"),this.cardapio[a].item_view=!0):(console.log("encontrou como true"),this.cardapio[a].item_view=!1)}}};const J=(0,c.Z)($,[["render",U],["__scopeId","data-v-a0d1f782"]]);var X=J,ee={name:"homeMain",data(){return{img_titulo:"../assets/imagens/vizinho.jpg",img_fundo:"../assets/imagens/restaurantefundo.png"}},components:{Ordervitrini:X}};const ae=(0,c.Z)(ee,[["render",B],["__scopeId","data-v-07d42bbc"]]);var oe=ae,ne={name:"HomeView",components:{Siteheader:w,sitefooter:x,Sitehomemain:oe},data(){return{home_container_img:"../assets/imagens/restaurantefundo.png"}},methods:{mostrarCaminhoImagem(){console.log(this.home_container_img)}},mounted(){this.mostrarCaminhoImagem()}};const re=(0,c.Z)(ne,[["render",v],["__scopeId","data-v-92395052"]]);var ie=re;const te=[{path:"/",name:"home",component:ie}],de=(0,p.p7)({history:(0,p.PO)("/vizinho_restaurant_producao/"),routes:te});var ce=de,se=o(907),me=(0,se.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(u).use(me).use(ce).mount("#app")}},a={};function o(n){var r=a[n];if(void 0!==r)return r.exports;var i=a[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(a,n,r,i){if(!n){var t=1/0;for(m=0;m<e.length;m++){n=e[m][0],r=e[m][1],i=e[m][2];for(var d=!0,c=0;c<n.length;c++)(!1&i||t>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(d=!1,i<t&&(t=i));if(d){e.splice(m--,1);var s=r();void 0!==s&&(a=s)}}return a}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[n,r,i]}}(),function(){o.d=function(e,a){for(var n in a)o.o(a,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};o.O.j=function(a){return 0===e[a]};var a=function(a,n){var r,i,t=n[0],d=n[1],c=n[2],s=0;if(t.some((function(a){return 0!==e[a]}))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(c)var m=c(o)}for(a&&a(n);s<t.length;s++)i=t[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(m)},n=self["webpackChunkvizinho_restaurant"]=self["webpackChunkvizinho_restaurant"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(648)}));n=o.O(n)})();
//# sourceMappingURL=app.676c20eb.js.map