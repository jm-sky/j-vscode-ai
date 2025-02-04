var Tu=Object.defineProperty;var $u=(n,e,t)=>e in n?Tu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var oe=(n,e,t)=>$u(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $o(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const le={},Zn=[],Ht=()=>{},Su=()=>!1,er=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),So=n=>n.startsWith("onUpdate:"),Ne=Object.assign,Ao=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Au=Object.prototype.hasOwnProperty,te=(n,e)=>Au.call(n,e),H=Array.isArray,Xn=n=>tr(n)==="[object Map]",Ja=n=>tr(n)==="[object Set]",V=n=>typeof n=="function",Te=n=>typeof n=="string",pn=n=>typeof n=="symbol",me=n=>n!==null&&typeof n=="object",Ka=n=>(me(n)||V(n))&&V(n.then)&&V(n.catch),ec=Object.prototype.toString,tr=n=>ec.call(n),_u=n=>tr(n).slice(8,-1),tc=n=>tr(n)==="[object Object]",_o=n=>Te(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pi=$o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nr=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Iu=/-(\w)/g,un=nr(n=>n.replace(Iu,(e,t)=>t?t.toUpperCase():"")),Eu=/\B([A-Z])/g,gn=nr(n=>n.replace(Eu,"-$1").toLowerCase()),nc=nr(n=>n.charAt(0).toUpperCase()+n.slice(1)),Cr=nr(n=>n?`on${nc(n)}`:""),cn=(n,e)=>!Object.is(n,e),Is=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ic=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},no=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Al;const ir=()=>Al||(Al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Io(n){if(H(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Te(i)?Pu(i):Io(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Te(n)||me(n))return n}const Ru=/;(?![^(]*\))/g,Ou=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function Pu(n){const e={};return n.replace(Du,"").split(Ru).forEach(t=>{if(t){const i=t.split(Ou);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jn(n){let e="";if(Te(n))e=n;else if(H(n))for(let t=0;t<n.length;t++){const i=Jn(n[t]);i&&(e+=i+" ")}else if(me(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Lu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mu=$o(Lu);function sc(n){return!!n||n===""}const rc=n=>!!(n&&n.__v_isRef===!0),io=n=>Te(n)?n:n==null?"":H(n)||me(n)&&(n.toString===ec||!V(n.toString))?rc(n)?io(n.value):JSON.stringify(n,oc,2):String(n),oc=(n,e)=>rc(e)?oc(n,e.value):Xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Tr(i,r)+" =>"]=s,t),{})}:Ja(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Tr(t))}:pn(e)?Tr(e):me(e)&&!H(e)&&!tc(e)?String(e):e,Tr=(n,e="")=>{var t;return pn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class lc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!e&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ye;try{return Ye=this,e()}finally{Ye=t}}}on(){Ye=this}off(){Ye=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fu(n){return new lc(n)}function ac(){return Ye}function Bu(n,e=!1){Ye&&Ye.cleanups.push(n)}let ce;const $r=new WeakSet;class cc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$r.has(this)&&($r.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_l(this),hc(this);const e=ce,t=_t;ce=this,_t=!0;try{return this.fn()}finally{fc(this),ce=e,_t=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oo(e);this.deps=this.depsTail=void 0,_l(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$r.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){so(this)&&this.run()}get dirty(){return so(this)}}let dc=0,Li,Mi;function uc(n,e=!1){if(n.flags|=8,e){n.next=Mi,Mi=n;return}n.next=Li,Li=n}function Eo(){dc++}function Ro(){if(--dc>0)return;if(Mi){let e=Mi;for(Mi=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Li;){let e=Li;for(Li=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function hc(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fc(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Oo(i),Nu(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function so(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(pc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function pc(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Wi))return;n.globalVersion=Wi;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!so(n)){n.flags&=-3;return}const t=ce,i=_t;ce=n,_t=!0;try{hc(n);const s=n.fn(n._value);(e.version===0||cn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ce=t,_t=i,fc(n),n.flags&=-3}}function Oo(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Oo(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Nu(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _t=!0;const gc=[];function mn(){gc.push(_t),_t=!1}function bn(){const n=gc.pop();_t=n===void 0?!0:n}function _l(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ce;ce=void 0;try{e()}finally{ce=t}}}let Wi=0,Hu=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class Do{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!_t||ce===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ce)t=this.activeLink=new Hu(ce,this),ce.deps?(t.prevDep=ce.depsTail,ce.depsTail.nextDep=t,ce.depsTail=t):ce.deps=ce.depsTail=t,mc(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ce.depsTail,t.nextDep=void 0,ce.depsTail.nextDep=t,ce.depsTail=t,ce.deps===t&&(ce.deps=i)}return t}trigger(e){this.version++,Wi++,this.notify(e)}notify(e){Eo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ro()}}}function mc(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)mc(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ro=new WeakMap,En=Symbol(""),oo=Symbol(""),Yi=Symbol("");function Le(n,e,t){if(_t&&ce){let i=ro.get(n);i||ro.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Do),s.map=i,s.key=t),s.track()}}function Yt(n,e,t,i,s,r){const o=ro.get(n);if(!o){Wi++;return}const l=a=>{a&&a.trigger()};if(Eo(),e==="clear")o.forEach(l);else{const a=H(n),d=a&&_o(t);if(a&&t==="length"){const c=Number(i);o.forEach((u,g)=>{(g==="length"||g===Yi||!pn(g)&&g>=c)&&l(u)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),d&&l(o.get(Yi)),e){case"add":a?d&&l(o.get("length")):(l(o.get(En)),Xn(n)&&l(o.get(oo)));break;case"delete":a||(l(o.get(En)),Xn(n)&&l(o.get(oo)));break;case"set":Xn(n)&&l(o.get(En));break}}Ro()}function jn(n){const e=ee(n);return e===n?e:(Le(e,"iterate",Yi),wt(n)?e:e.map(Me))}function sr(n){return Le(n=ee(n),"iterate",Yi),n}const zu={__proto__:null,[Symbol.iterator](){return Sr(this,Symbol.iterator,Me)},concat(...n){return jn(this).concat(...n.map(e=>H(e)?jn(e):e))},entries(){return Sr(this,"entries",n=>(n[1]=Me(n[1]),n))},every(n,e){return qt(this,"every",n,e,void 0,arguments)},filter(n,e){return qt(this,"filter",n,e,t=>t.map(Me),arguments)},find(n,e){return qt(this,"find",n,e,Me,arguments)},findIndex(n,e){return qt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return qt(this,"findLast",n,e,Me,arguments)},findLastIndex(n,e){return qt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return qt(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ar(this,"includes",n)},indexOf(...n){return Ar(this,"indexOf",n)},join(n){return jn(this).join(n)},lastIndexOf(...n){return Ar(this,"lastIndexOf",n)},map(n,e){return qt(this,"map",n,e,void 0,arguments)},pop(){return xi(this,"pop")},push(...n){return xi(this,"push",n)},reduce(n,...e){return Il(this,"reduce",n,e)},reduceRight(n,...e){return Il(this,"reduceRight",n,e)},shift(){return xi(this,"shift")},some(n,e){return qt(this,"some",n,e,void 0,arguments)},splice(...n){return xi(this,"splice",n)},toReversed(){return jn(this).toReversed()},toSorted(n){return jn(this).toSorted(n)},toSpliced(...n){return jn(this).toSpliced(...n)},unshift(...n){return xi(this,"unshift",n)},values(){return Sr(this,"values",Me)}};function Sr(n,e,t){const i=sr(n),s=i[e]();return i!==n&&!wt(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Vu=Array.prototype;function qt(n,e,t,i,s,r){const o=sr(n),l=o!==n&&!wt(n),a=o[e];if(a!==Vu[e]){const u=a.apply(n,r);return l?Me(u):u}let d=t;o!==n&&(l?d=function(u,g){return t.call(this,Me(u),g,n)}:t.length>2&&(d=function(u,g){return t.call(this,u,g,n)}));const c=a.call(o,d,i);return l&&s?s(c):c}function Il(n,e,t,i){const s=sr(n);let r=t;return s!==n&&(wt(n)?t.length>3&&(r=function(o,l,a){return t.call(this,o,l,a,n)}):r=function(o,l,a){return t.call(this,o,Me(l),a,n)}),s[e](r,...i)}function Ar(n,e,t){const i=ee(n);Le(i,"iterate",Yi);const s=i[e](...t);return(s===-1||s===!1)&&Fo(t[0])?(t[0]=ee(t[0]),i[e](...t)):s}function xi(n,e,t=[]){mn(),Eo();const i=ee(n)[e].apply(n,t);return Ro(),bn(),i}const Uu=$o("__proto__,__v_isRef,__isVue"),bc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(pn));function ju(n){pn(n)||(n=String(n));const e=ee(this);return Le(e,"has",n),e.hasOwnProperty(n)}class yc{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?eh:kc:r?wc:vc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=H(e);if(!s){let a;if(o&&(a=zu[t]))return a;if(t==="hasOwnProperty")return ju}const l=Reflect.get(e,t,Fe(e)?e:i);return(pn(t)?bc.has(t):Uu(t))||(s||Le(e,"get",t),r)?l:Fe(l)?o&&_o(t)?l:l.value:me(l)?s?Cc(l):Lo(l):l}}class xc extends yc{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const a=On(r);if(!wt(i)&&!On(i)&&(r=ee(r),i=ee(i)),!H(e)&&Fe(r)&&!Fe(i))return a?!1:(r.value=i,!0)}const o=H(e)&&_o(t)?Number(t)<e.length:te(e,t),l=Reflect.set(e,t,i,Fe(e)?e:s);return e===ee(s)&&(o?cn(i,r)&&Yt(e,"set",t,i):Yt(e,"add",t,i)),l}deleteProperty(e,t){const i=te(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Yt(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!pn(t)||!bc.has(t))&&Le(e,"has",t),i}ownKeys(e){return Le(e,"iterate",H(e)?"length":En),Reflect.ownKeys(e)}}class qu extends yc{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Gu=new xc,Wu=new qu,Yu=new xc(!0);const lo=n=>n,bs=n=>Reflect.getPrototypeOf(n);function Qu(n,e,t){return function(...i){const s=this.__v_raw,r=ee(s),o=Xn(r),l=n==="entries"||n===Symbol.iterator&&o,a=n==="keys"&&o,d=s[n](...i),c=t?lo:e?ao:Me;return!e&&Le(r,"iterate",a?oo:En),{next(){const{value:u,done:g}=d.next();return g?{value:u,done:g}:{value:l?[c(u[0]),c(u[1])]:c(u),done:g}},[Symbol.iterator](){return this}}}}function ys(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Zu(n,e){const t={get(s){const r=this.__v_raw,o=ee(r),l=ee(s);n||(cn(s,l)&&Le(o,"get",s),Le(o,"get",l));const{has:a}=bs(o),d=e?lo:n?ao:Me;if(a.call(o,s))return d(r.get(s));if(a.call(o,l))return d(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Le(ee(s),"iterate",En),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ee(r),l=ee(s);return n||(cn(s,l)&&Le(o,"has",s),Le(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,a=ee(l),d=e?lo:n?ao:Me;return!n&&Le(a,"iterate",En),l.forEach((c,u)=>s.call(r,d(c),d(u),o))}};return Ne(t,n?{add:ys("add"),set:ys("set"),delete:ys("delete"),clear:ys("clear")}:{add(s){!e&&!wt(s)&&!On(s)&&(s=ee(s));const r=ee(this);return bs(r).has.call(r,s)||(r.add(s),Yt(r,"add",s,s)),this},set(s,r){!e&&!wt(r)&&!On(r)&&(r=ee(r));const o=ee(this),{has:l,get:a}=bs(o);let d=l.call(o,s);d||(s=ee(s),d=l.call(o,s));const c=a.call(o,s);return o.set(s,r),d?cn(r,c)&&Yt(o,"set",s,r):Yt(o,"add",s,r),this},delete(s){const r=ee(this),{has:o,get:l}=bs(r);let a=o.call(r,s);a||(s=ee(s),a=o.call(r,s)),l&&l.call(r,s);const d=r.delete(s);return a&&Yt(r,"delete",s,void 0),d},clear(){const s=ee(this),r=s.size!==0,o=s.clear();return r&&Yt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Qu(s,n,e)}),t}function Po(n,e){const t=Zu(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(te(t,s)&&s in i?t:i,s,r)}const Xu={get:Po(!1,!1)},Ju={get:Po(!1,!0)},Ku={get:Po(!0,!1)};const vc=new WeakMap,wc=new WeakMap,kc=new WeakMap,eh=new WeakMap;function th(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nh(n){return n.__v_skip||!Object.isExtensible(n)?0:th(_u(n))}function Lo(n){return On(n)?n:Mo(n,!1,Gu,Xu,vc)}function ih(n){return Mo(n,!1,Yu,Ju,wc)}function Cc(n){return Mo(n,!0,Wu,Ku,kc)}function Mo(n,e,t,i,s){if(!me(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=nh(n);if(o===0)return n;const l=new Proxy(n,o===2?i:t);return s.set(n,l),l}function Kn(n){return On(n)?Kn(n.__v_raw):!!(n&&n.__v_isReactive)}function On(n){return!!(n&&n.__v_isReadonly)}function wt(n){return!!(n&&n.__v_isShallow)}function Fo(n){return n?!!n.__v_raw:!1}function ee(n){const e=n&&n.__v_raw;return e?ee(e):n}function Tc(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&ic(n,"__v_skip",!0),n}const Me=n=>me(n)?Lo(n):n,ao=n=>me(n)?Cc(n):n;function Fe(n){return n?n.__v_isRef===!0:!1}function Ns(n){return sh(n,!1)}function sh(n,e){return Fe(n)?n:new rh(n,e)}class rh{constructor(e,t){this.dep=new Do,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ee(e),this._value=t?e:Me(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||wt(e)||On(e);e=i?e:ee(e),cn(e,t)&&(this._rawValue=e,this._value=i?e:Me(e),this.dep.trigger())}}function Bo(n){return Fe(n)?n.value:n}function Es(n){return V(n)?n():Bo(n)}const oh={get:(n,e,t)=>e==="__v_raw"?n:Bo(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Fe(s)&&!Fe(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function $c(n){return Kn(n)?n:new Proxy(n,oh)}class lh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Do(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return uc(this,!0),!0}get value(){const e=this.dep.track();return pc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ah(n,e,t=!1){let i,s;return V(n)?i=n:(i=n.get,s=n.set),new lh(i,s,t)}const xs={},Hs=new WeakMap;let Sn;function ch(n,e=!1,t=Sn){if(t){let i=Hs.get(t);i||Hs.set(t,i=[]),i.push(n)}}function dh(n,e,t=le){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:a}=t,d=R=>s?R:wt(R)||s===!1||s===0?Qt(R,1):Qt(R);let c,u,g,b,$=!1,_=!1;if(Fe(n)?(u=()=>n.value,$=wt(n)):Kn(n)?(u=()=>d(n),$=!0):H(n)?(_=!0,$=n.some(R=>Kn(R)||wt(R)),u=()=>n.map(R=>{if(Fe(R))return R.value;if(Kn(R))return d(R);if(V(R))return a?a(R,2):R()})):V(n)?e?u=a?()=>a(n,2):n:u=()=>{if(g){mn();try{g()}finally{bn()}}const R=Sn;Sn=c;try{return a?a(n,3,[b]):n(b)}finally{Sn=R}}:u=Ht,e&&s){const R=u,K=s===!0?1/0:s;u=()=>Qt(R(),K)}const z=ac(),j=()=>{c.stop(),z&&z.active&&Ao(z.effects,c)};if(r&&e){const R=e;e=(...K)=>{R(...K),j()}}let q=_?new Array(n.length).fill(xs):xs;const Z=R=>{if(!(!(c.flags&1)||!c.dirty&&!R))if(e){const K=c.run();if(s||$||(_?K.some((ye,Re)=>cn(ye,q[Re])):cn(K,q))){g&&g();const ye=Sn;Sn=c;try{const Re=[K,q===xs?void 0:_&&q[0]===xs?[]:q,b];a?a(e,3,Re):e(...Re),q=K}finally{Sn=ye}}}else c.run()};return l&&l(Z),c=new cc(u),c.scheduler=o?()=>o(Z,!1):Z,b=R=>ch(R,!1,c),g=c.onStop=()=>{const R=Hs.get(c);if(R){if(a)a(R,4);else for(const K of R)K();Hs.delete(c)}},e?i?Z(!0):q=c.run():o?o(Z.bind(null,!0),!0):c.run(),j.pause=c.pause.bind(c),j.resume=c.resume.bind(c),j.stop=j,j}function Qt(n,e=1/0,t){if(e<=0||!me(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Fe(n))Qt(n.value,e,t);else if(H(n))for(let i=0;i<n.length;i++)Qt(n[i],e,t);else if(Ja(n)||Xn(n))n.forEach(i=>{Qt(i,e,t)});else if(tc(n)){for(const i in n)Qt(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qt(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ss(n,e,t,i){try{return i?n(...i):n()}catch(s){rr(s,e,t)}}function zt(n,e,t,i){if(V(n)){const s=ss(n,e,t,i);return s&&Ka(s)&&s.catch(r=>{rr(r,e,t)}),s}if(H(n)){const s=[];for(let r=0;r<n.length;r++)s.push(zt(n[r],e,t,i));return s}}function rr(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let l=e.parent;const a=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const c=l.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,d)===!1)return}l=l.parent}if(r){mn(),ss(r,null,10,[n,a,d]),bn();return}}uh(n,t,s,i,o)}function uh(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Qe=[];let Ft=-1;const ei=[];let ln=null,qn=0;const Sc=Promise.resolve();let zs=null;function hh(n){const e=zs||Sc;return n?e.then(this?n.bind(this):n):e}function fh(n){let e=Ft+1,t=Qe.length;for(;e<t;){const i=e+t>>>1,s=Qe[i],r=Qi(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function No(n){if(!(n.flags&1)){const e=Qi(n),t=Qe[Qe.length-1];!t||!(n.flags&2)&&e>=Qi(t)?Qe.push(n):Qe.splice(fh(e),0,n),n.flags|=1,Ac()}}function Ac(){zs||(zs=Sc.then(Ic))}function ph(n){H(n)?ei.push(...n):ln&&n.id===-1?ln.splice(qn+1,0,n):n.flags&1||(ei.push(n),n.flags|=1),Ac()}function El(n,e,t=Ft+1){for(;t<Qe.length;t++){const i=Qe[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Qe.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _c(n){if(ei.length){const e=[...new Set(ei)].sort((t,i)=>Qi(t)-Qi(i));if(ei.length=0,ln){ln.push(...e);return}for(ln=e,qn=0;qn<ln.length;qn++){const t=ln[qn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ln=null,qn=0}}const Qi=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ic(n){try{for(Ft=0;Ft<Qe.length;Ft++){const e=Qe[Ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ss(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ft<Qe.length;Ft++){const e=Qe[Ft];e&&(e.flags&=-2)}Ft=-1,Qe.length=0,_c(),zs=null,(Qe.length||ei.length)&&Ic()}}let yt=null,Ec=null;function Vs(n){const e=yt;return yt=n,Ec=n&&n.type.__scopeId||null,e}function gh(n,e=yt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Nl(-1);const r=Vs(e);let o;try{o=n(...s)}finally{Vs(r),i._d&&Nl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function mh(n,e){if(yt===null)return n;const t=cr(yt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,l,a=le]=e[s];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&Qt(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:l,modifiers:a}))}return n}function Cn(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(mn(),zt(a,t,8,[n.el,l,n,e]),bn())}}const bh=Symbol("_vte"),yh=n=>n.__isTeleport;function Ho(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ho(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function zo(n,e){return V(n)?Ne({name:n.name},e,{setup:n}):n}function Rc(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Us(n,e,t,i,s=!1){if(H(n)){n.forEach(($,_)=>Us($,e&&(H(e)?e[_]:e),t,i,s));return}if(Fi(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Us(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?cr(i.component):i.el,o=s?null:r,{i:l,r:a}=n,d=e&&e.r,c=l.refs===le?l.refs={}:l.refs,u=l.setupState,g=ee(u),b=u===le?()=>!1:$=>te(g,$);if(d!=null&&d!==a&&(Te(d)?(c[d]=null,b(d)&&(u[d]=null)):Fe(d)&&(d.value=null)),V(a))ss(a,l,12,[o,c]);else{const $=Te(a),_=Fe(a);if($||_){const z=()=>{if(n.f){const j=$?b(a)?u[a]:c[a]:a.value;s?H(j)&&Ao(j,r):H(j)?j.includes(r)||j.push(r):$?(c[a]=[r],b(a)&&(u[a]=c[a])):(a.value=[r],n.k&&(c[n.k]=a.value))}else $?(c[a]=o,b(a)&&(u[a]=o)):_&&(a.value=o,n.k&&(c[n.k]=o))};o?(z.id=-1,ht(z,t)):z()}}}ir().requestIdleCallback;ir().cancelIdleCallback;const Fi=n=>!!n.type.__asyncLoader,Oc=n=>n.type.__isKeepAlive;function xh(n,e){Dc(n,"a",e)}function vh(n,e){Dc(n,"da",e)}function Dc(n,e,t=Xe){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(or(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Oc(s.parent.vnode)&&wh(i,e,t,s),s=s.parent}}function wh(n,e,t,i){const s=or(e,n,i,!0);Lc(()=>{Ao(i[e],s)},t)}function or(n,e,t=Xe,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{mn();const l=rs(t),a=zt(e,t,n,o);return l(),bn(),a});return i?s.unshift(r):s.push(r),r}}const Jt=n=>(e,t=Xe)=>{(!Ji||n==="sp")&&or(n,(...i)=>e(...i),t)},kh=Jt("bm"),Pc=Jt("m"),Ch=Jt("bu"),Th=Jt("u"),$h=Jt("bum"),Lc=Jt("um"),Sh=Jt("sp"),Ah=Jt("rtg"),_h=Jt("rtc");function Ih(n,e=Xe){or("ec",n,e)}const Eh=Symbol.for("v-ndc");function Rh(n,e,t,i){let s;const r=t,o=H(n);if(o||Te(n)){const l=o&&Kn(n);let a=!1;l&&(a=!wt(n),n=sr(n)),s=new Array(n.length);for(let d=0,c=n.length;d<c;d++)s[d]=e(a?Me(n[d]):n[d],d,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,r)}else if(me(n))if(n[Symbol.iterator])s=Array.from(n,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(n);s=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const c=l[a];s[a]=e(n[c],c,a,r)}}else s=[];return s}const co=n=>n?id(n)?cr(n):co(n.parent):null,Bi=Ne(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>co(n.parent),$root:n=>co(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fc(n),$forceUpdate:n=>n.f||(n.f=()=>{No(n.update)}),$nextTick:n=>n.n||(n.n=hh.bind(n.proxy)),$watch:n=>Kh.bind(n)}),_r=(n,e)=>n!==le&&!n.__isScriptSetup&&te(n,e),Oh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=n;let d;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(_r(i,e))return o[e]=1,i[e];if(s!==le&&te(s,e))return o[e]=2,s[e];if((d=n.propsOptions[0])&&te(d,e))return o[e]=3,r[e];if(t!==le&&te(t,e))return o[e]=4,t[e];uo&&(o[e]=0)}}const c=Bi[e];let u,g;if(c)return e==="$attrs"&&Le(n.attrs,"get",""),c(n);if((u=l.__cssModules)&&(u=u[e]))return u;if(t!==le&&te(t,e))return o[e]=4,t[e];if(g=a.config.globalProperties,te(g,e))return g[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return _r(s,e)?(s[e]=t,!0):i!==le&&te(i,e)?(i[e]=t,!0):te(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!t[o]||n!==le&&te(n,o)||_r(e,o)||(l=r[0])&&te(l,o)||te(i,o)||te(Bi,o)||te(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:te(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Rl(n){return H(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let uo=!0;function Dh(n){const e=Fc(n),t=n.proxy,i=n.ctx;uo=!1,e.beforeCreate&&Ol(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:d,created:c,beforeMount:u,mounted:g,beforeUpdate:b,updated:$,activated:_,deactivated:z,beforeDestroy:j,beforeUnmount:q,destroyed:Z,unmounted:R,render:K,renderTracked:ye,renderTriggered:Re,errorCaptured:Oe,serverPrefetch:Nn,expose:Vt,inheritAttrs:xe,components:tn,directives:nn,filters:wn}=e;if(d&&Ph(d,i,null),o)for(const de in o){const ne=o[de];V(ne)&&(i[de]=ne.bind(t))}if(s){const de=s.call(t,t);me(de)&&(n.data=Lo(de))}if(uo=!0,r)for(const de in r){const ne=r[de],Ut=V(ne)?ne.bind(t,t):V(ne.get)?ne.get.bind(t,t):Ht,kn=!V(ne)&&V(ne.set)?ne.set.bind(t):Ht,ae=rd({get:Ut,set:kn});Object.defineProperty(i,de,{enumerable:!0,configurable:!0,get:()=>ae.value,set:dt=>ae.value=dt})}if(l)for(const de in l)Mc(l[de],i,t,de);if(a){const de=V(a)?a.call(t):a;Reflect.ownKeys(de).forEach(ne=>{Hh(ne,de[ne])})}c&&Ol(c,n,"c");function _e(de,ne){H(ne)?ne.forEach(Ut=>de(Ut.bind(t))):ne&&de(ne.bind(t))}if(_e(kh,u),_e(Pc,g),_e(Ch,b),_e(Th,$),_e(xh,_),_e(vh,z),_e(Ih,Oe),_e(_h,ye),_e(Ah,Re),_e($h,q),_e(Lc,R),_e(Sh,Nn),H(Vt))if(Vt.length){const de=n.exposed||(n.exposed={});Vt.forEach(ne=>{Object.defineProperty(de,ne,{get:()=>t[ne],set:Ut=>t[ne]=Ut})})}else n.exposed||(n.exposed={});K&&n.render===Ht&&(n.render=K),xe!=null&&(n.inheritAttrs=xe),tn&&(n.components=tn),nn&&(n.directives=nn),Nn&&Rc(n)}function Ph(n,e,t=Ht){H(n)&&(n=ho(n));for(const i in n){const s=n[i];let r;me(s)?"default"in s?r=Rs(s.from||i,s.default,!0):r=Rs(s.from||i):r=Rs(s),Fe(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ol(n,e,t){zt(H(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Mc(n,e,t,i){let s=i.includes(".")?Xc(t,i):()=>t[i];if(Te(n)){const r=e[n];V(r)&&Os(s,r)}else if(V(n))Os(s,n.bind(t));else if(me(n))if(H(n))n.forEach(r=>Mc(r,e,t,i));else{const r=V(n.handler)?n.handler.bind(t):e[n.handler];V(r)&&Os(s,r,n)}}function Fc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!t&&!i?a=e:(a={},s.length&&s.forEach(d=>js(a,d,o,!0)),js(a,e,o)),me(e)&&r.set(e,a),a}function js(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&js(n,r,t,!0),s&&s.forEach(o=>js(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const l=Lh[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const Lh={data:Dl,props:Pl,emits:Pl,methods:Di,computed:Di,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Di,directives:Di,watch:Fh,provide:Dl,inject:Mh};function Dl(n,e){return e?n?function(){return Ne(V(n)?n.call(this,this):n,V(e)?e.call(this,this):e)}:e:n}function Mh(n,e){return Di(ho(n),ho(e))}function ho(n){if(H(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function We(n,e){return n?[...new Set([].concat(n,e))]:e}function Di(n,e){return n?Ne(Object.create(null),n,e):e}function Pl(n,e){return n?H(n)&&H(e)?[...new Set([...n,...e])]:Ne(Object.create(null),Rl(n),Rl(e??{})):e}function Fh(n,e){if(!n)return e;if(!e)return n;const t=Ne(Object.create(null),n);for(const i in e)t[i]=We(n[i],e[i]);return t}function Bc(){return{app:null,config:{isNativeTag:Su,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bh=0;function Nh(n,e){return function(i,s=null){V(i)||(i=Ne({},i)),s!=null&&!me(s)&&(s=null);const r=Bc(),o=new WeakSet,l=[];let a=!1;const d=r.app={_uid:Bh++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:kf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(d,...u)):V(c)&&(o.add(c),c(d,...u))),d},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),d},component(c,u){return u?(r.components[c]=u,d):r.components[c]},directive(c,u){return u?(r.directives[c]=u,d):r.directives[c]},mount(c,u,g){if(!a){const b=d._ceVNode||Xt(i,s);return b.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),n(b,c,g),a=!0,d._container=c,c.__vue_app__=d,cr(b.component)}},onUnmount(c){l.push(c)},unmount(){a&&(zt(l,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(c,u){return r.provides[c]=u,d},runWithContext(c){const u=ti;ti=d;try{return c()}finally{ti=u}}};return d}}let ti=null;function Hh(n,e){if(Xe){let t=Xe.provides;const i=Xe.parent&&Xe.parent.provides;i===t&&(t=Xe.provides=Object.create(i)),t[n]=e}}function Rs(n,e,t=!1){const i=Xe||yt;if(i||ti){const s=ti?ti._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&V(e)?e.call(i&&i.proxy):e}}const Nc={},Hc=()=>Object.create(Nc),zc=n=>Object.getPrototypeOf(n)===Nc;function zh(n,e,t,i=!1){const s={},r=Hc();n.propsDefaults=Object.create(null),Vc(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:ih(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Vh(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,l=ee(s),[a]=n.propsOptions;let d=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let u=0;u<c.length;u++){let g=c[u];if(lr(n.emitsOptions,g))continue;const b=e[g];if(a)if(te(r,g))b!==r[g]&&(r[g]=b,d=!0);else{const $=un(g);s[$]=fo(a,l,$,b,n,!1)}else b!==r[g]&&(r[g]=b,d=!0)}}}else{Vc(n,e,s,r)&&(d=!0);let c;for(const u in l)(!e||!te(e,u)&&((c=gn(u))===u||!te(e,c)))&&(a?t&&(t[u]!==void 0||t[c]!==void 0)&&(s[u]=fo(a,l,u,void 0,n,!0)):delete s[u]);if(r!==l)for(const u in r)(!e||!te(e,u))&&(delete r[u],d=!0)}d&&Yt(n.attrs,"set","")}function Vc(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,l;if(e)for(let a in e){if(Pi(a))continue;const d=e[a];let c;s&&te(s,c=un(a))?!r||!r.includes(c)?t[c]=d:(l||(l={}))[c]=d:lr(n.emitsOptions,a)||(!(a in i)||d!==i[a])&&(i[a]=d,o=!0)}if(r){const a=ee(t),d=l||le;for(let c=0;c<r.length;c++){const u=r[c];t[u]=fo(s,a,u,d[u],n,!te(d,u))}}return o}function fo(n,e,t,i,s,r){const o=n[t];if(o!=null){const l=te(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:d}=s;if(t in d)i=d[t];else{const c=rs(s);i=d[t]=a.call(null,e),c()}}else i=a;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===gn(t))&&(i=!0))}return i}const Uh=new WeakMap;function Uc(n,e,t=!1){const i=t?Uh:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},l=[];let a=!1;if(!V(n)){const c=u=>{a=!0;const[g,b]=Uc(u,e,!0);Ne(o,g),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!a)return me(n)&&i.set(n,Zn),Zn;if(H(r))for(let c=0;c<r.length;c++){const u=un(r[c]);Ll(u)&&(o[u]=le)}else if(r)for(const c in r){const u=un(c);if(Ll(u)){const g=r[c],b=o[u]=H(g)||V(g)?{type:g}:Ne({},g),$=b.type;let _=!1,z=!0;if(H($))for(let j=0;j<$.length;++j){const q=$[j],Z=V(q)&&q.name;if(Z==="Boolean"){_=!0;break}else Z==="String"&&(z=!1)}else _=V($)&&$.name==="Boolean";b[0]=_,b[1]=z,(_||te(b,"default"))&&l.push(u)}}const d=[o,l];return me(n)&&i.set(n,d),d}function Ll(n){return n[0]!=="$"&&!Pi(n)}const jc=n=>n[0]==="_"||n==="$stable",Vo=n=>H(n)?n.map(Nt):[Nt(n)],jh=(n,e,t)=>{if(e._n)return e;const i=gh((...s)=>Vo(e(...s)),t);return i._c=!1,i},qc=(n,e,t)=>{const i=n._ctx;for(const s in n){if(jc(s))continue;const r=n[s];if(V(r))e[s]=jh(s,r,i);else if(r!=null){const o=Vo(r);e[s]=()=>o}}},Gc=(n,e)=>{const t=Vo(e);n.slots.default=()=>t},Wc=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},qh=(n,e,t)=>{const i=n.slots=Hc();if(n.vnode.shapeFlag&32){const s=e._;s?(Wc(i,e,t),t&&ic(i,"_",s,!0)):qc(e,i)}else e&&Gc(n,e)},Gh=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=le;if(i.shapeFlag&32){const l=e._;l?t&&l===1?r=!1:Wc(s,e,t):(r=!e.$stable,qc(e,s)),o=e}else e&&(Gc(n,e),o={default:1});if(r)for(const l in s)!jc(l)&&o[l]==null&&delete s[l]},ht=lf;function Wh(n){return Yh(n)}function Yh(n,e){const t=ir();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:d,setElementText:c,parentNode:u,nextSibling:g,setScopeId:b=Ht,insertStaticContent:$}=n,_=(h,f,y,k=null,x=null,w=null,I=void 0,S=null,A=!!f.dynamicChildren)=>{if(h===f)return;h&&!vi(h,f)&&(k=sn(h),dt(h,x,w,!0),h=null),f.patchFlag===-2&&(A=!1,f.dynamicChildren=null);const{type:C,ref:B,shapeFlag:E}=f;switch(C){case ar:z(h,f,y,k);break;case Zi:j(h,f,y,k);break;case Er:h==null&&q(f,y,k,I);break;case Bt:tn(h,f,y,k,x,w,I,S,A);break;default:E&1?K(h,f,y,k,x,w,I,S,A):E&6?nn(h,f,y,k,x,w,I,S,A):(E&64||E&128)&&C.process(h,f,y,k,x,w,I,S,A,rn)}B!=null&&x&&Us(B,h&&h.ref,w,f||h,!f)},z=(h,f,y,k)=>{if(h==null)i(f.el=l(f.children),y,k);else{const x=f.el=h.el;f.children!==h.children&&d(x,f.children)}},j=(h,f,y,k)=>{h==null?i(f.el=a(f.children||""),y,k):f.el=h.el},q=(h,f,y,k)=>{[h.el,h.anchor]=$(h.children,f,y,k,h.el,h.anchor)},Z=({el:h,anchor:f},y,k)=>{let x;for(;h&&h!==f;)x=g(h),i(h,y,k),h=x;i(f,y,k)},R=({el:h,anchor:f})=>{let y;for(;h&&h!==f;)y=g(h),s(h),h=y;s(f)},K=(h,f,y,k,x,w,I,S,A)=>{f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),h==null?ye(f,y,k,x,w,I,S,A):Nn(h,f,x,w,I,S,A)},ye=(h,f,y,k,x,w,I,S)=>{let A,C;const{props:B,shapeFlag:E,transition:L,dirs:F}=h;if(A=h.el=o(h.type,w,B&&B.is,B),E&8?c(A,h.children):E&16&&Oe(h.children,A,null,k,x,Ir(h,w),I,S),F&&Cn(h,null,k,"created"),Re(A,h,h.scopeId,I,k),B){for(const ie in B)ie!=="value"&&!Pi(ie)&&r(A,ie,null,B[ie],w,k);"value"in B&&r(A,"value",null,B.value,w),(C=B.onVnodeBeforeMount)&&Lt(C,k,h)}F&&Cn(h,null,k,"beforeMount");const U=Qh(x,L);U&&L.beforeEnter(A),i(A,f,y),((C=B&&B.onVnodeMounted)||U||F)&&ht(()=>{C&&Lt(C,k,h),U&&L.enter(A),F&&Cn(h,null,k,"mounted")},x)},Re=(h,f,y,k,x)=>{if(y&&b(h,y),k)for(let w=0;w<k.length;w++)b(h,k[w]);if(x){let w=x.subTree;if(f===w||Kc(w.type)&&(w.ssContent===f||w.ssFallback===f)){const I=x.vnode;Re(h,I,I.scopeId,I.slotScopeIds,x.parent)}}},Oe=(h,f,y,k,x,w,I,S,A=0)=>{for(let C=A;C<h.length;C++){const B=h[C]=S?an(h[C]):Nt(h[C]);_(null,B,f,y,k,x,w,I,S)}},Nn=(h,f,y,k,x,w,I)=>{const S=f.el=h.el;let{patchFlag:A,dynamicChildren:C,dirs:B}=f;A|=h.patchFlag&16;const E=h.props||le,L=f.props||le;let F;if(y&&Tn(y,!1),(F=L.onVnodeBeforeUpdate)&&Lt(F,y,f,h),B&&Cn(f,h,y,"beforeUpdate"),y&&Tn(y,!0),(E.innerHTML&&L.innerHTML==null||E.textContent&&L.textContent==null)&&c(S,""),C?Vt(h.dynamicChildren,C,S,y,k,Ir(f,x),w):I||ne(h,f,S,null,y,k,Ir(f,x),w,!1),A>0){if(A&16)xe(S,E,L,y,x);else if(A&2&&E.class!==L.class&&r(S,"class",null,L.class,x),A&4&&r(S,"style",E.style,L.style,x),A&8){const U=f.dynamicProps;for(let ie=0;ie<U.length;ie++){const X=U[ie],De=E[X],$e=L[X];($e!==De||X==="value")&&r(S,X,De,$e,x,y)}}A&1&&h.children!==f.children&&c(S,f.children)}else!I&&C==null&&xe(S,E,L,y,x);((F=L.onVnodeUpdated)||B)&&ht(()=>{F&&Lt(F,y,f,h),B&&Cn(f,h,y,"updated")},k)},Vt=(h,f,y,k,x,w,I)=>{for(let S=0;S<f.length;S++){const A=h[S],C=f[S],B=A.el&&(A.type===Bt||!vi(A,C)||A.shapeFlag&70)?u(A.el):y;_(A,C,B,null,k,x,w,I,!0)}},xe=(h,f,y,k,x)=>{if(f!==y){if(f!==le)for(const w in f)!Pi(w)&&!(w in y)&&r(h,w,f[w],null,x,k);for(const w in y){if(Pi(w))continue;const I=y[w],S=f[w];I!==S&&w!=="value"&&r(h,w,S,I,x,k)}"value"in y&&r(h,"value",f.value,y.value,x)}},tn=(h,f,y,k,x,w,I,S,A)=>{const C=f.el=h?h.el:l(""),B=f.anchor=h?h.anchor:l("");let{patchFlag:E,dynamicChildren:L,slotScopeIds:F}=f;F&&(S=S?S.concat(F):F),h==null?(i(C,y,k),i(B,y,k),Oe(f.children||[],y,B,x,w,I,S,A)):E>0&&E&64&&L&&h.dynamicChildren?(Vt(h.dynamicChildren,L,y,x,w,I,S),(f.key!=null||x&&f===x.subTree)&&Yc(h,f,!0)):ne(h,f,y,B,x,w,I,S,A)},nn=(h,f,y,k,x,w,I,S,A)=>{f.slotScopeIds=S,h==null?f.shapeFlag&512?x.ctx.activate(f,y,k,I,A):wn(f,y,k,x,w,I,A):hs(h,f,A)},wn=(h,f,y,k,x,w,I)=>{const S=h.component=mf(h,k,x);if(Oc(h)&&(S.ctx.renderer=rn),bf(S,!1,I),S.asyncDep){if(x&&x.registerDep(S,_e,I),!h.el){const A=S.subTree=Xt(Zi);j(null,A,f,y)}}else _e(S,h,f,y,x,w,I)},hs=(h,f,y)=>{const k=f.component=h.component;if(rf(h,f,y))if(k.asyncDep&&!k.asyncResolved){de(k,f,y);return}else k.next=f,k.update();else f.el=h.el,k.vnode=f},_e=(h,f,y,k,x,w,I)=>{const S=()=>{if(h.isMounted){let{next:E,bu:L,u:F,parent:U,vnode:ie}=h;{const je=Qc(h);if(je){E&&(E.el=ie.el,de(h,E,I)),je.asyncDep.then(()=>{h.isUnmounted||S()});return}}let X=E,De;Tn(h,!1),E?(E.el=ie.el,de(h,E,I)):E=ie,L&&Is(L),(De=E.props&&E.props.onVnodeBeforeUpdate)&&Lt(De,U,E,ie),Tn(h,!0);const $e=Fl(h),ut=h.subTree;h.subTree=$e,_(ut,$e,u(ut.el),sn(ut),h,x,w),E.el=$e.el,X===null&&of(h,$e.el),F&&ht(F,x),(De=E.props&&E.props.onVnodeUpdated)&&ht(()=>Lt(De,U,E,ie),x)}else{let E;const{el:L,props:F}=f,{bm:U,m:ie,parent:X,root:De,type:$e}=h,ut=Fi(f);Tn(h,!1),U&&Is(U),!ut&&(E=F&&F.onVnodeBeforeMount)&&Lt(E,X,f),Tn(h,!0);{De.ce&&De.ce._injectChildStyle($e);const je=h.subTree=Fl(h);_(null,je,y,k,h,x,w),f.el=je.el}if(ie&&ht(ie,x),!ut&&(E=F&&F.onVnodeMounted)){const je=f;ht(()=>Lt(E,X,je),x)}(f.shapeFlag&256||X&&Fi(X.vnode)&&X.vnode.shapeFlag&256)&&h.a&&ht(h.a,x),h.isMounted=!0,f=y=k=null}};h.scope.on();const A=h.effect=new cc(S);h.scope.off();const C=h.update=A.run.bind(A),B=h.job=A.runIfDirty.bind(A);B.i=h,B.id=h.uid,A.scheduler=()=>No(B),Tn(h,!0),C()},de=(h,f,y)=>{f.component=h;const k=h.vnode.props;h.vnode=f,h.next=null,Vh(h,f.props,k,y),Gh(h,f.children,y),mn(),El(h),bn()},ne=(h,f,y,k,x,w,I,S,A=!1)=>{const C=h&&h.children,B=h?h.shapeFlag:0,E=f.children,{patchFlag:L,shapeFlag:F}=f;if(L>0){if(L&128){kn(C,E,y,k,x,w,I,S,A);return}else if(L&256){Ut(C,E,y,k,x,w,I,S,A);return}}F&8?(B&16&&$t(C,x,w),E!==C&&c(y,E)):B&16?F&16?kn(C,E,y,k,x,w,I,S,A):$t(C,x,w,!0):(B&8&&c(y,""),F&16&&Oe(E,y,k,x,w,I,S,A))},Ut=(h,f,y,k,x,w,I,S,A)=>{h=h||Zn,f=f||Zn;const C=h.length,B=f.length,E=Math.min(C,B);let L;for(L=0;L<E;L++){const F=f[L]=A?an(f[L]):Nt(f[L]);_(h[L],F,y,null,x,w,I,S,A)}C>B?$t(h,x,w,!0,!1,E):Oe(f,y,k,x,w,I,S,A,E)},kn=(h,f,y,k,x,w,I,S,A)=>{let C=0;const B=f.length;let E=h.length-1,L=B-1;for(;C<=E&&C<=L;){const F=h[C],U=f[C]=A?an(f[C]):Nt(f[C]);if(vi(F,U))_(F,U,y,null,x,w,I,S,A);else break;C++}for(;C<=E&&C<=L;){const F=h[E],U=f[L]=A?an(f[L]):Nt(f[L]);if(vi(F,U))_(F,U,y,null,x,w,I,S,A);else break;E--,L--}if(C>E){if(C<=L){const F=L+1,U=F<B?f[F].el:k;for(;C<=L;)_(null,f[C]=A?an(f[C]):Nt(f[C]),y,U,x,w,I,S,A),C++}}else if(C>L)for(;C<=E;)dt(h[C],x,w,!0),C++;else{const F=C,U=C,ie=new Map;for(C=U;C<=L;C++){const Ce=f[C]=A?an(f[C]):Nt(f[C]);Ce.key!=null&&ie.set(Ce.key,C)}let X,De=0;const $e=L-U+1;let ut=!1,je=0;const Ot=new Array($e);for(C=0;C<$e;C++)Ot[C]=0;for(C=F;C<=E;C++){const Ce=h[C];if(De>=$e){dt(Ce,x,w,!0);continue}let rt;if(Ce.key!=null)rt=ie.get(Ce.key);else for(X=U;X<=L;X++)if(Ot[X-U]===0&&vi(Ce,f[X])){rt=X;break}rt===void 0?dt(Ce,x,w,!0):(Ot[rt-U]=C+1,rt>=je?je=rt:ut=!0,_(Ce,f[rt],y,null,x,w,I,S,A),De++)}const mt=ut?Zh(Ot):Zn;for(X=mt.length-1,C=$e-1;C>=0;C--){const Ce=U+C,rt=f[Ce],Vn=Ce+1<B?f[Ce+1].el:k;Ot[C]===0?_(null,rt,y,Vn,x,w,I,S,A):ut&&(X<0||C!==mt[X]?ae(rt,y,Vn,2):X--)}}},ae=(h,f,y,k,x=null)=>{const{el:w,type:I,transition:S,children:A,shapeFlag:C}=h;if(C&6){ae(h.component.subTree,f,y,k);return}if(C&128){h.suspense.move(f,y,k);return}if(C&64){I.move(h,f,y,rn);return}if(I===Bt){i(w,f,y);for(let E=0;E<A.length;E++)ae(A[E],f,y,k);i(h.anchor,f,y);return}if(I===Er){Z(h,f,y);return}if(k!==2&&C&1&&S)if(k===0)S.beforeEnter(w),i(w,f,y),ht(()=>S.enter(w),x);else{const{leave:E,delayLeave:L,afterLeave:F}=S,U=()=>i(w,f,y),ie=()=>{E(w,()=>{U(),F&&F()})};L?L(w,U,ie):ie()}else i(w,f,y)},dt=(h,f,y,k=!1,x=!1)=>{const{type:w,props:I,ref:S,children:A,dynamicChildren:C,shapeFlag:B,patchFlag:E,dirs:L,cacheIndex:F}=h;if(E===-2&&(x=!1),S!=null&&Us(S,null,y,h,!0),F!=null&&(f.renderCache[F]=void 0),B&256){f.ctx.deactivate(h);return}const U=B&1&&L,ie=!Fi(h);let X;if(ie&&(X=I&&I.onVnodeBeforeUnmount)&&Lt(X,f,h),B&6)pe(h.component,y,k);else{if(B&128){h.suspense.unmount(y,k);return}U&&Cn(h,null,f,"beforeUnmount"),B&64?h.type.remove(h,f,y,rn,k):C&&!C.hasOnce&&(w!==Bt||E>0&&E&64)?$t(C,f,y,!1,!0):(w===Bt&&E&384||!x&&B&16)&&$t(A,f,y),k&&ke(h)}(ie&&(X=I&&I.onVnodeUnmounted)||U)&&ht(()=>{X&&Lt(X,f,h),U&&Cn(h,null,f,"unmounted")},y)},ke=h=>{const{type:f,el:y,anchor:k,transition:x}=h;if(f===Bt){fs(y,k);return}if(f===Er){R(h);return}const w=()=>{s(y),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:I,delayLeave:S}=x,A=()=>I(y,w);S?S(h.el,w,A):A()}else w()},fs=(h,f)=>{let y;for(;h!==f;)y=g(h),s(h),h=y;s(f)},pe=(h,f,y)=>{const{bum:k,scope:x,job:w,subTree:I,um:S,m:A,a:C}=h;Ml(A),Ml(C),k&&Is(k),x.stop(),w&&(w.flags|=8,dt(I,h,f,y)),S&&ht(S,f),ht(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},$t=(h,f,y,k=!1,x=!1,w=0)=>{for(let I=w;I<h.length;I++)dt(h[I],f,y,k,x)},sn=h=>{if(h.shapeFlag&6)return sn(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const f=g(h.anchor||h.el),y=f&&f[bh];return y?g(y):f};let Hn=!1;const zn=(h,f,y)=>{h==null?f._vnode&&dt(f._vnode,null,null,!0):_(f._vnode||null,h,f,null,null,null,y),f._vnode=h,Hn||(Hn=!0,El(),_c(),Hn=!1)},rn={p:_,um:dt,m:ae,r:ke,mt:wn,mc:Oe,pc:ne,pbc:Vt,n:sn,o:n};return{render:zn,hydrate:void 0,createApp:Nh(zn)}}function Ir({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Tn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Qh(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Yc(n,e,t=!1){const i=n.children,s=e.children;if(H(i)&&H(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=an(s[r]),l.el=o.el),!t&&l.patchFlag!==-2&&Yc(o,l)),l.type===ar&&(l.el=o.el)}}function Zh(n){const e=n.slice(),t=[0];let i,s,r,o,l;const a=n.length;for(i=0;i<a;i++){const d=n[i];if(d!==0){if(s=t[t.length-1],n[s]<d){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)l=r+o>>1,n[t[l]]<d?r=l+1:o=l;d<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Qc(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qc(e)}function Ml(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Xh=Symbol.for("v-scx"),Jh=()=>Rs(Xh);function Os(n,e,t){return Zc(n,e,t)}function Zc(n,e,t=le){const{immediate:i,deep:s,flush:r,once:o}=t,l=Ne({},t),a=e&&i||!e&&r!=="post";let d;if(Ji){if(r==="sync"){const b=Jh();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!a){const b=()=>{};return b.stop=Ht,b.resume=Ht,b.pause=Ht,b}}const c=Xe;l.call=(b,$,_)=>zt(b,c,$,_);let u=!1;r==="post"?l.scheduler=b=>{ht(b,c&&c.suspense)}:r!=="sync"&&(u=!0,l.scheduler=(b,$)=>{$?b():No(b)}),l.augmentJob=b=>{e&&(b.flags|=4),u&&(b.flags|=2,c&&(b.id=c.uid,b.i=c))};const g=dh(n,e,l);return Ji&&(d?d.push(g):a&&g()),g}function Kh(n,e,t){const i=this.proxy,s=Te(n)?n.includes(".")?Xc(i,n):()=>i[n]:n.bind(i,i);let r;V(e)?r=e:(r=e.handler,t=e);const o=rs(this),l=Zc(s,r.bind(i),t);return o(),l}function Xc(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const ef=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${un(e)}Modifiers`]||n[`${gn(e)}Modifiers`];function tf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||le;let s=t;const r=e.startsWith("update:"),o=r&&ef(i,e.slice(7));o&&(o.trim&&(s=t.map(c=>Te(c)?c.trim():c)),o.number&&(s=t.map(no)));let l,a=i[l=Cr(e)]||i[l=Cr(un(e))];!a&&r&&(a=i[l=Cr(gn(e))]),a&&zt(a,n,6,s);const d=i[l+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,zt(d,n,6,s)}}function Jc(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},l=!1;if(!V(n)){const a=d=>{const c=Jc(d,e,!0);c&&(l=!0,Ne(o,c))};!t&&e.mixins.length&&e.mixins.forEach(a),n.extends&&a(n.extends),n.mixins&&n.mixins.forEach(a)}return!r&&!l?(me(n)&&i.set(n,null),null):(H(r)?r.forEach(a=>o[a]=null):Ne(o,r),me(n)&&i.set(n,o),o)}function lr(n,e){return!n||!er(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(n,e[0].toLowerCase()+e.slice(1))||te(n,gn(e))||te(n,e))}function Fl(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:a,render:d,renderCache:c,props:u,data:g,setupState:b,ctx:$,inheritAttrs:_}=n,z=Vs(n);let j,q;try{if(t.shapeFlag&4){const R=s||i,K=R;j=Nt(d.call(K,R,c,u,b,g,$)),q=l}else{const R=e;j=Nt(R.length>1?R(u,{attrs:l,slots:o,emit:a}):R(u,null)),q=e.props?l:nf(l)}}catch(R){Ni.length=0,rr(R,n,1),j=Xt(Zi)}let Z=j;if(q&&_!==!1){const R=Object.keys(q),{shapeFlag:K}=Z;R.length&&K&7&&(r&&R.some(So)&&(q=sf(q,r)),Z=oi(Z,q,!1,!0))}return t.dirs&&(Z=oi(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(t.dirs):t.dirs),t.transition&&Ho(Z,t.transition),j=Z,Vs(z),j}const nf=n=>{let e;for(const t in n)(t==="class"||t==="style"||er(t))&&((e||(e={}))[t]=n[t]);return e},sf=(n,e)=>{const t={};for(const i in n)(!So(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function rf(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:l,patchFlag:a}=e,d=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&a>=0){if(a&1024)return!0;if(a&16)return i?Bl(i,o,d):!!o;if(a&8){const c=e.dynamicProps;for(let u=0;u<c.length;u++){const g=c[u];if(o[g]!==i[g]&&!lr(d,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Bl(i,o,d):!0:!!o;return!1}function Bl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!lr(t,r))return!0}return!1}function of({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Kc=n=>n.__isSuspense;function lf(n,e){e&&e.pendingBranch?H(n)?e.effects.push(...n):e.effects.push(n):ph(n)}const Bt=Symbol.for("v-fgt"),ar=Symbol.for("v-txt"),Zi=Symbol.for("v-cmt"),Er=Symbol.for("v-stc"),Ni=[];let pt=null;function Hi(n=!1){Ni.push(pt=n?null:[])}function af(){Ni.pop(),pt=Ni[Ni.length-1]||null}let Xi=1;function Nl(n,e=!1){Xi+=n,n<0&&pt&&e&&(pt.hasOnce=!0)}function ed(n){return n.dynamicChildren=Xi>0?pt||Zn:null,af(),Xi>0&&pt&&pt.push(n),n}function qs(n,e,t,i,s,r){return ed(ft(n,e,t,i,s,r,!0))}function cf(n,e,t,i,s){return ed(Xt(n,e,t,i,s,!0))}function td(n){return n?n.__v_isVNode===!0:!1}function vi(n,e){return n.type===e.type&&n.key===e.key}const nd=({key:n})=>n??null,Ds=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Te(n)||Fe(n)||V(n)?{i:yt,r:n,k:e,f:!!t}:n:null);function ft(n,e=null,t=null,i=0,s=null,r=n===Bt?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&nd(e),ref:e&&Ds(e),scopeId:Ec,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return l?(Uo(a,t),r&128&&n.normalize(a)):t&&(a.shapeFlag|=Te(t)?8:16),Xi>0&&!o&&pt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&pt.push(a),a}const Xt=df;function df(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Eh)&&(n=Zi),td(n)){const l=oi(n,e,!0);return t&&Uo(l,t),Xi>0&&!r&&pt&&(l.shapeFlag&6?pt[pt.indexOf(n)]=l:pt.push(l)),l.patchFlag=-2,l}if(wf(n)&&(n=n.__vccOpts),e){e=uf(e);let{class:l,style:a}=e;l&&!Te(l)&&(e.class=Jn(l)),me(a)&&(Fo(a)&&!H(a)&&(a=Ne({},a)),e.style=Io(a))}const o=Te(n)?1:Kc(n)?128:yh(n)?64:me(n)?4:V(n)?2:0;return ft(n,e,t,i,s,o,r,!0)}function uf(n){return n?Fo(n)||zc(n)?Ne({},n):n:null}function oi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:a}=n,d=e?ff(s||{},e):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&nd(d),ref:e&&e.ref?t&&r?H(r)?r.concat(Ds(e)):[r,Ds(e)]:Ds(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:a,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&oi(n.ssContent),ssFallback:n.ssFallback&&oi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return a&&i&&Ho(c,a.clone(c)),c}function hf(n=" ",e=0){return Xt(ar,null,n,e)}function Nt(n){return n==null||typeof n=="boolean"?Xt(Zi):H(n)?Xt(Bt,null,n.slice()):td(n)?an(n):Xt(ar,null,String(n))}function an(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:oi(n)}function Uo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(H(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Uo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!zc(e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:yt},t=32):(e=String(e),i&64?(t=16,e=[hf(e)]):t=8);n.children=e,n.shapeFlag|=t}function ff(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Jn([e.class,i.class]));else if(s==="style")e.style=Io([e.style,i.style]);else if(er(s)){const r=e[s],o=i[s];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Lt(n,e,t,i=null){zt(n,e,7,[t,i])}const pf=Bc();let gf=0;function mf(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||pf,r={uid:gf++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uc(i,s),emitsOptions:Jc(i,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:i.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=tf.bind(null,r),n.ce&&n.ce(r),r}let Xe=null,Gs,po;{const n=ir(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Gs=e("__VUE_INSTANCE_SETTERS__",t=>Xe=t),po=e("__VUE_SSR_SETTERS__",t=>Ji=t)}const rs=n=>{const e=Xe;return Gs(n),n.scope.on(),()=>{n.scope.off(),Gs(e)}},Hl=()=>{Xe&&Xe.scope.off(),Gs(null)};function id(n){return n.vnode.shapeFlag&4}let Ji=!1;function bf(n,e=!1,t=!1){e&&po(e);const{props:i,children:s}=n.vnode,r=id(n);zh(n,i,r,e),qh(n,s,t);const o=r?yf(n,e):void 0;return e&&po(!1),o}function yf(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Oh);const{setup:i}=t;if(i){mn();const s=n.setupContext=i.length>1?vf(n):null,r=rs(n),o=ss(i,n,0,[n.props,s]),l=Ka(o);if(bn(),r(),(l||n.sp)&&!Fi(n)&&Rc(n),l){if(o.then(Hl,Hl),e)return o.then(a=>{zl(n,a)}).catch(a=>{rr(a,n,0)});n.asyncDep=o}else zl(n,o)}else sd(n)}function zl(n,e,t){V(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:me(e)&&(n.setupState=$c(e)),sd(n)}function sd(n,e,t){const i=n.type;n.render||(n.render=i.render||Ht);{const s=rs(n);mn();try{Dh(n)}finally{bn(),s()}}}const xf={get(n,e){return Le(n,"get",""),n[e]}};function vf(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,xf),slots:n.slots,emit:n.emit,expose:e}}function cr(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($c(Tc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Bi)return Bi[t](n)},has(e,t){return t in e||t in Bi}})):n.proxy}function wf(n){return V(n)&&"__vccOpts"in n}const rd=(n,e)=>ah(n,e,Ji),kf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let go;const Vl=typeof window<"u"&&window.trustedTypes;if(Vl)try{go=Vl.createPolicy("vue",{createHTML:n=>n})}catch{}const od=go?n=>go.createHTML(n):n=>n,Cf="http://www.w3.org/2000/svg",Tf="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,Ul=Gt&&Gt.createElement("template"),$f={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Gt.createElementNS(Cf,n):e==="mathml"?Gt.createElementNS(Tf,n):t?Gt.createElement(n,{is:t}):Gt.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Gt.createTextNode(n),createComment:n=>Gt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ul.innerHTML=od(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const l=Ul.content;if(i==="svg"||i==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Sf=Symbol("_vtc");function Af(n,e,t){const i=n[Sf];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jl=Symbol("_vod"),_f=Symbol("_vsh"),If=Symbol(""),Ef=/(^|;)\s*display\s*:/;function Rf(n,e,t){const i=n.style,s=Te(t);let r=!1;if(t&&!s){if(e)if(Te(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Ps(i,l,"")}else for(const o in e)t[o]==null&&Ps(i,o,"");for(const o in t)o==="display"&&(r=!0),Ps(i,o,t[o])}else if(s){if(e!==t){const o=i[If];o&&(t+=";"+o),i.cssText=t,r=Ef.test(t)}}else e&&n.removeAttribute("style");jl in n&&(n[jl]=r?i.display:"",n[_f]&&(i.display="none"))}const ql=/\s*!important$/;function Ps(n,e,t){if(H(t))t.forEach(i=>Ps(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Of(n,e);ql.test(t)?n.setProperty(gn(i),t.replace(ql,""),"important"):n[i]=t}}const Gl=["Webkit","Moz","ms"],Rr={};function Of(n,e){const t=Rr[e];if(t)return t;let i=un(e);if(i!=="filter"&&i in n)return Rr[e]=i;i=nc(i);for(let s=0;s<Gl.length;s++){const r=Gl[s]+i;if(r in n)return Rr[e]=r}return e}const Wl="http://www.w3.org/1999/xlink";function Yl(n,e,t,i,s,r=Mu(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wl,e.slice(6,e.length)):n.setAttributeNS(Wl,e,t):t==null||r&&!sc(t)?n.removeAttribute(e):n.setAttribute(e,r?"":pn(t)?String(t):t)}function Ql(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?od(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?n.getAttribute("value")||"":n.value,a=t==null?n.type==="checkbox"?"on":"":String(t);(l!==a||!("_value"in n))&&(n.value=a),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=sc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Gn(n,e,t,i){n.addEventListener(e,t,i)}function Df(n,e,t,i){n.removeEventListener(e,t,i)}const Zl=Symbol("_vei");function Pf(n,e,t,i,s=null){const r=n[Zl]||(n[Zl]={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=Lf(e);if(i){const d=r[e]=Bf(i,s);Gn(n,l,d,a)}else o&&(Df(n,l,o,a),r[e]=void 0)}}const Xl=/(?:Once|Passive|Capture)$/;function Lf(n){let e;if(Xl.test(n)){e={};let i;for(;i=n.match(Xl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):gn(n.slice(2)),e]}let Or=0;const Mf=Promise.resolve(),Ff=()=>Or||(Mf.then(()=>Or=0),Or=Date.now());function Bf(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;zt(Nf(i,t.value),e,5,[i])};return t.value=n,t.attached=Ff(),t}function Nf(n,e){if(H(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Jl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hf=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Af(n,i,o):e==="style"?Rf(n,t,i):er(e)?So(e)||Pf(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zf(n,e,i,o))?(Ql(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yl(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Te(i))?Ql(n,un(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Yl(n,e,i,o))};function zf(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Jl(e)&&V(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jl(e)&&Te(t)?!1:e in n}const Kl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return H(e)?t=>Is(e,t):e};function Vf(n){n.target.composing=!0}function ea(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dr=Symbol("_assign"),Uf={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Dr]=Kl(s);const r=i||s.props&&s.props.type==="number";Gn(n,e?"change":"input",o=>{if(o.target.composing)return;let l=n.value;t&&(l=l.trim()),r&&(l=no(l)),n[Dr](l)}),t&&Gn(n,"change",()=>{n.value=n.value.trim()}),e||(Gn(n,"compositionstart",Vf),Gn(n,"compositionend",ea),Gn(n,"change",ea))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Dr]=Kl(o),n.composing)return;const l=(r||n.type==="number")&&!/^0\d/.test(n.value)?no(n.value):n.value,a=e??"";l!==a&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===a)||(n.value=a))}},jf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=gn(s.key);if(e.some(o=>o===r||jf[o]===r))return n(s)})},Gf=Ne({patchProp:Hf},$f);let ta;function Wf(){return ta||(ta=Wh(Gf))}const Yf=(...n)=>{const e=Wf().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Zf(i);if(!s)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Qf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qf(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Zf(n){return Te(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Xf=Symbol();var na;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(na||(na={}));function Jf(){const n=Fu(!0),e=n.run(()=>Ns({}));let t=[],i=[];const s=Tc({install(r){s._a=r,r.provide(Xf,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const hn=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();hn.trustedTypes===void 0&&(hn.trustedTypes={createPolicy:(n,e)=>e});const ld={configurable:!1,enumerable:!1,writable:!1};hn.FAST===void 0&&Reflect.defineProperty(hn,"FAST",Object.assign({value:Object.create(null)},ld));const Ki=hn.FAST;if(Ki.getById===void 0){const n=Object.create(null);Reflect.defineProperty(Ki,"getById",Object.assign({value(e,t){let i=n[e];return i===void 0&&(i=t?n[e]=t():null),i}},ld))}const Rn=Object.freeze([]);function ad(){const n=new WeakMap;return function(e){let t=n.get(e);if(t===void 0){let i=Reflect.getPrototypeOf(e);for(;t===void 0&&i!==null;)t=n.get(i),i=Reflect.getPrototypeOf(i);t=t===void 0?[]:t.slice(0),n.set(e,t)}return t}}const Pr=hn.FAST.getById(1,()=>{const n=[],e=[];function t(){if(e.length)throw e.shift()}function i(o){try{o.call()}catch(l){e.push(l),setTimeout(t,0)}}function s(){let l=0;for(;l<n.length;)if(i(n[l]),l++,l>1024){for(let a=0,d=n.length-l;a<d;a++)n[a]=n[a+l];n.length-=l,l=0}n.length=0}function r(o){n.length<1&&hn.requestAnimationFrame(s),n.push(o)}return Object.freeze({enqueue:r,process:s})}),cd=hn.trustedTypes.createPolicy("fast-html",{createHTML:n=>n});let Lr=cd;const zi=`fast-${Math.random().toString(36).substring(2,8)}`,dd=`${zi}{`,jo=`}${zi}`,Y=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(n){if(Lr!==cd)throw new Error("The HTML policy can only be set once.");Lr=n},createHTML(n){return Lr.createHTML(n)},isMarker(n){return n&&n.nodeType===8&&n.data.startsWith(zi)},extractDirectiveIndexFromMarker(n){return parseInt(n.data.replace(`${zi}:`,""))},createInterpolationPlaceholder(n){return`${dd}${n}${jo}`},createCustomAttributePlaceholder(n,e){return`${n}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(n){return`<!--${zi}:${n}-->`},queueUpdate:Pr.enqueue,processUpdates:Pr.process,nextUpdate(){return new Promise(Pr.enqueue)},setAttribute(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)},setBooleanAttribute(n,e,t){t?n.setAttribute(e,""):n.removeAttribute(e)},removeChildNodes(n){for(let e=n.firstChild;e!==null;e=n.firstChild)n.removeChild(e)},createTemplateWalker(n){return document.createTreeWalker(n,133,null,!1)}});class Ws{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);i!==-1&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(t===void 0){const s=this.sub1,r=this.sub2;s!==void 0&&s.handleChange(i,e),r!==void 0&&r.handleChange(i,e)}else for(let s=0,r=t.length;s<r;++s)t[s].handleChange(i,e)}}class ud{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];i!==void 0&&i.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var i;if(t){let s=this.subscribers[t];s===void 0&&(this.subscribers[t]=s=new Ws(this.source)),s.subscribe(e)}else this.sourceSubscribers=(i=this.sourceSubscribers)!==null&&i!==void 0?i:new Ws(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const s=this.subscribers[t];s!==void 0&&s.unsubscribe(e)}else(i=this.sourceSubscribers)===null||i===void 0||i.unsubscribe(e)}}const W=Ki.getById(2,()=>{const n=/(:|&&|\|\||if)/,e=new WeakMap,t=Y.queueUpdate;let i,s=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(d){let c=d.$fastController||e.get(d);return c===void 0&&(Array.isArray(d)?c=s(d):e.set(d,c=new ud(d))),c}const o=ad();class l{constructor(c){this.name=c,this.field=`_${c}`,this.callback=`${c}Changed`}getValue(c){return i!==void 0&&i.watch(c,this.name),c[this.field]}setValue(c,u){const g=this.field,b=c[g];if(b!==u){c[g]=u;const $=c[this.callback];typeof $=="function"&&$.call(c,b,u),r(c).notify(this.name)}}}class a extends Ws{constructor(c,u,g=!1){super(c,u),this.binding=c,this.isVolatileBinding=g,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(c,u){this.needsRefresh&&this.last!==null&&this.disconnect();const g=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const b=this.binding(c,u);return i=g,b}disconnect(){if(this.last!==null){let c=this.first;for(;c!==void 0;)c.notifier.unsubscribe(this,c.propertyName),c=c.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(c,u){const g=this.last,b=r(c),$=g===null?this.first:{};if($.propertySource=c,$.propertyName=u,$.notifier=b,b.subscribe(this,u),g!==null){if(!this.needsRefresh){let _;i=void 0,_=g.propertySource[g.propertyName],i=this,c===_&&(this.needsRefresh=!0)}g.next=$}this.last=$}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let c=this.first;return{next:()=>{const u=c;return u===void 0?{value:void 0,done:!0}:(c=c.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){s=d},getNotifier:r,track(d,c){i!==void 0&&i.watch(d,c)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(d,c){r(d).notify(c)},defineProperty(d,c){typeof c=="string"&&(c=new l(c)),o(d).push(c),Reflect.defineProperty(d,c.name,{enumerable:!0,get:function(){return c.getValue(this)},set:function(u){c.setValue(this,u)}})},getAccessors:o,binding(d,c,u=this.isVolatileBinding(d)){return new a(d,c,u)},isVolatileBinding(d){return n.test(d.toString())}})});function D(n,e){W.defineProperty(n,e)}function Kf(n,e,t){return Object.assign({},t,{get:function(){return W.trackVolatile(),t.get.apply(this)}})}const ia=Ki.getById(3,()=>{let n=null;return{get(){return n},set(e){n=e}}});class es{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return ia.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){ia.set(e)}}W.defineProperty(es.prototype,"index");W.defineProperty(es.prototype,"length");const Vi=Object.seal(new es);class dr{constructor(){this.targetIndex=0}}class hd extends dr{constructor(){super(...arguments),this.createPlaceholder=Y.createInterpolationPlaceholder}}class qo extends dr{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return Y.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function ep(n,e){this.source=n,this.context=e,this.bindingObserver===null&&(this.bindingObserver=W.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(n,e))}function tp(n,e){this.source=n,this.context=e,this.target.addEventListener(this.targetName,this)}function np(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function ip(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const n=this.target.$fastView;n!==void 0&&n.isComposed&&(n.unbind(),n.needsBindOnly=!0)}function sp(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function rp(n){Y.setAttribute(this.target,this.targetName,n)}function op(n){Y.setBooleanAttribute(this.target,this.targetName,n)}function lp(n){if(n==null&&(n=""),n.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=n.create():this.target.$fastTemplate!==n&&(e.isComposed&&(e.remove(),e.unbind()),e=n.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=n)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=n}}function ap(n){this.target[this.targetName]=n}function cp(n){const e=this.classVersions||Object.create(null),t=this.target;let i=this.version||0;if(n!=null&&n.length){const s=n.split(/\s+/);for(let r=0,o=s.length;r<o;++r){const l=s[r];l!==""&&(e[l]=i,t.classList.add(l))}}if(this.classVersions=e,this.version=i+1,i!==0){i-=1;for(const s in e)e[s]===i&&t.classList.remove(s)}}class Go extends hd{constructor(e){super(),this.binding=e,this.bind=ep,this.unbind=np,this.updateTarget=rp,this.isBindingVolatile=W.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ap,this.cleanedTargetName==="innerHTML"){const t=this.binding;this.binding=(i,s)=>Y.createHTML(t(i,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=op;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=tp,this.unbind=sp;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=cp);break}}targetAtContent(){this.updateTarget=lp,this.unbind=ip}createBehavior(e){return new dp(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class dp{constructor(e,t,i,s,r,o,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=s,this.unbind=r,this.updateTarget=o,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){es.setEvent(e);const t=this.binding(this.source,this.context);es.setEvent(null),t!==!0&&e.preventDefault()}}let Mr=null;class Wo{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Mr=this}static borrow(e){const t=Mr||new Wo;return t.directives=e,t.reset(),Mr=null,t}}function up(n){if(n.length===1)return n[0];let e;const t=n.length,i=n.map(o=>typeof o=="string"?()=>o:(e=o.targetName||e,o.binding)),s=(o,l)=>{let a="";for(let d=0;d<t;++d)a+=i[d](o,l);return a},r=new Go(s);return r.targetName=e,r}const hp=jo.length;function fd(n,e){const t=e.split(dd);if(t.length===1)return null;const i=[];for(let s=0,r=t.length;s<r;++s){const o=t[s],l=o.indexOf(jo);let a;if(l===-1)a=o;else{const d=parseInt(o.substring(0,l));i.push(n.directives[d]),a=o.substring(l+hp)}a!==""&&i.push(a)}return i}function sa(n,e,t=!1){const i=e.attributes;for(let s=0,r=i.length;s<r;++s){const o=i[s],l=o.value,a=fd(n,l);let d=null;a===null?t&&(d=new Go(()=>l),d.targetName=o.name):d=up(a),d!==null&&(e.removeAttributeNode(o),s--,r--,n.addFactory(d))}}function fp(n,e,t){const i=fd(n,e.textContent);if(i!==null){let s=e;for(let r=0,o=i.length;r<o;++r){const l=i[r],a=r===0?e:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",n.captureContentBinding(l)),s=a,n.targetIndex++,a!==e&&t.nextNode()}n.targetIndex--}}function pp(n,e){const t=n.content;document.adoptNode(t);const i=Wo.borrow(e);sa(i,n,!0);const s=i.behaviorFactories;i.reset();const r=Y.createTemplateWalker(t);let o;for(;o=r.nextNode();)switch(i.targetIndex++,o.nodeType){case 1:sa(i,o);break;case 3:fp(i,o,r);break;case 8:Y.isMarker(o)&&i.addFactory(e[Y.extractDirectiveIndexFromMarker(o)])}let l=0;(Y.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),l=-1);const a=i.behaviorFactories;return i.release(),{fragment:t,viewBehaviorFactories:a,hostBehaviorFactories:s,targetOffset:l}}const Fr=document.createRange();class pd{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let s=this.firstChild,r;for(;s!==t;)r=s.nextSibling,i.insertBefore(s,e),s=r;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,e.appendChild(i),i=s;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,e.removeChild(i),i=s;e.removeChild(t);const r=this.behaviors,o=this.source;for(let l=0,a=r.length;l<a;++l)r[l].unbind(o)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(this.source!==null){const s=this.source;this.source=e,this.context=t;for(let r=0,o=i.length;r<o;++r){const l=i[r];l.unbind(s),l.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,r=i.length;s<r;++s)i[s].bind(e,t)}}unbind(){if(this.source===null)return;const e=this.behaviors,t=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Fr.setStartBefore(e[0].firstChild),Fr.setEndAfter(e[e.length-1].lastChild),Fr.deleteContents();for(let t=0,i=e.length;t<i;++t){const s=e[t],r=s.behaviors,o=s.source;for(let l=0,a=r.length;l<a;++l)r[l].unbind(o)}}}}class ra{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let d;const c=this.html;if(typeof c=="string"){d=document.createElement("template"),d.innerHTML=Y.createHTML(c);const g=d.content.firstElementChild;g!==null&&g.tagName==="TEMPLATE"&&(d=g)}else d=c;const u=pp(d,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),r=Y.createTemplateWalker(t);let o=0,l=this.targetOffset,a=r.nextNode();for(let d=i.length;o<d;++o){const c=i[o],u=c.targetIndex;for(;a!==null;)if(l===u){s[o]=c.createBehavior(a);break}else a=r.nextNode(),l++}if(this.hasHostBehaviors){const d=this.hostBehaviorFactories;for(let c=0,u=d.length;c<u;++c,++o)s[o]=d[c].createBehavior(e)}return new pd(t,s)}render(e,t,i){typeof t=="string"&&(t=document.getElementById(t)),i===void 0&&(i=t);const s=this.create(i);return s.bind(e,Vi),s.appendTo(t),s}}const gp=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function J(n,...e){const t=[];let i="";for(let s=0,r=n.length-1;s<r;++s){const o=n[s];let l=e[s];if(i+=o,l instanceof ra){const a=l;l=()=>a}if(typeof l=="function"&&(l=new Go(l)),l instanceof hd){const a=gp.exec(o);a!==null&&(l.targetName=a[2])}l instanceof dr?(i+=l.createPlaceholder(t.length),t.push(l)):i+=l}return i+=n[n.length-1],new ra(i,t)}class lt{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}lt.create=(()=>{if(Y.supportsAdoptedStyleSheets){const n=new Map;return e=>new mp(e,n)}return n=>new xp(n)})();function Yo(n){return n.map(e=>e instanceof lt?Yo(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function gd(n){return n.map(e=>e instanceof lt?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}const md=Symbol("prependToAdoptedStyleSheets");function bd(n){const e=[],t=[];return n.forEach(i=>(i[md]?e:t).push(i)),{prepend:e,append:t}}let yd=(n,e)=>{const{prepend:t,append:i}=bd(e);n.adoptedStyleSheets=[...t,...n.adoptedStyleSheets,...i]},xd=(n,e)=>{n.adoptedStyleSheets=n.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(Y.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),yd=(n,e)=>{const{prepend:t,append:i}=bd(e);n.adoptedStyleSheets.splice(0,0,...t),n.adoptedStyleSheets.push(...i)},xd=(n,e)=>{for(const t of e){const i=n.adoptedStyleSheets.indexOf(t);i!==-1&&n.adoptedStyleSheets.splice(i,1)}}}catch{}class mp extends lt{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=gd(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Yo(e).map(i=>{if(i instanceof CSSStyleSheet)return i;let s=t.get(i);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(i),t.set(i,s)),s})}return this._styleSheets}addStylesTo(e){yd(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){xd(e,this.styleSheets),super.removeStylesFrom(e)}}let bp=0;function yp(){return`fast-style-class-${++bp}`}class xp extends lt{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=gd(e),this.styleSheets=Yo(e),this.styleClass=yp()}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const r=document.createElement("style");r.innerHTML=t[s],r.className=i,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const t=e.querySelectorAll(`.${this.styleClass}`);for(let i=0,s=t.length;i<s;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Ys=Object.freeze({locate:ad()}),vd={toView(n){return n?"true":"false"},fromView(n){return!(n==null||n==="false"||n===!1||n===0)}},It={toView(n){if(n==null)return null;const e=n*1;return isNaN(e)?null:e.toString()},fromView(n){if(n==null)return null;const e=n*1;return isNaN(e)?null:e}};class Qs{constructor(e,t,i=t.toLowerCase(),s="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=s,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,s==="boolean"&&r===void 0&&(this.converter=vd)}setValue(e,t){const i=e[this.fieldName],s=this.converter;s!==void 0&&(t=s.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return W.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||t==="fromView"||Y.queueUpdate(()=>{i.add(e);const s=e[this.fieldName];switch(t){case"reflect":const r=this.converter;Y.setAttribute(e,this.attribute,r!==void 0?r.toView(s):s);break;case"boolean":Y.setBooleanAttribute(e,this.attribute,s);break}i.delete(e)})}static collect(e,...t){const i=[];t.push(Ys.locate(e));for(let s=0,r=t.length;s<r;++s){const o=t[s];if(o!==void 0)for(let l=0,a=o.length;l<a;++l){const d=o[l];typeof d=="string"?i.push(new Qs(e,d)):i.push(new Qs(e,d.property,d.attribute,d.mode,d.converter))}}return i}}function v(n,e){let t;function i(s,r){arguments.length>1&&(t.property=r),Ys.locate(s.constructor).push(t)}if(arguments.length>1){t={},i(n,e);return}return t=n===void 0?{}:n,i}const oa={mode:"open"},la={},mo=Ki.getById(4,()=>{const n=new Map;return Object.freeze({register(e){return n.has(e.type)?!1:(n.set(e.type,e),!0)},getByType(e){return n.get(e)}})});class ur{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=Qs.collect(e,t.attributes),s=new Array(i.length),r={},o={};for(let l=0,a=i.length;l<a;++l){const d=i[l];s[l]=d.attribute,r[d.name]=d,o[d.attribute]=d}this.attributes=i,this.observedAttributes=s,this.propertyLookup=r,this.attributeLookup=o,this.shadowOptions=t.shadowOptions===void 0?oa:t.shadowOptions===null?void 0:Object.assign(Object.assign({},oa),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?la:Object.assign(Object.assign({},la),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?lt.create(t.styles):t.styles instanceof lt?t.styles:lt.create([t.styles])}get isDefined(){return!!mo.getByType(this.type)}define(e=customElements){const t=this.type;if(mo.register(this)){const i=this.attributes,s=t.prototype;for(let r=0,o=i.length;r<o;++r)W.defineProperty(s,i[r]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}ur.forType=mo.getByType;const wd=new WeakMap,vp={bubbles:!0,composed:!0,cancelable:!0};function Br(n){return n.shadowRoot||wd.get(n)||null}class Qo extends ud{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(i!==void 0){const r=e.attachShadow(i);i.mode==="closed"&&wd.set(e,r)}const s=W.getAccessors(e);if(s.length>0){const r=this.boundObservables=Object.create(null);for(let o=0,l=s.length;o<l;++o){const a=s[o].name,d=e[a];d!==void 0&&(delete e[a],r[a]=d)}}}get isConnected(){return W.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,W.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const t=Br(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),i!==null&&this.addBehaviors(i)}}removeStyles(e){const t=Br(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),i!==null&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let r=0;r<i;++r){const o=e[r];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),s.push(o))}if(this._isConnected){const r=this.element;for(let o=0;o<s.length;++o)s[o].bind(r,Vi)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(i===null)return;const s=e.length,r=[];for(let o=0;o<s;++o){const l=e[o];if(i.has(l)){const a=i.get(l)-1;a===0||t?i.delete(l)&&r.push(l):i.set(l,a)}}if(this._isConnected){const o=this.element;for(let l=0;l<r.length;++l)r[l].unbind(o)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Vi);const t=this.behaviors;if(t!==null)for(const[i]of t)i.bind(e,Vi);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const t=this.behaviors;if(t!==null){const i=this.element;for(const[s]of t)s.unbind(i)}}onAttributeChangedCallback(e,t,i){const s=this.definition.attributeLookup[e];s!==void 0&&s.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},vp),i))):!1}finishInitialization(){const e=this.element,t=this.boundObservables;if(t!==null){const s=Object.keys(t);for(let r=0,o=s.length;r<o;++r){const l=s[r];e[l]=t[l]}this.boundObservables=null}const i=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=Br(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||Y.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const i=ur.forType(e.constructor);if(i===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new Qo(e,i)}}function aa(n){return class extends n{constructor(){super(),Qo.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const hr=Object.assign(aa(HTMLElement),{from(n){return aa(n)},define(n,e){return new ur(n,e).define().type}});class kd{createCSS(){return""}createBehavior(){}}function wp(n,e){const t=[];let i="";const s=[];for(let r=0,o=n.length-1;r<o;++r){i+=n[r];let l=e[r];if(l instanceof kd){const a=l.createBehavior();l=l.createCSS(),a&&s.push(a)}l instanceof lt||l instanceof CSSStyleSheet?(i.trim()!==""&&(t.push(i),i=""),t.push(l)):i+=l}return i+=n[n.length-1],i.trim()!==""&&t.push(i),{styles:t,behaviors:s}}function be(n,...e){const{styles:t,behaviors:i}=wp(n,e),s=lt.create(t);return i.length&&s.withBehaviors(...i),s}function At(n,e,t){return{index:n,removed:e,addedCount:t}}const Cd=0,Td=1,bo=2,yo=3;function kp(n,e,t,i,s,r){const o=r-s+1,l=t-e+1,a=new Array(o);let d,c;for(let u=0;u<o;++u)a[u]=new Array(l),a[u][0]=u;for(let u=0;u<l;++u)a[0][u]=u;for(let u=1;u<o;++u)for(let g=1;g<l;++g)n[e+g-1]===i[s+u-1]?a[u][g]=a[u-1][g-1]:(d=a[u-1][g]+1,c=a[u][g-1]+1,a[u][g]=d<c?d:c);return a}function Cp(n){let e=n.length-1,t=n[0].length-1,i=n[e][t];const s=[];for(;e>0||t>0;){if(e===0){s.push(bo),t--;continue}if(t===0){s.push(yo),e--;continue}const r=n[e-1][t-1],o=n[e-1][t],l=n[e][t-1];let a;o<l?a=o<r?o:r:a=l<r?l:r,a===r?(r===i?s.push(Cd):(s.push(Td),i=r),e--,t--):a===o?(s.push(yo),e--,i=o):(s.push(bo),t--,i=l)}return s.reverse(),s}function Tp(n,e,t){for(let i=0;i<t;++i)if(n[i]!==e[i])return i;return t}function $p(n,e,t){let i=n.length,s=e.length,r=0;for(;r<t&&n[--i]===e[--s];)r++;return r}function Sp(n,e,t,i){return e<t||i<n?-1:e===t||i===n?0:n<t?e<i?e-t:i-t:i<e?i-n:e-n}function $d(n,e,t,i,s,r){let o=0,l=0;const a=Math.min(t-e,r-s);if(e===0&&s===0&&(o=Tp(n,i,a)),t===n.length&&r===i.length&&(l=$p(n,i,a-o)),e+=o,s+=o,t-=l,r-=l,t-e===0&&r-s===0)return Rn;if(e===t){const $=At(e,[],0);for(;s<r;)$.removed.push(i[s++]);return[$]}else if(s===r)return[At(e,[],t-e)];const d=Cp(kp(n,e,t,i,s,r)),c=[];let u,g=e,b=s;for(let $=0;$<d.length;++$)switch(d[$]){case Cd:u!==void 0&&(c.push(u),u=void 0),g++,b++;break;case Td:u===void 0&&(u=At(g,[],0)),u.addedCount++,g++,u.removed.push(i[b]),b++;break;case bo:u===void 0&&(u=At(g,[],0)),u.addedCount++,g++;break;case yo:u===void 0&&(u=At(g,[],0)),u.removed.push(i[b]),b++;break}return u!==void 0&&c.push(u),c}const ca=Array.prototype.push;function Ap(n,e,t,i){const s=At(e,t,i);let r=!1,o=0;for(let l=0;l<n.length;l++){const a=n[l];if(a.index+=o,r)continue;const d=Sp(s.index,s.index+s.removed.length,a.index,a.index+a.addedCount);if(d>=0){n.splice(l,1),l--,o-=a.addedCount-a.removed.length,s.addedCount+=a.addedCount-d;const c=s.removed.length+a.removed.length-d;if(!s.addedCount&&!c)r=!0;else{let u=a.removed;if(s.index<a.index){const g=s.removed.slice(0,a.index-s.index);ca.apply(g,u),u=g}if(s.index+s.removed.length>a.index+a.addedCount){const g=s.removed.slice(a.index+a.addedCount-s.index);ca.apply(u,g)}s.removed=u,a.index<s.index&&(s.index=a.index)}}else if(s.index<a.index){r=!0,n.splice(l,0,s),l++;const c=s.addedCount-s.removed.length;a.index+=c,o+=c}}r||n.push(s)}function _p(n){const e=[];for(let t=0,i=n.length;t<i;t++){const s=n[t];Ap(e,s.index,s.removed,s.addedCount)}return e}function Ip(n,e){let t=[];const i=_p(e);for(let s=0,r=i.length;s<r;++s){const o=i[s];if(o.addedCount===1&&o.removed.length===1){o.removed[0]!==n[o.index]&&t.push(o);continue}t=t.concat($d(n,o.index,o.index+o.addedCount,o.removed,0,o.removed.length))}return t}let da=!1;function Nr(n,e){let t=n.index;const i=e.length;return t>i?t=i-n.addedCount:t<0&&(t=i+n.removed.length+t-n.addedCount),t<0&&(t=0),n.index=t,n}class Ep extends Ws{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,Y.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,Y.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=t===void 0?Ip(this.source,e):$d(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}function Rp(){if(da)return;da=!0,W.setArrayObserverFactory(a=>new Ep(a));const n=Array.prototype;if(n.$fastPatch)return;Reflect.defineProperty(n,"$fastPatch",{value:1,enumerable:!1});const e=n.pop,t=n.push,i=n.reverse,s=n.shift,r=n.sort,o=n.splice,l=n.unshift;n.pop=function(){const a=this.length>0,d=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(At(this.length,[d],0)),d},n.push=function(){const a=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Nr(At(this.length-arguments.length,[],arguments.length),this)),a},n.reverse=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=i.apply(this,arguments);return d!==void 0&&d.reset(a),c},n.shift=function(){const a=this.length>0,d=s.apply(this,arguments),c=this.$fastController;return c!==void 0&&a&&c.addSplice(At(0,[d],0)),d},n.sort=function(){let a;const d=this.$fastController;d!==void 0&&(d.flush(),a=this.slice());const c=r.apply(this,arguments);return d!==void 0&&d.reset(a),c},n.splice=function(){const a=o.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Nr(At(+arguments[0],a,arguments.length>2?arguments.length-2:0),this)),a},n.unshift=function(){const a=l.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Nr(At(0,[],arguments.length),this)),a}}class Op{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function et(n){return new qo("fast-ref",Op,n)}const Sd=n=>typeof n=="function",Dp=()=>null;function ua(n){return n===void 0?Dp:Sd(n)?n:()=>n}function Zo(n,e,t){const i=Sd(n)?n:()=>n,s=ua(e),r=ua(t);return(o,l)=>i(o,l)?s(o,l):r(o,l)}function Pp(n,e,t,i){n.bind(e[t],i)}function Lp(n,e,t,i){const s=Object.create(i);s.index=t,s.length=e.length,n.bind(e[t],s)}class Mp{constructor(e,t,i,s,r,o){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=o,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Pp,this.itemsBindingObserver=W.binding(t,this,i),this.templateBindingObserver=W.binding(s,this,r),o.positioning&&(this.bindView=Lp)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=Rn;return}const t=this.itemsObserver,i=this.itemsObserver=W.getNotifier(this.items),s=t!==i;s&&t!==null&&t.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){const t=this.childContext,i=this.views,s=this.bindView,r=this.items,o=this.template,l=this.options.recycle,a=[];let d=0,c=0;for(let u=0,g=e.length;u<g;++u){const b=e[u],$=b.removed;let _=0,z=b.index;const j=z+b.addedCount,q=i.splice(b.index,$.length),Z=c=a.length+q.length;for(;z<j;++z){const R=i[z],K=R?R.firstChild:this.location;let ye;l&&c>0?(_<=Z&&q.length>0?(ye=q[_],_++):(ye=a[d],d++),c--):ye=o.create(),i.splice(z,0,ye),s(ye,r,z,t),ye.insertBefore(K)}q[_]&&a.push(...q.slice(_))}for(let u=d,g=a.length;u<g;++u)a[u].dispose();if(this.options.positioning)for(let u=0,g=i.length;u<g;++u){const b=i[u].context;b.length=g,b.index=u}}refreshAllViews(e=!1){const t=this.items,i=this.childContext,s=this.template,r=this.location,o=this.bindView;let l=t.length,a=this.views,d=a.length;if((l===0||e||!this.options.recycle)&&(pd.disposeContiguousBatch(a),d=0),d===0){this.views=a=new Array(l);for(let c=0;c<l;++c){const u=s.create();o(u,t,c,i),a[c]=u,u.insertBefore(r)}}else{let c=0;for(;c<l;++c)if(c<d){const g=a[c];o(g,t,c,i)}else{const g=s.create();o(g,t,c,i),a.push(g),g.insertBefore(r)}const u=a.splice(c,d-c);for(c=0,l=u.length;c<l;++c)u[c].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}class Ad extends dr{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=Y.createBlockPlaceholder,Rp(),this.isItemsBindingVolatile=W.isVolatileBinding(e),this.isTemplateBindingVolatile=W.isVolatileBinding(t)}createBehavior(e){return new Mp(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Xo(n){return n?function(e,t,i){return e.nodeType===1&&e.matches(n)}:function(e,t,i){return e.nodeType===1}}class _d{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=W.getAccessors(e).some(i=>i.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Rn),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Fp extends _d{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function kt(n){return typeof n=="string"&&(n={property:n}),new qo("fast-slotted",Fp,n)}class Bp extends _d{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Id(n){return typeof n=="string"&&(n={property:n}),new qo("fast-children",Bp,n)}class di{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ui=(n,e)=>J`
    <span
        part="end"
        ${et("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${et("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,hi=(n,e)=>J`
    <span
        part="start"
        ${et("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${et("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;J`
    <span part="end" ${et("endContainer")}>
        <slot
            name="end"
            ${et("end")}
            @slotchange="${n=>n.handleEndContentChange()}"
        ></slot>
    </span>
`;J`
    <span part="start" ${et("startContainer")}>
        <slot
            name="start"
            ${et("start")}
            @slotchange="${n=>n.handleStartContentChange()}"
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
***************************************************************************** */function m(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}const Hr=new Map;"metadata"in Reflect||(Reflect.metadata=function(n,e){return function(t){Reflect.defineMetadata(n,e,t)}},Reflect.defineMetadata=function(n,e,t){let i=Hr.get(t);i===void 0&&Hr.set(t,i=new Map),i.set(n,e)},Reflect.getOwnMetadata=function(n,e){const t=Hr.get(e);if(t!==void 0)return t.get(n)});class Np{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Rd(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new bt(s,e,t))}}function wi(n){const e=n.slice(),t=Object.keys(n),i=t.length;let s;for(let r=0;r<i;++r)s=t[r],Od(s)||(e[s]=n[s]);return e}const Hp=Object.freeze({none(n){throw Error(`${n.toString()} not registered, did you forget to add @singleton()?`)},singleton(n){return new bt(n,1,n)},transient(n){return new bt(n,2,n)}}),zr=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Hp.singleton})}),ha=new Map;function fa(n){return e=>Reflect.getOwnMetadata(n,e)}let pa=null;const ge=Object.freeze({createContainer(n){return new Ui(null,Object.assign({},zr.default,n))},findResponsibleContainer(n){const e=n.$$container$$;return e&&e.responsibleForOwnerRequests?e:ge.findParentContainer(n)},findParentContainer(n){const e=new CustomEvent(Ed,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return n.dispatchEvent(e),e.detail.container||ge.getOrCreateDOMContainer()},getOrCreateDOMContainer(n,e){return n?n.$$container$$||new Ui(n,Object.assign({},zr.default,e,{parentLocator:ge.findParentContainer})):pa||(pa=new Ui(null,Object.assign({},zr.default,e,{parentLocator:()=>null})))},getDesignParamtypes:fa("design:paramtypes"),getAnnotationParamtypes:fa("di:paramtypes"),getOrCreateAnnotationParamTypes(n){let e=this.getAnnotationParamtypes(n);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],n),e},getDependencies(n){let e=ha.get(n);if(e===void 0){const t=n.inject;if(t===void 0){const i=ge.getDesignParamtypes(n),s=ge.getAnnotationParamtypes(n);if(i===void 0)if(s===void 0){const r=Object.getPrototypeOf(n);typeof r=="function"&&r!==Function.prototype?e=wi(ge.getDependencies(r)):e=[]}else e=wi(s);else if(s===void 0)e=wi(i);else{e=wi(i);let r=s.length,o;for(let d=0;d<r;++d)o=s[d],o!==void 0&&(e[d]=o);const l=Object.keys(s);r=l.length;let a;for(let d=0;d<r;++d)a=l[d],Od(a)||(e[a]=s[a])}}else e=wi(t);ha.set(n,e)}return e},defineProperty(n,e,t,i=!1){const s=`$di_${e}`;Reflect.defineProperty(n,e,{get:function(){let r=this[s];if(r===void 0&&(r=(this instanceof HTMLElement?ge.findResponsibleContainer(this):ge.getOrCreateDOMContainer()).get(t),this[s]=r,i&&this instanceof hr)){const l=this.$fastController,a=()=>{const c=ge.findResponsibleContainer(this).get(t),u=this[s];c!==u&&(this[s]=r,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return r}})},createInterface(n,e){const t=typeof n=="function"?n:e,i=typeof n=="string"?n:n&&"friendlyName"in n&&n.friendlyName||ya,s=typeof n=="string"?!1:n&&"respectConnection"in n&&n.respectConnection||!1,r=function(o,l,a){if(o==null||new.target!==void 0)throw new Error(`No registration for interface: '${r.friendlyName}'`);if(l)ge.defineProperty(o,l,r,s);else{const d=ge.getOrCreateAnnotationParamTypes(o);d[a]=r}};return r.$isInterface=!0,r.friendlyName=i??"(anonymous)",t!=null&&(r.register=function(o,l){return t(new Np(o,l??r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject(...n){return function(e,t,i){if(typeof i=="number"){const s=ge.getOrCreateAnnotationParamTypes(e),r=n[0];r!==void 0&&(s[i]=r)}else if(t)ge.defineProperty(e,t,n[0]);else{const s=i?ge.getOrCreateAnnotationParamTypes(i.value):ge.getOrCreateAnnotationParamTypes(e);let r;for(let o=0;o<n.length;++o)r=n[o],r!==void 0&&(s[o]=r)}}},transient(n){return n.register=function(t){return ts.transient(n,n).register(t)},n.registerInRequestor=!1,n},singleton(n,e=Vp){return n.register=function(i){return ts.singleton(n,n).register(i)},n.registerInRequestor=e.scoped,n}}),zp=ge.createInterface("Container");ge.inject;const Vp={scoped:!1};class bt{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{const i=e.getFactory(this.state);if(i===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(s=(i=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||i===void 0?void 0:i.call(t,e))!==null&&s!==void 0?s:null;default:return null}}}function ga(n){return this.get(n)}function Up(n,e){return e(n)}class jp{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return t===void 0?i=new this.Type(...this.dependencies.map(ga,e)):i=new this.Type(...this.dependencies.map(ga,e),...t),this.transformers==null?i:this.transformers.reduce(Up,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const qp={$isResolver:!0,resolve(n,e){return e}};function Ls(n){return typeof n.register=="function"}function Gp(n){return Ls(n)&&typeof n.registerInRequestor=="boolean"}function ma(n){return Gp(n)&&n.registerInRequestor}function Wp(n){return n.prototype!==void 0}const Yp=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ed="__DI_LOCATE_PARENT__",Vr=new Map;class Ui{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(zp,qp),e instanceof Node&&e.addEventListener(Ed,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,i,s,r,o;const l=this.context;for(let a=0,d=e.length;a<d;++a)if(t=e[a],!!xa(t))if(Ls(t))t.register(this,l);else if(Wp(t))ts.singleton(t,t).register(this);else for(i=Object.keys(t),r=0,o=i.length;r<o;++r)s=t[i[r]],xa(s)&&(Ls(s)?s.register(this,l):this.register(s));return--this.registerDepth,this}registerResolver(e,t){vs(e);const i=this.resolvers,s=i.get(e);return s==null?i.set(e,t):s instanceof bt&&s.strategy===4?s.state.push(t):i.set(e,new bt(e,4,[s,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(i==null)return!1;if(i.getFactory){const s=i.getFactory(this);return s==null?!1:(s.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(vs(e),e.resolve!==void 0)return e;let i=this,s;for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i.parent==null){const r=ma(e)?this:i;return t?this.jitRegister(e,r):null}i=i.parent}else return s;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(vs(e),e.$isResolver)return e.resolve(this,this);let t=this,i;for(;t!=null;)if(i=t.resolvers.get(e),i==null){if(t.parent==null){const s=ma(e)?this:t;return i=this.jitRegister(e,s),i.resolve(t,this)}t=t.parent}else return i.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){vs(e);const i=this;let s=i,r;if(t){let o=Rn;for(;s!=null;)r=s.resolvers.get(e),r!=null&&(o=o.concat(ba(r,s,i))),s=s.parent;return o}else for(;s!=null;)if(r=s.resolvers.get(e),r==null){if(s=s.parent,s==null)return Rn}else return ba(r,s,i);return Rn}getFactory(e){let t=Vr.get(e);if(t===void 0){if(Qp(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Vr.set(e,t=new jp(e,ge.getDependencies(e)))}return t}registerFactory(e,t){Vr.set(e,t)}createChild(e){return new Ui(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Yp.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Ls(e)){const i=e.register(t);if(!(i instanceof Object)||i.resolve==null){const s=t.resolvers.get(e);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return i}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}}const Ur=new WeakMap;function Rd(n){return function(e,t,i){if(Ur.has(i))return Ur.get(i);const s=n(e,t,i);return Ur.set(i,s),s}}const ts=Object.freeze({instance(n,e){return new bt(n,0,e)},singleton(n,e){return new bt(n,1,e)},transient(n,e){return new bt(n,2,e)},callback(n,e){return new bt(n,3,e)},cachedCallback(n,e){return new bt(n,3,Rd(e))},aliasTo(n,e){return new bt(e,5,n)}});function vs(n){if(n==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ba(n,e,t){if(n instanceof bt&&n.strategy===4){const i=n.state;let s=i.length;const r=new Array(s);for(;s--;)r[s]=i[s].resolve(e,t);return r}return[n.resolve(e,t)]}const ya="(anonymous)";function xa(n){return typeof n=="object"&&n!==null||typeof n=="function"}const Qp=function(){const n=new WeakMap;let e=!1,t="",i=0;return function(s){return e=n.get(s),e===void 0&&(t=s.toString(),i=t.length,e=i>=29&&i<=100&&t.charCodeAt(i-1)===125&&t.charCodeAt(i-2)<=32&&t.charCodeAt(i-3)===93&&t.charCodeAt(i-4)===101&&t.charCodeAt(i-5)===100&&t.charCodeAt(i-6)===111&&t.charCodeAt(i-7)===99&&t.charCodeAt(i-8)===32&&t.charCodeAt(i-9)===101&&t.charCodeAt(i-10)===118&&t.charCodeAt(i-11)===105&&t.charCodeAt(i-12)===116&&t.charCodeAt(i-13)===97&&t.charCodeAt(i-14)===110&&t.charCodeAt(i-15)===88,n.set(s,e)),e}}(),ws={};function Od(n){switch(typeof n){case"number":return n>=0&&(n|0)===n;case"string":{const e=ws[n];if(e!==void 0)return e;const t=n.length;if(t===0)return ws[n]=!1;let i=0;for(let s=0;s<t;++s)if(i=n.charCodeAt(s),s===0&&i===48&&t>1||i<48||i>57)return ws[n]=!1;return ws[n]=!0}default:return!1}}function va(n){return`${n.toLowerCase()}:presentation`}const ks=new Map,Dd=Object.freeze({define(n,e,t){const i=va(n);ks.get(i)===void 0?ks.set(i,e):ks.set(i,!1),t.register(ts.instance(i,e))},forTag(n,e){const t=va(n),i=ks.get(t);return i===!1?ge.findResponsibleContainer(e).get(t):i||null}});class Zp{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?lt.create(t):t instanceof lt?t:lt.create([t])}applyTo(e){const t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}}class he extends hr{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Dd.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Xp(this===he?class extends he{}:this,e,t)}}m([D],he.prototype,"template",void 0);m([D],he.prototype,"styles",void 0);function ki(n,e,t){return typeof n=="function"?n(e,t):n}class Xp{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,s=this.overrideDefinition,o=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new Zp(ki(i.template,l,i),ki(i.styles,l,i));l.definePresentation(a);let d=ki(i.shadowOptions,l,i);l.shadowRootMode&&(d?s.shadowOptions||(d.mode=l.shadowRootMode):d!==null&&(d={mode:l.shadowRootMode})),l.defineElement({elementOptions:ki(i.elementOptions,l,i),shadowOptions:d,attributes:ki(i.attributes,l,i)})}})}}function ct(n,...e){const t=Ys.locate(n);e.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(r=>{r!=="constructor"&&Object.defineProperty(n.prototype,r,Object.getOwnPropertyDescriptor(i.prototype,r))}),Ys.locate(i).forEach(r=>t.push(r))})}const Jo={horizontal:"horizontal",vertical:"vertical"};function Jp(n,e){let t=n.length;for(;t--;)if(e(n[t],t,n))return t;return-1}function Kp(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function eg(...n){return n.every(e=>e instanceof HTMLElement)}function tg(){const n=document.querySelector('meta[property="csp-nonce"]');return n?n.getAttribute("content"):null}let $n;function ng(){if(typeof $n=="boolean")return $n;if(!Kp())return $n=!1,$n;const n=document.createElement("style"),e=tg();e!==null&&n.setAttribute("nonce",e),document.head.appendChild(n);try{n.sheet.insertRule("foo:focus-visible {color:inherit}",0),$n=!0}catch{$n=!1}finally{document.head.removeChild(n)}return $n}const wa="focus",ka="focusin",li="focusout",ai="keydown";var Ca;(function(n){n[n.alt=18]="alt",n[n.arrowDown=40]="arrowDown",n[n.arrowLeft=37]="arrowLeft",n[n.arrowRight=39]="arrowRight",n[n.arrowUp=38]="arrowUp",n[n.back=8]="back",n[n.backSlash=220]="backSlash",n[n.break=19]="break",n[n.capsLock=20]="capsLock",n[n.closeBracket=221]="closeBracket",n[n.colon=186]="colon",n[n.colon2=59]="colon2",n[n.comma=188]="comma",n[n.ctrl=17]="ctrl",n[n.delete=46]="delete",n[n.end=35]="end",n[n.enter=13]="enter",n[n.equals=187]="equals",n[n.equals2=61]="equals2",n[n.equals3=107]="equals3",n[n.escape=27]="escape",n[n.forwardSlash=191]="forwardSlash",n[n.function1=112]="function1",n[n.function10=121]="function10",n[n.function11=122]="function11",n[n.function12=123]="function12",n[n.function2=113]="function2",n[n.function3=114]="function3",n[n.function4=115]="function4",n[n.function5=116]="function5",n[n.function6=117]="function6",n[n.function7=118]="function7",n[n.function8=119]="function8",n[n.function9=120]="function9",n[n.home=36]="home",n[n.insert=45]="insert",n[n.menu=93]="menu",n[n.minus=189]="minus",n[n.minus2=109]="minus2",n[n.numLock=144]="numLock",n[n.numPad0=96]="numPad0",n[n.numPad1=97]="numPad1",n[n.numPad2=98]="numPad2",n[n.numPad3=99]="numPad3",n[n.numPad4=100]="numPad4",n[n.numPad5=101]="numPad5",n[n.numPad6=102]="numPad6",n[n.numPad7=103]="numPad7",n[n.numPad8=104]="numPad8",n[n.numPad9=105]="numPad9",n[n.numPadDivide=111]="numPadDivide",n[n.numPadDot=110]="numPadDot",n[n.numPadMinus=109]="numPadMinus",n[n.numPadMultiply=106]="numPadMultiply",n[n.numPadPlus=107]="numPadPlus",n[n.openBracket=219]="openBracket",n[n.pageDown=34]="pageDown",n[n.pageUp=33]="pageUp",n[n.period=190]="period",n[n.print=44]="print",n[n.quote=222]="quote",n[n.scrollLock=145]="scrollLock",n[n.shift=16]="shift",n[n.space=32]="space",n[n.tab=9]="tab",n[n.tilde=192]="tilde",n[n.windowsLeft=91]="windowsLeft",n[n.windowsOpera=219]="windowsOpera",n[n.windowsRight=92]="windowsRight"})(Ca||(Ca={}));const Pn="ArrowDown",ns="ArrowLeft",is="ArrowRight",Ln="ArrowUp",os="Enter",fr="Escape",fi="Home",pi="End",ig="F2",sg="PageDown",rg="PageUp",ls=" ",Ko="Tab",og={ArrowDown:Pn,ArrowLeft:ns,ArrowRight:is,ArrowUp:Ln};var ci;(function(n){n.ltr="ltr",n.rtl="rtl"})(ci||(ci={}));function lg(n,e,t){return Math.min(Math.max(t,n),e)}function Cs(n,e,t=0){return[e,t]=[e,t].sort((i,s)=>i-s),e<=n&&n<t}let ag=0;function Zs(n=""){return`${n}${ag++}`}const cg=(n,e)=>J`
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
        ${et("control")}
    >
        ${hi(n,e)}
        <span class="content" part="content">
            <slot ${kt("defaultSlottedContent")}></slot>
        </span>
        ${ui(n,e)}
    </a>
`;class fe{}m([v({attribute:"aria-atomic"})],fe.prototype,"ariaAtomic",void 0);m([v({attribute:"aria-busy"})],fe.prototype,"ariaBusy",void 0);m([v({attribute:"aria-controls"})],fe.prototype,"ariaControls",void 0);m([v({attribute:"aria-current"})],fe.prototype,"ariaCurrent",void 0);m([v({attribute:"aria-describedby"})],fe.prototype,"ariaDescribedby",void 0);m([v({attribute:"aria-details"})],fe.prototype,"ariaDetails",void 0);m([v({attribute:"aria-disabled"})],fe.prototype,"ariaDisabled",void 0);m([v({attribute:"aria-errormessage"})],fe.prototype,"ariaErrormessage",void 0);m([v({attribute:"aria-flowto"})],fe.prototype,"ariaFlowto",void 0);m([v({attribute:"aria-haspopup"})],fe.prototype,"ariaHaspopup",void 0);m([v({attribute:"aria-hidden"})],fe.prototype,"ariaHidden",void 0);m([v({attribute:"aria-invalid"})],fe.prototype,"ariaInvalid",void 0);m([v({attribute:"aria-keyshortcuts"})],fe.prototype,"ariaKeyshortcuts",void 0);m([v({attribute:"aria-label"})],fe.prototype,"ariaLabel",void 0);m([v({attribute:"aria-labelledby"})],fe.prototype,"ariaLabelledby",void 0);m([v({attribute:"aria-live"})],fe.prototype,"ariaLive",void 0);m([v({attribute:"aria-owns"})],fe.prototype,"ariaOwns",void 0);m([v({attribute:"aria-relevant"})],fe.prototype,"ariaRelevant",void 0);m([v({attribute:"aria-roledescription"})],fe.prototype,"ariaRoledescription",void 0);class Et extends he{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var t;(t=this.control)===null||t===void 0||t.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}m([v],Et.prototype,"download",void 0);m([v],Et.prototype,"href",void 0);m([v],Et.prototype,"hreflang",void 0);m([v],Et.prototype,"ping",void 0);m([v],Et.prototype,"referrerpolicy",void 0);m([v],Et.prototype,"rel",void 0);m([v],Et.prototype,"target",void 0);m([v],Et.prototype,"type",void 0);m([D],Et.prototype,"defaultSlottedContent",void 0);class el{}m([v({attribute:"aria-expanded"})],el.prototype,"ariaExpanded",void 0);ct(el,fe);ct(Et,di,el);const dg=n=>{const e=n.closest("[dir]");return e!==null&&e.dir==="rtl"?ci.rtl:ci.ltr},Pd=(n,e)=>J`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let as=class extends he{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}};m([v({attribute:"fill"})],as.prototype,"fill",void 0);m([v({attribute:"color"})],as.prototype,"color",void 0);m([v({mode:"boolean"})],as.prototype,"circular",void 0);const ug=(n,e)=>J`
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
        ${et("control")}
    >
        ${hi(n,e)}
        <span class="content" part="content">
            <slot ${kt("defaultSlottedContent")}></slot>
        </span>
        ${ui(n,e)}
    </button>
`,Ta="form-associated-proxy",$a="ElementInternals",Sa=$a in window&&"setFormValue"in window[$a].prototype,Aa=new WeakMap;function cs(n){const e=class extends n{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Sa}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=t?i.concat(Array.from(t)):i;return Object.freeze(s)}else return Rn}valueChanged(t,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),Y.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),Y.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Sa)return null;let t=Aa.get(this);return t||(t=this.attachInternals(),Aa.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,i,s){this.elementInternals?this.elementInternals.setValidity(t,i,s):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Ta),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Ta)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,i){this.elementInternals&&this.elementInternals.setFormValue(t,i||t)}_keypressHandler(t){switch(t.key){case os:if(this.form instanceof HTMLFormElement){const i=this.form.querySelector("[type=submit]");i==null||i.click()}break}}stopPropagation(t){t.stopPropagation()}};return v({mode:"boolean"})(e.prototype,"disabled"),v({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),v({attribute:"current-value"})(e.prototype,"currentValue"),v(e.prototype,"name"),v({mode:"boolean"})(e.prototype,"required"),D(e.prototype,"value"),e}function Ld(n){class e extends cs(n){}class t extends e{constructor(...s){super(s),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(s,r){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),s!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(s,r){this.checked=this.currentChecked}updateForm(){const s=this.checked?this.value:null;this.setFormValue(s,s)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return v({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),v({attribute:"current-checked",converter:vd})(t.prototype,"currentChecked"),D(t.prototype,"defaultChecked"),D(t.prototype,"checked"),t}class hg extends he{}class fg extends cs(hg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Rt=class extends fg{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(i=>{i.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(i=>{i.removeEventListener("click",this.handleClick)})}};m([v({mode:"boolean"})],Rt.prototype,"autofocus",void 0);m([v({attribute:"form"})],Rt.prototype,"formId",void 0);m([v],Rt.prototype,"formaction",void 0);m([v],Rt.prototype,"formenctype",void 0);m([v],Rt.prototype,"formmethod",void 0);m([v({mode:"boolean"})],Rt.prototype,"formnovalidate",void 0);m([v],Rt.prototype,"formtarget",void 0);m([v],Rt.prototype,"type",void 0);m([D],Rt.prototype,"defaultSlottedContent",void 0);class pr{}m([v({attribute:"aria-expanded"})],pr.prototype,"ariaExpanded",void 0);m([v({attribute:"aria-pressed"})],pr.prototype,"ariaPressed",void 0);ct(pr,fe);ct(Rt,di,pr);const Ts={none:"none",default:"default",sticky:"sticky"},on={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},ji={default:"default",header:"header",stickyHeader:"sticky-header"};let ze=class extends he{constructor(){super(...arguments),this.rowType=ji.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Ad(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(li,this.handleFocusout),this.addEventListener(ai,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(li,this.handleFocusout),this.removeEventListener(ai,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case ns:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case is:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case fi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case pi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===ji.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===ji.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};m([v({attribute:"grid-template-columns"})],ze.prototype,"gridTemplateColumns",void 0);m([v({attribute:"row-type"})],ze.prototype,"rowType",void 0);m([D],ze.prototype,"rowData",void 0);m([D],ze.prototype,"columnDefinitions",void 0);m([D],ze.prototype,"cellItemTemplate",void 0);m([D],ze.prototype,"headerCellItemTemplate",void 0);m([D],ze.prototype,"rowIndex",void 0);m([D],ze.prototype,"isActiveRow",void 0);m([D],ze.prototype,"activeCellItemTemplate",void 0);m([D],ze.prototype,"defaultCellItemTemplate",void 0);m([D],ze.prototype,"defaultHeaderCellItemTemplate",void 0);m([D],ze.prototype,"cellElements",void 0);function pg(n){const e=n.tagFor(ze);return J`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,i)=>i.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,i)=>i.parent.headerCellItemTemplate}"
    ></${e}>
`}const gg=(n,e)=>{const t=pg(n),i=n.tagFor(ze);return J`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>i}"
            :defaultRowItemTemplate="${t}"
            ${Id({property:"rowElements",filter:Xo("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};let Ve=class xo extends he{constructor(){super(),this.noTabbing=!1,this.generateHeader=Ts.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const s=Math.max(0,Math.min(this.rowElements.length-1,e)),o=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(o.length-1,t)),a=o[l];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&a.scrollIntoView({block:"center",inline:"center"}),a.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(i=>{i.addedNodes.forEach(s=>{s.nodeType===1&&s.getAttribute("role")==="row"&&(s.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,Y.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,i)=>{const s=t;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(i=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=xo.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=xo.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Ad(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(wa,this.handleFocus),this.addEventListener(ai,this.handleKeydown),this.addEventListener(li,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),Y.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(wa,this.handleFocus),this.removeEventListener(ai,this.handleKeydown),this.removeEventListener(li,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,r=this.rowElements[i];switch(e.key){case Ln:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Pn:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case rg:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){const o=this.rowElements[t];if(o.offsetTop<this.scrollTop){this.scrollTop=o.offsetTop+o.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case sg:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||r.offsetTop+r.offsetHeight<=s){this.focusOnCell(i,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=i;t++){const o=this.rowElements[t];if(o.offsetTop+o.offsetHeight>s){let l=0;this.generateHeader===Ts.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=o.offsetTop-l;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case fi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case pi:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,Y.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Ts.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Ts.sticky?ji.stickyHeader:ji.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};Ve.generateColumns=n=>Object.getOwnPropertyNames(n).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`}));m([v({attribute:"no-tabbing",mode:"boolean"})],Ve.prototype,"noTabbing",void 0);m([v({attribute:"generate-header"})],Ve.prototype,"generateHeader",void 0);m([v({attribute:"grid-template-columns"})],Ve.prototype,"gridTemplateColumns",void 0);m([D],Ve.prototype,"rowsData",void 0);m([D],Ve.prototype,"columnDefinitions",void 0);m([D],Ve.prototype,"rowItemTemplate",void 0);m([D],Ve.prototype,"cellItemTemplate",void 0);m([D],Ve.prototype,"headerCellItemTemplate",void 0);m([D],Ve.prototype,"focusRowIndex",void 0);m([D],Ve.prototype,"focusColumnIndex",void 0);m([D],Ve.prototype,"defaultRowItemTemplate",void 0);m([D],Ve.prototype,"rowElementTag",void 0);m([D],Ve.prototype,"rowElements",void 0);const mg=J`
    <template>
        ${n=>n.rowData===null||n.columnDefinition===null||n.columnDefinition.columnDataKey===null?null:n.rowData[n.columnDefinition.columnDataKey]}
    </template>
`,bg=J`
    <template>
        ${n=>n.columnDefinition===null?null:n.columnDefinition.title===void 0?n.columnDefinition.columnDataKey:n.columnDefinition.title}
    </template>
`;let yn=class extends he{constructor(){super(...arguments),this.cellType=on.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(ka,this.handleFocusin),this.addEventListener(li,this.handleFocusout),this.addEventListener(ai,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(ka,this.handleFocusin),this.removeEventListener(li,this.handleFocusout),this.removeEventListener(ai,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case on.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===on.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===on.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case os:case ig:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case on.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case fr:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case on.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=bg.render(this,this);break;case void 0:case on.rowHeader:case on.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=mg.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};m([v({attribute:"cell-type"})],yn.prototype,"cellType",void 0);m([v({attribute:"grid-column"})],yn.prototype,"gridColumn",void 0);m([D],yn.prototype,"rowData",void 0);m([D],yn.prototype,"columnDefinition",void 0);function yg(n){const e=n.tagFor(yn);return J`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,i)=>i.index+1}"
        :rowData="${(t,i)=>i.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function xg(n){const e=n.tagFor(yn);return J`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,i)=>i.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}const vg=(n,e)=>{const t=yg(n),i=xg(n);return J`
        <template
            role="row"
            class="${s=>s.rowType!=="default"?s.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${i}"
            ${Id({property:"cellElements",filter:Xo('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${kt("slottedCellElements")}></slot>
        </template>
    `},wg=(n,e)=>J`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,kg=(n,e)=>J`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,i)=>t.keypressHandler(i.event)}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
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
            <slot ${kt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Cg extends he{}class Tg extends Ld(Cg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let gr=class extends Tg{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case ls:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};m([v({attribute:"readonly",mode:"boolean"})],gr.prototype,"readOnly",void 0);m([D],gr.prototype,"defaultSlottedNodes",void 0);m([D],gr.prototype,"indeterminate",void 0);function Md(n){return eg(n)&&(n.getAttribute("role")==="option"||n instanceof HTMLOptionElement)}class Kt extends he{constructor(e,t,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){const t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),W.notify(this,"value")}get value(){var e;return W.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}m([D],Kt.prototype,"checked",void 0);m([D],Kt.prototype,"content",void 0);m([D],Kt.prototype,"defaultSelected",void 0);m([v({mode:"boolean"})],Kt.prototype,"disabled",void 0);m([v({attribute:"selected",mode:"boolean"})],Kt.prototype,"selectedAttribute",void 0);m([D],Kt.prototype,"selected",void 0);m([v({attribute:"value",mode:"fromView"})],Kt.prototype,"initialValue",void 0);class gi{}m([D],gi.prototype,"ariaChecked",void 0);m([D],gi.prototype,"ariaPosInSet",void 0);m([D],gi.prototype,"ariaSelected",void 0);m([D],gi.prototype,"ariaSetSize",void 0);ct(gi,fe);ct(Kt,di,gi);class Ke extends he{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return W.track(this,"options"),this._options}set options(e){this._options=e,W.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(i=>i.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,s=e+i;let r=null;switch(i){case-1:{r=this.options.reduceRight((o,l,a)=>!o&&!l.disabled&&a<s?l:o,r);break}case 1:{r=this.options.reduce((o,l,a)=>!o&&!l.disabled&&a>s?l:o,r);break}}return this.options.indexOf(r)}handleChange(e,t){switch(t){case"selected":{Ke.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Ke.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case fi:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Pn:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Ln:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case pi:{e.preventDefault(),this.selectLastOption();break}case Ko:return this.focusAndScrollOptionIntoView(),!0;case os:case fr:return!0;case ls:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((i=this.options[this.selectedIndex])===null||i===void 0)&&i.disabled&&typeof e=="number"){const s=this.getSelectableIndex(e,t),r=s>-1?s:e;this.selectedIndex=r,t===r&&this.selectedIndexChanged(t,r);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var i;const s=t.filter(Ke.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(r=>{const o=W.getNotifier(r);o.unsubscribe(this,"selected"),r.selected=s.includes(r),o.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>!i.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Jp(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>i.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,i;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((s,r)=>(Md(r)&&s.push(r),s),[]);const i=`${this.options.length}`;this.options.forEach((s,r)=>{s.id||(s.id=Zs("option-")),s.ariaPosInSet=`${r+1}`,s.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const i=this.getTypeaheadMatches();if(i.length){const s=this.options.indexOf(i[0]);s>-1&&(this.selectedIndex=s)}this.typeaheadExpired=!1}}}Ke.slottedOptionFilter=n=>Md(n)&&!n.hidden;Ke.TYPE_AHEAD_TIMEOUT_MS=1e3;m([v({mode:"boolean"})],Ke.prototype,"disabled",void 0);m([D],Ke.prototype,"selectedIndex",void 0);m([D],Ke.prototype,"selectedOptions",void 0);m([D],Ke.prototype,"slottedOptions",void 0);m([D],Ke.prototype,"typeaheadBuffer",void 0);class Mn{}m([D],Mn.prototype,"ariaActiveDescendant",void 0);m([D],Mn.prototype,"ariaDisabled",void 0);m([D],Mn.prototype,"ariaExpanded",void 0);m([D],Mn.prototype,"ariaMultiSelectable",void 0);ct(Mn,fe);ct(Ke,Mn);const jr={above:"above",below:"below"};function vo(n){const e=n.parentElement;if(e)return e;{const t=n.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function $g(n,e){let t=e;for(;t!==null;){if(t===n)return!0;t=vo(t)}return!1}const Zt=document.createElement("div");function Sg(n){return n instanceof hr}class tl{setProperty(e,t){Y.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){Y.queueUpdate(()=>this.target.removeProperty(e))}}class Ag extends tl{constructor(e){super();const t=new CSSStyleSheet;t[md]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(lt.create([t]))}}class _g extends tl{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Ig extends tl{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Fd{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),W.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),Y.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),Y.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:i}=this.style;if(i){const s=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[s].style}else this.target=null}}m([D],Fd.prototype,"target",void 0);class Eg{constructor(e){this.target=e.style}setProperty(e,t){Y.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){Y.queueUpdate(()=>this.target.removeProperty(e))}}class Ae{setProperty(e,t){Ae.properties[e]=t;for(const i of Ae.roots.values())Yn.getOrCreate(Ae.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete Ae.properties[e];for(const t of Ae.roots.values())Yn.getOrCreate(Ae.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ae;if(!t.has(e)){t.add(e);const i=Yn.getOrCreate(this.normalizeRoot(e));for(const s in Ae.properties)i.setProperty(s,Ae.properties[s])}}static unregisterRoot(e){const{roots:t}=Ae;if(t.has(e)){t.delete(e);const i=Yn.getOrCreate(Ae.normalizeRoot(e));for(const s in Ae.properties)i.removeProperty(s)}}static normalizeRoot(e){return e===Zt?document:e}}Ae.roots=new Set;Ae.properties={};const qr=new WeakMap,Rg=Y.supportsAdoptedStyleSheets?Ag:Fd,Yn=Object.freeze({getOrCreate(n){if(qr.has(n))return qr.get(n);let e;return n===Zt?e=new Ae:n instanceof Document?e=Y.supportsAdoptedStyleSheets?new _g:new Ig:Sg(n)?e=new Rg(n):e=new Eg(n),qr.set(n,e),e}});class Ze extends kd{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ze.uniqueId(),Ze.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Ze({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return Ze.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=ve.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Ze&&(t=this.alias(t)),ve.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),ve.existsFor(e)&&ve.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Zt,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!ve.existsFor(t)&&ve.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(i=>i.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}Ze.uniqueId=(()=>{let n=0;return()=>(n++,n.toString(16))})();Ze.tokensById=new Map;class Og{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){Yn.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(ve.getOrCreate(t).get(e)))}remove(e,t){Yn.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class Dg{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=W.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,Vi))}catch(e){console.error(e)}}}class Pg{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),W.getNotifier(this).notify(e.id))}get(e){return W.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),W.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const Ci=new WeakMap,Ti=new WeakMap;class ve{constructor(e){this.target=e,this.store=new Pg,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,i)=>{const s=Ze.getTokenById(i);s&&(s.notify(this.target),this.updateCSSTokenReflection(t,s))}},Ci.set(e,this),W.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof hr?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ci.get(e)||new ve(e)}static existsFor(e){return Ci.has(e)}static findParent(e){if(Zt!==e.target){let t=vo(e.target);for(;t!==null;){if(Ci.has(t))return Ci.get(t);t=vo(t)}return ve.getOrCreate(Zt)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Zt?ve.getOrCreate(Zt):null}while(i!==null);return null}get parent(){return Ti.get(this)||null}updateCSSTokenReflection(e,t){if(Ze.isCSSDesignToken(t)){const i=this.parent,s=this.isReflecting(t);if(i){const r=i.get(t),o=e.get(t);r!==o&&!s?this.reflectToCSS(t):r===o&&s&&this.stopReflectToCSS(t)}else s||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(t!==void 0)return t;const i=this.getRaw(e);if(i!==void 0)return this.hydrate(e,i),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=ve.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){Ze.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Ze.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=ve.findParent(this);e&&e.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Ti.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Ti.get(e).removeChild(e);const t=this.children.filter(i=>e.contains(i));Ti.set(e,this),this.children.push(e),t.forEach(i=>e.appendChild(i)),W.getNotifier(this.store).subscribe(e);for(const[i,s]of this.store.all())e.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):s),e.updateCSSTokenReflection(e.store,i)}removeChild(e){const t=this.children.indexOf(e);if(t!==-1&&this.children.splice(t,1),W.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const i=Ti.delete(e);for(const[s]of this.store.all())e.hydrate(s,e.getRaw(s)),e.updateCSSTokenReflection(e.store,s);return i}contains(e){return $g(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),ve.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),ve.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=Ze.getTokenById(t);i&&(this.hydrate(i,this.getRaw(i)),this.updateCSSTokenReflection(this.store,i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);Ze.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new Dg(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}ve.cssCustomPropertyReflector=new Og;m([D],ve.prototype,"children",void 0);function Lg(n){return Ze.from(n)}const Bd=Object.freeze({create:Lg,notifyConnection(n){return!n.isConnected||!ve.existsFor(n)?!1:(ve.getOrCreate(n).bind(),!0)},notifyDisconnection(n){return n.isConnected||!ve.existsFor(n)?!1:(ve.getOrCreate(n).unbind(),!0)},registerRoot(n=Zt){Ae.registerRoot(n)},unregisterRoot(n=Zt){Ae.unregisterRoot(n)}}),Gr=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Wr=new Map,Ms=new Map;let ni=null;const $i=ge.createInterface(n=>n.cachedCallback(e=>(ni===null&&(ni=new Hd(null,e)),ni))),Nd=Object.freeze({tagFor(n){return Ms.get(n)},responsibleFor(n){const e=n.$$designSystem$$;return e||ge.findResponsibleContainer(n).get($i)},getOrCreate(n){if(!n)return ni===null&&(ni=ge.getOrCreateDOMContainer().get($i)),ni;const e=n.$$designSystem$$;if(e)return e;const t=ge.getOrCreateDOMContainer(n);if(t.has($i,!1))return t.get($i);{const i=new Hd(n,t);return t.register(ts.instance($i,i)),i}}});function Mg(n,e,t){return typeof n=="string"?{name:n,type:e,callback:t}:n}class Hd{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Gr.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],s=this.disambiguate,r=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(l,a,d){const c=Mg(l,a,d),{name:u,callback:g,baseClass:b}=c;let{type:$}=c,_=u,z=Wr.get(_),j=!0;for(;z;){const q=s(_,$,z);switch(q){case Gr.ignoreDuplicate:return;case Gr.definitionCallbackOnly:j=!1,z=void 0;break;default:_=q,z=Wr.get(_);break}}j&&((Ms.has($)||$===he)&&($=class extends ${}),Wr.set(_,$),Ms.set($,_),b&&Ms.set(b,_)),i.push(new Fg(t,_,$,r,g,j))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Bd.registerRoot(this.designTokenRoot)),t.registerWithContext(o,...e);for(const l of i)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class Fg{constructor(e,t,i,s,r,o){this.container=e,this.name=t,this.type=i,this.shadowRootMode=s,this.callback=r,this.willDefine=o,this.definition=null}definePresentation(e){Dd.define(this.name,e,this.container)}defineElement(e){this.definition=new ur(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Nd.tagFor(e)}}const Bg=(n,e)=>J`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,Ng={separator:"separator",presentation:"presentation"};let nl=class extends he{constructor(){super(...arguments),this.role=Ng.separator,this.orientation=Jo.horizontal}};m([v],nl.prototype,"role",void 0);m([v],nl.prototype,"orientation",void 0);const Hg=(n,e)=>J`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${hi(n,e)}
        <span class="content" part="content">
            <slot ${kt("content")}></slot>
        </span>
        ${ui(n,e)}
    </template>
`;class mr extends Ke{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,s;this.ariaActiveDescendant=(s=(i=this.options[t])===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,i)=>{t.checked=Cs(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,i)=>{t.checked=Cs(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,i)=>{t.checked=Cs(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,i)=>{t.checked=Cs(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case fi:{this.checkFirstOption(i);return}case Pn:{this.checkNextOption(i);return}case Ln:{this.checkPreviousOption(i);return}case pi:{this.checkLastOption(i);return}case Ko:return this.focusAndScrollOptionIntoView(),!0;case fr:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case ls:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,(i=this.options)===null||i===void 0||i.forEach(s=>{s.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var i;const s=Math.max(0,parseInt((i=t==null?void 0:t.toFixed())!==null&&i!==void 0?i:"",10));s!==t&&Y.queueUpdate(()=>{this.size=s})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(i=>!i.disabled),t=!e.every(i=>i.selected);e.forEach(i=>i.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){const i=this.getTypeaheadMatches(),s=this.options.indexOf(i[0]);s>-1&&(this.activeIndex=s,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}m([D],mr.prototype,"activeIndex",void 0);m([v({mode:"boolean"})],mr.prototype,"multiple",void 0);m([v({converter:It})],mr.prototype,"size",void 0);class zg extends he{}class Vg extends cs(zg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Ug={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let gt=class extends Vg{constructor(){super(...arguments),this.type=Ug.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&Y.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};m([v({attribute:"readonly",mode:"boolean"})],gt.prototype,"readOnly",void 0);m([v({mode:"boolean"})],gt.prototype,"autofocus",void 0);m([v],gt.prototype,"placeholder",void 0);m([v],gt.prototype,"type",void 0);m([v],gt.prototype,"list",void 0);m([v({converter:It})],gt.prototype,"maxlength",void 0);m([v({converter:It})],gt.prototype,"minlength",void 0);m([v],gt.prototype,"pattern",void 0);m([v({converter:It})],gt.prototype,"size",void 0);m([v({mode:"boolean"})],gt.prototype,"spellcheck",void 0);m([D],gt.prototype,"defaultSlottedNodes",void 0);class il{}ct(il,fe);ct(gt,di,il);const _a=44,jg=(n,e)=>J`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${Zo(t=>typeof t.value=="number",J`
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
                        style="stroke-dasharray: ${t=>_a*t.percentComplete/100}px ${_a}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,J`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class mi extends he{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,s=t-e;this.percentComplete=s===0?0:Math.fround((i-e)/s*100)}}m([v({converter:It})],mi.prototype,"value",void 0);m([v({converter:It})],mi.prototype,"min",void 0);m([v({converter:It})],mi.prototype,"max",void 0);m([v({mode:"boolean"})],mi.prototype,"paused",void 0);m([D],mi.prototype,"percentComplete",void 0);const qg=(n,e)=>J`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
        @keydown="${(t,i)=>t.keydownHandler(i.event)}"
        @focusout="${(t,i)=>t.focusOutHandler(i.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===Jo.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${kt({property:"slottedRadioButtons",filter:Xo("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;let xn=class extends he{constructor(){super(...arguments),this.orientation=Jo.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach(i=>{i!==t&&(i.checked=!1,this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach(s=>{s!==i&&s.setAttribute("tabindex","-1")}):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,i=e.target,s=i!==null?t.indexOf(i):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(r===0&&s===r||r===t.length-1&&r===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(o=>{o!==this.selectedRadio&&o.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(o=>{o!==this.focusedRadio&&o.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const t=e.target;if(t){const i=this.slottedRadioButtons;t.checked||i.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===is,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===ns,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key)){this.moveRightOffGroup();return}else i===t.length&&(i=0);for(;i<t.length&&t.length>1;)if(t[i].disabled){if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}else{this.moveToRadioByIndex(t,i);break}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;i>=0&&t.length>1;)if(t[i].disabled){if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}else{this.moveToRadioByIndex(t,i);break}},this.keydownHandler=e=>{const t=e.key;if(t in og&&this.isInsideFoundationToolbar)return!0;switch(t){case os:{this.checkFocusedRadio();break}case is:case Pn:{this.direction===ci.ltr?this.moveRight(e):this.moveLeft(e);break}case ns:case Ln:{this.direction===ci.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=dg(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),t=e?e.length:0;if(t>1){const s=e[t-1];s.checked=!0}let i=!1;if(this.slottedRadioButtons.forEach(s=>{this.name!==void 0&&s.setAttribute("name",this.name),this.disabled&&(s.disabled=!0),this.readOnly&&(s.readOnly=!0),this.value&&this.value===s.value?(this.selectedRadio=s,this.focusedRadio=s,s.checked=!0,s.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"),s.checked=!1),s.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const s=this.slottedRadioButtons.filter(o=>o.hasAttribute("checked")),r=s!==null?s.length:0;if(r>0&&!i){const o=s[r-1];o.checked=!0,this.focusedRadio=o,o.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};m([v({attribute:"readonly",mode:"boolean"})],xn.prototype,"readOnly",void 0);m([v({attribute:"disabled",mode:"boolean"})],xn.prototype,"disabled",void 0);m([v],xn.prototype,"name",void 0);m([v],xn.prototype,"value",void 0);m([v],xn.prototype,"orientation",void 0);m([D],xn.prototype,"childItems",void 0);m([D],xn.prototype,"slottedRadioButtons",void 0);const Gg=(n,e)=>J`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,i)=>t.keypressHandler(i.event)}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
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
            <slot ${kt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Wg extends he{}class Yg extends Ld(Wg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let br=class extends Yg{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case ls:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};m([v({attribute:"readonly",mode:"boolean"})],br.prototype,"readOnly",void 0);m([D],br.prototype,"name",void 0);m([D],br.prototype,"defaultSlottedNodes",void 0);function Qg(n,e,t){return n.nodeType!==Node.TEXT_NODE?!0:typeof n.nodeValue=="string"&&!!n.nodeValue.trim().length}class Zg extends mr{}class Xg extends cs(Zg){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class vn extends Xg{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Zs("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,Y.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return W.track(this,"value"),this._value}set value(e){var t,i,s,r,o,l,a;const d=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){const c=this._options.findIndex(b=>b.value===e),u=(s=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:null,g=(o=(r=this._options[c])===null||r===void 0?void 0:r.value)!==null&&o!==void 0?o:null;(c===-1||u!==g)&&(e="",this.selectedIndex=c),e=(a=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&a!==void 0?a:e}d!==e&&(this._value=e,super.valueChanged(d,e),W.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=(i=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&i!==void 0?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?jr.above:jr.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===jr.above?~~e.top:~~i}get displayValue(){var e,t;return W.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(i=>{W.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(i=>{W.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),(i=this.options)===null||i===void 0||i.forEach((s,r)=>{var o;const l=(o=this.proxy)===null||o===void 0?void 0:o.options.item(r);l&&(l.selected=s.selected)})}setDefaultSelectedOption(){var e;const t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Ke.slottedOptionFilter),i=t==null?void 0:t.findIndex(s=>s.hasAttribute("selected")||s.selected||s.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case ls:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case fi:case pi:{e.preventDefault();break}case os:{e.preventDefault(),this.open=!this.open;break}case fr:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Ko:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Pn||t===Ln)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&W.notify(this,"displayValue")}}m([v({attribute:"open",mode:"boolean"})],vn.prototype,"open",void 0);m([Kf],vn.prototype,"collapsible",null);m([D],vn.prototype,"control",void 0);m([v({attribute:"position"})],vn.prototype,"positionAttribute",void 0);m([D],vn.prototype,"position",void 0);m([D],vn.prototype,"maxHeight",void 0);class sl{}m([D],sl.prototype,"ariaControls",void 0);ct(sl,Mn);ct(vn,di,sl);const Jg=(n,e)=>J`
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
        @click="${(t,i)=>t.clickHandler(i.event)}"
        @focusin="${(t,i)=>t.focusinHandler(i.event)}"
        @focusout="${(t,i)=>t.focusoutHandler(i.event)}"
        @keydown="${(t,i)=>t.keydownHandler(i.event)}"
        @mousedown="${(t,i)=>t.mousedownHandler(i.event)}"
    >
        ${Zo(t=>t.collapsible,J`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${et("control")}
                >
                    ${hi(n,e)}
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
                    ${ui(n,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${et("listbox")}
        >
            <slot
                ${kt({filter:Ke.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Kg=(n,e)=>J`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class em extends he{}const tm=(n,e)=>J`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;class zd extends he{}m([v({mode:"boolean"})],zd.prototype,"disabled",void 0);const nm=(n,e)=>J`
    <template class="${t=>t.orientation}">
        ${hi(n,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${kt("tabs")}></slot>

            ${Zo(t=>t.showActiveIndicator,J`
                    <div
                        ${et("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ui(n,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${kt("tabpanels")}></slot>
        </div>
    </template>
`,wo={vertical:"vertical",horizontal:"horizontal"};class en extends he{constructor(){super(...arguments),this.orientation=wo.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((s,r)=>{if(s.slot==="tab"){const o=this.activeTabIndex===r&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);const l=this.tabIds[r],a=this.tabpanelIds[r];s.setAttribute("id",l),s.setAttribute("aria-selected",o?"true":"false"),s.setAttribute("aria-controls",a),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",o?"0":"-1"),o&&(this.activetab=s,this.activeid=l)}s.style[e]="",s.style[t]="",s.style[i]=`${r+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{const i=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ns:e.preventDefault(),this.adjustBackward(e);break;case is:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case Ln:e.preventDefault(),this.adjustBackward(e);break;case Pn:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case fi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case pi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;)if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}else{if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;)if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}else i-1<0?i=t.length-1:i-=1},this.moveToTabByIndex=(e,t)=>{const i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(i=>i.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${Zs()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${Zs()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===wo.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const o=r-s;this.activeIndicatorRef.style.transform=`${t}(${o}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const t=this.tabs.filter(o=>this.isFocusableElement(o)),i=t.indexOf(this.activetab),s=lg(0,t.length-1,i+e),r=this.tabs.indexOf(t[s]);r>-1&&this.moveToTabByIndex(this.tabs,r)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}m([v],en.prototype,"orientation",void 0);m([v],en.prototype,"activeid",void 0);m([D],en.prototype,"tabs",void 0);m([D],en.prototype,"tabpanels",void 0);m([v({mode:"boolean"})],en.prototype,"activeindicator",void 0);m([D],en.prototype,"activeIndicatorRef",void 0);m([D],en.prototype,"showActiveIndicator",void 0);ct(en,di);class im extends he{}class sm extends cs(im){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Vd={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let st=class extends sm{constructor(){super(...arguments),this.resize=Vd.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};m([v({mode:"boolean"})],st.prototype,"readOnly",void 0);m([v],st.prototype,"resize",void 0);m([v({mode:"boolean"})],st.prototype,"autofocus",void 0);m([v({attribute:"form"})],st.prototype,"formId",void 0);m([v],st.prototype,"list",void 0);m([v({converter:It})],st.prototype,"maxlength",void 0);m([v({converter:It})],st.prototype,"minlength",void 0);m([v],st.prototype,"name",void 0);m([v],st.prototype,"placeholder",void 0);m([v({converter:It,mode:"fromView"})],st.prototype,"cols",void 0);m([v({converter:It,mode:"fromView"})],st.prototype,"rows",void 0);m([v({mode:"boolean"})],st.prototype,"spellcheck",void 0);m([D],st.prototype,"defaultSlottedNodes",void 0);ct(st,il);const rm=(n,e)=>J`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==Vd.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${kt("defaultSlottedNodes")}></slot>
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
            @input="${(t,i)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${et("control")}
        ></textarea>
    </template>
`,om=(n,e)=>J`
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
                ${kt({property:"defaultSlottedNodes",filter:Qg})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${hi(n,e)}
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
                ${et("control")}
            />
            ${ui(n,e)}
        </div>
    </template>
`,fn="not-allowed",lm=":host([hidden]){display:none}";function Ue(n){return`${lm}:host{display:${n}}`}const He=ng()?"focus-visible":"focus";function am(n){return Nd.getOrCreate(n).withPrefix("vscode")}function cm(n){window.addEventListener("load",()=>{new MutationObserver(()=>{Ia(n)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Ia(n)})}function Ia(n){const e=getComputedStyle(document.body),t=document.querySelector("body");if(t){const i=t.getAttribute("data-vscode-theme-kind");for(const[s,r]of n){let o=e.getPropertyValue(s).toString();if(i==="vscode-high-contrast")o.length===0&&r.name.includes("background")&&(o="transparent"),r.name==="button-icon-hover-background"&&(o="transparent");else if(i==="vscode-high-contrast-light"){if(o.length===0&&r.name.includes("background"))switch(r.name){case"button-primary-hover-background":o="#0F4A85";break;case"button-secondary-hover-background":o="transparent";break;case"button-icon-hover-background":o="transparent";break}}else r.name==="contrast-active-border"&&(o="transparent");r.setValueFor(t,o)}}}const Ea=new Map;let Ra=!1;function O(n,e){const t=Bd.create(n);if(e){if(e.includes("--fake-vscode-token")){const i="id"+Math.random().toString(16).slice(2);e=`${e}-${i}`}Ea.set(e,t)}return Ra||(cm(Ea),Ra=!0),t}const dm=O("background","--vscode-editor-background").withDefault("#1e1e1e"),Q=O("border-width").withDefault(1),Ud=O("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");O("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const ds=O("corner-radius").withDefault(0),ii=O("corner-radius-round").withDefault(2),N=O("design-unit").withDefault(4),Fn=O("disabled-opacity").withDefault(.4),we=O("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Tt=O("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");O("font-weight","--vscode-font-weight").withDefault("400");const Be=O("foreground","--vscode-foreground").withDefault("#cccccc"),Fs=O("input-height").withDefault("26"),rl=O("input-min-width").withDefault("100px"),tt=O("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),at=O("type-ramp-base-line-height").withDefault("normal"),jd=O("type-ramp-minus1-font-size").withDefault("11px"),qd=O("type-ramp-minus1-line-height").withDefault("16px");O("type-ramp-minus2-font-size").withDefault("9px");O("type-ramp-minus2-line-height").withDefault("16px");O("type-ramp-plus1-font-size").withDefault("16px");O("type-ramp-plus1-line-height").withDefault("24px");const um=O("scrollbarWidth").withDefault("10px"),hm=O("scrollbarHeight").withDefault("10px"),fm=O("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),pm=O("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),gm=O("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Gd=O("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Wd=O("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),ol=O("button-border","--vscode-button-border").withDefault("transparent"),Oa=O("button-icon-background").withDefault("transparent"),mm=O("button-icon-corner-radius").withDefault("5px"),bm=O("button-icon-outline-offset").withDefault(0),Da=O("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),ym=O("button-icon-padding").withDefault("3px"),si=O("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Yd=O("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Qd=O("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Yr=O("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),xm=O("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),vm=O("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),wm=O("button-padding-horizontal").withDefault("11px"),km=O("button-padding-vertical").withDefault("4px"),Wt=O("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Qn=O("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Cm=O("checkbox-corner-radius").withDefault(3);O("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const _n=O("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),ri=O("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Tm=O("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),$m=O("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),$s=O("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),dn=O("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");O("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const Sm=O("dropdown-list-max-height").withDefault("200px"),In=O("input-background","--vscode-input-background").withDefault("#3c3c3c"),Zd=O("input-foreground","--vscode-input-foreground").withDefault("#cccccc");O("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const Pa=O("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Am=O("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),_m=O("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Im=O("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Wn=O("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Em=O("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");O("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");O("panel-view-border","--vscode-panel-border").withDefault("#80808059");const Rm=O("tag-corner-radius").withDefault("2px"),Om=(n,e)=>be`
	${Ue("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Tt};
		font-size: ${jd};
		line-height: ${qd};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Gd};
		border: calc(${Q} * 1px) solid ${ol};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Wd};
		display: flex;
		height: calc(${N} * 4px);
		justify-content: center;
		min-width: calc(${N} * 4px + 2px);
		min-height: calc(${N} * 4px + 2px);
		padding: 3px 6px;
	}
`;class Dm extends as{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const Pm=Dm.compose({baseName:"badge",template:Pd,styles:Om});function Lm(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(o=n[l])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}const Mm=be`
	${Ue("inline-flex")} :host {
		outline: none;
		font-family: ${Tt};
		font-size: ${tt};
		line-height: ${at};
		color: ${Yd};
		background: ${si};
		border-radius: calc(${ii} * 1px);
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
		padding: ${km} ${wm};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${Q} * 1px) solid ${ol};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Qd};
	}
	:host(:active) {
		background: ${si};
	}
	.control:${He} {
		outline: calc(${Q} * 1px) solid ${we};
		outline-offset: calc(${Q} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Fn};
		background: ${si};
		cursor: ${fn};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${N} * 4px);
		height: calc(${N} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Fm=be`
	:host([appearance='primary']) {
		background: ${si};
		color: ${Yd};
	}
	:host([appearance='primary']:hover) {
		background: ${Qd};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${si};
	}
	:host([appearance='primary']) .control:${He} {
		outline: calc(${Q} * 1px) solid ${we};
		outline-offset: calc(${Q} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${si};
	}
`,Bm=be`
	:host([appearance='secondary']) {
		background: ${Yr};
		color: ${xm};
	}
	:host([appearance='secondary']:hover) {
		background: ${vm};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Yr};
	}
	:host([appearance='secondary']) .control:${He} {
		outline: calc(${Q} * 1px) solid ${we};
		outline-offset: calc(${Q} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Yr};
	}
`,Nm=be`
	:host([appearance='icon']) {
		background: ${Oa};
		border-radius: ${mm};
		color: ${Be};
	}
	:host([appearance='icon']:hover) {
		background: ${Da};
		outline: 1px dotted ${Ud};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${ym};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${Da};
	}
	:host([appearance='icon']) .control:${He} {
		outline: calc(${Q} * 1px) solid ${we};
		outline-offset: ${bm};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Oa};
	}
`,Hm=(n,e)=>be`
	${Mm}
	${Fm}
	${Bm}
	${Nm}
`;class Xd extends Rt{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){e==="appearance"&&i==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=i),e==="disabled"&&(this.disabled=i!==null)}}Lm([v],Xd.prototype,"appearance",void 0);const zm=Xd.compose({baseName:"button",template:ug,styles:Hm,shadowOptions:{delegatesFocus:!0}}),Vm=(n,e)=>be`
	${Ue("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${N} * 1px) 0;
		user-select: none;
		font-size: ${tt};
		line-height: ${at};
	}
	.control {
		position: relative;
		width: calc(${N} * 4px + 2px);
		height: calc(${N} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Cm} * 1px);
		border: calc(${Q} * 1px) solid ${Qn};
		background: ${Wt};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Tt};
		color: ${Be};
		padding-inline-start: calc(${N} * 2px + 2px);
		margin-inline-end: calc(${N} * 2px + 2px);
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
		fill: ${Be};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${Be};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Wt};
		border-color: ${Qn};
	}
	:host(:enabled) .control:active {
		background: ${Wt};
		border-color: ${we};
	}
	:host(:${He}) .control {
		border: calc(${Q} * 1px) solid ${we};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${fn};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Fn};
	}
`;class Um extends gr{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const jm=Um.compose({baseName:"checkbox",template:kg,styles:Vm,checkedIndicator:`
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
	`}),qm=(n,e)=>be`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,Gm=(n,e)=>be`
	:host {
		display: grid;
		padding: calc((${N} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${dm};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Tm};
		outline: 1px dotted ${Ud};
		outline-offset: -1px;
	}
`,Wm=(n,e)=>be`
	:host {
		padding: calc(${N} * 1px) calc(${N} * 3px);
		color: ${Be};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Tt};
		font-size: ${tt};
		line-height: ${at};
		font-weight: 400;
		border: solid calc(${Q} * 1px) transparent;
		border-radius: calc(${ds} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${He}),
	:host(:focus),
	:host(:active) {
		background: ${_n};
		border: solid calc(${Q} * 1px) ${we};
		color: ${ri};
		outline: none;
	}
	:host(:${He}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${ri} !important;
	}
`;class Ym extends Ve{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const Qm=Ym.compose({baseName:"data-grid",baseClass:Ve,template:gg,styles:qm});class Zm extends ze{}const Xm=Zm.compose({baseName:"data-grid-row",baseClass:ze,template:vg,styles:Gm});class Jm extends yn{}const Km=Jm.compose({baseName:"data-grid-cell",baseClass:yn,template:wg,styles:Wm}),eb=(n,e)=>be`
	${Ue("block")} :host {
		border: none;
		border-top: calc(${Q} * 1px) solid ${$m};
		box-sizing: content-box;
		height: 0;
		margin: calc(${N} * 1px) 0;
		width: 100%;
	}
`;class tb extends nl{}const nb=tb.compose({baseName:"divider",template:Bg,styles:eb}),ib=(n,e)=>be`
	${Ue("inline-flex")} :host {
		background: ${$s};
		border-radius: calc(${ii} * 1px);
		box-sizing: border-box;
		color: ${Be};
		contain: contents;
		font-family: ${Tt};
		height: calc(${Fs} * 1px);
		position: relative;
		user-select: none;
		min-width: ${rl};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Q} * 1px) solid ${dn};
		border-radius: calc(${ii} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${tt};
		line-height: ${at};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${$s};
		border: calc(${Q} * 1px) solid ${we};
		border-radius: calc(${ii} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Sm};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${He}) .control {
		border-color: ${we};
	}
	:host(:not([disabled]):hover) {
		background: ${$s};
		border-color: ${dn};
	}
	:host(:${He}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${_n};
		border: calc(${Q} * 1px) solid transparent;
		color: ${ri};
	}
	:host([disabled]) {
		cursor: ${fn};
		opacity: ${Fn};
	}
	:host([disabled]) .control {
		cursor: ${fn};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${$s};
		color: ${Be};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${we};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${we};
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
		bottom: calc(${Fs} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Fs} * 1px);
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
		min-height: calc(${N} * 4px);
		min-width: calc(${N} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class sb extends vn{}const rb=sb.compose({baseName:"dropdown",template:Jg,styles:ib,indicator:`
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
	`}),ob=(n,e)=>be`
	${Ue("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Am};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Tt};
		font-size: ${tt};
		line-height: ${at};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${Q} * 1px) solid transparent;
		border-radius: calc(${ds} * 1px);
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
		color: ${Pa};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Pa};
	}
	:host(:${He}) .control,
	:host(:focus) .control {
		border: calc(${Q} * 1px) solid ${we};
	}
`;class lb extends Et{}const ab=lb.compose({baseName:"link",template:cg,styles:ob,shadowOptions:{delegatesFocus:!0}}),cb=(n,e)=>be`
	${Ue("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${ds};
		border: calc(${Q} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${Be};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${tt};
		line-height: ${at};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${N} / 2) * 1px)
			calc((${N} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${He}) {
		border-color: ${we};
		background: ${_n};
		color: ${Be};
	}
	:host([aria-selected='true']) {
		background: ${_n};
		border: calc(${Q} * 1px) solid transparent;
		color: ${ri};
	}
	:host(:active) {
		background: ${_n};
		color: ${ri};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${_n};
		border: calc(${Q} * 1px) solid transparent;
		color: ${ri};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${_n};
		color: ${Be};
	}
	:host([disabled]) {
		cursor: ${fn};
		opacity: ${Fn};
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
`;let db=class extends Kt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}};const ub=db.compose({baseName:"option",template:Hg,styles:cb}),hb=(n,e)=>be`
	${Ue("grid")} :host {
		box-sizing: border-box;
		font-family: ${Tt};
		font-size: ${tt};
		line-height: ${at};
		color: ${Be};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${N} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${N} * 1px) calc(${N} * 1px) 0;
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
		height: calc((${N} / 4) * 1px);
		justify-self: center;
		background: ${Wn};
		margin: 0;
		border-radius: calc(${ds} * 1px);
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
`,fb=(n,e)=>be`
	${Ue("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Tt};
		font-size: ${tt};
		line-height: ${at};
		height: calc(${N} * 7px);
		padding: calc(${N} * 1px) 0;
		color: ${Em};
		fill: currentcolor;
		border-radius: calc(${ds} * 1px);
		border: solid calc(${Q} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Wn};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Wn};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Wn};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Wn};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Wn};
		fill: currentcolor;
	}
	:host(:${He}) {
		outline: none;
		border: solid calc(${Q} * 1px) ${Im};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${N} * 2px);
	}
`,pb=(n,e)=>be`
	${Ue("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${Q} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${tt};
		line-height: ${at};
		padding: 10px calc((${N} + 2) * 1px);
	}
`;class gb extends en{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=wo.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const mb=gb.compose({baseName:"panels",template:nm,styles:hb});class bb extends zd{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const yb=bb.compose({baseName:"panel-tab",template:tm,styles:fb});class xb extends em{}const vb=xb.compose({baseName:"panel-view",template:Kg,styles:pb}),wb=(n,e)=>be`
	${Ue("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${N} * 7px);
		width: calc(${N} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${N} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${_m};
		stroke-width: calc(${N} / 2 * 1px);
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
`;class kb extends mi{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){e==="value"&&this.removeAttribute("value")}}const Cb=kb.compose({baseName:"progress-ring",template:jg,styles:wb,indeterminateIndicator:`
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
	`}),Tb=(n,e)=>be`
	${Ue("flex")} :host {
		align-items: flex-start;
		margin: calc(${N} * 1px) 0;
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
		color: ${Be};
		font-size: ${tt};
		margin: calc(${N} * 1px) 0;
	}
`;class $b extends xn{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const Sb=$b.compose({baseName:"radio-group",template:qg,styles:Tb}),Ab=(n,e)=>be`
	${Ue("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${tt};
		line-height: ${at};
		margin: calc(${N} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Wt};
		border-radius: 999px;
		border: calc(${Q} * 1px) solid ${Qn};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${N} * 4px);
		position: relative;
		outline: none;
		width: calc(${N} * 4px);
	}
	.label {
		color: ${Be};
		cursor: pointer;
		font-family: ${Tt};
		margin-inline-end: calc(${N} * 2px + 2px);
		padding-inline-start: calc(${N} * 2px + 2px);
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
		background: ${Be};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${N} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Wt};
		border-color: ${Qn};
	}
	:host(:not([disabled])) .control:active {
		background: ${Wt};
		border-color: ${we};
	}
	:host(:${He}) .control {
		border: calc(${Q} * 1px) solid ${we};
	}
	:host([aria-checked='true']) .control {
		background: ${Wt};
		border: calc(${Q} * 1px) solid ${Qn};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Wt};
		border: calc(${Q} * 1px) solid ${Qn};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Wt};
		border: calc(${Q} * 1px) solid ${we};
	}
	:host([aria-checked="true"]:${He}:not([disabled])) .control {
		border: calc(${Q} * 1px) solid ${we};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${fn};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Fn};
	}
`;class _b extends br{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const Ib=_b.compose({baseName:"radio",template:Gg,styles:Ab,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),Eb=(n,e)=>be`
	${Ue("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Tt};
		font-size: ${jd};
		line-height: ${qd};
	}
	.control {
		background-color: ${Gd};
		border: calc(${Q} * 1px) solid ${ol};
		border-radius: ${Rm};
		color: ${Wd};
		padding: calc(${N} * 0.5px) calc(${N} * 1px);
		text-transform: uppercase;
	}
`;class Rb extends as{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const Ob=Rb.compose({baseName:"tag",template:Pd,styles:Eb}),Db=(n,e)=>be`
	${Ue("inline-block")} :host {
		font-family: ${Tt};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Zd};
		background: ${In};
		border-radius: calc(${ii} * 1px);
		border: calc(${Q} * 1px) solid ${dn};
		font: inherit;
		font-size: ${tt};
		line-height: ${at};
		padding: calc(${N} * 2px + 1px);
		width: 100%;
		min-width: ${rl};
		resize: none;
	}
	.control:hover:enabled {
		background: ${In};
		border-color: ${dn};
	}
	.control:active:enabled {
		background: ${In};
		border-color: ${we};
	}
	.control:hover,
	.control:${He},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${um};
		height: ${hm};
	}
	.control::-webkit-scrollbar-corner {
		background: ${In};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${fm};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${pm};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${gm};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${we};
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
		color: ${Be};
		cursor: pointer;
		font-size: ${tt};
		line-height: ${at};
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
		cursor: ${fn};
	}
	:host([disabled]) {
		opacity: ${Fn};
	}
	:host([disabled]) .control {
		border-color: ${dn};
	}
`;class Pb extends st{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const Lb=Pb.compose({baseName:"text-area",template:rm,styles:Db,shadowOptions:{delegatesFocus:!0}}),Mb=(n,e)=>be`
	${Ue("inline-block")} :host {
		font-family: ${Tt};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Zd};
		background: ${In};
		border-radius: calc(${ii} * 1px);
		border: calc(${Q} * 1px) solid ${dn};
		height: calc(${Fs} * 1px);
		min-width: ${rl};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${N} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${N} * 2px + 1px);
		font-size: ${tt};
		line-height: ${at};
	}
	.control:hover,
	.control:${He},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${Be};
		cursor: pointer;
		font-size: ${tt};
		line-height: ${at};
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
		width: calc(${N} * 4px);
		height: calc(${N} * 4px);
	}
	.start {
		margin-inline-start: calc(${N} * 2px);
	}
	.end {
		margin-inline-end: calc(${N} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${In};
		border-color: ${dn};
	}
	:host(:active:not([disabled])) .root {
		background: ${In};
		border-color: ${we};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${we};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${fn};
	}
	:host([disabled]) {
		opacity: ${Fn};
	}
	:host([disabled]) .control {
		border-color: ${dn};
	}
`;class Fb extends gt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const Bb=Fb.compose({baseName:"text-field",template:om,styles:Mb,shadowOptions:{delegatesFocus:!0}}),Nb={vsCodeBadge:Pm,vsCodeButton:zm,vsCodeCheckbox:jm,vsCodeDataGrid:Qm,vsCodeDataGridCell:Km,vsCodeDataGridRow:Xm,vsCodeDivider:nb,vsCodeDropdown:rb,vsCodeLink:ab,vsCodeOption:ub,vsCodePanels:mb,vsCodePanelTab:yb,vsCodePanelView:vb,vsCodeProgressRing:Cb,vsCodeRadioGroup:Sb,vsCodeRadio:Ib,vsCodeTag:Ob,vsCodeTextArea:Lb,vsCodeTextField:Bb,register(n,...e){if(n)for(const t in this)t!=="register"&&this[t]().register(n,...e)}};function ll(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Bn=ll();function Jd(n){Bn=n}const qi={exec:()=>null};function re(n,e=""){let t=typeof n=="string"?n:n.source;const i={replace:(s,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(Je.caret,"$1"),t=t.replace(s,o),i},getRegex:()=>new RegExp(t,e)};return i}const Je={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},Hb=/^(?:[ \t]*(?:\n|$))+/,zb=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Vb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,us=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ub=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Kd=/(?:[*+-]|\d{1,9}[.)])/,eu=re(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Kd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),al=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,jb=/^[^\n]+/,cl=/(?!\s*\])(?:\\.|[^\[\]\\])+/,qb=re(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",cl).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Gb=re(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Kd).getRegex(),yr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",dl=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Wb=re("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",dl).replace("tag",yr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),tu=re(al).replace("hr",us).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yr).getRegex(),Yb=re(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",tu).getRegex(),ul={blockquote:Yb,code:zb,def:qb,fences:Vb,heading:Ub,hr:us,html:Wb,lheading:eu,list:Gb,newline:Hb,paragraph:tu,table:qi,text:jb},La=re("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",us).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yr).getRegex(),Qb={...ul,table:La,paragraph:re(al).replace("hr",us).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",La).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yr).getRegex()},Zb={...ul,html:re(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",dl).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:re(al).replace("hr",us).replace("heading",` *#{1,6} *[^
]`).replace("lheading",eu).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Xb=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Jb=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,nu=/^( {2,}|\\)\n(?!\s*$)/,Kb=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xr=/[\p{P}\p{S}]/u,hl=/[\s\p{P}\p{S}]/u,iu=/[^\s\p{P}\p{S}]/u,ey=re(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,hl).getRegex(),su=/(?!~)[\p{P}\p{S}]/u,ty=/(?!~)[\s\p{P}\p{S}]/u,ny=/(?:[^\s\p{P}\p{S}]|~)/u,iy=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ru=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,sy=re(ru,"u").replace(/punct/g,xr).getRegex(),ry=re(ru,"u").replace(/punct/g,su).getRegex(),ou="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",oy=re(ou,"gu").replace(/notPunctSpace/g,iu).replace(/punctSpace/g,hl).replace(/punct/g,xr).getRegex(),ly=re(ou,"gu").replace(/notPunctSpace/g,ny).replace(/punctSpace/g,ty).replace(/punct/g,su).getRegex(),ay=re("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,iu).replace(/punctSpace/g,hl).replace(/punct/g,xr).getRegex(),cy=re(/\\(punct)/,"gu").replace(/punct/g,xr).getRegex(),dy=re(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),uy=re(dl).replace("(?:-->|$)","-->").getRegex(),hy=re("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",uy).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Xs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,fy=re(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Xs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),lu=re(/^!?\[(label)\]\[(ref)\]/).replace("label",Xs).replace("ref",cl).getRegex(),au=re(/^!?\[(ref)\](?:\[\])?/).replace("ref",cl).getRegex(),py=re("reflink|nolink(?!\\()","g").replace("reflink",lu).replace("nolink",au).getRegex(),fl={_backpedal:qi,anyPunctuation:cy,autolink:dy,blockSkip:iy,br:nu,code:Jb,del:qi,emStrongLDelim:sy,emStrongRDelimAst:oy,emStrongRDelimUnd:ay,escape:Xb,link:fy,nolink:au,punctuation:ey,reflink:lu,reflinkSearch:py,tag:hy,text:Kb,url:qi},gy={...fl,link:re(/^!?\[(label)\]\((.*?)\)/).replace("label",Xs).getRegex(),reflink:re(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Xs).getRegex()},ko={...fl,emStrongRDelimAst:ly,emStrongLDelim:ry,url:re(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},my={...ko,br:re(nu).replace("{2,}","*").getRegex(),text:re(ko.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ss={normal:ul,gfm:Qb,pedantic:Zb},Si={normal:fl,gfm:ko,breaks:my,pedantic:gy},by={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ma=n=>by[n];function Mt(n,e){if(e){if(Je.escapeTest.test(n))return n.replace(Je.escapeReplace,Ma)}else if(Je.escapeTestNoEncode.test(n))return n.replace(Je.escapeReplaceNoEncode,Ma);return n}function Fa(n){try{n=encodeURI(n).replace(Je.percentDecode,"%")}catch{return null}return n}function Ba(n,e){var r;const t=n.replace(Je.findPipe,(o,l,a)=>{let d=!1,c=l;for(;--c>=0&&a[c]==="\\";)d=!d;return d?"|":" |"}),i=t.split(Je.splitPipe);let s=0;if(i[0].trim()||i.shift(),i.length>0&&!((r=i.at(-1))!=null&&r.trim())&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(Je.slashPipe,"|");return i}function Ai(n,e,t){const i=n.length;if(i===0)return"";let s=0;for(;s<i&&n.charAt(i-s-1)===e;)s++;return n.slice(0,i-s)}function yy(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return-1}function Na(n,e,t,i,s){const r=e.href,o=e.title||null,l=n[1].replace(s.other.outputLinkReplace,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:t,href:r,title:o,text:l,tokens:i.inlineTokens(l)};return i.state.inLink=!1,a}return{type:"image",raw:t,href:r,title:o,text:l}}function xy(n,e,t){const i=n.match(t.other.indentCodeCompensation);if(i===null)return e;const s=i[1];return e.split(`
`).map(r=>{const o=r.match(t.other.beginningSpace);if(o===null)return r;const[l]=o;return l.length>=s.length?r.slice(s.length):r}).join(`
`)}class Js{constructor(e){oe(this,"options");oe(this,"rules");oe(this,"lexer");this.options=e||Bn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const i=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Ai(i,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const i=t[0],s=xy(i,t[3]||"",this.rules);return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(this.rules.other.endingHash.test(i)){const s=Ai(i,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(i=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Ai(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let i=Ai(t[0],`
`).split(`
`),s="",r="";const o=[];for(;i.length>0;){let l=!1;const a=[];let d;for(d=0;d<i.length;d++)if(this.rules.other.blockquoteStart.test(i[d]))a.push(i[d]),l=!0;else if(!l)a.push(i[d]);else break;i=i.slice(d);const c=a.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${c}`:c,r=r?`${r}
${u}`:u;const g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=g,i.length===0)break;const b=o.at(-1);if((b==null?void 0:b.type)==="code")break;if((b==null?void 0:b.type)==="blockquote"){const $=b,_=$.raw+`
`+i.join(`
`),z=this.blockquote(_);o[o.length-1]=z,s=s.substring(0,s.length-$.raw.length)+z.raw,r=r.substring(0,r.length-$.text.length)+z.text;break}else if((b==null?void 0:b.type)==="list"){const $=b,_=$.raw+`
`+i.join(`
`),z=this.list(_);o[o.length-1]=z,s=s.substring(0,s.length-b.raw.length)+z.raw,r=r.substring(0,r.length-$.raw.length)+z.raw,i=_.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim();const s=i.length>1,r={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");const o=this.rules.other.listItemRegex(i);let l=!1;for(;e;){let d=!1,c="",u="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let g=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,q=>" ".repeat(3*q.length)),b=e.split(`
`,1)[0],$=!g.trim(),_=0;if(this.options.pedantic?(_=2,u=g.trimStart()):$?_=t[1].length+1:(_=t[2].search(this.rules.other.nonSpaceChar),_=_>4?1:_,u=g.slice(_),_+=t[1].length),$&&this.rules.other.blankLine.test(b)&&(c+=b+`
`,e=e.substring(b.length+1),d=!0),!d){const q=this.rules.other.nextBulletRegex(_),Z=this.rules.other.hrRegex(_),R=this.rules.other.fencesBeginRegex(_),K=this.rules.other.headingBeginRegex(_),ye=this.rules.other.htmlBeginRegex(_);for(;e;){const Re=e.split(`
`,1)[0];let Oe;if(b=Re,this.options.pedantic?(b=b.replace(this.rules.other.listReplaceNesting,"  "),Oe=b):Oe=b.replace(this.rules.other.tabCharGlobal,"    "),R.test(b)||K.test(b)||ye.test(b)||q.test(b)||Z.test(b))break;if(Oe.search(this.rules.other.nonSpaceChar)>=_||!b.trim())u+=`
`+Oe.slice(_);else{if($||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||R.test(g)||K.test(g)||Z.test(g))break;u+=`
`+b}!$&&!b.trim()&&($=!0),c+=Re+`
`,e=e.substring(Re.length+1),g=Oe.slice(_)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(l=!0));let z=null,j;this.options.gfm&&(z=this.rules.other.listIsTask.exec(u),z&&(j=z[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:c,task:!!z,checked:j,loose:!1,text:u,tokens:[]}),r.raw+=c}const a=r.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let d=0;d<r.items.length;d++)if(this.lexer.state.top=!1,r.items[d].tokens=this.lexer.blockTokens(r.items[d].text,[]),!r.loose){const c=r.items[d].tokens.filter(g=>g.type==="space"),u=c.length>0&&c.some(g=>this.rules.other.anyLine.test(g.raw));r.loose=u}if(r.loose)for(let d=0;d<r.items.length;d++)r.items[d].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const i=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:s,title:r}}}table(e){var l;const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const i=Ba(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(l=t[3])!=null&&l.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===s.length){for(const a of s)this.rules.other.tableAlignRight.test(a)?o.align.push("right"):this.rules.other.tableAlignCenter.test(a)?o.align.push("center"):this.rules.other.tableAlignLeft.test(a)?o.align.push("left"):o.align.push(null);for(let a=0;a<i.length;a++)o.header.push({text:i[a],tokens:this.lexer.inline(i[a]),header:!0,align:o.align[a]});for(const a of r)o.rows.push(Ba(a,o.header.length).map((d,c)=>({text:d,tokens:this.lexer.inline(d),header:!1,align:o.align[c]})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const i=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const o=Ai(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=yy(t[2],"()");if(o>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?s=s.slice(1):s=s.slice(1,-1)),Na(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const s=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=t[s.toLowerCase()];if(!r){const o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return Na(i,r,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...s[0]].length-1;let l,a,d=o,c=0;const u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+o);(s=u.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(a=[...l].length,s[3]||s[4]){d+=a;continue}else if((s[5]||s[6])&&o%3&&!((o+a)%3)){c+=a;continue}if(d-=a,d>0)continue;a=Math.min(a,a+d+c);const g=[...s[0]][0].length,b=e.slice(0,o+s.index+g+a);if(Math.min(o,a)%2){const _=b.slice(1,-1);return{type:"em",raw:b,text:_,tokens:this.lexer.inlineTokens(_)}}const $=b.slice(2,-2);return{type:"strong",raw:b,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(i),r=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return s&&r&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:t[0],text:i}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let i,s;return t[2]==="@"?(i=t[1],s="mailto:"+i):(i=t[1],s=i),{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=t[0],r="mailto:"+s;else{let o;do o=t[0],t[0]=((i=this.rules.inline._backpedal.exec(t[0]))==null?void 0:i[0])??"";while(o!==t[0]);s=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const i=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:i}}}}class xt{constructor(e){oe(this,"tokens");oe(this,"options");oe(this,"state");oe(this,"tokenizer");oe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Bn,this.options.tokenizer=this.options.tokenizer||new Js,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={other:Je,block:Ss.normal,inline:Si.normal};this.options.pedantic?(t.block=Ss.pedantic,t.inline=Si.pedantic):this.options.gfm&&(t.block=Ss.gfm,this.options.breaks?t.inline=Si.breaks:t.inline=Si.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ss,inline:Si}}static lex(e,t){return new xt(t).lex(e)}static lexInline(e,t){return new xt(t).inlineTokens(e)}lex(e){e=e.replace(Je.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const i=this.inlineQueue[t];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){var s,r,o;for(this.options.pedantic&&(e=e.replace(Je.tabCharGlobal,"    ").replace(Je.spaceLine,""));e;){let l;if((r=(s=this.options.extensions)==null?void 0:s.block)!=null&&r.some(d=>(l=d.call({lexer:this},e,t))?(e=e.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);const d=t.at(-1);l.raw.length===1&&d!==void 0?d.raw+=`
`:t.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);const d=t.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=`
`+l.raw,d.text+=`
`+l.text,this.inlineQueue.at(-1).src=d.text):t.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);const d=t.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=`
`+l.raw,d.text+=`
`+l.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),t.push(l);continue}let a=e;if((o=this.options.extensions)!=null&&o.startBlock){let d=1/0;const c=e.slice(1);let u;this.options.extensions.startBlock.forEach(g=>{u=g.call({lexer:this},c),typeof u=="number"&&u>=0&&(d=Math.min(d,u))}),d<1/0&&d>=0&&(a=e.substring(0,d+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){const d=t.at(-1);i&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=`
`+l.raw,d.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):t.push(l),i=a.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);const d=t.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=`
`+l.raw,d.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):t.push(l);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var l,a,d;let i=e,s=null;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r=!1,o="";for(;e;){r||(o=""),r=!1;let c;if((a=(l=this.options.extensions)==null?void 0:l.inline)!=null&&a.some(g=>(c=g.call({lexer:this},e,t))?(e=e.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);const g=t.at(-1);c.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=c.raw,g.text+=c.text):t.push(c);continue}if(c=this.tokenizer.emStrong(e,i,o)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.del(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),t.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),t.push(c);continue}let u=e;if((d=this.options.extensions)!=null&&d.startInline){let g=1/0;const b=e.slice(1);let $;this.options.extensions.startInline.forEach(_=>{$=_.call({lexer:this},b),typeof $=="number"&&$>=0&&(g=Math.min(g,$))}),g<1/0&&g>=0&&(u=e.substring(0,g+1))}if(c=this.tokenizer.inlineText(u)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),r=!0;const g=t.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=c.raw,g.text+=c.text):t.push(c);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return t}}class Ks{constructor(e){oe(this,"options");oe(this,"parser");this.options=e||Bn}space(e){return""}code({text:e,lang:t,escaped:i}){var o;const s=(o=(t||"").match(Je.notSpaceStart))==null?void 0:o[0],r=e.replace(Je.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Mt(s)+'">'+(i?r:Mt(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:Mt(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,i=e.start;let s="";for(let l=0;l<e.items.length;l++){const a=e.items[l];s+=this.listitem(a)}const r=t?"ol":"ul",o=t&&i!==1?' start="'+i+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(e){var i;let t="";if(e.task){const s=this.checkbox({checked:!!e.checked});e.loose?((i=e.tokens[0])==null?void 0:i.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+Mt(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let r=0;r<e.header.length;r++)i+=this.tablecell(e.header[r]);t+=this.tablerow({text:i});let s="";for(let r=0;r<e.rows.length;r++){const o=e.rows[r];i="";for(let l=0;l<o.length;l++)i+=this.tablecell(o[l]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Mt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){const s=this.parser.parseInline(i),r=Fa(e);if(r===null)return s;e=r;let o='<a href="'+e+'"';return t&&(o+=' title="'+Mt(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:i}){const s=Fa(e);if(s===null)return Mt(i);e=s;let r=`<img src="${e}" alt="${i}"`;return t&&(r+=` title="${Mt(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Mt(e.text)}}class pl{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class vt{constructor(e){oe(this,"options");oe(this,"renderer");oe(this,"textRenderer");this.options=e||Bn,this.options.renderer=this.options.renderer||new Ks,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new pl}static parse(e,t){return new vt(t).parse(e)}static parseInline(e,t){return new vt(t).parseInline(e)}parse(e,t=!0){var s,r;let i="";for(let o=0;o<e.length;o++){const l=e[o];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[l.type]){const d=l,c=this.options.extensions.renderers[d.type].call({parser:this},d);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type)){i+=c||"";continue}}const a=l;switch(a.type){case"space":{i+=this.renderer.space(a);continue}case"hr":{i+=this.renderer.hr(a);continue}case"heading":{i+=this.renderer.heading(a);continue}case"code":{i+=this.renderer.code(a);continue}case"table":{i+=this.renderer.table(a);continue}case"blockquote":{i+=this.renderer.blockquote(a);continue}case"list":{i+=this.renderer.list(a);continue}case"html":{i+=this.renderer.html(a);continue}case"paragraph":{i+=this.renderer.paragraph(a);continue}case"text":{let d=a,c=this.renderer.text(d);for(;o+1<e.length&&e[o+1].type==="text";)d=e[++o],c+=`
`+this.renderer.text(d);t?i+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):i+=c;continue}default:{const d='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return i}parseInline(e,t=this.renderer){var s,r;let i="";for(let o=0;o<e.length;o++){const l=e[o];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[l.type]){const d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){i+=d||"";continue}}const a=l;switch(a.type){case"escape":{i+=t.text(a);break}case"html":{i+=t.html(a);break}case"link":{i+=t.link(a);break}case"image":{i+=t.image(a);break}case"strong":{i+=t.strong(a);break}case"em":{i+=t.em(a);break}case"codespan":{i+=t.codespan(a);break}case"br":{i+=t.br(a);break}case"del":{i+=t.del(a);break}case"text":{i+=t.text(a);break}default:{const d='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return i}}class Gi{constructor(e){oe(this,"options");oe(this,"block");this.options=e||Bn}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?xt.lex:xt.lexInline}provideParser(){return this.block?vt.parse:vt.parseInline}}oe(Gi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class vy{constructor(...e){oe(this,"defaults",ll());oe(this,"options",this.setOptions);oe(this,"parse",this.parseMarkdown(!0));oe(this,"parseInline",this.parseMarkdown(!1));oe(this,"Parser",vt);oe(this,"Renderer",Ks);oe(this,"TextRenderer",pl);oe(this,"Lexer",xt);oe(this,"Tokenizer",Js);oe(this,"Hooks",Gi);this.use(...e)}walkTokens(e,t){var s,r;let i=[];for(const o of e)switch(i=i.concat(t.call(this,o)),o.type){case"table":{const l=o;for(const a of l.header)i=i.concat(this.walkTokens(a.tokens,t));for(const a of l.rows)for(const d of a)i=i.concat(this.walkTokens(d.tokens,t));break}case"list":{const l=o;i=i.concat(this.walkTokens(l.items,t));break}default:{const l=o;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(a=>{const d=l[a].flat(1/0);i=i.concat(this.walkTokens(d,t))}):l.tokens&&(i=i.concat(this.walkTokens(l.tokens,t)))}}return i}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const s={...i};if(s.async=this.defaults.async||s.async||!1,i.extensions&&(i.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=t.renderers[r.name];o?t.renderers[r.name]=function(...l){let a=r.renderer.apply(this,l);return a===!1&&(a=o.apply(this,l)),a}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),i.renderer){const r=this.defaults.renderer||new Ks(this.defaults);for(const o in i.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;const l=o,a=i.renderer[l],d=r[l];r[l]=(...c)=>{let u=a.apply(r,c);return u===!1&&(u=d.apply(r,c)),u||""}}s.renderer=r}if(i.tokenizer){const r=this.defaults.tokenizer||new Js(this.defaults);for(const o in i.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const l=o,a=i.tokenizer[l],d=r[l];r[l]=(...c)=>{let u=a.apply(r,c);return u===!1&&(u=d.apply(r,c)),u}}s.tokenizer=r}if(i.hooks){const r=this.defaults.hooks||new Gi;for(const o in i.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;const l=o,a=i.hooks[l],d=r[l];Gi.passThroughHooks.has(o)?r[l]=c=>{if(this.defaults.async)return Promise.resolve(a.call(r,c)).then(g=>d.call(r,g));const u=a.call(r,c);return d.call(r,u)}:r[l]=(...c)=>{let u=a.apply(r,c);return u===!1&&(u=d.apply(r,c)),u}}s.hooks=r}if(i.walkTokens){const r=this.defaults.walkTokens,o=i.walkTokens;s.walkTokens=function(l){let a=[];return a.push(o.call(this,l)),r&&(a=a.concat(r.call(this,l))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return xt.lex(e,t??this.defaults)}parser(e,t){return vt.parse(e,t??this.defaults)}parseMarkdown(e){return(i,s)=>{const r={...s},o={...this.defaults,...r},l=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));o.hooks&&(o.hooks.options=o,o.hooks.block=e);const a=o.hooks?o.hooks.provideLexer():e?xt.lex:xt.lexInline,d=o.hooks?o.hooks.provideParser():e?vt.parse:vt.parseInline;if(o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(c=>a(c,o)).then(c=>o.hooks?o.hooks.processAllTokens(c):c).then(c=>o.walkTokens?Promise.all(this.walkTokens(c,o.walkTokens)).then(()=>c):c).then(c=>d(c,o)).then(c=>o.hooks?o.hooks.postprocess(c):c).catch(l);try{o.hooks&&(i=o.hooks.preprocess(i));let c=a(i,o);o.hooks&&(c=o.hooks.processAllTokens(c)),o.walkTokens&&this.walkTokens(c,o.walkTokens);let u=d(c,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(c){return l(c)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+Mt(i.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(i);throw i}}}const Dn=new vy;function se(n,e){return Dn.parse(n,e)}se.options=se.setOptions=function(n){return Dn.setOptions(n),se.defaults=Dn.defaults,Jd(se.defaults),se};se.getDefaults=ll;se.defaults=Bn;se.use=function(...n){return Dn.use(...n),se.defaults=Dn.defaults,Jd(se.defaults),se};se.walkTokens=function(n,e){return Dn.walkTokens(n,e)};se.parseInline=Dn.parseInline;se.Parser=vt;se.parser=vt.parse;se.Renderer=Ks;se.TextRenderer=pl;se.Lexer=xt;se.lexer=xt.lex;se.Tokenizer=Js;se.Hooks=Gi;se.parse=se;se.options;se.setOptions;se.use;se.walkTokens;se.parseInline;vt.parse;xt.lex;/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */const{entries:cu,setPrototypeOf:Ha,isFrozen:wy,getPrototypeOf:ky,getOwnPropertyDescriptor:Cy}=Object;let{freeze:nt,seal:Ct,create:du}=Object,{apply:Co,construct:To}=typeof Reflect<"u"&&Reflect;nt||(nt=function(e){return e});Ct||(Ct=function(e){return e});Co||(Co=function(e,t,i){return e.apply(t,i)});To||(To=function(e,t){return new e(...t)});const As=it(Array.prototype.forEach),Ty=it(Array.prototype.lastIndexOf),za=it(Array.prototype.pop),_i=it(Array.prototype.push),$y=it(Array.prototype.splice),Bs=it(String.prototype.toLowerCase),Qr=it(String.prototype.toString),Va=it(String.prototype.match),Ii=it(String.prototype.replace),Sy=it(String.prototype.indexOf),Ay=it(String.prototype.trim),St=it(Object.prototype.hasOwnProperty),Ge=it(RegExp.prototype.test),Ei=_y(TypeError);function it(n){return function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return Co(n,e,i)}}function _y(n){return function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return To(n,t)}}function G(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Bs;Ha&&Ha(n,null);let i=e.length;for(;i--;){let s=e[i];if(typeof s=="string"){const r=t(s);r!==s&&(wy(e)||(e[i]=r),s=r)}n[s]=!0}return n}function Iy(n){for(let e=0;e<n.length;e++)St(n,e)||(n[e]=null);return n}function An(n){const e=du(null);for(const[t,i]of cu(n))St(n,t)&&(Array.isArray(i)?e[t]=Iy(i):i&&typeof i=="object"&&i.constructor===Object?e[t]=An(i):e[t]=i);return e}function Ri(n,e){for(;n!==null;){const i=Cy(n,e);if(i){if(i.get)return it(i.get);if(typeof i.value=="function")return it(i.value)}n=ky(n)}function t(){return null}return t}const Ua=nt(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Zr=nt(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xr=nt(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ey=nt(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Jr=nt(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ry=nt(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ja=nt(["#text"]),qa=nt(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Kr=nt(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ga=nt(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),_s=nt(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Oy=Ct(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Dy=Ct(/<%[\w\W]*|[\w\W]*%>/gm),Py=Ct(/\$\{[\w\W]*/gm),Ly=Ct(/^data-[\-\w.\u00B7-\uFFFF]+$/),My=Ct(/^aria-[\-\w]+$/),uu=Ct(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Fy=Ct(/^(?:\w+script|data):/i),By=Ct(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),hu=Ct(/^html$/i),Ny=Ct(/^[a-z][.\w]*(-[.\w]+)+$/i);var Wa=Object.freeze({__proto__:null,ARIA_ATTR:My,ATTR_WHITESPACE:By,CUSTOM_ELEMENT:Ny,DATA_ATTR:Ly,DOCTYPE_NAME:hu,ERB_EXPR:Dy,IS_ALLOWED_URI:uu,IS_SCRIPT_OR_DATA:Fy,MUSTACHE_EXPR:Oy,TMPLIT_EXPR:Py});const Oi={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Hy=function(){return typeof window>"u"?null:window},zy=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(i=t.getAttribute(s));const r="dompurify"+(i?"#"+i:"");try{return e.createPolicy(r,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},Ya=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function fu(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Hy();const e=M=>fu(M);if(e.version="3.2.4",e.removed=[],!n||!n.document||n.document.nodeType!==Oi.document||!n.Element)return e.isSupported=!1,e;let{document:t}=n;const i=t,s=i.currentScript,{DocumentFragment:r,HTMLTemplateElement:o,Node:l,Element:a,NodeFilter:d,NamedNodeMap:c=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:u,DOMParser:g,trustedTypes:b}=n,$=a.prototype,_=Ri($,"cloneNode"),z=Ri($,"remove"),j=Ri($,"nextSibling"),q=Ri($,"childNodes"),Z=Ri($,"parentNode");if(typeof o=="function"){const M=t.createElement("template");M.content&&M.content.ownerDocument&&(t=M.content.ownerDocument)}let R,K="";const{implementation:ye,createNodeIterator:Re,createDocumentFragment:Oe,getElementsByTagName:Nn}=t,{importNode:Vt}=i;let xe=Ya();e.isSupported=typeof cu=="function"&&typeof Z=="function"&&ye&&ye.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:tn,ERB_EXPR:nn,TMPLIT_EXPR:wn,DATA_ATTR:hs,ARIA_ATTR:_e,IS_SCRIPT_OR_DATA:de,ATTR_WHITESPACE:ne,CUSTOM_ELEMENT:Ut}=Wa;let{IS_ALLOWED_URI:kn}=Wa,ae=null;const dt=G({},[...Ua,...Zr,...Xr,...Jr,...ja]);let ke=null;const fs=G({},[...qa,...Kr,...Ga,..._s]);let pe=Object.seal(du(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$t=null,sn=null,Hn=!0,zn=!0,rn=!1,vr=!0,h=!1,f=!0,y=!1,k=!1,x=!1,w=!1,I=!1,S=!1,A=!0,C=!1;const B="user-content-";let E=!0,L=!1,F={},U=null;const ie=G({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let X=null;const De=G({},["audio","video","img","source","image","track"]);let $e=null;const ut=G({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),je="http://www.w3.org/1998/Math/MathML",Ot="http://www.w3.org/2000/svg",mt="http://www.w3.org/1999/xhtml";let Ce=mt,rt=!1,Vn=null;const bu=G({},[je,Ot,mt],Qr);let ps=G({},["mi","mo","mn","ms","mtext"]),gs=G({},["annotation-xml"]);const yu=G({},["title","style","font","a","script"]);let bi=null;const xu=["application/xhtml+xml","text/html"],vu="text/html";let Se=null,Un=null;const wu=t.createElement("form"),gl=function(p){return p instanceof RegExp||p instanceof Function},wr=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Un&&Un===p)){if((!p||typeof p!="object")&&(p={}),p=An(p),bi=xu.indexOf(p.PARSER_MEDIA_TYPE)===-1?vu:p.PARSER_MEDIA_TYPE,Se=bi==="application/xhtml+xml"?Qr:Bs,ae=St(p,"ALLOWED_TAGS")?G({},p.ALLOWED_TAGS,Se):dt,ke=St(p,"ALLOWED_ATTR")?G({},p.ALLOWED_ATTR,Se):fs,Vn=St(p,"ALLOWED_NAMESPACES")?G({},p.ALLOWED_NAMESPACES,Qr):bu,$e=St(p,"ADD_URI_SAFE_ATTR")?G(An(ut),p.ADD_URI_SAFE_ATTR,Se):ut,X=St(p,"ADD_DATA_URI_TAGS")?G(An(De),p.ADD_DATA_URI_TAGS,Se):De,U=St(p,"FORBID_CONTENTS")?G({},p.FORBID_CONTENTS,Se):ie,$t=St(p,"FORBID_TAGS")?G({},p.FORBID_TAGS,Se):{},sn=St(p,"FORBID_ATTR")?G({},p.FORBID_ATTR,Se):{},F=St(p,"USE_PROFILES")?p.USE_PROFILES:!1,Hn=p.ALLOW_ARIA_ATTR!==!1,zn=p.ALLOW_DATA_ATTR!==!1,rn=p.ALLOW_UNKNOWN_PROTOCOLS||!1,vr=p.ALLOW_SELF_CLOSE_IN_ATTR!==!1,h=p.SAFE_FOR_TEMPLATES||!1,f=p.SAFE_FOR_XML!==!1,y=p.WHOLE_DOCUMENT||!1,w=p.RETURN_DOM||!1,I=p.RETURN_DOM_FRAGMENT||!1,S=p.RETURN_TRUSTED_TYPE||!1,x=p.FORCE_BODY||!1,A=p.SANITIZE_DOM!==!1,C=p.SANITIZE_NAMED_PROPS||!1,E=p.KEEP_CONTENT!==!1,L=p.IN_PLACE||!1,kn=p.ALLOWED_URI_REGEXP||uu,Ce=p.NAMESPACE||mt,ps=p.MATHML_TEXT_INTEGRATION_POINTS||ps,gs=p.HTML_INTEGRATION_POINTS||gs,pe=p.CUSTOM_ELEMENT_HANDLING||{},p.CUSTOM_ELEMENT_HANDLING&&gl(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(pe.tagNameCheck=p.CUSTOM_ELEMENT_HANDLING.tagNameCheck),p.CUSTOM_ELEMENT_HANDLING&&gl(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(pe.attributeNameCheck=p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),p.CUSTOM_ELEMENT_HANDLING&&typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(pe.allowCustomizedBuiltInElements=p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),h&&(zn=!1),I&&(w=!0),F&&(ae=G({},ja),ke=[],F.html===!0&&(G(ae,Ua),G(ke,qa)),F.svg===!0&&(G(ae,Zr),G(ke,Kr),G(ke,_s)),F.svgFilters===!0&&(G(ae,Xr),G(ke,Kr),G(ke,_s)),F.mathMl===!0&&(G(ae,Jr),G(ke,Ga),G(ke,_s))),p.ADD_TAGS&&(ae===dt&&(ae=An(ae)),G(ae,p.ADD_TAGS,Se)),p.ADD_ATTR&&(ke===fs&&(ke=An(ke)),G(ke,p.ADD_ATTR,Se)),p.ADD_URI_SAFE_ATTR&&G($e,p.ADD_URI_SAFE_ATTR,Se),p.FORBID_CONTENTS&&(U===ie&&(U=An(U)),G(U,p.FORBID_CONTENTS,Se)),E&&(ae["#text"]=!0),y&&G(ae,["html","head","body"]),ae.table&&(G(ae,["tbody"]),delete $t.tbody),p.TRUSTED_TYPES_POLICY){if(typeof p.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ei('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof p.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ei('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');R=p.TRUSTED_TYPES_POLICY,K=R.createHTML("")}else R===void 0&&(R=zy(b,s)),R!==null&&typeof K=="string"&&(K=R.createHTML(""));nt&&nt(p),Un=p}},ml=G({},[...Zr,...Xr,...Ey]),bl=G({},[...Jr,...Ry]),ku=function(p){let T=Z(p);(!T||!T.tagName)&&(T={namespaceURI:Ce,tagName:"template"});const P=Bs(p.tagName),ue=Bs(T.tagName);return Vn[p.namespaceURI]?p.namespaceURI===Ot?T.namespaceURI===mt?P==="svg":T.namespaceURI===je?P==="svg"&&(ue==="annotation-xml"||ps[ue]):!!ml[P]:p.namespaceURI===je?T.namespaceURI===mt?P==="math":T.namespaceURI===Ot?P==="math"&&gs[ue]:!!bl[P]:p.namespaceURI===mt?T.namespaceURI===Ot&&!gs[ue]||T.namespaceURI===je&&!ps[ue]?!1:!bl[P]&&(yu[P]||!ml[P]):!!(bi==="application/xhtml+xml"&&Vn[p.namespaceURI]):!1},Dt=function(p){_i(e.removed,{element:p});try{Z(p).removeChild(p)}catch{z(p)}},ms=function(p,T){try{_i(e.removed,{attribute:T.getAttributeNode(p),from:T})}catch{_i(e.removed,{attribute:null,from:T})}if(T.removeAttribute(p),p==="is")if(w||I)try{Dt(T)}catch{}else try{T.setAttribute(p,"")}catch{}},yl=function(p){let T=null,P=null;if(x)p="<remove></remove>"+p;else{const Ie=Va(p,/^[\r\n\t ]+/);P=Ie&&Ie[0]}bi==="application/xhtml+xml"&&Ce===mt&&(p='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+p+"</body></html>");const ue=R?R.createHTML(p):p;if(Ce===mt)try{T=new g().parseFromString(ue,bi)}catch{}if(!T||!T.documentElement){T=ye.createDocument(Ce,"template",null);try{T.documentElement.innerHTML=rt?K:ue}catch{}}const Pe=T.body||T.documentElement;return p&&P&&Pe.insertBefore(t.createTextNode(P),Pe.childNodes[0]||null),Ce===mt?Nn.call(T,y?"html":"body")[0]:y?T.documentElement:Pe},xl=function(p){return Re.call(p.ownerDocument||p,p,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},kr=function(p){return p instanceof u&&(typeof p.nodeName!="string"||typeof p.textContent!="string"||typeof p.removeChild!="function"||!(p.attributes instanceof c)||typeof p.removeAttribute!="function"||typeof p.setAttribute!="function"||typeof p.namespaceURI!="string"||typeof p.insertBefore!="function"||typeof p.hasChildNodes!="function")},vl=function(p){return typeof l=="function"&&p instanceof l};function jt(M,p,T){As(M,P=>{P.call(e,p,T,Un)})}const wl=function(p){let T=null;if(jt(xe.beforeSanitizeElements,p,null),kr(p))return Dt(p),!0;const P=Se(p.nodeName);if(jt(xe.uponSanitizeElement,p,{tagName:P,allowedTags:ae}),p.hasChildNodes()&&!vl(p.firstElementChild)&&Ge(/<[/\w]/g,p.innerHTML)&&Ge(/<[/\w]/g,p.textContent)||p.nodeType===Oi.progressingInstruction||f&&p.nodeType===Oi.comment&&Ge(/<[/\w]/g,p.data))return Dt(p),!0;if(!ae[P]||$t[P]){if(!$t[P]&&Cl(P)&&(pe.tagNameCheck instanceof RegExp&&Ge(pe.tagNameCheck,P)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(P)))return!1;if(E&&!U[P]){const ue=Z(p)||p.parentNode,Pe=q(p)||p.childNodes;if(Pe&&ue){const Ie=Pe.length;for(let ot=Ie-1;ot>=0;--ot){const Pt=_(Pe[ot],!0);Pt.__removalCount=(p.__removalCount||0)+1,ue.insertBefore(Pt,j(p))}}}return Dt(p),!0}return p instanceof a&&!ku(p)||(P==="noscript"||P==="noembed"||P==="noframes")&&Ge(/<\/no(script|embed|frames)/i,p.innerHTML)?(Dt(p),!0):(h&&p.nodeType===Oi.text&&(T=p.textContent,As([tn,nn,wn],ue=>{T=Ii(T,ue," ")}),p.textContent!==T&&(_i(e.removed,{element:p.cloneNode()}),p.textContent=T)),jt(xe.afterSanitizeElements,p,null),!1)},kl=function(p,T,P){if(A&&(T==="id"||T==="name")&&(P in t||P in wu))return!1;if(!(zn&&!sn[T]&&Ge(hs,T))){if(!(Hn&&Ge(_e,T))){if(!ke[T]||sn[T]){if(!(Cl(p)&&(pe.tagNameCheck instanceof RegExp&&Ge(pe.tagNameCheck,p)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(p))&&(pe.attributeNameCheck instanceof RegExp&&Ge(pe.attributeNameCheck,T)||pe.attributeNameCheck instanceof Function&&pe.attributeNameCheck(T))||T==="is"&&pe.allowCustomizedBuiltInElements&&(pe.tagNameCheck instanceof RegExp&&Ge(pe.tagNameCheck,P)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(P))))return!1}else if(!$e[T]){if(!Ge(kn,Ii(P,ne,""))){if(!((T==="src"||T==="xlink:href"||T==="href")&&p!=="script"&&Sy(P,"data:")===0&&X[p])){if(!(rn&&!Ge(de,Ii(P,ne,"")))){if(P)return!1}}}}}}return!0},Cl=function(p){return p!=="annotation-xml"&&Va(p,Ut)},Tl=function(p){jt(xe.beforeSanitizeAttributes,p,null);const{attributes:T}=p;if(!T||kr(p))return;const P={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke,forceKeepAttr:void 0};let ue=T.length;for(;ue--;){const Pe=T[ue],{name:Ie,namespaceURI:ot,value:Pt}=Pe,yi=Se(Ie);let qe=Ie==="value"?Pt:Ay(Pt);if(P.attrName=yi,P.attrValue=qe,P.keepAttr=!0,P.forceKeepAttr=void 0,jt(xe.uponSanitizeAttribute,p,P),qe=P.attrValue,C&&(yi==="id"||yi==="name")&&(ms(Ie,p),qe=B+qe),f&&Ge(/((--!?|])>)|<\/(style|title)/i,qe)){ms(Ie,p);continue}if(P.forceKeepAttr||(ms(Ie,p),!P.keepAttr))continue;if(!vr&&Ge(/\/>/i,qe)){ms(Ie,p);continue}h&&As([tn,nn,wn],Sl=>{qe=Ii(qe,Sl," ")});const $l=Se(p.nodeName);if(kl($l,yi,qe)){if(R&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!ot)switch(b.getAttributeType($l,yi)){case"TrustedHTML":{qe=R.createHTML(qe);break}case"TrustedScriptURL":{qe=R.createScriptURL(qe);break}}try{ot?p.setAttributeNS(ot,Ie,qe):p.setAttribute(Ie,qe),kr(p)?Dt(p):za(e.removed)}catch{}}}jt(xe.afterSanitizeAttributes,p,null)},Cu=function M(p){let T=null;const P=xl(p);for(jt(xe.beforeSanitizeShadowDOM,p,null);T=P.nextNode();)jt(xe.uponSanitizeShadowNode,T,null),wl(T),Tl(T),T.content instanceof r&&M(T.content);jt(xe.afterSanitizeShadowDOM,p,null)};return e.sanitize=function(M){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=null,P=null,ue=null,Pe=null;if(rt=!M,rt&&(M="<!-->"),typeof M!="string"&&!vl(M))if(typeof M.toString=="function"){if(M=M.toString(),typeof M!="string")throw Ei("dirty is not a string, aborting")}else throw Ei("toString is not a function");if(!e.isSupported)return M;if(k||wr(p),e.removed=[],typeof M=="string"&&(L=!1),L){if(M.nodeName){const Pt=Se(M.nodeName);if(!ae[Pt]||$t[Pt])throw Ei("root node is forbidden and cannot be sanitized in-place")}}else if(M instanceof l)T=yl("<!---->"),P=T.ownerDocument.importNode(M,!0),P.nodeType===Oi.element&&P.nodeName==="BODY"||P.nodeName==="HTML"?T=P:T.appendChild(P);else{if(!w&&!h&&!y&&M.indexOf("<")===-1)return R&&S?R.createHTML(M):M;if(T=yl(M),!T)return w?null:S?K:""}T&&x&&Dt(T.firstChild);const Ie=xl(L?M:T);for(;ue=Ie.nextNode();)wl(ue),Tl(ue),ue.content instanceof r&&Cu(ue.content);if(L)return M;if(w){if(I)for(Pe=Oe.call(T.ownerDocument);T.firstChild;)Pe.appendChild(T.firstChild);else Pe=T;return(ke.shadowroot||ke.shadowrootmode)&&(Pe=Vt.call(i,Pe,!0)),Pe}let ot=y?T.outerHTML:T.innerHTML;return y&&ae["!doctype"]&&T.ownerDocument&&T.ownerDocument.doctype&&T.ownerDocument.doctype.name&&Ge(hu,T.ownerDocument.doctype.name)&&(ot="<!DOCTYPE "+T.ownerDocument.doctype.name+`>
`+ot),h&&As([tn,nn,wn],Pt=>{ot=Ii(ot,Pt," ")}),R&&S?R.createHTML(ot):ot},e.setConfig=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};wr(M),k=!0},e.clearConfig=function(){Un=null,k=!1},e.isValidAttribute=function(M,p,T){Un||wr({});const P=Se(M),ue=Se(p);return kl(P,ue,T)},e.addHook=function(M,p){typeof p=="function"&&_i(xe[M],p)},e.removeHook=function(M,p){if(p!==void 0){const T=Ty(xe[M],p);return T===-1?void 0:$y(xe[M],T,1)[0]}return za(xe[M])},e.removeHooks=function(M){xe[M]=[]},e.removeAllHooks=function(){xe=Ya()},e}var Vy=fu();const Ee=[];for(let n=0;n<256;++n)Ee.push((n+256).toString(16).slice(1));function Uy(n,e=0){return(Ee[n[e+0]]+Ee[n[e+1]]+Ee[n[e+2]]+Ee[n[e+3]]+"-"+Ee[n[e+4]]+Ee[n[e+5]]+"-"+Ee[n[e+6]]+Ee[n[e+7]]+"-"+Ee[n[e+8]]+Ee[n[e+9]]+"-"+Ee[n[e+10]]+Ee[n[e+11]]+Ee[n[e+12]]+Ee[n[e+13]]+Ee[n[e+14]]+Ee[n[e+15]]).toLowerCase()}let eo;const jy=new Uint8Array(16);function qy(){if(!eo){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");eo=crypto.getRandomValues.bind(crypto)}return eo(jy)}const Gy=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Qa={randomUUID:Gy};function Za(n,e,t){var s;if(Qa.randomUUID&&!n)return Qa.randomUUID();n=n||{};const i=n.random??((s=n.rng)==null?void 0:s.call(n))??qy();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,Uy(i)}const Xa="JDSAI";class Wy{constructor(){oe(this,"vsCodeApi");typeof acquireVsCodeApi=="function"&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e){this.vsCodeApi?this.vsCodeApi.postMessage(e):console.log(e)}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState()??[];{const e=localStorage.getItem(Xa)??"[]";return console.log({getState:e}),e?JSON.parse(e):void 0}}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem(Xa,JSON.stringify(e)),console.log({setState:e}),e)}}const pu=new Wy,Yy={class:"mb-0 text-xs under opacity-80"},Qy=["innerHTML"],Zy={class:"mt-1 mb-0 text-xs text-right text-white/50"},Xy={class:"align-middle"},Jy=zo({__name:"ChatMessage",props:{message:{}},setup(n){return(e,t)=>(Hi(),qs("div",{class:Jn(["flex gap-2 mb-2",e.message.isAi?"":"justify-end"])},[ft("div",{class:Jn(["relative px-5 py-3 text-white rounded-lg ltr:rounded-bl-none rtl:rounded-br-none",e.message.isAi?"bg-violet-700":"bg-sky-700"])},[ft("p",Yy,io(e.message.isAi?"AI":"You"),1),ft("div",{class:"mb-0 markdown",innerHTML:e.message.content},null,8,Qy),ft("p",Zy,[t[0]||(t[0]=ft("i",{class:"align-middle ri-time-line"},null,-1)),ft("span",Xy,io(new Date(e.message.date).toLocaleString()),1)]),ft("div",{class:Jn(["before:content-[''] before:absolute before:border-[5px] before:border-transparent ltr:before:left-0 rtl:before:right-0 before:-bottom-2",e.message.isAi?"border-l-violet-500 border-t-violet-500":"border-l-sky-500 border-t-sky-500"])},null,2)],2)],2))}});function Ky(n){return ac()?(Bu(n),!0):!1}const gu=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ex=Object.prototype.toString,tx=n=>ex.call(n)==="[object Object]";function to(n){return Array.isArray(n)?n:[n]}function nx(n,e,t){return Os(n,e,{...t,immediate:!0})}const ix=gu?window:void 0,sx=gu?window.document:void 0;function rx(n){var e;const t=Es(n);return(e=t==null?void 0:t.$el)!=null?e:t}function ox(...n){const e=[],t=()=>{e.forEach(l=>l()),e.length=0},i=(l,a,d,c)=>(l.addEventListener(a,d,c),()=>l.removeEventListener(a,d,c)),s=rd(()=>{const l=to(Es(n[0])).filter(a=>a!=null);return l.every(a=>typeof a!="string")?l:void 0}),r=nx(()=>{var l,a;return[(a=(l=s.value)==null?void 0:l.map(d=>rx(d)))!=null?a:[ix].filter(d=>d!=null),to(Es(s.value?n[1]:n[0])),to(Bo(s.value?n[2]:n[1])),Es(s.value?n[3]:n[2])]},([l,a,d,c])=>{if(t(),!(l!=null&&l.length)||!(a!=null&&a.length)||!(d!=null&&d.length))return;const u=tx(c)?{...c}:c;e.push(...l.flatMap(g=>a.flatMap(b=>d.map($=>i(g,b,$,u)))))},{flush:"post"}),o=()=>{r(),t()};return Ky(t),o}const lx=["mousedown","mouseup","keydown","keyup"];function ax(n,e={}){const{events:t=lx,document:i=sx,initial:s=null}=e,r=Ns(s);return i&&t.forEach(o=>{ox(i,o,l=>{typeof l.getModifierState=="function"&&(r.value=l.getModifierState(n))},{passive:!0})}),r}const cx={class:"p-4 gap-y-2 grid grid-cols-1"},dx={class:"grid grid-cols-1 gap-2 border py-1 px-2 rounded min-h-5 bg-gray-800/50"},ux=zo({__name:"ChatView",setup(n){const e=ax("Control"),t=Ns("Write an example text in markdown."),i=Ns([]),s=async c=>({id:Za(),isAi:!1,content:await a(c),date:new Date().toISOString()}),r=async(c,u)=>({id:u??Za(),isAi:!0,content:await a(c),date:new Date().toISOString()}),o=async()=>{const c=t.value;if((c==null?void 0:c.length)<2)return;pu.postMessage({command:"chat",text:c});const u=await s(c);i.value.push(u)},l=()=>{e.value&&o()},a=async c=>Vy.sanitize(await se.parse(c)),d=async(c,u)=>{const g=i.value.find(b=>b.id===u);if(g)g.content=c;else{const b=await r(c,u);i.value.push(b)}};return window.addEventListener("message",c=>{const{command:u,id:g,text:b}=c.data;u==="chatResponse"&&d(b,g)}),(c,u)=>(Hi(),qs("div",cx,[u[3]||(u[3]=ft("h2",{class:"text-lg font-bold"},"Deep Seek",-1)),mh(ft("textarea",{"onUpdate:modelValue":u[0]||(u[0]=g=>t.value=g),rows:"3",placeholder:"Ask something...",class:"border p-1 rounded w-full bg-gray-800/50",onKeydown:u[1]||(u[1]=qf(g=>l(),["enter"]))},null,544),[[Uf,t.value]]),ft("vscode-button",{onClick:u[2]||(u[2]=g=>o())},"Ask question"),ft("div",dx,[(Hi(!0),qs(Bt,null,Rh(i.value,g=>(Hi(),cf(Jy,{key:g.id,message:g},null,8,["message"]))),128))])]))}}),hx=zo({__name:"App",setup(n){return am().register(Nb),Pc(()=>{pu.postMessage({command:"ready"})}),(e,t)=>(Hi(),qs("main",null,[Xt(ux)]))}}),mu=Yf(hx);mu.use(Jf());mu.mount("#app");
