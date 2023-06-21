(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var zt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Ma(n,e){return function(){return n.apply(e,arguments)}}const{toString:Fu}=Object.prototype,{getPrototypeOf:dr}=Object,Ki=(n=>e=>{const t=Fu.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),He=n=>(n=n.toLowerCase(),e=>Ki(e)===n),qi=n=>e=>typeof e===n,{isArray:$t}=Array,Tn=qi("undefined");function Bu(n){return n!==null&&!Tn(n)&&n.constructor!==null&&!Tn(n.constructor)&&Se(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Fa=He("ArrayBuffer");function Uu(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Fa(n.buffer),e}const zu=qi("string"),Se=qi("function"),Ba=qi("number"),Gi=n=>n!==null&&typeof n=="object",Wu=n=>n===!0||n===!1,di=n=>{if(Ki(n)!=="object")return!1;const e=dr(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Hu=He("Date"),ju=He("File"),Vu=He("Blob"),Xu=He("FileList"),Ku=n=>Gi(n)&&Se(n.pipe),qu=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Se(n.append)&&((e=Ki(n))==="formdata"||e==="object"&&Se(n.toString)&&n.toString()==="[object FormData]"))},Gu=He("URLSearchParams"),Yu=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xn(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),$t(n))for(i=0,s=n.length;i<s;i++)e.call(null,n[i],i,n);else{const r=t?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,n[a],a,n)}}function Ua(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,s;for(;i-- >0;)if(s=t[i],e===s.toLowerCase())return s;return null}const za=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Wa=n=>!Tn(n)&&n!==za;function Bs(){const{caseless:n}=Wa(this)&&this||{},e={},t=(i,s)=>{const r=n&&Ua(e,s)||s;di(e[r])&&di(i)?e[r]=Bs(e[r],i):di(i)?e[r]=Bs({},i):$t(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Xn(arguments[i],t);return e}const Qu=(n,e,t,{allOwnKeys:i}={})=>(Xn(e,(s,r)=>{t&&Se(s)?n[r]=Ma(s,t):n[r]=s},{allOwnKeys:i}),n),Ju=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Zu=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},$u=(n,e,t,i)=>{let s,r,o;const a={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&dr(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},ed=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},td=n=>{if(!n)return null;if($t(n))return n;let e=n.length;if(!Ba(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},nd=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&dr(Uint8Array)),id=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(n,r[0],r[1])}},sd=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},rd=He("HTMLFormElement"),od=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,s){return i.toUpperCase()+s}),bo=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),ad=He("RegExp"),Ha=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Xn(t,(s,r)=>{e(s,r,n)!==!1&&(i[r]=s)}),Object.defineProperties(n,i)},ld=n=>{Ha(n,(e,t)=>{if(Se(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(Se(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},cd=(n,e)=>{const t={},i=s=>{s.forEach(r=>{t[r]=!0})};return $t(n)?i(n):i(String(n).split(e)),t},ud=()=>{},dd=(n,e)=>(n=+n,Number.isFinite(n)?n:e),ys="abcdefghijklmnopqrstuvwxyz",vo="0123456789",ja={DIGIT:vo,ALPHA:ys,ALPHA_DIGIT:ys+ys.toUpperCase()+vo},hd=(n=16,e=ja.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function fd(n){return!!(n&&Se(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const pd=n=>{const e=new Array(10),t=(i,s)=>{if(Gi(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const r=$t(i)?[]:{};return Xn(i,(o,a)=>{const l=t(o,s+1);!Tn(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return t(n,0)},md=He("AsyncFunction"),gd=n=>n&&(Gi(n)||Se(n))&&Se(n.then)&&Se(n.catch),y={isArray:$t,isArrayBuffer:Fa,isBuffer:Bu,isFormData:qu,isArrayBufferView:Uu,isString:zu,isNumber:Ba,isBoolean:Wu,isObject:Gi,isPlainObject:di,isUndefined:Tn,isDate:Hu,isFile:ju,isBlob:Vu,isRegExp:ad,isFunction:Se,isStream:Ku,isURLSearchParams:Gu,isTypedArray:nd,isFileList:Xu,forEach:Xn,merge:Bs,extend:Qu,trim:Yu,stripBOM:Ju,inherits:Zu,toFlatObject:$u,kindOf:Ki,kindOfTest:He,endsWith:ed,toArray:td,forEachEntry:id,matchAll:sd,isHTMLForm:rd,hasOwnProperty:bo,hasOwnProp:bo,reduceDescriptors:Ha,freezeMethods:ld,toObjectSet:cd,toCamelCase:od,noop:ud,toFiniteNumber:dd,findKey:Ua,global:za,isContextDefined:Wa,ALPHABET:ja,generateString:hd,isSpecCompliantForm:fd,toJSONObject:pd,isAsyncFn:md,isThenable:gd};function W(n,e,t,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),s&&(this.response=s)}y.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Va=W.prototype,Xa={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Xa[n]={value:n}});Object.defineProperties(W,Xa);Object.defineProperty(Va,"isAxiosError",{value:!0});W.from=(n,e,t,i,s,r)=>{const o=Object.create(Va);return y.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,n.message,e,t,i,s),o.cause=n,o.name=n.name,r&&Object.assign(o,r),o};const yd=null;function Us(n){return y.isPlainObject(n)||y.isArray(n)}function Ka(n){return y.endsWith(n,"[]")?n.slice(0,-2):n}function wo(n,e,t){return n?n.concat(e).map(function(s,r){return s=Ka(s),!t&&r?"["+s+"]":s}).join(t?".":""):e}function bd(n){return y.isArray(n)&&!n.some(Us)}const vd=y.toFlatObject(y,{},null,function(e){return/^is[A-Z]/.test(e)});function Yi(n,e,t){if(!y.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=y.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,R){return!y.isUndefined(R[w])});const i=t.metaTokens,s=t.visitor||u,r=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(e);if(!y.isFunction(s))throw new TypeError("visitor must be a function");function c(b){if(b===null)return"";if(y.isDate(b))return b.toISOString();if(!l&&y.isBlob(b))throw new W("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(b)||y.isTypedArray(b)?l&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function u(b,w,R){let F=b;if(b&&!R&&typeof b=="object"){if(y.endsWith(w,"{}"))w=i?w:w.slice(0,-2),b=JSON.stringify(b);else if(y.isArray(b)&&bd(b)||(y.isFileList(b)||y.endsWith(w,"[]"))&&(F=y.toArray(b)))return w=Ka(w),F.forEach(function(K,Te){!(y.isUndefined(K)||K===null)&&e.append(o===!0?wo([w],Te,r):o===null?w:w+"[]",c(K))}),!1}return Us(b)?!0:(e.append(wo(R,w,r),c(b)),!1)}const d=[],p=Object.assign(vd,{defaultVisitor:u,convertValue:c,isVisitable:Us});function v(b,w){if(!y.isUndefined(b)){if(d.indexOf(b)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(b),y.forEach(b,function(F,J){(!(y.isUndefined(F)||F===null)&&s.call(e,F,y.isString(J)?J.trim():J,w,p))===!0&&v(F,w?w.concat(J):[J])}),d.pop()}}if(!y.isObject(n))throw new TypeError("data must be an object");return v(n),e}function xo(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function hr(n,e){this._pairs=[],n&&Yi(n,this,e)}const qa=hr.prototype;qa.append=function(e,t){this._pairs.push([e,t])};qa.toString=function(e){const t=e?function(i){return e.call(this,i,xo)}:xo;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function wd(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ga(n,e,t){if(!e)return n;const i=t&&t.encode||wd,s=t&&t.serialize;let r;if(s?r=s(e,t):r=y.isURLSearchParams(e)?e.toString():new hr(e,t).toString(i),r){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+r}return n}class xd{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){y.forEach(this.handlers,function(i){i!==null&&e(i)})}}const _o=xd,Ya={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_d=typeof URLSearchParams<"u"?URLSearchParams:hr,kd=typeof FormData<"u"?FormData:null,Ad=typeof Blob<"u"?Blob:null,Ed=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Cd=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Be={isBrowser:!0,classes:{URLSearchParams:_d,FormData:kd,Blob:Ad},isStandardBrowserEnv:Ed,isStandardBrowserWebWorkerEnv:Cd,protocols:["http","https","file","blob","url","data"]};function Id(n,e){return Yi(n,new Be.classes.URLSearchParams,Object.assign({visitor:function(t,i,s,r){return Be.isNode&&y.isBuffer(t)?(this.append(i,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Sd(n){return y.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Td(n){const e={},t=Object.keys(n);let i;const s=t.length;let r;for(i=0;i<s;i++)r=t[i],e[r]=n[r];return e}function Qa(n){function e(t,i,s,r){let o=t[r++];const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&y.isArray(s)?s.length:o,l?(y.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!y.isObject(s[o]))&&(s[o]=[]),e(t,i,s[o],r)&&y.isArray(s[o])&&(s[o]=Td(s[o])),!a)}if(y.isFormData(n)&&y.isFunction(n.entries)){const t={};return y.forEachEntry(n,(i,s)=>{e(Sd(i),s,t,0)}),t}return null}const Nd={"Content-Type":void 0};function Rd(n,e,t){if(y.isString(n))try{return(e||JSON.parse)(n),y.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Qi={transitional:Ya,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",s=i.indexOf("application/json")>-1,r=y.isObject(e);if(r&&y.isHTMLForm(e)&&(e=new FormData(e)),y.isFormData(e))return s&&s?JSON.stringify(Qa(e)):e;if(y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Id(e,this.formSerializer).toString();if((a=y.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Yi(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(t.setContentType("application/json",!1),Rd(e)):e}],transformResponse:[function(e){const t=this.transitional||Qi.transitional,i=t&&t.forcedJSONParsing,s=this.responseType==="json";if(e&&y.isString(e)&&(i&&!this.responseType||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Be.classes.FormData,Blob:Be.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};y.forEach(["delete","get","head"],function(e){Qi.headers[e]={}});y.forEach(["post","put","patch"],function(e){Qi.headers[e]=y.merge(Nd)});const fr=Qi,Od=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ld=n=>{const e={};let t,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!t||e[t]&&Od[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},ko=Symbol("internals");function yn(n){return n&&String(n).trim().toLowerCase()}function hi(n){return n===!1||n==null?n:y.isArray(n)?n.map(hi):String(n)}function Pd(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const Dd=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function bs(n,e,t,i,s){if(y.isFunction(i))return i.call(this,e,t);if(s&&(e=t),!!y.isString(e)){if(y.isString(i))return e.indexOf(i)!==-1;if(y.isRegExp(i))return i.test(e)}}function Md(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Fd(n,e){const t=y.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}class Ji{constructor(e){e&&this.set(e)}set(e,t,i){const s=this;function r(a,l,c){const u=yn(l);if(!u)throw new Error("header name must be a non-empty string");const d=y.findKey(s,u);(!d||s[d]===void 0||c===!0||c===void 0&&s[d]!==!1)&&(s[d||l]=hi(a))}const o=(a,l)=>y.forEach(a,(c,u)=>r(c,u,l));return y.isPlainObject(e)||e instanceof this.constructor?o(e,t):y.isString(e)&&(e=e.trim())&&!Dd(e)?o(Ld(e),t):e!=null&&r(t,e,i),this}get(e,t){if(e=yn(e),e){const i=y.findKey(this,e);if(i){const s=this[i];if(!t)return s;if(t===!0)return Pd(s);if(y.isFunction(t))return t.call(this,s,i);if(y.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=yn(e),e){const i=y.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||bs(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let s=!1;function r(o){if(o=yn(o),o){const a=y.findKey(i,o);a&&(!t||bs(i,i[a],a,t))&&(delete i[a],s=!0)}}return y.isArray(e)?e.forEach(r):r(e),s}clear(e){const t=Object.keys(this);let i=t.length,s=!1;for(;i--;){const r=t[i];(!e||bs(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const t=this,i={};return y.forEach(this,(s,r)=>{const o=y.findKey(i,r);if(o){t[o]=hi(s),delete t[r];return}const a=e?Md(r):String(r).trim();a!==r&&delete t[r],t[a]=hi(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return y.forEach(this,(i,s)=>{i!=null&&i!==!1&&(t[s]=e&&y.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[ko]=this[ko]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=yn(o);i[a]||(Fd(s,o),i[a]=!0)}return y.isArray(e)?e.forEach(r):r(e),this}}Ji.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.freezeMethods(Ji.prototype);y.freezeMethods(Ji);const Ye=Ji;function vs(n,e){const t=this||fr,i=e||t,s=Ye.from(i.headers);let r=i.data;return y.forEach(n,function(a){r=a.call(t,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Ja(n){return!!(n&&n.__CANCEL__)}function Kn(n,e,t){W.call(this,n??"canceled",W.ERR_CANCELED,e,t),this.name="CanceledError"}y.inherits(Kn,W,{__CANCEL__:!0});function Bd(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new W("Request failed with status code "+t.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const Ud=Be.isStandardBrowserEnv?function(){return{write:function(t,i,s,r,o,a){const l=[];l.push(t+"="+encodeURIComponent(i)),y.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),y.isString(r)&&l.push("path="+r),y.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){const i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function zd(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Wd(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function Za(n,e){return n&&!zd(e)?Wd(n,e):e}const Hd=Be.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function s(r){let o=r;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=s(window.location.href),function(o){const a=y.isString(o)?s(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function jd(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Vd(n,e){n=n||10;const t=new Array(n),i=new Array(n);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),t[s]=l,i[s]=c;let d=r,p=0;for(;d!==s;)p+=t[d++],d=d%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),c-o<e)return;const v=u&&c-u;return v?Math.round(p*1e3/v):void 0}}function Ao(n,e){let t=0;const i=Vd(50,250);return s=>{const r=s.loaded,o=s.lengthComputable?s.total:void 0,a=r-t,l=i(a),c=r<=o;t=r;const u={loaded:r,total:o,progress:o?r/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-r)/l:void 0,event:s};u[e?"download":"upload"]=!0,n(u)}}const Xd=typeof XMLHttpRequest<"u",Kd=Xd&&function(n){return new Promise(function(t,i){let s=n.data;const r=Ye.from(n.headers).normalize(),o=n.responseType;let a;function l(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}y.isFormData(s)&&(Be.isStandardBrowserEnv||Be.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(n.auth){const v=n.auth.username||"",b=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";r.set("Authorization","Basic "+btoa(v+":"+b))}const u=Za(n.baseURL,n.url);c.open(n.method.toUpperCase(),Ga(u,n.params,n.paramsSerializer),!0),c.timeout=n.timeout;function d(){if(!c)return;const v=Ye.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:v,config:n,request:c};Bd(function(F){t(F),l()},function(F){i(F),l()},w),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(i(new W("Request aborted",W.ECONNABORTED,n,c)),c=null)},c.onerror=function(){i(new W("Network Error",W.ERR_NETWORK,n,c)),c=null},c.ontimeout=function(){let b=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const w=n.transitional||Ya;n.timeoutErrorMessage&&(b=n.timeoutErrorMessage),i(new W(b,w.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,n,c)),c=null},Be.isStandardBrowserEnv){const v=(n.withCredentials||Hd(u))&&n.xsrfCookieName&&Ud.read(n.xsrfCookieName);v&&r.set(n.xsrfHeaderName,v)}s===void 0&&r.setContentType(null),"setRequestHeader"in c&&y.forEach(r.toJSON(),function(b,w){c.setRequestHeader(w,b)}),y.isUndefined(n.withCredentials)||(c.withCredentials=!!n.withCredentials),o&&o!=="json"&&(c.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&c.addEventListener("progress",Ao(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ao(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=v=>{c&&(i(!v||v.type?new Kn(null,n,c):v),c.abort(),c=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const p=jd(u);if(p&&Be.protocols.indexOf(p)===-1){i(new W("Unsupported protocol "+p+":",W.ERR_BAD_REQUEST,n));return}c.send(s||null)})},fi={http:yd,xhr:Kd};y.forEach(fi,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const qd={getAdapter:n=>{n=y.isArray(n)?n:[n];const{length:e}=n;let t,i;for(let s=0;s<e&&(t=n[s],!(i=y.isString(t)?fi[t.toLowerCase()]:t));s++);if(!i)throw i===!1?new W(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(y.hasOwnProp(fi,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!y.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:fi};function ws(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Kn(null,n)}function Eo(n){return ws(n),n.headers=Ye.from(n.headers),n.data=vs.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),qd.getAdapter(n.adapter||fr.adapter)(n).then(function(i){return ws(n),i.data=vs.call(n,n.transformResponse,i),i.headers=Ye.from(i.headers),i},function(i){return Ja(i)||(ws(n),i&&i.response&&(i.response.data=vs.call(n,n.transformResponse,i.response),i.response.headers=Ye.from(i.response.headers))),Promise.reject(i)})}const Co=n=>n instanceof Ye?n.toJSON():n;function qt(n,e){e=e||{};const t={};function i(c,u,d){return y.isPlainObject(c)&&y.isPlainObject(u)?y.merge.call({caseless:d},c,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function s(c,u,d){if(y.isUndefined(u)){if(!y.isUndefined(c))return i(void 0,c,d)}else return i(c,u,d)}function r(c,u){if(!y.isUndefined(u))return i(void 0,u)}function o(c,u){if(y.isUndefined(u)){if(!y.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in e)return i(c,u);if(d in n)return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>s(Co(c),Co(u),!0)};return y.forEach(Object.keys(Object.assign({},n,e)),function(u){const d=l[u]||s,p=d(n[u],e[u],u);y.isUndefined(p)&&d!==a||(t[u]=p)}),t}const $a="1.4.0",pr={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{pr[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Io={};pr.transitional=function(e,t,i){function s(r,o){return"[Axios v"+$a+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new W(s(o," has been removed"+(t?" in "+t:"")),W.ERR_DEPRECATED);return t&&!Io[o]&&(Io[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};function Gd(n,e,t){if(typeof n!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new W("option "+r+" must be "+l,W.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new W("Unknown option "+r,W.ERR_BAD_OPTION)}}const zs={assertOptions:Gd,validators:pr},nt=zs.validators;class vi{constructor(e){this.defaults=e,this.interceptors={request:new _o,response:new _o}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=qt(this.defaults,t);const{transitional:i,paramsSerializer:s,headers:r}=t;i!==void 0&&zs.assertOptions(i,{silentJSONParsing:nt.transitional(nt.boolean),forcedJSONParsing:nt.transitional(nt.boolean),clarifyTimeoutError:nt.transitional(nt.boolean)},!1),s!=null&&(y.isFunction(s)?t.paramsSerializer={serialize:s}:zs.assertOptions(s,{encode:nt.function,serialize:nt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o;o=r&&y.merge(r.common,r[t.method]),o&&y.forEach(["delete","get","head","post","put","patch","common"],b=>{delete r[b]}),t.headers=Ye.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(t)===!1||(l=l&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let u,d=0,p;if(!l){const b=[Eo.bind(this),void 0];for(b.unshift.apply(b,a),b.push.apply(b,c),p=b.length,u=Promise.resolve(t);d<p;)u=u.then(b[d++],b[d++]);return u}p=a.length;let v=t;for(d=0;d<p;){const b=a[d++],w=a[d++];try{v=b(v)}catch(R){w.call(this,R);break}}try{u=Eo.call(this,v)}catch(b){return Promise.reject(b)}for(d=0,p=c.length;d<p;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=qt(this.defaults,e);const t=Za(e.baseURL,e.url);return Ga(t,e.params,e.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(e){vi.prototype[e]=function(t,i){return this.request(qt(i||{},{method:e,url:t,data:(i||{}).data}))}});y.forEach(["post","put","patch"],function(e){function t(i){return function(r,o,a){return this.request(qt(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}vi.prototype[e]=t(),vi.prototype[e+"Form"]=t(!0)});const pi=vi;class mr{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Kn(r,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new mr(function(s){e=s}),cancel:e}}}const Yd=mr;function Qd(n){return function(t){return n.apply(null,t)}}function Jd(n){return y.isObject(n)&&n.isAxiosError===!0}const Ws={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ws).forEach(([n,e])=>{Ws[e]=n});const Zd=Ws;function el(n){const e=new pi(n),t=Ma(pi.prototype.request,e);return y.extend(t,pi.prototype,e,{allOwnKeys:!0}),y.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return el(qt(n,s))},t}const ae=el(fr);ae.Axios=pi;ae.CanceledError=Kn;ae.CancelToken=Yd;ae.isCancel=Ja;ae.VERSION=$a;ae.toFormData=Yi;ae.AxiosError=W;ae.Cancel=ae.CanceledError;ae.all=function(e){return Promise.all(e)};ae.spread=Qd;ae.isAxiosError=Jd;ae.mergeConfig=qt;ae.AxiosHeaders=Ye;ae.formToJSON=n=>Qa(y.isHTMLForm(n)?new FormData(n):n);ae.HttpStatusCode=Zd;ae.default=ae;const tl=ae;var nl={exports:{}};(function(n){(function(e,t){n.exports=t(e)})(typeof zt<"u"?zt:typeof window<"u"?window:zt,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var t="Notiflix",i=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,s='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',r={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},o,a={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},l=function(g){return console.error("%c "+t+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+g+i)},c=function(g){return g||(g="head"),e.document[g]===null?(l(`
Notiflix needs to be appended to the "<`+g+'>" element, but you called it before the "<'+g+'>" element has been created.'),!1):!0},u=function(g,k){if(!c("head"))return!1;if(g()!==null&&!e.document.getElementById(k)){var P=e.document.createElement("style");P.id=k,P.innerHTML=g(),e.document.head.appendChild(P)}},d=function(){var g={},k=!1,P=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(k=arguments[0],P++);for(var ve=function(je){for(var Ae in je)Object.prototype.hasOwnProperty.call(je,Ae)&&(k&&Object.prototype.toString.call(je[Ae])==="[object Object]"?g[Ae]=d(g[Ae],je[Ae]):g[Ae]=je[Ae])};P<arguments.length;P++)ve(arguments[P]);return g},p=function(g){var k=e.document.createElement("div");return k.innerHTML=g,k.textContent||k.innerText||""},v=function(g,k){g||(g="60px"),k||(k="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+k+'" width="'+g+'" height="'+g+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return P},b=function(g,k){g||(g="60px"),k||(k="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+k+'" width="'+g+'" height="'+g+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return P},w=function(g,k){g||(g="60px"),k||(k="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" width="'+g+'" height="'+g+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+g+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+g+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+k+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return P},R=function(g,k){g||(g="60px"),k||(k="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" fill="'+k+'" width="'+g+'" height="'+g+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return P},F=function(g,k){g||(g="60px"),k||(k="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" fill="'+k+'" width="'+g+'" height="'+g+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return P},J=function(g,k){g||(g="60px"),k||(k="#32c682");var P='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+k+'" width="'+g+'" height="'+g+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return P},K=function(g,k,P){g||(g="60px"),k||(k="#f8f8f8"),P||(P="#32c682");var ve='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+g+'" height="'+g+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+k+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+P+'" stroke="'+P+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return ve},Te=function(){var g='[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';return g||null},ie=function(g,k,P,ve,je){if(!c("body"))return!1;o||B.Loading.init({});var Ae=d(!0,o,{});if(typeof k=="object"&&!Array.isArray(k)||typeof P=="object"&&!Array.isArray(P)){var Pt={};typeof k=="object"?Pt=k:typeof P=="object"&&(Pt=P),o=d(!0,o,Pt)}var Ee="";if(typeof k=="string"&&k.length>0&&(Ee=k),ve){Ee.length>o.messageMaxLength?Ee=p(Ee).toString().substring(0,o.messageMaxLength)+"...":Ee=p(Ee).toString();var fn="";Ee.length>0&&(fn='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+Ee+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var ke="";if(g===r.Standard)ke=v(o.svgSize,o.svgColor);else if(g===r.Hourglass)ke=b(o.svgSize,o.svgColor);else if(g===r.Circle)ke=w(o.svgSize,o.svgColor);else if(g===r.Arrows)ke=R(o.svgSize,o.svgColor);else if(g===r.Dots)ke=F(o.svgSize,o.svgColor);else if(g===r.Pulse)ke=J(o.svgSize,o.svgColor);else if(g===r.Custom&&o.customSvgCode!==null&&o.customSvgUrl===null)ke=o.customSvgCode||"";else if(g===r.Custom&&o.customSvgUrl!==null&&o.customSvgCode===null)ke='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(g===r.Custom&&(o.customSvgUrl===null||o.customSvgCode===null))return l('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;ke=K(o.svgSize,"#f8f8f8","#32c682")}var pn=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),ri=e.innerWidth,oi=pn>=ri?ri-40+"px":pn+"px",Dt='<div style="width:'+oi+"; height:"+oi+';" class="'+o.className+"-icon"+(Ee.length>0?" nx-with-message":"")+'">'+ke+"</div>",G=e.document.createElement("div");if(G.id=a.ID,G.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),G.style.zIndex=o.zindex,G.style.background=o.backgroundColor,G.style.animationDuration=o.cssAnimationDuration+"ms",G.style.fontFamily='"'+o.fontFamily+'", '+s,G.style.display="flex",G.style.flexWrap="wrap",G.style.flexDirection="column",G.style.alignItems="center",G.style.justifyContent="center",o.rtl&&(G.setAttribute("dir","rtl"),G.classList.add("nx-rtl-on")),G.innerHTML=Dt+fn,!e.document.getElementById(G.id)&&(e.document.body.appendChild(G),o.clickToClose)){var fs=e.document.getElementById(G.id);fs.addEventListener("click",function(){G.classList.add("nx-remove");var yt=setTimeout(function(){G.parentNode!==null&&(G.parentNode.removeChild(G),clearTimeout(yt))},o.cssAnimationDuration)})}}else if(e.document.getElementById(a.ID))var Ve=e.document.getElementById(a.ID),ps=setTimeout(function(){Ve.classList.add("nx-remove");var yt=setTimeout(function(){Ve.parentNode!==null&&(Ve.parentNode.removeChild(Ve),clearTimeout(yt))},o.cssAnimationDuration);clearTimeout(ps)},je);o=d(!0,o,Ae)},Ne=function(g){typeof g!="string"&&(g="");var k=e.document.getElementById(a.ID);if(k)if(g.length>0){g.length>o.messageMaxLength?g=p(g).substring(0,o.messageMaxLength)+"...":g=p(g);var P=k.getElementsByTagName("p")[0];if(P)P.innerHTML=g;else{var ve=e.document.createElement("p");ve.id=o.messageID,ve.className="nx-loading-message nx-loading-message-new",ve.style.color=o.messageColor,ve.style.fontSize=o.messageFontSize,ve.innerHTML=g,k.appendChild(ve)}}else l("Where is the new message?")},B={Loading:{init:function(g){o=d(!0,a,g),u(Te,"NotiflixLoadingInternalCSS")},merge:function(g){if(o)o=d(!0,o,g);else return l("You have to initialize the Loading module before call Merge function."),!1},standard:function(g,k){ie(r.Standard,g,k,!0,0)},hourglass:function(g,k){ie(r.Hourglass,g,k,!0,0)},circle:function(g,k){ie(r.Circle,g,k,!0,0)},arrows:function(g,k){ie(r.Arrows,g,k,!0,0)},dots:function(g,k){ie(r.Dots,g,k,!0,0)},pulse:function(g,k){ie(r.Pulse,g,k,!0,0)},custom:function(g,k){ie(r.Custom,g,k,!0,0)},notiflix:function(g,k){ie(r.Notiflix,g,k,!0,0)},remove:function(g){typeof g!="number"&&(g=0),ie(null,null,null,!1,g)},change:function(g){Ne(g)}}};return typeof e.Notiflix=="object"?d(!0,e.Notiflix,{Loading:B.Loading}):{Loading:B.Loading}})})(nl);var Kb=nl.exports,il={exports:{}};(function(n){(function(e,t){n.exports=t(e)})(typeof zt>"u"?typeof window>"u"?zt:window:zt,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var t,i,s,r,o,a=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,l='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},u={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},p={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v={Show:"Show",Ask:"Ask",Prompt:"Prompt"},b={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},w={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},R={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},F={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},J={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},K=function(h){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+h+a)},Te=function(h){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+h+a)},ie=function(h){return h||(h="head"),e.document[h]!==null||(K(`
Notiflix needs to be appended to the "<`+h+'>" element, but you called it before the "<'+h+'>" element has been created.'),!1)},Ne=function(h,f){if(!ie("head"))return!1;if(h()!==null&&!e.document.getElementById(f)){var m=e.document.createElement("style");m.id=f,m.innerHTML=h(),e.document.head.appendChild(m)}},B=function(){var h={},f=!1,m=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(f=arguments[0],m++);for(var A=function(I){for(var O in I)Object.prototype.hasOwnProperty.call(I,O)&&(h[O]=f&&Object.prototype.toString.call(I[O])==="[object Object]"?B(h[O],I[O]):I[O])};m<arguments.length;m++)A(arguments[m]);return h},g=function(h){var f=e.document.createElement("div");return f.innerHTML=h,f.textContent||f.innerText||""},k=function(h,f){h||(h="110px"),f||(f="#32c682");var m='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+h+'" height="'+h+'" fill="'+f+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return m},P=function(h,f){h||(h="110px"),f||(f="#ff5549");var m='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+h+'" height="'+h+'" fill="'+f+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return m},ve=function(h,f){h||(h="110px"),f||(f="#eebf31");var m='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+h+'" height="'+h+'" fill="'+f+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return m},je=function(h,f){h||(h="110px"),f||(f="#26c0d3");var m='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+h+'" height="'+h+'" fill="'+f+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return m},Ae=function(h,f){h||(h="60px"),f||(f="#32c682");var m='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+f+'" width="'+h+'" height="'+h+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return m},Pt=function(h,f){h||(h="60px"),f||(f="#32c682");var m='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+f+'" width="'+h+'" height="'+h+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return m},Ee=function(h,f){h||(h="60px"),f||(f="#32c682");var m='<svg xmlns="http://www.w3.org/2000/svg" width="'+h+'" height="'+h+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+h+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+h+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+f+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return m},fn=function(h,f){h||(h="60px"),f||(f="#32c682");var m='<svg xmlns="http://www.w3.org/2000/svg" fill="'+f+'" width="'+h+'" height="'+h+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return m},ke=function(h,f){h||(h="60px"),f||(f="#32c682");var m='<svg xmlns="http://www.w3.org/2000/svg" fill="'+f+'" width="'+h+'" height="'+h+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return m},pn=function(h,f){h||(h="60px"),f||(f="#32c682");var m='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+f+'" width="'+h+'" height="'+h+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return m},ri=function(h,f,m){h||(h="60px"),f||(f="#f8f8f8"),m||(m="#32c682");var A='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+h+'" height="'+h+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+f+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+m+'" stroke="'+m+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return A},oi=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Dt=0,G=function(h,f,m,A){if(!ie("body"))return!1;t||pe.Notify.init({});var I=B(!0,t,{});if(typeof m=="object"&&!Array.isArray(m)||typeof A=="object"&&!Array.isArray(A)){var O={};typeof m=="object"?O=m:typeof A=="object"&&(O=A),t=B(!0,t,O)}var T=t[h.toLocaleLowerCase("en")];Dt++,typeof f!="string"&&(f="Notiflix "+h),t.plainText&&(f=g(f)),!t.plainText&&f.length>t.messageMaxLength&&(t=B(!0,t,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>t.messageMaxLength&&(f=f.substring(0,t.messageMaxLength)+"..."),t.fontAwesomeIconStyle==="shadow"&&(T.fontAwesomeIconColor=T.background),t.cssAnimation||(t.cssAnimationDuration=0);var _=e.document.getElementById(u.wrapID)||e.document.createElement("div");if(_.id=u.wrapID,_.style.width=t.width,_.style.zIndex=t.zindex,_.style.opacity=t.opacity,t.position==="center-center"?(_.style.left=t.distance,_.style.top=t.distance,_.style.right=t.distance,_.style.bottom=t.distance,_.style.margin="auto",_.classList.add("nx-flex-center-center"),_.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",_.style.display="flex",_.style.flexWrap="wrap",_.style.flexDirection="column",_.style.justifyContent="center",_.style.alignItems="center",_.style.pointerEvents="none"):t.position==="center-top"?(_.style.left=t.distance,_.style.right=t.distance,_.style.top=t.distance,_.style.bottom="auto",_.style.margin="auto"):t.position==="center-bottom"?(_.style.left=t.distance,_.style.right=t.distance,_.style.bottom=t.distance,_.style.top="auto",_.style.margin="auto"):t.position==="right-bottom"?(_.style.right=t.distance,_.style.bottom=t.distance,_.style.top="auto",_.style.left="auto"):t.position==="left-top"?(_.style.left=t.distance,_.style.top=t.distance,_.style.right="auto",_.style.bottom="auto"):t.position==="left-bottom"?(_.style.left=t.distance,_.style.bottom=t.distance,_.style.top="auto",_.style.right="auto"):(_.style.right=t.distance,_.style.top=t.distance,_.style.left="auto",_.style.bottom="auto"),t.backOverlay){var U=e.document.getElementById(u.overlayID)||e.document.createElement("div");U.id=u.overlayID,U.style.width="100%",U.style.height="100%",U.style.position="fixed",U.style.zIndex=t.zindex-1,U.style.left=0,U.style.top=0,U.style.right=0,U.style.bottom=0,U.style.background=T.backOverlayColor||t.backOverlayColor,U.className=t.cssAnimation?"nx-with-animation":"",U.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(u.overlayID)||e.document.body.appendChild(U)}e.document.getElementById(u.wrapID)||e.document.body.appendChild(_);var E=e.document.createElement("div");E.id=t.ID+"-"+Dt,E.className=t.className+" "+T.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&typeof m!="function"?"nx-with-close-button":"")+" "+(typeof m=="function"?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),E.style.fontSize=t.fontSize,E.style.color=T.textColor,E.style.background=T.background,E.style.borderRadius=t.borderRadius,E.style.pointerEvents="all",t.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.style.fontFamily='"'+t.fontFamily+'", '+l,t.cssAnimation&&(E.style.animationDuration=t.cssAnimationDuration+"ms");var V="";if(t.closeButton&&typeof m!="function"&&(V='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+T.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!t.useIcon)E.innerHTML='<span class="nx-message">'+f+"</span>"+(t.closeButton?V:"");else if(t.useFontAwesome)E.innerHTML='<i style="color:'+T.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+T.fontAwesomeClassName+" "+(t.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(t.closeButton?V:"");else{var te="";h===c.Success?te='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+T.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':h===c.Failure?te='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+T.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':h===c.Warning?te='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+T.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':h===c.Info&&(te='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+T.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),E.innerHTML=te+'<span class="nx-message nx-with-icon">'+f+"</span>"+(t.closeButton?V:"")}if(t.position==="left-bottom"||t.position==="right-bottom"){var se=e.document.getElementById(u.wrapID);se.insertBefore(E,se.firstChild)}else e.document.getElementById(u.wrapID).appendChild(E);var $=e.document.getElementById(E.id);if($){var z,ne,H=function(){$.classList.add("nx-remove");var N=e.document.getElementById(u.overlayID);N&&0>=_.childElementCount&&N.classList.add("nx-remove"),clearTimeout(z)},Re=function(){if($&&$.parentNode!==null&&$.parentNode.removeChild($),0>=_.childElementCount&&_.parentNode!==null){_.parentNode.removeChild(_);var N=e.document.getElementById(u.overlayID);N&&N.parentNode!==null&&N.parentNode.removeChild(N)}clearTimeout(ne)};if(t.closeButton&&typeof m!="function"){var Oe=e.document.getElementById(E.id).querySelector("span.nx-close-button");Oe.addEventListener("click",function(){H();var N=setTimeout(function(){Re(),clearTimeout(N)},t.cssAnimationDuration)})}if((typeof m=="function"||t.clickToClose)&&$.addEventListener("click",function(){typeof m=="function"&&m(),H();var N=setTimeout(function(){Re(),clearTimeout(N)},t.cssAnimationDuration)}),!t.closeButton&&typeof m!="function"){var me=function(){z=setTimeout(function(){H()},t.timeout),ne=setTimeout(function(){Re()},t.timeout+t.cssAnimationDuration)};me(),t.pauseOnHover&&($.addEventListener("mouseenter",function(){$.classList.add("nx-paused"),clearTimeout(z),clearTimeout(ne)}),$.addEventListener("mouseleave",function(){$.classList.remove("nx-paused"),me()}))}}if(t.showOnlyTheLastOne&&0<Dt)for(var ge,Z=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Dt+"])"),tt=0;tt<Z.length;tt++)ge=Z[tt],ge.parentNode!==null&&ge.parentNode.removeChild(ge);t=B(!0,t,I)},fs=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},Ve=function(h,f,m,A,I,O){if(!ie("body"))return!1;i||pe.Report.init({});var T={};if(typeof I=="object"&&!Array.isArray(I)||typeof O=="object"&&!Array.isArray(O)){var _={};typeof I=="object"?_=I:typeof O=="object"&&(_=O),T=B(!0,i,{}),i=B(!0,i,_)}var U=i[h.toLocaleLowerCase("en")];typeof f!="string"&&(f="Notiflix "+h),typeof m!="string"&&(h===d.Success?m='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':h===d.Failure?m='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':h===d.Warning?m='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':h===d.Info&&(m='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof A!="string"&&(A="Okay"),i.plainText&&(f=g(f),m=g(m),A=g(A)),i.plainText||(f.length>i.titleMaxLength&&(f="Possible HTML Tags Error",m='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',A="Okay"),m.length>i.messageMaxLength&&(f="Possible HTML Tags Error",m='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',A="Okay"),A.length>i.buttonMaxLength&&(f="Possible HTML Tags Error",m='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',A="Okay")),f.length>i.titleMaxLength&&(f=f.substring(0,i.titleMaxLength)+"..."),m.length>i.messageMaxLength&&(m=m.substring(0,i.messageMaxLength)+"..."),A.length>i.buttonMaxLength&&(A=A.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var E=e.document.createElement("div");E.id=p.ID,E.className=i.className,E.style.zIndex=i.zindex,E.style.borderRadius=i.borderRadius,E.style.fontFamily='"'+i.fontFamily+'", '+l,i.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center";var V="",te=i.backOverlayClickToClose===!0;i.backOverlay&&(V='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(te?" nx-report-click-to-close":"")+'" style="background:'+(U.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var se="";if(h===d.Success?se=k(i.svgSize,U.svgColor):h===d.Failure?se=P(i.svgSize,U.svgColor):h===d.Warning?se=ve(i.svgSize,U.svgColor):h===d.Info&&(se=je(i.svgSize,U.svgColor)),E.innerHTML=V+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+se+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+U.titleColor+';">'+f+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+U.messageColor+';">'+m+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+U.buttonBackground+"; color:"+U.buttonColor+';">'+A+"</a></div>",!e.document.getElementById(E.id)){e.document.body.appendChild(E);var $=function(){var H=e.document.getElementById(E.id);H.classList.add("nx-remove");var Re=setTimeout(function(){H.parentNode!==null&&H.parentNode.removeChild(H),clearTimeout(Re)},i.cssAnimationDuration)},z=e.document.getElementById("NXReportButton");if(z.addEventListener("click",function(){typeof I=="function"&&I(),$()}),V&&te){var ne=e.document.querySelector(".nx-report-click-to-close");ne.addEventListener("click",function(){$()})}}i=B(!0,i,T)},ps=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},yt=function(h,f,m,A,I,O,T,_,U){if(!ie("body"))return!1;s||pe.Confirm.init({});var E=B(!0,s,{});typeof U!="object"||Array.isArray(U)||(s=B(!0,s,U)),typeof f!="string"&&(f="Notiflix Confirm"),typeof m!="string"&&(m="Do you agree with me?"),typeof I!="string"&&(I="Yes"),typeof O!="string"&&(O="No"),typeof T!="function"&&(T=void 0),typeof _!="function"&&(_=void 0),s.plainText&&(f=g(f),m=g(m),I=g(I),O=g(O)),s.plainText||(f.length>s.titleMaxLength&&(f="Possible HTML Tags Error",m='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',I="Okay",O="..."),m.length>s.messageMaxLength&&(f="Possible HTML Tags Error",m='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',I="Okay",O="..."),(I.length||O.length)>s.buttonsMaxLength&&(f="Possible HTML Tags Error",m='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',I="Okay",O="...")),f.length>s.titleMaxLength&&(f=f.substring(0,s.titleMaxLength)+"..."),m.length>s.messageMaxLength&&(m=m.substring(0,s.messageMaxLength)+"..."),I.length>s.buttonsMaxLength&&(I=I.substring(0,s.buttonsMaxLength)+"..."),O.length>s.buttonsMaxLength&&(O=O.substring(0,s.buttonsMaxLength)+"..."),s.cssAnimation||(s.cssAnimationDuration=0);var V=e.document.createElement("div");V.id=b.ID,V.className=s.className+(s.cssAnimation?" nx-with-animation nx-"+s.cssAnimationStyle:""),V.style.zIndex=s.zindex,V.style.padding=s.distance,s.rtl&&(V.setAttribute("dir","rtl"),V.classList.add("nx-rtl-on"));var te=typeof s.position=="string"?s.position.trim():"center";V.classList.add("nx-position-"+te),V.style.fontFamily='"'+s.fontFamily+'", '+l;var se="";s.backOverlay&&(se='<div class="'+s.className+"-overlay"+(s.cssAnimation?" nx-with-animation":"")+'" style="background:'+s.backOverlayColor+";animation-duration:"+s.cssAnimationDuration+'ms;"></div>');var $="";typeof T=="function"&&($='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+s.cancelButtonColor+";background:"+s.cancelButtonBackground+";font-size:"+s.buttonsFontSize+';">'+O+"</a>");var z="",ne=null,H=void 0;if(h===v.Ask||h===v.Prompt){ne=A||"";var Re=h===v.Ask||200<ne.length?Math.ceil(1.5*ne.length):250,Oe=h===v.Prompt?'value="'+ne+'"':"";z='<div><input id="NXConfirmValidationInput" type="text" '+Oe+' maxlength="'+Re+'" style="font-size:'+s.messageFontSize+";border-radius: "+s.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(V.innerHTML=se+'<div class="'+s.className+'-content" style="width:'+s.width+"; background:"+s.backgroundColor+"; animation-duration:"+s.cssAnimationDuration+"ms; border-radius: "+s.borderRadius+';"><div class="'+s.className+'-head"><h5 style="color:'+s.titleColor+";font-size:"+s.titleFontSize+';">'+f+'</h5><div style="color:'+s.messageColor+";font-size:"+s.messageFontSize+';">'+m+z+'</div></div><div class="'+s.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof T=="function"?"":" nx-full")+'" style="color:'+s.okButtonColor+";background:"+s.okButtonBackground+";font-size:"+s.buttonsFontSize+';">'+I+"</a>"+$+"</div></div>",!e.document.getElementById(V.id)){e.document.body.appendChild(V);var me=e.document.getElementById(V.id),ge=e.document.getElementById("NXConfirmButtonOk"),Z=e.document.getElementById("NXConfirmValidationInput");if(Z&&(Z.focus(),Z.setSelectionRange(0,(Z.value||"").length),Z.addEventListener("keyup",function(N){var Mt=N.target.value;if(h===v.Ask&&Mt!==ne)N.preventDefault(),Z.classList.add("nx-validation-failure"),Z.classList.remove("nx-validation-success");else{h===v.Ask&&(Z.classList.remove("nx-validation-failure"),Z.classList.add("nx-validation-success"));var mn=(N.key||"").toLocaleLowerCase("en")==="enter"||N.keyCode===13;mn&&ge.dispatchEvent(new Event("click"))}})),ge.addEventListener("click",function(N){if(h===v.Ask&&ne&&Z){var Mt=(Z.value||"").toString();if(Mt!==ne)return Z.focus(),Z.classList.add("nx-validation-failure"),N.stopPropagation(),N.preventDefault(),N.returnValue=!1,N.cancelBubble=!0,!1;Z.classList.remove("nx-validation-failure")}typeof T=="function"&&(h===v.Prompt&&Z&&(H=Z.value||""),T(H)),me.classList.add("nx-remove");var mn=setTimeout(function(){me.parentNode!==null&&(me.parentNode.removeChild(me),clearTimeout(mn))},s.cssAnimationDuration)}),typeof T=="function"){var tt=e.document.getElementById("NXConfirmButtonCancel");tt.addEventListener("click",function(){typeof _=="function"&&(h===v.Prompt&&Z&&(H=Z.value||""),_(H)),me.classList.add("nx-remove");var N=setTimeout(function(){me.parentNode!==null&&(me.parentNode.removeChild(me),clearTimeout(N))},s.cssAnimationDuration)})}}s=B(!0,s,E)},Cu=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},Xe=function(h,f,m,A,I){if(!ie("body"))return!1;r||pe.Loading.init({});var O=B(!0,r,{});if(typeof f=="object"&&!Array.isArray(f)||typeof m=="object"&&!Array.isArray(m)){var T={};typeof f=="object"?T=f:typeof m=="object"&&(T=m),r=B(!0,r,T)}var _="";if(typeof f=="string"&&0<f.length&&(_=f),A){_=_.length>r.messageMaxLength?g(_).toString().substring(0,r.messageMaxLength)+"...":g(_).toString();var U="";0<_.length&&(U='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+_+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var E="";if(h===w.Standard)E=Ae(r.svgSize,r.svgColor);else if(h===w.Hourglass)E=Pt(r.svgSize,r.svgColor);else if(h===w.Circle)E=Ee(r.svgSize,r.svgColor);else if(h===w.Arrows)E=fn(r.svgSize,r.svgColor);else if(h===w.Dots)E=ke(r.svgSize,r.svgColor);else if(h===w.Pulse)E=pn(r.svgSize,r.svgColor);else if(h===w.Custom&&r.customSvgCode!==null&&r.customSvgUrl===null)E=r.customSvgCode||"";else if(h===w.Custom&&r.customSvgUrl!==null&&r.customSvgCode===null)E='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(h===w.Custom&&(r.customSvgUrl===null||r.customSvgCode===null))return K('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;E=ri(r.svgSize,"#f8f8f8","#32c682")}var V=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),te=e.innerWidth,se=V>=te?te-40+"px":V+"px",$='<div style="width:'+se+"; height:"+se+';" class="'+r.className+"-icon"+(0<_.length?" nx-with-message":"")+'">'+E+"</div>",z=e.document.createElement("div");if(z.id=R.ID,z.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),z.style.zIndex=r.zindex,z.style.background=r.backgroundColor,z.style.animationDuration=r.cssAnimationDuration+"ms",z.style.fontFamily='"'+r.fontFamily+'", '+l,z.style.display="flex",z.style.flexWrap="wrap",z.style.flexDirection="column",z.style.alignItems="center",z.style.justifyContent="center",r.rtl&&(z.setAttribute("dir","rtl"),z.classList.add("nx-rtl-on")),z.innerHTML=$+U,!e.document.getElementById(z.id)&&(e.document.body.appendChild(z),r.clickToClose)){var ne=e.document.getElementById(z.id);ne.addEventListener("click",function(){z.classList.add("nx-remove");var Oe=setTimeout(function(){z.parentNode!==null&&(z.parentNode.removeChild(z),clearTimeout(Oe))},r.cssAnimationDuration)})}}else if(e.document.getElementById(R.ID))var H=e.document.getElementById(R.ID),Re=setTimeout(function(){H.classList.add("nx-remove");var Oe=setTimeout(function(){H.parentNode!==null&&(H.parentNode.removeChild(H),clearTimeout(Oe))},r.cssAnimationDuration);clearTimeout(Re)},I);r=B(!0,r,O)},Iu=function(h){typeof h!="string"&&(h="");var f=e.document.getElementById(R.ID);if(f)if(0<h.length){h=h.length>r.messageMaxLength?g(h).substring(0,r.messageMaxLength)+"...":g(h);var m=f.getElementsByTagName("p")[0];if(m)m.innerHTML=h;else{var A=e.document.createElement("p");A.id=r.messageID,A.className="nx-loading-message nx-loading-message-new",A.style.color=r.messageColor,A.style.fontSize=r.messageFontSize,A.innerHTML=h,f.appendChild(A)}}else K("Where is the new message?")},Su=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ms=0,bt=function(h,f,m,A,I,O){var T;if(Array.isArray(m)){if(1>m.length)return K("Array of HTMLElements should contains at least one HTMLElement."),!1;T=m}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,m)){if(1>m.length)return K("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;T=Array.prototype.slice.call(m)}else{var _=typeof m!="string"||1>(m||"").length||(m||"").length===1&&((m||"")[0]==="#"||(m||"")[0]===".");if(_)return K("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var U=e.document.querySelectorAll(m);if(1>U.length)return K('You called the "Notiflix.Block..." function with "'+m+'" selector, but there is no such element(s) in the document.'),!1;T=U}o||pe.Block.init({});var E=B(!0,o,{});if(typeof A=="object"&&!Array.isArray(A)||typeof I=="object"&&!Array.isArray(I)){var V={};typeof A=="object"?V=A:typeof I=="object"&&(V=I),o=B(!0,o,V)}var te="";typeof A=="string"&&0<A.length&&(te=A),o.cssAnimation||(o.cssAnimationDuration=0);var se=J.className;typeof o.className=="string"&&(se=o.className.trim());var $=typeof o.querySelectorLimit=="number"?o.querySelectorLimit:200,z=(T||[]).length>=$?$:T.length,ne="nx-block-temporary-position";if(h){for(var H,Re=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],Oe=0;Oe<z;Oe++)if(H=T[Oe],H){if(-1<Re.indexOf(H.tagName.toLocaleLowerCase("en")))break;var me=H.querySelectorAll("[id^="+J.ID+"]");if(1>me.length){var ge="";f&&(f===F.Hourglass?ge=Pt(o.svgSize,o.svgColor):f===F.Circle?ge=Ee(o.svgSize,o.svgColor):f===F.Arrows?ge=fn(o.svgSize,o.svgColor):f===F.Dots?ge=ke(o.svgSize,o.svgColor):f===F.Pulse?ge=pn(o.svgSize,o.svgColor):ge=Ae(o.svgSize,o.svgColor));var Z='<span class="'+se+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+ge+"</span>",tt="";0<te.length&&(te=te.length>o.messageMaxLength?g(te).substring(0,o.messageMaxLength)+"...":g(te),tt='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+se+'-message">'+te+"</span>"),ms++;var N=e.document.createElement("div");N.id=J.ID+"-"+ms,N.className=se+(o.cssAnimation?" nx-with-animation":""),N.style.position=o.position,N.style.zIndex=o.zindex,N.style.background=o.backgroundColor,N.style.animationDuration=o.cssAnimationDuration+"ms",N.style.fontFamily='"'+o.fontFamily+'", '+l,N.style.display="flex",N.style.flexWrap="wrap",N.style.flexDirection="column",N.style.alignItems="center",N.style.justifyContent="center",o.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),N.innerHTML=Z+tt;var Mt=e.getComputedStyle(H).getPropertyValue("position"),mn=typeof Mt=="string"?Mt.toLocaleLowerCase("en"):"relative",fo=Math.round(1.25*parseInt(o.svgSize))+40,Tu=H.offsetHeight||0,gs="";fo>Tu&&(gs="min-height:"+fo+"px;");var po="";po=H.getAttribute("id")?"#"+H.getAttribute("id"):H.classList[0]?"."+H.classList[0]:(H.tagName||"").toLocaleLowerCase("en");var mo="",go=-1>=["absolute","relative","fixed","sticky"].indexOf(mn);if(go||0<gs.length){if(!ie("head"))return!1;go&&(mo="position:relative!important;");var Nu='<style id="Style-'+J.ID+"-"+ms+'">'+po+"."+ne+"{"+mo+gs+"}</style>",yo=e.document.createRange();yo.selectNode(e.document.head);var Ru=yo.createContextualFragment(Nu);e.document.head.appendChild(Ru),H.classList.add(ne)}H.appendChild(N)}}}else var Ou=function(de){var Ce=setTimeout(function(){de.parentNode!==null&&de.parentNode.removeChild(de);var gn=de.getAttribute("id"),ai=e.document.getElementById("Style-"+gn);ai&&ai.parentNode!==null&&ai.parentNode.removeChild(ai),clearTimeout(Ce)},o.cssAnimationDuration)},Lu=function(de){if(de&&0<de.length)for(var Ce,gn=0;gn<de.length;gn++)Ce=de[gn],Ce&&(Ce.classList.add("nx-remove"),Ou(Ce));else Te(typeof m=="string"?'"Notiflix.Block.remove();" function called with "'+m+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+m+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},Pu=function(de){var Ce=setTimeout(function(){de.classList.remove(ne),clearTimeout(Ce)},o.cssAnimationDuration+300)},Du=setTimeout(function(){for(var de,Ce=0;Ce<z;Ce++)de=T[Ce],de&&(Pu(de),me=de.querySelectorAll("[id^="+J.ID+"]"),Lu(me));clearTimeout(Du)},O);o=B(!0,o,E)},pe={Notify:{init:function(h){t=B(!0,u,h),Ne(oi,"NotiflixNotifyInternalCSS")},merge:function(h){return t?void(t=B(!0,t,h)):(K("You have to initialize the Notify module before call Merge function."),!1)},success:function(h,f,m){G(c.Success,h,f,m)},failure:function(h,f,m){G(c.Failure,h,f,m)},warning:function(h,f,m){G(c.Warning,h,f,m)},info:function(h,f,m){G(c.Info,h,f,m)}},Report:{init:function(h){i=B(!0,p,h),Ne(fs,"NotiflixReportInternalCSS")},merge:function(h){return i?void(i=B(!0,i,h)):(K("You have to initialize the Report module before call Merge function."),!1)},success:function(h,f,m,A,I){Ve(d.Success,h,f,m,A,I)},failure:function(h,f,m,A,I){Ve(d.Failure,h,f,m,A,I)},warning:function(h,f,m,A,I){Ve(d.Warning,h,f,m,A,I)},info:function(h,f,m,A,I){Ve(d.Info,h,f,m,A,I)}},Confirm:{init:function(h){s=B(!0,b,h),Ne(ps,"NotiflixConfirmInternalCSS")},merge:function(h){return s?void(s=B(!0,s,h)):(K("You have to initialize the Confirm module before call Merge function."),!1)},show:function(h,f,m,A,I,O,T){yt(v.Show,h,f,null,m,A,I,O,T)},ask:function(h,f,m,A,I,O,T,_){yt(v.Ask,h,f,m,A,I,O,T,_)},prompt:function(h,f,m,A,I,O,T,_){yt(v.Prompt,h,f,m,A,I,O,T,_)}},Loading:{init:function(h){r=B(!0,R,h),Ne(Cu,"NotiflixLoadingInternalCSS")},merge:function(h){return r?void(r=B(!0,r,h)):(K("You have to initialize the Loading module before call Merge function."),!1)},standard:function(h,f){Xe(w.Standard,h,f,!0,0)},hourglass:function(h,f){Xe(w.Hourglass,h,f,!0,0)},circle:function(h,f){Xe(w.Circle,h,f,!0,0)},arrows:function(h,f){Xe(w.Arrows,h,f,!0,0)},dots:function(h,f){Xe(w.Dots,h,f,!0,0)},pulse:function(h,f){Xe(w.Pulse,h,f,!0,0)},custom:function(h,f){Xe(w.Custom,h,f,!0,0)},notiflix:function(h,f){Xe(w.Notiflix,h,f,!0,0)},remove:function(h){typeof h!="number"&&(h=0),Xe(null,null,null,!1,h)},change:function(h){Iu(h)}},Block:{init:function(h){o=B(!0,J,h),Ne(Su,"NotiflixBlockInternalCSS")},merge:function(h){return o?void(o=B(!0,o,h)):(K('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(h,f,m){bt(!0,F.Standard,h,f,m)},hourglass:function(h,f,m){bt(!0,F.Hourglass,h,f,m)},circle:function(h,f,m){bt(!0,F.Circle,h,f,m)},arrows:function(h,f,m){bt(!0,F.Arrows,h,f,m)},dots:function(h,f,m){bt(!0,F.Dots,h,f,m)},pulse:function(h,f,m){bt(!0,F.Pulse,h,f,m)},remove:function(h,f){typeof f!="number"&&(f=0),bt(!1,null,h,null,null,f)}}};return typeof e.Notiflix=="object"?B(!0,e.Notiflix,{Notify:pe.Notify,Report:pe.Report,Confirm:pe.Confirm,Loading:pe.Loading,Block:pe.Block}):{Notify:pe.Notify,Report:pe.Report,Confirm:pe.Confirm,Loading:pe.Loading,Block:pe.Block}})})(il);var $d=il.exports;const kt=Mu($d);document.querySelector(".modal-fav-book");tl.defaults.baseURL="https://books-backend.p.goit.global/books/";async function qb(n){try{const{data:e}=await tl.get(n);return e}catch{kt.Notify.failure("Oops! Something went wrong! Try reloading the page!")}}const eh="data:image/png;base64,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",th="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",nh="data:image/png;base64,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",ih=new URL("/js-team-project-bookshelf/assets/trashh-d89f230d.svg#icon-bin",self.location),Hs=document.querySelector(".empty-shopping-list"),xs=document.querySelector(".shopping-list");let Ie;try{Ie=JSON.parse(localStorage.getItem("books"))}catch(n){console.log(n)}Ie===null&&(Ie=[]);sl();function sl(){if(!xs)return;const n=localStorage.getItem("books");if(JSON.parse(n)===null)Hs.classList.remove("visuallyhidden");else{xs.innerHTML="";const i=localStorage.getItem("books");i&&(Ie=JSON.parse(i))}if(Ie!==null){Ie.length>0&&Hs.classList.add("visuallyhidden");for(let i=0;i<Ie.length;i++){const s=rh(Ie[i]._id);xs.insertAdjacentHTML("beforeend",`<div class="shopping-list-thumb">
        <div class="cover-shopping-list" style="background-image: url('${s.book_image}'); background-size: cover;">
          </div>
          <div class="book-interface">
          <div class="book-title-btn">
          <div>
          <h2 class="shopping-list-book-title">${s.title}</h2>
            <p class="shopping-list-book-category">${s.list_name}</p>
            </div>
          <button class="delete-shopping-list-btn" type="button" data-id="${s._id}">
            <svg class="delete-shopping-list-icon">
              <use href="${ih}"></use>
            </svg>
          </button>
          </div>
            <p class="shopping-list-book-about">${s.description}</p>
            <div class="shopping-list-book">
            <p class="shopping-list-book-author">${s.author}</p>
            <ul class="shopping-list-trading">
              <li class="shopping-list-trading-item">
                <a class="shopping-list-trading-link brightness" href="${s.buy_links[0].url}" target="_blank" rel="noopener noreferrer">
                  <img src="${eh}" class="shopping-list-trading-icon-amazon" alt="Amazon icon" />
                </a>
              </li>
              <li class="shopping-list-trading-item">
                <a class="shopping-list-trading-link" href="${s.buy_links[1].url}" target="_blank" rel="noopener noreferrer">
                  <img src="${th}" class="shopping-list-trading-icon-apple-books" alt="Apple icon" />
                </a>
              </li>
              <li class="shopping-list-trading-item">
                <a class="shopping-list-trading-link" href="${s.buy_links[2].url}" target="_blank" rel="noopener noreferrer">
                  <img src="${nh}" class="shopping-list-trading-icon-book-shop" alt="Book shop icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>`)}}const t=document.querySelectorAll(".delete-shopping-list-btn");for(let i=0;i<t.length;i++)t[i].addEventListener("click",sh)}function sh(n){const e=n.currentTarget.dataset.id,t=Ie.findIndex(i=>i._id===e);t!==-1&&(Ie.splice(t,1),localStorage.setItem("books",JSON.stringify(Ie)),kt.Notify.info("Book removed from shopping list")),sl(),Ie.length===0&&Hs.classList.remove("visuallyhidden")}function rh(n){try{const e=localStorage.getItem("books");return e?JSON.parse(e).find(i=>i._id===n):null}catch(e){console.log(e)}}const wi=document.querySelector(".js-open-menu"),oh=document.querySelector(".js-close-menu"),gr=document.querySelector(".js-modal"),yr=new BroadcastChannel("modal-channel");wi.addEventListener("click",function(){gr.style.display="block",wi.classList.add("hidden"),yr.postMessage({action:"openModal"})});oh.addEventListener("click",function(){gr.style.display="none",wi.classList.remove("hidden")});yr.addEventListener("message",function(n){n.data.action==="openModal"&&(gr.style.display="block",wi.classList.add("hidden"))});window.addEventListener("beforeunload",function(){yr.close()});const ah="data:image/png;base64,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",lh="data:image/png;base64,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",ch="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAgCAYAAABAQWX9AAAACXBIWXMAAAsSAAALEgHS3X78AAAD/0lEQVRogc1aS24TQRB9QZHYIM2wYxffIHMApDh7pBiJJRLODcwJEnbs8A1iL9hl4ZwAW+IAw4YVEuMbjMUOITVq9EopOtXzsRs0T2qNp6e6p7um6lVVJ0fOOSSATHK0x1QjAFMAFYBFisWkwqNE82wA3O051ivnigoaFLxy1mxzADWAFYCCbc2vOef9RMn7/tzYjFiB43XC/pxjavZfc845nxeDU5CzUTvnXgRP3huSpXdLdT+OzFdQNsRtcH/N+QbRtFt9AbDk7wzAc/VsB+C1knvL36fKMjzG6veS4zxmlJX+S7riMYBz9m9oTYOBVs6MTTb0jNcteeEX7xdsW94Xkc28oZI9nqj+OcePA8UODlo5K3KJbOgzrxV5QiLJBwAlgBM1TlDzuqN1eAt7B+A2eM9CcdJwEeGIheKPNf1/5JyrDDk9ByivUXPs3HjPxHjPYNqRu090njJalLSgnG4W5h9jtpJWMKM1QeU5IlNRpg76xT0rvqegTDkkK9LK2SeBg0oA74bOIX1xTE44BBt+9UFFmhTwllMEydw6Mu+ITVAqd4mhoBuFyeK64T0a4dpCNLli3hBJY/MUf81nkGQsEQuxaiDOqUHeIWq+K4/MUbSMF9QMDOE8q47jBW+dc1+dcx9ljkNqK+uL5rSIGxXqY8hYU1WRL9xkMRoZc6pwnq7jBT8A/ATwWDpSFZ5QijnrOS7juK4u0DbPqIOshW9cwyt5llI5K5YIO5L8uWrLlrGZSh8OQXbAsccD/jw+cDGCmbKYaZA1gxuv6EYxZCwtmirzZbB5/96LQOaswXrOI/0wif0AQtYZbc2+qoGk847EOKK8VeFbawszcsfM2+rvlX2ncKuJqsesWinnl6yZEwl2hixoDX1gpQSH8tcfWG41DY4e2tAmK9W+5pMdlTqj4k7Vsz7vRsSFYgVtLFFdWW5lKeekQxjWCL/SNZveZMZ72YiUGVLHjRV3nKI7pgzjIWKJYRPnPRiTMlq14VNE6aU6Km3DFWs5aTeG/DZVAZtaOXlDOL5r4JmU6MtZUVhutY34bJfk7pRNH5qL20mIP1PzS4jXvLHF/rg00giNTaTftDRLOYsIccX+wGVlxd9pKWMVyQp1RCrKkWtY0PbFlhbTpBj0JfsUSeAqQnRhcpY3LF6TetuXD0N31wq/N1Iop+Si29zOypwFEr22Len/+n+eG6Ui5C4keBHZmC49kpFpBC7SaitfSqWckmTYhisuRFyhVufPyw6c8a+QWcpJVXhCuYOVe2hkhgsuh/q38pRYsPLtGo593vNyiIoBLWfZMZT6MxodCmMuIAdOfsOeaHU4F3gC94rUf7YJ4dfh04Eu59sW+pzryD833APAb1ort4aIc1uRAAAAAElFTkSuQmCC",uh="data:image/png;base64,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",dh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAAgCAYAAACb1g2aAAAACXBIWXMAAAsSAAALEgHS3X78AAACzElEQVR4nO2b7ZHaMBCGNxn+nzuADo5UAOmADqCDuw7OV0FIBdx1QAfxVRBTQaADqMAZz6wnGg1arWKxIfb7zGi4GyR/SHpkaS0+NU1DAIDb8xl1DIANkA0AIyAbAEZANgCMgGwAGAHZADACsgFgxAQVPRpmnK5Rjb1yLIBsw2bDaaG4yxNL96aQb05EW8UxayJ6HnsjdGAHyTBpZdgT0fQv7+67IMmcZXxQHOeDiJZjqniJds3WCCk0wpWRciWXlfI0PIr6LBXXpDl/7NypSXNebYrdozZV/ITxp4d9RGt54ieiT4powONfB0jWAeGAjgWL8cuRY9NTtI6V9z9E68k9RCPXmNdnYceCzIWDfW2XDk76IuQtnL8l0d55uggi3EuA5BsRnQfwlNN2uvONzr/lKeS166idZcGS07Wpok9MtA2imTruKRq5489jpuOFOv4sMs06Ba6hVpxT6nRVQqc8BJ72rSAvQrkpC+df/4rLtvfwqLyGLZfZR0QDSmKyhd7L3IodN2IOQlGwMtJh3zhPqKyEdFxKkO0cyFtxm6yFsjOWrWBhnxPXWRdH2J9CnqNTH6F+MnPypAw2gyQm25Q7rVtJRaYR7T3QaaSOBHSkhv4PzjRzz7JLIfsHxcBCfH433+hlu0RGvh8sRjdarhSNWCner3TCDkmuV+G7vh1tzilWX4Uw9SMWq2K5jmMXwJIJN0ysAVOEuCjXNzRA4aQBxv0uFn1d8Hu2VE6KaeOjct2GCGNmJjynXmV8f1ImRtuGJJxmWxR5YfWclE6gqS/nBOFC9+0OvLkCX/8tE66EZYZdB8TTKM2eOZ8hTimtec3coWtFQKgj9BSusV3rD12ApOb1wMoJE2ufdAdn21CfxoZw6fh1j459x0gbkYvIboQjpgYA6MGufwCMwC+1ATACsgFgBGQDwAjIBoARkA0AIyAbAEZANgAsIKLfQQPs0x9Bh2IAAAAASUVORK5CYII=",hh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAABACAYAAACOeWtyAAAACXBIWXMAAAsSAAALEgHS3X78AAAFHElEQVR4nO3d/XHbOBDG4fWN/7c7CK8CqwMrFcQdSB3EV8HZFcQdJKngnAoidyBXEKmDqALdMLPIIB6JH8CShFa/Z4YzGccWaYp8tQAB+GK/3wsAePQX7yoArwg4AG4RcADcIuAAuEXAAXCLgAPgFgEHwC0CDoBbBBwAtwg4AG4RcADcIuAAuEXAAXCLgAPgFgEHwC0CDoBbl7y1gDuVbrV5wy/3U0TW+u+Nbq4QcMBpuxaROw2ymYjcZP42rxp6KxF51hC0NNPjtbDS7SiWLAdOUx1oSxFZDHz0X0XkS1uQdDTT17kyOrZHEXlo+gb64IDTcq2B832EcBPdR72vJ913Kutw64SAA07HtYbEGMH21kfdd0rITRJuogFX73ifsfXxkLmv0GGa8xphW/d8s3LO08rgNcK5zj2HY20lHqvoNTTlMYT+rboiuo8eBnS9BnP72HLc6HH3MVm4yZlXcDda6gNjX3e3WhF9EpEf+vTyvuUD92HicAsWGlpdTBpuQhNVPhByKMA7DbtNwxPG+4LeqGWH75k83IRhIr+E/owubxowpDoM/tMnl/H1eJcZFC8HvlZpsKZoq+CKCDch4H4j5FCShVZzYQhE1yZhbKdVX1MLpdKxbn2bvk3HkxJuO/1dP/U8jlbn3kSNLWiuoiD/RkHSNBvhmPpn2q7njQZcX8fC6y4x3ObRjApTBNyfCDmUpO8Ty+C1Q2BUWjWl9O0davIutXldTLgJTdSDaK6W4cVo9Pwpu9Ug6juT4NCc0pluc91S+98OvX59r3zu+RqDh5sQcEcRctNbtU3Dmcj7jrsNcy5vMw+zS1Pz2M/No1Cz7PCPj6fYcBMCrlGpIZcyLzB3zmLXm9rSMrHvSTJ+rouu5z4ezJvTed71AUOlgWoRqk2+Rueg6HATAq5ViSGXsqxN7g0/RVPxXWYzqhQh5IYakrHUbchQC+LhK8WHmxgFXOVxHanIFPP+4MuzzlywdKfhOcaHwFa7C+Kmad9wE1166diDk5Q5rseq/N9fuzRY76lPH0EJldC3hD4JQg6luNbAHLpi20ZrwqUMJTnEuipvfb1LLRc/ZOzkqePCeDllemBRKa7106iIkdY4C1Z9gkPNENjqvbXS+2PtpVVmUcFdRZOFDwXdTP/PogqyOulrvegIOQxtmTlJPvRXWYXbi95H62izXrW3GJdGHchX2ib/rB2JYSkiy9UPDg0uzEHIla11tdaCzfT6t1hxdxOtA5dynW61lbU+x3GFoYm6NWwbXw3UP2DVDxAj5MpVDTDcw+IG33f4HkvPGlCp1+cmGj5ipaSVTRqFp6hfdO5bqXYDTqEi5Mq0GODhzsWJnYPQask5D0MUGzlLl48qzEV90iquVE8D9xOEkNsVfA5wfh6MK6+zEyq4n4krAYzhZaS+GCo5lCTMGCi1Ofho/HpVQqXaOl85Huhb4g3+beSxc4QcShDPGCi1OWhddMwTAq51vvLb5ZLW+gTI+ollX3VT8R+tKsd+hE1zFVN6ZJEHO4fWg9voDf5eP0nGtNU3uMpYC8sCIYcx7fRe+/uEh8YUqWkuaviz+EutpGbR8itWzbfXaAT1asxJuB2so0X8AEtvZw4MMQTq7NUu9vvkYT2zqH9g1qGvIB4xnbIiBgD0khNwAFA0/iYDALcIOABuEXAA3CLgALhFwAFwi4AD4BYBB8AtAg6AWwQcALcIOABuEXAA3CLgALhFwAFwi4AD4BYBB8AtAg6ATyLyP3YSurakKaryAAAAAElFTkSuQmCC",fh="data:image/png;base64,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",ph="/js-team-project-bookshelf/assets/04-found-2-17109998.png",mh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAgCAYAAAC4oZ4KAAAACXBIWXMAAAsSAAALEgHS3X78AAAEjklEQVRogdVZ4Y20NhAdR9//0MFHKgipYEkF2Q5CKrhNBR/pgOtg0wGpIFwHXAdcB2wDJprTm9W7iWHZC5HYkSyM7Rns5+fx2IRpmmQjyUSkFZGDiLyKSCki41bG9yLfbdiPDmCp/Cgi1ePCMi9bAXYESCzlxn3dhWwJmJf+cWGZl60AyxNl3UJ7BbhBm3EG8H2KOv0NUjV9lLOzmaFNO6Wl26gf/3vacpdUxhRYiiew7gjn7/1bSsIjEGxLwEwqAPXLyvYXLM2HWJZbAZYDKE1fV7R/RczWIWUALEf5fjeM/7jmC/irWzKg3RH+THXzaZpOCb+2a3/2WYYd4acOC22MRcyYAvHZLb/2025ZdifCFdgyJwNYk5OO5usbel6avTJsC6BGLLcyodPfAZLJkLD1MICVC4PuAUqW0MsB5D3SLgBV7B2wbCbINDbxAHIAlxrkLdDMXu70KpTzZB33DFidGJiWMZt4h/SR/S3Q2B7vlksAt3sGTLC92zJhoErUsSz5HAZtAFAVHPs9G8Euwo17wgoNB+pEKPE2c/hmKRCKWFjx/Sc29JddXBmtQDXFKJaU/0qlbGWQy9KDkbvZNZcYprN5vnHUueBYw5KBSXPXO+MCwy50ZGr3eMX9JVE2t/RS0iQK9QTwTUR+A+CpepUhUbd0h7YLYYYVAGANUAI25I4FGYAwBv3riKObAL7To61dJp6oWUf+qgfwNjkjJtSukKxtS7YK9CVDmyaE0G4BuDFMP/J0p25qyZzccmsSjrqkSTliydsPlGfYzGkjOdC7MbbDd55RfgCwB0yC/bHS8+qfM2z+nMCZfUZ89J3NxFEfTgIxxjbGOLlU0/spxjigrEFZT/VWVsDeOcbYUZsBz2OMcdTyLZ2+3em/OrTfkObkLXGb4Nll4i8GS7J9oX+YWvYH2PAVzHlCOKFM+Qv1xmqN/Cvo9mjzDF1zF/3K2971AuQqOqacVwSU/jYhX2h7InYVmP0zZr9DnhnXuvyJ3kfY6JE3ZtozI0Zam01vPtjpV3Cmt8KIFmxi/6W+5VfX9gX2Pux8cPoSQuhd/p0pIYTRtWd/NloYE0LonM3B6yb0zcaYKLvadTpqd2CDxYprGLvnyhI3FJ5d18N0jLHELE/Il+ZnUG8+pyTmXevRpiGGeV9WkM8yv9Un2Ob1a8fq3rG6c3U2hkJuLL+Obgn47NcBwCPyqcO5UMeqGGOOwTGAEwHFTrsgGz1tAjX0WzwHep8cuO95stHQN2v6bulsNlRX0CS+4yAzO1uXOI6kJAmU81kjPtoQINZpz5grwNBnljSY+ZEmYXJAGDNGes+JfTWBYj60Ip3O2ap5DLZLckCnMcsP2HmWou4LdqwcfirlOwrUCew9QccC0G/4xgveCySh45bFcGUIwf4h+ABUfe/f2G0H+pcgLgDuaFwcG3K9uLqC+vvepy9w4AMc91KAp1u2dk4NaLp1ztN63dav4UcIQdmoIBsgOjDNW6CpeYvszcbv6syhp4CrjvZTB/gz6aqOhjCma2NSPbNhv/UYFLNlAa8+9TssWn8WEfkHC8jv1HficMMAAAAASUVORK5CYII=",gh="data:image/png;base64,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",yh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAgCAYAAADtwH1UAAAACXBIWXMAAAsSAAALEgHS3X78AAAC2UlEQVRoge1a7XHbMAyFe/4fbRBuYG0QdYJqg2qDaoMqG7gTVJmg7gb2BFE2UDeQJmCPPTD3ioIW49pHJ+G741kfjx8i8ADY8spaSxHYE9FdDPEErC407qvAh/f88NeAbIDEyAZIjFMNcM+x+6Xt45vZuTMhKyAxsgESIxsgMbIBEmPNX7KWUIr7DRFVC30GImrf2oadG+sTv+Hecsv4T6yvcAOd2rbimlNTR0RToI8hoh64IeVtFTV79DCGR8Fj1US0IaInIhp5nFDk8PyJI8UE4xvu1z2z7eWwd78ziVYps8VwHEZrbaHwXdsKrgnw9keethLc0lo7HeE3EXN4jgk9s6aAe+VaI0LOQfGA6gI/2D2wx254fjfHTuHVyrlUEbEX7oGzgXnk87j+N3w8s7IK6POd+4yiHyqs5TmlIkseT1VAjOd0CqcTnHMowB33cN4q/Brue48dA8/hWwHcSVFWKdZYw70Wrm+VcSUMr0cd79rLUOc9n/n4lxKjidVJ7KXe024XqjT0bi23FHD8U6gOlSXziZZfdkrB8sy7dgP4hc+Q2BBuoz7x+SDuN6SjAqM+BUIVQoam4ggXjf7Anz5kHXg+ek0GmPnzJnAfN9nlnx9wXgc2C1UUqpYGOO5gwwphMJmPDKy7E/d6cBDPO7kMrZQJpOSNwjH0MrQQLna8ETFeTtynFhveCVXh+lrYeDfHNyL6wuM8svdugD8rIdE/38DJ+cCOMUMZevfXOCcm4XNiKQlj0tsHEqVMhpPCNwtlpSxDXdsFuCPPL/kePZ83Yn0NcMpQGZoaI5TCI8dgDCWGrxfAk57YKmozC/FelpPECqq4lcwZAsUAwXp83uh5nTu47jl/lLyy/76V116S55fyF0KsAoYIjhHl1hzZ710jVgExcAntK/AOEb+Yvnvk9wGJkQ2QGNkAiZENkBhaFRT1Z9GM8yArIDGyARLjkgYIvb/N8CCi3w52eOweHqFuAAAAAElFTkSuQmCC",bh="data:image/png;base64,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",vh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAgCAYAAACowdDWAAAACXBIWXMAAAsSAAALEgHS3X78AAAEUUlEQVRYhdVZy3HbQAyFPbmbqcBMBWIqkFyBmQpCV2ClAlMdMBVE7kCuwFQHVAWhbjnSt9w2s+MHzxOMpeRPPDZmaFJY7AdY7AOwlhDC2FOFe6r2yL3r5yj+SVAlIr+o6auIdCnh90wpJTMR6UXkhHg3IlJ+RCWPE/zKKBjpXETyN1jTq1NKydSOfdidDDhrNdw00jQhX+Ad5ebo177RWp9PYZeGEEIZ0tSGEGrIKbVvhKyz5/aNf7oRpQ6h2hm4hvJLh9/jafFYUl5t+rBRc7QpFWSIYA0f/zQvVLIwimSmXRfkGbMh/oDFrUjJ1NoGM4/+dpWMZ7J5gbdvndhZOb/jM4H8Fzw/ca7nkIvjzMx4l3ivReQz+m2B/DzPyRg2HCMeLp6ppFWIeQv6PeB7ifl6Ui5FHK5mGKPHGEIgucEzSW2YhpCIrNdPVPDCsV6ByXRhkU5pwQXJ7ou5f+h7lvgWKB8NeUdz7xDHySj4Y59mGOyCLMrEu8NhqEC/cxhmJSK/98zzF24qkG/QV8fl+btRz3CQsRhBXEY279HQUqKtJGAoTegJCUSsCXgyB4EHKhgsyDQObzRBj5b6TrtXHhD41ZVah9fBtUo6X/2e8ZQKjNNj7OGwbvc0pqTAhRtMcuiCMnKdhhY0JwWXcEHB4mcEKjnmbQlwFFAqtDcYT9trJ+WsH77+Q2ZSkWupW6n79+Syc7StyA051tU0TgPZlvqy+3pZ2k6cfG1iAKhg4QlKtRzWv4b75gAjQaxLFQCXiXCl5V/0iiPw1vQ9upM5rLWi9KyCpcd2MYcVO9q9Je3MzFhbd4sBw+7kQG9N73IDYpoCPgIdTevsM5bmDXuuQry+6mIdkFuV7k1OqqTuXlP/uZEp4KIWTQ9S0kuYPfKScg4hNS2yM2dSFWuovaazybkrL1qNwzKBZJNKfjJoZOvIG6BcbW4KrsDnUKGox6nXALS1aFhRu46TU97Kdaqi+py+VyTL8y28KKAhxLvTWRAMF1g4p01reZxiqRKd+a1zaKzUfoPhZ5iLxyjB60zYERq3p1z2cfx1YD8QvNsSymZCFoisuwRTNzI/EF/7cPZTOGe2c0o5ry5teF0aQjhZ3iay+cHJDwtHziMrtzG/pzvB+54aJPcx3JyhT2528cys6RvelzwQn0mlsczmkPucKe6NmOzNn03L7nDOM+IpPswppRyMzC0l8UJxlnmukpnDS7V5OeSWgOcKb633chhxCsV4cbd2ByCjQKVKswJrnFX1FM21d7xC3XVFvMmIG3LW4d0KCJSozUTqHTUdBfaK1inz1vCABv3UxVemH6/hBu9dQEzEyM4pqWxA9mJlCnhsphPAs4C0pD6FU5q1Brgs8GTU5+F2j6uQApax/xro4U6nxN8kdjsVQjqqLrRc6jFGRrtqQ0iGuXMTl3mnOERpvM15HbbU8hS1tDHx792TrULU4vEmjYFBdy9ee6ilPwaJyD9qkW5jqapMpQAAAABJRU5ErkJggg==",wh="data:image/png;base64,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",xh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAgCAYAAAD64u2dAAAACXBIWXMAAAsSAAALEgHS3X78AAAFXElEQVRoge1azZGdRhBuv/J95+TroggWRbBkIDJYHIFwBB5ngK66eDYDnAEvAxSB8UF3lIBx4fra9VVr5sH729Wz6Kop3huanv6fnoYfpmmS7xxyEclwLV5JFb2I1CLiwUclIiMjbIb6GtRgOu5eYM09jPMn/v8sIoERNkMtQ0njWkbbwym2iLoQVBiPF6a7X0q7u2tL9j+DAIW+EZHnlxRtM9RpMCCyXsxgm6HOAzXYW6Svq8FmqMtAj5Q4V2tfrrHAaxQTHtcOw0IGLxXsCbPX3hI48P3uCJ4XiwmZDfXCQ8En1i0IpziRN3eAPo/qjDWWRj2th26J3o48u1lp/QL4fgXupaEhfl2EdiCcXxdkms9Fv4tIiyi+Bq/z3vXXJYjtcLCazwXvjfCzQSYcwBhq4L9GSuqx9iOlR4WZzyfgNNgrQprUv8bcw1DXkqUHX5/OpjRNU0kBWlG4tZgLJqXMMOJ3g7Dt8DsDXk7zNWgFk9Y80VScBuNQ6htwbzDzAXxp+ixAW2VswU+gtS2e8tIRbkZrKH5Osluc1AgHEuFi6rPCq1EyQ0gZ0bzbQimTUe4IIXgvGgnXGiozivf0P2WoKuJYjmiKeZ7xA0YfwRPMq3yeeLcyKS2W+xxjrTaUpwXFMMAK6ImwXUCZaCNKUE+1xYRG7UBevaaYUL46w7+LrK33erovETw1KEdqY+YUyojcYUnZB4y1qpgQyuV31M/6gg1XsC/Ne9aDOdhxea15PlZmjomNXUvYxjYhF0BpPVIT8zlBQ+cewKNPFCLKd09zLa73puDgdVTutQVJdUo3Qw01L/YHfnsYrIUhPtF/gVFjgiqc0mE+djNv6GDZQpGpCm+e/w34d6gGh4hiVaaUw1yyMjzaWNyZ0Ki6x9Wb+TuqpGJepIIe00rRaqhcwLPAEXqPNfsErh5AZ15/IVnsmpoduMrNI/cvBdUx1SAbqiUv3ZMxWsJRo3ngPtELNi2X157HhJzhidLr2vMZl96H1qzoDaojGa1hAxT3ANwM1xk+rOTpWChWt5zMptVENksu1bmyyamo0A23TGzUTMtj6HxB9HsUHX3i2djGbMt0u3YGubSa7IhPy6MjXiYULX5BJk901xQTduRrnt1eHH4bkC3t05uhbgS21xw3ApuhbgS+F0O5SHP5pkANxWeKUz9CzC70ASN3xdfQW2OAnkruFHA5zvpInfEcjhK14TOnjzqFOidnwQ4L8mnc0wIKmfkd60yUUIjiKo5VZEajMvcLs1Zh6OSkTFWOM7jO0KginYuMcFluR/cVYrLWGA1GGXH2EddAcxnJG5M/CT8C0ZHgI07hgRjR1BEg0BjxkoKMXtALvJoY0pd+Le4P+O2IXkf09NqafuAIPho4R4XnuGOhBh3QQvLg/6OI/AS8YNayh2BrTJa1JJz3mNNvJ3L68KXFC8pn3B9IHw73U12V/2BHiujMAypETm2jiqKBPcGRsVWh2rphZXQk4AAaI3U2BjpP5KT8HLx5chpdpzf0Coo+hRE8z3L+TY6ooGkxkJKF1rVG4jNPjs5FIPySHLJAx6PC79p8776qGb0zYa5MOgrfjEJdmQ7mOU17IylKn9UIGUmRjub5A/0yElEcLZkxHPNYgvfeeGmG3w8w7mej/Io+rGzJGZUfzjZCEVxT2mP+cjJQQw4nxrmYv0WYD7zsNY6uBaU6BU9GKCnNdBQ9JaU8+6WR9aCR0mVOtBxFiEarjbaGvt1wZDzF74nnzqTNkf7nRmmpdMdyOJJlJDnsfq9GGEwjWzsRI8l2GFb0olL9Nn0JV6OPZt9wtitop0Z75vM8Zr7sC8PbGtMk/wBTxn83s8bSugAAAABJRU5ErkJggg==",_h="data:image/png;base64,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",kh="data:image/png;base64,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",Ah="data:image/png;base64,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";function Eh(n){const e=window.devicePixelRatio>1.1;return n.map((i,s)=>{const r=String(s+1).padStart(2,"0"),o=e?i.retinaImg:i.img;return`
        <li class="donate-fund">
          <span class="donate-index">${r}</span>
          <a href="${i.url}" target="_blank" class='donate-item-link' crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="${i.title}">
          <img class="donate-img" src="${o}" alt="${i.title}" loading="lazy">
          </a>
        </li>
      `}).join("")}const Ch=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:ah,retinaImg:lh},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:dh,retinaImg:hh},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:yh,retinaImg:bh},{title:"Medicins Sans   Frontieres",url:"https://www.msf.org/ukraine",img:mh,retinaImg:gh},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:ch,retinaImg:uh},{title:"International Medical   Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:fh,retinaImg:ph},{title:"Action against   hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:vh,retinaImg:wh},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:xh,retinaImg:_h},{title:"Serhiy Prytula Charity   Foundation",url:"https://prytulafoundation.org/en",img:kh,retinaImg:Ah}],Ih=document.querySelector(".donate-funds-list");Ih.insertAdjacentHTML("beforeend",Eh(Ch));const Nn=document.querySelector(".donate-button"),Rn=document.querySelector(".donate-button-up"),rl=document.querySelector(".donate-funds-visible");Nn.addEventListener("click",function(){Nn.style.display="none",Rn.style.display="block",rl.scrollTo({top:1e4,behavior:"smooth"})});Rn.addEventListener("click",function(){Rn.style.display="none",Nn.style.display="block",rl.scrollTo({top:0,behavior:"smooth"})});const ol=document.querySelector(".donate-funds-list"),Sh=new IntersectionObserver(function(n){n[0].intersectionRatio<=0||(Rn.style.display="block",Nn.style.display="none")}),Th=new IntersectionObserver(function(n){n[0].intersectionRatio<=0||(Rn.style.display="none",Nn.style.display="block")});Sh.observe(ol.lastElementChild);Th.observe(ol.firstElementChild);const Nh=document.querySelector(".div-theme"),So=document.querySelector(".span-theme"),To=document.querySelector("body");let Wt=!1;Nh.addEventListener("change",()=>{Wt?(Wt=!1,localStorage.setItem("userTheme","light")):(Wt=!0,localStorage.setItem("userTheme","dark")),al()});function al(){try{Wt=localStorage.getItem("userTheme")==="dark"}catch{Wt=!1}const n=document.querySelector(".header-logo-icon"),e=document.querySelector(".header-logo-icon1");Wt?(To.classList.add("dark-theme"),So.style.left="20px",n.style.width="0px",e.style.width="109px"):(To.classList.remove("dark-theme"),So.style.left="2px",e.style.width="0px",n.style.width="109px")}al();const No=document.querySelector(".header-nav-item").querySelectorAll("a"),Rh=document.querySelector(".header-nav-item-modal").querySelectorAll("a");if(document.querySelector(".home-page")===null)for(let n=0;n<No.length;n++)No[n].classList.toggle("heder-active"),Rh[n].classList.toggle("heder-active");const br=document.querySelector(".btn_up");window.addEventListener("scroll",function(){window.pageYOffset>1e3?Ph():Lh()});br.addEventListener("click",Oh);function Oh(){window.scrollTo({top:0,left:0,behavior:"smooth"})}function Lh(){br.classList.add("hide-btn_up")}function Ph(){br.classList.remove("hide-btn_up")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(n,e){if(!n)throw en(e)},en=function(n){return new Error("Firebase Database ("+ll.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},vr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(p=64)),i.push(t[u],t[d],t[p],t[v])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Mh;const p=r<<2|a>>4;if(i.push(p),c!==64){const v=a<<4&240|c>>2;if(i.push(v),d!==64){const b=c<<6&192|d;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Mh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ul=function(n){const e=cl(n);return vr.encodeByteArray(e,!0)},xi=function(n){return ul(n).replace(/\./g,"")},_i=function(n){try{return vr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(n){return dl(void 0,n)}function dl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Bh(t)||(n[t]=dl(n[t],e[t]));return n}function Bh(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=()=>Uh().__FIREBASE_DEFAULTS__,Wh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_i(n[1]);return e&&JSON.parse(e)},wr=()=>{try{return zh()||Wh()||Hh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hl=n=>{var e,t;return(t=(e=wr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jh=n=>{const e=hl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},fl=()=>{var n;return(n=wr())===null||n===void 0?void 0:n.config},pl=n=>{var e;return(e=wr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[xi(JSON.stringify(t)),xi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function Xh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ml(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kh(){const n=fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gl(){return ll.NODE_ADMIN===!0}function qh(){try{return typeof indexedDB=="object"}catch{return!1}}function Gh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="FirebaseError";class gt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Yh,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Qh(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gt(s,a,i)}}function Qh(n,e){return n.replace(Jh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Jh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n){return JSON.parse(n)}function re(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=On(_i(r[0])||""),t=On(_i(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Zh=function(n){const e=yl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},$h=function(n){const e=yl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Gt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function js(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ki(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ai(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Ro(r)&&Ro(o)){if(!Ai(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ro(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function _n(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function kn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const p=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const p=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function tf(n,e){const t=new nf(n,e);return t.subscribe.bind(t)}class nf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");sf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=_s),s.error===void 0&&(s.error=_s),s.complete===void 0&&(s.complete=_s);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _s(){}function _r(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,x(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},$i=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n){return n&&n._delegate?n._delegate:n}class Ct{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Zi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lf(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:af(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function af(n){return n===vt?void 0:n}function lf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new of(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const uf={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},df=X.INFO,hf={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},ff=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=hf[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kr{constructor(e){this.name=e,this._logLevel=df,this._logHandler=ff,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const pf=(n,e)=>e.some(t=>n instanceof t);let Oo,Lo;function mf(){return Oo||(Oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gf(){return Lo||(Lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bl=new WeakMap,Vs=new WeakMap,vl=new WeakMap,ks=new WeakMap,Ar=new WeakMap;function yf(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(lt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&bl.set(t,n)}).catch(()=>{}),Ar.set(e,n),e}function bf(n){if(Vs.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Vs.set(n,e)}let Xs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vf(n){Xs=n(Xs)}function wf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(As(this),e,...t);return vl.set(i,e.sort?e.sort():[e]),lt(i)}:gf().includes(n)?function(...e){return n.apply(As(this),e),lt(bl.get(this))}:function(...e){return lt(n.apply(As(this),e))}}function xf(n){return typeof n=="function"?wf(n):(n instanceof IDBTransaction&&bf(n),pf(n,mf())?new Proxy(n,Xs):n)}function lt(n){if(n instanceof IDBRequest)return yf(n);if(ks.has(n))return ks.get(n);const e=xf(n);return e!==n&&(ks.set(n,e),Ar.set(e,n)),e}const As=n=>Ar.get(n);function _f(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=lt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(lt(o.result),l.oldVersion,l.newVersion,lt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kf=["get","getKey","getAll","getAllKeys","count"],Af=["put","add","delete","clear"],Es=new Map;function Po(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Es.get(e))return Es.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Af.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||kf.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Es.set(e,r),r}vf(n=>({...n,get:(e,t,i)=>Po(e,t)||n.get(e,t,i),has:(e,t)=>!!Po(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cf(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Cf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ks="@firebase/app",Do="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new kr("@firebase/app"),If="@firebase/app-compat",Sf="@firebase/analytics-compat",Tf="@firebase/analytics",Nf="@firebase/app-check-compat",Rf="@firebase/app-check",Of="@firebase/auth",Lf="@firebase/auth-compat",Pf="@firebase/database",Df="@firebase/database-compat",Mf="@firebase/functions",Ff="@firebase/functions-compat",Bf="@firebase/installations",Uf="@firebase/installations-compat",zf="@firebase/messaging",Wf="@firebase/messaging-compat",Hf="@firebase/performance",jf="@firebase/performance-compat",Vf="@firebase/remote-config",Xf="@firebase/remote-config-compat",Kf="@firebase/storage",qf="@firebase/storage-compat",Gf="@firebase/firestore",Yf="@firebase/firestore-compat",Qf="firebase",Jf="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="[DEFAULT]",Zf={[Ks]:"fire-core",[If]:"fire-core-compat",[Tf]:"fire-analytics",[Sf]:"fire-analytics-compat",[Rf]:"fire-app-check",[Nf]:"fire-app-check-compat",[Of]:"fire-auth",[Lf]:"fire-auth-compat",[Pf]:"fire-rtdb",[Df]:"fire-rtdb-compat",[Mf]:"fire-fn",[Ff]:"fire-fn-compat",[Bf]:"fire-iid",[Uf]:"fire-iid-compat",[zf]:"fire-fcm",[Wf]:"fire-fcm-compat",[Hf]:"fire-perf",[jf]:"fire-perf-compat",[Vf]:"fire-rc",[Xf]:"fire-rc-compat",[Kf]:"fire-gcs",[qf]:"fire-gcs-compat",[Gf]:"fire-fst",[Yf]:"fire-fst-compat","fire-js":"fire-js",[Qf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map,Gs=new Map;function $f(n,e){try{n.container.addComponent(e)}catch(t){It.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yt(n){const e=n.name;if(Gs.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;Gs.set(e,n);for(const t of Ei.values())$f(t,n);return!0}function Er(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ct=new qn("app","Firebase",ep);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=Jf;function wl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:qs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ct.create("bad-app-name",{appName:String(s)});if(t||(t=fl()),!t)throw ct.create("no-options");const r=Ei.get(s);if(r){if(Ai(t,r.options)&&Ai(i,r.config))return r;throw ct.create("duplicate-app",{appName:s})}const o=new cf(s);for(const l of Gs.values())o.addComponent(l);const a=new tp(t,i,o);return Ei.set(s,a),a}function xl(n=qs){const e=Ei.get(n);if(!e&&n===qs&&fl())return wl();if(!e)throw ct.create("no-app",{appName:n});return e}function ut(n,e,t){var i;let s=(i=Zf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),It.warn(a.join(" "));return}Yt(new Ct(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="firebase-heartbeat-database",ip=1,Ln="firebase-heartbeat-store";let Cs=null;function _l(){return Cs||(Cs=_f(np,ip,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ln)}}}).catch(n=>{throw ct.create("idb-open",{originalErrorMessage:n.message})})),Cs}async function sp(n){try{return await(await _l()).transaction(Ln).objectStore(Ln).get(kl(n))}catch(e){if(e instanceof gt)It.warn(e.message);else{const t=ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});It.warn(t.message)}}}async function Mo(n,e){try{const i=(await _l()).transaction(Ln,"readwrite");await i.objectStore(Ln).put(e,kl(n)),await i.done}catch(t){if(t instanceof gt)It.warn(t.message);else{const i=ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});It.warn(i.message)}}}function kl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=1024,op=30*24*60*60*1e3;class ap{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=op}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fo(),{heartbeatsToSend:t,unsentEntries:i}=lp(this._heartbeatsCache.heartbeats),s=xi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fo(){return new Date().toISOString().substring(0,10)}function lp(n,e=rp){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Bo(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Bo(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class cp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qh()?Gh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bo(n){return xi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){Yt(new Ct("platform-logger",e=>new Ef(e),"PRIVATE")),Yt(new Ct("heartbeat",e=>new ap(e),"PRIVATE")),ut(Ks,Do,n),ut(Ks,Do,"esm2017"),ut("fire-js","")}up("");var dp="firebase",hp="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut(dp,hp,"app");function Cr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Al(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fp=Al,El=new qn("auth","Firebase",Al());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new kr("@firebase/auth");function pp(n,...e){Ci.logLevel<=X.WARN&&Ci.warn(`Auth (${nn}): ${n}`,...e)}function mi(n,...e){Ci.logLevel<=X.ERROR&&Ci.error(`Auth (${nn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,...e){throw Ir(n,...e)}function Ue(n,...e){return Ir(n,...e)}function mp(n,e,t){const i=Object.assign(Object.assign({},fp()),{[e]:t});return new qn("auth","Firebase",i).create(e,{appName:n.name})}function Ir(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return El.create(n,...e)}function S(n,e,...t){if(!n)throw Ir(e,...t)}function Ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mi(e),new Error(e)}function Je(n,e){n||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gp(){return Uo()==="http:"||Uo()==="https:"}function Uo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gp()||Xh()||"connection"in navigator)?navigator.onLine:!0}function bp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Je(t>e,"Short delay should be less than long delay!"),this.isMobile=xr()||ml()}get(){return yp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(n,e){Je(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Gn(3e4,6e4);function sn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function rn(n,e,t,i,s={}){return Il(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=tn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Cl.fetch()(Sl(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Il(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},vp),e);try{const s=new xp(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw li(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw li(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw li(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw li(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mp(n,u,c);Fe(n,u)}}catch(s){if(s instanceof gt)throw s;Fe(n,"network-request-failed",{message:String(s)})}}async function Yn(n,e,t,i,s={}){const r=await rn(n,e,t,i,s);return"mfaPendingCredential"in r&&Fe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Sl(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Sr(n.config,s):`${n.config.apiScheme}://${s}`}class xp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ue(this.auth,"network-request-failed")),wp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function li(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ue(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n,e){return rn(n,"POST","/v1/accounts:delete",e)}async function kp(n,e){return rn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ap(n,e=!1){const t=be(n),i=await t.getIdToken(e),s=Tr(i);S(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:An(Is(s.auth_time)),issuedAtTime:An(Is(s.iat)),expirationTime:An(Is(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Is(n){return Number(n)*1e3}function Tr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return mi("JWT malformed, contained fewer than 3 sections"),null;try{const s=_i(t);return s?JSON.parse(s):(mi("Failed to decode base64 JWT payload"),null)}catch(s){return mi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ep(n){const e=Tr(n);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof gt&&Cp(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Cp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=An(this.lastLoginAt),this.creationTime=An(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Pn(n,kp(t,{idToken:i}));S(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Np(r.providerUserInfo):[],a=Tp(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Tl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Sp(n){const e=be(n);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tp(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Np(n){return n.map(e=>{var{providerId:t}=e,i=Cr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(n,e){const t=await Il(n,{},async()=>{const i=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Sl(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cl.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Rp(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Dn;return i&&(S(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(S(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(S(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,e){S(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Cr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ip(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Tl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ap(this,e)}reload(){return Sp(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ii(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pn(this,_p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,p=(s=t.email)!==null&&s!==void 0?s:void 0,v=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,R=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=t.createdAt)!==null&&c!==void 0?c:void 0,J=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:Te,isAnonymous:ie,providerData:Ne,stsTokenManager:B}=t;S(K&&B,e,"internal-error");const g=Dn.fromJSON(this.name,B);S(typeof K=="string",e,"internal-error"),it(d,e.name),it(p,e.name),S(typeof Te=="boolean",e,"internal-error"),S(typeof ie=="boolean",e,"internal-error"),it(v,e.name),it(b,e.name),it(w,e.name),it(R,e.name),it(F,e.name),it(J,e.name);const k=new At({uid:K,auth:e,email:p,emailVerified:Te,displayName:d,isAnonymous:ie,photoURL:b,phoneNumber:v,tenantId:w,stsTokenManager:g,createdAt:F,lastLoginAt:J});return Ne&&Array.isArray(Ne)&&(k.providerData=Ne.map(P=>Object.assign({},P))),R&&(k._redirectEventId=R),k}static async _fromIdTokenResponse(e,t,i=!1){const s=new Dn;s.updateFromServerResponse(t);const r=new At({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ii(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map;function qe(n){Je(n instanceof Function,"Expected a class definition");let e=zo.get(n);return e?(Je(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zo.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nl.type="NONE";const Wo=Nl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n,e,t){return`firebase:${n}:${e}:${t}`}class Ht{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=gi(this.userKey,s.apiKey,r),this.fullPersistenceKey=gi("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ht(qe(Wo),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||qe(Wo);const o=gi(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=At._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ht(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ht(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ll(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dl(e))return"Blackberry";if(Ml(e))return"Webos";if(Nr(e))return"Safari";if((e.includes("chrome/")||Ol(e))&&!e.includes("edge/"))return"Chrome";if(Pl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rl(n=fe()){return/firefox\//i.test(n)}function Nr(n=fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ol(n=fe()){return/crios\//i.test(n)}function Ll(n=fe()){return/iemobile/i.test(n)}function Pl(n=fe()){return/android/i.test(n)}function Dl(n=fe()){return/blackberry/i.test(n)}function Ml(n=fe()){return/webos/i.test(n)}function es(n=fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Op(n=fe()){var e;return es(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lp(){return Kh()&&document.documentMode===10}function Fl(n=fe()){return es(n)||Pl(n)||Ml(n)||Dl(n)||/windows phone/i.test(n)||Ll(n)}function Pp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n,e=[]){let t;switch(n){case"Browser":t=Ho(fe());break;case"Worker":t=`${Ho(fe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nn}/${i}`}async function Ul(n,e){return rn(n,"GET","/v2/recaptchaConfig",sn(n,e))}function jo(n){return n!==void 0&&n.enterprise!==void 0}class zl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Wl(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ue("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Dp().appendChild(i)})}function Mp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Fp="https://www.google.com/recaptcha/enterprise.js?render=",Bp="recaptcha-enterprise",Up="NO_RECAPTCHA";class Hl{constructor(e){this.type=Bp,this.auth=on(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ul(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new zl(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;jo(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Up)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&jo(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Wl(Fp+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Si(n,e,t,i=!1){const s=new Hl(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vo(this),this.idTokenSubscription=new Vo(this),this.beforeStateQueue=new zp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=El,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?be(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}async initializeRecaptchaConfig(){const e=await Ul(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new zl(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Hl(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qe(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function on(n){return be(n)}class Vo{constructor(e){this.auth=e,this.observer=null,this.addObserver=tf(t=>this.observer=t)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n,e){const t=Er(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Ai(r,e??{}))return s;Fe(s,"already-initialized")}return t.initialize({options:e})}function jp(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(qe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Vp(n,e,t){const i=on(n);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=jl(e),{host:o,port:a}=Xp(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Kp()}function jl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xp(n){const e=jl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Xo(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Xo(o)}}}function Xo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function qp(n,e){return rn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(n,e){return Yn(n,"POST","/v1/accounts:signInWithPassword",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n,e){return Yn(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}async function Yp(n,e){return Yn(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Rr{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Mn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Mn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await Si(e,i,"signInWithPassword");return Ss(e,s)}else return Ss(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Si(e,i,"signInWithPassword");return Ss(e,r)}else return Promise.reject(s)});case"emailLink":return Gp(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yp(e,{idToken:t,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(n,e){return Yn(n,"POST","/v1/accounts:signInWithIdp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="http://localhost";class St extends Rr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Cr(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new St(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return jt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,jt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jt(e,t)}buildRequest(){const e={requestUri:Qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zp(n){const e=_n(kn(n)).link,t=e?_n(kn(e)).deep_link_id:null,i=_n(kn(n)).deep_link_id;return(i?_n(kn(i)).link:null)||i||t||e||n}class Or{constructor(e){var t,i,s,r,o,a;const l=_n(kn(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=Jp((s=l.mode)!==null&&s!==void 0?s:null);S(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Zp(e);try{return new Or(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,t){return Mn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Or.parseLink(t);return S(i,"argument-error"),Mn._fromEmailAndCode(e,i.code,i.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Vl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Qn{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.FACEBOOK_SIGN_IN_METHOD="facebook.com";st.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return St._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return rt.credential(t,i)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Qn{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Qn{constructor(){super("twitter.com")}static credential(e,t){return St._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return at.credential(t,i)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(n,e){return Yn(n,"POST","/v1/accounts:signUp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await At._fromIdTokenResponse(e,i,s),o=Ko(i);return new Tt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ko(i);return new Tt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ko(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends gt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ti.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Ti(e,t,i,s)}}function Xl(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ti._fromErrorAndOperation(n,r,e,i):r})}async function $p(n,e,t=!1){const i=await Pn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Pn(n,Xl(i,s,e,n),t);S(r.idToken,i,"internal-error");const o=Tr(r.idToken);S(o,i,"internal-error");const{sub:a}=o;return S(n.uid===a,i,"user-mismatch"),Tt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Fe(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(n,e,t=!1){const i="signIn",s=await Xl(n,i,e),r=await Tt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function tm(n,e){return Kl(on(n),e)}async function nm(n,e,t){var i;const s=on(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await Si(s,r,"signUpPassword");o=Ts(s,c)}else o=Ts(s,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Si(s,r,"signUpPassword");return Ts(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Tt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function im(n,e,t){return tm(be(n),an.credential(e,t))}function sm(n,e,t,i){return be(n).onIdTokenChanged(e,t,i)}function rm(n,e,t){return be(n).beforeAuthStateChanged(e,t)}function om(n,e,t,i){return be(n).onAuthStateChanged(e,t,i)}function am(n){return be(n).signOut()}const Ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){const n=fe();return Nr(n)||es(n)}const cm=1e3,um=10;class Gl extends ql{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lm()&&Pp(),this.fallbackToPolling=Fl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Lp()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,um):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gl.type="LOCAL";const dm=Gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends ql{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yl.type="SESSION";const Ql=Yl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ts(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await hm(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Lr("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return window}function pm(n){ze().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function mm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ym(){return Jl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="firebaseLocalStorageDb",bm=1,Ri="firebaseLocalStorage",$l="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ns(n,e){return n.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function vm(){const n=indexedDB.deleteDatabase(Zl);return new Jn(n).toPromise()}function Qs(){const n=indexedDB.open(Zl,bm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ri,{keyPath:$l})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ri)?e(i):(i.close(),await vm(),e(await Qs()))})})}async function qo(n,e,t){const i=ns(n,!0).put({[$l]:e,value:t});return new Jn(i).toPromise()}async function wm(n,e){const t=ns(n,!1).get(e),i=await new Jn(t).toPromise();return i===void 0?null:i.value}function Go(n,e){const t=ns(n,!0).delete(e);return new Jn(t).toPromise()}const xm=800,_m=3;class ec{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>_m)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(ym()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mm(),!this.activeServiceWorker)return;this.sender=new fm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qs();return await qo(e,Ni,"1"),await Go(e,Ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>qo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>wm(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Go(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ns(s,!1).getAll();return new Jn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ec.type="LOCAL";const km=ec;new Gn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n,e){return e?qe(e):(S(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Rr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Em(n){return Kl(n.auth,new Pr(n),n.bypassAuthState)}function Cm(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),em(t,new Pr(n),n.bypassAuthState)}async function Im(n){const{auth:e,user:t}=n;return S(t,e,"internal-error"),$p(t,new Pr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Em;case"linkViaPopup":case"linkViaRedirect":return Im;case"reauthViaPopup":case"reauthViaRedirect":return Cm;default:Fe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Gn(2e3,1e4);class Bt extends tc{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Lr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sm.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="pendingRedirect",yi=new Map;class Nm extends tc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const i=await Rm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rm(n,e){const t=Pm(e),i=Lm(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Om(n,e){yi.set(n._key(),e)}function Lm(n){return qe(n._redirectPersistence)}function Pm(n){return gi(Tm,n.config.apiKey,n.name)}async function Dm(n,e,t=!1){const i=on(n),s=Am(i,e),o=await new Nm(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=10*60*1e3;class Fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yo(e))}saveEventToCache(e){this.cachedEventUids.add(Yo(e)),this.lastProcessedEventTime=Date.now()}}function Yo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(n,e={}){return rn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wm=/^https?/;async function Hm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Um(n);for(const t of e)try{if(jm(t))return}catch{}Fe(n,"unauthorized-domain")}function jm(n){const e=Ys(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Wm.test(t))return!1;if(zm.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=new Gn(3e4,6e4);function Qo(){const n=ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xm(n){return new Promise((e,t)=>{var i,s,r;function o(){Qo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qo(),t(Ue(n,"network-request-failed"))},timeout:Vm.get()})}if(!((s=(i=ze().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ze().gapi)===null||r===void 0)&&r.load)o();else{const a=Mp("iframefcb");return ze()[a]=()=>{gapi.load?o():t(Ue(n,"network-request-failed"))},Wl(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw bi=null,e})}let bi=null;function Km(n){return bi=bi||Xm(n),bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=new Gn(5e3,15e3),Gm="__/auth/iframe",Ym="emulator/auth/iframe",Qm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zm(n){const e=n.config;S(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sr(e,Ym):`https://${n.config.authDomain}/${Gm}`,i={apiKey:e.apiKey,appName:n.name,v:nn},s=Jm.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${tn(i).slice(1)}`}async function $m(n){const e=await Km(n),t=ze().gapi;return S(t,n,"internal-error"),e.open({where:document.body,url:Zm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qm,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ue(n,"network-request-failed"),a=ze().setTimeout(()=>{r(o)},qm.get());function l(){ze().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tg=500,ng=600,ig="_blank",sg="http://localhost";class Jo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rg(n,e,t,i=tg,s=ng){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eg),{width:i.toString(),height:s.toString(),top:r,left:o}),c=fe().toLowerCase();t&&(a=Ol(c)?ig:t),Rl(c)&&(e=e||sg,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[v,b])=>`${p}${v}=${b},`,"");if(Op(c)&&a!=="_self")return og(e||"",a),new Jo(null);const d=window.open(e||"",a,u);S(d,n,"popup-blocked");try{d.focus()}catch{}return new Jo(d)}function og(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="__/auth/handler",lg="emulator/auth/handler",cg=encodeURIComponent("fac");async function Zo(n,e,t,i,s,r){S(n.config.authDomain,n,"auth-domain-config-required"),S(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:nn,eventId:s};if(e instanceof Vl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",js(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof Qn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${cg}=${encodeURIComponent(l)}`:"";return`${ug(n)}?${tn(a).slice(1)}${c}`}function ug({config:n}){return n.emulator?Sr(n,lg):`https://${n.authDomain}/${ag}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class dg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ql,this._completeRedirectFn=Dm,this._overrideRedirectResult=Om}async _openPopup(e,t,i,s){var r;Je((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Zo(e,t,i,Ys(),s);return rg(e,o,Lr())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Zo(e,t,i,Ys(),s);return pm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Je(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await $m(e),i=new Fm(e);return t.register("authEvent",s=>(S(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ns,{type:Ns},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ns];o!==void 0&&t(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fl()||Nr()||es()}}const hg=dg;var $o="@firebase/auth",ea="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mg(n){Yt(new Ct("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bl(n)},c=new Wp(i,s,r,l);return jp(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Yt(new Ct("auth-internal",e=>{const t=on(e.getProvider("auth").getImmediate());return(i=>new fg(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut($o,ea,pg(n)),ut($o,ea,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=5*60,yg=pl("authIdTokenMaxAge")||gg;let ta=null;const bg=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>yg)return;const s=t==null?void 0:t.token;ta!==s&&(ta=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vg(n=xl()){const e=Er(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Hp(n,{popupRedirectResolver:hg,persistence:[km,dm,Ql]}),i=pl("authTokenSyncURL");if(i){const r=bg(i);rm(t,r,()=>r(t.currentUser)),sm(t,o=>r(o))}const s=hl("auth");return s&&Vp(t,`http://${s}`),t}mg("Browser");const na="@firebase/database",ia="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic="";function wg(n){ic=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:On(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return $e(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xg(e)}}catch{}return new _g},xt=sc("localStorage"),Js=sc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new kr("@firebase/database"),kg=function(){let n=1;return function(){return n++}}(),rc=function(n){const e=rf(n),t=new ef;t.update(e);const i=t.digest();return vr.encodeByteArray(i)},Zn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Zn.apply(null,i):typeof i=="object"?e+=re(i):e+=i,e+=" "}return e};let Et=null,sa=!0;const Ag=function(n,e){x(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Vt.logLevel=X.VERBOSE,Et=Vt.log.bind(Vt),e&&Js.set("logging_enabled",!0)):typeof n=="function"?Et=n:(Et=null,Js.remove("logging_enabled"))},he=function(...n){if(sa===!0&&(sa=!1,Et===null&&Js.get("logging_enabled")===!0&&Ag(!0)),Et){const e=Zn.apply(null,n);Et(e)}},$n=function(n){return function(...e){he(n,...e)}},Zs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Zn(...n);Vt.error(e)},Ze=function(...n){const e=`FIREBASE FATAL ERROR: ${Zn(...n)}`;throw Vt.error(e),new Error(e)},xe=function(...n){const e="FIREBASE WARNING: "+Zn(...n);Vt.warn(e)},Eg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Cg=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qt="[MIN_NAME]",Nt="[MAX_NAME]",ln=function(n,e){if(n===e)return 0;if(n===Qt||e===Nt)return-1;if(e===Qt||n===Nt)return 1;{const t=ra(n),i=ra(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Ig=function(n,e){return n===e?0:n<e?-1:1},bn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+re(e))},Dr=function(n){if(typeof n!="object"||n===null)return re(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=re(e[i]),t+=":",t+=Dr(n[e[i]]);return t+="}",t},ac=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function _e(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const lc=function(n){x(!oc(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(u.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},Sg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Tg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ng(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Rg=new RegExp("^-?(0*)\\d{1,10}$"),Og=-2147483648,Lg=2147483647,ra=function(n){if(Rg.test(n)){const e=Number(n);if(e>=Og&&e<=Lg)return e}return null},cn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xe("Exception was thrown by user callback.",t),e},Math.floor(0))}},Pg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},En=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(he("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class Xt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="5",cc="v",uc="s",dc="r",hc="f",fc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pc="ls",mc="p",$s="ac",gc="websocket",yc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Fg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vc(n,e,t){x(typeof e=="string","typeof type must == string"),x(typeof t=="object","typeof params must == object");let i;if(e===gc)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===yc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fg(n)&&(t.ns=n.namespace);const s=[];return _e(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.counters_={}}incrementCounter(e,t=1){$e(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Fh(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs={},Os={};function Fr(n){const e=n.toString();return Rs[e]||(Rs[e]=new Bg),Rs[e]}function Ug(n,e){const t=n.toString();return Os[t]||(Os[t]=e()),Os[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&cn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="start",Wg="close",Hg="pLPCommand",jg="pRTLPCB",wc="id",xc="pw",_c="ser",Vg="cb",Xg="seg",Kg="ts",qg="d",Gg="dframe",kc=1870,Ac=30,Yg=kc-Ac,Qg=25e3,Jg=3e4;class Ut{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$n(e),this.stats_=Fr(t),this.urlFn=l=>(this.appCheckToken&&(l[$s]=this.appCheckToken),vc(t,yc,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new zg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Jg)),Cg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Br((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===oa)this.id=a,this.password=l;else if(o===Wg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[oa]="t",i[_c]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Vg]=this.scriptTagHolder.uniqueCallbackIdentifier),i[cc]=Mr,this.transportSessionId&&(i[uc]=this.transportSessionId),this.lastSessionId&&(i[pc]=this.lastSessionId),this.applicationId&&(i[mc]=this.applicationId),this.appCheckToken&&(i[$s]=this.appCheckToken),typeof location<"u"&&location.hostname&&fc.test(location.hostname)&&(i[dc]=hc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ut.forceAllow_=!0}static forceDisallow(){Ut.forceDisallow_=!0}static isAvailable(){return Ut.forceAllow_?!0:!Ut.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sg()&&!Tg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ul(t),s=ac(i,Yg);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Gg]="t",i[wc]=e,i[xc]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Br{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kg(),window[Hg+this.uniqueCallbackIdentifier]=e,window[jg+this.uniqueCallbackIdentifier]=t,this.myIFrame=Br.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){he("frame writing exception"),a.stack&&he(a.stack),he(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||he("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wc]=this.myID,e[xc]=this.myPW,e[_c]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ac+i.length<=kc;){const o=this.pendingSegs.shift();i=i+"&"+Xg+s+"="+o.seg+"&"+Kg+s+"="+o.ts+"&"+qg+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Qg)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{he("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=16384,$g=45e3;let Oi=null;typeof MozWebSocket<"u"?Oi=MozWebSocket:typeof WebSocket<"u"&&(Oi=WebSocket);class Le{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$n(this.connId),this.stats_=Fr(t),this.connURL=Le.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[cc]=Mr,typeof location<"u"&&location.hostname&&fc.test(location.hostname)&&(o[dc]=hc),t&&(o[uc]=t),i&&(o[pc]=i),s&&(o[$s]=s),r&&(o[mc]=r),vc(e,gc,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xt.set("previous_websocket_failure",!0);try{let i;gl(),this.mySock=new Oi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Oi!==null&&!Le.forceDisallow_}static previouslyFailed(){return xt.isInMemoryStorage||xt.get("previous_websocket_failure")===!0}markConnectionHealthy(){xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=On(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ac(t,Zg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($g))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ut,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Le&&Le.isAvailable();let i=t&&!Le.previouslyFailed();if(e.webSocketOnly&&(t||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Le];else{const s=this.transports_=[];for(const r of Fn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Fn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=6e4,t0=5e3,n0=10*1024,i0=100*1024,Ls="t",aa="d",s0="s",la="r",r0="e",ca="o",ua="a",da="n",ha="p",o0="h";class a0{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$n("c:"+this.id+":"),this.transportManager_=new Fn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=En(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>i0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>n0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ls in e){const t=e[Ls];t===ua?this.upgradeIfSecondaryHealthy_():t===la?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ca&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=bn("t",e),i=bn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ha,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ua,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:da,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=bn("t",e),i=bn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=bn(Ls,e);if(aa in e){const i=e[aa];if(t===o0){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===da){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===s0?this.onConnectionShutdown_(i):t===la?this.onReset_(i):t===r0?Zs("Server Error: "+i):t===ca?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Mr!==i&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),En(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(e0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):En(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(t0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ha,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Cc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Li}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=32,pa=768;class q{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function j(){return new q("")}function M(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ft(n){return n.pieces_.length-n.pieceNum_}function Y(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new q(n.pieces_,e)}function Ic(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function l0(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Sc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Tc(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new q(e,0)}function oe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof q)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new q(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function ye(n,e){const t=M(n),i=M(e);if(t===null)return e;if(t===i)return ye(Y(n),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Nc(n,e){if(ft(n)!==ft(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Pe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ft(n)>ft(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class c0{constructor(e,t){this.errorPrefix_=t,this.parts_=Sc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=$i(this.parts_[i]);Rc(this)}}function u0(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$i(e),Rc(n)}function d0(n){const e=n.parts_.pop();n.byteLength_-=$i(e),n.parts_.length>0&&(n.byteLength_-=1)}function Rc(n){if(n.byteLength_>pa)throw new Error(n.errorPrefix_+"has a key path longer than "+pa+" bytes ("+n.byteLength_+").");if(n.parts_.length>fa)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fa+") or object contains a cycle "+wt(n))}function wt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Cc{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ur}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=1e3,h0=60*5*1e3,ma=30*1e3,f0=1.3,p0=3e4,m0="server_kill",ga=3;class Qe extends Ec{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qe.nextPersistentConnectionId_++,this.log_=$n("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vn,this.maxReconnectDelay_=h0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!gl())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ur.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Li.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(re(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Zi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Qe.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&$e(e,"w")){const i=Gt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$h(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ma)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Zh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Zs("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>p0&&(this.reconnectDelay_=vn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*f0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Qe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?he("getToken() completed but was canceled"):(he("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new a0(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,v=>{xe(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(m0)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&xe(d),l())}}}interrupt(e){he("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){he("Resuming connection for reason: "+e),delete this.interruptReasons_[e],js(this.interruptReasons_)&&(this.reconnectDelay_=vn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Dr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new q(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){he("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ga&&(this.reconnectDelay_=ma,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){he("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ga&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ic.replace(/\./g,"-")]=1,xr()?e["framework.cordova"]=1:ml()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Li.getInstance().currentlyOnline();return js(this.interruptReasons_)&&e}}Qe.nextPersistentConnectionId_=0;Qe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new L(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new L(Qt,e),s=new L(Qt,t);return this.compare(i,s)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class Oc extends is{static get __EMPTY_NODE(){return ci}static set __EMPTY_NODE(e){ci=e}compare(e,t){return ln(e.name,t.name)}isDefinedOn(e){throw en("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return L.MIN}maxPost(){return new L(Nt,ci)}makePost(e,t){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,ci)}toString(){return".key"}}const Kt=new Oc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ce.RED,this.left=s??we.EMPTY_NODE,this.right=r??we.EMPTY_NODE}copy(e,t,i,s,r){return new ce(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return we.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class g0{copy(e,t,i,s,r){return this}insert(e,t,i){return new ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class we{constructor(e,t=we.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new we(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new we(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ui(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ui(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ui(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ui(this.root_,null,this.comparator_,!0,e)}}we.EMPTY_NODE=new g0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n,e){return ln(n.name,e.name)}function zr(n,e){return ln(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;function b0(n){er=n}const Lc=function(n){return typeof n=="number"?"number:"+lc(n):"string:"+n},Pc=function(n){if(n.isLeafNode()){const e=n.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$e(e,".sv"),"Priority must be a string or number.")}else x(n===er||n.isEmpty(),"priority of unexpected type.");x(n===er||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya;class le{constructor(e,t=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pc(this.priorityNode_)}static set __childrenNodeConstructor(e){ya=e}static get __childrenNodeConstructor(){return ya}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:M(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=M(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(x(i!==".priority"||ft(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=lc(this.value_):e+=this.value_,this.lazyHash_=rc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=le.VALUE_TYPE_ORDER.indexOf(t),r=le.VALUE_TYPE_ORDER.indexOf(i);return x(s>=0,"Unknown leaf type: "+t),x(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc,Mc;function v0(n){Dc=n}function w0(n){Mc=n}class x0 extends is{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ln(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Nt,new le("[PRIORITY-POST]",Mc))}makePost(e,t){const i=Dc(e);return new L(t,new le("[PRIORITY-POST]",i))}toString(){return".priority"}}const ee=new x0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=Math.log(2);class k0{constructor(e){const t=r=>parseInt(Math.log(r)/_0,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pi=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,p;if(u===0)return null;if(u===1)return d=n[l],p=t?t(d):d,new ce(p,d.node,ce.BLACK,null,null);{const v=parseInt(u/2,10)+l,b=s(l,v),w=s(v+1,c);return d=n[v],p=t?t(d):d,new ce(p,d.node,ce.BLACK,b,w)}},r=function(l){let c=null,u=null,d=n.length;const p=function(b,w){const R=d-b,F=d;d-=b;const J=s(R+1,F),K=n[R],Te=t?t(K):K;v(new ce(Te,K.node,w,null,J))},v=function(b){c?(c.left=b,c=b):(u=b,c=b)};for(let b=0;b<l.count;++b){const w=l.nextBitIsOne(),R=Math.pow(2,l.count-(b+1));w?p(R,ce.BLACK):(p(R,ce.BLACK),p(R,ce.RED))}return u},o=new k0(n.length),a=r(o);return new we(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;const Ft={};class Ge{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return x(Ft&&ee,"ChildrenNode.ts has not been loaded"),Ps=Ps||new Ge({".priority":Ft},{".priority":ee}),Ps}get(e){const t=Gt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof we?t:null}hasIndex(e){return $e(this.indexSet_,e.toString())}addIndex(e,t){x(e!==Kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(L.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Pi(i,e.getCompare()):a=Ft;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ge(u,c)}addToIndexes(e,t){const i=ki(this.indexes_,(s,r)=>{const o=Gt(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),s===Ft)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(L.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Pi(a,o.getCompare())}else return Ft;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new L(e.name,a))),l.insert(e,e.node)}});return new Ge(i,this.indexSet_)}removeFromIndexes(e,t){const i=ki(this.indexes_,s=>{if(s===Ft)return s;{const r=t.get(e.name);return r?s.remove(new L(e.name,r)):s}});return new Ge(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn;class C{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Pc(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wn||(wn=new C(new we(zr),null,Ge.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wn}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?wn:t}}getChild(e){const t=M(e);return t===null?this:this.getImmediateChild(t).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(x(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new L(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?wn:this.priorityNode_;return new C(s,o,r)}}updateChild(e,t){const i=M(e);if(i===null)return t;{x(M(e)!==".priority"||ft(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Y(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(ee,(o,a)=>{t[o]=a.val(e),i++,r&&C.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lc(this.getPriority().val())+":"),this.forEachChild(ee,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":rc(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new L(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new L(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new L(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,L.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ei?-1:0}withIndex(e){if(e===Kt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Kt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ee),s=t.getIterator(ee);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kt?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class A0 extends C{constructor(){super(new we(zr),C.EMPTY_NODE,Ge.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const ei=new A0;Object.defineProperties(L,{MIN:{value:new L(Qt,C.EMPTY_NODE)},MAX:{value:new L(Nt,ei)}});Oc.__EMPTY_NODE=C.EMPTY_NODE;le.__childrenNodeConstructor=C;b0(ei);w0(ei);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=!0;function ue(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new le(t,ue(e))}if(!(n instanceof Array)&&E0){const t=[];let i=!1;if(_e(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ue(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new L(o,l)))}}),t.length===0)return C.EMPTY_NODE;const r=Pi(t,y0,o=>o.name,zr);if(i){const o=Pi(t,ee.getCompare());return new C(r,ue(e),new Ge({".priority":o},{".priority":ee}))}else return new C(r,ue(e),Ge.Default)}else{let t=C.EMPTY_NODE;return _e(n,(i,s)=>{if($e(n,i)&&i.substring(0,1)!=="."){const r=ue(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ue(e))}}v0(ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends is{constructor(e){super(),this.indexPath_=e,x(!D(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ln(e.name,t.name):r}makePost(e,t){const i=ue(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new L(t,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,ei);return new L(Nt,e)}toString(){return Sc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends is{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ln(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,t){const i=ue(e);return new L(t,i)}toString(){return".value"}}const S0=new I0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n){return{type:"value",snapshotNode:n}}function Jt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Bn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Un(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function T0(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Bn(t,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Jt(t,i)):o.trackChildChange(Un(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ee,(s,r)=>{t.hasChild(s)||i.trackChildChange(Bn(s,r))}),t.isLeafNode()||t.forEachChild(ee,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Un(s,r,o))}else i.trackChildChange(Jt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.indexedFilter_=new Wr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zn.getStartPost_(e),this.endPost_=zn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new L(t,i))||(i=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=C.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(ee,(o,a)=>{r.matches(new L(o,a))||(s=s.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new zn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new L(t,i))||(i=C.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,v)=>d(v,p)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new L(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let p=s.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=s.getChildAfterChild(this.index_,p,this.reverse_);const v=p==null?1:o(p,l);if(u&&!i.isEmpty()&&v>=0)return r!=null&&r.trackChildChange(Un(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Bn(t,d));const w=a.updateImmediateChild(t,C.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Jt(p.name,p.node)),w.updateImmediateChild(p.name,p.node)):w}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Bn(c.name,c.node)),r.trackChildChange(Jt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qt}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new Hr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function R0(n){return n.loadsAllData()?new Wr(n.getIndex()):n.hasLimit()?new N0(n):new zn(n)}function ba(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ee?t="$priority":n.index_===S0?t="$value":n.index_===Kt?t="$key":(x(n.index_ instanceof C0,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=re(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=re(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+re(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=re(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+re(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function va(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ee&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Ec{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=$n("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Di.getListenId_(e,i),a={};this.listens_[o]=a;const l=ba(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Gt(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",s(p,null)}})}unlisten(e,t){const i=Di.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ba(e._queryParams),i=e._path.toString(),s=new Zi;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=On(a.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(){return{value:null,children:new Map}}function Bc(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=M(e);n.children.has(i)||n.children.set(i,Mi());const s=n.children.get(i);e=Y(e),Bc(s,e,t)}}function tr(n,e,t){n.value!==null?t(e,n.value):L0(n,(i,s)=>{const r=new q(e.toString()+"/"+i);tr(s,r,t)})}function L0(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&_e(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=10*1e3,D0=30*1e3,M0=5*60*1e3;class F0{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new P0(e);const i=wa+(D0-wa)*Math.random();En(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;_e(e,(s,r)=>{r>0&&$e(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),En(this.reportStats_.bind(this),Math.floor(Math.random()*2*M0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(De||(De={}));function Uc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=De.ACK_USER_WRITE,this.source=Uc()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new q(e));return new Fi(j(),t,this.revert)}}else return x(M(this.path)===e,"operationForChild called for unrelated child."),new Fi(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.source=e,this.path=t,this.type=De.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new Wn(this.source,j()):new Wn(this.source,Y(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=De.OVERWRITE}operationForChild(e){return D(this.path)?new Rt(this.source,j(),this.snap.getImmediateChild(e)):new Rt(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=De.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new q(e));return t.isEmpty()?null:t.value?new Rt(this.source,j(),t.value):new Hn(this.source,j(),t)}else return x(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hn(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=M(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function U0(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(T0(o.childName,o.snapshotNode))}),xn(n,s,"child_removed",e,i,t),xn(n,s,"child_added",e,i,t),xn(n,s,"child_moved",r,i,t),xn(n,s,"child_changed",e,i,t),xn(n,s,"value",e,i,t),s}function xn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>W0(n,a,l)),o.forEach(a=>{const l=z0(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function z0(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function W0(n,e,t){if(e.childName==null||t.childName==null)throw en("Should only compare child_ events.");const i=new L(e.childName,e.snapshotNode),s=new L(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n,e){return{eventCache:n,serverCache:e}}function Cn(n,e,t,i){return ss(new pt(e,t,i),n.serverCache)}function zc(n,e,t,i){return ss(n.eventCache,new pt(e,t,i))}function Bi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ot(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;const H0=()=>(Ds||(Ds=new we(Ig)),Ds);class Q{constructor(e,t=H0()){this.value=e,this.children=t}static fromObject(e){let t=new Q(null);return _e(e,(i,s)=>{t=t.set(new q(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:j(),value:this.value};if(D(e))return null;{const i=M(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Y(e),t);return r!=null?{path:oe(new q(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=M(e),i=this.children.get(t);return i!==null?i.subtree(Y(e)):new Q(null)}}set(e,t){if(D(e))return new Q(t,this.children);{const i=M(e),r=(this.children.get(i)||new Q(null)).set(Y(e),t),o=this.children.insert(i,r);return new Q(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const t=M(e),i=this.children.get(t);if(i){const s=i.remove(Y(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Q(null):new Q(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=M(e),i=this.children.get(t);return i?i.get(Y(e)):null}}setTree(e,t){if(D(e))return t;{const i=M(e),r=(this.children.get(i)||new Q(null)).setTree(Y(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Q(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(oe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,j(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(D(e))return null;{const r=M(e),o=this.children.get(r);return o?o.findOnPath_(Y(e),oe(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,j(),t)}foreachOnPath_(e,t,i){if(D(e))return this;{this.value&&i(t,this.value);const s=M(e),r=this.children.get(s);return r?r.foreachOnPath_(Y(e),oe(t,s),i):new Q(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(oe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.writeTree_=e}static empty(){return new Me(new Q(null))}}function In(n,e,t){if(D(e))return new Me(new Q(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ye(s,e);return r=r.updateChild(o,t),new Me(n.writeTree_.set(s,r))}else{const s=new Q(t),r=n.writeTree_.setTree(e,s);return new Me(r)}}}function xa(n,e,t){let i=n;return _e(t,(s,r)=>{i=In(i,oe(e,s),r)}),i}function _a(n,e){if(D(e))return Me.empty();{const t=n.writeTree_.setTree(e,new Q(null));return new Me(t)}}function nr(n,e){return Lt(n,e)!=null}function Lt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ye(t.path,e)):null}function ka(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ee,(i,s)=>{e.push(new L(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new L(i,s.value))}),e}function dt(n,e){if(D(e))return n;{const t=Lt(n,e);return t!=null?new Me(new Q(t)):new Me(n.writeTree_.subtree(e))}}function ir(n){return n.writeTree_.isEmpty()}function Zt(n,e){return Wc(j(),n.writeTree_,e)}function Wc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Wc(oe(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(oe(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,e){return Xc(e,n)}function j0(n,e,t,i,s){x(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=In(n.visibleWrites,e,t)),n.lastWriteId=i}function V0(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function X0(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);x(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&K0(a,i.path)?s=!1:Pe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return q0(n),!0;if(i.snap)n.visibleWrites=_a(n.visibleWrites,i.path);else{const a=i.children;_e(a,l=>{n.visibleWrites=_a(n.visibleWrites,oe(i.path,l))})}return!0}else return!1}function K0(n,e){if(n.snap)return Pe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Pe(oe(n.path,t),e))return!0;return!1}function q0(n){n.visibleWrites=Hc(n.allWrites,G0,j()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function G0(n){return n.visible}function Hc(n,e,t){let i=Me.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Pe(t,o)?(a=ye(t,o),i=In(i,a,r.snap)):Pe(o,t)&&(a=ye(o,t),i=In(i,j(),r.snap.getChild(a)));else if(r.children){if(Pe(t,o))a=ye(t,o),i=xa(i,a,r.children);else if(Pe(o,t))if(a=ye(o,t),D(a))i=xa(i,j(),r.children);else{const l=Gt(r.children,M(a));if(l){const c=l.getChild(Y(a));i=In(i,j(),c)}}}else throw en("WriteRecord should have .snap or .children")}}return i}function jc(n,e,t,i,s){if(!i&&!s){const r=Lt(n.visibleWrites,e);if(r!=null)return r;{const o=dt(n.visibleWrites,e);if(ir(o))return t;if(t==null&&!nr(o,j()))return null;{const a=t||C.EMPTY_NODE;return Zt(o,a)}}}else{const r=dt(n.visibleWrites,e);if(!s&&ir(r))return t;if(!s&&t==null&&!nr(r,j()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Pe(c.path,e)||Pe(e,c.path))},a=Hc(n.allWrites,o,e),l=t||C.EMPTY_NODE;return Zt(a,l)}}}function Y0(n,e,t){let i=C.EMPTY_NODE;const s=Lt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ee,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=dt(n.visibleWrites,e);return t.forEachChild(ee,(o,a)=>{const l=Zt(dt(r,new q(o)),a);i=i.updateImmediateChild(o,l)}),ka(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=dt(n.visibleWrites,e);return ka(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Q0(n,e,t,i,s){x(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=oe(e,t);if(nr(n.visibleWrites,r))return null;{const o=dt(n.visibleWrites,r);return ir(o)?s.getChild(t):Zt(o,s.getChild(t))}}function J0(n,e,t,i){const s=oe(e,t),r=Lt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=dt(n.visibleWrites,s);return Zt(o,i.getNode().getImmediateChild(t))}else return null}function Z0(n,e){return Lt(n.visibleWrites,e)}function $0(n,e,t,i,s,r,o){let a;const l=dt(n.visibleWrites,e),c=Lt(l,j());if(c!=null)a=c;else if(t!=null)a=Zt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),p=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let v=p.getNext();for(;v&&u.length<s;)d(v,i)!==0&&u.push(v),v=p.getNext();return u}else return[]}function ey(){return{visibleWrites:Me.empty(),allWrites:[],lastWriteId:-1}}function Ui(n,e,t,i){return jc(n.writeTree,n.treePath,e,t,i)}function Xr(n,e){return Y0(n.writeTree,n.treePath,e)}function Aa(n,e,t,i){return Q0(n.writeTree,n.treePath,e,t,i)}function zi(n,e){return Z0(n.writeTree,oe(n.treePath,e))}function ty(n,e,t,i,s,r){return $0(n.writeTree,n.treePath,e,t,i,s,r)}function Kr(n,e,t){return J0(n.writeTree,n.treePath,e,t)}function Vc(n,e){return Xc(oe(n.treePath,e),n.writeTree)}function Xc(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;x(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),x(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Un(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Bn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Jt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Un(i,e.snapshotNode,s.oldSnap));else throw en("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Kc=new iy;class qr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new pt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ot(this.viewCache_),r=ty(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(n){return{filter:n}}function ry(n,e){x(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function oy(n,e,t,i,s){const r=new ny;let o,a;if(t.type===De.OVERWRITE){const c=t;c.source.fromUser?o=sr(n,e,c.path,c.snap,i,s,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!D(c.path),o=Wi(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===De.MERGE){const c=t;c.source.fromUser?o=ly(n,e,c.path,c.children,i,s,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=rr(n,e,c.path,c.children,i,s,a,r))}else if(t.type===De.ACK_USER_WRITE){const c=t;c.revert?o=dy(n,e,c.path,i,s,r):o=cy(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===De.LISTEN_COMPLETE)o=uy(n,e,t.path,i,r);else throw en("Unknown operation type: "+t.type);const l=r.getChanges();return ay(e,o,l),{viewCache:o,changes:l}}function ay(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Bi(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Fc(Bi(e)))}}function qc(n,e,t,i,s,r){const o=e.eventCache;if(zi(i,t)!=null)return e;{let a,l;if(D(t))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ot(e),u=c instanceof C?c:C.EMPTY_NODE,d=Xr(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Ui(i,Ot(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=M(t);if(c===".priority"){x(ft(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Aa(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=Y(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const p=Aa(i,t,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(c).updateChild(u,p):d=o.getNode().getImmediateChild(c)}else d=Kr(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return Cn(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function Wi(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(D(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const v=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),v,null)}else{const v=M(t);if(!l.isCompleteForPath(t)&&ft(t)>1)return e;const b=Y(t),R=l.getNode().getImmediateChild(v).updateChild(b,i);v===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),v,R,b,Kc,null)}const d=zc(e,c,l.isFullyInitialized()||D(t),u.filtersNodes()),p=new qr(s,d,r);return qc(n,d,t,s,p,a)}function sr(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new qr(s,e,r);if(D(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Cn(e,c,!0,n.filter.filtersNodes());else{const d=M(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Cn(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Y(t),v=a.getNode().getImmediateChild(d);let b;if(D(p))b=i;else{const w=u.getCompleteChild(d);w!=null?Ic(p)===".priority"&&w.getChild(Tc(p)).isEmpty()?b=w:b=w.updateChild(p,i):b=C.EMPTY_NODE}if(v.equals(b))l=e;else{const w=n.filter.updateChild(a.getNode(),d,b,p,u,o);l=Cn(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ea(n,e){return n.eventCache.isCompleteForChild(e)}function ly(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=oe(t,l);Ea(e,M(u))&&(a=sr(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=oe(t,l);Ea(e,M(u))||(a=sr(n,a,u,c,s,r,o))}),a}function Ca(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function rr(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;D(t)?c=i:c=new Q(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,p)=>{if(u.hasChild(d)){const v=e.serverCache.getNode().getImmediateChild(d),b=Ca(n,v,p);l=Wi(n,l,new q(d),b,s,r,o,a)}}),c.children.inorderTraversal((d,p)=>{const v=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!u.hasChild(d)&&!v){const b=e.serverCache.getNode().getImmediateChild(d),w=Ca(n,b,p);l=Wi(n,l,new q(d),w,s,r,o,a)}}),l}function cy(n,e,t,i,s,r,o){if(zi(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(D(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Wi(n,e,t,l.getNode().getChild(t),s,r,a,o);if(D(t)){let c=new Q(null);return l.getNode().forEachChild(Kt,(u,d)=>{c=c.set(new q(u),d)}),rr(n,e,t,c,s,r,a,o)}else return e}else{let c=new Q(null);return i.foreach((u,d)=>{const p=oe(t,u);l.isCompleteForPath(p)&&(c=c.set(u,l.getNode().getChild(p)))}),rr(n,e,t,c,s,r,a,o)}}function uy(n,e,t,i,s){const r=e.serverCache,o=zc(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return qc(n,o,t,i,Kc,s)}function dy(n,e,t,i,s,r){let o;if(zi(i,t)!=null)return e;{const a=new qr(i,e,s),l=e.eventCache.getNode();let c;if(D(t)||M(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ui(i,Ot(e));else{const d=e.serverCache.getNode();x(d instanceof C,"serverChildren would be complete if leaf node"),u=Xr(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=M(t);let d=Kr(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,Y(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,C.EMPTY_NODE,Y(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ui(i,Ot(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||zi(i,j())!=null,Cn(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Wr(i.getIndex()),r=R0(i);this.processor_=sy(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),u=new pt(l,o.isFullyInitialized(),s.filtersNodes()),d=new pt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ss(d,u),this.eventGenerator_=new B0(this.query_)}get query(){return this.query_}}function fy(n){return n.viewCache_.serverCache.getNode()}function py(n){return Bi(n.viewCache_)}function my(n,e){const t=Ot(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(M(e)).isEmpty())?t.getChild(e):null}function Ia(n){return n.eventRegistrations_.length===0}function gy(n,e){n.eventRegistrations_.push(e)}function Sa(n,e,t){const i=[];if(t){x(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Ta(n,e,t,i){e.type===De.MERGE&&e.source.queryId!==null&&(x(Ot(n.viewCache_),"We should always have a full cache before handling merges"),x(Bi(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=oy(n.processor_,s,e,t,i);return ry(n.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Gc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function yy(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ee,(r,o)=>{i.push(Jt(r,o))}),t.isFullyInitialized()&&i.push(Fc(t.getNode())),Gc(n,i,t.getNode(),e)}function Gc(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return U0(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;class Yc{constructor(){this.views=new Map}}function by(n){x(!Hi,"__referenceConstructor has already been defined"),Hi=n}function vy(){return x(Hi,"Reference.ts has not been loaded"),Hi}function wy(n){return n.views.size===0}function Gr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return x(r!=null,"SyncTree gave us an op for an invalid query."),Ta(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Ta(o,e,t,i));return r}}function Qc(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ui(t,s?i:null),l=!1;a?l=!0:i instanceof C?(a=Xr(t,i),l=!1):(a=C.EMPTY_NODE,l=!1);const c=ss(new pt(a,l,!1),new pt(i,s,!1));return new hy(e,c)}return o}function xy(n,e,t,i,s,r){const o=Qc(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),gy(o,t),yy(o,t)}function _y(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=mt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Sa(c,t,i)),Ia(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Sa(l,t,i)),Ia(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!mt(n)&&r.push(new(vy())(e._repo,e._path)),{removed:r,events:o}}function Jc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ht(n,e){let t=null;for(const i of n.views.values())t=t||my(i,e);return t}function Zc(n,e){if(e._queryParams.loadsAllData())return os(n);{const i=e._queryIdentifier;return n.views.get(i)}}function $c(n,e){return Zc(n,e)!=null}function mt(n){return os(n)!=null}function os(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;function ky(n){x(!ji,"__referenceConstructor has already been defined"),ji=n}function Ay(){return x(ji,"Reference.ts has not been loaded"),ji}let Ey=1;class Na{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=ey(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eu(n,e,t,i,s){return j0(n.pendingWriteTree_,e,t,i,s),s?ni(n,new Rt(Uc(),e,t)):[]}function _t(n,e,t=!1){const i=V0(n.pendingWriteTree_,e);if(X0(n.pendingWriteTree_,e)){let r=new Q(null);return i.snap!=null?r=r.set(j(),!0):_e(i.children,o=>{r=r.set(new q(o),!0)}),ni(n,new Fi(i.path,r,t))}else return[]}function ti(n,e,t){return ni(n,new Rt(jr(),e,t))}function Cy(n,e,t){const i=Q.fromObject(t);return ni(n,new Hn(jr(),e,i))}function Iy(n,e){return ni(n,new Wn(jr(),e))}function Sy(n,e,t){const i=Qr(n,t);if(i){const s=Jr(i),r=s.path,o=s.queryId,a=ye(r,e),l=new Wn(Vr(o),a);return Zr(n,r,l)}else return[]}function tu(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||$c(o,e))){const l=_y(o,e,t,i);wy(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(p,v)=>mt(v));if(u&&!d){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const v=Oy(p);for(let b=0;b<v.length;++b){const w=v[b],R=w.query,F=ru(n,w);n.listenProvider_.startListening(Sn(R),jn(n,R),F.hashFn,F.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Sn(e),null):c.forEach(p=>{const v=n.queryToTagMap.get(as(p));n.listenProvider_.stopListening(Sn(p),v)}))}Ly(n,c)}return a}function nu(n,e,t,i){const s=Qr(n,i);if(s!=null){const r=Jr(s),o=r.path,a=r.queryId,l=ye(o,e),c=new Rt(Vr(a),l,t);return Zr(n,o,c)}else return[]}function Ty(n,e,t,i){const s=Qr(n,i);if(s){const r=Jr(s),o=r.path,a=r.queryId,l=ye(o,e),c=Q.fromObject(t),u=new Hn(Vr(a),l,c);return Zr(n,o,u)}else return[]}function Ny(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(p,v)=>{const b=ye(p,s);r=r||ht(v,b),o=o||mt(v)});let a=n.syncPointTree_.get(s);a?(o=o||mt(a),r=r||ht(a,j())):(a=new Yc,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,b)=>{const w=ht(b,j());w&&(r=r.updateImmediateChild(v,w))}));const c=$c(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=as(e);x(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const v=Py();n.queryToTagMap.set(p,v),n.tagToQueryMap.set(v,p)}const u=rs(n.pendingWriteTree_,s);let d=xy(a,e,t,u,r,l);if(!c&&!o&&!i){const p=Zc(a,e);d=d.concat(Dy(n,e,p))}return d}function Yr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ye(o,e),c=ht(a,l);if(c)return c});return jc(s,e,r,t,!0)}function Ry(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const d=ye(c,t);i=i||ht(u,d)});let s=n.syncPointTree_.get(t);s?i=i||ht(s,j()):(s=new Yc,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new pt(i,!0,!1):null,a=rs(n.pendingWriteTree_,e._path),l=Qc(s,e,a,r?o.getNode():C.EMPTY_NODE,r);return py(l)}function ni(n,e){return iu(e,n.syncPointTree_,null,rs(n.pendingWriteTree_,j()))}function iu(n,e,t,i){if(D(n.path))return su(n,e,t,i);{const s=e.get(j());t==null&&s!=null&&(t=ht(s,j()));let r=[];const o=M(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Vc(i,o);r=r.concat(iu(a,l,c,u))}return s&&(r=r.concat(Gr(s,n,i,t))),r}}function su(n,e,t,i){const s=e.get(j());t==null&&s!=null&&(t=ht(s,j()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Vc(i,o),u=n.operationForChild(o);u&&(r=r.concat(su(u,a,l,c)))}),s&&(r=r.concat(Gr(s,n,i,t))),r}function ru(n,e){const t=e.query,i=jn(n,t);return{hashFn:()=>(fy(e)||C.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Sy(n,t._path,i):Iy(n,t._path);{const r=Ng(s,t);return tu(n,t,null,r)}}}}function jn(n,e){const t=as(e);return n.queryToTagMap.get(t)}function as(n){return n._path.toString()+"$"+n._queryIdentifier}function Qr(n,e){return n.tagToQueryMap.get(e)}function Jr(n){const e=n.indexOf("$");return x(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new q(n.substr(0,e))}}function Zr(n,e,t){const i=n.syncPointTree_.get(e);x(i,"Missing sync point for query tag that we're tracking");const s=rs(n.pendingWriteTree_,e);return Gr(i,t,s,null)}function Oy(n){return n.fold((e,t,i)=>{if(t&&mt(t))return[os(t)];{let s=[];return t&&(s=Jc(t)),_e(i,(r,o)=>{s=s.concat(o)}),s}})}function Sn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Ay())(n._repo,n._path):n}function Ly(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=as(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Py(){return Ey++}function Dy(n,e,t){const i=e._path,s=jn(n,e),r=ru(n,t),o=n.listenProvider_.startListening(Sn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)x(!mt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!D(c)&&u&&mt(u))return[os(u).query];{let p=[];return u&&(p=p.concat(Jc(u).map(v=>v.query))),_e(d,(v,b)=>{p=p.concat(b)}),p}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Sn(u),jn(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $r(t)}node(){return this.node_}}class eo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=oe(this.path_,e);return new eo(this.syncTree_,t)}node(){return Yr(this.syncTree_,this.path_)}}const My=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ra=function(n,e,t){if(!n||typeof n!="object")return n;if(x(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Fy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return By(n[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Fy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:x(!1,"Unexpected server value: "+n)}},By=function(n,e,t){n.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&x(!1,"Unexpected increment value: "+i);const s=e.node();if(x(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Uy=function(n,e,t,i){return to(e,new eo(t,n),i)},ou=function(n,e,t){return to(n,new $r(e),t)};function to(n,e,t){const i=n.getPriority().val(),s=Ra(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ra(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new le(a,ue(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new le(s))),o.forEachChild(ee,(a,l)=>{const c=to(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function io(n,e){let t=e instanceof q?e:new q(e),i=n,s=M(t);for(;s!==null;){const r=Gt(i.node.children,s)||{children:{},childCount:0};i=new no(s,i,r),t=Y(t),s=M(t)}return i}function un(n){return n.node.value}function au(n,e){n.node.value=e,or(n)}function lu(n){return n.node.childCount>0}function zy(n){return un(n)===void 0&&!lu(n)}function ls(n,e){_e(n.node.children,(t,i)=>{e(new no(t,n,i))})}function cu(n,e,t,i){t&&!i&&e(n),ls(n,s=>{cu(s,e,!0,i)}),t&&i&&e(n)}function Wy(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ii(n){return new q(n.parent===null?n.name:ii(n.parent)+"/"+n.name)}function or(n){n.parent!==null&&Hy(n.parent,n.name,n)}function Hy(n,e,t){const i=zy(t),s=$e(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,or(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,or(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=/[\[\].#$\/\u0000-\u001F\u007F]/,Vy=/[\[\].#$\u0000-\u001F\u007F]/,Ms=10*1024*1024,uu=function(n){return typeof n=="string"&&n.length!==0&&!jy.test(n)},du=function(n){return typeof n=="string"&&n.length!==0&&!Vy.test(n)},Xy=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),du(n)},Ky=function(n,e,t,i){i&&e===void 0||so(_r(n,"value"),e,t)},so=function(n,e,t){const i=t instanceof q?new c0(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wt(i));if(typeof e=="function")throw new Error(n+"contains a function "+wt(i)+" with contents = "+e.toString());if(oc(e))throw new Error(n+"contains "+e.toString()+" "+wt(i));if(typeof e=="string"&&e.length>Ms/3&&$i(e)>Ms)throw new Error(n+"contains a string greater than "+Ms+" utf8 bytes "+wt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(_e(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!uu(o)))throw new Error(n+" contains an invalid key ("+o+") "+wt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);u0(i,o),so(n,a,i),d0(i)}),s&&r)throw new Error(n+' contains ".value" child '+wt(i)+" in addition to actual children.")}},hu=function(n,e,t,i){if(!(i&&t===void 0)&&!du(t))throw new Error(_r(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qy=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hu(n,e,t,i)},Gy=function(n,e){if(M(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Yy=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!uu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Xy(t))throw new Error(_r(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fu(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Nc(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function We(n,e,t){fu(n,t),Jy(n,i=>Pe(i,e)||Pe(e,i))}function Jy(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Zy(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Zy(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Et&&he("event: "+t.toString()),cn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="repo_interrupt",eb=25;class tb{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mi(),this.transactionQueueTree_=new no,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nb(n,e,t){if(n.stats_=Fr(n.repoInfo_),n.forceRestClient_||Pg())n.server_=new Di(n.repoInfo_,(i,s,r,o)=>{Oa(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>La(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Qe(n.repoInfo_,e,(i,s,r,o)=>{Oa(n,i,s,r,o)},i=>{La(n,i)},i=>{sb(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Ug(n.repoInfo_,()=>new F0(n.stats_,n.server_)),n.infoData_=new O0,n.infoSyncTree_=new Na({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=ti(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),oo(n,"connected",!1),n.serverSyncTree_=new Na({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);We(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ib(n){const t=n.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ro(n){return My({timestamp:ib(n)})}function Oa(n,e,t,i,s){n.dataUpdateCount++;const r=new q(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=ki(t,c=>ue(c));o=Ty(n.serverSyncTree_,r,l,s)}else{const l=ue(t);o=nu(n.serverSyncTree_,r,l,s)}else if(i){const l=ki(t,c=>ue(c));o=Cy(n.serverSyncTree_,r,l)}else{const l=ue(t);o=ti(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=us(n,r)),We(n.eventQueue_,a,o)}function La(n,e){oo(n,"connected",e),e===!1&&ab(n)}function sb(n,e){_e(e,(t,i)=>{oo(n,t,i)})}function oo(n,e,t){const i=new q("/.info/"+e),s=ue(t);n.infoData_.updateSnapshot(i,s);const r=ti(n.infoSyncTree_,i,s);We(n.eventQueue_,i,r)}function pu(n){return n.nextWriteId_++}function rb(n,e,t){const i=Ry(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=ue(s).withIndex(e._queryParams.getIndex());Ny(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=ti(n.serverSyncTree_,e._path,r);else{const a=jn(n.serverSyncTree_,e);o=nu(n.serverSyncTree_,e._path,r,a)}return We(n.eventQueue_,e._path,o),tu(n.serverSyncTree_,e,t,null,!0),r},s=>(cs(n,"get for query "+re(e)+" failed: "+s),Promise.reject(new Error(s))))}function ob(n,e,t,i,s){cs(n,"set",{path:e.toString(),value:t,priority:i});const r=ro(n),o=ue(t,i),a=Yr(n.serverSyncTree_,e),l=ou(o,a,r),c=pu(n),u=eu(n.serverSyncTree_,e,l,c,!0);fu(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(p,v)=>{const b=p==="ok";b||xe("set at "+e+" failed: "+p);const w=_t(n.serverSyncTree_,c,!b);We(n.eventQueue_,e,w),cb(n,s,p,v)});const d=vu(n,e);us(n,d),We(n.eventQueue_,d,[])}function ab(n){cs(n,"onDisconnectEvents");const e=ro(n),t=Mi();tr(n.onDisconnect_,j(),(s,r)=>{const o=Uy(s,r,n.serverSyncTree_,e);Bc(t,s,o)});let i=[];tr(t,j(),(s,r)=>{i=i.concat(ti(n.serverSyncTree_,s,r));const o=vu(n,s);us(n,o)}),n.onDisconnect_=Mi(),We(n.eventQueue_,j(),i)}function lb(n){n.persistentConnection_&&n.persistentConnection_.interrupt($y)}function cs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),he(t,...e)}function cb(n,e,t,i){e&&cn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function mu(n,e,t){return Yr(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function ao(n,e=n.transactionQueueTree_){if(e||ds(n,e),un(e)){const t=yu(n,e);x(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&ub(n,ii(e),t)}else lu(e)&&ls(e,t=>{ao(n,t)})}function ub(n,e,t){const i=t.map(c=>c.currentWriteId),s=mu(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ye(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{cs(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let p=0;p<t.length;p++)t[p].status=2,u=u.concat(_t(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&d.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();ds(n,io(n.transactionQueueTree_,e)),ao(n,n.transactionQueueTree_),We(n.eventQueue_,e,u);for(let p=0;p<d.length;p++)cn(d[p])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{xe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}us(n,e)}},o)}function us(n,e){const t=gu(n,e),i=ii(t),s=yu(n,t);return db(n,s,i),i}function db(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ye(t,l.path);let u=!1,d;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(_t(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=eb)u=!0,d="maxretry",s=s.concat(_t(n.serverSyncTree_,l.currentWriteId,!0));else{const p=mu(n,l.path,o);l.currentInputSnapshot=p;const v=e[a].update(p.val());if(v!==void 0){so("transaction failed: Data returned ",v,l.path);let b=ue(v);typeof v=="object"&&v!=null&&$e(v,".priority")||(b=b.updatePriority(p.getPriority()));const R=l.currentWriteId,F=ro(n),J=ou(b,p,F);l.currentOutputSnapshotRaw=b,l.currentOutputSnapshotResolved=J,l.currentWriteId=pu(n),o.splice(o.indexOf(R),1),s=s.concat(eu(n.serverSyncTree_,l.path,J,l.currentWriteId,l.applyLocally)),s=s.concat(_t(n.serverSyncTree_,R,!0))}else u=!0,d="nodata",s=s.concat(_t(n.serverSyncTree_,l.currentWriteId,!0))}We(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}ds(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)cn(i[a]);ao(n,n.transactionQueueTree_)}function gu(n,e){let t,i=n.transactionQueueTree_;for(t=M(e);t!==null&&un(i)===void 0;)i=io(i,t),e=Y(e),t=M(e);return i}function yu(n,e){const t=[];return bu(n,e,t),t.sort((i,s)=>i.order-s.order),t}function bu(n,e,t){const i=un(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ls(e,s=>{bu(n,s,t)})}function ds(n,e){const t=un(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,au(e,t.length>0?t:void 0)}ls(e,i=>{ds(n,i)})}function vu(n,e){const t=ii(gu(n,e)),i=io(n.transactionQueueTree_,e);return Wy(i,s=>{Fs(n,s)}),Fs(n,i),cu(i,s=>{Fs(n,s)}),t}function Fs(n,e){const t=un(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(x(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(_t(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?au(e,void 0):t.length=r+1,We(n.eventQueue_,ii(e),s);for(let o=0;o<i.length;o++)cn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function fb(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Pa=function(n,e){const t=pb(n),i=t.namespace;t.domain==="firebase.com"&&Ze(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ze("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Eg();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new bc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new q(t.pathString)}},pb=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=hb(n.substring(u,d)));const p=fb(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const b=e.indexOf(".");i=e.substring(0,b).toLowerCase(),t=e.substring(b+1),r=i}"ns"in p&&(r=p.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class gb{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return D(this._path)?null:Ic(this._path)}get ref(){return new et(this._repo,this._path)}get _queryIdentifier(){const e=va(this._queryParams),t=Dr(e);return t==="{}"?"default":t}get _queryObject(){return va(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof lo))return!1;const t=this._repo===e._repo,i=Nc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+l0(this._path)}}class et extends lo{constructor(e,t){super(e,t,new Hr,!1)}get parent(){const e=Tc(this._path);return e===null?null:new et(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new q(e),i=Vi(this.ref,e);return new Vn(this._node.getChild(t),i,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Vn(s,Vi(this.ref,i),ee)))}hasChild(e){const t=new q(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wu(n,e){return n=be(n),n._checkNotDeleted("ref"),e!==void 0?Vi(n._root,e):n._root}function Vi(n,e){return n=be(n),M(n._path)===null?qy("child","path",e,!1):hu("child","path",e,!1),new et(n._repo,oe(n._path,e))}function bb(n,e){n=be(n),Gy("set",n._path),Ky("set",e,n._path,!1);const t=new Zi;return ob(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function vb(n){n=be(n);const e=new yb(()=>{}),t=new co(e);return rb(n._repo,n,t).then(i=>new Vn(i,new et(n._repo,n._path),n._queryParams.getIndex()))}class co{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new mb("value",this,new Vn(e.snapshotNode,new et(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new gb(this,e,t):null}matches(e){return e instanceof co?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}by(et);ky(et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="FIREBASE_DATABASE_EMULATOR_HOST",ar={};let xb=!1;function _b(n,e,t,i){n.repoInfo_=new bc(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function kb(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ze("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),he("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Pa(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[wb]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Pa(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Xt(Xt.OWNER):new Mg(n.name,n.options,e);Yy("Invalid Firebase Database URL",o),D(o.path)||Ze("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Eb(a,n,u,new Dg(n.name,t));return new Cb(d,n)}function Ab(n,e){const t=ar[e];(!t||t[n.key]!==n)&&Ze(`Database ${e}(${n.repoInfo_}) has already been deleted.`),lb(n),delete t[n.key]}function Eb(n,e,t,i){let s=ar[e.name];s||(s={},ar[e.name]=s);let r=s[n.toURLString()];return r&&Ze("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tb(n,xb,t,i),s[n.toURLString()]=r,r}class Cb{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new et(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ab(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ze("Cannot call "+e+" on a deleted database.")}}function xu(n=xl(),e){const t=Er(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=jh("database");i&&Ib(t,...i)}return t}function Ib(n,e,t,i={}){n=be(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ze("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ze('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Xt(Xt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Vh(i.mockUserToken,n.app.options.projectId);r=new Xt(o)}_b(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(n){wg(nn),Yt(new Ct("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return kb(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ut(na,ia,n),ut(na,ia,"esm2017")}Qe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Qe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Sb();const Tb={apiKey:"AIzaSyBx4zf6NHwO4OZAhfdRwgnrw82frbnmrqE",authDomain:"authfun-db86b.firebaseapp.com",projectId:"authfun-db86b",storageBucket:"authfun-db86b.appspot.com",messagingSenderId:"633729331271",appId:"1:633729331271:web:52edc53f6e9f6aae5cc162",databaseURL:"https://authfun-db86b-default-rtdb.europe-west1.firebasedatabase.app/"},_u=wl(Tb),hs=vg(),Nb=xu(_u),dn=document.querySelector(".sign-up"),hn=document.querySelector(".sign-in"),Rb=document.querySelector(".sing-up-link"),Ob=document.querySelector(".sing-in-link"),si=document.querySelector(".backdrop-auth"),Lb=document.querySelectorAll(".input-login"),lr=document.querySelectorAll(".label"),Pb=document.querySelector(".modal-auth-close-btn"),Db=document.querySelector(".js-modal"),Xi=document.querySelector(".js-signed-home-btn"),ku=document.querySelector(".header-nav-item"),cr=document.querySelector(".header-user-modal-out"),ur=document.querySelector(".header-user-modal.js-modal-autoriz-open"),Da=document.querySelector(".header-nav-item-modal"),uo=document.querySelector(".js-modal-autoriz-open"),Mb=document.querySelector(".header-user.js-modal-autoriz-open.js-logout"),Au=document.querySelector(".js-logout"),Fb=document.querySelector(".js-open-menu");dn.addEventListener("submit",jb);hn.addEventListener("submit",Hb);Ob.addEventListener("click",zb);Rb.addEventListener("click",Wb);Pb.addEventListener("click",Ub);uo.addEventListener("click",()=>{si.classList.remove("is-hidden")});cr.addEventListener("click",Eu);Au.addEventListener("click",Eu);ur.addEventListener("click",()=>{si.classList.remove("is-hidden"),console.log("click")});Lb.forEach((n,e)=>{n.addEventListener("input",function(){n.value!==""?lr[e].classList.add("input-filled"):lr[e].classList.remove("input-filled")})});Xi.addEventListener("click",Bb);function Bb(){Mb.classList.toggle("hidden-log")}function Ub(){si.classList.add("is-hidden"),hn.reset(),dn.reset(),lr.forEach(n=>{n.classList.remove("input-filled")})}om(hs,n=>{if(n){const e=n.uid;ho(e),cr.classList.remove("is-hidden"),ur.classList.add("is-hidden"),Da.classList.remove("is-hidden")/console.log("you in")}else console.log("you out"),uo.classList.remove("is-hidden"),Xi.classList.add("is-none"),ku.classList.add("is-hidden"),Da.classList.add("is-hidden"),ur.classList.remove("is-hidden"),cr.classList.add("is-hidden"),Au.classList.add("hidden-log")});function zb(n){n.preventDefault(),dn.classList.add("is-hidden"),hn.classList.remove("is-hidden")}function Wb(n){n.preventDefault(),dn.classList.remove("is-hidden"),hn.classList.add("is-hidden")}async function Hb(n){n.preventDefault();const{elements:{userEmail:e,userName:t,userPassword:i}}=n.currentTarget,s=e.value,r=i.value;try{const a=(await im(hs,s,r)).user.uid;console.log("U a Loggined"),localStorage.setItem("isAuthenticated",JSON.stringify(!0)),si.classList.add("is-hidden"),ho(a),dn.reset(),hn.reset()}catch(o){console.log(o),kt.Notify.failure("Something goes wrong!Try again")}}async function jb(n){n.preventDefault();const{elements:{userEmail:e,userName:t,userPassword:i}}=n.currentTarget,s=e.value,r=i.value,o=t.value;try{if(o===""){kt.Notify.failure("Write your Name");return}const a=await nm(hs,s,r),l=a.user.uid;localStorage.setItem("userName",o),localStorage.setItem("isAuthenticated",JSON.stringify(!0)),console.log(a.user),Xb(l,o),console.log("u a create acc!"),ho(l),si.classList.add("is-hidden"),dn.reset(),hn.reset(),kt.Notify.success("You successfuly create Accaunt!")}catch(a){console.log(a),kt.Notify.failure("Something goes wrong!Try again")}}async function Eu(){await am(hs),kt.Notify.success("You successfuly LogedOut!"),Db.style.display="none",Fb.classList.remove("hidden"),localStorage.setItem("isAuthenticated",JSON.stringify(!1))}function ho(n){const e=wu(xu(_u));vb(Vi(e,`users/${n}`)).then(t=>{if(t.exists()){const s=`<svg class="user-icon"><use href="../images/sprite.svg#icon-user-1"></use></svg>${Vb(t.val().username)}`;Xi.innerHTML=s}else console.log("No data available")}).catch(t=>{console.error(t)}),ku.classList.remove("is-hidden"),uo.classList.add("is-hidden"),Xi.classList.remove("is-none")}function Vb(n){return n.length>7?n.substring(0,7)+"...":n}function Xb(n,e){bb(wu(Nb,"users/"+n),{username:e})}export{kt as N,tl as a,Ie as b,zt as c,qb as f,Mu as g,rh as l,Kb as n};
