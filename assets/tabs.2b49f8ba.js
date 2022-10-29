var Z=Object.defineProperty,ee=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var R=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&R(e,n,t[n]);if(F)for(var n of F(t))B.call(t,n)&&R(e,n,t[n]);return e},$=(e,t)=>ee(e,te(t));var N=(e,t)=>{var n={};for(var a in e)H.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&F)for(var a of F(e))t.indexOf(a)<0&&B.call(e,a)&&(n[a]=e[a]);return n};import{F as C,q as ne,s as E,v as k,x as W,y as x,z as O,A as q,B as w,C as re,D as ae}from"./vendor.562fc998.js";function D(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,D),a}var L=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(L||{}),le=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(le||{});function S(s){var l=s,{visible:e=!0,features:t=0,ourProps:n,theirProps:a}=l,r=N(l,["visible","features","ourProps","theirProps"]);var p;let i=oe(a,n),f=Object.assign(r,{props:i});if(e||t&2&&i.static)return M(f);if(t&1){let u=(p=i.unmount)==null||p?0:1;return D(u,{[0](){return null},[1](){return M($(P({},r),{props:$(P({},i),{hidden:!0,style:{display:"none"}})}))}})}return M(f)}function M({props:e,attrs:t,slots:n,slot:a,name:r}){var s;let u=_(e,["unmount","static"]),{as:l}=u,p=N(u,["as"]),i=(s=n.default)==null?void 0:s.call(n,a),f={};if(a){let o=!1,c=[];for(let[v,m]of Object.entries(a))typeof m=="boolean"&&(o=!0),m===!0&&c.push(v);o&&(f["data-headlessui-state"]=c.join(" "))}if(l==="template"){if(i=G(i!=null?i:[]),Object.keys(p).length>0||Object.keys(t).length>0){let[o,...c]=i!=null?i:[];if(!ue(o)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(t)).sort((v,m)=>v.localeCompare(m)).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));return ne(o,Object.assign({},p,f))}return Array.isArray(i)&&i.length===1?i[0]:i}return E(l,Object.assign({},p,f),i)}function G(e){return e.flatMap(t=>t.type===C?G(t.children):[t])}function oe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let a of e)for(let r in a)r.startsWith("on")&&typeof a[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(a[r])):t[r]=a[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(a=>[a,void 0])));for(let a in n)Object.assign(t,{[a](r,...s){let l=n[a];for(let p of l){if(r instanceof Event&&r.defaultPrevented)return;p(r,...s)}}});return t}function _(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}function ue(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let se=0;function ie(){return++se}function z(){return ie()}var h=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(h||{});function y(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function K(e,t){if(e)return e;let n=t!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function de(e,t){let n=x(K(e.value.type,e.value.as));return k(()=>{n.value=K(e.value.type,e.value.as)}),W(()=>{var a;n.value||!y(t)||y(t)instanceof HTMLButtonElement&&!((a=y(t))!=null&&a.hasAttribute("type"))&&(n.value="button")}),n}const ce=typeof window=="undefined"||typeof document=="undefined";function pe(e){if(ce)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=y(e);if(t)return t.ownerDocument}return document}let fe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var g=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(g||{}),j=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(j||{}),ve=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ve||{});function be(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(fe))}var me=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(me||{});let he=["textarea","input"].join(",");function ye(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,he))!=null?n:!1}function ge(e,t=n=>n){return e.slice().sort((n,a)=>{let r=t(n),s=t(a);if(r===null||s===null)return 0;let l=r.compareDocumentPosition(s);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function T(e,t,n=!0,a=null){var r;let s=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,l=Array.isArray(e)?n?ge(e):e:be(e);a=a!=null?a:s.activeElement;let p=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(a))-1;if(t&4)return Math.max(0,l.indexOf(a))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},u=0,o=l.length,c;do{if(u>=o||u+o<=0)return 0;let v=i+u;if(t&16)v=(v+o)%o;else{if(v<0)return 3;if(v>=o)return 1}c=l[v],c==null||c.focus(f),u+=p}while(c!==s.activeElement);return t&6&&ye(c)&&c.select(),c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),2}var V=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(V||{});let Y=O({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let l=e,{features:a}=l,r=N(l,["features"]),s={"aria-hidden":(a&2)==2?!0:void 0,style:P({position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},(a&4)==4&&(a&2)!=2&&{display:"none"})};return S({ourProps:s,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function we(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let xe=O({props:{onFocus:{type:Function,required:!0}},setup(e){let t=x(!0);return()=>t.value?E(Y,{as:"button",type:"button",features:V.Focusable,onFocus(n){n.preventDefault();let a,r=50;function s(){var l;if(r--<=0){a&&cancelAnimationFrame(a);return}if((l=e.onFocus)!=null&&l.call(e)){t.value=!1,cancelAnimationFrame(a);return}a=requestAnimationFrame(s)}a=requestAnimationFrame(s)}}):null}}),J=Symbol("TabsContext");function I(e){let t=re(J,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,I),n}return t}let Ae=O({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:n,emit:a}){let r=x(null),s=x([]),l=x([]),p=w(()=>e.selectedIndex!==null),i=w(()=>p.value?e.selectedIndex:r.value),f={selectedIndex:r,orientation:w(()=>e.vertical?"vertical":"horizontal"),activation:w(()=>e.manual?"manual":"auto"),tabs:s,panels:l,setSelectedIndex(u){i.value!==u&&a("change",u),p.value||(r.value=u)},registerTab(u){s.value.includes(u)||s.value.push(u)},unregisterTab(u){let o=s.value.indexOf(u);o!==-1&&s.value.splice(o,1)},registerPanel(u){l.value.includes(u)||l.value.push(u)},unregisterPanel(u){let o=l.value.indexOf(u);o!==-1&&l.value.splice(o,1)}};return ae(J,f),W(()=>{var u;if(f.tabs.value.length<=0||e.selectedIndex===null&&r.value!==null)return;let o=f.tabs.value.map(m=>y(m)).filter(Boolean),c=o.filter(m=>!m.hasAttribute("disabled")),v=(u=e.selectedIndex)!=null?u:e.defaultIndex;if(v<0)r.value=o.indexOf(c[0]);else if(v>f.tabs.value.length)r.value=o.indexOf(c[c.length-1]);else{let m=o.slice(0,v),d=[...o.slice(v),...m].find(b=>c.includes(b));if(!d)return;r.value=o.indexOf(d)}}),()=>{let u={selectedIndex:r.value};return E(C,[s.value.length<=0&&E(xe,{onFocus:()=>{for(let o of s.value){let c=y(o);if((c==null?void 0:c.tabIndex)===0)return c.focus(),!0}return!1}}),S({theirProps:P(P({},n),_(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])),ourProps:{},slot:u,slots:t,attrs:n,name:"TabGroup"})])}}}),Se=O({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let a=I("TabList");return()=>{let r={selectedIndex:a.selectedIndex.value},s={role:"tablist","aria-orientation":a.orientation.value};return S({ourProps:s,theirProps:e,slot:r,attrs:t,slots:n,name:"TabList"})}}}),Te=O({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:t,slots:n,expose:a}){let r=I("Tab"),s=`headlessui-tabs-tab-${z()}`,l=x(null);a({el:l,$el:l}),k(()=>r.registerTab(l)),q(()=>r.unregisterTab(l));let p=w(()=>r.tabs.value.indexOf(l)),i=w(()=>p.value===r.selectedIndex.value);function f(d){var b;let A=d();if(A===j.Success&&r.activation.value==="auto"){let Q=(b=pe(l))==null?void 0:b.activeElement,U=r.tabs.value.findIndex(X=>y(X)===Q);U!==-1&&r.setSelectedIndex(U)}return A}function u(d){let b=r.tabs.value.map(A=>y(A)).filter(Boolean);if(d.key===h.Space||d.key===h.Enter){d.preventDefault(),d.stopPropagation(),r.setSelectedIndex(p.value);return}switch(d.key){case h.Home:case h.PageUp:return d.preventDefault(),d.stopPropagation(),f(()=>T(b,g.First));case h.End:case h.PageDown:return d.preventDefault(),d.stopPropagation(),f(()=>T(b,g.Last))}if(f(()=>D(r.orientation.value,{vertical(){return d.key===h.ArrowUp?T(b,g.Previous|g.WrapAround):d.key===h.ArrowDown?T(b,g.Next|g.WrapAround):j.Error},horizontal(){return d.key===h.ArrowLeft?T(b,g.Previous|g.WrapAround):d.key===h.ArrowRight?T(b,g.Next|g.WrapAround):j.Error}}))===j.Success)return d.preventDefault()}let o=x(!1);function c(){var d;o.value||(o.value=!0,!e.disabled&&((d=y(l))==null||d.focus(),r.setSelectedIndex(p.value),we(()=>{o.value=!1})))}function v(d){d.preventDefault()}let m=de(w(()=>({as:e.as,type:t.type})),l);return()=>{var d;let b={selected:i.value},A={ref:l,onKeydown:u,onMousedown:v,onClick:c,id:s,role:"tab",type:m.value,"aria-controls":(d=y(r.panels.value[p.value]))==null?void 0:d.id,"aria-selected":i.value,tabIndex:i.value?0:-1,disabled:e.disabled?!0:void 0};return S({ourProps:A,theirProps:e,slot:b,attrs:t,slots:n,name:"Tab"})}}}),Ee=O({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=I("TabPanels");return()=>{let r={selectedIndex:a.selectedIndex.value};return S({theirProps:e,ourProps:{},slot:r,attrs:n,slots:t,name:"TabPanels"})}}}),je=O({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:n,expose:a}){let r=I("TabPanel"),s=`headlessui-tabs-panel-${z()}`,l=x(null);a({el:l,$el:l}),k(()=>r.registerPanel(l)),q(()=>r.unregisterPanel(l));let p=w(()=>r.panels.value.indexOf(l)),i=w(()=>p.value===r.selectedIndex.value);return()=>{var f;let u={selected:i.value},o={ref:l,id:s,role:"tabpanel","aria-labelledby":(f=y(r.tabs.value[p.value]))==null?void 0:f.id,tabIndex:i.value?0:-1};return!i.value&&e.unmount&&!e.static?E(Y,P({as:"span"},o)):S({ourProps:o,theirProps:e,slot:u,attrs:t,slots:n,features:L.Static|L.RenderStrategy,visible:i.value,name:"TabPanel"})}}});export{je as c,Te as d,Ee as f,Ae as o,Se as s};
