var Ga=Object.defineProperty;var Qa=(i,e,t)=>e in i?Ga(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Lr=(i,e,t)=>Qa(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ys(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const J={},ti=[],st=()=>{},Ja=()=>!1,Vn=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Xs=i=>i.startsWith("onUpdate:"),pe=Object.assign,Zs=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Ya=Object.prototype.hasOwnProperty,W=(i,e)=>Ya.call(i,e),L=Array.isArray,_i=i=>Nn(i)==="[object Map]",Xa=i=>Nn(i)==="[object Set]",B=i=>typeof i=="function",de=i=>typeof i=="string",hi=i=>typeof i=="symbol",ae=i=>i!==null&&typeof i=="object",Qo=i=>(ae(i)||B(i))&&B(i.then)&&B(i.catch),Za=Object.prototype.toString,Nn=i=>Za.call(i),Ka=i=>Nn(i).slice(8,-1),ec=i=>Nn(i)==="[object Object]",Ks=i=>de(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Di=Ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jn=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},tc=/-(\w)/g,$t=jn(i=>i.replace(tc,(e,t)=>t?t.toUpperCase():"")),ic=/\B([A-Z])/g,zt=jn(i=>i.replace(ic,"-$1").toLowerCase()),Jo=jn(i=>i.charAt(0).toUpperCase()+i.slice(1)),rs=jn(i=>i?`on${Jo(i)}`:""),xt=(i,e)=>!Object.is(i,e),$n=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Yo=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Es=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Mr;const zn=()=>Mr||(Mr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function er(i){if(L(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=de(n)?oc(n):er(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(de(i)||ae(i))return i}const nc=/;(?![^(]*\))/g,sc=/:([^]+)/,rc=/\/\*[^]*?\*\//g;function oc(i){const e={};return i.replace(rc,"").split(nc).forEach(t=>{if(t){const n=t.split(sc);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function tr(i){let e="";if(de(i))e=i;else if(L(i))for(let t=0;t<i.length;t++){const n=tr(i[t]);n&&(e+=n+" ")}else if(ae(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const lc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ac=Ys(lc);function Xo(i){return!!i||i===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class Zo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!e&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Le;try{return Le=this,e()}finally{Le=t}}}on(){Le=this}off(){Le=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cc(i){return new Zo(i)}function dc(){return Le}let Z;const os=new WeakSet;class Ko{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,os.has(this)&&(os.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hr(this),il(this);const e=Z,t=qe;Z=this,qe=!0;try{return this.fn()}finally{nl(this),Z=e,qe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sr(e);this.deps=this.depsTail=void 0,Hr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?os.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_s(this)&&this.run()}get dirty(){return _s(this)}}let el=0,Pi,Fi;function tl(i,e=!1){if(i.flags|=8,e){i.next=Fi,Fi=i;return}i.next=Pi,Pi=i}function ir(){el++}function nr(){if(--el>0)return;if(Fi){let e=Fi;for(Fi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Pi;){let e=Pi;for(Pi=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function il(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function nl(i){let e,t=i.depsTail,n=t;for(;n;){const s=n.prevDep;n.version===-1?(n===t&&(t=s),sr(n),uc(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=e,i.depsTail=t}function _s(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function sl(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Ui))return;i.globalVersion=Ui;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!_s(i)){i.flags&=-3;return}const t=Z,n=qe;Z=i,qe=!0;try{il(i);const s=i.fn(i._value);(e.version===0||xt(s,i._value))&&(i._value=s,e.version++)}catch(s){throw e.version++,s}finally{Z=t,qe=n,nl(i),i.flags&=-3}}function sr(i,e=!1){const{dep:t,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)sr(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function uc(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let qe=!0;const rl=[];function It(){rl.push(qe),qe=!1}function St(){const i=rl.pop();qe=i===void 0?!0:i}function Hr(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Z;Z=void 0;try{e()}finally{Z=t}}}let Ui=0,hc=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class rr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Z||!qe||Z===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Z)t=this.activeLink=new hc(Z,this),Z.deps?(t.prevDep=Z.depsTail,Z.depsTail.nextDep=t,Z.depsTail=t):Z.deps=Z.depsTail=t,ol(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Z.depsTail,t.nextDep=void 0,Z.depsTail.nextDep=t,Z.depsTail=t,Z.deps===t&&(Z.deps=n)}return t}trigger(e){this.version++,Ui++,this.notify(e)}notify(e){ir();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{nr()}}}function ol(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)ol(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Ds=new WeakMap,Vt=Symbol(""),Ps=Symbol(""),qi=Symbol("");function ue(i,e,t){if(qe&&Z){let n=Ds.get(i);n||Ds.set(i,n=new Map);let s=n.get(t);s||(n.set(t,s=new rr),s.map=n,s.key=t),s.track()}}function dt(i,e,t,n,s,r){const o=Ds.get(i);if(!o){Ui++;return}const l=a=>{a&&a.trigger()};if(ir(),e==="clear")o.forEach(l);else{const a=L(i),d=a&&Ks(t);if(a&&t==="length"){const c=Number(n);o.forEach((h,b)=>{(b==="length"||b===qi||!hi(b)&&b>=c)&&l(h)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),d&&l(o.get(qi)),e){case"add":a?d&&l(o.get("length")):(l(o.get(Vt)),_i(i)&&l(o.get(Ps)));break;case"delete":a||(l(o.get(Vt)),_i(i)&&l(o.get(Ps)));break;case"set":_i(i)&&l(o.get(Vt));break}}nr()}function Qt(i){const e=q(i);return e===i?e:(ue(e,"iterate",qi),We(i)?e:e.map(Ce))}function or(i){return ue(i=q(i),"iterate",qi),i}const fc={__proto__:null,[Symbol.iterator](){return ls(this,Symbol.iterator,Ce)},concat(...i){return Qt(this).concat(...i.map(e=>L(e)?Qt(e):e))},entries(){return ls(this,"entries",i=>(i[1]=Ce(i[1]),i))},every(i,e){return ot(this,"every",i,e,void 0,arguments)},filter(i,e){return ot(this,"filter",i,e,t=>t.map(Ce),arguments)},find(i,e){return ot(this,"find",i,e,Ce,arguments)},findIndex(i,e){return ot(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return ot(this,"findLast",i,e,Ce,arguments)},findLastIndex(i,e){return ot(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return ot(this,"forEach",i,e,void 0,arguments)},includes(...i){return as(this,"includes",i)},indexOf(...i){return as(this,"indexOf",i)},join(i){return Qt(this).join(i)},lastIndexOf(...i){return as(this,"lastIndexOf",i)},map(i,e){return ot(this,"map",i,e,void 0,arguments)},pop(){return ki(this,"pop")},push(...i){return ki(this,"push",i)},reduce(i,...e){return Vr(this,"reduce",i,e)},reduceRight(i,...e){return Vr(this,"reduceRight",i,e)},shift(){return ki(this,"shift")},some(i,e){return ot(this,"some",i,e,void 0,arguments)},splice(...i){return ki(this,"splice",i)},toReversed(){return Qt(this).toReversed()},toSorted(i){return Qt(this).toSorted(i)},toSpliced(...i){return Qt(this).toSpliced(...i)},unshift(...i){return ki(this,"unshift",i)},values(){return ls(this,"values",Ce)}};function ls(i,e,t){const n=or(i),s=n[e]();return n!==i&&!We(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const pc=Array.prototype;function ot(i,e,t,n,s,r){const o=or(i),l=o!==i&&!We(i),a=o[e];if(a!==pc[e]){const h=a.apply(i,r);return l?Ce(h):h}let d=t;o!==i&&(l?d=function(h,b){return t.call(this,Ce(h),b,i)}:t.length>2&&(d=function(h,b){return t.call(this,h,b,i)}));const c=a.call(o,d,n);return l&&s?s(c):c}function Vr(i,e,t,n){const s=or(i);let r=t;return s!==i&&(We(i)?t.length>3&&(r=function(o,l,a){return t.call(this,o,l,a,i)}):r=function(o,l,a){return t.call(this,o,Ce(l),a,i)}),s[e](r,...n)}function as(i,e,t){const n=q(i);ue(n,"iterate",qi);const s=n[e](...t);return(s===-1||s===!1)&&dr(t[0])?(t[0]=q(t[0]),n[e](...t)):s}function ki(i,e,t=[]){It(),ir();const n=q(i)[e].apply(i,t);return nr(),St(),n}const gc=Ys("__proto__,__v_isRef,__isVue"),ll=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(hi));function bc(i){hi(i)||(i=String(i));const e=q(this);return ue(e,"has",i),e.hasOwnProperty(i)}class al{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?Ic:hl:r?ul:dl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=L(e);if(!s){let a;if(o&&(a=fc[t]))return a;if(t==="hasOwnProperty")return bc}const l=Reflect.get(e,t,he(e)?e:n);return(hi(t)?ll.has(t):gc(t))||(s||ue(e,"get",t),r)?l:he(l)?o&&Ks(t)?l:l.value:ae(l)?s?fl(l):ar(l):l}}class cl extends al{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._isShallow){const a=jt(r);if(!We(n)&&!jt(n)&&(r=q(r),n=q(n)),!L(e)&&he(r)&&!he(n))return a?!1:(r.value=n,!0)}const o=L(e)&&Ks(t)?Number(t)<e.length:W(e,t),l=Reflect.set(e,t,n,he(e)?e:s);return e===q(s)&&(o?xt(n,r)&&dt(e,"set",t,n):dt(e,"add",t,n)),l}deleteProperty(e,t){const n=W(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&dt(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!hi(t)||!ll.has(t))&&ue(e,"has",t),n}ownKeys(e){return ue(e,"iterate",L(e)?"length":Vt),Reflect.ownKeys(e)}}class mc extends al{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const yc=new cl,vc=new mc,xc=new cl(!0);const Fs=i=>i,pn=i=>Reflect.getPrototypeOf(i);function wc(i,e,t){return function(...n){const s=this.__v_raw,r=q(s),o=_i(r),l=i==="entries"||i===Symbol.iterator&&o,a=i==="keys"&&o,d=s[i](...n),c=t?Fs:e?Bs:Ce;return!e&&ue(r,"iterate",a?Ps:Vt),{next(){const{value:h,done:b}=d.next();return b?{value:h,done:b}:{value:l?[c(h[0]),c(h[1])]:c(h),done:b}},[Symbol.iterator](){return this}}}}function gn(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Cc(i,e){const t={get(s){const r=this.__v_raw,o=q(r),l=q(s);i||(xt(s,l)&&ue(o,"get",s),ue(o,"get",l));const{has:a}=pn(o),d=e?Fs:i?Bs:Ce;if(a.call(o,s))return d(r.get(s));if(a.call(o,l))return d(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&ue(q(s),"iterate",Vt),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=q(r),l=q(s);return i||(xt(s,l)&&ue(o,"has",s),ue(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,a=q(l),d=e?Fs:i?Bs:Ce;return!i&&ue(a,"iterate",Vt),l.forEach((c,h)=>s.call(r,d(c),d(h),o))}};return pe(t,i?{add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear")}:{add(s){!e&&!We(s)&&!jt(s)&&(s=q(s));const r=q(this);return pn(r).has.call(r,s)||(r.add(s),dt(r,"add",s,s)),this},set(s,r){!e&&!We(r)&&!jt(r)&&(r=q(r));const o=q(this),{has:l,get:a}=pn(o);let d=l.call(o,s);d||(s=q(s),d=l.call(o,s));const c=a.call(o,s);return o.set(s,r),d?xt(r,c)&&dt(o,"set",s,r):dt(o,"add",s,r),this},delete(s){const r=q(this),{has:o,get:l}=pn(r);let a=o.call(r,s);a||(s=q(s),a=o.call(r,s)),l&&l.call(r,s);const d=r.delete(s);return a&&dt(r,"delete",s,void 0),d},clear(){const s=q(this),r=s.size!==0,o=s.clear();return r&&dt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=wc(s,i,e)}),t}function lr(i,e){const t=Cc(i,e);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(W(t,s)&&s in n?t:n,s,r)}const $c={get:lr(!1,!1)},kc={get:lr(!1,!0)},Tc={get:lr(!0,!1)};const dl=new WeakMap,ul=new WeakMap,hl=new WeakMap,Ic=new WeakMap;function Sc(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oc(i){return i.__v_skip||!Object.isExtensible(i)?0:Sc(Ka(i))}function ar(i){return jt(i)?i:cr(i,!1,yc,$c,dl)}function Ac(i){return cr(i,!1,xc,kc,ul)}function fl(i){return cr(i,!0,vc,Tc,hl)}function cr(i,e,t,n,s){if(!ae(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=Oc(i);if(o===0)return i;const l=new Proxy(i,o===2?n:t);return s.set(i,l),l}function Bi(i){return jt(i)?Bi(i.__v_raw):!!(i&&i.__v_isReactive)}function jt(i){return!!(i&&i.__v_isReadonly)}function We(i){return!!(i&&i.__v_isShallow)}function dr(i){return i?!!i.__v_raw:!1}function q(i){const e=i&&i.__v_raw;return e?q(e):i}function pl(i){return!W(i,"__v_skip")&&Object.isExtensible(i)&&Yo(i,"__v_skip",!0),i}const Ce=i=>ae(i)?ar(i):i,Bs=i=>ae(i)?fl(i):i;function he(i){return i?i.__v_isRef===!0:!1}function Ls(i){return Rc(i,!1)}function Rc(i,e){return he(i)?i:new Ec(i,e)}class Ec{constructor(e,t){this.dep=new rr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:q(e),this._value=t?e:Ce(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||We(e)||jt(e);e=n?e:q(e),xt(e,t)&&(this._rawValue=e,this._value=n?e:Ce(e),this.dep.trigger())}}function _c(i){return he(i)?i.value:i}const Dc={get:(i,e,t)=>e==="__v_raw"?i:_c(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return he(s)&&!he(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function gl(i){return Bi(i)?i:new Proxy(i,Dc)}class Pc{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new rr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return tl(this,!0),!0}get value(){const e=this.dep.track();return sl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fc(i,e,t=!1){let n,s;return B(i)?n=i:(n=i.get,s=i.set),new Pc(n,s,t)}const bn={},Rn=new WeakMap;let Lt;function Bc(i,e=!1,t=Lt){if(t){let n=Rn.get(t);n||Rn.set(t,n=[]),n.push(i)}}function Lc(i,e,t=J){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:l,call:a}=t,d=D=>s?D:We(D)||s===!1||s===0?ut(D,1):ut(D);let c,h,b,C,A=!1,E=!1;if(he(i)?(h=()=>i.value,A=We(i)):Bi(i)?(h=()=>d(i),A=!0):L(i)?(E=!0,A=i.some(D=>Bi(D)||We(D)),h=()=>i.map(D=>{if(he(D))return D.value;if(Bi(D))return d(D);if(B(D))return a?a(D,2):D()})):B(i)?e?h=a?()=>a(i,2):i:h=()=>{if(b){It();try{b()}finally{St()}}const D=Lt;Lt=c;try{return a?a(i,3,[C]):i(C)}finally{Lt=D}}:h=st,e&&s){const D=h,re=s===!0?1/0:s;h=()=>ut(D(),re)}const Q=dc(),j=()=>{c.stop(),Q&&Q.active&&Zs(Q.effects,c)};if(r&&e){const D=e;e=(...re)=>{D(...re),j()}}let z=E?new Array(i.length).fill(bn):bn;const K=D=>{if(!(!(c.flags&1)||!c.dirty&&!D))if(e){const re=c.run();if(s||A||(E?re.some((ve,Ye)=>xt(ve,z[Ye])):xt(re,z))){b&&b();const ve=Lt;Lt=c;try{const Ye=[re,z===bn?void 0:E&&z[0]===bn?[]:z,C];a?a(e,3,Ye):e(...Ye),z=re}finally{Lt=ve}}}else c.run()};return l&&l(K),c=new Ko(h),c.scheduler=o?()=>o(K,!1):K,C=D=>Bc(D,!1,c),b=c.onStop=()=>{const D=Rn.get(c);if(D){if(a)a(D,4);else for(const re of D)re();Rn.delete(c)}},e?n?K(!0):z=c.run():o?o(K.bind(null,!0),!0):c.run(),j.pause=c.pause.bind(c),j.resume=c.resume.bind(c),j.stop=j,j}function ut(i,e=1/0,t){if(e<=0||!ae(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,he(i))ut(i.value,e,t);else if(L(i))for(let n=0;n<i.length;n++)ut(i[n],e,t);else if(Xa(i)||_i(i))i.forEach(n=>{ut(n,e,t)});else if(ec(i)){for(const n in i)ut(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&ut(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tn(i,e,t,n){try{return n?i(...n):i()}catch(s){Un(s,e,t)}}function rt(i,e,t,n){if(B(i)){const s=tn(i,e,t,n);return s&&Qo(s)&&s.catch(r=>{Un(r,e,t)}),s}if(L(i)){const s=[];for(let r=0;r<i.length;r++)s.push(rt(i[r],e,t,n));return s}}function Un(i,e,t,n=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||J;if(e){let l=e.parent;const a=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const c=l.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](i,a,d)===!1)return}l=l.parent}if(r){It(),tn(r,null,10,[i,a,d]),St();return}}Mc(i,t,s,n,o)}function Mc(i,e,t,n=!0,s=!1){if(s)throw i;console.error(i)}const $e=[];let it=-1;const ii=[];let yt=null,Jt=0;const bl=Promise.resolve();let En=null;function Hc(i){const e=En||bl;return i?e.then(this?i.bind(this):i):e}function Vc(i){let e=it+1,t=$e.length;for(;e<t;){const n=e+t>>>1,s=$e[n],r=Wi(s);r<i||r===i&&s.flags&2?e=n+1:t=n}return e}function ur(i){if(!(i.flags&1)){const e=Wi(i),t=$e[$e.length-1];!t||!(i.flags&2)&&e>=Wi(t)?$e.push(i):$e.splice(Vc(e),0,i),i.flags|=1,ml()}}function ml(){En||(En=bl.then(vl))}function Nc(i){L(i)?ii.push(...i):yt&&i.id===-1?yt.splice(Jt+1,0,i):i.flags&1||(ii.push(i),i.flags|=1),ml()}function Nr(i,e,t=it+1){for(;t<$e.length;t++){const n=$e[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;$e.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function yl(i){if(ii.length){const e=[...new Set(ii)].sort((t,n)=>Wi(t)-Wi(n));if(ii.length=0,yt){yt.push(...e);return}for(yt=e,Jt=0;Jt<yt.length;Jt++){const t=yt[Jt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}yt=null,Jt=0}}const Wi=i=>i.id==null?i.flags&2?-1:1/0:i.id;function vl(i){try{for(it=0;it<$e.length;it++){const e=$e[it];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),tn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;it<$e.length;it++){const e=$e[it];e&&(e.flags&=-2)}it=-1,$e.length=0,yl(),En=null,($e.length||ii.length)&&vl()}}let Ne=null,xl=null;function _n(i){const e=Ne;return Ne=i,xl=i&&i.type.__scopeId||null,e}function jc(i,e=Ne,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Yr(-1);const r=_n(e);let o;try{o=i(...s)}finally{_n(r),n._d&&Yr(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function zc(i,e){if(Ne===null)return i;const t=Qn(Ne),n=i.dirs||(i.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,l,a=J]=e[s];r&&(B(r)&&(r={mounted:r,updated:r}),r.deep&&ut(o),n.push({dir:r,instance:t,value:o,oldValue:void 0,arg:l,modifiers:a}))}return i}function Pt(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[n];a&&(It(),rt(a,t,8,[i.el,l,i,e]),St())}}const Uc=Symbol("_vte"),qc=i=>i.__isTeleport;function hr(i,e){i.shapeFlag&6&&i.component?(i.transition=e,hr(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}/*! #__NO_SIDE_EFFECTS__ */function wl(i,e){return B(i)?pe({name:i.name},e,{setup:i}):i}function Cl(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Dn(i,e,t,n,s=!1){if(L(i)){i.forEach((A,E)=>Dn(A,e&&(L(e)?e[E]:e),t,n,s));return}if(Li(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Dn(i,e,t,n.component.subTree);return}const r=n.shapeFlag&4?Qn(n.component):n.el,o=s?null:r,{i:l,r:a}=i,d=e&&e.r,c=l.refs===J?l.refs={}:l.refs,h=l.setupState,b=q(h),C=h===J?()=>!1:A=>W(b,A);if(d!=null&&d!==a&&(de(d)?(c[d]=null,C(d)&&(h[d]=null)):he(d)&&(d.value=null)),B(a))tn(a,l,12,[o,c]);else{const A=de(a),E=he(a);if(A||E){const Q=()=>{if(i.f){const j=A?C(a)?h[a]:c[a]:a.value;s?L(j)&&Zs(j,r):L(j)?j.includes(r)||j.push(r):A?(c[a]=[r],C(a)&&(h[a]=c[a])):(a.value=[r],i.k&&(c[i.k]=a.value))}else A?(c[a]=o,C(a)&&(h[a]=o)):E&&(a.value=o,i.k&&(c[i.k]=o))};o?(Q.id=-1,Be(Q,t)):Q()}}}zn().requestIdleCallback;zn().cancelIdleCallback;const Li=i=>!!i.type.__asyncLoader,$l=i=>i.type.__isKeepAlive;function Wc(i,e){kl(i,"a",e)}function Gc(i,e){kl(i,"da",e)}function kl(i,e,t=Te){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(qn(e,n,t),t){let s=t.parent;for(;s&&s.parent;)$l(s.parent.vnode)&&Qc(n,e,t,s),s=s.parent}}function Qc(i,e,t,n){const s=qn(e,i,n,!0);Il(()=>{Zs(n[e],s)},t)}function qn(i,e,t=Te,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{It();const l=nn(t),a=rt(e,t,i,o);return l(),St(),a});return n?s.unshift(r):s.push(r),r}}const ft=i=>(e,t=Te)=>{(!Ji||i==="sp")&&qn(i,(...n)=>e(...n),t)},Jc=ft("bm"),Tl=ft("m"),Yc=ft("bu"),Xc=ft("u"),Zc=ft("bum"),Il=ft("um"),Kc=ft("sp"),ed=ft("rtg"),td=ft("rtc");function id(i,e=Te){qn("ec",i,e)}const nd=Symbol.for("v-ndc"),Ms=i=>i?Jl(i)?Qn(i):Ms(i.parent):null,Mi=pe(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ms(i.parent),$root:i=>Ms(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Ol(i),$forceUpdate:i=>i.f||(i.f=()=>{ur(i.update)}),$nextTick:i=>i.n||(i.n=Hc.bind(i.proxy)),$watch:i=>Td.bind(i)}),cs=(i,e)=>i!==J&&!i.__isScriptSetup&&W(i,e),sd={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:l,appContext:a}=i;let d;if(e[0]!=="$"){const C=o[e];if(C!==void 0)switch(C){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(cs(n,e))return o[e]=1,n[e];if(s!==J&&W(s,e))return o[e]=2,s[e];if((d=i.propsOptions[0])&&W(d,e))return o[e]=3,r[e];if(t!==J&&W(t,e))return o[e]=4,t[e];Hs&&(o[e]=0)}}const c=Mi[e];let h,b;if(c)return e==="$attrs"&&ue(i.attrs,"get",""),c(i);if((h=l.__cssModules)&&(h=h[e]))return h;if(t!==J&&W(t,e))return o[e]=4,t[e];if(b=a.config.globalProperties,W(b,e))return b[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return cs(s,e)?(s[e]=t,!0):n!==J&&W(n,e)?(n[e]=t,!0):W(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let l;return!!t[o]||i!==J&&W(i,o)||cs(e,o)||(l=r[0])&&W(l,o)||W(n,o)||W(Mi,o)||W(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:W(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function jr(i){return L(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Hs=!0;function rd(i){const e=Ol(i),t=i.proxy,n=i.ctx;Hs=!1,e.beforeCreate&&zr(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:d,created:c,beforeMount:h,mounted:b,beforeUpdate:C,updated:A,activated:E,deactivated:Q,beforeDestroy:j,beforeUnmount:z,destroyed:K,unmounted:D,render:re,renderTracked:ve,renderTriggered:Ye,errorCaptured:bt,serverPrefetch:cn,expose:Et,inheritAttrs:xi,components:dn,directives:un,filters:ns}=e;if(d&&od(d,n,null),o)for(const ie in o){const Y=o[ie];B(Y)&&(n[ie]=Y.bind(t))}if(s){const ie=s.call(t,t);ae(ie)&&(i.data=ar(ie))}if(Hs=!0,r)for(const ie in r){const Y=r[ie],_t=B(Y)?Y.bind(t,t):B(Y.get)?Y.get.bind(t,t):st,hn=!B(Y)&&B(Y.set)?Y.set.bind(t):st,Dt=Gd({get:_t,set:hn});Object.defineProperty(n,ie,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:Xe=>Dt.value=Xe})}if(l)for(const ie in l)Sl(l[ie],n,t,ie);if(a){const ie=B(a)?a.call(t):a;Reflect.ownKeys(ie).forEach(Y=>{hd(Y,ie[Y])})}c&&zr(c,i,"c");function xe(ie,Y){L(Y)?Y.forEach(_t=>ie(_t.bind(t))):Y&&ie(Y.bind(t))}if(xe(Jc,h),xe(Tl,b),xe(Yc,C),xe(Xc,A),xe(Wc,E),xe(Gc,Q),xe(id,bt),xe(td,ve),xe(ed,Ye),xe(Zc,z),xe(Il,D),xe(Kc,cn),L(Et))if(Et.length){const ie=i.exposed||(i.exposed={});Et.forEach(Y=>{Object.defineProperty(ie,Y,{get:()=>t[Y],set:_t=>t[Y]=_t})})}else i.exposed||(i.exposed={});re&&i.render===st&&(i.render=re),xi!=null&&(i.inheritAttrs=xi),dn&&(i.components=dn),un&&(i.directives=un),cn&&Cl(i)}function od(i,e,t=st){L(i)&&(i=Vs(i));for(const n in i){const s=i[n];let r;ae(s)?"default"in s?r=kn(s.from||n,s.default,!0):r=kn(s.from||n):r=kn(s),he(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function zr(i,e,t){rt(L(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Sl(i,e,t,n){let s=n.includes(".")?jl(t,n):()=>t[n];if(de(i)){const r=e[i];B(r)&&us(s,r)}else if(B(i))us(s,i.bind(t));else if(ae(i))if(L(i))i.forEach(r=>Sl(r,e,t,n));else{const r=B(i.handler)?i.handler.bind(t):e[i.handler];B(r)&&us(s,r,i)}}function Ol(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!t&&!n?a=e:(a={},s.length&&s.forEach(d=>Pn(a,d,o,!0)),Pn(a,e,o)),ae(e)&&r.set(e,a),a}function Pn(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Pn(i,r,t,!0),s&&s.forEach(o=>Pn(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const l=ld[o]||t&&t[o];i[o]=l?l(i[o],e[o]):e[o]}return i}const ld={data:Ur,props:qr,emits:qr,methods:Ei,computed:Ei,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Ei,directives:Ei,watch:cd,provide:Ur,inject:ad};function Ur(i,e){return e?i?function(){return pe(B(i)?i.call(this,this):i,B(e)?e.call(this,this):e)}:e:i}function ad(i,e){return Ei(Vs(i),Vs(e))}function Vs(i){if(L(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function we(i,e){return i?[...new Set([].concat(i,e))]:e}function Ei(i,e){return i?pe(Object.create(null),i,e):e}function qr(i,e){return i?L(i)&&L(e)?[...new Set([...i,...e])]:pe(Object.create(null),jr(i),jr(e??{})):e}function cd(i,e){if(!i)return e;if(!e)return i;const t=pe(Object.create(null),i);for(const n in e)t[n]=we(i[n],e[n]);return t}function Al(){return{app:null,config:{isNativeTag:Ja,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dd=0;function ud(i,e){return function(n,s=null){B(n)||(n=pe({},n)),s!=null&&!ae(s)&&(s=null);const r=Al(),o=new WeakSet,l=[];let a=!1;const d=r.app={_uid:dd++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Qd,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&B(c.install)?(o.add(c),c.install(d,...h)):B(c)&&(o.add(c),c(d,...h))),d},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),d},component(c,h){return h?(r.components[c]=h,d):r.components[c]},directive(c,h){return h?(r.directives[c]=h,d):r.directives[c]},mount(c,h,b){if(!a){const C=d._ceVNode||wt(n,s);return C.appContext=r,b===!0?b="svg":b===!1&&(b=void 0),i(C,c,b),a=!0,d._container=c,c.__vue_app__=d,Qn(C.component)}},onUnmount(c){l.push(c)},unmount(){a&&(rt(l,d._instance,16),i(null,d._container),delete d._container.__vue_app__)},provide(c,h){return r.provides[c]=h,d},runWithContext(c){const h=ni;ni=d;try{return c()}finally{ni=h}}};return d}}let ni=null;function hd(i,e){if(Te){let t=Te.provides;const n=Te.parent&&Te.parent.provides;n===t&&(t=Te.provides=Object.create(n)),t[i]=e}}function kn(i,e,t=!1){const n=Te||Ne;if(n||ni){const s=ni?ni._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&B(e)?e.call(n&&n.proxy):e}}const Rl={},El=()=>Object.create(Rl),_l=i=>Object.getPrototypeOf(i)===Rl;function fd(i,e,t,n=!1){const s={},r=El();i.propsDefaults=Object.create(null),Dl(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:Ac(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function pd(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,l=q(s),[a]=i.propsOptions;let d=!1;if((n||o>0)&&!(o&16)){if(o&8){const c=i.vnode.dynamicProps;for(let h=0;h<c.length;h++){let b=c[h];if(Wn(i.emitsOptions,b))continue;const C=e[b];if(a)if(W(r,b))C!==r[b]&&(r[b]=C,d=!0);else{const A=$t(b);s[A]=Ns(a,l,A,C,i,!1)}else C!==r[b]&&(r[b]=C,d=!0)}}}else{Dl(i,e,s,r)&&(d=!0);let c;for(const h in l)(!e||!W(e,h)&&((c=zt(h))===h||!W(e,c)))&&(a?t&&(t[h]!==void 0||t[c]!==void 0)&&(s[h]=Ns(a,l,h,void 0,i,!0)):delete s[h]);if(r!==l)for(const h in r)(!e||!W(e,h))&&(delete r[h],d=!0)}d&&dt(i.attrs,"set","")}function Dl(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,l;if(e)for(let a in e){if(Di(a))continue;const d=e[a];let c;s&&W(s,c=$t(a))?!r||!r.includes(c)?t[c]=d:(l||(l={}))[c]=d:Wn(i.emitsOptions,a)||(!(a in n)||d!==n[a])&&(n[a]=d,o=!0)}if(r){const a=q(t),d=l||J;for(let c=0;c<r.length;c++){const h=r[c];t[h]=Ns(s,a,h,d[h],i,!W(d,h))}}return o}function Ns(i,e,t,n,s,r){const o=i[t];if(o!=null){const l=W(o,"default");if(l&&n===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:d}=s;if(t in d)n=d[t];else{const c=nn(s);n=d[t]=a.call(null,e),c()}}else n=a;s.ce&&s.ce._setProp(t,n)}o[0]&&(r&&!l?n=!1:o[1]&&(n===""||n===zt(t))&&(n=!0))}return n}const gd=new WeakMap;function Pl(i,e,t=!1){const n=t?gd:e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},l=[];let a=!1;if(!B(i)){const c=h=>{a=!0;const[b,C]=Pl(h,e,!0);pe(o,b),C&&l.push(...C)};!t&&e.mixins.length&&e.mixins.forEach(c),i.extends&&c(i.extends),i.mixins&&i.mixins.forEach(c)}if(!r&&!a)return ae(i)&&n.set(i,ti),ti;if(L(r))for(let c=0;c<r.length;c++){const h=$t(r[c]);Wr(h)&&(o[h]=J)}else if(r)for(const c in r){const h=$t(c);if(Wr(h)){const b=r[c],C=o[h]=L(b)||B(b)?{type:b}:pe({},b),A=C.type;let E=!1,Q=!0;if(L(A))for(let j=0;j<A.length;++j){const z=A[j],K=B(z)&&z.name;if(K==="Boolean"){E=!0;break}else K==="String"&&(Q=!1)}else E=B(A)&&A.name==="Boolean";C[0]=E,C[1]=Q,(E||W(C,"default"))&&l.push(h)}}const d=[o,l];return ae(i)&&n.set(i,d),d}function Wr(i){return i[0]!=="$"&&!Di(i)}const Fl=i=>i[0]==="_"||i==="$stable",fr=i=>L(i)?i.map(nt):[nt(i)],bd=(i,e,t)=>{if(e._n)return e;const n=jc((...s)=>fr(e(...s)),t);return n._c=!1,n},Bl=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Fl(s))continue;const r=i[s];if(B(r))e[s]=bd(s,r,n);else if(r!=null){const o=fr(r);e[s]=()=>o}}},Ll=(i,e)=>{const t=fr(e);i.slots.default=()=>t},Ml=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},md=(i,e,t)=>{const n=i.slots=El();if(i.vnode.shapeFlag&32){const s=e._;s?(Ml(n,e,t),t&&Yo(n,"_",s,!0)):Bl(e,n)}else e&&Ll(i,e)},yd=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=J;if(n.shapeFlag&32){const l=e._;l?t&&l===1?r=!1:Ml(s,e,t):(r=!e.$stable,Bl(e,s)),o=e}else e&&(Ll(i,e),o={default:1});if(r)for(const l in s)!Fl(l)&&o[l]==null&&delete s[l]},Be=_d;function vd(i){return xd(i)}function xd(i,e){const t=zn();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:d,setElementText:c,parentNode:h,nextSibling:b,setScopeId:C=st,insertStaticContent:A}=i,E=(u,f,g,x=null,y=null,v=null,T=void 0,k=null,$=!!f.dynamicChildren)=>{if(u===f)return;u&&!Ti(u,f)&&(x=fn(u),Xe(u,y,v,!0),u=null),f.patchFlag===-2&&($=!1,f.dynamicChildren=null);const{type:w,ref:_,shapeFlag:I}=f;switch(w){case Gn:Q(u,f,g,x);break;case Gi:j(u,f,g,x);break;case hs:u==null&&z(f,g,x,T);break;case at:dn(u,f,g,x,y,v,T,k,$);break;default:I&1?re(u,f,g,x,y,v,T,k,$):I&6?un(u,f,g,x,y,v,T,k,$):(I&64||I&128)&&w.process(u,f,g,x,y,v,T,k,$,Ci)}_!=null&&y&&Dn(_,u&&u.ref,v,f||u,!f)},Q=(u,f,g,x)=>{if(u==null)n(f.el=l(f.children),g,x);else{const y=f.el=u.el;f.children!==u.children&&d(y,f.children)}},j=(u,f,g,x)=>{u==null?n(f.el=a(f.children||""),g,x):f.el=u.el},z=(u,f,g,x)=>{[u.el,u.anchor]=A(u.children,f,g,x,u.el,u.anchor)},K=({el:u,anchor:f},g,x)=>{let y;for(;u&&u!==f;)y=b(u),n(u,g,x),u=y;n(f,g,x)},D=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=b(u),s(u),u=g;s(f)},re=(u,f,g,x,y,v,T,k,$)=>{f.type==="svg"?T="svg":f.type==="math"&&(T="mathml"),u==null?ve(f,g,x,y,v,T,k,$):cn(u,f,y,v,T,k,$)},ve=(u,f,g,x,y,v,T,k)=>{let $,w;const{props:_,shapeFlag:I,transition:R,dirs:F}=u;if($=u.el=o(u.type,v,_&&_.is,_),I&8?c($,u.children):I&16&&bt(u.children,$,null,x,y,ds(u,v),T,k),F&&Pt(u,null,x,"created"),Ye($,u,u.scopeId,T,x),_){for(const X in _)X!=="value"&&!Di(X)&&r($,X,null,_[X],v,x);"value"in _&&r($,"value",null,_.value,v),(w=_.onVnodeBeforeMount)&&tt(w,x,u)}F&&Pt(u,null,x,"beforeMount");const V=wd(y,R);V&&R.beforeEnter($),n($,f,g),((w=_&&_.onVnodeMounted)||V||F)&&Be(()=>{w&&tt(w,x,u),V&&R.enter($),F&&Pt(u,null,x,"mounted")},y)},Ye=(u,f,g,x,y)=>{if(g&&C(u,g),x)for(let v=0;v<x.length;v++)C(u,x[v]);if(y){let v=y.subTree;if(f===v||Ul(v.type)&&(v.ssContent===f||v.ssFallback===f)){const T=y.vnode;Ye(u,T,T.scopeId,T.slotScopeIds,y.parent)}}},bt=(u,f,g,x,y,v,T,k,$=0)=>{for(let w=$;w<u.length;w++){const _=u[w]=k?vt(u[w]):nt(u[w]);E(null,_,f,g,x,y,v,T,k)}},cn=(u,f,g,x,y,v,T)=>{const k=f.el=u.el;let{patchFlag:$,dynamicChildren:w,dirs:_}=f;$|=u.patchFlag&16;const I=u.props||J,R=f.props||J;let F;if(g&&Ft(g,!1),(F=R.onVnodeBeforeUpdate)&&tt(F,g,f,u),_&&Pt(f,u,g,"beforeUpdate"),g&&Ft(g,!0),(I.innerHTML&&R.innerHTML==null||I.textContent&&R.textContent==null)&&c(k,""),w?Et(u.dynamicChildren,w,k,g,x,ds(f,y),v):T||Y(u,f,k,null,g,x,ds(f,y),v,!1),$>0){if($&16)xi(k,I,R,g,y);else if($&2&&I.class!==R.class&&r(k,"class",null,R.class,y),$&4&&r(k,"style",I.style,R.style,y),$&8){const V=f.dynamicProps;for(let X=0;X<V.length;X++){const G=V[X],Pe=I[G],Re=R[G];(Re!==Pe||G==="value")&&r(k,G,Pe,Re,y,g)}}$&1&&u.children!==f.children&&c(k,f.children)}else!T&&w==null&&xi(k,I,R,g,y);((F=R.onVnodeUpdated)||_)&&Be(()=>{F&&tt(F,g,f,u),_&&Pt(f,u,g,"updated")},x)},Et=(u,f,g,x,y,v,T)=>{for(let k=0;k<f.length;k++){const $=u[k],w=f[k],_=$.el&&($.type===at||!Ti($,w)||$.shapeFlag&70)?h($.el):g;E($,w,_,null,x,y,v,T,!0)}},xi=(u,f,g,x,y)=>{if(f!==g){if(f!==J)for(const v in f)!Di(v)&&!(v in g)&&r(u,v,f[v],null,y,x);for(const v in g){if(Di(v))continue;const T=g[v],k=f[v];T!==k&&v!=="value"&&r(u,v,k,T,y,x)}"value"in g&&r(u,"value",f.value,g.value,y)}},dn=(u,f,g,x,y,v,T,k,$)=>{const w=f.el=u?u.el:l(""),_=f.anchor=u?u.anchor:l("");let{patchFlag:I,dynamicChildren:R,slotScopeIds:F}=f;F&&(k=k?k.concat(F):F),u==null?(n(w,g,x),n(_,g,x),bt(f.children||[],g,_,y,v,T,k,$)):I>0&&I&64&&R&&u.dynamicChildren?(Et(u.dynamicChildren,R,g,y,v,T,k),(f.key!=null||y&&f===y.subTree)&&Hl(u,f,!0)):Y(u,f,g,_,y,v,T,k,$)},un=(u,f,g,x,y,v,T,k,$)=>{f.slotScopeIds=k,u==null?f.shapeFlag&512?y.ctx.activate(f,g,x,T,$):ns(f,g,x,y,v,T,$):_r(u,f,$)},ns=(u,f,g,x,y,v,T)=>{const k=u.component=Nd(u,x,y);if($l(u)&&(k.ctx.renderer=Ci),jd(k,!1,T),k.asyncDep){if(y&&y.registerDep(k,xe,T),!u.el){const $=k.subTree=wt(Gi);j(null,$,f,g)}}else xe(k,u,f,g,y,v,T)},_r=(u,f,g)=>{const x=f.component=u.component;if(Rd(u,f,g))if(x.asyncDep&&!x.asyncResolved){ie(x,f,g);return}else x.next=f,x.update();else f.el=u.el,x.vnode=f},xe=(u,f,g,x,y,v,T)=>{const k=()=>{if(u.isMounted){let{next:I,bu:R,u:F,parent:V,vnode:X}=u;{const Ke=Vl(u);if(Ke){I&&(I.el=X.el,ie(u,I,T)),Ke.asyncDep.then(()=>{u.isUnmounted||k()});return}}let G=I,Pe;Ft(u,!1),I?(I.el=X.el,ie(u,I,T)):I=X,R&&$n(R),(Pe=I.props&&I.props.onVnodeBeforeUpdate)&&tt(Pe,V,I,X),Ft(u,!0);const Re=Qr(u),Ze=u.subTree;u.subTree=Re,E(Ze,Re,h(Ze.el),fn(Ze),u,y,v),I.el=Re.el,G===null&&Ed(u,Re.el),F&&Be(F,y),(Pe=I.props&&I.props.onVnodeUpdated)&&Be(()=>tt(Pe,V,I,X),y)}else{let I;const{el:R,props:F}=f,{bm:V,m:X,parent:G,root:Pe,type:Re}=u,Ze=Li(f);Ft(u,!1),V&&$n(V),!Ze&&(I=F&&F.onVnodeBeforeMount)&&tt(I,G,f),Ft(u,!0);{Pe.ce&&Pe.ce._injectChildStyle(Re);const Ke=u.subTree=Qr(u);E(null,Ke,g,x,u,y,v),f.el=Ke.el}if(X&&Be(X,y),!Ze&&(I=F&&F.onVnodeMounted)){const Ke=f;Be(()=>tt(I,G,Ke),y)}(f.shapeFlag&256||G&&Li(G.vnode)&&G.vnode.shapeFlag&256)&&u.a&&Be(u.a,y),u.isMounted=!0,f=g=x=null}};u.scope.on();const $=u.effect=new Ko(k);u.scope.off();const w=u.update=$.run.bind($),_=u.job=$.runIfDirty.bind($);_.i=u,_.id=u.uid,$.scheduler=()=>ur(_),Ft(u,!0),w()},ie=(u,f,g)=>{f.component=u;const x=u.vnode.props;u.vnode=f,u.next=null,pd(u,f.props,x,g),yd(u,f.children,g),It(),Nr(u),St()},Y=(u,f,g,x,y,v,T,k,$=!1)=>{const w=u&&u.children,_=u?u.shapeFlag:0,I=f.children,{patchFlag:R,shapeFlag:F}=f;if(R>0){if(R&128){hn(w,I,g,x,y,v,T,k,$);return}else if(R&256){_t(w,I,g,x,y,v,T,k,$);return}}F&8?(_&16&&wi(w,y,v),I!==w&&c(g,I)):_&16?F&16?hn(w,I,g,x,y,v,T,k,$):wi(w,y,v,!0):(_&8&&c(g,""),F&16&&bt(I,g,x,y,v,T,k,$))},_t=(u,f,g,x,y,v,T,k,$)=>{u=u||ti,f=f||ti;const w=u.length,_=f.length,I=Math.min(w,_);let R;for(R=0;R<I;R++){const F=f[R]=$?vt(f[R]):nt(f[R]);E(u[R],F,g,null,y,v,T,k,$)}w>_?wi(u,y,v,!0,!1,I):bt(f,g,x,y,v,T,k,$,I)},hn=(u,f,g,x,y,v,T,k,$)=>{let w=0;const _=f.length;let I=u.length-1,R=_-1;for(;w<=I&&w<=R;){const F=u[w],V=f[w]=$?vt(f[w]):nt(f[w]);if(Ti(F,V))E(F,V,g,null,y,v,T,k,$);else break;w++}for(;w<=I&&w<=R;){const F=u[I],V=f[R]=$?vt(f[R]):nt(f[R]);if(Ti(F,V))E(F,V,g,null,y,v,T,k,$);else break;I--,R--}if(w>I){if(w<=R){const F=R+1,V=F<_?f[F].el:x;for(;w<=R;)E(null,f[w]=$?vt(f[w]):nt(f[w]),g,V,y,v,T,k,$),w++}}else if(w>R)for(;w<=I;)Xe(u[w],y,v,!0),w++;else{const F=w,V=w,X=new Map;for(w=V;w<=R;w++){const Fe=f[w]=$?vt(f[w]):nt(f[w]);Fe.key!=null&&X.set(Fe.key,w)}let G,Pe=0;const Re=R-V+1;let Ze=!1,Ke=0;const $i=new Array(Re);for(w=0;w<Re;w++)$i[w]=0;for(w=F;w<=I;w++){const Fe=u[w];if(Pe>=Re){Xe(Fe,y,v,!0);continue}let et;if(Fe.key!=null)et=X.get(Fe.key);else for(G=V;G<=R;G++)if($i[G-V]===0&&Ti(Fe,f[G])){et=G;break}et===void 0?Xe(Fe,y,v,!0):($i[et-V]=w+1,et>=Ke?Ke=et:Ze=!0,E(Fe,f[et],g,null,y,v,T,k,$),Pe++)}const Fr=Ze?Cd($i):ti;for(G=Fr.length-1,w=Re-1;w>=0;w--){const Fe=V+w,et=f[Fe],Br=Fe+1<_?f[Fe+1].el:x;$i[w]===0?E(null,et,g,Br,y,v,T,k,$):Ze&&(G<0||w!==Fr[G]?Dt(et,g,Br,2):G--)}}},Dt=(u,f,g,x,y=null)=>{const{el:v,type:T,transition:k,children:$,shapeFlag:w}=u;if(w&6){Dt(u.component.subTree,f,g,x);return}if(w&128){u.suspense.move(f,g,x);return}if(w&64){T.move(u,f,g,Ci);return}if(T===at){n(v,f,g);for(let I=0;I<$.length;I++)Dt($[I],f,g,x);n(u.anchor,f,g);return}if(T===hs){K(u,f,g);return}if(x!==2&&w&1&&k)if(x===0)k.beforeEnter(v),n(v,f,g),Be(()=>k.enter(v),y);else{const{leave:I,delayLeave:R,afterLeave:F}=k,V=()=>n(v,f,g),X=()=>{I(v,()=>{V(),F&&F()})};R?R(v,V,X):X()}else n(v,f,g)},Xe=(u,f,g,x=!1,y=!1)=>{const{type:v,props:T,ref:k,children:$,dynamicChildren:w,shapeFlag:_,patchFlag:I,dirs:R,cacheIndex:F}=u;if(I===-2&&(y=!1),k!=null&&Dn(k,null,g,u,!0),F!=null&&(f.renderCache[F]=void 0),_&256){f.ctx.deactivate(u);return}const V=_&1&&R,X=!Li(u);let G;if(X&&(G=T&&T.onVnodeBeforeUnmount)&&tt(G,f,u),_&6)Wa(u.component,g,x);else{if(_&128){u.suspense.unmount(g,x);return}V&&Pt(u,null,f,"beforeUnmount"),_&64?u.type.remove(u,f,g,Ci,x):w&&!w.hasOnce&&(v!==at||I>0&&I&64)?wi(w,f,g,!1,!0):(v===at&&I&384||!y&&_&16)&&wi($,f,g),x&&Dr(u)}(X&&(G=T&&T.onVnodeUnmounted)||V)&&Be(()=>{G&&tt(G,f,u),V&&Pt(u,null,f,"unmounted")},g)},Dr=u=>{const{type:f,el:g,anchor:x,transition:y}=u;if(f===at){qa(g,x);return}if(f===hs){D(u);return}const v=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:k}=y,$=()=>T(g,v);k?k(u.el,v,$):$()}else v()},qa=(u,f)=>{let g;for(;u!==f;)g=b(u),s(u),u=g;s(f)},Wa=(u,f,g)=>{const{bum:x,scope:y,job:v,subTree:T,um:k,m:$,a:w}=u;Gr($),Gr(w),x&&$n(x),y.stop(),v&&(v.flags|=8,Xe(T,u,f,g)),k&&Be(k,f),Be(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},wi=(u,f,g,x=!1,y=!1,v=0)=>{for(let T=v;T<u.length;T++)Xe(u[T],f,g,x,y)},fn=u=>{if(u.shapeFlag&6)return fn(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=b(u.anchor||u.el),g=f&&f[Uc];return g?b(g):f};let ss=!1;const Pr=(u,f,g)=>{u==null?f._vnode&&Xe(f._vnode,null,null,!0):E(f._vnode||null,u,f,null,null,null,g),f._vnode=u,ss||(ss=!0,Nr(),yl(),ss=!1)},Ci={p:E,um:Xe,m:Dt,r:Dr,mt:ns,mc:bt,pc:Y,pbc:Et,n:fn,o:i};return{render:Pr,hydrate:void 0,createApp:ud(Pr)}}function ds({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ft({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function wd(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Hl(i,e,t=!1){const n=i.children,s=e.children;if(L(n)&&L(s))for(let r=0;r<n.length;r++){const o=n[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=vt(s[r]),l.el=o.el),!t&&l.patchFlag!==-2&&Hl(o,l)),l.type===Gn&&(l.el=o.el)}}function Cd(i){const e=i.slice(),t=[0];let n,s,r,o,l;const a=i.length;for(n=0;n<a;n++){const d=i[n];if(d!==0){if(s=t[t.length-1],i[s]<d){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)l=r+o>>1,i[t[l]]<d?r=l+1:o=l;d<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Vl(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vl(e)}function Gr(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const $d=Symbol.for("v-scx"),kd=()=>kn($d);function us(i,e,t){return Nl(i,e,t)}function Nl(i,e,t=J){const{immediate:n,deep:s,flush:r,once:o}=t,l=pe({},t),a=e&&n||!e&&r!=="post";let d;if(Ji){if(r==="sync"){const C=kd();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!a){const C=()=>{};return C.stop=st,C.resume=st,C.pause=st,C}}const c=Te;l.call=(C,A,E)=>rt(C,c,A,E);let h=!1;r==="post"?l.scheduler=C=>{Be(C,c&&c.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(C,A)=>{A?C():ur(C)}),l.augmentJob=C=>{e&&(C.flags|=4),h&&(C.flags|=2,c&&(C.id=c.uid,C.i=c))};const b=Lc(i,e,l);return Ji&&(d?d.push(b):a&&b()),b}function Td(i,e,t){const n=this.proxy,s=de(i)?i.includes(".")?jl(n,i):()=>n[i]:i.bind(n,n);let r;B(e)?r=e:(r=e.handler,t=e);const o=nn(this),l=Nl(s,r.bind(n),t);return o(),l}function jl(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}const Id=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${$t(e)}Modifiers`]||i[`${zt(e)}Modifiers`];function Sd(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||J;let s=t;const r=e.startsWith("update:"),o=r&&Id(n,e.slice(7));o&&(o.trim&&(s=t.map(c=>de(c)?c.trim():c)),o.number&&(s=t.map(Es)));let l,a=n[l=rs(e)]||n[l=rs($t(e))];!a&&r&&(a=n[l=rs(zt(e))]),a&&rt(a,i,6,s);const d=n[l+"Once"];if(d){if(!i.emitted)i.emitted={};else if(i.emitted[l])return;i.emitted[l]=!0,rt(d,i,6,s)}}function zl(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},l=!1;if(!B(i)){const a=d=>{const c=zl(d,e,!0);c&&(l=!0,pe(o,c))};!t&&e.mixins.length&&e.mixins.forEach(a),i.extends&&a(i.extends),i.mixins&&i.mixins.forEach(a)}return!r&&!l?(ae(i)&&n.set(i,null),null):(L(r)?r.forEach(a=>o[a]=null):pe(o,r),ae(i)&&n.set(i,o),o)}function Wn(i,e){return!i||!Vn(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(i,e[0].toLowerCase()+e.slice(1))||W(i,zt(e))||W(i,e))}function Qr(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:a,render:d,renderCache:c,props:h,data:b,setupState:C,ctx:A,inheritAttrs:E}=i,Q=_n(i);let j,z;try{if(t.shapeFlag&4){const D=s||n,re=D;j=nt(d.call(re,D,c,h,C,b,A)),z=l}else{const D=e;j=nt(D.length>1?D(h,{attrs:l,slots:o,emit:a}):D(h,null)),z=e.props?l:Od(l)}}catch(D){Hi.length=0,Un(D,i,1),j=wt(Gi)}let K=j;if(z&&E!==!1){const D=Object.keys(z),{shapeFlag:re}=K;D.length&&re&7&&(r&&D.some(Xs)&&(z=Ad(z,r)),K=ai(K,z,!1,!0))}return t.dirs&&(K=ai(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&hr(K,t.transition),j=K,_n(Q),j}const Od=i=>{let e;for(const t in i)(t==="class"||t==="style"||Vn(t))&&((e||(e={}))[t]=i[t]);return e},Ad=(i,e)=>{const t={};for(const n in i)(!Xs(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Rd(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:l,patchFlag:a}=e,d=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return n?Jr(n,o,d):!!o;if(a&8){const c=e.dynamicProps;for(let h=0;h<c.length;h++){const b=c[h];if(o[b]!==n[b]&&!Wn(d,b))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:n===o?!1:n?o?Jr(n,o,d):!0:!!o;return!1}function Jr(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Wn(t,r))return!0}return!1}function Ed({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Ul=i=>i.__isSuspense;function _d(i,e){e&&e.pendingBranch?L(i)?e.effects.push(...i):e.effects.push(i):Nc(i)}const at=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),Gi=Symbol.for("v-cmt"),hs=Symbol.for("v-stc"),Hi=[];let Me=null;function ql(i=!1){Hi.push(Me=i?null:[])}function Dd(){Hi.pop(),Me=Hi[Hi.length-1]||null}let Qi=1;function Yr(i,e=!1){Qi+=i,i<0&&Me&&e&&(Me.hasOnce=!0)}function Pd(i){return i.dynamicChildren=Qi>0?Me||ti:null,Dd(),Qi>0&&Me&&Me.push(i),i}function Wl(i,e,t,n,s,r){return Pd(Zt(i,e,t,n,s,r,!0))}function Gl(i){return i?i.__v_isVNode===!0:!1}function Ti(i,e){return i.type===e.type&&i.key===e.key}const Ql=({key:i})=>i??null,Tn=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?de(i)||he(i)||B(i)?{i:Ne,r:i,k:e,f:!!t}:i:null);function Zt(i,e=null,t=null,n=0,s=null,r=i===at?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Ql(e),ref:e&&Tn(e),scopeId:xl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ne};return l?(pr(a,t),r&128&&i.normalize(a)):t&&(a.shapeFlag|=de(t)?8:16),Qi>0&&!o&&Me&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Me.push(a),a}const wt=Fd;function Fd(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===nd)&&(i=Gi),Gl(i)){const l=ai(i,e,!0);return t&&pr(l,t),Qi>0&&!r&&Me&&(l.shapeFlag&6?Me[Me.indexOf(i)]=l:Me.push(l)),l.patchFlag=-2,l}if(Wd(i)&&(i=i.__vccOpts),e){e=Bd(e);let{class:l,style:a}=e;l&&!de(l)&&(e.class=tr(l)),ae(a)&&(dr(a)&&!L(a)&&(a=pe({},a)),e.style=er(a))}const o=de(i)?1:Ul(i)?128:qc(i)?64:ae(i)?4:B(i)?2:0;return Zt(i,e,t,n,s,o,r,!0)}function Bd(i){return i?dr(i)||_l(i)?pe({},i):i:null}function ai(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:a}=i,d=e?Md(s||{},e):s,c={__v_isVNode:!0,__v_skip:!0,type:i.type,props:d,key:d&&Ql(d),ref:e&&e.ref?t&&r?L(r)?r.concat(Tn(e)):[r,Tn(e)]:Tn(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:l,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==at?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:a,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ai(i.ssContent),ssFallback:i.ssFallback&&ai(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return a&&n&&hr(c,a.clone(c)),c}function Ld(i=" ",e=0){return wt(Gn,null,i,e)}function nt(i){return i==null||typeof i=="boolean"?wt(Gi):L(i)?wt(at,null,i.slice()):Gl(i)?vt(i):wt(Gn,null,String(i))}function vt(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ai(i)}function pr(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(L(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),pr(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!_l(e)?e._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ne},t=32):(e=String(e),n&64?(t=16,e=[Ld(e)]):t=8);i.children=e,i.shapeFlag|=t}function Md(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=tr([e.class,n.class]));else if(s==="style")e.style=er([e.style,n.style]);else if(Vn(s)){const r=e[s],o=n[s];o&&r!==o&&!(L(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function tt(i,e,t,n=null){rt(i,e,7,[t,n])}const Hd=Al();let Vd=0;function Nd(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||Hd,r={uid:Vd++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pl(n,s),emitsOptions:zl(n,s),emit:null,emitted:null,propsDefaults:J,inheritAttrs:n.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Sd.bind(null,r),i.ce&&i.ce(r),r}let Te=null,Fn,js;{const i=zn(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Fn=e("__VUE_INSTANCE_SETTERS__",t=>Te=t),js=e("__VUE_SSR_SETTERS__",t=>Ji=t)}const nn=i=>{const e=Te;return Fn(i),i.scope.on(),()=>{i.scope.off(),Fn(e)}},Xr=()=>{Te&&Te.scope.off(),Fn(null)};function Jl(i){return i.vnode.shapeFlag&4}let Ji=!1;function jd(i,e=!1,t=!1){e&&js(e);const{props:n,children:s}=i.vnode,r=Jl(i);fd(i,n,r,e),md(i,s,t);const o=r?zd(i,e):void 0;return e&&js(!1),o}function zd(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,sd);const{setup:n}=t;if(n){It();const s=i.setupContext=n.length>1?qd(i):null,r=nn(i),o=tn(n,i,0,[i.props,s]),l=Qo(o);if(St(),r(),(l||i.sp)&&!Li(i)&&Cl(i),l){if(o.then(Xr,Xr),e)return o.then(a=>{Zr(i,a)}).catch(a=>{Un(a,i,0)});i.asyncDep=o}else Zr(i,o)}else Yl(i)}function Zr(i,e,t){B(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ae(e)&&(i.setupState=gl(e)),Yl(i)}function Yl(i,e,t){const n=i.type;i.render||(i.render=n.render||st);{const s=nn(i);It();try{rd(i)}finally{St(),s()}}}const Ud={get(i,e){return ue(i,"get",""),i[e]}};function qd(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,Ud),slots:i.slots,emit:i.emit,expose:e}}function Qn(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(gl(pl(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mi)return Mi[t](i)},has(e,t){return t in e||t in Mi}})):i.proxy}function Wd(i){return B(i)&&"__vccOpts"in i}const Gd=(i,e)=>Fc(i,e,Ji),Qd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zs;const Kr=typeof window<"u"&&window.trustedTypes;if(Kr)try{zs=Kr.createPolicy("vue",{createHTML:i=>i})}catch{}const Xl=zs?i=>zs.createHTML(i):i=>i,Jd="http://www.w3.org/2000/svg",Yd="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,eo=lt&&lt.createElement("template"),Xd={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?lt.createElementNS(Jd,i):e==="mathml"?lt.createElementNS(Yd,i):t?lt.createElement(i,{is:t}):lt.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>lt.createTextNode(i),createComment:i=>lt.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>lt.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{eo.innerHTML=Xl(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const l=eo.content;if(n==="svg"||n==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zd=Symbol("_vtc");function Kd(i,e,t){const n=i[Zd];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const to=Symbol("_vod"),eu=Symbol("_vsh"),tu=Symbol(""),iu=/(^|;)\s*display\s*:/;function nu(i,e,t){const n=i.style,s=de(t);let r=!1;if(t&&!s){if(e)if(de(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&In(n,l,"")}else for(const o in e)t[o]==null&&In(n,o,"");for(const o in t)o==="display"&&(r=!0),In(n,o,t[o])}else if(s){if(e!==t){const o=n[tu];o&&(t+=";"+o),n.cssText=t,r=iu.test(t)}}else e&&i.removeAttribute("style");to in i&&(i[to]=r?n.display:"",i[eu]&&(n.display="none"))}const io=/\s*!important$/;function In(i,e,t){if(L(t))t.forEach(n=>In(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=su(i,e);io.test(t)?i.setProperty(zt(n),t.replace(io,""),"important"):i[n]=t}}const no=["Webkit","Moz","ms"],fs={};function su(i,e){const t=fs[e];if(t)return t;let n=$t(e);if(n!=="filter"&&n in i)return fs[e]=n;n=Jo(n);for(let s=0;s<no.length;s++){const r=no[s]+n;if(r in i)return fs[e]=r}return e}const so="http://www.w3.org/1999/xlink";function ro(i,e,t,n,s,r=ac(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(so,e.slice(6,e.length)):i.setAttributeNS(so,e,t):t==null||r&&!Xo(t)?i.removeAttribute(e):i.setAttribute(e,r?"":hi(t)?String(t):t)}function oo(i,e,t,n,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Xl(t):t);return}const r=i.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?i.getAttribute("value")||"":i.value,a=t==null?i.type==="checkbox"?"on":"":String(t);(l!==a||!("_value"in i))&&(i.value=a),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Xo(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(s||e)}function Yt(i,e,t,n){i.addEventListener(e,t,n)}function ru(i,e,t,n){i.removeEventListener(e,t,n)}const lo=Symbol("_vei");function ou(i,e,t,n,s=null){const r=i[lo]||(i[lo]={}),o=r[e];if(n&&o)o.value=n;else{const[l,a]=lu(e);if(n){const d=r[e]=du(n,s);Yt(i,l,d,a)}else o&&(ru(i,l,o,a),r[e]=void 0)}}const ao=/(?:Once|Passive|Capture)$/;function lu(i){let e;if(ao.test(i)){e={};let n;for(;n=i.match(ao);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):zt(i.slice(2)),e]}let ps=0;const au=Promise.resolve(),cu=()=>ps||(au.then(()=>ps=0),ps=Date.now());function du(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;rt(uu(n,t.value),e,5,[n])};return t.value=i,t.attached=cu(),t}function uu(i,e){if(L(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const co=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,hu=(i,e,t,n,s,r)=>{const o=s==="svg";e==="class"?Kd(i,n,o):e==="style"?nu(i,t,n):Vn(e)?Xs(e)||ou(i,e,t,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fu(i,e,n,o))?(oo(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ro(i,e,n,o,r,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!de(n))?oo(i,$t(e),n,r,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),ro(i,e,n,o))};function fu(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&co(e)&&B(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return co(e)&&de(t)?!1:e in i}const uo=i=>{const e=i.props["onUpdate:modelValue"]||!1;return L(e)?t=>$n(e,t):e};function pu(i){i.target.composing=!0}function ho(i){const e=i.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gs=Symbol("_assign"),gu={created(i,{modifiers:{lazy:e,trim:t,number:n}},s){i[gs]=uo(s);const r=n||s.props&&s.props.type==="number";Yt(i,e?"change":"input",o=>{if(o.target.composing)return;let l=i.value;t&&(l=l.trim()),r&&(l=Es(l)),i[gs](l)}),t&&Yt(i,"change",()=>{i.value=i.value.trim()}),e||(Yt(i,"compositionstart",pu),Yt(i,"compositionend",ho),Yt(i,"change",ho))},mounted(i,{value:e}){i.value=e??""},beforeUpdate(i,{value:e,oldValue:t,modifiers:{lazy:n,trim:s,number:r}},o){if(i[gs]=uo(o),i.composing)return;const l=(r||i.type==="number")&&!/^0\d/.test(i.value)?Es(i.value):i.value,a=e??"";l!==a&&(document.activeElement===i&&i.type!=="range"&&(n&&e===t||s&&i.value.trim()===a)||(i.value=a))}},bu=pe({patchProp:hu},Xd);let fo;function mu(){return fo||(fo=vd(bu))}const yu=(...i)=>{const e=mu().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=xu(n);if(!s)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,vu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vu(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function xu(i){return de(i)?document.querySelector(i):i}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const wu=Symbol();var po;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(po||(po={}));function Cu(){const i=cc(!0),e=i.run(()=>Ls({}));let t=[],n=[];const s=pl({install(r){s._a=r,r.provide(wu,s),r.config.globalProperties.$pinia=s,n.forEach(o=>t.push(o)),n=[]},use(r){return this._a?t.push(r):n.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}const kt=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();kt.trustedTypes===void 0&&(kt.trustedTypes={createPolicy:(i,e)=>e});const Zl={configurable:!1,enumerable:!1,writable:!1};kt.FAST===void 0&&Reflect.defineProperty(kt,"FAST",Object.assign({value:Object.create(null)},Zl));const Yi=kt.FAST;if(Yi.getById===void 0){const i=Object.create(null);Reflect.defineProperty(Yi,"getById",Object.assign({value(e,t){let n=i[e];return n===void 0&&(n=t?i[e]=t():null),n}},Zl))}const Nt=Object.freeze([]);function Kl(){const i=new WeakMap;return function(e){let t=i.get(e);if(t===void 0){let n=Reflect.getPrototypeOf(e);for(;t===void 0&&n!==null;)t=i.get(n),n=Reflect.getPrototypeOf(n);t=t===void 0?[]:t.slice(0),i.set(e,t)}return t}}const bs=kt.FAST.getById(1,()=>{const i=[],e=[];function t(){if(e.length)throw e.shift()}function n(o){try{o.call()}catch(l){e.push(l),setTimeout(t,0)}}function s(){let l=0;for(;l<i.length;)if(n(i[l]),l++,l>1024){for(let a=0,d=i.length-l;a<d;a++)i[a]=i[a+l];i.length-=l,l=0}i.length=0}function r(o){i.length<1&&kt.requestAnimationFrame(s),i.push(o)}return Object.freeze({enqueue:r,process:s})}),ea=kt.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let ms=ea;const Vi=`fast-${Math.random().toString(36).substring(2,8)}`,ta=`${Vi}{`,gr=`}${Vi}`,H=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(ms!==ea)throw new Error("The HTML policy can only be set once.");ms=i},createHTML(i){return ms.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(Vi)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${Vi}:`,""))},createInterpolationPlaceholder(i){return`${ta}${i}${gr}`},createCustomAttributePlaceholder(i,e){return`${i}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(i){return`<!--${Vi}:${i}-->`},queueUpdate:bs.enqueue,processUpdates:bs.process,nextUpdate(){return new Promise(bs.enqueue)},setAttribute(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)},setBooleanAttribute(i,e,t){t?i.setAttribute(e,""):i.removeAttribute(e)},removeChildNodes(i){for(let e=i.firstChild;e!==null;e=i.firstChild)i.removeChild(e)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class Bn{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const n=t.indexOf(e);n!==-1&&t.splice(n,1)}}notify(e){const t=this.spillover,n=this.source;if(t===void 0){const s=this.sub1,r=this.sub2;s!==void 0&&s.handleChange(n,e),r!==void 0&&r.handleChange(n,e)}else for(let s=0,r=t.length;s<r;++s)t[s].handleChange(n,e)}}class ia{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const n=this.subscribers[e];n!==void 0&&n.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var n;if(t){let s=this.subscribers[t];s===void 0&&(this.subscribers[t]=s=new Bn(this.source)),s.subscribe(e)}else this.sourceSubscribers=(n=this.sourceSubscribers)!==null&&n!==void 0?n:new Bn(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var n;if(t){const s=this.subscribers[t];s!==void 0&&s.unsubscribe(e)}else(n=this.sourceSubscribers)===null||n===void 0||n.unsubscribe(e)}}const M=Yi.getById(2,()=>{const i=/(:|&&|\|\||if)/,e=new WeakMap,t=H.queueUpdate;let n,s=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(d){let c=d.$fastController||e.get(d);return c===void 0&&(Array.isArray(d)?c=s(d):e.set(d,c=new ia(d))),c}const o=Kl();class l{constructor(c){this.name=c,this.field=`_${c}`,this.callback=`${c}Changed`}getValue(c){return n!==void 0&&n.watch(c,this.name),c[this.field]}setValue(c,h){const b=this.field,C=c[b];if(C!==h){c[b]=h;const A=c[this.callback];typeof A=="function"&&A.call(c,C,h),r(c).notify(this.name)}}}class a extends Bn{constructor(c,h,b=!1){super(c,h),this.binding=c,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(c,h){this.needsRefresh&&this.last!==null&&this.disconnect();const b=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const C=this.binding(c,h);return n=b,C}disconnect(){if(this.last!==null){let c=this.first;for(;c!==void 0;)c.notifier.unsubscribe(this,c.propertyName),c=c.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(c,h){const b=this.last,C=r(c),A=b===null?this.first:{};if(A.propertySource=c,A.propertyName=h,A.notifier=C,C.subscribe(this,h),b!==null){if(!this.needsRefresh){let E;n=void 0,E=b.propertySource[b.propertyName],n=this,c===E&&(this.needsRefresh=!0)}b.next=A}this.last=A}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let c=this.first;return{next:()=>{const h=c;return h===void 0?{value:void 0,done:!0}:(c=c.next,{value:h,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){s=d},getNotifier:r,track(d,c){n!==void 0&&n.watch(d,c)},trackVolatile(){n!==void 0&&(n.needsRefresh=!0)},notify(d,c){r(d).notify(c)},defineProperty(d,c){typeof c=="string"&&(c=new l(c)),o(d).push(c),Reflect.defineProperty(d,c.name,{enumerable:!0,get:function(){return c.getValue(this)},set:function(h){c.setValue(this,h)}})},getAccessors:o,binding(d,c,h=this.isVolatileBinding(d)){return new a(d,c,h)},isVolatileBinding(d){return i.test(d.toString())}})});function O(i,e){M.defineProperty(i,e)}function $u(i,e,t){return Object.assign({},t,{get:function(){return M.trackVolatile(),t.get.apply(this)}})}const go=Yi.getById(3,()=>{let i=null;return{get(){return i},set(e){i=e}}});class Xi{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return go.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){go.set(e)}}M.defineProperty(Xi.prototype,"index");M.defineProperty(Xi.prototype,"length");const Ni=Object.seal(new Xi);class Jn{constructor(){this.targetIndex=0}}class na extends Jn{constructor(){super(...arguments),this.createPlaceholder=H.createInterpolationPlaceholder}}class br extends Jn{constructor(e,t,n){super(),this.name=e,this.behavior=t,this.options=n}createPlaceholder(e){return H.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function ku(i,e){this.source=i,this.context=e,this.bindingObserver===null&&(this.bindingObserver=M.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,e))}function Tu(i,e){this.source=i,this.context=e,this.target.addEventListener(this.targetName,this)}function Iu(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Su(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function Ou(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Au(i){H.setAttribute(this.target,this.targetName,i)}function Ru(i){H.setBooleanAttribute(this.target,this.targetName,i)}function Eu(i){if(i==null&&(i=""),i.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=i.create():this.target.$fastTemplate!==i&&(e.isComposed&&(e.remove(),e.unbind()),e=i.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=i)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=i}}function _u(i){this.target[this.targetName]=i}function Du(i){const e=this.classVersions||Object.create(null),t=this.target;let n=this.version||0;if(i!=null&&i.length){const s=i.split(/\s+/);for(let r=0,o=s.length;r<o;++r){const l=s[r];l!==""&&(e[l]=n,t.classList.add(l))}}if(this.classVersions=e,this.version=n+1,n!==0){n-=1;for(const s in e)e[s]===n&&t.classList.remove(s)}}class mr extends na{constructor(e){super(),this.binding=e,this.bind=ku,this.unbind=Iu,this.updateTarget=Au,this.isBindingVolatile=M.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=_u,this.cleanedTargetName==="innerHTML"){const t=this.binding;this.binding=(n,s)=>H.createHTML(t(n,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Ru;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Tu,this.unbind=Ou;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=Du);break}}targetAtContent(){this.updateTarget=Eu,this.unbind=Su}createBehavior(e){return new Pu(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Pu{constructor(e,t,n,s,r,o,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=n,this.bind=s,this.unbind=r,this.updateTarget=o,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Xi.setEvent(e);const t=this.binding(this.source,this.context);Xi.setEvent(null),t!==!0&&e.preventDefault()}}let ys=null;class yr{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ys=this}static borrow(e){const t=ys||new yr;return t.directives=e,t.reset(),ys=null,t}}function Fu(i){if(i.length===1)return i[0];let e;const t=i.length,n=i.map(o=>typeof o=="string"?()=>o:(e=o.targetName||e,o.binding)),s=(o,l)=>{let a="";for(let d=0;d<t;++d)a+=n[d](o,l);return a},r=new mr(s);return r.targetName=e,r}const Bu=gr.length;function sa(i,e){const t=e.split(ta);if(t.length===1)return null;const n=[];for(let s=0,r=t.length;s<r;++s){const o=t[s],l=o.indexOf(gr);let a;if(l===-1)a=o;else{const d=parseInt(o.substring(0,l));n.push(i.directives[d]),a=o.substring(l+Bu)}a!==""&&n.push(a)}return n}function bo(i,e,t=!1){const n=e.attributes;for(let s=0,r=n.length;s<r;++s){const o=n[s],l=o.value,a=sa(i,l);let d=null;a===null?t&&(d=new mr(()=>l),d.targetName=o.name):d=Fu(a),d!==null&&(e.removeAttributeNode(o),s--,r--,i.addFactory(d))}}function Lu(i,e,t){const n=sa(i,e.textContent);if(n!==null){let s=e;for(let r=0,o=n.length;r<o;++r){const l=n[r],a=r===0?e:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",i.captureContentBinding(l)),s=a,i.targetIndex++,a!==e&&t.nextNode()}i.targetIndex--}}function Mu(i,e){const t=i.content;document.adoptNode(t);const n=yr.borrow(e);bo(n,i,!0);const s=n.behaviorFactories;n.reset();const r=H.createTemplateWalker(t);let o;for(;o=r.nextNode();)switch(n.targetIndex++,o.nodeType){case 1:bo(n,o);break;case 3:Lu(n,o,r);break;case 8:H.isMarker(o)&&n.addFactory(e[H.extractDirectiveIndexFromMarker(o)])}let l=0;(H.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),l=-1);const a=n.behaviorFactories;return n.release(),{fragment:t,viewBehaviorFactories:a,hostBehaviorFactories:s,targetOffset:l}}const vs=document.createRange();class ra{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const n=e.parentNode;let s=this.firstChild,r;for(;s!==t;)r=s.nextSibling,n.insertBefore(s,e),s=r;n.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let n=this.firstChild,s;for(;n!==t;)s=n.nextSibling,e.appendChild(n),n=s;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let n=this.firstChild,s;for(;n!==t;)s=n.nextSibling,e.removeChild(n),n=s;e.removeChild(t);const r=this.behaviors,o=this.source;for(let l=0,a=r.length;l<a;++l)r[l].unbind(o)}bind(e,t){const n=this.behaviors;if(this.source!==e)if(this.source!==null){const s=this.source;this.source=e,this.context=t;for(let r=0,o=n.length;r<o;++r){const l=n[r];l.unbind(s),l.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,r=n.length;s<r;++s)n[s].bind(e,t)}}unbind(){if(this.source===null)return;const e=this.behaviors,t=this.source;for(let n=0,s=e.length;n<s;++n)e[n].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){vs.setStartBefore(e[0].firstChild),vs.setEndAfter(e[e.length-1].lastChild),vs.deleteContents();for(let t=0,n=e.length;t<n;++t){const s=e[t],r=s.behaviors,o=s.source;for(let l=0,a=r.length;l<a;++l)r[l].unbind(o)}}}}class mo{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let d;const c=this.html;if(typeof c=="string"){d=document.createElement("template"),d.innerHTML=H.createHTML(c);const b=d.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(d=b)}else d=c;const h=Mu(d,this.directives);this.fragment=h.fragment,this.viewBehaviorFactories=h.viewBehaviorFactories,this.hostBehaviorFactories=h.hostBehaviorFactories,this.targetOffset=h.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,s=new Array(this.behaviorCount),r=H.createTemplateWalker(t);let o=0,l=this.targetOffset,a=r.nextNode();for(let d=n.length;o<d;++o){const c=n[o],h=c.targetIndex;for(;a!==null;)if(l===h){s[o]=c.createBehavior(a);break}else a=r.nextNode(),l++}if(this.hasHostBehaviors){const d=this.hostBehaviorFactories;for(let c=0,h=d.length;c<h;++c,++o)s[o]=d[c].createBehavior(e)}return new ra(t,s)}render(e,t,n){typeof t=="string"&&(t=document.getElementById(t)),n===void 0&&(n=t);const s=this.create(n);return s.bind(e,Ni),s.appendTo(t),s}}const Hu=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function U(i,...e){const t=[];let n="";for(let s=0,r=i.length-1;s<r;++s){const o=i[s];let l=e[s];if(n+=o,l instanceof mo){const a=l;l=()=>a}if(typeof l=="function"&&(l=new mr(l)),l instanceof na){const a=Hu.exec(o);a!==null&&(l.targetName=a[2])}l instanceof Jn?(n+=l.createPlaceholder(t.length),t.push(l)):n+=l}return n+=i[i.length-1],new mo(n,t)}class Ee{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}Ee.create=(()=>{if(H.supportsAdoptedStyleSheets){const i=new Map;return e=>new Vu(e,i)}return i=>new zu(i)})();function vr(i){return i.map(e=>e instanceof Ee?vr(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function oa(i){return i.map(e=>e instanceof Ee?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}const la=Symbol("prependToAdoptedStyleSheets");function aa(i){const e=[],t=[];return i.forEach(n=>(n[la]?e:t).push(n)),{prepend:e,append:t}}let ca=(i,e)=>{const{prepend:t,append:n}=aa(e);i.adoptedStyleSheets=[...t,...i.adoptedStyleSheets,...n]},da=(i,e)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(H.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),ca=(i,e)=>{const{prepend:t,append:n}=aa(e);i.adoptedStyleSheets.splice(0,0,...t),i.adoptedStyleSheets.push(...n)},da=(i,e)=>{for(const t of e){const n=i.adoptedStyleSheets.indexOf(t);n!==-1&&i.adoptedStyleSheets.splice(n,1)}}}catch{}class Vu extends Ee{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=oa(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,t=this.styleSheetCache;this._styleSheets=vr(e).map(n=>{if(n instanceof CSSStyleSheet)return n;let s=t.get(n);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(n),t.set(n,s)),s})}return this._styleSheets}addStylesTo(e){ca(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){da(e,this.styleSheets),super.removeStylesFrom(e)}}let Nu=0;function ju(){return`fast-style-class-${++Nu}`}class zu extends Ee{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=oa(e),this.styleSheets=vr(e),this.styleClass=ju()}addStylesTo(e){const t=this.styleSheets,n=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const r=document.createElement("style");r.innerHTML=t[s],r.className=n,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const t=e.querySelectorAll(`.${this.styleClass}`);for(let n=0,s=t.length;n<s;++n)e.removeChild(t[n]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Ln=Object.freeze({locate:Kl()}),ua={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},Ge={toView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e.toString()},fromView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e}};class Mn{constructor(e,t,n=t.toLowerCase(),s="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=n,this.mode=s,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,s==="boolean"&&r===void 0&&(this.converter=ua)}setValue(e,t){const n=e[this.fieldName],s=this.converter;s!==void 0&&(t=s.fromView(t)),n!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](n,t),e.$fastController.notify(this.name))}getValue(e){return M.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,n=this.guards;n.has(e)||t==="fromView"||H.queueUpdate(()=>{n.add(e);const s=e[this.fieldName];switch(t){case"reflect":const r=this.converter;H.setAttribute(e,this.attribute,r!==void 0?r.toView(s):s);break;case"boolean":H.setBooleanAttribute(e,this.attribute,s);break}n.delete(e)})}static collect(e,...t){const n=[];t.push(Ln.locate(e));for(let s=0,r=t.length;s<r;++s){const o=t[s];if(o!==void 0)for(let l=0,a=o.length;l<a;++l){const d=o[l];typeof d=="string"?n.push(new Mn(e,d)):n.push(new Mn(e,d.property,d.attribute,d.mode,d.converter))}}return n}}function m(i,e){let t;function n(s,r){arguments.length>1&&(t.property=r),Ln.locate(s.constructor).push(t)}if(arguments.length>1){t={},n(i,e);return}return t=i===void 0?{}:i,n}const yo={mode:"open"},vo={},Us=Yi.getById(4,()=>{const i=new Map;return Object.freeze({register(e){return i.has(e.type)?!1:(i.set(e.type,e),!0)},getByType(e){return i.get(e)}})});class Yn{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const n=Mn.collect(e,t.attributes),s=new Array(n.length),r={},o={};for(let l=0,a=n.length;l<a;++l){const d=n[l];s[l]=d.attribute,r[d.name]=d,o[d.attribute]=d}this.attributes=n,this.observedAttributes=s,this.propertyLookup=r,this.attributeLookup=o,this.shadowOptions=t.shadowOptions===void 0?yo:t.shadowOptions===null?void 0:Object.assign(Object.assign({},yo),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?vo:Object.assign(Object.assign({},vo),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?Ee.create(t.styles):t.styles instanceof Ee?t.styles:Ee.create([t.styles])}get isDefined(){return!!Us.getByType(this.type)}define(e=customElements){const t=this.type;if(Us.register(this)){const n=this.attributes,s=t.prototype;for(let r=0,o=n.length;r<o;++r)M.defineProperty(s,n[r]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Yn.forType=Us.getByType;const ha=new WeakMap,Uu={bubbles:!0,composed:!0,cancelable:!0};function xs(i){return i.shadowRoot||ha.get(i)||null}class xr extends ia{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const n=t.shadowOptions;if(n!==void 0){const r=e.attachShadow(n);n.mode==="closed"&&ha.set(e,r)}const s=M.getAccessors(e);if(s.length>0){const r=this.boundObservables=Object.create(null);for(let o=0,l=s.length;o<l;++o){const a=s[o].name,d=e[a];d!==void 0&&(delete e[a],r[a]=d)}}}get isConnected(){return M.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,M.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const t=xs(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const n=e.behaviors;e.addStylesTo(t),n!==null&&this.addBehaviors(n)}}removeStyles(e){const t=xs(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const n=e.behaviors;e.removeStylesFrom(t),n!==null&&this.removeBehaviors(n)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),n=e.length,s=[];for(let r=0;r<n;++r){const o=e[r];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),s.push(o))}if(this._isConnected){const r=this.element;for(let o=0;o<s.length;++o)s[o].bind(r,Ni)}}removeBehaviors(e,t=!1){const n=this.behaviors;if(n===null)return;const s=e.length,r=[];for(let o=0;o<s;++o){const l=e[o];if(n.has(l)){const a=n.get(l)-1;a===0||t?n.delete(l)&&r.push(l):n.set(l,a)}}if(this._isConnected){const o=this.element;for(let l=0;l<r.length;++l)r[l].unbind(o)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Ni);const t=this.behaviors;if(t!==null)for(const[n]of t)n.bind(e,Ni);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const t=this.behaviors;if(t!==null){const n=this.element;for(const[s]of t)s.unbind(n)}}onAttributeChangedCallback(e,t,n){const s=this.definition.attributeLookup[e];s!==void 0&&s.onAttributeChangedCallback(this.element,n)}emit(e,t,n){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Uu),n))):!1}finishInitialization(){const e=this.element,t=this.boundObservables;if(t!==null){const s=Object.keys(t);for(let r=0,o=s.length;r<o;++r){const l=s[r];e[l]=t[l]}this.boundObservables=null}const n=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,n=xs(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||H.removeChildNodes(n),e&&(this.view=e.render(t,n,t))}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const n=Yn.forType(e.constructor);if(n===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new xr(e,n)}}function xo(i){return class extends i{constructor(){super(),xr.forCustomElement(this)}$emit(e,t,n){return this.$fastController.emit(e,t,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,n){this.$fastController.onAttributeChangedCallback(e,t,n)}}}const Xn=Object.assign(xo(HTMLElement),{from(i){return xo(i)},define(i,e){return new Yn(i,e).define().type}});class fa{createCSS(){return""}createBehavior(){}}function qu(i,e){const t=[];let n="";const s=[];for(let r=0,o=i.length-1;r<o;++r){n+=i[r];let l=e[r];if(l instanceof fa){const a=l.createBehavior();l=l.createCSS(),a&&s.push(a)}l instanceof Ee||l instanceof CSSStyleSheet?(n.trim()!==""&&(t.push(n),n=""),t.push(l)):n+=l}return n+=i[i.length-1],n.trim()!==""&&t.push(n),{styles:t,behaviors:s}}function se(i,...e){const{styles:t,behaviors:n}=qu(i,e),s=Ee.create(t);return n.length&&s.withBehaviors(...n),s}function Ue(i,e,t){return{index:i,removed:e,addedCount:t}}const pa=0,ga=1,qs=2,Ws=3;function Wu(i,e,t,n,s,r){const o=r-s+1,l=t-e+1,a=new Array(o);let d,c;for(let h=0;h<o;++h)a[h]=new Array(l),a[h][0]=h;for(let h=0;h<l;++h)a[0][h]=h;for(let h=1;h<o;++h)for(let b=1;b<l;++b)i[e+b-1]===n[s+h-1]?a[h][b]=a[h-1][b-1]:(d=a[h-1][b]+1,c=a[h][b-1]+1,a[h][b]=d<c?d:c);return a}function Gu(i){let e=i.length-1,t=i[0].length-1,n=i[e][t];const s=[];for(;e>0||t>0;){if(e===0){s.push(qs),t--;continue}if(t===0){s.push(Ws),e--;continue}const r=i[e-1][t-1],o=i[e-1][t],l=i[e][t-1];let a;o<l?a=o<r?o:r:a=l<r?l:r,a===r?(r===n?s.push(pa):(s.push(ga),n=r),e--,t--):a===o?(s.push(Ws),e--,n=o):(s.push(qs),t--,n=l)}return s.reverse(),s}function Qu(i,e,t){for(let n=0;n<t;++n)if(i[n]!==e[n])return n;return t}function Ju(i,e,t){let n=i.length,s=e.length,r=0;for(;r<t&&i[--n]===e[--s];)r++;return r}function Yu(i,e,t,n){return e<t||n<i?-1:e===t||n===i?0:i<t?e<n?e-t:n-t:n<e?n-i:e-i}function ba(i,e,t,n,s,r){let o=0,l=0;const a=Math.min(t-e,r-s);if(e===0&&s===0&&(o=Qu(i,n,a)),t===i.length&&r===n.length&&(l=Ju(i,n,a-o)),e+=o,s+=o,t-=l,r-=l,t-e===0&&r-s===0)return Nt;if(e===t){const A=Ue(e,[],0);for(;s<r;)A.removed.push(n[s++]);return[A]}else if(s===r)return[Ue(e,[],t-e)];const d=Gu(Wu(i,e,t,n,s,r)),c=[];let h,b=e,C=s;for(let A=0;A<d.length;++A)switch(d[A]){case pa:h!==void 0&&(c.push(h),h=void 0),b++,C++;break;case ga:h===void 0&&(h=Ue(b,[],0)),h.addedCount++,b++,h.removed.push(n[C]),C++;break;case qs:h===void 0&&(h=Ue(b,[],0)),h.addedCount++,b++;break;case Ws:h===void 0&&(h=Ue(b,[],0)),h.removed.push(n[C]),C++;break}return h!==void 0&&c.push(h),c}const wo=Array.prototype.push;function Xu(i,e,t,n){const s=Ue(e,t,n);let r=!1,o=0;for(let l=0;l<i.length;l++){const a=i[l];if(a.index+=o,r)continue;const d=Yu(s.index,s.index+s.removed.length,a.index,a.index+a.addedCount);if(d>=0){i.splice(l,1),l--,o-=a.addedCount-a.removed.length,s.addedCount+=a.addedCount-d;const c=s.removed.length+a.removed.length-d;if(!s.addedCount&&!c)r=!0;else{let h=a.removed;if(s.index<a.index){const b=s.removed.slice(0,a.index-s.index);wo.apply(b,h),h=b}if(s.index+s.removed.length>a.index+a.addedCount){const b=s.removed.slice(a.index+a.addedCount-s.index);wo.apply(h,b)}s.removed=h,a.index<s.index&&(s.index=a.index)}}else if(s.index<a.index){r=!0,i.splice(l,0,s),l++;const c=s.addedCount-s.removed.length;a.index+=c,o+=c}}r||i.push(s)}function Zu(i){const e=[];for(let t=0,n=i.length;t<n;t++){const s=i[t];Xu(e,s.index,s.removed,s.addedCount)}return e}function Ku(i,e){let t=[];const n=Zu(e);for(let s=0,r=n.length;s<r;++s){const o=n[s];if(o.addedCount===1&&o.removed.length===1){o.removed[0]!==i[o.index]&&t.push(o);continue}t=t.concat(ba(i,o.index,o.index+o.addedCount,o.removed,0,o.removed.length))}return t}let Co=!1;function ws(i,e){let t=i.index;const n=e.length;return t>n?t=n-i.addedCount:t<0&&(t=n+i.removed.length+t-i.addedCount),t<0&&(t=0),i.index=t,i}class eh extends Bn{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,H.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,H.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const n=t===void 0?Ku(this.source,e):ba(this.source,0,this.source.length,t,0,t.length);this.notify(n)}}function th(){if(Co)return;Co=!0,M.setArrayObserverFactory(a=>new eh(a));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const e=i.pop,t=i.push,n=i.reverse,s=i.shift,r=i.sort,o=i.splice,l=i.unshift;i.pop=function(){const a=this.length>0,d=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(Ue(this.length,[d],0)),d},i.push=function(){const a=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(ws(Ue(this.length-arguments.length,[],arguments.length),this)),a},i.reverse=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=n.apply(this,arguments);return d!==void 0&&d.reset(a),c},i.shift=function(){const a=this.length>0,d=s.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(Ue(0,[d],0)),d},i.sort=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=r.apply(this,arguments);return d!==void 0&&d.reset(a),c},i.splice=function(){const a=o.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(ws(Ue(+arguments[0],a,arguments.length>2?arguments.length-2:0),this)),a},i.unshift=function(){const a=l.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(ws(Ue(0,[],arguments.length),this)),a}}class ih{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Se(i){return new br("fast-ref",ih,i)}const ma=i=>typeof i=="function",nh=()=>null;function $o(i){return i===void 0?nh:ma(i)?i:()=>i}function wr(i,e,t){const n=ma(i)?i:()=>i,s=$o(e),r=$o(t);return(o,l)=>n(o,l)?s(o,l):r(o,l)}function sh(i,e,t,n){i.bind(e[t],n)}function rh(i,e,t,n){const s=Object.create(n);s.index=t,s.length=e.length,i.bind(e[t],s)}class oh{constructor(e,t,n,s,r,o){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=o,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=sh,this.itemsBindingObserver=M.binding(t,this,n),this.templateBindingObserver=M.binding(s,this,r),o.positioning&&(this.bindView=rh)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=Nt;return}const t=this.itemsObserver,n=this.itemsObserver=M.getNotifier(this.items),s=t!==n;s&&t!==null&&t.unsubscribe(this),(s||e)&&n.subscribe(this)}updateViews(e){const t=this.childContext,n=this.views,s=this.bindView,r=this.items,o=this.template,l=this.options.recycle,a=[];let d=0,c=0;for(let h=0,b=e.length;h<b;++h){const C=e[h],A=C.removed;let E=0,Q=C.index;const j=Q+C.addedCount,z=n.splice(C.index,A.length),K=c=a.length+z.length;for(;Q<j;++Q){const D=n[Q],re=D?D.firstChild:this.location;let ve;l&&c>0?(E<=K&&z.length>0?(ve=z[E],E++):(ve=a[d],d++),c--):ve=o.create(),n.splice(Q,0,ve),s(ve,r,Q,t),ve.insertBefore(re)}z[E]&&a.push(...z.slice(E))}for(let h=d,b=a.length;h<b;++h)a[h].dispose();if(this.options.positioning)for(let h=0,b=n.length;h<b;++h){const C=n[h].context;C.length=b,C.index=h}}refreshAllViews(e=!1){const t=this.items,n=this.childContext,s=this.template,r=this.location,o=this.bindView;let l=t.length,a=this.views,d=a.length;if((l===0||e||!this.options.recycle)&&(ra.disposeContiguousBatch(a),d=0),d===0){this.views=a=new Array(l);for(let c=0;c<l;++c){const h=s.create();o(h,t,c,n),a[c]=h,h.insertBefore(r)}}else{let c=0;for(;c<l;++c)if(c<d){const b=a[c];o(b,t,c,n)}else{const b=s.create();o(b,t,c,n),a.push(b),b.insertBefore(r)}const h=a.splice(c,d-c);for(c=0,l=h.length;c<l;++c)h[c].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,n=e.length;t<n;++t)e[t].unbind()}}class ya extends Jn{constructor(e,t,n){super(),this.itemsBinding=e,this.templateBinding=t,this.options=n,this.createPlaceholder=H.createBlockPlaceholder,th(),this.isItemsBindingVolatile=M.isVolatileBinding(e),this.isTemplateBindingVolatile=M.isVolatileBinding(t)}createBehavior(e){return new oh(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Cr(i){return i?function(e,t,n){return e.nodeType===1&&e.matches(i)}:function(e,t,n){return e.nodeType===1}}class va{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=M.getAccessors(e).some(n=>n.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Nt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class lh extends va{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function je(i){return typeof i=="string"&&(i={property:i}),new br("fast-slotted",lh,i)}class ah extends va{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function xa(i){return typeof i=="string"&&(i={property:i}),new br("fast-children",ah,i)}class fi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const pi=(i,e)=>U`
    <span
        part="end"
        ${Se("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Se("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,gi=(i,e)=>U`
    <span
        part="start"
        ${Se("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Se("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;U`
    <span part="end" ${Se("endContainer")}>
        <slot
            name="end"
            ${Se("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`;U`
    <span part="start" ${Se("startContainer")}>
        <slot
            name="start"
            ${Se("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function p(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}const Cs=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,e){return function(t){Reflect.defineMetadata(i,e,t)}},Reflect.defineMetadata=function(i,e,t){let n=Cs.get(t);n===void 0&&Cs.set(t,n=new Map),n.set(i,e)},Reflect.getOwnMetadata=function(i,e){const t=Cs.get(e);if(t!==void 0)return t.get(i)});class ch{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ca(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:n,key:s}=this;return this.container=this.key=void 0,n.registerResolver(s,new Ve(s,e,t))}}function Ii(i){const e=i.slice(),t=Object.keys(i),n=t.length;let s;for(let r=0;r<n;++r)s=t[r],$a(s)||(e[s]=i[s]);return e}const dh=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Ve(i,1,i)},transient(i){return new Ve(i,2,i)}}),$s=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:dh.singleton})}),ko=new Map;function To(i){return e=>Reflect.getOwnMetadata(i,e)}let Io=null;const ne=Object.freeze({createContainer(i){return new ji(null,Object.assign({},$s.default,i))},findResponsibleContainer(i){const e=i.$$container$$;return e&&e.responsibleForOwnerRequests?e:ne.findParentContainer(i)},findParentContainer(i){const e=new CustomEvent(wa,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(e),e.detail.container||ne.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,e){return i?i.$$container$$||new ji(i,Object.assign({},$s.default,e,{parentLocator:ne.findParentContainer})):Io||(Io=new ji(null,Object.assign({},$s.default,e,{parentLocator:()=>null})))},getDesignParamtypes:To("design:paramtypes"),getAnnotationParamtypes:To("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let e=this.getAnnotationParamtypes(i);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],i),e},getDependencies(i){let e=ko.get(i);if(e===void 0){const t=i.inject;if(t===void 0){const n=ne.getDesignParamtypes(i),s=ne.getAnnotationParamtypes(i);if(n===void 0)if(s===void 0){const r=Object.getPrototypeOf(i);typeof r=="function"&&r!==Function.prototype?e=Ii(ne.getDependencies(r)):e=[]}else e=Ii(s);else if(s===void 0)e=Ii(n);else{e=Ii(n);let r=s.length,o;for(let d=0;d<r;++d)o=s[d],o!==void 0&&(e[d]=o);const l=Object.keys(s);r=l.length;let a;for(let d=0;d<r;++d)a=l[d],$a(a)||(e[a]=s[a])}}else e=Ii(t);ko.set(i,e)}return e},defineProperty(i,e,t,n=!1){const s=`$di_${e}`;Reflect.defineProperty(i,e,{get:function(){let r=this[s];if(r===void 0&&(r=(this instanceof HTMLElement?ne.findResponsibleContainer(this):ne.getOrCreateDOMContainer()).get(t),this[s]=r,n&&this instanceof Xn)){const l=this.$fastController,a=()=>{const c=ne.findResponsibleContainer(this).get(t),h=this[s];c!==h&&(this[s]=r,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return r}})},createInterface(i,e){const t=typeof i=="function"?i:e,n=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Ro,s=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,r=function(o,l,a){if(o==null||new.target!==void 0)throw new Error(`No registration for interface: '${r.friendlyName}'`);if(l)ne.defineProperty(o,l,r,s);else{const d=ne.getOrCreateAnnotationParamTypes(o);d[a]=r}};return r.$isInterface=!0,r.friendlyName=n??"(anonymous)",t!=null&&(r.register=function(o,l){return t(new ch(o,l??r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject(...i){return function(e,t,n){if(typeof n=="number"){const s=ne.getOrCreateAnnotationParamTypes(e),r=i[0];r!==void 0&&(s[n]=r)}else if(t)ne.defineProperty(e,t,i[0]);else{const s=n?ne.getOrCreateAnnotationParamTypes(n.value):ne.getOrCreateAnnotationParamTypes(e);let r;for(let o=0;o<i.length;++o)r=i[o],r!==void 0&&(s[o]=r)}}},transient(i){return i.register=function(t){return Zi.transient(i,i).register(t)},i.registerInRequestor=!1,i},singleton(i,e=hh){return i.register=function(n){return Zi.singleton(i,i).register(n)},i.registerInRequestor=e.scoped,i}}),uh=ne.createInterface("Container");ne.inject;const hh={scoped:!1};class Ve{constructor(e,t,n){this.key=e,this.strategy=t,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{const n=e.getFactory(this.state);if(n===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,n,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(s=(n=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||n===void 0?void 0:n.call(t,e))!==null&&s!==void 0?s:null;default:return null}}}function So(i){return this.get(i)}function fh(i,e){return e(i)}class ph{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let n;return t===void 0?n=new this.Type(...this.dependencies.map(So,e)):n=new this.Type(...this.dependencies.map(So,e),...t),this.transformers==null?n:this.transformers.reduce(fh,n)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const gh={$isResolver:!0,resolve(i,e){return e}};function Sn(i){return typeof i.register=="function"}function bh(i){return Sn(i)&&typeof i.registerInRequestor=="boolean"}function Oo(i){return bh(i)&&i.registerInRequestor}function mh(i){return i.prototype!==void 0}const yh=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),wa="__DI_LOCATE_PARENT__",ks=new Map;class ji{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(uh,gh),e instanceof Node&&e.addEventListener(wa,n=>{n.composedPath()[0]!==this.owner&&(n.detail.container=this,n.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,n,s,r,o;const l=this.context;for(let a=0,d=e.length;a<d;++a)if(t=e[a],!!Eo(t))if(Sn(t))t.register(this,l);else if(mh(t))Zi.singleton(t,t).register(this);else for(n=Object.keys(t),r=0,o=n.length;r<o;++r)s=t[n[r]],Eo(s)&&(Sn(s)?s.register(this,l):this.register(s));return--this.registerDepth,this}registerResolver(e,t){mn(e);const n=this.resolvers,s=n.get(e);return s==null?n.set(e,t):s instanceof Ve&&s.strategy===4?s.state.push(t):n.set(e,new Ve(e,4,[s,t])),t}registerTransformer(e,t){const n=this.getResolver(e);if(n==null)return!1;if(n.getFactory){const s=n.getFactory(this);return s==null?!1:(s.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(mn(e),e.resolve!==void 0)return e;let n=this,s;for(;n!=null;)if(s=n.resolvers.get(e),s==null){if(n.parent==null){const r=Oo(e)?this:n;return t?this.jitRegister(e,r):null}n=n.parent}else return s;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(mn(e),e.$isResolver)return e.resolve(this,this);let t=this,n;for(;t!=null;)if(n=t.resolvers.get(e),n==null){if(t.parent==null){const s=Oo(e)?this:t;return n=this.jitRegister(e,s),n.resolve(t,this)}t=t.parent}else return n.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){mn(e);const n=this;let s=n,r;if(t){let o=Nt;for(;s!=null;)r=s.resolvers.get(e),r!=null&&(o=o.concat(Ao(r,s,n))),s=s.parent;return o}else for(;s!=null;)if(r=s.resolvers.get(e),r==null){if(s=s.parent,s==null)return Nt}else return Ao(r,s,n);return Nt}getFactory(e){let t=ks.get(e);if(t===void 0){if(vh(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);ks.set(e,t=new ph(e,ne.getDependencies(e)))}return t}registerFactory(e,t){ks.set(e,t)}createChild(e){return new ji(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(yh.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Sn(e)){const n=e.register(t);if(!(n instanceof Object)||n.resolve==null){const s=t.resolvers.get(e);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return n}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const n=this.config.defaultResolver(e,t);return t.resolvers.set(e,n),n}}}}const Ts=new WeakMap;function Ca(i){return function(e,t,n){if(Ts.has(n))return Ts.get(n);const s=i(e,t,n);return Ts.set(n,s),s}}const Zi=Object.freeze({instance(i,e){return new Ve(i,0,e)},singleton(i,e){return new Ve(i,1,e)},transient(i,e){return new Ve(i,2,e)},callback(i,e){return new Ve(i,3,e)},cachedCallback(i,e){return new Ve(i,3,Ca(e))},aliasTo(i,e){return new Ve(e,5,i)}});function mn(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Ao(i,e,t){if(i instanceof Ve&&i.strategy===4){const n=i.state;let s=n.length;const r=new Array(s);for(;s--;)r[s]=n[s].resolve(e,t);return r}return[i.resolve(e,t)]}const Ro="(anonymous)";function Eo(i){return typeof i=="object"&&i!==null||typeof i=="function"}const vh=function(){const i=new WeakMap;let e=!1,t="",n=0;return function(s){return e=i.get(s),e===void 0&&(t=s.toString(),n=t.length,e=n>=29&&n<=100&&t.charCodeAt(n-1)===125&&t.charCodeAt(n-2)<=32&&t.charCodeAt(n-3)===93&&t.charCodeAt(n-4)===101&&t.charCodeAt(n-5)===100&&t.charCodeAt(n-6)===111&&t.charCodeAt(n-7)===99&&t.charCodeAt(n-8)===32&&t.charCodeAt(n-9)===101&&t.charCodeAt(n-10)===118&&t.charCodeAt(n-11)===105&&t.charCodeAt(n-12)===116&&t.charCodeAt(n-13)===97&&t.charCodeAt(n-14)===110&&t.charCodeAt(n-15)===88,i.set(s,e)),e}}(),yn={};function $a(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const e=yn[i];if(e!==void 0)return e;const t=i.length;if(t===0)return yn[i]=!1;let n=0;for(let s=0;s<t;++s)if(n=i.charCodeAt(s),s===0&&n===48&&t>1||n<48||n>57)return yn[i]=!1;return yn[i]=!0}default:return!1}}function _o(i){return`${i.toLowerCase()}:presentation`}const vn=new Map,ka=Object.freeze({define(i,e,t){const n=_o(i);vn.get(n)===void 0?vn.set(n,e):vn.set(n,!1),t.register(Zi.instance(n,e))},forTag(i,e){const t=_o(i),n=vn.get(t);return n===!1?ne.findResponsibleContainer(e).get(t):n||null}});class xh{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?Ee.create(t):t instanceof Ee?t:Ee.create([t])}applyTo(e){const t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}}class ee extends Xn{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=ka.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new wh(this===ee?class extends ee{}:this,e,t)}}p([O],ee.prototype,"template",void 0);p([O],ee.prototype,"styles",void 0);function Si(i,e,t){return typeof i=="function"?i(e,t):i}class wh{constructor(e,t,n){this.type=e,this.elementDefinition=t,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const n=this.definition,s=this.overrideDefinition,o=`${n.prefix||t.elementPrefix}-${n.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new xh(Si(n.template,l,n),Si(n.styles,l,n));l.definePresentation(a);let d=Si(n.shadowOptions,l,n);l.shadowRootMode&&(d?s.shadowOptions||(d.mode=l.shadowRootMode):d!==null&&(d={mode:l.shadowRootMode})),l.defineElement({elementOptions:Si(n.elementOptions,l,n),shadowOptions:d,attributes:Si(n.attributes,l,n)})}})}}function De(i,...e){const t=Ln.locate(i);e.forEach(n=>{Object.getOwnPropertyNames(n.prototype).forEach(r=>{r!=="constructor"&&Object.defineProperty(i.prototype,r,Object.getOwnPropertyDescriptor(n.prototype,r))}),Ln.locate(n).forEach(r=>t.push(r))})}const $r={horizontal:"horizontal",vertical:"vertical"};function Ch(i,e){let t=i.length;for(;t--;)if(e(i[t],t,i))return t;return-1}function $h(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function kh(...i){return i.every(e=>e instanceof HTMLElement)}function Th(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Bt;function Ih(){if(typeof Bt=="boolean")return Bt;if(!$h())return Bt=!1,Bt;const i=document.createElement("style"),e=Th();e!==null&&i.setAttribute("nonce",e),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Bt=!0}catch{Bt=!1}finally{document.head.removeChild(i)}return Bt}const Do="focus",Po="focusin",ci="focusout",di="keydown";var Fo;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Fo||(Fo={}));const Ut="ArrowDown",Ki="ArrowLeft",en="ArrowRight",qt="ArrowUp",sn="Enter",Zn="Escape",bi="Home",mi="End",Sh="F2",Oh="PageDown",Ah="PageUp",rn=" ",kr="Tab",Rh={ArrowDown:Ut,ArrowLeft:Ki,ArrowRight:en,ArrowUp:qt};var ui;(function(i){i.ltr="ltr",i.rtl="rtl"})(ui||(ui={}));function Eh(i,e,t){return Math.min(Math.max(t,i),e)}function xn(i,e,t=0){return[e,t]=[e,t].sort((n,s)=>n-s),e<=i&&i<t}let _h=0;function Hn(i=""){return`${i}${_h++}`}const Dh=(i,e)=>U`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Se("control")}
    >
        ${gi(i,e)}
        <span class="content" part="content">
            <slot ${je("defaultSlottedContent")}></slot>
        </span>
        ${pi(i,e)}
    </a>
`;class te{}p([m({attribute:"aria-atomic"})],te.prototype,"ariaAtomic",void 0);p([m({attribute:"aria-busy"})],te.prototype,"ariaBusy",void 0);p([m({attribute:"aria-controls"})],te.prototype,"ariaControls",void 0);p([m({attribute:"aria-current"})],te.prototype,"ariaCurrent",void 0);p([m({attribute:"aria-describedby"})],te.prototype,"ariaDescribedby",void 0);p([m({attribute:"aria-details"})],te.prototype,"ariaDetails",void 0);p([m({attribute:"aria-disabled"})],te.prototype,"ariaDisabled",void 0);p([m({attribute:"aria-errormessage"})],te.prototype,"ariaErrormessage",void 0);p([m({attribute:"aria-flowto"})],te.prototype,"ariaFlowto",void 0);p([m({attribute:"aria-haspopup"})],te.prototype,"ariaHaspopup",void 0);p([m({attribute:"aria-hidden"})],te.prototype,"ariaHidden",void 0);p([m({attribute:"aria-invalid"})],te.prototype,"ariaInvalid",void 0);p([m({attribute:"aria-keyshortcuts"})],te.prototype,"ariaKeyshortcuts",void 0);p([m({attribute:"aria-label"})],te.prototype,"ariaLabel",void 0);p([m({attribute:"aria-labelledby"})],te.prototype,"ariaLabelledby",void 0);p([m({attribute:"aria-live"})],te.prototype,"ariaLive",void 0);p([m({attribute:"aria-owns"})],te.prototype,"ariaOwns",void 0);p([m({attribute:"aria-relevant"})],te.prototype,"ariaRelevant",void 0);p([m({attribute:"aria-roledescription"})],te.prototype,"ariaRoledescription",void 0);class Qe extends ee{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var t;(t=this.control)===null||t===void 0||t.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}p([m],Qe.prototype,"download",void 0);p([m],Qe.prototype,"href",void 0);p([m],Qe.prototype,"hreflang",void 0);p([m],Qe.prototype,"ping",void 0);p([m],Qe.prototype,"referrerpolicy",void 0);p([m],Qe.prototype,"rel",void 0);p([m],Qe.prototype,"target",void 0);p([m],Qe.prototype,"type",void 0);p([O],Qe.prototype,"defaultSlottedContent",void 0);class Tr{}p([m({attribute:"aria-expanded"})],Tr.prototype,"ariaExpanded",void 0);De(Tr,te);De(Qe,fi,Tr);const Ph=i=>{const e=i.closest("[dir]");return e!==null&&e.dir==="rtl"?ui.rtl:ui.ltr},Ta=(i,e)=>U`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let on=class extends ee{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}};p([m({attribute:"fill"})],on.prototype,"fill",void 0);p([m({attribute:"color"})],on.prototype,"color",void 0);p([m({mode:"boolean"})],on.prototype,"circular",void 0);const Fh=(i,e)=>U`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Se("control")}
    >
        ${gi(i,e)}
        <span class="content" part="content">
            <slot ${je("defaultSlottedContent")}></slot>
        </span>
        ${pi(i,e)}
    </button>
`,Bo="form-associated-proxy",Lo="ElementInternals",Mo=Lo in window&&"setFormValue"in window[Lo].prototype,Ho=new WeakMap;function ln(i){const e=class extends i{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Mo}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,n=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=t?n.concat(Array.from(t)):n;return Object.freeze(s)}else return Nt}valueChanged(t,n){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,n){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),H.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),H.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Mo)return null;let t=Ho.get(this);return t||(t=this.attachInternals(),Ho.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,n,s){this.elementInternals?this.elementInternals.setValidity(t,n,s):typeof n=="string"&&this.proxy.setCustomValidity(n)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(n=>this.proxy.addEventListener(n,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Bo),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Bo)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,n){this.elementInternals&&this.elementInternals.setFormValue(t,n||t)}_keypressHandler(t){switch(t.key){case sn:if(this.form instanceof HTMLFormElement){const n=this.form.querySelector("[type=submit]");n==null||n.click()}break}}stopPropagation(t){t.stopPropagation()}};return m({mode:"boolean"})(e.prototype,"disabled"),m({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),m({attribute:"current-value"})(e.prototype,"currentValue"),m(e.prototype,"name"),m({mode:"boolean"})(e.prototype,"required"),O(e.prototype,"value"),e}function Ia(i){class e extends ln(i){}class t extends e{constructor(...s){super(s),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(s,r){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),s!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(s,r){this.checked=this.currentChecked}updateForm(){const s=this.checked?this.value:null;this.setFormValue(s,s)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return m({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),m({attribute:"current-checked",converter:ua})(t.prototype,"currentChecked"),O(t.prototype,"defaultChecked"),O(t.prototype,"checked"),t}class Bh extends ee{}class Lh extends ln(Bh){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Je=class extends Lh{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(n=>{n.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(n=>{n.removeEventListener("click",this.handleClick)})}};p([m({mode:"boolean"})],Je.prototype,"autofocus",void 0);p([m({attribute:"form"})],Je.prototype,"formId",void 0);p([m],Je.prototype,"formaction",void 0);p([m],Je.prototype,"formenctype",void 0);p([m],Je.prototype,"formmethod",void 0);p([m({mode:"boolean"})],Je.prototype,"formnovalidate",void 0);p([m],Je.prototype,"formtarget",void 0);p([m],Je.prototype,"type",void 0);p([O],Je.prototype,"defaultSlottedContent",void 0);class Kn{}p([m({attribute:"aria-expanded"})],Kn.prototype,"ariaExpanded",void 0);p([m({attribute:"aria-pressed"})],Kn.prototype,"ariaPressed",void 0);De(Kn,te);De(Je,fi,Kn);const wn={none:"none",default:"default",sticky:"sticky"},mt={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},zi={default:"default",header:"header",stickyHeader:"sticky-header"};let be=class extends ee{constructor(){super(...arguments),this.rowType=zi.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new ya(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(ci,this.handleFocusout),this.addEventListener(di,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(ci,this.handleFocusout),this.removeEventListener(di,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Ki:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case en:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case bi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case mi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===zi.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===zi.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};p([m({attribute:"grid-template-columns"})],be.prototype,"gridTemplateColumns",void 0);p([m({attribute:"row-type"})],be.prototype,"rowType",void 0);p([O],be.prototype,"rowData",void 0);p([O],be.prototype,"columnDefinitions",void 0);p([O],be.prototype,"cellItemTemplate",void 0);p([O],be.prototype,"headerCellItemTemplate",void 0);p([O],be.prototype,"rowIndex",void 0);p([O],be.prototype,"isActiveRow",void 0);p([O],be.prototype,"activeCellItemTemplate",void 0);p([O],be.prototype,"defaultCellItemTemplate",void 0);p([O],be.prototype,"defaultHeaderCellItemTemplate",void 0);p([O],be.prototype,"cellElements",void 0);function Mh(i){const e=i.tagFor(be);return U`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,n)=>n.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,n)=>n.parent.headerCellItemTemplate}"
    ></${e}>
`}const Hh=(i,e)=>{const t=Mh(i),n=i.tagFor(be);return U`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>n}"
            :defaultRowItemTemplate="${t}"
            ${xa({property:"rowElements",filter:Cr("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};let me=class Gs extends ee{constructor(){super(),this.noTabbing=!1,this.generateHeader=wn.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,n)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const s=Math.max(0,Math.min(this.rowElements.length-1,e)),o=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(o.length-1,t)),a=o[l];n&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&a.scrollIntoView({block:"center",inline:"center"}),a.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(n=>{n.addedNodes.forEach(s=>{s.nodeType===1&&s.getAttribute("role")==="row"&&(s.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,H.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,n)=>{const s=t;s.rowIndex=n,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(n=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Gs.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Gs.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new ya(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Do,this.handleFocus),this.addEventListener(di,this.handleKeydown),this.addEventListener(ci,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),H.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Do,this.handleFocus),this.removeEventListener(di,this.handleKeydown),this.removeEventListener(ci,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const n=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,r=this.rowElements[n];switch(e.key){case qt:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Ut:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Ah:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){const o=this.rowElements[t];if(o.offsetTop<this.scrollTop){this.scrollTop=o.offsetTop+o.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Oh:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=n||r.offsetTop+r.offsetHeight<=s){this.focusOnCell(n,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=n;t++){const o=this.rowElements[t];if(o.offsetTop+o.offsetHeight>s){let l=0;this.generateHeader===wn.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=o.offsetTop-l;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case bi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case mi:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,H.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==wn.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===wn.sticky?zi.stickyHeader:zi.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};me.generateColumns=i=>Object.getOwnPropertyNames(i).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`}));p([m({attribute:"no-tabbing",mode:"boolean"})],me.prototype,"noTabbing",void 0);p([m({attribute:"generate-header"})],me.prototype,"generateHeader",void 0);p([m({attribute:"grid-template-columns"})],me.prototype,"gridTemplateColumns",void 0);p([O],me.prototype,"rowsData",void 0);p([O],me.prototype,"columnDefinitions",void 0);p([O],me.prototype,"rowItemTemplate",void 0);p([O],me.prototype,"cellItemTemplate",void 0);p([O],me.prototype,"headerCellItemTemplate",void 0);p([O],me.prototype,"focusRowIndex",void 0);p([O],me.prototype,"focusColumnIndex",void 0);p([O],me.prototype,"defaultRowItemTemplate",void 0);p([O],me.prototype,"rowElementTag",void 0);p([O],me.prototype,"rowElements",void 0);const Vh=U`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,Nh=U`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;let Ot=class extends ee{constructor(){super(...arguments),this.cellType=mt.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Po,this.handleFocusin),this.addEventListener(ci,this.handleFocusout),this.addEventListener(di,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Po,this.handleFocusin),this.removeEventListener(ci,this.handleFocusout),this.removeEventListener(di,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case mt.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===mt.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===mt.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case sn:case Sh:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case mt.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case Zn:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case mt.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Nh.render(this,this);break;case void 0:case mt.rowHeader:case mt.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Vh.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};p([m({attribute:"cell-type"})],Ot.prototype,"cellType",void 0);p([m({attribute:"grid-column"})],Ot.prototype,"gridColumn",void 0);p([O],Ot.prototype,"rowData",void 0);p([O],Ot.prototype,"columnDefinition",void 0);function jh(i){const e=i.tagFor(Ot);return U`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,n)=>n.index+1}"
        :rowData="${(t,n)=>n.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function zh(i){const e=i.tagFor(Ot);return U`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,n)=>n.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}const Uh=(i,e)=>{const t=jh(i),n=zh(i);return U`
        <template
            role="row"
            class="${s=>s.rowType!=="default"?s.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${n}"
            ${xa({property:"cellElements",filter:Cr('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${je("slottedCellElements")}></slot>
        </template>
    `},qh=(i,e)=>U`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Wh=(i,e)=>U`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,n)=>t.keypressHandler(n.event)}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${je("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Gh extends ee{}class Qh extends Ia(Gh){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let es=class extends Qh{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case rn:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};p([m({attribute:"readonly",mode:"boolean"})],es.prototype,"readOnly",void 0);p([O],es.prototype,"defaultSlottedNodes",void 0);p([O],es.prototype,"indeterminate",void 0);function Sa(i){return kh(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class pt extends ee{constructor(e,t,n,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){const t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),M.notify(this,"value")}get value(){var e;return M.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}p([O],pt.prototype,"checked",void 0);p([O],pt.prototype,"content",void 0);p([O],pt.prototype,"defaultSelected",void 0);p([m({mode:"boolean"})],pt.prototype,"disabled",void 0);p([m({attribute:"selected",mode:"boolean"})],pt.prototype,"selectedAttribute",void 0);p([O],pt.prototype,"selected",void 0);p([m({attribute:"value",mode:"fromView"})],pt.prototype,"initialValue",void 0);class yi{}p([O],yi.prototype,"ariaChecked",void 0);p([O],yi.prototype,"ariaPosInSet",void 0);p([O],yi.prototype,"ariaSelected",void 0);p([O],yi.prototype,"ariaSetSize",void 0);De(yi,te);De(pt,fi,yi);class Ie extends ee{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return M.track(this,"options"),this._options}set options(e){this._options=e,M.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(n=>n.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,s=e+n;let r=null;switch(n){case-1:{r=this.options.reduceRight((o,l,a)=>!o&&!l.disabled&&a<s?l:o,r);break}case 1:{r=this.options.reduce((o,l,a)=>!o&&!l.disabled&&a>s?l:o,r);break}}return this.options.indexOf(r)}handleChange(e,t){switch(t){case"selected":{Ie.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Ie.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case bi:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Ut:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case qt:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case mi:{e.preventDefault(),this.selectLastOption();break}case kr:return this.focusAndScrollOptionIntoView(),!0;case sn:case Zn:return!0;case rn:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((n=this.options[this.selectedIndex])===null||n===void 0)&&n.disabled&&typeof e=="number"){const s=this.getSelectableIndex(e,t),r=s>-1?s:e;this.selectedIndex=r,t===r&&this.selectedIndexChanged(t,r);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var n;const s=t.filter(Ie.slottedOptionFilter);(n=this.options)===null||n===void 0||n.forEach(r=>{const o=M.getNotifier(r);o.unsubscribe(this,"selected"),r.selected=s.includes(r),o.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(n=>!n.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Ch(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(n=>n.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,n;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(n=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((s,r)=>(Sa(r)&&s.push(r),s),[]);const n=`${this.options.length}`;this.options.forEach((s,r)=>{s.id||(s.id=Hn("option-")),s.ariaPosInSet=`${r+1}`,s.ariaSetSize=n}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const n=this.getTypeaheadMatches();if(n.length){const s=this.options.indexOf(n[0]);s>-1&&(this.selectedIndex=s)}this.typeaheadExpired=!1}}}Ie.slottedOptionFilter=i=>Sa(i)&&!i.hidden;Ie.TYPE_AHEAD_TIMEOUT_MS=1e3;p([m({mode:"boolean"})],Ie.prototype,"disabled",void 0);p([O],Ie.prototype,"selectedIndex",void 0);p([O],Ie.prototype,"selectedOptions",void 0);p([O],Ie.prototype,"slottedOptions",void 0);p([O],Ie.prototype,"typeaheadBuffer",void 0);class Wt{}p([O],Wt.prototype,"ariaActiveDescendant",void 0);p([O],Wt.prototype,"ariaDisabled",void 0);p([O],Wt.prototype,"ariaExpanded",void 0);p([O],Wt.prototype,"ariaMultiSelectable",void 0);De(Wt,te);De(Ie,Wt);const Is={above:"above",below:"below"};function Qs(i){const e=i.parentElement;if(e)return e;{const t=i.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Jh(i,e){let t=e;for(;t!==null;){if(t===i)return!0;t=Qs(t)}return!1}const ht=document.createElement("div");function Yh(i){return i instanceof Xn}class Ir{setProperty(e,t){H.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){H.queueUpdate(()=>this.target.removeProperty(e))}}class Xh extends Ir{constructor(e){super();const t=new CSSStyleSheet;t[la]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(Ee.create([t]))}}class Zh extends Ir{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Kh extends Ir{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Oa{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),M.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),H.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),H.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:n}=this.style;if(n){const s=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[s].style}else this.target=null}}p([O],Oa.prototype,"target",void 0);class ef{constructor(e){this.target=e.style}setProperty(e,t){H.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){H.queueUpdate(()=>this.target.removeProperty(e))}}class ce{setProperty(e,t){ce.properties[e]=t;for(const n of ce.roots.values())Kt.getOrCreate(ce.normalizeRoot(n)).setProperty(e,t)}removeProperty(e){delete ce.properties[e];for(const t of ce.roots.values())Kt.getOrCreate(ce.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=ce;if(!t.has(e)){t.add(e);const n=Kt.getOrCreate(this.normalizeRoot(e));for(const s in ce.properties)n.setProperty(s,ce.properties[s])}}static unregisterRoot(e){const{roots:t}=ce;if(t.has(e)){t.delete(e);const n=Kt.getOrCreate(ce.normalizeRoot(e));for(const s in ce.properties)n.removeProperty(s)}}static normalizeRoot(e){return e===ht?document:e}}ce.roots=new Set;ce.properties={};const Ss=new WeakMap,tf=H.supportsAdoptedStyleSheets?Xh:Oa,Kt=Object.freeze({getOrCreate(i){if(Ss.has(i))return Ss.get(i);let e;return i===ht?e=new ce:i instanceof Document?e=H.supportsAdoptedStyleSheets?new Zh:new Kh:Yh(i)?e=new tf(i):e=new ef(i),Ss.set(i,e),e}});class ke extends fa{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ke.uniqueId(),ke.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ke({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return ke.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=oe.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof ke&&(t=this.alias(t)),oe.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),oe.existsFor(e)&&oe.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(ht,e),this}subscribe(e,t){const n=this.getOrCreateSubscriberSet(t);t&&!oe.existsFor(t)&&oe.getOrCreate(t),n.has(e)||n.add(e)}unsubscribe(e,t){const n=this.subscribers.get(t||this);n&&n.has(e)&&n.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(n=>n.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(n=>n.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}ke.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();ke.tokensById=new Map;class nf{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:n}=e;this.add(t,n)}add(e,t){Kt.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(oe.getOrCreate(t).get(e)))}remove(e,t){Kt.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class sf{constructor(e,t,n){this.source=e,this.token=t,this.node=n,this.dependencies=new Set,this.observer=M.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,Ni))}catch(e){console.error(e)}}}class rf{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),M.getNotifier(this).notify(e.id))}get(e){return M.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),M.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const Oi=new WeakMap,Ai=new WeakMap;class oe{constructor(e){this.target=e,this.store=new rf,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,n)=>{const s=ke.getTokenById(n);s&&(s.notify(this.target),this.updateCSSTokenReflection(t,s))}},Oi.set(e,this),M.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Xn?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Oi.get(e)||new oe(e)}static existsFor(e){return Oi.has(e)}static findParent(e){if(ht!==e.target){let t=Qs(e.target);for(;t!==null;){if(Oi.has(t))return Oi.get(t);t=Qs(t)}return oe.getOrCreate(ht)}return null}static findClosestAssignedNode(e,t){let n=t;do{if(n.has(e))return n;n=n.parent?n.parent:n.target!==ht?oe.getOrCreate(ht):null}while(n!==null);return null}get parent(){return Ai.get(this)||null}updateCSSTokenReflection(e,t){if(ke.isCSSDesignToken(t)){const n=this.parent,s=this.isReflecting(t);if(n){const r=n.get(t),o=e.get(t);r!==o&&!s?this.reflectToCSS(t):r===o&&s&&this.stopReflectToCSS(t)}else s||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(t!==void 0)return t;const n=this.getRaw(e);if(n!==void 0)return this.hydrate(e,n),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=oe.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){ke.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ke.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=oe.findParent(this);e&&e.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Ai.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Ai.get(e).removeChild(e);const t=this.children.filter(n=>e.contains(n));Ai.set(e,this),this.children.push(e),t.forEach(n=>e.appendChild(n)),M.getNotifier(this.store).subscribe(e);for(const[n,s]of this.store.all())e.hydrate(n,this.bindingObservers.has(n)?this.getRaw(n):s),e.updateCSSTokenReflection(e.store,n)}removeChild(e){const t=this.children.indexOf(e);if(t!==-1&&this.children.splice(t,1),M.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const n=Ai.delete(e);for(const[s]of this.store.all())e.hydrate(s,e.getRaw(s)),e.updateCSSTokenReflection(e.store,s);return n}contains(e){return Jh(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),oe.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),oe.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const n=ke.getTokenById(t);n&&(this.hydrate(n,this.getRaw(n)),this.updateCSSTokenReflection(this.store,n))}hydrate(e,t){if(!this.has(e)){const n=this.bindingObservers.get(e);ke.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(n&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const n=new sf(t,e,this);return this.bindingObservers.set(e,n),n}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}oe.cssCustomPropertyReflector=new nf;p([O],oe.prototype,"children",void 0);function of(i){return ke.from(i)}const Aa=Object.freeze({create:of,notifyConnection(i){return!i.isConnected||!oe.existsFor(i)?!1:(oe.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!oe.existsFor(i)?!1:(oe.getOrCreate(i).unbind(),!0)},registerRoot(i=ht){ce.registerRoot(i)},unregisterRoot(i=ht){ce.unregisterRoot(i)}}),Os=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),As=new Map,On=new Map;let si=null;const Ri=ne.createInterface(i=>i.cachedCallback(e=>(si===null&&(si=new Ea(null,e)),si))),Ra=Object.freeze({tagFor(i){return On.get(i)},responsibleFor(i){const e=i.$$designSystem$$;return e||ne.findResponsibleContainer(i).get(Ri)},getOrCreate(i){if(!i)return si===null&&(si=ne.getOrCreateDOMContainer().get(Ri)),si;const e=i.$$designSystem$$;if(e)return e;const t=ne.getOrCreateDOMContainer(i);if(t.has(Ri,!1))return t.get(Ri);{const n=new Ea(i,t);return t.register(Zi.instance(Ri,n)),n}}});function lf(i,e,t){return typeof i=="string"?{name:i,type:e,callback:t}:i}class Ea{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Os.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,n=[],s=this.disambiguate,r=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(l,a,d){const c=lf(l,a,d),{name:h,callback:b,baseClass:C}=c;let{type:A}=c,E=h,Q=As.get(E),j=!0;for(;Q;){const z=s(E,A,Q);switch(z){case Os.ignoreDuplicate:return;case Os.definitionCallbackOnly:j=!1,Q=void 0;break;default:E=z,Q=As.get(E);break}}j&&((On.has(A)||A===ee)&&(A=class extends A{}),As.set(E,A),On.set(A,E),C&&On.set(C,E)),n.push(new af(t,E,A,r,b,j))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Aa.registerRoot(this.designTokenRoot)),t.registerWithContext(o,...e);for(const l of n)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class af{constructor(e,t,n,s,r,o){this.container=e,this.name=t,this.type=n,this.shadowRootMode=s,this.callback=r,this.willDefine=o,this.definition=null}definePresentation(e){ka.define(this.name,e,this.container)}defineElement(e){this.definition=new Yn(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Ra.tagFor(e)}}const cf=(i,e)=>U`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,df={separator:"separator",presentation:"presentation"};let Sr=class extends ee{constructor(){super(...arguments),this.role=df.separator,this.orientation=$r.horizontal}};p([m],Sr.prototype,"role",void 0);p([m],Sr.prototype,"orientation",void 0);const uf=(i,e)=>U`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${gi(i,e)}
        <span class="content" part="content">
            <slot ${je("content")}></slot>
        </span>
        ${pi(i,e)}
    </template>
`;class ts extends Ie{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,s;this.ariaActiveDescendant=(s=(n=this.options[t])===null||n===void 0?void 0:n.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,n)=>{t.checked=xn(n,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,n)=>{t.checked=xn(n,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,n)=>{t.checked=xn(n,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,n)=>{t.checked=xn(n,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!n||n.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case bi:{this.checkFirstOption(n);return}case Ut:{this.checkNextOption(n);return}case qt:{this.checkPreviousOption(n);return}case mi:{this.checkLastOption(n);return}case kr:return this.focusAndScrollOptionIntoView(),!0;case Zn:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case rn:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,(n=this.options)===null||n===void 0||n.forEach(s=>{s.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var n;const s=Math.max(0,parseInt((n=t==null?void 0:t.toFixed())!==null&&n!==void 0?n:"",10));s!==t&&H.queueUpdate(()=>{this.size=s})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(n=>!n.disabled),t=!e.every(n=>n.selected);e.forEach(n=>n.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){const n=this.getTypeaheadMatches(),s=this.options.indexOf(n[0]);s>-1&&(this.activeIndex=s,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}p([O],ts.prototype,"activeIndex",void 0);p([m({mode:"boolean"})],ts.prototype,"multiple",void 0);p([m({converter:Ge})],ts.prototype,"size",void 0);class hf extends ee{}class ff extends ln(hf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const pf={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let He=class extends ff{constructor(){super(...arguments),this.type=pf.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&H.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([m({attribute:"readonly",mode:"boolean"})],He.prototype,"readOnly",void 0);p([m({mode:"boolean"})],He.prototype,"autofocus",void 0);p([m],He.prototype,"placeholder",void 0);p([m],He.prototype,"type",void 0);p([m],He.prototype,"list",void 0);p([m({converter:Ge})],He.prototype,"maxlength",void 0);p([m({converter:Ge})],He.prototype,"minlength",void 0);p([m],He.prototype,"pattern",void 0);p([m({converter:Ge})],He.prototype,"size",void 0);p([m({mode:"boolean"})],He.prototype,"spellcheck",void 0);p([O],He.prototype,"defaultSlottedNodes",void 0);class Or{}De(Or,te);De(He,fi,Or);const Vo=44,gf=(i,e)=>U`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${wr(t=>typeof t.value=="number",U`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>Vo*t.percentComplete/100}px ${Vo}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,U`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class vi extends ee{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,n=typeof this.value=="number"?this.value:0,s=t-e;this.percentComplete=s===0?0:Math.fround((n-e)/s*100)}}p([m({converter:Ge})],vi.prototype,"value",void 0);p([m({converter:Ge})],vi.prototype,"min",void 0);p([m({converter:Ge})],vi.prototype,"max",void 0);p([m({mode:"boolean"})],vi.prototype,"paused",void 0);p([O],vi.prototype,"percentComplete",void 0);const bf=(i,e)=>U`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        @keydown="${(t,n)=>t.keydownHandler(n.event)}"
        @focusout="${(t,n)=>t.focusOutHandler(n.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===$r.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${je({property:"slottedRadioButtons",filter:Cr("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;let At=class extends ee{constructor(){super(...arguments),this.orientation=$r.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach(n=>{n!==t&&(n.checked=!1,this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const n=e[t];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach(s=>{s!==n&&s.setAttribute("tabindex","-1")}):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,n=e.target,s=n!==null?t.indexOf(n):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(r===0&&s===r||r===t.length-1&&r===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(o=>{o!==this.selectedRadio&&o.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(o=>{o!==this.focusedRadio&&o.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const t=e.target;if(t){const n=this.slottedRadioButtons;t.checked||n.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,n)=>e===t.length&&this.isInsideToolbar&&n===en,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Ki,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,t,e.key)){this.moveRightOffGroup();return}else n===t.length&&(n=0);for(;n<t.length&&t.length>1;)if(t[n].disabled){if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;if(n+1>=t.length){if(this.isInsideToolbar)break;n=0}else n+=1}else{this.moveToRadioByIndex(t,n);break}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,n=n<0?t.length-1:n,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;n>=0&&t.length>1;)if(t[n].disabled){if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;n-1<0?n=t.length-1:n-=1}else{this.moveToRadioByIndex(t,n);break}},this.keydownHandler=e=>{const t=e.key;if(t in Rh&&this.isInsideFoundationToolbar)return!0;switch(t){case sn:{this.checkFocusedRadio();break}case en:case Ut:{this.direction===ui.ltr?this.moveRight(e):this.moveLeft(e);break}case Ki:case qt:{this.direction===ui.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Ph(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),t=e?e.length:0;if(t>1){const s=e[t-1];s.checked=!0}let n=!1;if(this.slottedRadioButtons.forEach(s=>{this.name!==void 0&&s.setAttribute("name",this.name),this.disabled&&(s.disabled=!0),this.readOnly&&(s.readOnly=!0),this.value&&this.value===s.value?(this.selectedRadio=s,this.focusedRadio=s,s.checked=!0,s.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"),s.checked=!1),s.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const s=this.slottedRadioButtons.filter(o=>o.hasAttribute("checked")),r=s!==null?s.length:0;if(r>0&&!n){const o=s[r-1];o.checked=!0,this.focusedRadio=o,o.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};p([m({attribute:"readonly",mode:"boolean"})],At.prototype,"readOnly",void 0);p([m({attribute:"disabled",mode:"boolean"})],At.prototype,"disabled",void 0);p([m],At.prototype,"name",void 0);p([m],At.prototype,"value",void 0);p([m],At.prototype,"orientation",void 0);p([O],At.prototype,"childItems",void 0);p([O],At.prototype,"slottedRadioButtons",void 0);const mf=(i,e)=>U`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,n)=>t.keypressHandler(n.event)}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${je("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class yf extends ee{}class vf extends Ia(yf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let is=class extends vf{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case rn:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};p([m({attribute:"readonly",mode:"boolean"})],is.prototype,"readOnly",void 0);p([O],is.prototype,"name",void 0);p([O],is.prototype,"defaultSlottedNodes",void 0);function xf(i,e,t){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class wf extends ts{}class Cf extends ln(wf){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class Rt extends Cf{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Hn("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,H.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return M.track(this,"value"),this._value}set value(e){var t,n,s,r,o,l,a;const d=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){const c=this._options.findIndex(C=>C.value===e),h=(s=(n=this._options[this.selectedIndex])===null||n===void 0?void 0:n.value)!==null&&s!==void 0?s:null,b=(o=(r=this._options[c])===null||r===void 0?void 0:r.value)!==null&&o!==void 0?o:null;(c===-1||h!==b)&&(e="",this.selectedIndex=c),e=(a=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&a!==void 0?a:e}d!==e&&(this._value=e,super.valueChanged(d,e),M.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=(n=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&n!==void 0?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),n=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>n?Is.above:Is.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Is.above?~~e.top:~~n}get displayValue(){var e,t;return M.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;if(this.isSameNode(n)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(n)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(n=>{M.getNotifier(n).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(n=>{M.getNotifier(n).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),(n=this.options)===null||n===void 0||n.forEach((s,r)=>{var o;const l=(o=this.proxy)===null||o===void 0?void 0:o.options.item(r);l&&(l.selected=s.selected)})}setDefaultSelectedOption(){var e;const t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Ie.slottedOptionFilter),n=t==null?void 0:t.findIndex(s=>s.hasAttribute("selected")||s.selected||s.value===this.value);if(n!==-1){this.selectedIndex=n;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case rn:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case bi:case mi:{e.preventDefault();break}case sn:{e.preventDefault(),this.open=!this.open;break}case Zn:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case kr:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Ut||t===qt)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&M.notify(this,"displayValue")}}p([m({attribute:"open",mode:"boolean"})],Rt.prototype,"open",void 0);p([$u],Rt.prototype,"collapsible",null);p([O],Rt.prototype,"control",void 0);p([m({attribute:"position"})],Rt.prototype,"positionAttribute",void 0);p([O],Rt.prototype,"position",void 0);p([O],Rt.prototype,"maxHeight",void 0);class Ar{}p([O],Ar.prototype,"ariaControls",void 0);De(Ar,Wt);De(Rt,fi,Ar);const $f=(i,e)=>U`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        @focusin="${(t,n)=>t.focusinHandler(n.event)}"
        @focusout="${(t,n)=>t.focusoutHandler(n.event)}"
        @keydown="${(t,n)=>t.keydownHandler(n.event)}"
        @mousedown="${(t,n)=>t.mousedownHandler(n.event)}"
    >
        ${wr(t=>t.collapsible,U`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${Se("control")}
                >
                    ${gi(i,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${pi(i,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${Se("listbox")}
        >
            <slot
                ${je({filter:Ie.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,kf=(i,e)=>U`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Tf extends ee{}const If=(i,e)=>U`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;class _a extends ee{}p([m({mode:"boolean"})],_a.prototype,"disabled",void 0);const Sf=(i,e)=>U`
    <template class="${t=>t.orientation}">
        ${gi(i,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${je("tabs")}></slot>

            ${wr(t=>t.showActiveIndicator,U`
                    <div
                        ${Se("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${pi(i,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${je("tabpanels")}></slot>
        </div>
    </template>
`,Js={vertical:"vertical",horizontal:"horizontal"};class gt extends ee{constructor(){super(...arguments),this.orientation=Js.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((s,r)=>{if(s.slot==="tab"){const o=this.activeTabIndex===r&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);const l=this.tabIds[r],a=this.tabpanelIds[r];s.setAttribute("id",l),s.setAttribute("aria-selected",o?"true":"false"),s.setAttribute("aria-controls",a),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",o?"0":"-1"),o&&(this.activetab=s,this.activeid=l)}s.style[e]="",s.style[t]="",s.style[n]=`${r+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{const n=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Ki:e.preventDefault(),this.adjustBackward(e);break;case en:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case qt:e.preventDefault(),this.adjustBackward(e);break;case Ut:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case bi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case mi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;)if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}else{if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;)if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}else n-1<0?n=t.length-1:n-=1},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(n=>n.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${Hn()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${Hn()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Js.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const o=r-s;this.activeIndicatorRef.style.transform=`${t}(${o}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const t=this.tabs.filter(o=>this.isFocusableElement(o)),n=t.indexOf(this.activetab),s=Eh(0,t.length-1,n+e),r=this.tabs.indexOf(t[s]);r>-1&&this.moveToTabByIndex(this.tabs,r)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}p([m],gt.prototype,"orientation",void 0);p([m],gt.prototype,"activeid",void 0);p([O],gt.prototype,"tabs",void 0);p([O],gt.prototype,"tabpanels",void 0);p([m({mode:"boolean"})],gt.prototype,"activeindicator",void 0);p([O],gt.prototype,"activeIndicatorRef",void 0);p([O],gt.prototype,"showActiveIndicator",void 0);De(gt,fi);class Of extends ee{}class Af extends ln(Of){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Da={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Ae=class extends Af{constructor(){super(...arguments),this.resize=Da.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([m({mode:"boolean"})],Ae.prototype,"readOnly",void 0);p([m],Ae.prototype,"resize",void 0);p([m({mode:"boolean"})],Ae.prototype,"autofocus",void 0);p([m({attribute:"form"})],Ae.prototype,"formId",void 0);p([m],Ae.prototype,"list",void 0);p([m({converter:Ge})],Ae.prototype,"maxlength",void 0);p([m({converter:Ge})],Ae.prototype,"minlength",void 0);p([m],Ae.prototype,"name",void 0);p([m],Ae.prototype,"placeholder",void 0);p([m({converter:Ge,mode:"fromView"})],Ae.prototype,"cols",void 0);p([m({converter:Ge,mode:"fromView"})],Ae.prototype,"rows",void 0);p([m({mode:"boolean"})],Ae.prototype,"spellcheck",void 0);p([O],Ae.prototype,"defaultSlottedNodes",void 0);De(Ae,Or);const Rf=(i,e)=>U`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==Da.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${je("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,n)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${Se("control")}
        ></textarea>
    </template>
`,Ef=(i,e)=>U`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${je({property:"defaultSlottedNodes",filter:xf})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${gi(i,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Se("control")}
            />
            ${pi(i,e)}
        </div>
    </template>
`,Tt="not-allowed",_f=":host([hidden]){display:none}";function ye(i){return`${_f}:host{display:${i}}`}const ge=Ih()?"focus-visible":"focus";function Df(i){return Ra.getOrCreate(i).withPrefix("vscode")}function Pf(i){window.addEventListener("load",()=>{new MutationObserver(()=>{No(i)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),No(i)})}function No(i){const e=getComputedStyle(document.body),t=document.querySelector("body");if(t){const n=t.getAttribute("data-vscode-theme-kind");for(const[s,r]of i){let o=e.getPropertyValue(s).toString();if(n==="vscode-high-contrast")o.length===0&&r.name.includes("background")&&(o="transparent"),r.name==="button-icon-hover-background"&&(o="transparent");else if(n==="vscode-high-contrast-light"){if(o.length===0&&r.name.includes("background"))switch(r.name){case"button-primary-hover-background":o="#0F4A85";break;case"button-secondary-hover-background":o="transparent";break;case"button-icon-hover-background":o="transparent";break}}else r.name==="contrast-active-border"&&(o="transparent");r.setValueFor(t,o)}}}const jo=new Map;let zo=!1;function S(i,e){const t=Aa.create(i);if(e){if(e.includes("--fake-vscode-token")){const n="id"+Math.random().toString(16).slice(2);e=`${e}-${n}`}jo.set(e,t)}return zo||(Pf(jo),zo=!0),t}const Ff=S("background","--vscode-editor-background").withDefault("#1e1e1e"),N=S("border-width").withDefault(1),Pa=S("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");S("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const an=S("corner-radius").withDefault(0),ri=S("corner-radius-round").withDefault(2),P=S("design-unit").withDefault(4),Gt=S("disabled-opacity").withDefault(.4),le=S("focus-border","--vscode-focusBorder").withDefault("#007fd4"),ze=S("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");S("font-weight","--vscode-font-weight").withDefault("400");const fe=S("foreground","--vscode-foreground").withDefault("#cccccc"),An=S("input-height").withDefault("26"),Rr=S("input-min-width").withDefault("100px"),Oe=S("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),_e=S("type-ramp-base-line-height").withDefault("normal"),Fa=S("type-ramp-minus1-font-size").withDefault("11px"),Ba=S("type-ramp-minus1-line-height").withDefault("16px");S("type-ramp-minus2-font-size").withDefault("9px");S("type-ramp-minus2-line-height").withDefault("16px");S("type-ramp-plus1-font-size").withDefault("16px");S("type-ramp-plus1-line-height").withDefault("24px");const Bf=S("scrollbarWidth").withDefault("10px"),Lf=S("scrollbarHeight").withDefault("10px"),Mf=S("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Hf=S("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Vf=S("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),La=S("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Ma=S("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Er=S("button-border","--vscode-button-border").withDefault("transparent"),Uo=S("button-icon-background").withDefault("transparent"),Nf=S("button-icon-corner-radius").withDefault("5px"),jf=S("button-icon-outline-offset").withDefault(0),qo=S("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),zf=S("button-icon-padding").withDefault("3px"),oi=S("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Ha=S("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Va=S("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Rs=S("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Uf=S("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),qf=S("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Wf=S("button-padding-horizontal").withDefault("11px"),Gf=S("button-padding-vertical").withDefault("4px"),ct=S("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),ei=S("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Qf=S("checkbox-corner-radius").withDefault(3);S("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const Mt=S("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),li=S("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Jf=S("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Yf=S("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Cn=S("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Ct=S("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");S("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const Xf=S("dropdown-list-max-height").withDefault("200px"),Ht=S("input-background","--vscode-input-background").withDefault("#3c3c3c"),Na=S("input-foreground","--vscode-input-foreground").withDefault("#cccccc");S("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const Wo=S("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Zf=S("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Kf=S("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),ep=S("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Xt=S("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),tp=S("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");S("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");S("panel-view-border","--vscode-panel-border").withDefault("#80808059");const ip=S("tag-corner-radius").withDefault("2px"),np=(i,e)=>se`
	${ye("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${Fa};
		line-height: ${Ba};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${La};
		border: calc(${N} * 1px) solid ${Er};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Ma};
		display: flex;
		height: calc(${P} * 4px);
		justify-content: center;
		min-width: calc(${P} * 4px + 2px);
		min-height: calc(${P} * 4px + 2px);
		padding: 3px 6px;
	}
`;class sp extends on{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const rp=sp.compose({baseName:"badge",template:Ta,styles:np});function op(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}const lp=se`
	${ye("inline-flex")} :host {
		outline: none;
		font-family: ${ze};
		font-size: ${Oe};
		line-height: ${_e};
		color: ${Ha};
		background: ${oi};
		border-radius: calc(${ri} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Gf} ${Wf};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${N} * 1px) solid ${Er};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Va};
	}
	:host(:active) {
		background: ${oi};
	}
	.control:${ge} {
		outline: calc(${N} * 1px) solid ${le};
		outline-offset: calc(${N} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Gt};
		background: ${oi};
		cursor: ${Tt};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${P} * 4px);
		height: calc(${P} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,ap=se`
	:host([appearance='primary']) {
		background: ${oi};
		color: ${Ha};
	}
	:host([appearance='primary']:hover) {
		background: ${Va};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${oi};
	}
	:host([appearance='primary']) .control:${ge} {
		outline: calc(${N} * 1px) solid ${le};
		outline-offset: calc(${N} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${oi};
	}
`,cp=se`
	:host([appearance='secondary']) {
		background: ${Rs};
		color: ${Uf};
	}
	:host([appearance='secondary']:hover) {
		background: ${qf};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Rs};
	}
	:host([appearance='secondary']) .control:${ge} {
		outline: calc(${N} * 1px) solid ${le};
		outline-offset: calc(${N} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Rs};
	}
`,dp=se`
	:host([appearance='icon']) {
		background: ${Uo};
		border-radius: ${Nf};
		color: ${fe};
	}
	:host([appearance='icon']:hover) {
		background: ${qo};
		outline: 1px dotted ${Pa};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${zf};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${qo};
	}
	:host([appearance='icon']) .control:${ge} {
		outline: calc(${N} * 1px) solid ${le};
		outline-offset: ${jf};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Uo};
	}
`,up=(i,e)=>se`
	${lp}
	${ap}
	${cp}
	${dp}
`;class ja extends Je{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,n){e==="appearance"&&n==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=n),e==="disabled"&&(this.disabled=n!==null)}}op([m],ja.prototype,"appearance",void 0);const hp=ja.compose({baseName:"button",template:Fh,styles:up,shadowOptions:{delegatesFocus:!0}}),fp=(i,e)=>se`
	${ye("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${P} * 1px) 0;
		user-select: none;
		font-size: ${Oe};
		line-height: ${_e};
	}
	.control {
		position: relative;
		width: calc(${P} * 4px + 2px);
		height: calc(${P} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Qf} * 1px);
		border: calc(${N} * 1px) solid ${ei};
		background: ${ct};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${ze};
		color: ${fe};
		padding-inline-start: calc(${P} * 2px + 2px);
		margin-inline-end: calc(${P} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${fe};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${fe};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${ct};
		border-color: ${ei};
	}
	:host(:enabled) .control:active {
		background: ${ct};
		border-color: ${le};
	}
	:host(:${ge}) .control {
		border: calc(${N} * 1px) solid ${le};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Tt};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Gt};
	}
`;class pp extends es{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const gp=pp.compose({baseName:"checkbox",template:Wh,styles:fp,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`}),bp=(i,e)=>se`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,mp=(i,e)=>se`
	:host {
		display: grid;
		padding: calc((${P} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${Ff};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Jf};
		outline: 1px dotted ${Pa};
		outline-offset: -1px;
	}
`,yp=(i,e)=>se`
	:host {
		padding: calc(${P} * 1px) calc(${P} * 3px);
		color: ${fe};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${Oe};
		line-height: ${_e};
		font-weight: 400;
		border: solid calc(${N} * 1px) transparent;
		border-radius: calc(${an} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${ge}),
	:host(:focus),
	:host(:active) {
		background: ${Mt};
		border: solid calc(${N} * 1px) ${le};
		color: ${li};
		outline: none;
	}
	:host(:${ge}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${li} !important;
	}
`;class vp extends me{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const xp=vp.compose({baseName:"data-grid",baseClass:me,template:Hh,styles:bp});class wp extends be{}const Cp=wp.compose({baseName:"data-grid-row",baseClass:be,template:Uh,styles:mp});class $p extends Ot{}const kp=$p.compose({baseName:"data-grid-cell",baseClass:Ot,template:qh,styles:yp}),Tp=(i,e)=>se`
	${ye("block")} :host {
		border: none;
		border-top: calc(${N} * 1px) solid ${Yf};
		box-sizing: content-box;
		height: 0;
		margin: calc(${P} * 1px) 0;
		width: 100%;
	}
`;class Ip extends Sr{}const Sp=Ip.compose({baseName:"divider",template:cf,styles:Tp}),Op=(i,e)=>se`
	${ye("inline-flex")} :host {
		background: ${Cn};
		border-radius: calc(${ri} * 1px);
		box-sizing: border-box;
		color: ${fe};
		contain: contents;
		font-family: ${ze};
		height: calc(${An} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Rr};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${N} * 1px) solid ${Ct};
		border-radius: calc(${ri} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Oe};
		line-height: ${_e};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Cn};
		border: calc(${N} * 1px) solid ${le};
		border-radius: calc(${ri} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Xf};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${ge}) .control {
		border-color: ${le};
	}
	:host(:not([disabled]):hover) {
		background: ${Cn};
		border-color: ${Ct};
	}
	:host(:${ge}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Mt};
		border: calc(${N} * 1px) solid transparent;
		color: ${li};
	}
	:host([disabled]) {
		cursor: ${Tt};
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		cursor: ${Tt};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Cn};
		color: ${fe};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${le};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${le};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${An} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${An} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${P} * 4px);
		min-width: calc(${P} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class Ap extends Rt{}const Rp=Ap.compose({baseName:"dropdown",template:$f,styles:Op,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),Ep=(i,e)=>se`
	${ye("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Zf};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${ze};
		font-size: ${Oe};
		line-height: ${_e};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${N} * 1px) solid transparent;
		border-radius: calc(${an} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Wo};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Wo};
	}
	:host(:${ge}) .control,
	:host(:focus) .control {
		border: calc(${N} * 1px) solid ${le};
	}
`;class _p extends Qe{}const Dp=_p.compose({baseName:"link",template:Dh,styles:Ep,shadowOptions:{delegatesFocus:!0}}),Pp=(i,e)=>se`
	${ye("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${an};
		border: calc(${N} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${fe};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Oe};
		line-height: ${_e};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${P} / 2) * 1px)
			calc((${P} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${ge}) {
		border-color: ${le};
		background: ${Mt};
		color: ${fe};
	}
	:host([aria-selected='true']) {
		background: ${Mt};
		border: calc(${N} * 1px) solid transparent;
		color: ${li};
	}
	:host(:active) {
		background: ${Mt};
		color: ${li};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Mt};
		border: calc(${N} * 1px) solid transparent;
		color: ${li};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Mt};
		color: ${fe};
	}
	:host([disabled]) {
		cursor: ${Tt};
		opacity: ${Gt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;let Fp=class extends pt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}};const Bp=Fp.compose({baseName:"option",template:uf,styles:Pp}),Lp=(i,e)=>se`
	${ye("grid")} :host {
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${Oe};
		line-height: ${_e};
		color: ${fe};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${P} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${P} * 1px) calc(${P} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${P} / 4) * 1px);
		justify-self: center;
		background: ${Xt};
		margin: 0;
		border-radius: calc(${an} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`,Mp=(i,e)=>se`
	${ye("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${Oe};
		line-height: ${_e};
		height: calc(${P} * 7px);
		padding: calc(${P} * 1px) 0;
		color: ${tp};
		fill: currentcolor;
		border-radius: calc(${an} * 1px);
		border: solid calc(${N} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Xt};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Xt};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Xt};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Xt};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Xt};
		fill: currentcolor;
	}
	:host(:${ge}) {
		outline: none;
		border: solid calc(${N} * 1px) ${ep};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${P} * 2px);
	}
`,Hp=(i,e)=>se`
	${ye("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${N} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Oe};
		line-height: ${_e};
		padding: 10px calc((${P} + 2) * 1px);
	}
`;class Vp extends gt{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Js.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const Np=Vp.compose({baseName:"panels",template:Sf,styles:Lp});class jp extends _a{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const zp=jp.compose({baseName:"panel-tab",template:If,styles:Mp});class Up extends Tf{}const qp=Up.compose({baseName:"panel-view",template:kf,styles:Hp}),Wp=(i,e)=>se`
	${ye("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${P} * 7px);
		width: calc(${P} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${P} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Kf};
		stroke-width: calc(${P} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;class Gp extends vi{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,n){e==="value"&&this.removeAttribute("value")}}const Qp=Gp.compose({baseName:"progress-ring",template:gf,styles:Wp,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`}),Jp=(i,e)=>se`
	${ye("flex")} :host {
		align-items: flex-start;
		margin: calc(${P} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${fe};
		font-size: ${Oe};
		margin: calc(${P} * 1px) 0;
	}
`;class Yp extends At{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const Xp=Yp.compose({baseName:"radio-group",template:bf,styles:Jp}),Zp=(i,e)=>se`
	${ye("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Oe};
		line-height: ${_e};
		margin: calc(${P} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${ct};
		border-radius: 999px;
		border: calc(${N} * 1px) solid ${ei};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${P} * 4px);
		position: relative;
		outline: none;
		width: calc(${P} * 4px);
	}
	.label {
		color: ${fe};
		cursor: pointer;
		font-family: ${ze};
		margin-inline-end: calc(${P} * 2px + 2px);
		padding-inline-start: calc(${P} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${fe};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${P} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${ct};
		border-color: ${ei};
	}
	:host(:not([disabled])) .control:active {
		background: ${ct};
		border-color: ${le};
	}
	:host(:${ge}) .control {
		border: calc(${N} * 1px) solid ${le};
	}
	:host([aria-checked='true']) .control {
		background: ${ct};
		border: calc(${N} * 1px) solid ${ei};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${ct};
		border: calc(${N} * 1px) solid ${ei};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${ct};
		border: calc(${N} * 1px) solid ${le};
	}
	:host([aria-checked="true"]:${ge}:not([disabled])) .control {
		border: calc(${N} * 1px) solid ${le};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Tt};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
`;class Kp extends is{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const eg=Kp.compose({baseName:"radio",template:mf,styles:Zp,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),tg=(i,e)=>se`
	${ye("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${ze};
		font-size: ${Fa};
		line-height: ${Ba};
	}
	.control {
		background-color: ${La};
		border: calc(${N} * 1px) solid ${Er};
		border-radius: ${ip};
		color: ${Ma};
		padding: calc(${P} * 0.5px) calc(${P} * 1px);
		text-transform: uppercase;
	}
`;class ig extends on{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const ng=ig.compose({baseName:"tag",template:Ta,styles:tg}),sg=(i,e)=>se`
	${ye("inline-block")} :host {
		font-family: ${ze};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Na};
		background: ${Ht};
		border-radius: calc(${ri} * 1px);
		border: calc(${N} * 1px) solid ${Ct};
		font: inherit;
		font-size: ${Oe};
		line-height: ${_e};
		padding: calc(${P} * 2px + 1px);
		width: 100%;
		min-width: ${Rr};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Ht};
		border-color: ${Ct};
	}
	.control:active:enabled {
		background: ${Ht};
		border-color: ${le};
	}
	.control:hover,
	.control:${ge},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Bf};
		height: ${Lf};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Ht};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${Mf};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Hf};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Vf};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${le};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${fe};
		cursor: pointer;
		font-size: ${Oe};
		line-height: ${_e};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Tt};
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		border-color: ${Ct};
	}
`;class rg extends Ae{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const og=rg.compose({baseName:"text-area",template:Rf,styles:sg,shadowOptions:{delegatesFocus:!0}}),lg=(i,e)=>se`
	${ye("inline-block")} :host {
		font-family: ${ze};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Na};
		background: ${Ht};
		border-radius: calc(${ri} * 1px);
		border: calc(${N} * 1px) solid ${Ct};
		height: calc(${An} * 1px);
		min-width: ${Rr};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${P} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${P} * 2px + 1px);
		font-size: ${Oe};
		line-height: ${_e};
	}
	.control:hover,
	.control:${ge},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${fe};
		cursor: pointer;
		font-size: ${Oe};
		line-height: ${_e};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${P} * 4px);
		height: calc(${P} * 4px);
	}
	.start {
		margin-inline-start: calc(${P} * 2px);
	}
	.end {
		margin-inline-end: calc(${P} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Ht};
		border-color: ${Ct};
	}
	:host(:active:not([disabled])) .root {
		background: ${Ht};
		border-color: ${le};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${le};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Tt};
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		border-color: ${Ct};
	}
`;class ag extends He{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const cg=ag.compose({baseName:"text-field",template:Ef,styles:lg,shadowOptions:{delegatesFocus:!0}}),dg={vsCodeBadge:rp,vsCodeButton:hp,vsCodeCheckbox:gp,vsCodeDataGrid:xp,vsCodeDataGridCell:kp,vsCodeDataGridRow:Cp,vsCodeDivider:Sp,vsCodeDropdown:Rp,vsCodeLink:Dp,vsCodeOption:Bp,vsCodePanels:Np,vsCodePanelTab:zp,vsCodePanelView:qp,vsCodeProgressRing:Qp,vsCodeRadioGroup:Xp,vsCodeRadio:eg,vsCodeTag:ng,vsCodeTextArea:og,vsCodeTextField:cg,register(i,...e){if(i)for(const t in this)t!=="register"&&this[t]().register(i,...e)}},Go="JDSAI";class ug{constructor(){Lr(this,"vsCodeApi");typeof acquireVsCodeApi=="function"&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e){this.vsCodeApi?this.vsCodeApi.postMessage(e):console.log(e)}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState()??[];{const e=localStorage.getItem(Go)??"[]";return console.log({getState:e}),e?JSON.parse(e):void 0}}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem(Go,JSON.stringify(e)),console.log({setState:e}),e)}}const za=new ug,hg={class:"p-4 gap-y-2 grid grid-cols-1"},fg=["innerHTML"],pg=wl({__name:"ChatView",setup(i){const e=Ls("What time is it?"),t=Ls("..."),n=()=>{const r=e.value;t.value="Loading...",za.postMessage({command:"chat",text:r})},s=r=>{t.value=r};return window.addEventListener("message",r=>{const{command:o,text:l}=r.data;o==="chatResponse"&&s(l)}),(r,o)=>(ql(),Wl("div",hg,[o[2]||(o[2]=Zt("h2",{class:"text-lg font-bold"},"Deep Seek",-1)),zc(Zt("textarea",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),rows:"3",placeholder:"Ask something...",class:"border p-1 rounded w-full bg-gray-800/50"},null,512),[[gu,e.value]]),Zt("vscode-button",{onClick:o[1]||(o[1]=l=>n())},"Ask question"),Zt("div",{innerHTML:t.value,class:"border py-1 px-2 rounded min-h-3 bg-gray-800/50"},null,8,fg)]))}}),gg=wl({__name:"App",setup(i){return Df().register(dg),Tl(()=>{za.postMessage({command:"ready"})}),(e,t)=>(ql(),Wl("main",null,[wt(pg)]))}}),Ua=yu(gg);Ua.use(Cu());Ua.mount("#app");
