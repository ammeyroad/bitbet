import{r as f,o as _,c as d,a as t,b as p,d as y,t as h,u as v,F as g,e as x,f as A,p as L,g as P,h as k,i as V,j as O,k as T,l as I,m as R}from"./vendor.64c9be75.js";const j=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};j();var C=(c,n)=>{const i=c.__vccOpts||c;for(const[s,e]of n)i[s]=e;return i};const D={class:"flex"},S={class:"w-full"},$={class:""},w={setup(c){return(n,i)=>{const s=f("Tzest"),e=f("zheaderr"),o=f("router-view");return _(),d("main",null,[t("div",D,[p(s),t("div",S,[p(e),t("div",$,[p(o)])])])])}}},B="modulepreload",E={},N="/",r=function(n,i){return!i||i.length===0?n():Promise.all(i.map(s=>{if(s=`${N}${s}`,s in E)return;E[s]=!0;const e=s.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":B,e||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),e)return new Promise((u,l)=>{a.addEventListener("load",u),a.addEventListener("error",l)})})).then(()=>n())},z=y("counter",{state:()=>({count:0}),actions:{click(){this.count++},doubleClick(){this.count=this.count*2}}}),H={class:"bg-slate-600 hover:scale-75 duration-300 text-gray-50 px-5 py-2 rounded-xl text-base"},U={props:{label:{type:String,default:"Label"}},setup(c){return(n,i)=>(_(),d("span",H,h(c.label),1))}};const b=c=>(L("data-v-1d1911fc"),c=c(),P(),c),F=A('<section class="section" data-v-1d1911fc><strong class="text-3xl inline-block mb-8" data-v-1d1911fc> Wellcome to<span class="text-green-500" data-v-1d1911fc> Vue </span><span class="text-pink-500" data-v-1d1911fc>Tailwind</span> \u{1F44F}\u{1F3FB} </strong><p class="mb-5" data-v-1d1911fc> A simple starter template for Vue JS 3 + TailwindCSS and any other tools </p><a href="https://github.com/or-abdillh/vue-tailwind.git" target="_blank" class="bg-gray-600 hover:bg-opacity-75 focus:ring-2 text-gray-50 px-5 py-2 rounded-lg inline-block" data-v-1d1911fc><i class="fab fa-github" data-v-1d1911fc></i><span class="mx-2" data-v-1d1911fc>Github</span></a></section>',1),W={class:"section flex flex-col items-center gap-3"},q=b(()=>t("small",null,"Current click",-1)),G={class:"text-5xl font-medium"},J={class:"flex gap-4 mt-3"},K={class:"mb-6"},M=b(()=>t("h1",{class:"text-xl mb-3"},[t("i",{class:"fa fa-chevron-right"}),k(" Routes ")],-1)),Q={class:"flex gap-4"},X=["onClick"],Y=b(()=>t("h1",{class:"text-xl"},[t("i",{class:"fa fa-chevron-right"}),k(" All dependencies ")],-1)),Z={class:"flex flex-wrap gap-2 mt-3"},ee={setup(c){const n=z(),i=V(),s=a=>i.push({name:a}),e=["Vue v.3.2.25","Tailwindcss v.3.0.18","Vue router v.4.0.12","Pinia v.2.0.10","Vite v.2.7.2","Postcss v.8.4.5","Autoprefixer v.10.4.2"],o=[{name:"About",to:"About"},{name:"Blank screen",to:"Blank"}];return(a,u)=>(_(),d("main",null,[F,t("section",W,[q,t("h1",G,h(v(n).count),1),t("div",J,[t("button",{onClick:u[0]||(u[0]=l=>v(n).click()),class:"btn-count"},"Click++"),t("button",{onClick:u[1]||(u[1]=l=>v(n).doubleClick()),class:"btn-count"},"Click * 2")])]),t("section",K,[M,t("div",Q,[(_(),d(g,null,x(o,(l,m)=>t("a",{key:m,onClick:ne=>s(l.to),class:"text-green-500 text-lg hover:text-green-200 duration-300"},h(l.name),9,X)),64))])]),t("section",null,[Y,t("div",Z,[(_(),d(g,null,x(e,(l,m)=>p(U,{key:m,label:l},null,8,["label"])),64))])])]))}};var te=C(ee,[["__scopeId","data-v-1d1911fc"]]);const oe=[{name:"Home",path:"/",component:te},{name:"beranda",path:"/beranda",component:()=>r(()=>import("./beranda.49556f01.js"),["assets/beranda.49556f01.js","assets/h-game.6d2e8c61.js","assets/vendor.64c9be75.js","assets/h-promo.a0303a77.js","assets/017-poker-cards.554133b9.js","assets/icon-depo.407e6445.js"])},{name:"About",path:"/about",component:()=>r(()=>import("./About.195a36c7.js"),["assets/About.195a36c7.js","assets/h-game.6d2e8c61.js","assets/vendor.64c9be75.js"])},{name:"Aboutus",path:"/aboutus",component:()=>r(()=>import("./AboutUs.aefa44bd.js"),["assets/AboutUs.aefa44bd.js","assets/vendor.64c9be75.js"])},{name:"User",path:"/user",component:()=>r(()=>import("./User.661665ea.js"),["assets/User.661665ea.js","assets/icon-depo.407e6445.js","assets/017-poker-cards.554133b9.js","assets/vendor.64c9be75.js","assets/tabs.59773baf.js"])},{name:"user-refferral",path:"/refferral",component:()=>r(()=>import("./user-refferral.9d14bb09.js"),["assets/user-refferral.9d14bb09.js","assets/vendor.64c9be75.js","assets/tabs.59773baf.js"])},{name:"lotre",path:"/lotre",component:()=>r(()=>import("./lotre.7617ef13.js"),["assets/lotre.7617ef13.js","assets/ele-2.2c73e020.js","assets/vendor.64c9be75.js"])},{name:"bonus-prediksi",path:"/bonus-prediksi",component:()=>r(()=>import("./bonus-prediksi.0813b6e6.js"),["assets/bonus-prediksi.0813b6e6.js","assets/g-bingo-16.dce46e49.js","assets/logo-6.f12f29c2.js","assets/sub-game.e1399af0.js","assets/ele-2.2c73e020.js","assets/vendor.64c9be75.js","assets/017-poker-cards.554133b9.js"])},{name:"games-spin",path:"/games-spin",component:()=>r(()=>import("./games-spin.b732aa86.js"),["assets/games-spin.b732aa86.js","assets/logo-6.f12f29c2.js","assets/sub-game.e1399af0.js","assets/ele-2.2c73e020.js","assets/vendor.64c9be75.js","assets/017-poker-cards.554133b9.js"])},{name:"games-slot",path:"/games-slot",component:()=>r(()=>import("./games-slot.0ca594a4.js"),["assets/games-slot.0ca594a4.js","assets/sub-game.e1399af0.js","assets/ele-2.2c73e020.js","assets/vendor.64c9be75.js","assets/017-poker-cards.554133b9.js"])},{name:"games-bingo",path:"/games-bingo",component:()=>r(()=>import("./games-bingo.309b30d5.js"),["assets/games-bingo.309b30d5.js","assets/g-bingo-16.dce46e49.js","assets/logo-6.f12f29c2.js","assets/sub-game.e1399af0.js","assets/ele-2.2c73e020.js","assets/vendor.64c9be75.js","assets/017-poker-cards.554133b9.js"])},{name:"games-bacarat",path:"/games-bacarat",component:()=>r(()=>import("./games-bacarat.84f8d82a.js"),["assets/games-bacarat.84f8d82a.js","assets/logo-6.f12f29c2.js","assets/sub-game.e1399af0.js","assets/ele-2.2c73e020.js","assets/vendor.64c9be75.js","assets/017-poker-cards.554133b9.js"])},{name:"test",path:"/test",component:()=>r(()=>import("./test.20a9dab5.js"),["assets/test.20a9dab5.js","assets/h-game.6d2e8c61.js","assets/vendor.64c9be75.js","assets/h-promo.a0303a77.js","assets/017-poker-cards.554133b9.js","assets/icon-depo.407e6445.js"])},{name:"Blank",path:"/blank",component:()=>r(()=>import("./Blank.c654886a.js"),["assets/Blank.c654886a.js","assets/h-game.6d2e8c61.js","assets/vendor.64c9be75.js","assets/h-promo.a0303a77.js","assets/017-poker-cards.554133b9.js","assets/icon-depo.407e6445.js"])}],se=O({history:T({}.BASE_URL),routes:oe});I(w).use(se).use(R()).mount("#app");export{C as _};
