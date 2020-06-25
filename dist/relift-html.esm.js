const t=(t,e,n)=>{let r=t;const o=e.split(".");for(;o.length;){const t=o.shift();r[t]=o.length?r[t]?r[t]:{}:n,r=r[t]}},e=(t,e)=>e.split(".").reduce((t,e)=>t&&t[e],t),n=(t,e)=>t&&"function"==typeof t[e],r=t=>"string"==typeof t?document.querySelector(t):t,o=t=>(new DOMParser).parseFromString(t,"text/html").body,i=t=>Object.freeze(Array.from(t.attributes).map(t=>({[t.name]:t.value})).reduce((t,e)=>({...t,...e}),{})),s=(t,e)=>{let n=!1,r=!1;const o=new WeakMap,i=()=>{n?r||(r=!0):e()},s={get(t,e,n){if("___target___"===e)return t;const r=Reflect.get(t,e,n);if((t=>null===t||!["function","object"].includes(typeof t))(r)||"constructor"===e)return r;const i=((t,e)=>{let n=o.get(t);if(n)return n;n=new Map,o.set(t,n);let r=n.get(e);return r||(r=Reflect.getOwnPropertyDescriptor(t,e),n.set(e,r)),r})(t,e);if(i&&!i.configurable){if(i.set&&!i.get)return;if(!1===i.writable)return r}return new Proxy(r,s)},set(t,e,n,r){n&&void 0!==n.___target___&&(n=n.___target___);const o=Reflect.get(t,e,r),s=Reflect.set(t,e,n);return o!==n&&i(),s},defineProperty(t,e,n){const r=Reflect.defineProperty(t,e,n);return i(),r},deleteProperty(t,e){const n=Reflect.deleteProperty(t,e);return i(),n},apply(t,o,i){if(!n){n=!0;const s=Reflect.apply(t,o,i);return r&&e(),n=r=!1,s}return Reflect.apply(t,o,i)}};return new Proxy(t,s)},a=(t,e)=>Array.from(t.childNodes).filter(t=>e(t)).map(t=>({[e(t)]:t})).reduce((t,e)=>({...t,...e}),{}),l=[];for(const t in document){const e=null===document[t]||"function"==typeof document[t];t.startsWith("on")&&e&&l.push(t.substring(2))}const c="r-e-list",u=t=>`r-on-${t}`,d={$for:function(t,e,n){const r=/(.*)\s+(in)\s+(.*)$/.exec(e);if(4===r.length){const e=r[1].replace("(","").replace(")",""),o=r[3];y(t,`\${${o}.map(function(${e}) { return \``,"`}.bind(this)).join('')}"),h(t,n)}},$if:function(t,e,n){h(t,n),g(t,`\${${e} ? `);const r=t.nextElementSibling;r&&p(r,"else")?(y(t,"`","`"),h(r,"else"),y(r,":`","`}")):y(t,"`","`:``}")}},f=t=>`r-${t}`,p=(t,e)=>t.hasAttribute(f(e)),m=(t,e)=>t.getAttribute(f(e)),h=(t,e)=>t.removeAttribute(f(e)),b=(t,e)=>t.querySelectorAll(`[${f(e)}]`),g=(t,e)=>t.insertAdjacentText("beforebegin",e),y=(t,e,n)=>{g(t,e),((t,e)=>t.insertAdjacentText("afterend",e))(t,n)},$=["data","el","isShadow","template","created","updated","removed","$store","props","prop","tagName"],A=t=>Object.keys(t).filter(t=>!$.includes(t)).filter(e=>n(t,e)).reduce((e,n)=>({...e,[n]:t[n]}),{}),T=t=>Object.keys(t).filter(e=>!n(t,e)).reduce((e,n)=>({...e,[n]:t[n]}),{}),N=t=>Object.keys(t).filter(e=>n(t,e)).map(e=>((t,e)=>n=>n[t]=e({...n}))(e,t[e])),v=t=>e=>(e.$store=t.getState(),t.subscribe(n=>e.$store={...t.getState()})),w=t=>{const e=o((t=>t.replace(/\$?\{([^\;\{]+)\}/g,(t,e)=>`\${${e}}`))(t));!function(t,e={}){const n={...e,...d};for(const e in n){const r=e.replace("$","");for(const o of b(t,r))if(p(o,r)){const t=m(o,r);n[e](o,t,r)}}}(e),function(t){for(const e of t.querySelectorAll("[\\@call], [\\@bind]")){let t=e.getAttribute("@call");const n=e.hasAttribute("@bind");e.removeAttribute("@call"),n&&(e.setAttribute("r-data-key",e.getAttribute("@bind")),e.removeAttribute("@bind"),t="__$bindInput");let r=["click"];e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?r=["input","paste"]:e instanceof HTMLSelectElement?r=["change"]:e instanceof HTMLFormElement?r=["submit"]:e instanceof HTMLAnchorElement&&e.setAttribute("href","javascript:void(0);");let o=(e.getAttribute(c)||"").split(",").filter(t=>t);o=o.concat(r),e.setAttribute(c,o.join(","));for(const n of r)e.setAttribute(u(n),t)}for(const e of l)for(const n of t.querySelectorAll(`[\\@${e}]`)){const t=(n.getAttribute(c)||"").split(",").filter(t=>t);t.push(e),n.setAttribute(c,t.join(",")),n.setAttribute(u(e),n.getAttribute(`@${e}`)),n.removeAttribute(`@${e}`),n instanceof HTMLAnchorElement&&n.setAttribute("href","javascript:void(0);")}}(e);const n=e.innerHTML,r=(t=>e=>new Function(`return \`${t}\``).call(e))(n);return{html:n,render:(t,e)=>{const n=o(r(e));return!t.isEqualNode(n)&&function t(e,n,r={}){if(r={key:t=>t.id,...r},"string"==typeof n){const t=n;(n=document.createElement(e.nodeName)).innerHTML=t}const o=a(e,r.key);let s;for(s=0;n.firstChild;s++){const a=n.removeChild(n.firstChild);if(s>=e.childNodes.length){e.appendChild(a);continue}let l=e.childNodes[s];const c=r.key(a);if(r.key(l)||c){const t=c&&c in o?o[c]:a;t!==l&&(l=e.insertBefore(t,l))}if(l.nodeType!==a.nodeType||l.tagName!==a.tagName)e.replaceChild(a,l);else if([Node.TEXT_NODE,Node.COMMENT_NODE].indexOf(l.nodeType)>=0)l.textContent!==a.textContent&&(l.textContent=a.textContent);else if(l!==a){const e=i(l),n=i(a);for(const t in e)t in n||l.removeAttribute(t);for(const t in n)t in e&&e[t]===n[t]||l.setAttribute(t,n[t]);t(l,a)}}for(;e.childNodes.length>s;)e.removeChild(e.lastChild);return!0}(t,n)}}};function _(n){const r=n.target,o=r.getAttribute("r-data-key");if("checkbox"===r.type){const n=e(this.data,o)||[];t(this.data,o,r.checked?n.concat(r.value):n.filter(t=>t!=r.value))}else r.options&&r.multiple?t(this.data,o,[].reduce.call(r,(t,e)=>e.selected?t.concat(e.value):t,[])):t(this.data,o,r.value)}function S(t={}){const e={isShadow:!1,tagName:null,data:{},template:null,$store:{getState:()=>{},subscribe:()=>()=>{}},created(){},updated(){},removed(){},...t},n=v(e.$store),r=w(e.template),o=A(e),a=T(e.data),l=N(e.data),d=t=>l.forEach(e=>e(t));window.customElements.define(e.tagName.toLowerCase(),class extends HTMLElement{constructor(){super(),this.$root=e.isShadow?this.attachShadow({mode:"open"}):this}connectedCallback(){this.state={...this.state,...a,prop:i(this)};const t=s(this.state,()=>{d(this.state),r.render(this.$root,this.state)&&e.updated.call(this.context)});this.disconnectStore=n(t),this.$root.innerHTML=r.html,this.context={...o,data:t,el:this.$root,prop:this.state.prop,$store:e.$store},function(t,e){function n(t){Array.from(t.querySelectorAll(`[${c}]`)).map(t=>{(t.getAttribute(c)||"").split(",").filter(t=>t).map(n=>{t[`on${n}`]=r=>{r.preventDefault();const o=t.getAttribute(u(n));e[o].call(e,r)}})})}new MutationObserver(t=>{[...t].filter(t=>t.addedNodes.length>0).map(t=>t.target).map(t=>n(t))}).observe(t,{attributes:!0,childList:!0,subtree:!0}),n(t)}(this.$root,{...this.context,__$bindInput:_}),d(this.state),r.render(this.$root,this.state),e.created.call(this.context)}disconnectedCallback(){e.removed.call(this.context),this.disconnectStore()}})}const x=t=>new Error(`reLift-HTML Error: ${t}`),M=()=>`relift-ce-${((t=7)=>Math.random().toString(36).substr(2,t).toLowerCase())()}`;export default function(t={}){const e={el:null,asTemplate:!1,tagName:null,isShadow:null,template:null,...t};let n=null;if(e.isShadow=null===e.isShadow?e.asTemplate:e.isShadow,e.el&&((n=r(e.el)).style.display="block",e.tagName=e.tagName||(e.asTemplate?n.getAttribute("tag-name"):M()),e.template||(e.template=e.asTemplate?n.innerHTML:n.outerHTML),e.asTemplate?n.innerHTML="":n.parentNode.replaceChild(document.createElement(e.tagName),n)),e.tagName=e.tagName||M(),!e.template)throw x("missing 'template' option or 'el' are not valid elements");if(!e.tagName)throw x("missing 'tagName'");S(e)}