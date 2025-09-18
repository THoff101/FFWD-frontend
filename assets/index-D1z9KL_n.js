function Uw(t,n){for(var a=0;a<n.length;a++){const s=n[a];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in t)){const d=Object.getOwnPropertyDescriptor(s,c);d&&Object.defineProperty(t,c,d.get?d:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=a(c);fetch(c.href,d)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gd={exports:{}},Wi={},Jd={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function Vw(){if(Vh)return Te;Vh=1;var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=w&&E[w]||E["@@iterator"],typeof E=="function"?E:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,k={};function P(E,B,X){this.props=E,this.context=B,this.refs=k,this.updater=X||j}P.prototype.isReactComponent={},P.prototype.setState=function(E,B){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,B,"setState")},P.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function I(){}I.prototype=P.prototype;function C(E,B,X){this.props=E,this.context=B,this.refs=k,this.updater=X||j}var N=C.prototype=new I;N.constructor=C,T(N,P.prototype),N.isPureReactComponent=!0;var D=Array.isArray,H=Object.prototype.hasOwnProperty,W={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function F(E,B,X){var te,ve={},we=null,G=null;if(B!=null)for(te in B.ref!==void 0&&(G=B.ref),B.key!==void 0&&(we=""+B.key),B)H.call(B,te)&&!O.hasOwnProperty(te)&&(ve[te]=B[te]);var ce=arguments.length-2;if(ce===1)ve.children=X;else if(1<ce){for(var pe=Array(ce),Ce=0;Ce<ce;Ce++)pe[Ce]=arguments[Ce+2];ve.children=pe}if(E&&E.defaultProps)for(te in ce=E.defaultProps,ce)ve[te]===void 0&&(ve[te]=ce[te]);return{$$typeof:t,type:E,key:we,ref:G,props:ve,_owner:W.current}}function Q(E,B){return{$$typeof:t,type:E.type,key:B,ref:E.ref,props:E.props,_owner:E._owner}}function ae(E){return typeof E=="object"&&E!==null&&E.$$typeof===t}function xe(E){var B={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(X){return B[X]})}var fe=/\/+/g;function ye(E,B){return typeof E=="object"&&E!==null&&E.key!=null?xe(""+E.key):B.toString(36)}function me(E,B,X,te,ve){var we=typeof E;(we==="undefined"||we==="boolean")&&(E=null);var G=!1;if(E===null)G=!0;else switch(we){case"string":case"number":G=!0;break;case"object":switch(E.$$typeof){case t:case n:G=!0}}if(G)return G=E,ve=ve(G),E=te===""?"."+ye(G,0):te,D(ve)?(X="",E!=null&&(X=E.replace(fe,"$&/")+"/"),me(ve,B,X,"",function(Ce){return Ce})):ve!=null&&(ae(ve)&&(ve=Q(ve,X+(!ve.key||G&&G.key===ve.key?"":(""+ve.key).replace(fe,"$&/")+"/")+E)),B.push(ve)),1;if(G=0,te=te===""?".":te+":",D(E))for(var ce=0;ce<E.length;ce++){we=E[ce];var pe=te+ye(we,ce);G+=me(we,B,X,pe,ve)}else if(pe=S(E),typeof pe=="function")for(E=pe.call(E),ce=0;!(we=E.next()).done;)we=we.value,pe=te+ye(we,ce++),G+=me(we,B,X,pe,ve);else if(we==="object")throw B=String(E),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return G}function Se(E,B,X){if(E==null)return E;var te=[],ve=0;return me(E,te,"","",function(we){return B.call(X,we,ve++)}),te}function se(E){if(E._status===-1){var B=E._result;B=B(),B.then(function(X){(E._status===0||E._status===-1)&&(E._status=1,E._result=X)},function(X){(E._status===0||E._status===-1)&&(E._status=2,E._result=X)}),E._status===-1&&(E._status=0,E._result=B)}if(E._status===1)return E._result.default;throw E._result}var ee={current:null},$={transition:null},K={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:$,ReactCurrentOwner:W};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Te.Children={map:Se,forEach:function(E,B,X){Se(E,function(){B.apply(this,arguments)},X)},count:function(E){var B=0;return Se(E,function(){B++}),B},toArray:function(E){return Se(E,function(B){return B})||[]},only:function(E){if(!ae(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Te.Component=P,Te.Fragment=a,Te.Profiler=c,Te.PureComponent=C,Te.StrictMode=s,Te.Suspense=g,Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Te.act=Y,Te.cloneElement=function(E,B,X){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var te=T({},E.props),ve=E.key,we=E.ref,G=E._owner;if(B!=null){if(B.ref!==void 0&&(we=B.ref,G=W.current),B.key!==void 0&&(ve=""+B.key),E.type&&E.type.defaultProps)var ce=E.type.defaultProps;for(pe in B)H.call(B,pe)&&!O.hasOwnProperty(pe)&&(te[pe]=B[pe]===void 0&&ce!==void 0?ce[pe]:B[pe])}var pe=arguments.length-2;if(pe===1)te.children=X;else if(1<pe){ce=Array(pe);for(var Ce=0;Ce<pe;Ce++)ce[Ce]=arguments[Ce+2];te.children=ce}return{$$typeof:t,type:E.type,key:ve,ref:we,props:te,_owner:G}},Te.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:d,_context:E},E.Consumer=E},Te.createElement=F,Te.createFactory=function(E){var B=F.bind(null,E);return B.type=E,B},Te.createRef=function(){return{current:null}},Te.forwardRef=function(E){return{$$typeof:p,render:E}},Te.isValidElement=ae,Te.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:se}},Te.memo=function(E,B){return{$$typeof:x,type:E,compare:B===void 0?null:B}},Te.startTransition=function(E){var B=$.transition;$.transition={};try{E()}finally{$.transition=B}},Te.unstable_act=Y,Te.useCallback=function(E,B){return ee.current.useCallback(E,B)},Te.useContext=function(E){return ee.current.useContext(E)},Te.useDebugValue=function(){},Te.useDeferredValue=function(E){return ee.current.useDeferredValue(E)},Te.useEffect=function(E,B){return ee.current.useEffect(E,B)},Te.useId=function(){return ee.current.useId()},Te.useImperativeHandle=function(E,B,X){return ee.current.useImperativeHandle(E,B,X)},Te.useInsertionEffect=function(E,B){return ee.current.useInsertionEffect(E,B)},Te.useLayoutEffect=function(E,B){return ee.current.useLayoutEffect(E,B)},Te.useMemo=function(E,B){return ee.current.useMemo(E,B)},Te.useReducer=function(E,B,X){return ee.current.useReducer(E,B,X)},Te.useRef=function(E){return ee.current.useRef(E)},Te.useState=function(E){return ee.current.useState(E)},Te.useSyncExternalStore=function(E,B,X){return ee.current.useSyncExternalStore(E,B,X)},Te.useTransition=function(){return ee.current.useTransition()},Te.version="18.3.1",Te}var Gh;function cf(){return Gh||(Gh=1,Jd.exports=Vw()),Jd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Gw(){if(Jh)return Wi;Jh=1;var t=cf(),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(p,g,x){var v,w={},S=null,j=null;x!==void 0&&(S=""+x),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(j=g.ref);for(v in g)s.call(g,v)&&!d.hasOwnProperty(v)&&(w[v]=g[v]);if(p&&p.defaultProps)for(v in g=p.defaultProps,g)w[v]===void 0&&(w[v]=g[v]);return{$$typeof:n,type:p,key:S,ref:j,props:w,_owner:c.current}}return Wi.Fragment=a,Wi.jsx=f,Wi.jsxs=f,Wi}var Yh;function Jw(){return Yh||(Yh=1,Gd.exports=Gw()),Gd.exports}var o=Jw(),vs={},Yd={exports:{}},Nt={},Kd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function Yw(){return Kh||(Kh=1,(function(t){function n($,K){var Y=$.length;$.push(K);e:for(;0<Y;){var E=Y-1>>>1,B=$[E];if(0<c(B,K))$[E]=K,$[Y]=B,Y=E;else break e}}function a($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var K=$[0],Y=$.pop();if(Y!==K){$[0]=Y;e:for(var E=0,B=$.length,X=B>>>1;E<X;){var te=2*(E+1)-1,ve=$[te],we=te+1,G=$[we];if(0>c(ve,Y))we<B&&0>c(G,ve)?($[E]=G,$[we]=Y,E=we):($[E]=ve,$[te]=Y,E=te);else if(we<B&&0>c(G,Y))$[E]=G,$[we]=Y,E=we;else break e}}return K}function c($,K){var Y=$.sortIndex-K.sortIndex;return Y!==0?Y:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;t.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();t.unstable_now=function(){return f.now()-p}}var g=[],x=[],v=1,w=null,S=3,j=!1,T=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N($){for(var K=a(x);K!==null;){if(K.callback===null)s(x);else if(K.startTime<=$)s(x),K.sortIndex=K.expirationTime,n(g,K);else break;K=a(x)}}function D($){if(k=!1,N($),!T)if(a(g)!==null)T=!0,se(H);else{var K=a(x);K!==null&&ee(D,K.startTime-$)}}function H($,K){T=!1,k&&(k=!1,I(F),F=-1),j=!0;var Y=S;try{for(N(K),w=a(g);w!==null&&(!(w.expirationTime>K)||$&&!xe());){var E=w.callback;if(typeof E=="function"){w.callback=null,S=w.priorityLevel;var B=E(w.expirationTime<=K);K=t.unstable_now(),typeof B=="function"?w.callback=B:w===a(g)&&s(g),N(K)}else s(g);w=a(g)}if(w!==null)var X=!0;else{var te=a(x);te!==null&&ee(D,te.startTime-K),X=!1}return X}finally{w=null,S=Y,j=!1}}var W=!1,O=null,F=-1,Q=5,ae=-1;function xe(){return!(t.unstable_now()-ae<Q)}function fe(){if(O!==null){var $=t.unstable_now();ae=$;var K=!0;try{K=O(!0,$)}finally{K?ye():(W=!1,O=null)}}else W=!1}var ye;if(typeof C=="function")ye=function(){C(fe)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Se=me.port2;me.port1.onmessage=fe,ye=function(){Se.postMessage(null)}}else ye=function(){P(fe,0)};function se($){O=$,W||(W=!0,ye())}function ee($,K){F=P(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||j||(T=!0,se(H))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return a(g)},t.unstable_next=function($){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var Y=S;S=K;try{return $()}finally{S=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=S;S=$;try{return K()}finally{S=Y}},t.unstable_scheduleCallback=function($,K,Y){var E=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?E+Y:E):Y=E,$){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=Y+B,$={id:v++,callback:K,priorityLevel:$,startTime:Y,expirationTime:B,sortIndex:-1},Y>E?($.sortIndex=Y,n(x,$),a(g)===null&&$===a(x)&&(k?(I(F),F=-1):k=!0,ee(D,Y-E))):($.sortIndex=B,n(g,$),T||j||(T=!0,se(H))),$},t.unstable_shouldYield=xe,t.unstable_wrapCallback=function($){var K=S;return function(){var Y=S;S=K;try{return $.apply(this,arguments)}finally{S=Y}}}})(qd)),qd}var qh;function Kw(){return qh||(qh=1,Kd.exports=Yw()),Kd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function qw(){if(Qh)return Nt;Qh=1;var t=cf(),n=Kw();function a(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function d(e,r){f(e,r),f(e+"Capture",r)}function f(e,r){for(c[e]=r,e=0;e<r.length;e++)s.add(r[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function S(e){return g.call(w,e)?!0:g.call(v,e)?!1:x.test(e)?w[e]=!0:(v[e]=!0,!1)}function j(e,r,i,l){if(i!==null&&i.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,r,i,l){if(r===null||typeof r>"u"||j(e,r,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function k(e,r,i,l,u,h,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=r,this.sanitizeURL=h,this.removeEmptyString=b}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];P[r]=new k(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(I,C);P[r]=new k(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(I,C);P[r]=new k(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(I,C);P[r]=new k(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,r,i,l){var u=P.hasOwnProperty(r)?P[r]:null;(u!==null?u.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(T(r,i,u,l)&&(i=null),l||u===null?S(r)&&(i===null?e.removeAttribute(r):e.setAttribute(r,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(r=u.attributeName,l=u.attributeNamespace,i===null?e.removeAttribute(r):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,l?e.setAttributeNS(l,r,i):e.setAttribute(r,i))))}var D=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),W=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),xe=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),$=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,E;function B(e){if(E===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);E=r&&r[1]||""}return`
`+E+e}var X=!1;function te(e,r){if(!e||X)return"";X=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(M){var l=M}Reflect.construct(e,[],r)}else{try{r.call()}catch(M){l=M}e.call(r.prototype)}else{try{throw Error()}catch(M){l=M}e()}}catch(M){if(M&&l&&typeof M.stack=="string"){for(var u=M.stack.split(`
`),h=l.stack.split(`
`),b=u.length-1,R=h.length-1;1<=b&&0<=R&&u[b]!==h[R];)R--;for(;1<=b&&0<=R;b--,R--)if(u[b]!==h[R]){if(b!==1||R!==1)do if(b--,R--,0>R||u[b]!==h[R]){var A=`
`+u[b].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=b&&0<=R);break}}}finally{X=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?B(e):""}function ve(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function we(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case W:return"Portal";case Q:return"Profiler";case F:return"StrictMode";case ye:return"Suspense";case me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case ae:return(e._context.displayName||"Context")+".Provider";case fe:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Se:return r=e.displayName||null,r!==null?r:we(e.type)||"Memo";case se:r=e._payload,e=e._init;try{return we(e(r))}catch{}}return null}function G(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ce(e){var r=pe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,h=i.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return u.call(this)},set:function(b){l=""+b,h.call(this,b)}}),Object.defineProperty(e,r,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Re(e){e._valueTracker||(e._valueTracker=Ce(e))}function Ne(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var i=r.getValue(),l="";return e&&(l=pe(e)?e.checked?"true":"false":e.value),e=l,e!==i?(r.setValue(e),!0):!1}function ht(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zt(e,r){var i=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function ro(e,r){var i=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;i=ce(r.value!=null?r.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function no(e,r){r=r.checked,r!=null&&N(e,"checked",r,!1)}function Rn(e,r){no(e,r);var i=ce(r.value),l=r.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?tc(e,r.type,i):r.hasOwnProperty("defaultValue")&&tc(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function em(e,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,i||r===e.value||(e.value=r),e.defaultValue=r}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function tc(e,r,i){(r!=="number"||ht(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var oi=Array.isArray;function oo(e,r,i,l){if(e=e.options,r){r={};for(var u=0;u<i.length;u++)r["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=r.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&l&&(e[i].defaultSelected=!0)}else{for(i=""+ce(i),r=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}r!==null||e[u].disabled||(r=e[u])}r!==null&&(r.selected=!0)}}function rc(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(a(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tm(e,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(a(92));if(oi(i)){if(1<i.length)throw Error(a(93));i=i[0]}r=i}r==null&&(r=""),i=r}e._wrapperState={initialValue:ce(i)}}function rm(e,r){var i=ce(r.value),l=ce(r.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),r.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function nm(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function om(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nc(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?om(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ca,im=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,i,l,u){MSApp.execUnsafeLocalFunction(function(){return e(r,i,l,u)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function ii(e,r){if(r){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=r;return}}e.textContent=r}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yy=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(e){Yy.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),ai[r]=ai[e]})});function am(e,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||ai.hasOwnProperty(e)&&ai[e]?(""+r).trim():r+"px"}function sm(e,r){e=e.style;for(var i in r)if(r.hasOwnProperty(i)){var l=i.indexOf("--")===0,u=am(i,r[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,u):e[i]=u}}var Ky=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oc(e,r){if(r){if(Ky[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(a(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(a(61))}if(r.style!=null&&typeof r.style!="object")throw Error(a(62))}}function ic(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ac=null;function sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lc=null,io=null,ao=null;function lm(e){if(e=Ri(e)){if(typeof lc!="function")throw Error(a(280));var r=e.stateNode;r&&(r=Aa(r),lc(e.stateNode,e.type,r))}}function cm(e){io?ao?ao.push(e):ao=[e]:io=e}function dm(){if(io){var e=io,r=ao;if(ao=io=null,lm(e),r)for(e=0;e<r.length;e++)lm(r[e])}}function um(e,r){return e(r)}function fm(){}var cc=!1;function mm(e,r,i){if(cc)return e(r,i);cc=!0;try{return um(e,r,i)}finally{cc=!1,(io!==null||ao!==null)&&(fm(),dm())}}function si(e,r){var i=e.stateNode;if(i===null)return null;var l=Aa(i);if(l===null)return null;i=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(a(231,r,typeof i));return i}var dc=!1;if(p)try{var li={};Object.defineProperty(li,"passive",{get:function(){dc=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{dc=!1}function qy(e,r,i,l,u,h,b,R,A){var M=Array.prototype.slice.call(arguments,3);try{r.apply(i,M)}catch(V){this.onError(V)}}var ci=!1,da=null,ua=!1,uc=null,Qy={onError:function(e){ci=!0,da=e}};function Xy(e,r,i,l,u,h,b,R,A){ci=!1,da=null,qy.apply(Qy,arguments)}function Zy(e,r,i,l,u,h,b,R,A){if(Xy.apply(this,arguments),ci){if(ci){var M=da;ci=!1,da=null}else throw Error(a(198));ua||(ua=!0,uc=M)}}function Tn(e){var r=e,i=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(i=r.return),e=r.return;while(e)}return r.tag===3?i:null}function pm(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function hm(e){if(Tn(e)!==e)throw Error(a(188))}function e1(e){var r=e.alternate;if(!r){if(r=Tn(e),r===null)throw Error(a(188));return r!==e?null:e}for(var i=e,l=r;;){var u=i.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===i)return hm(u),e;if(h===l)return hm(u),r;h=h.sibling}throw Error(a(188))}if(i.return!==l.return)i=u,l=h;else{for(var b=!1,R=u.child;R;){if(R===i){b=!0,i=u,l=h;break}if(R===l){b=!0,l=u,i=h;break}R=R.sibling}if(!b){for(R=h.child;R;){if(R===i){b=!0,i=h,l=u;break}if(R===l){b=!0,l=h,i=u;break}R=R.sibling}if(!b)throw Error(a(189))}}if(i.alternate!==l)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?e:r}function gm(e){return e=e1(e),e!==null?vm(e):null}function vm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=vm(e);if(r!==null)return r;e=e.sibling}return null}var xm=n.unstable_scheduleCallback,ym=n.unstable_cancelCallback,t1=n.unstable_shouldYield,r1=n.unstable_requestPaint,et=n.unstable_now,n1=n.unstable_getCurrentPriorityLevel,fc=n.unstable_ImmediatePriority,wm=n.unstable_UserBlockingPriority,fa=n.unstable_NormalPriority,o1=n.unstable_LowPriority,bm=n.unstable_IdlePriority,ma=null,kr=null;function i1(e){if(kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(ma,e,void 0,(e.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:l1,a1=Math.log,s1=Math.LN2;function l1(e){return e>>>=0,e===0?32:31-(a1(e)/s1|0)|0}var pa=64,ha=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,r){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,h=e.pingedLanes,b=i&268435455;if(b!==0){var R=b&~u;R!==0?l=di(R):(h&=b,h!==0&&(l=di(h)))}else b=i&~u,b!==0?l=di(b):h!==0&&(l=di(h));if(l===0)return 0;if(r!==0&&r!==l&&(r&u)===0&&(u=l&-l,h=r&-r,u>=h||u===16&&(h&4194240)!==0))return r;if((l&4)!==0&&(l|=i&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=l;0<r;)i=31-er(r),u=1<<i,l|=e[i],r&=~u;return l}function c1(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d1(e,r){for(var i=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes;0<h;){var b=31-er(h),R=1<<b,A=u[b];A===-1?((R&i)===0||(R&l)!==0)&&(u[b]=c1(R,r)):A<=r&&(e.expiredLanes|=R),h&=~R}}function mc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cm(){var e=pa;return pa<<=1,(pa&4194240)===0&&(pa=64),e}function pc(e){for(var r=[],i=0;31>i;i++)r.push(e);return r}function ui(e,r,i){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-er(r),e[r]=i}function u1(e,r){var i=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-er(i),h=1<<u;r[u]=0,l[u]=-1,e[u]=-1,i&=~h}}function hc(e,r){var i=e.entangledLanes|=r;for(e=e.entanglements;i;){var l=31-er(i),u=1<<l;u&r|e[l]&r&&(e[l]|=r),i&=~u}}var Me=0;function km(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Sm,gc,jm,Em,Pm,vc=!1,va=[],Xr=null,Zr=null,en=null,fi=new Map,mi=new Map,tn=[],f1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rm(e,r){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":fi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(r.pointerId)}}function pi(e,r,i,l,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:r,domEventName:i,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},r!==null&&(r=Ri(r),r!==null&&gc(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),e)}function m1(e,r,i,l,u){switch(r){case"focusin":return Xr=pi(Xr,e,r,i,l,u),!0;case"dragenter":return Zr=pi(Zr,e,r,i,l,u),!0;case"mouseover":return en=pi(en,e,r,i,l,u),!0;case"pointerover":var h=u.pointerId;return fi.set(h,pi(fi.get(h)||null,e,r,i,l,u)),!0;case"gotpointercapture":return h=u.pointerId,mi.set(h,pi(mi.get(h)||null,e,r,i,l,u)),!0}return!1}function Tm(e){var r=Nn(e.target);if(r!==null){var i=Tn(r);if(i!==null){if(r=i.tag,r===13){if(r=pm(i),r!==null){e.blockedOn=r,Pm(e.priority,function(){jm(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var i=yc(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);ac=l,i.target.dispatchEvent(l),ac=null}else return r=Ri(i),r!==null&&gc(r),e.blockedOn=i,!1;r.shift()}return!0}function Nm(e,r,i){xa(e)&&i.delete(r)}function p1(){vc=!1,Xr!==null&&xa(Xr)&&(Xr=null),Zr!==null&&xa(Zr)&&(Zr=null),en!==null&&xa(en)&&(en=null),fi.forEach(Nm),mi.forEach(Nm)}function hi(e,r){e.blockedOn===r&&(e.blockedOn=null,vc||(vc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,p1)))}function gi(e){function r(u){return hi(u,e)}if(0<va.length){hi(va[0],e);for(var i=1;i<va.length;i++){var l=va[i];l.blockedOn===e&&(l.blockedOn=null)}}for(Xr!==null&&hi(Xr,e),Zr!==null&&hi(Zr,e),en!==null&&hi(en,e),fi.forEach(r),mi.forEach(r),i=0;i<tn.length;i++)l=tn[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<tn.length&&(i=tn[0],i.blockedOn===null);)Tm(i),i.blockedOn===null&&tn.shift()}var so=D.ReactCurrentBatchConfig,ya=!0;function h1(e,r,i,l){var u=Me,h=so.transition;so.transition=null;try{Me=1,xc(e,r,i,l)}finally{Me=u,so.transition=h}}function g1(e,r,i,l){var u=Me,h=so.transition;so.transition=null;try{Me=4,xc(e,r,i,l)}finally{Me=u,so.transition=h}}function xc(e,r,i,l){if(ya){var u=yc(e,r,i,l);if(u===null)zc(e,r,l,wa,i),Rm(e,l);else if(m1(u,e,r,i,l))l.stopPropagation();else if(Rm(e,l),r&4&&-1<f1.indexOf(e)){for(;u!==null;){var h=Ri(u);if(h!==null&&Sm(h),h=yc(e,r,i,l),h===null&&zc(e,r,l,wa,i),h===u)break;u=h}u!==null&&l.stopPropagation()}else zc(e,r,l,null,i)}}var wa=null;function yc(e,r,i,l){if(wa=null,e=sc(l),e=Nn(e),e!==null)if(r=Tn(e),r===null)e=null;else if(i=r.tag,i===13){if(e=pm(r),e!==null)return e;e=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return wa=e,null}function Im(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n1()){case fc:return 1;case wm:return 4;case fa:case o1:return 16;case bm:return 536870912;default:return 16}default:return 16}}var rn=null,wc=null,ba=null;function Am(){if(ba)return ba;var e,r=wc,i=r.length,l,u="value"in rn?rn.value:rn.textContent,h=u.length;for(e=0;e<i&&r[e]===u[e];e++);var b=i-e;for(l=1;l<=b&&r[i-l]===u[h-l];l++);return ba=u.slice(e,1<l?1-l:void 0)}function Ca(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ka(){return!0}function _m(){return!1}function _t(e){function r(i,l,u,h,b){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(i=e[R],this[R]=i?i(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ka:_m,this.isPropagationStopped=_m,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),r}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=_t(lo),vi=Y({},lo,{view:0,detail:0}),v1=_t(vi),Cc,kc,xi,Sa=Y({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Cc=e.screenX-xi.screenX,kc=e.screenY-xi.screenY):kc=Cc=0,xi=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),Dm=_t(Sa),x1=Y({},Sa,{dataTransfer:0}),y1=_t(x1),w1=Y({},vi,{relatedTarget:0}),Sc=_t(w1),b1=Y({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=_t(b1),k1=Y({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S1=_t(k1),j1=Y({},lo,{data:0}),$m=_t(j1),E1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=R1[e])?!!r[e]:!1}function jc(){return T1}var N1=Y({},vi,{key:function(e){if(e.key){var r=E1[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?Ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I1=_t(N1),A1=Y({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zm=_t(A1),_1=Y({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),D1=_t(_1),$1=Y({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=_t($1),L1=Y({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=_t(L1),M1=[9,13,27,32],Ec=p&&"CompositionEvent"in window,yi=null;p&&"documentMode"in document&&(yi=document.documentMode);var F1=p&&"TextEvent"in window&&!yi,Lm=p&&(!Ec||yi&&8<yi&&11>=yi),Om=" ",Mm=!1;function Fm(e,r){switch(e){case"keyup":return M1.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var co=!1;function B1(e,r){switch(e){case"compositionend":return Bm(r);case"keypress":return r.which!==32?null:(Mm=!0,Om);case"textInput":return e=r.data,e===Om&&Mm?null:e;default:return null}}function H1(e,r){if(co)return e==="compositionend"||!Ec&&Fm(e,r)?(e=Am(),ba=wc=rn=null,co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Lm&&r.locale!=="ko"?null:r.data;default:return null}}var W1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!W1[e.type]:r==="textarea"}function Wm(e,r,i,l){cm(l),r=Ta(r,"onChange"),0<r.length&&(i=new bc("onChange","change",null,i,l),e.push({event:i,listeners:r}))}var wi=null,bi=null;function U1(e){sp(e,0)}function ja(e){var r=ho(e);if(Ne(r))return e}function V1(e,r){if(e==="change")return r}var Um=!1;if(p){var Pc;if(p){var Rc="oninput"in document;if(!Rc){var Vm=document.createElement("div");Vm.setAttribute("oninput","return;"),Rc=typeof Vm.oninput=="function"}Pc=Rc}else Pc=!1;Um=Pc&&(!document.documentMode||9<document.documentMode)}function Gm(){wi&&(wi.detachEvent("onpropertychange",Jm),bi=wi=null)}function Jm(e){if(e.propertyName==="value"&&ja(bi)){var r=[];Wm(r,bi,e,sc(e)),mm(U1,r)}}function G1(e,r,i){e==="focusin"?(Gm(),wi=r,bi=i,wi.attachEvent("onpropertychange",Jm)):e==="focusout"&&Gm()}function J1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(bi)}function Y1(e,r){if(e==="click")return ja(r)}function K1(e,r){if(e==="input"||e==="change")return ja(r)}function q1(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var tr=typeof Object.is=="function"?Object.is:q1;function Ci(e,r){if(tr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var i=Object.keys(e),l=Object.keys(r);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!g.call(r,u)||!tr(e[u],r[u]))return!1}return!0}function Ym(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Km(e,r){var i=Ym(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=r&&l>=r)return{node:i,offset:r-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ym(i)}}function qm(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?qm(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Qm(){for(var e=window,r=ht();r instanceof e.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)e=r.contentWindow;else break;r=ht(e.document)}return r}function Tc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Q1(e){var r=Qm(),i=e.focusedElem,l=e.selectionRange;if(r!==i&&i&&i.ownerDocument&&qm(i.ownerDocument.documentElement,i)){if(l!==null&&Tc(i)){if(r=l.start,e=l.end,e===void 0&&(e=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(e,i.value.length);else if(e=(r=i.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!e.extend&&h>l&&(u=l,l=h,h=u),u=Km(i,h);var b=Km(i,l);u&&b&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==b.node||e.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),e.removeAllRanges(),h>l?(e.addRange(r),e.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),e.addRange(r)))}}for(r=[],e=i;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)e=r[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var X1=p&&"documentMode"in document&&11>=document.documentMode,uo=null,Nc=null,ki=null,Ic=!1;function Xm(e,r,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ic||uo==null||uo!==ht(l)||(l=uo,"selectionStart"in l&&Tc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ki&&Ci(ki,l)||(ki=l,l=Ta(Nc,"onSelect"),0<l.length&&(r=new bc("onSelect","select",null,r,i),e.push({event:r,listeners:l}),r.target=uo)))}function Ea(e,r){var i={};return i[e.toLowerCase()]=r.toLowerCase(),i["Webkit"+e]="webkit"+r,i["Moz"+e]="moz"+r,i}var fo={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},Ac={},Zm={};p&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function Pa(e){if(Ac[e])return Ac[e];if(!fo[e])return e;var r=fo[e],i;for(i in r)if(r.hasOwnProperty(i)&&i in Zm)return Ac[e]=r[i];return e}var ep=Pa("animationend"),tp=Pa("animationiteration"),rp=Pa("animationstart"),np=Pa("transitionend"),op=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,r){op.set(e,r),d(r,[e])}for(var _c=0;_c<ip.length;_c++){var Dc=ip[_c],Z1=Dc.toLowerCase(),ew=Dc[0].toUpperCase()+Dc.slice(1);nn(Z1,"on"+ew)}nn(ep,"onAnimationEnd"),nn(tp,"onAnimationIteration"),nn(rp,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(np,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function ap(e,r,i){var l=e.type||"unknown-event";e.currentTarget=i,Zy(l,r,void 0,e),e.currentTarget=null}function sp(e,r){r=(r&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],u=l.event;l=l.listeners;e:{var h=void 0;if(r)for(var b=l.length-1;0<=b;b--){var R=l[b],A=R.instance,M=R.currentTarget;if(R=R.listener,A!==h&&u.isPropagationStopped())break e;ap(u,R,M),h=A}else for(b=0;b<l.length;b++){if(R=l[b],A=R.instance,M=R.currentTarget,R=R.listener,A!==h&&u.isPropagationStopped())break e;ap(u,R,M),h=A}}}if(ua)throw e=uc,ua=!1,uc=null,e}function Ve(e,r){var i=r[Hc];i===void 0&&(i=r[Hc]=new Set);var l=e+"__bubble";i.has(l)||(lp(r,e,2,!1),i.add(l))}function $c(e,r,i){var l=0;r&&(l|=4),lp(i,e,l,r)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[Ra]){e[Ra]=!0,s.forEach(function(i){i!=="selectionchange"&&(tw.has(i)||$c(i,!1,e),$c(i,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ra]||(r[Ra]=!0,$c("selectionchange",!1,r))}}function lp(e,r,i,l){switch(Im(r)){case 1:var u=h1;break;case 4:u=g1;break;default:u=xc}i=u.bind(null,r,i,e),u=void 0,!dc||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(r,i,{capture:!0,passive:u}):e.addEventListener(r,i,!0):u!==void 0?e.addEventListener(r,i,{passive:u}):e.addEventListener(r,i,!1)}function zc(e,r,i,l,u){var h=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var R=l.stateNode.containerInfo;if(R===u||R.nodeType===8&&R.parentNode===u)break;if(b===4)for(b=l.return;b!==null;){var A=b.tag;if((A===3||A===4)&&(A=b.stateNode.containerInfo,A===u||A.nodeType===8&&A.parentNode===u))return;b=b.return}for(;R!==null;){if(b=Nn(R),b===null)return;if(A=b.tag,A===5||A===6){l=h=b;continue e}R=R.parentNode}}l=l.return}mm(function(){var M=h,V=sc(i),J=[];e:{var U=op.get(e);if(U!==void 0){var Z=bc,ne=e;switch(e){case"keypress":if(Ca(i)===0)break e;case"keydown":case"keyup":Z=I1;break;case"focusin":ne="focus",Z=Sc;break;case"focusout":ne="blur",Z=Sc;break;case"beforeblur":case"afterblur":Z=Sc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=D1;break;case ep:case tp:case rp:Z=C1;break;case np:Z=z1;break;case"scroll":Z=v1;break;case"wheel":Z=O1;break;case"copy":case"cut":case"paste":Z=S1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=zm}var le=(r&4)!==0,tt=!le&&e==="scroll",z=le?U!==null?U+"Capture":null:U;le=[];for(var _=M,L;_!==null;){L=_;var q=L.stateNode;if(L.tag===5&&q!==null&&(L=q,z!==null&&(q=si(_,z),q!=null&&le.push(Ei(_,q,L)))),tt)break;_=_.return}0<le.length&&(U=new Z(U,ne,null,i,V),J.push({event:U,listeners:le}))}}if((r&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",U&&i!==ac&&(ne=i.relatedTarget||i.fromElement)&&(Nn(ne)||ne[Dr]))break e;if((Z||U)&&(U=V.window===V?V:(U=V.ownerDocument)?U.defaultView||U.parentWindow:window,Z?(ne=i.relatedTarget||i.toElement,Z=M,ne=ne?Nn(ne):null,ne!==null&&(tt=Tn(ne),ne!==tt||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(Z=null,ne=M),Z!==ne)){if(le=Dm,q="onMouseLeave",z="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(le=zm,q="onPointerLeave",z="onPointerEnter",_="pointer"),tt=Z==null?U:ho(Z),L=ne==null?U:ho(ne),U=new le(q,_+"leave",Z,i,V),U.target=tt,U.relatedTarget=L,q=null,Nn(V)===M&&(le=new le(z,_+"enter",ne,i,V),le.target=L,le.relatedTarget=tt,q=le),tt=q,Z&&ne)t:{for(le=Z,z=ne,_=0,L=le;L;L=mo(L))_++;for(L=0,q=z;q;q=mo(q))L++;for(;0<_-L;)le=mo(le),_--;for(;0<L-_;)z=mo(z),L--;for(;_--;){if(le===z||z!==null&&le===z.alternate)break t;le=mo(le),z=mo(z)}le=null}else le=null;Z!==null&&cp(J,U,Z,le,!1),ne!==null&&tt!==null&&cp(J,tt,ne,le,!0)}}e:{if(U=M?ho(M):window,Z=U.nodeName&&U.nodeName.toLowerCase(),Z==="select"||Z==="input"&&U.type==="file")var de=V1;else if(Hm(U))if(Um)de=K1;else{de=J1;var he=G1}else(Z=U.nodeName)&&Z.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(de=Y1);if(de&&(de=de(e,M))){Wm(J,de,i,V);break e}he&&he(e,U,M),e==="focusout"&&(he=U._wrapperState)&&he.controlled&&U.type==="number"&&tc(U,"number",U.value)}switch(he=M?ho(M):window,e){case"focusin":(Hm(he)||he.contentEditable==="true")&&(uo=he,Nc=M,ki=null);break;case"focusout":ki=Nc=uo=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Xm(J,i,V);break;case"selectionchange":if(X1)break;case"keydown":case"keyup":Xm(J,i,V)}var ge;if(Ec)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else co?Fm(e,i)&&(ke="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ke="onCompositionStart");ke&&(Lm&&i.locale!=="ko"&&(co||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&co&&(ge=Am()):(rn=V,wc="value"in rn?rn.value:rn.textContent,co=!0)),he=Ta(M,ke),0<he.length&&(ke=new $m(ke,e,null,i,V),J.push({event:ke,listeners:he}),ge?ke.data=ge:(ge=Bm(i),ge!==null&&(ke.data=ge)))),(ge=F1?B1(e,i):H1(e,i))&&(M=Ta(M,"onBeforeInput"),0<M.length&&(V=new $m("onBeforeInput","beforeinput",null,i,V),J.push({event:V,listeners:M}),V.data=ge))}sp(J,r)})}function Ei(e,r,i){return{instance:e,listener:r,currentTarget:i}}function Ta(e,r){for(var i=r+"Capture",l=[];e!==null;){var u=e,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=si(e,i),h!=null&&l.unshift(Ei(e,h,u)),h=si(e,r),h!=null&&l.push(Ei(e,h,u))),e=e.return}return l}function mo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cp(e,r,i,l,u){for(var h=r._reactName,b=[];i!==null&&i!==l;){var R=i,A=R.alternate,M=R.stateNode;if(A!==null&&A===l)break;R.tag===5&&M!==null&&(R=M,u?(A=si(i,h),A!=null&&b.unshift(Ei(i,A,R))):u||(A=si(i,h),A!=null&&b.push(Ei(i,A,R)))),i=i.return}b.length!==0&&e.push({event:r,listeners:b})}var rw=/\r\n?/g,nw=/\u0000|\uFFFD/g;function dp(e){return(typeof e=="string"?e:""+e).replace(rw,`
`).replace(nw,"")}function Na(e,r,i){if(r=dp(r),dp(e)!==r&&i)throw Error(a(425))}function Ia(){}var Lc=null,Oc=null;function Mc(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,iw=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(e){return up.resolve(null).then(e).catch(aw)}:Fc;function aw(e){setTimeout(function(){throw e})}function Bc(e,r){var i=r,l=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(l===0){e.removeChild(u),gi(r);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=u}while(i);gi(r)}function on(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function fp(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return e;r--}else i==="/$"&&r++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),Sr="__reactFiber$"+po,Pi="__reactProps$"+po,Dr="__reactContainer$"+po,Hc="__reactEvents$"+po,sw="__reactListeners$"+po,lw="__reactHandles$"+po;function Nn(e){var r=e[Sr];if(r)return r;for(var i=e.parentNode;i;){if(r=i[Dr]||i[Sr]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(e=fp(e);e!==null;){if(i=e[Sr])return i;e=fp(e)}return r}e=i,i=e.parentNode}return null}function Ri(e){return e=e[Sr]||e[Dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ho(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Aa(e){return e[Pi]||null}var Wc=[],go=-1;function an(e){return{current:e}}function Ge(e){0>go||(e.current=Wc[go],Wc[go]=null,go--)}function He(e,r){go++,Wc[go]=e.current,e.current=r}var sn={},yt=an(sn),jt=an(!1),In=sn;function vo(e,r){var i=e.type.contextTypes;if(!i)return sn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in i)u[h]=r[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=u),u}function Et(e){return e=e.childContextTypes,e!=null}function _a(){Ge(jt),Ge(yt)}function mp(e,r,i){if(yt.current!==sn)throw Error(a(168));He(yt,r),He(jt,i)}function pp(e,r,i){var l=e.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var u in l)if(!(u in r))throw Error(a(108,G(e)||"Unknown",u));return Y({},i,l)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,In=yt.current,He(yt,e),He(jt,jt.current),!0}function hp(e,r,i){var l=e.stateNode;if(!l)throw Error(a(169));i?(e=pp(e,r,In),l.__reactInternalMemoizedMergedChildContext=e,Ge(jt),Ge(yt),He(yt,e)):Ge(jt),He(jt,i)}var $r=null,$a=!1,Uc=!1;function gp(e){$r===null?$r=[e]:$r.push(e)}function cw(e){$a=!0,gp(e)}function ln(){if(!Uc&&$r!==null){Uc=!0;var e=0,r=Me;try{var i=$r;for(Me=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}$r=null,$a=!1}catch(u){throw $r!==null&&($r=$r.slice(e+1)),xm(fc,ln),u}finally{Me=r,Uc=!1}}return null}var xo=[],yo=0,za=null,La=0,Wt=[],Ut=0,An=null,zr=1,Lr="";function _n(e,r){xo[yo++]=La,xo[yo++]=za,za=e,La=r}function vp(e,r,i){Wt[Ut++]=zr,Wt[Ut++]=Lr,Wt[Ut++]=An,An=e;var l=zr;e=Lr;var u=32-er(l)-1;l&=~(1<<u),i+=1;var h=32-er(r)+u;if(30<h){var b=u-u%5;h=(l&(1<<b)-1).toString(32),l>>=b,u-=b,zr=1<<32-er(r)+u|i<<u|l,Lr=h+e}else zr=1<<h|i<<u|l,Lr=e}function Vc(e){e.return!==null&&(_n(e,1),vp(e,1,0))}function Gc(e){for(;e===za;)za=xo[--yo],xo[yo]=null,La=xo[--yo],xo[yo]=null;for(;e===An;)An=Wt[--Ut],Wt[Ut]=null,Lr=Wt[--Ut],Wt[Ut]=null,zr=Wt[--Ut],Wt[Ut]=null}var Dt=null,$t=null,Ke=!1,rr=null;function xp(e,r){var i=Yt(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=e,r=e.deletions,r===null?(e.deletions=[i],e.flags|=16):r.push(i)}function yp(e,r){switch(e.tag){case 5:var i=e.type;return r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Dt=e,$t=on(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Dt=e,$t=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(i=An!==null?{id:zr,overflow:Lr}:null,e.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},i=Yt(18,null,null,0),i.stateNode=r,i.return=e,e.child=i,Dt=e,$t=null,!0):!1;default:return!1}}function Jc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yc(e){if(Ke){var r=$t;if(r){var i=r;if(!yp(e,r)){if(Jc(e))throw Error(a(418));r=on(i.nextSibling);var l=Dt;r&&yp(e,r)?xp(l,i):(e.flags=e.flags&-4097|2,Ke=!1,Dt=e)}}else{if(Jc(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ke=!1,Dt=e}}}function wp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function Oa(e){if(e!==Dt)return!1;if(!Ke)return wp(e),Ke=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Mc(e.type,e.memoizedProps)),r&&(r=$t)){if(Jc(e))throw bp(),Error(a(418));for(;r;)xp(e,r),r=on(r.nextSibling)}if(wp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(r===0){$t=on(e.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}e=e.nextSibling}$t=null}}else $t=Dt?on(e.stateNode.nextSibling):null;return!0}function bp(){for(var e=$t;e;)e=on(e.nextSibling)}function wo(){$t=Dt=null,Ke=!1}function Kc(e){rr===null?rr=[e]:rr.push(e)}var dw=D.ReactCurrentBatchConfig;function Ti(e,r,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(a(309));var l=i.stateNode}if(!l)throw Error(a(147,e));var u=l,h=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(b){var R=u.refs;b===null?delete R[h]:R[h]=b},r._stringRef=h,r)}if(typeof e!="string")throw Error(a(284));if(!i._owner)throw Error(a(290,e))}return e}function Ma(e,r){throw e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Cp(e){var r=e._init;return r(e._payload)}function kp(e){function r(z,_){if(e){var L=z.deletions;L===null?(z.deletions=[_],z.flags|=16):L.push(_)}}function i(z,_){if(!e)return null;for(;_!==null;)r(z,_),_=_.sibling;return null}function l(z,_){for(z=new Map;_!==null;)_.key!==null?z.set(_.key,_):z.set(_.index,_),_=_.sibling;return z}function u(z,_){return z=gn(z,_),z.index=0,z.sibling=null,z}function h(z,_,L){return z.index=L,e?(L=z.alternate,L!==null?(L=L.index,L<_?(z.flags|=2,_):L):(z.flags|=2,_)):(z.flags|=1048576,_)}function b(z){return e&&z.alternate===null&&(z.flags|=2),z}function R(z,_,L,q){return _===null||_.tag!==6?(_=Fd(L,z.mode,q),_.return=z,_):(_=u(_,L),_.return=z,_)}function A(z,_,L,q){var de=L.type;return de===O?V(z,_,L.props.children,q,L.key):_!==null&&(_.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===se&&Cp(de)===_.type)?(q=u(_,L.props),q.ref=Ti(z,_,L),q.return=z,q):(q=cs(L.type,L.key,L.props,null,z.mode,q),q.ref=Ti(z,_,L),q.return=z,q)}function M(z,_,L,q){return _===null||_.tag!==4||_.stateNode.containerInfo!==L.containerInfo||_.stateNode.implementation!==L.implementation?(_=Bd(L,z.mode,q),_.return=z,_):(_=u(_,L.children||[]),_.return=z,_)}function V(z,_,L,q,de){return _===null||_.tag!==7?(_=Bn(L,z.mode,q,de),_.return=z,_):(_=u(_,L),_.return=z,_)}function J(z,_,L){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Fd(""+_,z.mode,L),_.return=z,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case H:return L=cs(_.type,_.key,_.props,null,z.mode,L),L.ref=Ti(z,null,_),L.return=z,L;case W:return _=Bd(_,z.mode,L),_.return=z,_;case se:var q=_._init;return J(z,q(_._payload),L)}if(oi(_)||K(_))return _=Bn(_,z.mode,L,null),_.return=z,_;Ma(z,_)}return null}function U(z,_,L,q){var de=_!==null?_.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return de!==null?null:R(z,_,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case H:return L.key===de?A(z,_,L,q):null;case W:return L.key===de?M(z,_,L,q):null;case se:return de=L._init,U(z,_,de(L._payload),q)}if(oi(L)||K(L))return de!==null?null:V(z,_,L,q,null);Ma(z,L)}return null}function Z(z,_,L,q,de){if(typeof q=="string"&&q!==""||typeof q=="number")return z=z.get(L)||null,R(_,z,""+q,de);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case H:return z=z.get(q.key===null?L:q.key)||null,A(_,z,q,de);case W:return z=z.get(q.key===null?L:q.key)||null,M(_,z,q,de);case se:var he=q._init;return Z(z,_,L,he(q._payload),de)}if(oi(q)||K(q))return z=z.get(L)||null,V(_,z,q,de,null);Ma(_,q)}return null}function ne(z,_,L,q){for(var de=null,he=null,ge=_,ke=_=0,dt=null;ge!==null&&ke<L.length;ke++){ge.index>ke?(dt=ge,ge=null):dt=ge.sibling;var De=U(z,ge,L[ke],q);if(De===null){ge===null&&(ge=dt);break}e&&ge&&De.alternate===null&&r(z,ge),_=h(De,_,ke),he===null?de=De:he.sibling=De,he=De,ge=dt}if(ke===L.length)return i(z,ge),Ke&&_n(z,ke),de;if(ge===null){for(;ke<L.length;ke++)ge=J(z,L[ke],q),ge!==null&&(_=h(ge,_,ke),he===null?de=ge:he.sibling=ge,he=ge);return Ke&&_n(z,ke),de}for(ge=l(z,ge);ke<L.length;ke++)dt=Z(ge,z,ke,L[ke],q),dt!==null&&(e&&dt.alternate!==null&&ge.delete(dt.key===null?ke:dt.key),_=h(dt,_,ke),he===null?de=dt:he.sibling=dt,he=dt);return e&&ge.forEach(function(vn){return r(z,vn)}),Ke&&_n(z,ke),de}function le(z,_,L,q){var de=K(L);if(typeof de!="function")throw Error(a(150));if(L=de.call(L),L==null)throw Error(a(151));for(var he=de=null,ge=_,ke=_=0,dt=null,De=L.next();ge!==null&&!De.done;ke++,De=L.next()){ge.index>ke?(dt=ge,ge=null):dt=ge.sibling;var vn=U(z,ge,De.value,q);if(vn===null){ge===null&&(ge=dt);break}e&&ge&&vn.alternate===null&&r(z,ge),_=h(vn,_,ke),he===null?de=vn:he.sibling=vn,he=vn,ge=dt}if(De.done)return i(z,ge),Ke&&_n(z,ke),de;if(ge===null){for(;!De.done;ke++,De=L.next())De=J(z,De.value,q),De!==null&&(_=h(De,_,ke),he===null?de=De:he.sibling=De,he=De);return Ke&&_n(z,ke),de}for(ge=l(z,ge);!De.done;ke++,De=L.next())De=Z(ge,z,ke,De.value,q),De!==null&&(e&&De.alternate!==null&&ge.delete(De.key===null?ke:De.key),_=h(De,_,ke),he===null?de=De:he.sibling=De,he=De);return e&&ge.forEach(function(Ww){return r(z,Ww)}),Ke&&_n(z,ke),de}function tt(z,_,L,q){if(typeof L=="object"&&L!==null&&L.type===O&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case H:e:{for(var de=L.key,he=_;he!==null;){if(he.key===de){if(de=L.type,de===O){if(he.tag===7){i(z,he.sibling),_=u(he,L.props.children),_.return=z,z=_;break e}}else if(he.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===se&&Cp(de)===he.type){i(z,he.sibling),_=u(he,L.props),_.ref=Ti(z,he,L),_.return=z,z=_;break e}i(z,he);break}else r(z,he);he=he.sibling}L.type===O?(_=Bn(L.props.children,z.mode,q,L.key),_.return=z,z=_):(q=cs(L.type,L.key,L.props,null,z.mode,q),q.ref=Ti(z,_,L),q.return=z,z=q)}return b(z);case W:e:{for(he=L.key;_!==null;){if(_.key===he)if(_.tag===4&&_.stateNode.containerInfo===L.containerInfo&&_.stateNode.implementation===L.implementation){i(z,_.sibling),_=u(_,L.children||[]),_.return=z,z=_;break e}else{i(z,_);break}else r(z,_);_=_.sibling}_=Bd(L,z.mode,q),_.return=z,z=_}return b(z);case se:return he=L._init,tt(z,_,he(L._payload),q)}if(oi(L))return ne(z,_,L,q);if(K(L))return le(z,_,L,q);Ma(z,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,_!==null&&_.tag===6?(i(z,_.sibling),_=u(_,L),_.return=z,z=_):(i(z,_),_=Fd(L,z.mode,q),_.return=z,z=_),b(z)):i(z,_)}return tt}var bo=kp(!0),Sp=kp(!1),Fa=an(null),Ba=null,Co=null,qc=null;function Qc(){qc=Co=Ba=null}function Xc(e){var r=Fa.current;Ge(Fa),e._currentValue=r}function Zc(e,r,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===i)break;e=e.return}}function ko(e,r){Ba=e,qc=Co=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Pt=!0),e.firstContext=null)}function Vt(e){var r=e._currentValue;if(qc!==e)if(e={context:e,memoizedValue:r,next:null},Co===null){if(Ba===null)throw Error(a(308));Co=e,Ba.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return r}var Dn=null;function ed(e){Dn===null?Dn=[e]:Dn.push(e)}function jp(e,r,i,l){var u=r.interleaved;return u===null?(i.next=i,ed(r)):(i.next=u.next,u.next=i),r.interleaved=i,Or(e,l)}function Or(e,r){e.lanes|=r;var i=e.alternate;for(i!==null&&(i.lanes|=r),i=e,e=e.return;e!==null;)e.childLanes|=r,i=e.alternate,i!==null&&(i.childLanes|=r),i=e,e=e.return;return i.tag===3?i.stateNode:null}var cn=!1;function td(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ep(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function dn(e,r,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(_e&2)!==0){var u=l.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r,Or(e,i)}return u=l.interleaved,u===null?(r.next=r,ed(l)):(r.next=u.next,u.next=r),l.interleaved=r,Or(e,i)}function Ha(e,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194240)!==0)){var l=r.lanes;l&=e.pendingLanes,i|=l,r.lanes=i,hc(e,i)}}function Pp(e,r){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var b={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?u=h=b:h=h.next=b,i=i.next}while(i!==null);h===null?u=h=r:h=h.next=r}else u=h=r;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=r:e.next=r,i.lastBaseUpdate=r}function Wa(e,r,i,l){var u=e.updateQueue;cn=!1;var h=u.firstBaseUpdate,b=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var A=R,M=A.next;A.next=null,b===null?h=M:b.next=M,b=A;var V=e.alternate;V!==null&&(V=V.updateQueue,R=V.lastBaseUpdate,R!==b&&(R===null?V.firstBaseUpdate=M:R.next=M,V.lastBaseUpdate=A))}if(h!==null){var J=u.baseState;b=0,V=M=A=null,R=h;do{var U=R.lane,Z=R.eventTime;if((l&U)===U){V!==null&&(V=V.next={eventTime:Z,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ne=e,le=R;switch(U=r,Z=i,le.tag){case 1:if(ne=le.payload,typeof ne=="function"){J=ne.call(Z,J,U);break e}J=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=le.payload,U=typeof ne=="function"?ne.call(Z,J,U):ne,U==null)break e;J=Y({},J,U);break e;case 2:cn=!0}}R.callback!==null&&R.lane!==0&&(e.flags|=64,U=u.effects,U===null?u.effects=[R]:U.push(R))}else Z={eventTime:Z,lane:U,tag:R.tag,payload:R.payload,callback:R.callback,next:null},V===null?(M=V=Z,A=J):V=V.next=Z,b|=U;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;U=R,R=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);if(V===null&&(A=J),u.baseState=A,u.firstBaseUpdate=M,u.lastBaseUpdate=V,r=u.shared.interleaved,r!==null){u=r;do b|=u.lane,u=u.next;while(u!==r)}else h===null&&(u.shared.lanes=0);Ln|=b,e.lanes=b,e.memoizedState=J}}function Rp(e,r,i){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var l=e[r],u=l.callback;if(u!==null){if(l.callback=null,l=i,typeof u!="function")throw Error(a(191,u));u.call(l)}}}var Ni={},jr=an(Ni),Ii=an(Ni),Ai=an(Ni);function $n(e){if(e===Ni)throw Error(a(174));return e}function rd(e,r){switch(He(Ai,r),He(Ii,e),He(jr,Ni),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:nc(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=nc(r,e)}Ge(jr),He(jr,r)}function So(){Ge(jr),Ge(Ii),Ge(Ai)}function Tp(e){$n(Ai.current);var r=$n(jr.current),i=nc(r,e.type);r!==i&&(He(Ii,e),He(jr,i))}function nd(e){Ii.current===e&&(Ge(jr),Ge(Ii))}var Qe=an(0);function Ua(e){for(var r=e;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var od=[];function id(){for(var e=0;e<od.length;e++)od[e]._workInProgressVersionPrimary=null;od.length=0}var Va=D.ReactCurrentDispatcher,ad=D.ReactCurrentBatchConfig,zn=0,Xe=null,it=null,lt=null,Ga=!1,_i=!1,Di=0,uw=0;function wt(){throw Error(a(321))}function sd(e,r){if(r===null)return!1;for(var i=0;i<r.length&&i<e.length;i++)if(!tr(e[i],r[i]))return!1;return!0}function ld(e,r,i,l,u,h){if(zn=h,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Va.current=e===null||e.memoizedState===null?hw:gw,e=i(l,u),_i){h=0;do{if(_i=!1,Di=0,25<=h)throw Error(a(301));h+=1,lt=it=null,r.updateQueue=null,Va.current=vw,e=i(l,u)}while(_i)}if(Va.current=Ka,r=it!==null&&it.next!==null,zn=0,lt=it=Xe=null,Ga=!1,r)throw Error(a(300));return e}function cd(){var e=Di!==0;return Di=0,e}function Er(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Xe.memoizedState=lt=e:lt=lt.next=e,lt}function Gt(){if(it===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var r=lt===null?Xe.memoizedState:lt.next;if(r!==null)lt=r,it=e;else{if(e===null)throw Error(a(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},lt===null?Xe.memoizedState=lt=e:lt=lt.next=e}return lt}function $i(e,r){return typeof r=="function"?r(e):r}function dd(e){var r=Gt(),i=r.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var l=it,u=l.baseQueue,h=i.pending;if(h!==null){if(u!==null){var b=u.next;u.next=h.next,h.next=b}l.baseQueue=u=h,i.pending=null}if(u!==null){h=u.next,l=l.baseState;var R=b=null,A=null,M=h;do{var V=M.lane;if((zn&V)===V)A!==null&&(A=A.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),l=M.hasEagerState?M.eagerState:e(l,M.action);else{var J={lane:V,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};A===null?(R=A=J,b=l):A=A.next=J,Xe.lanes|=V,Ln|=V}M=M.next}while(M!==null&&M!==h);A===null?b=l:A.next=R,tr(l,r.memoizedState)||(Pt=!0),r.memoizedState=l,r.baseState=b,r.baseQueue=A,i.lastRenderedState=l}if(e=i.interleaved,e!==null){u=e;do h=u.lane,Xe.lanes|=h,Ln|=h,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function ud(e){var r=Gt(),i=r.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var l=i.dispatch,u=i.pending,h=r.memoizedState;if(u!==null){i.pending=null;var b=u=u.next;do h=e(h,b.action),b=b.next;while(b!==u);tr(h,r.memoizedState)||(Pt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),i.lastRenderedState=h}return[h,l]}function Np(){}function Ip(e,r){var i=Xe,l=Gt(),u=r(),h=!tr(l.memoizedState,u);if(h&&(l.memoizedState=u,Pt=!0),l=l.queue,fd(Dp.bind(null,i,l,e),[e]),l.getSnapshot!==r||h||lt!==null&&lt.memoizedState.tag&1){if(i.flags|=2048,zi(9,_p.bind(null,i,l,u,r),void 0,null),ct===null)throw Error(a(349));(zn&30)!==0||Ap(i,r,u)}return u}function Ap(e,r,i){e.flags|=16384,e={getSnapshot:r,value:i},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[e]):(i=r.stores,i===null?r.stores=[e]:i.push(e))}function _p(e,r,i,l){r.value=i,r.getSnapshot=l,$p(r)&&zp(e)}function Dp(e,r,i){return i(function(){$p(r)&&zp(e)})}function $p(e){var r=e.getSnapshot;e=e.value;try{var i=r();return!tr(e,i)}catch{return!0}}function zp(e){var r=Or(e,1);r!==null&&ar(r,e,1,-1)}function Lp(e){var r=Er();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},r.queue=e,e=e.dispatch=pw.bind(null,Xe,e),[r.memoizedState,e]}function zi(e,r,i,l){return e={tag:e,create:r,destroy:i,deps:l,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=e.next=e):(i=r.lastEffect,i===null?r.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,r.lastEffect=e)),e}function Op(){return Gt().memoizedState}function Ja(e,r,i,l){var u=Er();Xe.flags|=e,u.memoizedState=zi(1|r,i,void 0,l===void 0?null:l)}function Ya(e,r,i,l){var u=Gt();l=l===void 0?null:l;var h=void 0;if(it!==null){var b=it.memoizedState;if(h=b.destroy,l!==null&&sd(l,b.deps)){u.memoizedState=zi(r,i,h,l);return}}Xe.flags|=e,u.memoizedState=zi(1|r,i,h,l)}function Mp(e,r){return Ja(8390656,8,e,r)}function fd(e,r){return Ya(2048,8,e,r)}function Fp(e,r){return Ya(4,2,e,r)}function Bp(e,r){return Ya(4,4,e,r)}function Hp(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Wp(e,r,i){return i=i!=null?i.concat([e]):null,Ya(4,4,Hp.bind(null,r,e),i)}function md(){}function Up(e,r){var i=Gt();r=r===void 0?null:r;var l=i.memoizedState;return l!==null&&r!==null&&sd(r,l[1])?l[0]:(i.memoizedState=[e,r],e)}function Vp(e,r){var i=Gt();r=r===void 0?null:r;var l=i.memoizedState;return l!==null&&r!==null&&sd(r,l[1])?l[0]:(e=e(),i.memoizedState=[e,r],e)}function Gp(e,r,i){return(zn&21)===0?(e.baseState&&(e.baseState=!1,Pt=!0),e.memoizedState=i):(tr(i,r)||(i=Cm(),Xe.lanes|=i,Ln|=i,e.baseState=!0),r)}function fw(e,r){var i=Me;Me=i!==0&&4>i?i:4,e(!0);var l=ad.transition;ad.transition={};try{e(!1),r()}finally{Me=i,ad.transition=l}}function Jp(){return Gt().memoizedState}function mw(e,r,i){var l=pn(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Yp(e))Kp(r,i);else if(i=jp(e,r,i,l),i!==null){var u=St();ar(i,e,l,u),qp(i,r,l)}}function pw(e,r,i){var l=pn(e),u={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Yp(e))Kp(r,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var b=r.lastRenderedState,R=h(b,i);if(u.hasEagerState=!0,u.eagerState=R,tr(R,b)){var A=r.interleaved;A===null?(u.next=u,ed(r)):(u.next=A.next,A.next=u),r.interleaved=u;return}}catch{}finally{}i=jp(e,r,u,l),i!==null&&(u=St(),ar(i,e,l,u),qp(i,r,l))}}function Yp(e){var r=e.alternate;return e===Xe||r!==null&&r===Xe}function Kp(e,r){_i=Ga=!0;var i=e.pending;i===null?r.next=r:(r.next=i.next,i.next=r),e.pending=r}function qp(e,r,i){if((i&4194240)!==0){var l=r.lanes;l&=e.pendingLanes,i|=l,r.lanes=i,hc(e,i)}}var Ka={readContext:Vt,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},hw={readContext:Vt,useCallback:function(e,r){return Er().memoizedState=[e,r===void 0?null:r],e},useContext:Vt,useEffect:Mp,useImperativeHandle:function(e,r,i){return i=i!=null?i.concat([e]):null,Ja(4194308,4,Hp.bind(null,r,e),i)},useLayoutEffect:function(e,r){return Ja(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ja(4,2,e,r)},useMemo:function(e,r){var i=Er();return r=r===void 0?null:r,e=e(),i.memoizedState=[e,r],e},useReducer:function(e,r,i){var l=Er();return r=i!==void 0?i(r):r,l.memoizedState=l.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=mw.bind(null,Xe,e),[l.memoizedState,e]},useRef:function(e){var r=Er();return e={current:e},r.memoizedState=e},useState:Lp,useDebugValue:md,useDeferredValue:function(e){return Er().memoizedState=e},useTransition:function(){var e=Lp(!1),r=e[0];return e=fw.bind(null,e[1]),Er().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,i){var l=Xe,u=Er();if(Ke){if(i===void 0)throw Error(a(407));i=i()}else{if(i=r(),ct===null)throw Error(a(349));(zn&30)!==0||Ap(l,r,i)}u.memoizedState=i;var h={value:i,getSnapshot:r};return u.queue=h,Mp(Dp.bind(null,l,h,e),[e]),l.flags|=2048,zi(9,_p.bind(null,l,h,i,r),void 0,null),i},useId:function(){var e=Er(),r=ct.identifierPrefix;if(Ke){var i=Lr,l=zr;i=(l&~(1<<32-er(l)-1)).toString(32)+i,r=":"+r+"R"+i,i=Di++,0<i&&(r+="H"+i.toString(32)),r+=":"}else i=uw++,r=":"+r+"r"+i.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},gw={readContext:Vt,useCallback:Up,useContext:Vt,useEffect:fd,useImperativeHandle:Wp,useInsertionEffect:Fp,useLayoutEffect:Bp,useMemo:Vp,useReducer:dd,useRef:Op,useState:function(){return dd($i)},useDebugValue:md,useDeferredValue:function(e){var r=Gt();return Gp(r,it.memoizedState,e)},useTransition:function(){var e=dd($i)[0],r=Gt().memoizedState;return[e,r]},useMutableSource:Np,useSyncExternalStore:Ip,useId:Jp,unstable_isNewReconciler:!1},vw={readContext:Vt,useCallback:Up,useContext:Vt,useEffect:fd,useImperativeHandle:Wp,useInsertionEffect:Fp,useLayoutEffect:Bp,useMemo:Vp,useReducer:ud,useRef:Op,useState:function(){return ud($i)},useDebugValue:md,useDeferredValue:function(e){var r=Gt();return it===null?r.memoizedState=e:Gp(r,it.memoizedState,e)},useTransition:function(){var e=ud($i)[0],r=Gt().memoizedState;return[e,r]},useMutableSource:Np,useSyncExternalStore:Ip,useId:Jp,unstable_isNewReconciler:!1};function nr(e,r){if(e&&e.defaultProps){r=Y({},r),e=e.defaultProps;for(var i in e)r[i]===void 0&&(r[i]=e[i]);return r}return r}function pd(e,r,i,l){r=e.memoizedState,i=i(l,r),i=i==null?r:Y({},r,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var qa={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,r,i){e=e._reactInternals;var l=St(),u=pn(e),h=Mr(l,u);h.payload=r,i!=null&&(h.callback=i),r=dn(e,h,u),r!==null&&(ar(r,e,u,l),Ha(r,e,u))},enqueueReplaceState:function(e,r,i){e=e._reactInternals;var l=St(),u=pn(e),h=Mr(l,u);h.tag=1,h.payload=r,i!=null&&(h.callback=i),r=dn(e,h,u),r!==null&&(ar(r,e,u,l),Ha(r,e,u))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var i=St(),l=pn(e),u=Mr(i,l);u.tag=2,r!=null&&(u.callback=r),r=dn(e,u,l),r!==null&&(ar(r,e,l,i),Ha(r,e,l))}};function Qp(e,r,i,l,u,h,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,b):r.prototype&&r.prototype.isPureReactComponent?!Ci(i,l)||!Ci(u,h):!0}function Xp(e,r,i){var l=!1,u=sn,h=r.contextType;return typeof h=="object"&&h!==null?h=Vt(h):(u=Et(r)?In:yt.current,l=r.contextTypes,h=(l=l!=null)?vo(e,u):sn),r=new r(i,h),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=qa,e.stateNode=r,r._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=h),r}function Zp(e,r,i,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,l),r.state!==e&&qa.enqueueReplaceState(r,r.state,null)}function hd(e,r,i,l){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},td(e);var h=r.contextType;typeof h=="object"&&h!==null?u.context=Vt(h):(h=Et(r)?In:yt.current,u.context=vo(e,h)),u.state=e.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(pd(e,r,h,i),u.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&qa.enqueueReplaceState(u,u.state,null),Wa(e,i,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function jo(e,r){try{var i="",l=r;do i+=ve(l),l=l.return;while(l);var u=i}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:r,stack:u,digest:null}}function gd(e,r,i){return{value:e,source:null,stack:i??null,digest:r??null}}function vd(e,r){try{console.error(r.value)}catch(i){setTimeout(function(){throw i})}}var xw=typeof WeakMap=="function"?WeakMap:Map;function eh(e,r,i){i=Mr(-1,i),i.tag=3,i.payload={element:null};var l=r.value;return i.callback=function(){ns||(ns=!0,Ad=l),vd(e,r)},i}function th(e,r,i){i=Mr(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;i.payload=function(){return l(u)},i.callback=function(){vd(e,r)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){vd(e,r),typeof l!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),i}function rh(e,r,i){var l=e.pingCache;if(l===null){l=e.pingCache=new xw;var u=new Set;l.set(r,u)}else u=l.get(r),u===void 0&&(u=new Set,l.set(r,u));u.has(i)||(u.add(i),e=Aw.bind(null,e,r,i),r.then(e,e))}function nh(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function oh(e,r,i,l,u){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(r=Mr(-1,1),r.tag=2,dn(i,r,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var yw=D.ReactCurrentOwner,Pt=!1;function kt(e,r,i,l){r.child=e===null?Sp(r,null,i,l):bo(r,e.child,i,l)}function ih(e,r,i,l,u){i=i.render;var h=r.ref;return ko(r,u),l=ld(e,r,i,l,h,u),i=cd(),e!==null&&!Pt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~u,Fr(e,r,u)):(Ke&&i&&Vc(r),r.flags|=1,kt(e,r,l,u),r.child)}function ah(e,r,i,l,u){if(e===null){var h=i.type;return typeof h=="function"&&!Md(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(r.tag=15,r.type=h,sh(e,r,h,l,u)):(e=cs(i.type,null,l,r,r.mode,u),e.ref=r.ref,e.return=r,r.child=e)}if(h=e.child,(e.lanes&u)===0){var b=h.memoizedProps;if(i=i.compare,i=i!==null?i:Ci,i(b,l)&&e.ref===r.ref)return Fr(e,r,u)}return r.flags|=1,e=gn(h,l),e.ref=r.ref,e.return=r,r.child=e}function sh(e,r,i,l,u){if(e!==null){var h=e.memoizedProps;if(Ci(h,l)&&e.ref===r.ref)if(Pt=!1,r.pendingProps=l=h,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Pt=!0);else return r.lanes=e.lanes,Fr(e,r,u)}return xd(e,r,i,l,u)}function lh(e,r,i){var l=r.pendingProps,u=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Po,zt),zt|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,He(Po,zt),zt|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:i,He(Po,zt),zt|=l}else h!==null?(l=h.baseLanes|i,r.memoizedState=null):l=i,He(Po,zt),zt|=l;return kt(e,r,u,i),r.child}function ch(e,r){var i=r.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(r.flags|=512,r.flags|=2097152)}function xd(e,r,i,l,u){var h=Et(i)?In:yt.current;return h=vo(r,h),ko(r,u),i=ld(e,r,i,l,h,u),l=cd(),e!==null&&!Pt?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~u,Fr(e,r,u)):(Ke&&l&&Vc(r),r.flags|=1,kt(e,r,i,u),r.child)}function dh(e,r,i,l,u){if(Et(i)){var h=!0;Da(r)}else h=!1;if(ko(r,u),r.stateNode===null)Xa(e,r),Xp(r,i,l),hd(r,i,l,u),l=!0;else if(e===null){var b=r.stateNode,R=r.memoizedProps;b.props=R;var A=b.context,M=i.contextType;typeof M=="object"&&M!==null?M=Vt(M):(M=Et(i)?In:yt.current,M=vo(r,M));var V=i.getDerivedStateFromProps,J=typeof V=="function"||typeof b.getSnapshotBeforeUpdate=="function";J||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(R!==l||A!==M)&&Zp(r,b,l,M),cn=!1;var U=r.memoizedState;b.state=U,Wa(r,l,b,u),A=r.memoizedState,R!==l||U!==A||jt.current||cn?(typeof V=="function"&&(pd(r,i,V,l),A=r.memoizedState),(R=cn||Qp(r,i,R,l,U,A,M))?(J||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=A),b.props=l,b.state=A,b.context=M,l=R):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{b=r.stateNode,Ep(e,r),R=r.memoizedProps,M=r.type===r.elementType?R:nr(r.type,R),b.props=M,J=r.pendingProps,U=b.context,A=i.contextType,typeof A=="object"&&A!==null?A=Vt(A):(A=Et(i)?In:yt.current,A=vo(r,A));var Z=i.getDerivedStateFromProps;(V=typeof Z=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(R!==J||U!==A)&&Zp(r,b,l,A),cn=!1,U=r.memoizedState,b.state=U,Wa(r,l,b,u);var ne=r.memoizedState;R!==J||U!==ne||jt.current||cn?(typeof Z=="function"&&(pd(r,i,Z,l),ne=r.memoizedState),(M=cn||Qp(r,i,M,l,U,ne,A)||!1)?(V||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(l,ne,A),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(l,ne,A)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||R===e.memoizedProps&&U===e.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&U===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=ne),b.props=l,b.state=ne,b.context=A,l=M):(typeof b.componentDidUpdate!="function"||R===e.memoizedProps&&U===e.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||R===e.memoizedProps&&U===e.memoizedState||(r.flags|=1024),l=!1)}return yd(e,r,i,l,h,u)}function yd(e,r,i,l,u,h){ch(e,r);var b=(r.flags&128)!==0;if(!l&&!b)return u&&hp(r,i,!1),Fr(e,r,h);l=r.stateNode,yw.current=r;var R=b&&typeof i.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,e!==null&&b?(r.child=bo(r,e.child,null,h),r.child=bo(r,null,R,h)):kt(e,r,R,h),r.memoizedState=l.state,u&&hp(r,i,!0),r.child}function uh(e){var r=e.stateNode;r.pendingContext?mp(e,r.pendingContext,r.pendingContext!==r.context):r.context&&mp(e,r.context,!1),rd(e,r.containerInfo)}function fh(e,r,i,l,u){return wo(),Kc(u),r.flags|=256,kt(e,r,i,l),r.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function bd(e){return{baseLanes:e,cachePool:null,transitions:null}}function mh(e,r,i){var l=r.pendingProps,u=Qe.current,h=!1,b=(r.flags&128)!==0,R;if((R=b)||(R=e!==null&&e.memoizedState===null?!1:(u&2)!==0),R?(h=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),He(Qe,u&1),e===null)return Yc(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=l.children,e=l.fallback,h?(l=r.mode,h=r.child,b={mode:"hidden",children:b},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=b):h=ds(b,l,0,null),e=Bn(e,l,i,null),h.return=r,e.return=r,h.sibling=e,r.child=h,r.child.memoizedState=bd(i),r.memoizedState=wd,e):Cd(r,b));if(u=e.memoizedState,u!==null&&(R=u.dehydrated,R!==null))return ww(e,r,b,l,R,u,i);if(h){h=l.fallback,b=r.mode,u=e.child,R=u.sibling;var A={mode:"hidden",children:l.children};return(b&1)===0&&r.child!==u?(l=r.child,l.childLanes=0,l.pendingProps=A,r.deletions=null):(l=gn(u,A),l.subtreeFlags=u.subtreeFlags&14680064),R!==null?h=gn(R,h):(h=Bn(h,b,i,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,b=e.child.memoizedState,b=b===null?bd(i):{baseLanes:b.baseLanes|i,cachePool:null,transitions:b.transitions},h.memoizedState=b,h.childLanes=e.childLanes&~i,r.memoizedState=wd,l}return h=e.child,e=h.sibling,l=gn(h,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=i),l.return=r,l.sibling=null,e!==null&&(i=r.deletions,i===null?(r.deletions=[e],r.flags|=16):i.push(e)),r.child=l,r.memoizedState=null,l}function Cd(e,r){return r=ds({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Qa(e,r,i,l){return l!==null&&Kc(l),bo(r,e.child,null,i),e=Cd(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function ww(e,r,i,l,u,h,b){if(i)return r.flags&256?(r.flags&=-257,l=gd(Error(a(422))),Qa(e,r,b,l)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(h=l.fallback,u=r.mode,l=ds({mode:"visible",children:l.children},u,0,null),h=Bn(h,u,b,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,(r.mode&1)!==0&&bo(r,e.child,null,b),r.child.memoizedState=bd(b),r.memoizedState=wd,h);if((r.mode&1)===0)return Qa(e,r,b,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var R=l.dgst;return l=R,h=Error(a(419)),l=gd(h,l,void 0),Qa(e,r,b,l)}if(R=(b&e.childLanes)!==0,Pt||R){if(l=ct,l!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|b))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Or(e,u),ar(l,e,u,-1))}return Od(),l=gd(Error(a(421))),Qa(e,r,b,l)}return u.data==="$?"?(r.flags|=128,r.child=e.child,r=_w.bind(null,e),u._reactRetry=r,null):(e=h.treeContext,$t=on(u.nextSibling),Dt=r,Ke=!0,rr=null,e!==null&&(Wt[Ut++]=zr,Wt[Ut++]=Lr,Wt[Ut++]=An,zr=e.id,Lr=e.overflow,An=r),r=Cd(r,l.children),r.flags|=4096,r)}function ph(e,r,i){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),Zc(e.return,r,i)}function kd(e,r,i,l,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=u)}function hh(e,r,i){var l=r.pendingProps,u=l.revealOrder,h=l.tail;if(kt(e,r,l.children,i),l=Qe.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ph(e,i,r);else if(e.tag===19)ph(e,i,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(He(Qe,l),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(i=r.child,u=null;i!==null;)e=i.alternate,e!==null&&Ua(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=r.child,r.child=null):(u=i.sibling,i.sibling=null),kd(r,!1,u,i,h);break;case"backwards":for(i=null,u=r.child,r.child=null;u!==null;){if(e=u.alternate,e!==null&&Ua(e)===null){r.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}kd(r,!0,i,null,h);break;case"together":kd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xa(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Fr(e,r,i){if(e!==null&&(r.dependencies=e.dependencies),Ln|=r.lanes,(i&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,i=gn(e,e.pendingProps),r.child=i,i.return=r;e.sibling!==null;)e=e.sibling,i=i.sibling=gn(e,e.pendingProps),i.return=r;i.sibling=null}return r.child}function bw(e,r,i){switch(r.tag){case 3:uh(r),wo();break;case 5:Tp(r);break;case 1:Et(r.type)&&Da(r);break;case 4:rd(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,u=r.memoizedProps.value;He(Fa,l._currentValue),l._currentValue=u;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(He(Qe,Qe.current&1),r.flags|=128,null):(i&r.child.childLanes)!==0?mh(e,r,i):(He(Qe,Qe.current&1),e=Fr(e,r,i),e!==null?e.sibling:null);He(Qe,Qe.current&1);break;case 19:if(l=(i&r.childLanes)!==0,(e.flags&128)!==0){if(l)return hh(e,r,i);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),He(Qe,Qe.current),l)break;return null;case 22:case 23:return r.lanes=0,lh(e,r,i)}return Fr(e,r,i)}var gh,Sd,vh,xh;gh=function(e,r){for(var i=r.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Sd=function(){},vh=function(e,r,i,l){var u=e.memoizedProps;if(u!==l){e=r.stateNode,$n(jr.current);var h=null;switch(i){case"input":u=Zt(e,u),l=Zt(e,l),h=[];break;case"select":u=Y({},u,{value:void 0}),l=Y({},l,{value:void 0}),h=[];break;case"textarea":u=rc(e,u),l=rc(e,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Ia)}oc(i,l);var b;i=null;for(M in u)if(!l.hasOwnProperty(M)&&u.hasOwnProperty(M)&&u[M]!=null)if(M==="style"){var R=u[M];for(b in R)R.hasOwnProperty(b)&&(i||(i={}),i[b]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(c.hasOwnProperty(M)?h||(h=[]):(h=h||[]).push(M,null));for(M in l){var A=l[M];if(R=u?.[M],l.hasOwnProperty(M)&&A!==R&&(A!=null||R!=null))if(M==="style")if(R){for(b in R)!R.hasOwnProperty(b)||A&&A.hasOwnProperty(b)||(i||(i={}),i[b]="");for(b in A)A.hasOwnProperty(b)&&R[b]!==A[b]&&(i||(i={}),i[b]=A[b])}else i||(h||(h=[]),h.push(M,i)),i=A;else M==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,R=R?R.__html:void 0,A!=null&&R!==A&&(h=h||[]).push(M,A)):M==="children"?typeof A!="string"&&typeof A!="number"||(h=h||[]).push(M,""+A):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(c.hasOwnProperty(M)?(A!=null&&M==="onScroll"&&Ve("scroll",e),h||R===A||(h=[])):(h=h||[]).push(M,A))}i&&(h=h||[]).push("style",i);var M=h;(r.updateQueue=M)&&(r.flags|=4)}},xh=function(e,r,i,l){i!==l&&(r.flags|=4)};function Li(e,r){if(!Ke)switch(e.tailMode){case"hidden":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function bt(e){var r=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(r)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=i,r}function Cw(e,r,i){var l=r.pendingProps;switch(Gc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(r),null;case 1:return Et(r.type)&&_a(),bt(r),null;case 3:return l=r.stateNode,So(),Ge(jt),Ge(yt),id(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Oa(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,rr!==null&&($d(rr),rr=null))),Sd(e,r),bt(r),null;case 5:nd(r);var u=$n(Ai.current);if(i=r.type,e!==null&&r.stateNode!=null)vh(e,r,i,l,u),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(a(166));return bt(r),null}if(e=$n(jr.current),Oa(r)){l=r.stateNode,i=r.type;var h=r.memoizedProps;switch(l[Sr]=r,l[Pi]=h,e=(r.mode&1)!==0,i){case"dialog":Ve("cancel",l),Ve("close",l);break;case"iframe":case"object":case"embed":Ve("load",l);break;case"video":case"audio":for(u=0;u<Si.length;u++)Ve(Si[u],l);break;case"source":Ve("error",l);break;case"img":case"image":case"link":Ve("error",l),Ve("load",l);break;case"details":Ve("toggle",l);break;case"input":ro(l,h),Ve("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ve("invalid",l);break;case"textarea":tm(l,h),Ve("invalid",l)}oc(i,h),u=null;for(var b in h)if(h.hasOwnProperty(b)){var R=h[b];b==="children"?typeof R=="string"?l.textContent!==R&&(h.suppressHydrationWarning!==!0&&Na(l.textContent,R,e),u=["children",R]):typeof R=="number"&&l.textContent!==""+R&&(h.suppressHydrationWarning!==!0&&Na(l.textContent,R,e),u=["children",""+R]):c.hasOwnProperty(b)&&R!=null&&b==="onScroll"&&Ve("scroll",l)}switch(i){case"input":Re(l),em(l,h,!0);break;case"textarea":Re(l),nm(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Ia)}l=u,r.updateQueue=l,l!==null&&(r.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=om(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=b.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=b.createElement(i,{is:l.is}):(e=b.createElement(i),i==="select"&&(b=e,l.multiple?b.multiple=!0:l.size&&(b.size=l.size))):e=b.createElementNS(e,i),e[Sr]=r,e[Pi]=l,gh(e,r,!1,!1),r.stateNode=e;e:{switch(b=ic(i,l),i){case"dialog":Ve("cancel",e),Ve("close",e),u=l;break;case"iframe":case"object":case"embed":Ve("load",e),u=l;break;case"video":case"audio":for(u=0;u<Si.length;u++)Ve(Si[u],e);u=l;break;case"source":Ve("error",e),u=l;break;case"img":case"image":case"link":Ve("error",e),Ve("load",e),u=l;break;case"details":Ve("toggle",e),u=l;break;case"input":ro(e,l),u=Zt(e,l),Ve("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=Y({},l,{value:void 0}),Ve("invalid",e);break;case"textarea":tm(e,l),u=rc(e,l),Ve("invalid",e);break;default:u=l}oc(i,u),R=u;for(h in R)if(R.hasOwnProperty(h)){var A=R[h];h==="style"?sm(e,A):h==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&im(e,A)):h==="children"?typeof A=="string"?(i!=="textarea"||A!=="")&&ii(e,A):typeof A=="number"&&ii(e,""+A):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(c.hasOwnProperty(h)?A!=null&&h==="onScroll"&&Ve("scroll",e):A!=null&&N(e,h,A,b))}switch(i){case"input":Re(e),em(e,l,!1);break;case"textarea":Re(e),nm(e);break;case"option":l.value!=null&&e.setAttribute("value",""+ce(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?oo(e,!!l.multiple,h,!1):l.defaultValue!=null&&oo(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Ia)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return bt(r),null;case 6:if(e&&r.stateNode!=null)xh(e,r,e.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(i=$n(Ai.current),$n(jr.current),Oa(r)){if(l=r.stateNode,i=r.memoizedProps,l[Sr]=r,(h=l.nodeValue!==i)&&(e=Dt,e!==null))switch(e.tag){case 3:Na(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Na(l.nodeValue,i,(e.mode&1)!==0)}h&&(r.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Sr]=r,r.stateNode=l}return bt(r),null;case 13:if(Ge(Qe),l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ke&&$t!==null&&(r.mode&1)!==0&&(r.flags&128)===0)bp(),wo(),r.flags|=98560,h=!1;else if(h=Oa(r),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Sr]=r}else wo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bt(r),h=!1}else rr!==null&&($d(rr),rr=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=i,r):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Qe.current&1)!==0?at===0&&(at=3):Od())),r.updateQueue!==null&&(r.flags|=4),bt(r),null);case 4:return So(),Sd(e,r),e===null&&ji(r.stateNode.containerInfo),bt(r),null;case 10:return Xc(r.type._context),bt(r),null;case 17:return Et(r.type)&&_a(),bt(r),null;case 19:if(Ge(Qe),h=r.memoizedState,h===null)return bt(r),null;if(l=(r.flags&128)!==0,b=h.rendering,b===null)if(l)Li(h,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(b=Ua(e),b!==null){for(r.flags|=128,Li(h,!1),l=b.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=i,i=r.child;i!==null;)h=i,e=l,h.flags&=14680066,b=h.alternate,b===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=b.childLanes,h.lanes=b.lanes,h.child=b.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=b.memoizedProps,h.memoizedState=b.memoizedState,h.updateQueue=b.updateQueue,h.type=b.type,e=b.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return He(Qe,Qe.current&1|2),r.child}e=e.sibling}h.tail!==null&&et()>Ro&&(r.flags|=128,l=!0,Li(h,!1),r.lanes=4194304)}else{if(!l)if(e=Ua(b),e!==null){if(r.flags|=128,l=!0,i=e.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),Li(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!Ke)return bt(r),null}else 2*et()-h.renderingStartTime>Ro&&i!==1073741824&&(r.flags|=128,l=!0,Li(h,!1),r.lanes=4194304);h.isBackwards?(b.sibling=r.child,r.child=b):(i=h.last,i!==null?i.sibling=b:r.child=b,h.last=b)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=et(),r.sibling=null,i=Qe.current,He(Qe,l?i&1|2:i&1),r):(bt(r),null);case 22:case 23:return Ld(),l=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(zt&1073741824)!==0&&(bt(r),r.subtreeFlags&6&&(r.flags|=8192)):bt(r),null;case 24:return null;case 25:return null}throw Error(a(156,r.tag))}function kw(e,r){switch(Gc(r),r.tag){case 1:return Et(r.type)&&_a(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return So(),Ge(jt),Ge(yt),id(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return nd(r),null;case 13:if(Ge(Qe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));wo()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ge(Qe),null;case 4:return So(),null;case 10:return Xc(r.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Za=!1,Ct=!1,Sw=typeof WeakSet=="function"?WeakSet:Set,re=null;function Eo(e,r){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){Ze(e,r,l)}else i.current=null}function jd(e,r,i){try{i()}catch(l){Ze(e,r,l)}}var yh=!1;function jw(e,r){if(Lc=ya,e=Qm(),Tc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var b=0,R=-1,A=-1,M=0,V=0,J=e,U=null;t:for(;;){for(var Z;J!==i||u!==0&&J.nodeType!==3||(R=b+u),J!==h||l!==0&&J.nodeType!==3||(A=b+l),J.nodeType===3&&(b+=J.nodeValue.length),(Z=J.firstChild)!==null;)U=J,J=Z;for(;;){if(J===e)break t;if(U===i&&++M===u&&(R=b),U===h&&++V===l&&(A=b),(Z=J.nextSibling)!==null)break;J=U,U=J.parentNode}J=Z}i=R===-1||A===-1?null:{start:R,end:A}}else i=null}i=i||{start:0,end:0}}else i=null;for(Oc={focusedElem:e,selectionRange:i},ya=!1,re=r;re!==null;)if(r=re,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,re=e;else for(;re!==null;){r=re;try{var ne=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var le=ne.memoizedProps,tt=ne.memoizedState,z=r.stateNode,_=z.getSnapshotBeforeUpdate(r.elementType===r.type?le:nr(r.type,le),tt);z.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var L=r.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(q){Ze(r,r.return,q)}if(e=r.sibling,e!==null){e.return=r.return,re=e;break}re=r.return}return ne=yh,yh=!1,ne}function Oi(e,r,i){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var h=u.destroy;u.destroy=void 0,h!==void 0&&jd(r,i,h)}u=u.next}while(u!==l)}}function es(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==r)}}function Ed(e){var r=e.ref;if(r!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof r=="function"?r(e):r.current=e}}function wh(e){var r=e.alternate;r!==null&&(e.alternate=null,wh(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Sr],delete r[Pi],delete r[Hc],delete r[sw],delete r[lw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bh(e){return e.tag===5||e.tag===3||e.tag===4}function Ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pd(e,r,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?i.nodeType===8?i.parentNode.insertBefore(e,r):i.insertBefore(e,r):(i.nodeType===8?(r=i.parentNode,r.insertBefore(e,i)):(r=i,r.appendChild(e)),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=Ia));else if(l!==4&&(e=e.child,e!==null))for(Pd(e,r,i),e=e.sibling;e!==null;)Pd(e,r,i),e=e.sibling}function Rd(e,r,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?i.insertBefore(e,r):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Rd(e,r,i),e=e.sibling;e!==null;)Rd(e,r,i),e=e.sibling}var gt=null,or=!1;function un(e,r,i){for(i=i.child;i!==null;)kh(e,r,i),i=i.sibling}function kh(e,r,i){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(ma,i)}catch{}switch(i.tag){case 5:Ct||Eo(i,r);case 6:var l=gt,u=or;gt=null,un(e,r,i),gt=l,or=u,gt!==null&&(or?(e=gt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):gt.removeChild(i.stateNode));break;case 18:gt!==null&&(or?(e=gt,i=i.stateNode,e.nodeType===8?Bc(e.parentNode,i):e.nodeType===1&&Bc(e,i),gi(e)):Bc(gt,i.stateNode));break;case 4:l=gt,u=or,gt=i.stateNode.containerInfo,or=!0,un(e,r,i),gt=l,or=u;break;case 0:case 11:case 14:case 15:if(!Ct&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,b=h.destroy;h=h.tag,b!==void 0&&((h&2)!==0||(h&4)!==0)&&jd(i,r,b),u=u.next}while(u!==l)}un(e,r,i);break;case 1:if(!Ct&&(Eo(i,r),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(R){Ze(i,r,R)}un(e,r,i);break;case 21:un(e,r,i);break;case 22:i.mode&1?(Ct=(l=Ct)||i.memoizedState!==null,un(e,r,i),Ct=l):un(e,r,i);break;default:un(e,r,i)}}function Sh(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Sw),r.forEach(function(l){var u=Dw.bind(null,e,l);i.has(l)||(i.add(l),l.then(u,u))})}}function ir(e,r){var i=r.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];try{var h=e,b=r,R=b;e:for(;R!==null;){switch(R.tag){case 5:gt=R.stateNode,or=!1;break e;case 3:gt=R.stateNode.containerInfo,or=!0;break e;case 4:gt=R.stateNode.containerInfo,or=!0;break e}R=R.return}if(gt===null)throw Error(a(160));kh(h,b,u),gt=null,or=!1;var A=u.alternate;A!==null&&(A.return=null),u.return=null}catch(M){Ze(u,r,M)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)jh(r,e),r=r.sibling}function jh(e,r){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ir(r,e),Pr(e),l&4){try{Oi(3,e,e.return),es(3,e)}catch(le){Ze(e,e.return,le)}try{Oi(5,e,e.return)}catch(le){Ze(e,e.return,le)}}break;case 1:ir(r,e),Pr(e),l&512&&i!==null&&Eo(i,i.return);break;case 5:if(ir(r,e),Pr(e),l&512&&i!==null&&Eo(i,i.return),e.flags&32){var u=e.stateNode;try{ii(u,"")}catch(le){Ze(e,e.return,le)}}if(l&4&&(u=e.stateNode,u!=null)){var h=e.memoizedProps,b=i!==null?i.memoizedProps:h,R=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{R==="input"&&h.type==="radio"&&h.name!=null&&no(u,h),ic(R,b);var M=ic(R,h);for(b=0;b<A.length;b+=2){var V=A[b],J=A[b+1];V==="style"?sm(u,J):V==="dangerouslySetInnerHTML"?im(u,J):V==="children"?ii(u,J):N(u,V,J,M)}switch(R){case"input":Rn(u,h);break;case"textarea":rm(u,h);break;case"select":var U=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Z=h.value;Z!=null?oo(u,!!h.multiple,Z,!1):U!==!!h.multiple&&(h.defaultValue!=null?oo(u,!!h.multiple,h.defaultValue,!0):oo(u,!!h.multiple,h.multiple?[]:"",!1))}u[Pi]=h}catch(le){Ze(e,e.return,le)}}break;case 6:if(ir(r,e),Pr(e),l&4){if(e.stateNode===null)throw Error(a(162));u=e.stateNode,h=e.memoizedProps;try{u.nodeValue=h}catch(le){Ze(e,e.return,le)}}break;case 3:if(ir(r,e),Pr(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{gi(r.containerInfo)}catch(le){Ze(e,e.return,le)}break;case 4:ir(r,e),Pr(e);break;case 13:ir(r,e),Pr(e),u=e.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Id=et())),l&4&&Sh(e);break;case 22:if(V=i!==null&&i.memoizedState!==null,e.mode&1?(Ct=(M=Ct)||V,ir(r,e),Ct=M):ir(r,e),Pr(e),l&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!V&&(e.mode&1)!==0)for(re=e,V=e.child;V!==null;){for(J=re=V;re!==null;){switch(U=re,Z=U.child,U.tag){case 0:case 11:case 14:case 15:Oi(4,U,U.return);break;case 1:Eo(U,U.return);var ne=U.stateNode;if(typeof ne.componentWillUnmount=="function"){l=U,i=U.return;try{r=l,ne.props=r.memoizedProps,ne.state=r.memoizedState,ne.componentWillUnmount()}catch(le){Ze(l,i,le)}}break;case 5:Eo(U,U.return);break;case 22:if(U.memoizedState!==null){Rh(J);continue}}Z!==null?(Z.return=U,re=Z):Rh(J)}V=V.sibling}e:for(V=null,J=e;;){if(J.tag===5){if(V===null){V=J;try{u=J.stateNode,M?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(R=J.stateNode,A=J.memoizedProps.style,b=A!=null&&A.hasOwnProperty("display")?A.display:null,R.style.display=am("display",b))}catch(le){Ze(e,e.return,le)}}}else if(J.tag===6){if(V===null)try{J.stateNode.nodeValue=M?"":J.memoizedProps}catch(le){Ze(e,e.return,le)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===e)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===e)break e;for(;J.sibling===null;){if(J.return===null||J.return===e)break e;V===J&&(V=null),J=J.return}V===J&&(V=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:ir(r,e),Pr(e),l&4&&Sh(e);break;case 21:break;default:ir(r,e),Pr(e)}}function Pr(e){var r=e.flags;if(r&2){try{e:{for(var i=e.return;i!==null;){if(bh(i)){var l=i;break e}i=i.return}throw Error(a(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ii(u,""),l.flags&=-33);var h=Ch(e);Rd(e,h,u);break;case 3:case 4:var b=l.stateNode.containerInfo,R=Ch(e);Pd(e,R,b);break;default:throw Error(a(161))}}catch(A){Ze(e,e.return,A)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Ew(e,r,i){re=e,Eh(e)}function Eh(e,r,i){for(var l=(e.mode&1)!==0;re!==null;){var u=re,h=u.child;if(u.tag===22&&l){var b=u.memoizedState!==null||Za;if(!b){var R=u.alternate,A=R!==null&&R.memoizedState!==null||Ct;R=Za;var M=Ct;if(Za=b,(Ct=A)&&!M)for(re=u;re!==null;)b=re,A=b.child,b.tag===22&&b.memoizedState!==null?Th(u):A!==null?(A.return=b,re=A):Th(u);for(;h!==null;)re=h,Eh(h),h=h.sibling;re=u,Za=R,Ct=M}Ph(e)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,re=h):Ph(e)}}function Ph(e){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var i=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ct||es(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!Ct)if(i===null)l.componentDidMount();else{var u=r.elementType===r.type?i.memoizedProps:nr(r.type,i.memoizedProps);l.componentDidUpdate(u,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Rp(r,h,l);break;case 3:var b=r.updateQueue;if(b!==null){if(i=null,r.child!==null)switch(r.child.tag){case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}Rp(r,b,i)}break;case 5:var R=r.stateNode;if(i===null&&r.flags&4){i=R;var A=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&i.focus();break;case"img":A.src&&(i.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var M=r.alternate;if(M!==null){var V=M.memoizedState;if(V!==null){var J=V.dehydrated;J!==null&&gi(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ct||r.flags&512&&Ed(r)}catch(U){Ze(r,r.return,U)}}if(r===e){re=null;break}if(i=r.sibling,i!==null){i.return=r.return,re=i;break}re=r.return}}function Rh(e){for(;re!==null;){var r=re;if(r===e){re=null;break}var i=r.sibling;if(i!==null){i.return=r.return,re=i;break}re=r.return}}function Th(e){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var i=r.return;try{es(4,r)}catch(A){Ze(r,i,A)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var u=r.return;try{l.componentDidMount()}catch(A){Ze(r,u,A)}}var h=r.return;try{Ed(r)}catch(A){Ze(r,h,A)}break;case 5:var b=r.return;try{Ed(r)}catch(A){Ze(r,b,A)}}}catch(A){Ze(r,r.return,A)}if(r===e){re=null;break}var R=r.sibling;if(R!==null){R.return=r.return,re=R;break}re=r.return}}var Pw=Math.ceil,ts=D.ReactCurrentDispatcher,Td=D.ReactCurrentOwner,Jt=D.ReactCurrentBatchConfig,_e=0,ct=null,nt=null,vt=0,zt=0,Po=an(0),at=0,Mi=null,Ln=0,rs=0,Nd=0,Fi=null,Rt=null,Id=0,Ro=1/0,Br=null,ns=!1,Ad=null,fn=null,os=!1,mn=null,is=0,Bi=0,_d=null,as=-1,ss=0;function St(){return(_e&6)!==0?et():as!==-1?as:as=et()}function pn(e){return(e.mode&1)===0?1:(_e&2)!==0&&vt!==0?vt&-vt:dw.transition!==null?(ss===0&&(ss=Cm()),ss):(e=Me,e!==0||(e=window.event,e=e===void 0?16:Im(e.type)),e)}function ar(e,r,i,l){if(50<Bi)throw Bi=0,_d=null,Error(a(185));ui(e,i,l),((_e&2)===0||e!==ct)&&(e===ct&&((_e&2)===0&&(rs|=i),at===4&&hn(e,vt)),Tt(e,l),i===1&&_e===0&&(r.mode&1)===0&&(Ro=et()+500,$a&&ln()))}function Tt(e,r){var i=e.callbackNode;d1(e,r);var l=ga(e,e===ct?vt:0);if(l===0)i!==null&&ym(i),e.callbackNode=null,e.callbackPriority=0;else if(r=l&-l,e.callbackPriority!==r){if(i!=null&&ym(i),r===1)e.tag===0?cw(Ih.bind(null,e)):gp(Ih.bind(null,e)),iw(function(){(_e&6)===0&&ln()}),i=null;else{switch(km(l)){case 1:i=fc;break;case 4:i=wm;break;case 16:i=fa;break;case 536870912:i=bm;break;default:i=fa}i=Mh(i,Nh.bind(null,e))}e.callbackPriority=r,e.callbackNode=i}}function Nh(e,r){if(as=-1,ss=0,(_e&6)!==0)throw Error(a(327));var i=e.callbackNode;if(To()&&e.callbackNode!==i)return null;var l=ga(e,e===ct?vt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||r)r=ls(e,l);else{r=l;var u=_e;_e|=2;var h=_h();(ct!==e||vt!==r)&&(Br=null,Ro=et()+500,Mn(e,r));do try{Nw();break}catch(R){Ah(e,R)}while(!0);Qc(),ts.current=h,_e=u,nt!==null?r=0:(ct=null,vt=0,r=at)}if(r!==0){if(r===2&&(u=mc(e),u!==0&&(l=u,r=Dd(e,u))),r===1)throw i=Mi,Mn(e,0),hn(e,l),Tt(e,et()),i;if(r===6)hn(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Rw(u)&&(r=ls(e,l),r===2&&(h=mc(e),h!==0&&(l=h,r=Dd(e,h))),r===1))throw i=Mi,Mn(e,0),hn(e,l),Tt(e,et()),i;switch(e.finishedWork=u,e.finishedLanes=l,r){case 0:case 1:throw Error(a(345));case 2:Fn(e,Rt,Br);break;case 3:if(hn(e,l),(l&130023424)===l&&(r=Id+500-et(),10<r)){if(ga(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){St(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Fc(Fn.bind(null,e,Rt,Br),r);break}Fn(e,Rt,Br);break;case 4:if(hn(e,l),(l&4194240)===l)break;for(r=e.eventTimes,u=-1;0<l;){var b=31-er(l);h=1<<b,b=r[b],b>u&&(u=b),l&=~h}if(l=u,l=et()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Pw(l/1960))-l,10<l){e.timeoutHandle=Fc(Fn.bind(null,e,Rt,Br),l);break}Fn(e,Rt,Br);break;case 5:Fn(e,Rt,Br);break;default:throw Error(a(329))}}}return Tt(e,et()),e.callbackNode===i?Nh.bind(null,e):null}function Dd(e,r){var i=Fi;return e.current.memoizedState.isDehydrated&&(Mn(e,r).flags|=256),e=ls(e,r),e!==2&&(r=Rt,Rt=i,r!==null&&$d(r)),e}function $d(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function Rw(e){for(var r=e;;){if(r.flags&16384){var i=r.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var u=i[l],h=u.getSnapshot;u=u.value;try{if(!tr(h(),u))return!1}catch{return!1}}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function hn(e,r){for(r&=~Nd,r&=~rs,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var i=31-er(r),l=1<<i;e[i]=-1,r&=~l}}function Ih(e){if((_e&6)!==0)throw Error(a(327));To();var r=ga(e,0);if((r&1)===0)return Tt(e,et()),null;var i=ls(e,r);if(e.tag!==0&&i===2){var l=mc(e);l!==0&&(r=l,i=Dd(e,l))}if(i===1)throw i=Mi,Mn(e,0),hn(e,r),Tt(e,et()),i;if(i===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Fn(e,Rt,Br),Tt(e,et()),null}function zd(e,r){var i=_e;_e|=1;try{return e(r)}finally{_e=i,_e===0&&(Ro=et()+500,$a&&ln())}}function On(e){mn!==null&&mn.tag===0&&(_e&6)===0&&To();var r=_e;_e|=1;var i=Jt.transition,l=Me;try{if(Jt.transition=null,Me=1,e)return e()}finally{Me=l,Jt.transition=i,_e=r,(_e&6)===0&&ln()}}function Ld(){zt=Po.current,Ge(Po)}function Mn(e,r){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,ow(i)),nt!==null)for(i=nt.return;i!==null;){var l=i;switch(Gc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&_a();break;case 3:So(),Ge(jt),Ge(yt),id();break;case 5:nd(l);break;case 4:So();break;case 13:Ge(Qe);break;case 19:Ge(Qe);break;case 10:Xc(l.type._context);break;case 22:case 23:Ld()}i=i.return}if(ct=e,nt=e=gn(e.current,null),vt=zt=r,at=0,Mi=null,Nd=rs=Ln=0,Rt=Fi=null,Dn!==null){for(r=0;r<Dn.length;r++)if(i=Dn[r],l=i.interleaved,l!==null){i.interleaved=null;var u=l.next,h=i.pending;if(h!==null){var b=h.next;h.next=u,l.next=b}i.pending=l}Dn=null}return e}function Ah(e,r){do{var i=nt;try{if(Qc(),Va.current=Ka,Ga){for(var l=Xe.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ga=!1}if(zn=0,lt=it=Xe=null,_i=!1,Di=0,Td.current=null,i===null||i.return===null){at=1,Mi=r,nt=null;break}e:{var h=e,b=i.return,R=i,A=r;if(r=vt,R.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var M=A,V=R,J=V.tag;if((V.mode&1)===0&&(J===0||J===11||J===15)){var U=V.alternate;U?(V.updateQueue=U.updateQueue,V.memoizedState=U.memoizedState,V.lanes=U.lanes):(V.updateQueue=null,V.memoizedState=null)}var Z=nh(b);if(Z!==null){Z.flags&=-257,oh(Z,b,R,h,r),Z.mode&1&&rh(h,M,r),r=Z,A=M;var ne=r.updateQueue;if(ne===null){var le=new Set;le.add(A),r.updateQueue=le}else ne.add(A);break e}else{if((r&1)===0){rh(h,M,r),Od();break e}A=Error(a(426))}}else if(Ke&&R.mode&1){var tt=nh(b);if(tt!==null){(tt.flags&65536)===0&&(tt.flags|=256),oh(tt,b,R,h,r),Kc(jo(A,R));break e}}h=A=jo(A,R),at!==4&&(at=2),Fi===null?Fi=[h]:Fi.push(h),h=b;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var z=eh(h,A,r);Pp(h,z);break e;case 1:R=A;var _=h.type,L=h.stateNode;if((h.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(fn===null||!fn.has(L)))){h.flags|=65536,r&=-r,h.lanes|=r;var q=th(h,R,r);Pp(h,q);break e}}h=h.return}while(h!==null)}$h(i)}catch(de){r=de,nt===i&&i!==null&&(nt=i=i.return);continue}break}while(!0)}function _h(){var e=ts.current;return ts.current=Ka,e===null?Ka:e}function Od(){(at===0||at===3||at===2)&&(at=4),ct===null||(Ln&268435455)===0&&(rs&268435455)===0||hn(ct,vt)}function ls(e,r){var i=_e;_e|=2;var l=_h();(ct!==e||vt!==r)&&(Br=null,Mn(e,r));do try{Tw();break}catch(u){Ah(e,u)}while(!0);if(Qc(),_e=i,ts.current=l,nt!==null)throw Error(a(261));return ct=null,vt=0,at}function Tw(){for(;nt!==null;)Dh(nt)}function Nw(){for(;nt!==null&&!t1();)Dh(nt)}function Dh(e){var r=Oh(e.alternate,e,zt);e.memoizedProps=e.pendingProps,r===null?$h(e):nt=r,Td.current=null}function $h(e){var r=e;do{var i=r.alternate;if(e=r.return,(r.flags&32768)===0){if(i=Cw(i,r,zt),i!==null){nt=i;return}}else{if(i=kw(i,r),i!==null){i.flags&=32767,nt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,nt=null;return}}if(r=r.sibling,r!==null){nt=r;return}nt=r=e}while(r!==null);at===0&&(at=5)}function Fn(e,r,i){var l=Me,u=Jt.transition;try{Jt.transition=null,Me=1,Iw(e,r,i,l)}finally{Jt.transition=u,Me=l}return null}function Iw(e,r,i,l){do To();while(mn!==null);if((_e&6)!==0)throw Error(a(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(u1(e,h),e===ct&&(nt=ct=null,vt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||os||(os=!0,Mh(fa,function(){return To(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=Jt.transition,Jt.transition=null;var b=Me;Me=1;var R=_e;_e|=4,Td.current=null,jw(e,i),jh(i,e),Q1(Oc),ya=!!Lc,Oc=Lc=null,e.current=i,Ew(i),r1(),_e=R,Me=b,Jt.transition=h}else e.current=i;if(os&&(os=!1,mn=e,is=u),h=e.pendingLanes,h===0&&(fn=null),i1(i.stateNode),Tt(e,et()),r!==null)for(l=e.onRecoverableError,i=0;i<r.length;i++)u=r[i],l(u.value,{componentStack:u.stack,digest:u.digest});if(ns)throw ns=!1,e=Ad,Ad=null,e;return(is&1)!==0&&e.tag!==0&&To(),h=e.pendingLanes,(h&1)!==0?e===_d?Bi++:(Bi=0,_d=e):Bi=0,ln(),null}function To(){if(mn!==null){var e=km(is),r=Jt.transition,i=Me;try{if(Jt.transition=null,Me=16>e?16:e,mn===null)var l=!1;else{if(e=mn,mn=null,is=0,(_e&6)!==0)throw Error(a(331));var u=_e;for(_e|=4,re=e.current;re!==null;){var h=re,b=h.child;if((re.flags&16)!==0){var R=h.deletions;if(R!==null){for(var A=0;A<R.length;A++){var M=R[A];for(re=M;re!==null;){var V=re;switch(V.tag){case 0:case 11:case 15:Oi(8,V,h)}var J=V.child;if(J!==null)J.return=V,re=J;else for(;re!==null;){V=re;var U=V.sibling,Z=V.return;if(wh(V),V===M){re=null;break}if(U!==null){U.return=Z,re=U;break}re=Z}}}var ne=h.alternate;if(ne!==null){var le=ne.child;if(le!==null){ne.child=null;do{var tt=le.sibling;le.sibling=null,le=tt}while(le!==null)}}re=h}}if((h.subtreeFlags&2064)!==0&&b!==null)b.return=h,re=b;else e:for(;re!==null;){if(h=re,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Oi(9,h,h.return)}var z=h.sibling;if(z!==null){z.return=h.return,re=z;break e}re=h.return}}var _=e.current;for(re=_;re!==null;){b=re;var L=b.child;if((b.subtreeFlags&2064)!==0&&L!==null)L.return=b,re=L;else e:for(b=_;re!==null;){if(R=re,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:es(9,R)}}catch(de){Ze(R,R.return,de)}if(R===b){re=null;break e}var q=R.sibling;if(q!==null){q.return=R.return,re=q;break e}re=R.return}}if(_e=u,ln(),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(ma,e)}catch{}l=!0}return l}finally{Me=i,Jt.transition=r}}return!1}function zh(e,r,i){r=jo(i,r),r=eh(e,r,1),e=dn(e,r,1),r=St(),e!==null&&(ui(e,1,r),Tt(e,r))}function Ze(e,r,i){if(e.tag===3)zh(e,e,i);else for(;r!==null;){if(r.tag===3){zh(r,e,i);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fn===null||!fn.has(l))){e=jo(i,e),e=th(r,e,1),r=dn(r,e,1),e=St(),r!==null&&(ui(r,1,e),Tt(r,e));break}}r=r.return}}function Aw(e,r,i){var l=e.pingCache;l!==null&&l.delete(r),r=St(),e.pingedLanes|=e.suspendedLanes&i,ct===e&&(vt&i)===i&&(at===4||at===3&&(vt&130023424)===vt&&500>et()-Id?Mn(e,0):Nd|=i),Tt(e,r)}function Lh(e,r){r===0&&((e.mode&1)===0?r=1:(r=ha,ha<<=1,(ha&130023424)===0&&(ha=4194304)));var i=St();e=Or(e,r),e!==null&&(ui(e,r,i),Tt(e,i))}function _w(e){var r=e.memoizedState,i=0;r!==null&&(i=r.retryLane),Lh(e,i)}function Dw(e,r){var i=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(a(314))}l!==null&&l.delete(r),Lh(e,i)}var Oh;Oh=function(e,r,i){if(e!==null)if(e.memoizedProps!==r.pendingProps||jt.current)Pt=!0;else{if((e.lanes&i)===0&&(r.flags&128)===0)return Pt=!1,bw(e,r,i);Pt=(e.flags&131072)!==0}else Pt=!1,Ke&&(r.flags&1048576)!==0&&vp(r,La,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Xa(e,r),e=r.pendingProps;var u=vo(r,yt.current);ko(r,i),u=ld(null,r,l,e,u,i);var h=cd();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Et(l)?(h=!0,Da(r)):h=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,td(r),u.updater=qa,r.stateNode=u,u._reactInternals=r,hd(r,l,e,i),r=yd(null,r,l,!0,h,i)):(r.tag=0,Ke&&h&&Vc(r),kt(null,r,u,i),r=r.child),r;case 16:l=r.elementType;e:{switch(Xa(e,r),e=r.pendingProps,u=l._init,l=u(l._payload),r.type=l,u=r.tag=zw(l),e=nr(l,e),u){case 0:r=xd(null,r,l,e,i);break e;case 1:r=dh(null,r,l,e,i);break e;case 11:r=ih(null,r,l,e,i);break e;case 14:r=ah(null,r,l,nr(l.type,e),i);break e}throw Error(a(306,l,""))}return r;case 0:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:nr(l,u),xd(e,r,l,u,i);case 1:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:nr(l,u),dh(e,r,l,u,i);case 3:e:{if(uh(r),e===null)throw Error(a(387));l=r.pendingProps,h=r.memoizedState,u=h.element,Ep(e,r),Wa(r,l,null,i);var b=r.memoizedState;if(l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){u=jo(Error(a(423)),r),r=fh(e,r,l,i,u);break e}else if(l!==u){u=jo(Error(a(424)),r),r=fh(e,r,l,i,u);break e}else for($t=on(r.stateNode.containerInfo.firstChild),Dt=r,Ke=!0,rr=null,i=Sp(r,null,l,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(wo(),l===u){r=Fr(e,r,i);break e}kt(e,r,l,i)}r=r.child}return r;case 5:return Tp(r),e===null&&Yc(r),l=r.type,u=r.pendingProps,h=e!==null?e.memoizedProps:null,b=u.children,Mc(l,u)?b=null:h!==null&&Mc(l,h)&&(r.flags|=32),ch(e,r),kt(e,r,b,i),r.child;case 6:return e===null&&Yc(r),null;case 13:return mh(e,r,i);case 4:return rd(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=bo(r,null,l,i):kt(e,r,l,i),r.child;case 11:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:nr(l,u),ih(e,r,l,u,i);case 7:return kt(e,r,r.pendingProps,i),r.child;case 8:return kt(e,r,r.pendingProps.children,i),r.child;case 12:return kt(e,r,r.pendingProps.children,i),r.child;case 10:e:{if(l=r.type._context,u=r.pendingProps,h=r.memoizedProps,b=u.value,He(Fa,l._currentValue),l._currentValue=b,h!==null)if(tr(h.value,b)){if(h.children===u.children&&!jt.current){r=Fr(e,r,i);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var R=h.dependencies;if(R!==null){b=h.child;for(var A=R.firstContext;A!==null;){if(A.context===l){if(h.tag===1){A=Mr(-1,i&-i),A.tag=2;var M=h.updateQueue;if(M!==null){M=M.shared;var V=M.pending;V===null?A.next=A:(A.next=V.next,V.next=A),M.pending=A}}h.lanes|=i,A=h.alternate,A!==null&&(A.lanes|=i),Zc(h.return,i,r),R.lanes|=i;break}A=A.next}}else if(h.tag===10)b=h.type===r.type?null:h.child;else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=i,R=b.alternate,R!==null&&(R.lanes|=i),Zc(b,i,r),b=h.sibling}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===r){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}kt(e,r,u.children,i),r=r.child}return r;case 9:return u=r.type,l=r.pendingProps.children,ko(r,i),u=Vt(u),l=l(u),r.flags|=1,kt(e,r,l,i),r.child;case 14:return l=r.type,u=nr(l,r.pendingProps),u=nr(l.type,u),ah(e,r,l,u,i);case 15:return sh(e,r,r.type,r.pendingProps,i);case 17:return l=r.type,u=r.pendingProps,u=r.elementType===l?u:nr(l,u),Xa(e,r),r.tag=1,Et(l)?(e=!0,Da(r)):e=!1,ko(r,i),Xp(r,l,u),hd(r,l,u,i),yd(null,r,l,!0,e,i);case 19:return hh(e,r,i);case 22:return lh(e,r,i)}throw Error(a(156,r.tag))};function Mh(e,r){return xm(e,r)}function $w(e,r,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,r,i,l){return new $w(e,r,i,l)}function Md(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zw(e){if(typeof e=="function")return Md(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===Se)return 14}return 2}function gn(e,r){var i=e.alternate;return i===null?(i=Yt(e.tag,r,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=r,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,r=e.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function cs(e,r,i,l,u,h){var b=2;if(l=e,typeof e=="function")Md(e)&&(b=1);else if(typeof e=="string")b=5;else e:switch(e){case O:return Bn(i.children,u,h,r);case F:b=8,u|=8;break;case Q:return e=Yt(12,i,r,u|2),e.elementType=Q,e.lanes=h,e;case ye:return e=Yt(13,i,r,u),e.elementType=ye,e.lanes=h,e;case me:return e=Yt(19,i,r,u),e.elementType=me,e.lanes=h,e;case ee:return ds(i,u,h,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:b=10;break e;case xe:b=9;break e;case fe:b=11;break e;case Se:b=14;break e;case se:b=16,l=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return r=Yt(b,i,r,u),r.elementType=e,r.type=l,r.lanes=h,r}function Bn(e,r,i,l){return e=Yt(7,e,l,r),e.lanes=i,e}function ds(e,r,i,l){return e=Yt(22,e,l,r),e.elementType=ee,e.lanes=i,e.stateNode={isHidden:!1},e}function Fd(e,r,i){return e=Yt(6,e,null,r),e.lanes=i,e}function Bd(e,r,i){return r=Yt(4,e.children!==null?e.children:[],e.key,r),r.lanes=i,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Lw(e,r,i,l,u){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Hd(e,r,i,l,u,h,b,R,A){return e=new Lw(e,r,i,R,A),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Yt(3,null,null,r),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(h),e}function Ow(e,r,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:l==null?null:""+l,children:e,containerInfo:r,implementation:i}}function Fh(e){if(!e)return sn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(a(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Et(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(a(171))}if(e.tag===1){var i=e.type;if(Et(i))return pp(e,i,r)}return r}function Bh(e,r,i,l,u,h,b,R,A){return e=Hd(i,l,!0,e,u,h,b,R,A),e.context=Fh(null),i=e.current,l=St(),u=pn(i),h=Mr(l,u),h.callback=r??null,dn(i,h,u),e.current.lanes=u,ui(e,u,l),Tt(e,l),e}function us(e,r,i,l){var u=r.current,h=St(),b=pn(u);return i=Fh(i),r.context===null?r.context=i:r.pendingContext=i,r=Mr(h,b),r.payload={element:e},l=l===void 0?null:l,l!==null&&(r.callback=l),e=dn(u,r,b),e!==null&&(ar(e,u,b,h),Ha(e,u,b)),b}function fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hh(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<r?i:r}}function Wd(e,r){Hh(e,r),(e=e.alternate)&&Hh(e,r)}function Mw(){return null}var Wh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ud(e){this._internalRoot=e}ms.prototype.render=Ud.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));us(e,r,null,null)},ms.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;On(function(){us(null,e,null,null)}),r[Dr]=null}};function ms(e){this._internalRoot=e}ms.prototype.unstable_scheduleHydration=function(e){if(e){var r=Em();e={blockedOn:null,target:e,priority:r};for(var i=0;i<tn.length&&r!==0&&r<tn[i].priority;i++);tn.splice(i,0,e),i===0&&Tm(e)}};function Vd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uh(){}function Fw(e,r,i,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var M=fs(b);h.call(M)}}var b=Bh(r,l,e,0,null,!1,!1,"",Uh);return e._reactRootContainer=b,e[Dr]=b.current,ji(e.nodeType===8?e.parentNode:e),On(),b}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var R=l;l=function(){var M=fs(A);R.call(M)}}var A=Hd(e,0,!1,null,null,!1,!1,"",Uh);return e._reactRootContainer=A,e[Dr]=A.current,ji(e.nodeType===8?e.parentNode:e),On(function(){us(r,A,i,l)}),A}function hs(e,r,i,l,u){var h=i._reactRootContainer;if(h){var b=h;if(typeof u=="function"){var R=u;u=function(){var A=fs(b);R.call(A)}}us(r,b,e,u)}else b=Fw(i,r,e,u,l);return fs(b)}Sm=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var i=di(r.pendingLanes);i!==0&&(hc(r,i|1),Tt(r,et()),(_e&6)===0&&(Ro=et()+500,ln()))}break;case 13:On(function(){var l=Or(e,1);if(l!==null){var u=St();ar(l,e,1,u)}}),Wd(e,1)}},gc=function(e){if(e.tag===13){var r=Or(e,134217728);if(r!==null){var i=St();ar(r,e,134217728,i)}Wd(e,134217728)}},jm=function(e){if(e.tag===13){var r=pn(e),i=Or(e,r);if(i!==null){var l=St();ar(i,e,r,l)}Wd(e,r)}},Em=function(){return Me},Pm=function(e,r){var i=Me;try{return Me=e,r()}finally{Me=i}},lc=function(e,r,i){switch(r){case"input":if(Rn(e,i),r=i.name,i.type==="radio"&&r!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<i.length;r++){var l=i[r];if(l!==e&&l.form===e.form){var u=Aa(l);if(!u)throw Error(a(90));Ne(l),Rn(l,u)}}}break;case"textarea":rm(e,i);break;case"select":r=i.value,r!=null&&oo(e,!!i.multiple,r,!1)}},um=zd,fm=On;var Bw={usingClientEntryPoint:!1,Events:[Ri,ho,Aa,cm,dm,zd]},Hi={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hw={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gm(e),e===null?null:e.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||Mw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gs.isDisabled&&gs.supportsFiber)try{ma=gs.inject(Hw),kr=gs}catch{}}return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bw,Nt.createPortal=function(e,r){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(r))throw Error(a(200));return Ow(e,r,null,i)},Nt.createRoot=function(e,r){if(!Vd(e))throw Error(a(299));var i=!1,l="",u=Wh;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Hd(e,1,!1,null,null,i,!1,l,u),e[Dr]=r.current,ji(e.nodeType===8?e.parentNode:e),new Ud(r)},Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=gm(r),e=e===null?null:e.stateNode,e},Nt.flushSync=function(e){return On(e)},Nt.hydrate=function(e,r,i){if(!ps(r))throw Error(a(200));return hs(null,e,r,!0,i)},Nt.hydrateRoot=function(e,r,i){if(!Vd(e))throw Error(a(405));var l=i!=null&&i.hydratedSources||null,u=!1,h="",b=Wh;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),r=Bh(r,null,e,1,i??null,u,!1,h,b),e[Dr]=r.current,ji(e),l)for(e=0;e<l.length;e++)i=l[e],u=i._getVersion,u=u(i._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[i,u]:r.mutableSourceEagerHydrationData.push(i,u);return new ms(r)},Nt.render=function(e,r,i){if(!ps(r))throw Error(a(200));return hs(null,e,r,!1,i)},Nt.unmountComponentAtNode=function(e){if(!ps(e))throw Error(a(40));return e._reactRootContainer?(On(function(){hs(null,null,e,!1,function(){e._reactRootContainer=null,e[Dr]=null})}),!0):!1},Nt.unstable_batchedUpdates=zd,Nt.unstable_renderSubtreeIntoContainer=function(e,r,i,l){if(!ps(i))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return hs(e,r,i,!1,l)},Nt.version="18.3.1-next-f1338f8080-20240426",Nt}var Xh;function Tv(){if(Xh)return Yd.exports;Xh=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Yd.exports=qw(),Yd.exports}var Zh;function Qw(){if(Zh)return vs;Zh=1;var t=Tv();return vs.createRoot=t.createRoot,vs.hydrateRoot=t.hydrateRoot,vs}var Xw=Qw(),y=cf();const $e=Rv(y),Nv=Uw({__proto__:null,default:$e},[y]);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var eg="popstate";function Zw(t={}){function n(s,c){let{pathname:d,search:f,hash:p}=s.location;return Lu("",{pathname:d,search:f,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function a(s,c){return typeof c=="string"?c:Xi(c)}return tb(n,a,null,t)}function qe(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function gr(t,n){if(!t){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function eb(){return Math.random().toString(36).substring(2,10)}function tg(t,n){return{usr:t.state,key:t.key,idx:n}}function Lu(t,n,a=null,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof n=="string"?Yo(n):n,state:a,key:n&&n.key||s||eb()}}function Xi({pathname:t="/",search:n="",hash:a=""}){return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Yo(t){let n={};if(t){let a=t.indexOf("#");a>=0&&(n.hash=t.substring(a),t=t.substring(0,a));let s=t.indexOf("?");s>=0&&(n.search=t.substring(s),t=t.substring(0,s)),t&&(n.pathname=t)}return n}function tb(t,n,a,s={}){let{window:c=document.defaultView,v5Compat:d=!1}=s,f=c.history,p="POP",g=null,x=v();x==null&&(x=0,f.replaceState({...f.state,idx:x},""));function v(){return(f.state||{idx:null}).idx}function w(){p="POP";let P=v(),I=P==null?null:P-x;x=P,g&&g({action:p,location:k.location,delta:I})}function S(P,I){p="PUSH";let C=Lu(k.location,P,I);x=v()+1;let N=tg(C,x),D=k.createHref(C);try{f.pushState(N,"",D)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;c.location.assign(D)}d&&g&&g({action:p,location:k.location,delta:1})}function j(P,I){p="REPLACE";let C=Lu(k.location,P,I);x=v();let N=tg(C,x),D=k.createHref(C);f.replaceState(N,"",D),d&&g&&g({action:p,location:k.location,delta:0})}function T(P){return rb(P)}let k={get action(){return p},get location(){return t(c,f)},listen(P){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(eg,w),g=P,()=>{c.removeEventListener(eg,w),g=null}},createHref(P){return n(c,P)},createURL:T,encodeLocation(P){let I=T(P);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:S,replace:j,go(P){return f.go(P)}};return k}function rb(t,n=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),qe(a,"No window.location.(origin|href) available to create URL");let s=typeof t=="string"?t:Xi(t);return s=s.replace(/ $/,"%20"),!n&&s.startsWith("//")&&(s=a+s),new URL(s,a)}function Iv(t,n,a="/"){return nb(t,n,a,!1)}function nb(t,n,a,s){let c=typeof n=="string"?Yo(n):n,d=Gr(c.pathname||"/",a);if(d==null)return null;let f=Av(t);ob(f);let p=null;for(let g=0;p==null&&g<f.length;++g){let x=hb(d);p=mb(f[g],x,s)}return p}function Av(t,n=[],a=[],s="",c=!1){let d=(f,p,g=c,x)=>{let v={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&g)return;qe(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let w=Vr([s,v.relativePath]),S=a.concat(v);f.children&&f.children.length>0&&(qe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Av(f.children,n,S,w,g)),!(f.path==null&&!f.index)&&n.push({path:w,score:ub(w,f.index),routesMeta:S})};return t.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))d(f,p);else for(let g of _v(f.path))d(f,p,!0,g)}),n}function _v(t){let n=t.split("/");if(n.length===0)return[];let[a,...s]=n,c=a.endsWith("?"),d=a.replace(/\?$/,"");if(s.length===0)return c?[d,""]:[d];let f=_v(s.join("/")),p=[];return p.push(...f.map(g=>g===""?d:[d,g].join("/"))),c&&p.push(...f),p.map(g=>t.startsWith("/")&&g===""?"/":g)}function ob(t){t.sort((n,a)=>n.score!==a.score?a.score-n.score:fb(n.routesMeta.map(s=>s.childrenIndex),a.routesMeta.map(s=>s.childrenIndex)))}var ib=/^:[\w-]+$/,ab=3,sb=2,lb=1,cb=10,db=-2,rg=t=>t==="*";function ub(t,n){let a=t.split("/"),s=a.length;return a.some(rg)&&(s+=db),n&&(s+=sb),a.filter(c=>!rg(c)).reduce((c,d)=>c+(ib.test(d)?ab:d===""?lb:cb),s)}function fb(t,n){return t.length===n.length&&t.slice(0,-1).every((s,c)=>s===n[c])?t[t.length-1]-n[n.length-1]:0}function mb(t,n,a=!1){let{routesMeta:s}=t,c={},d="/",f=[];for(let p=0;p<s.length;++p){let g=s[p],x=p===s.length-1,v=d==="/"?n:n.slice(d.length)||"/",w=xl({path:g.relativePath,caseSensitive:g.caseSensitive,end:x},v),S=g.route;if(!w&&x&&a&&!s[s.length-1].route.index&&(w=xl({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},v)),!w)return null;Object.assign(c,w.params),f.push({params:c,pathname:Vr([d,w.pathname]),pathnameBase:yb(Vr([d,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(d=Vr([d,w.pathnameBase]))}return f}function xl(t,n){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,s]=pb(t.path,t.caseSensitive,t.end),c=n.match(a);if(!c)return null;let d=c[0],f=d.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:s.reduce((x,{paramName:v,isOptional:w},S)=>{if(v==="*"){let T=p[S]||"";f=d.slice(0,d.length-T.length).replace(/(.)\/+$/,"$1")}const j=p[S];return w&&!j?x[v]=void 0:x[v]=(j||"").replace(/%2F/g,"/"),x},{}),pathname:d,pathnameBase:f,pattern:t}}function pb(t,n=!1,a=!0){gr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(s.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,n?void 0:"i"),s]}function hb(t){try{return t.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return gr(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),t}}function Gr(t,n){if(n==="/")return t;if(!t.toLowerCase().startsWith(n.toLowerCase()))return null;let a=n.endsWith("/")?n.length-1:n.length,s=t.charAt(a);return s&&s!=="/"?null:t.slice(a)||"/"}function gb(t,n="/"){let{pathname:a,search:s="",hash:c=""}=typeof t=="string"?Yo(t):t;return{pathname:a?a.startsWith("/")?a:vb(a,n):n,search:wb(s),hash:bb(c)}}function vb(t,n){let a=n.replace(/\/+$/,"").split("/");return t.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function Qd(t,n,a,s){return`Cannot include a '${t}' character in a manually specified \`to.${n}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xb(t){return t.filter((n,a)=>a===0||n.route.path&&n.route.path.length>0)}function df(t){let n=xb(t);return n.map((a,s)=>s===n.length-1?a.pathname:a.pathnameBase)}function uf(t,n,a,s=!1){let c;typeof t=="string"?c=Yo(t):(c={...t},qe(!c.pathname||!c.pathname.includes("?"),Qd("?","pathname","search",c)),qe(!c.pathname||!c.pathname.includes("#"),Qd("#","pathname","hash",c)),qe(!c.search||!c.search.includes("#"),Qd("#","search","hash",c)));let d=t===""||c.pathname==="",f=d?"/":c.pathname,p;if(f==null)p=a;else{let w=n.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),w-=1;c.pathname=S.join("/")}p=w>=0?n[w]:"/"}let g=gb(c,p),x=f&&f!=="/"&&f.endsWith("/"),v=(d||f===".")&&a.endsWith("/");return!g.pathname.endsWith("/")&&(x||v)&&(g.pathname+="/"),g}var Vr=t=>t.join("/").replace(/\/\/+/g,"/"),yb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Cb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Dv=["POST","PUT","PATCH","DELETE"];new Set(Dv);var kb=["GET",...Dv];new Set(kb);var Ko=y.createContext(null);Ko.displayName="DataRouter";var Al=y.createContext(null);Al.displayName="DataRouterState";y.createContext(!1);var $v=y.createContext({isTransitioning:!1});$v.displayName="ViewTransition";var Sb=y.createContext(new Map);Sb.displayName="Fetchers";var jb=y.createContext(null);jb.displayName="Await";var yr=y.createContext(null);yr.displayName="Navigation";var ra=y.createContext(null);ra.displayName="Location";var wr=y.createContext({outlet:null,matches:[],isDataRoute:!1});wr.displayName="Route";var ff=y.createContext(null);ff.displayName="RouteError";function Eb(t,{relative:n}={}){qe(qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:s}=y.useContext(yr),{hash:c,pathname:d,search:f}=na(t,{relative:n}),p=d;return a!=="/"&&(p=d==="/"?a:Vr([a,d])),s.createHref({pathname:p,search:f,hash:c})}function qo(){return y.useContext(ra)!=null}function qr(){return qe(qo(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(ra).location}var zv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lv(t){y.useContext(yr).static||y.useLayoutEffect(t)}function Qr(){let{isDataRoute:t}=y.useContext(wr);return t?Mb():Pb()}function Pb(){qe(qo(),"useNavigate() may be used only in the context of a <Router> component.");let t=y.useContext(Ko),{basename:n,navigator:a}=y.useContext(yr),{matches:s}=y.useContext(wr),{pathname:c}=qr(),d=JSON.stringify(df(s)),f=y.useRef(!1);return Lv(()=>{f.current=!0}),y.useCallback((g,x={})=>{if(gr(f.current,zv),!f.current)return;if(typeof g=="number"){a.go(g);return}let v=uf(g,JSON.parse(d),c,x.relative==="path");t==null&&n!=="/"&&(v.pathname=v.pathname==="/"?n:Vr([n,v.pathname])),(x.replace?a.replace:a.push)(v,x.state,x)},[n,a,d,c,t])}y.createContext(null);function Ov(){let{matches:t}=y.useContext(wr),n=t[t.length-1];return n?n.params:{}}function na(t,{relative:n}={}){let{matches:a}=y.useContext(wr),{pathname:s}=qr(),c=JSON.stringify(df(a));return y.useMemo(()=>uf(t,JSON.parse(c),s,n==="path"),[t,c,s,n])}function Rb(t,n){return Mv(t,n)}function Mv(t,n,a,s,c){qe(qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=y.useContext(yr),{matches:f}=y.useContext(wr),p=f[f.length-1],g=p?p.params:{},x=p?p.pathname:"/",v=p?p.pathnameBase:"/",w=p&&p.route;{let C=w&&w.path||"";Fv(x,!w||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let S=qr(),j;if(n){let C=typeof n=="string"?Yo(n):n;qe(v==="/"||C.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${C.pathname}" was given in the \`location\` prop.`),j=C}else j=S;let T=j.pathname||"/",k=T;if(v!=="/"){let C=v.replace(/^\//,"").split("/");k="/"+T.replace(/^\//,"").split("/").slice(C.length).join("/")}let P=Iv(t,{pathname:k});gr(w||P!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),gr(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=_b(P&&P.map(C=>Object.assign({},C,{params:Object.assign({},g,C.params),pathname:Vr([v,d.encodeLocation?d.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?v:Vr([v,d.encodeLocation?d.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),f,a,s,c);return n&&I?y.createElement(ra.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},I):I}function Tb(){let t=Ob(),n=Cb(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:d},"ErrorBoundary")," or"," ",y.createElement("code",{style:d},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},n),a?y.createElement("pre",{style:c},a):null,f)}var Nb=y.createElement(Tb,null),Ib=class extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){this.props.unstable_onError?this.props.unstable_onError(t,n):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?y.createElement(wr.Provider,{value:this.props.routeContext},y.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ab({routeContext:t,match:n,children:a}){let s=y.useContext(Ko);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(wr.Provider,{value:t},a)}function _b(t,n=[],a=null,s=null,c=null){if(t==null){if(!a)return null;if(a.errors)t=a.matches;else if(n.length===0&&!a.initialized&&a.matches.length>0)t=a.matches;else return null}let d=t,f=a?.errors;if(f!=null){let x=d.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);qe(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,x+1))}let p=!1,g=-1;if(a)for(let x=0;x<d.length;x++){let v=d[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=x),v.route.id){let{loaderData:w,errors:S}=a,j=v.route.loader&&!w.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||j){p=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((x,v,w)=>{let S,j=!1,T=null,k=null;a&&(S=f&&v.route.id?f[v.route.id]:void 0,T=v.route.errorElement||Nb,p&&(g<0&&w===0?(Fv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,k=null):g===w&&(j=!0,k=v.route.hydrateFallbackElement||null)));let P=n.concat(d.slice(0,w+1)),I=()=>{let C;return S?C=T:j?C=k:v.route.Component?C=y.createElement(v.route.Component,null):v.route.element?C=v.route.element:C=x,y.createElement(Ab,{match:v,routeContext:{outlet:x,matches:P,isDataRoute:a!=null},children:C})};return a&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?y.createElement(Ib,{location:a.location,revalidation:a.revalidation,component:T,error:S,children:I(),routeContext:{outlet:null,matches:P,isDataRoute:!0},unstable_onError:s}):I()},null)}function mf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Db(t){let n=y.useContext(Ko);return qe(n,mf(t)),n}function $b(t){let n=y.useContext(Al);return qe(n,mf(t)),n}function zb(t){let n=y.useContext(wr);return qe(n,mf(t)),n}function pf(t){let n=zb(t),a=n.matches[n.matches.length-1];return qe(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function Lb(){return pf("useRouteId")}function Ob(){let t=y.useContext(ff),n=$b("useRouteError"),a=pf("useRouteError");return t!==void 0?t:n.errors?.[a]}function Mb(){let{router:t}=Db("useNavigate"),n=pf("useNavigate"),a=y.useRef(!1);return Lv(()=>{a.current=!0}),y.useCallback(async(c,d={})=>{gr(a.current,zv),a.current&&(typeof c=="number"?t.navigate(c):await t.navigate(c,{fromRouteId:n,...d}))},[t,n])}var ng={};function Fv(t,n,a){!n&&!ng[t]&&(ng[t]=!0,gr(!1,a))}y.memo(Fb);function Fb({routes:t,future:n,state:a,unstable_onError:s}){return Mv(t,void 0,a,s,n)}function Bb({to:t,replace:n,state:a,relative:s}){qe(qo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=y.useContext(yr);gr(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=y.useContext(wr),{pathname:f}=qr(),p=Qr(),g=uf(t,df(d),f,s==="path"),x=JSON.stringify(g);return y.useEffect(()=>{p(JSON.parse(x),{replace:n,state:a,relative:s})},[p,x,s,n,a]),null}function ur(t){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Hb({basename:t="/",children:n=null,location:a,navigationType:s="POP",navigator:c,static:d=!1}){qe(!qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),p=y.useMemo(()=>({basename:f,navigator:c,static:d,future:{}}),[f,c,d]);typeof a=="string"&&(a=Yo(a));let{pathname:g="/",search:x="",hash:v="",state:w=null,key:S="default"}=a,j=y.useMemo(()=>{let T=Gr(g,f);return T==null?null:{location:{pathname:T,search:x,hash:v,state:w,key:S},navigationType:s}},[f,g,x,v,w,S,s]);return gr(j!=null,`<Router basename="${f}"> is not able to match the URL "${g}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:y.createElement(yr.Provider,{value:p},y.createElement(ra.Provider,{children:n,value:j}))}function Wb({children:t,location:n}){return Rb(Ou(t),n)}function Ou(t,n=[]){let a=[];return y.Children.forEach(t,(s,c)=>{if(!y.isValidElement(s))return;let d=[...n,c];if(s.type===y.Fragment){a.push.apply(a,Ou(s.props.children,d));return}qe(s.type===ur,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||d.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Ou(s.props.children,d)),a.push(f)}),a}var ll="get",cl="application/x-www-form-urlencoded";function _l(t){return t!=null&&typeof t.tagName=="string"}function Ub(t){return _l(t)&&t.tagName.toLowerCase()==="button"}function Vb(t){return _l(t)&&t.tagName.toLowerCase()==="form"}function Gb(t){return _l(t)&&t.tagName.toLowerCase()==="input"}function Jb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Yb(t,n){return t.button===0&&(!n||n==="_self")&&!Jb(t)}var xs=null;function Kb(){if(xs===null)try{new FormData(document.createElement("form"),0),xs=!1}catch{xs=!0}return xs}var qb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xd(t){return t!=null&&!qb.has(t)?(gr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cl}"`),null):t}function Qb(t,n){let a,s,c,d,f;if(Vb(t)){let p=t.getAttribute("action");s=p?Gr(p,n):null,a=t.getAttribute("method")||ll,c=Xd(t.getAttribute("enctype"))||cl,d=new FormData(t)}else if(Ub(t)||Gb(t)&&(t.type==="submit"||t.type==="image")){let p=t.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=t.getAttribute("formaction")||p.getAttribute("action");if(s=g?Gr(g,n):null,a=t.getAttribute("formmethod")||p.getAttribute("method")||ll,c=Xd(t.getAttribute("formenctype"))||Xd(p.getAttribute("enctype"))||cl,d=new FormData(p,t),!Kb()){let{name:x,type:v,value:w}=t;if(v==="image"){let S=x?`${x}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else x&&d.append(x,w)}}else{if(_l(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=ll,s=null,c=cl,f=t}return d&&c==="text/plain"&&(f=d,d=void 0),{action:s,method:a.toLowerCase(),encType:c,formData:d,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function hf(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function Xb(t,n,a){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return s.pathname==="/"?s.pathname=`_root.${a}`:n&&Gr(s.pathname,n)==="/"?s.pathname=`${n.replace(/\/$/,"")}/_root.${a}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${a}`,s}async function Zb(t,n){if(t.id in n)return n[t.id];try{let a=await import(t.module);return n[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function e2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function t2(t,n,a){let s=await Promise.all(t.map(async c=>{let d=n.routes[c.route.id];if(d){let f=await Zb(d,a);return f.links?f.links():[]}return[]}));return i2(s.flat(1).filter(e2).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function og(t,n,a,s,c,d){let f=(g,x)=>a[x]?g.route.id!==a[x].route.id:!0,p=(g,x)=>a[x].pathname!==g.pathname||a[x].route.path?.endsWith("*")&&a[x].params["*"]!==g.params["*"];return d==="assets"?n.filter((g,x)=>f(g,x)||p(g,x)):d==="data"?n.filter((g,x)=>{let v=s.routes[g.route.id];if(!v||!v.hasLoader)return!1;if(f(g,x)||p(g,x))return!0;if(g.route.shouldRevalidate){let w=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function r2(t,n,{includeHydrateFallback:a}={}){return n2(t.map(s=>{let c=n.routes[s.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),a&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function n2(t){return[...new Set(t)]}function o2(t){let n={},a=Object.keys(t).sort();for(let s of a)n[s]=t[s];return n}function i2(t,n){let a=new Set;return new Set(n),t.reduce((s,c)=>{let d=JSON.stringify(o2(c));return a.has(d)||(a.add(d),s.push({key:d,link:c})),s},[])}function Bv(){let t=y.useContext(Ko);return hf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function a2(){let t=y.useContext(Al);return hf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var gf=y.createContext(void 0);gf.displayName="FrameworkContext";function Hv(){let t=y.useContext(gf);return hf(t,"You must render this element inside a <HydratedRouter> element"),t}function s2(t,n){let a=y.useContext(gf),[s,c]=y.useState(!1),[d,f]=y.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:x,onMouseLeave:v,onTouchStart:w}=n,S=y.useRef(null);y.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let k=I=>{I.forEach(C=>{f(C.isIntersecting)})},P=new IntersectionObserver(k,{threshold:.5});return S.current&&P.observe(S.current),()=>{P.disconnect()}}},[t]),y.useEffect(()=>{if(s){let k=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(k)}}},[s]);let j=()=>{c(!0)},T=()=>{c(!1),f(!1)};return a?t!=="intent"?[d,S,{}]:[d,S,{onFocus:Ui(p,j),onBlur:Ui(g,T),onMouseEnter:Ui(x,j),onMouseLeave:Ui(v,T),onTouchStart:Ui(w,j)}]:[!1,S,{}]}function Ui(t,n){return a=>{t&&t(a),a.defaultPrevented||n(a)}}function l2({page:t,...n}){let{router:a}=Bv(),s=y.useMemo(()=>Iv(a.routes,t,a.basename),[a.routes,t,a.basename]);return s?y.createElement(d2,{page:t,matches:s,...n}):null}function c2(t){let{manifest:n,routeModules:a}=Hv(),[s,c]=y.useState([]);return y.useEffect(()=>{let d=!1;return t2(t,n,a).then(f=>{d||c(f)}),()=>{d=!0}},[t,n,a]),s}function d2({page:t,matches:n,...a}){let s=qr(),{manifest:c,routeModules:d}=Hv(),{basename:f}=Bv(),{loaderData:p,matches:g}=a2(),x=y.useMemo(()=>og(t,n,g,c,s,"data"),[t,n,g,c,s]),v=y.useMemo(()=>og(t,n,g,c,s,"assets"),[t,n,g,c,s]),w=y.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let T=new Set,k=!1;if(n.forEach(I=>{let C=c.routes[I.route.id];!C||!C.hasLoader||(!x.some(N=>N.route.id===I.route.id)&&I.route.id in p&&d[I.route.id]?.shouldRevalidate||C.hasClientLoader?k=!0:T.add(I.route.id))}),T.size===0)return[];let P=Xb(t,f,"data");return k&&T.size>0&&P.searchParams.set("_routes",n.filter(I=>T.has(I.route.id)).map(I=>I.route.id).join(",")),[P.pathname+P.search]},[f,p,s,c,x,n,t,d]),S=y.useMemo(()=>r2(v,c),[v,c]),j=c2(v);return y.createElement(y.Fragment,null,w.map(T=>y.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...a})),S.map(T=>y.createElement("link",{key:T,rel:"modulepreload",href:T,...a})),j.map(({key:T,link:k})=>y.createElement("link",{key:T,nonce:a.nonce,...k})))}function u2(...t){return n=>{t.forEach(a=>{typeof a=="function"?a(n):a!=null&&(a.current=n)})}}var Wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wv&&(window.__reactRouterVersion="7.9.1")}catch{}function f2({basename:t,children:n,window:a}){let s=y.useRef();s.current==null&&(s.current=Zw({window:a,v5Compat:!0}));let c=s.current,[d,f]=y.useState({action:c.action,location:c.location}),p=y.useCallback(g=>{y.startTransition(()=>f(g))},[f]);return y.useLayoutEffect(()=>c.listen(p),[c,p]),y.createElement(Hb,{basename:t,children:n,location:d.location,navigationType:d.action,navigator:c})}var Uv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vv=y.forwardRef(function({onClick:n,discover:a="render",prefetch:s="none",relative:c,reloadDocument:d,replace:f,state:p,target:g,to:x,preventScrollReset:v,viewTransition:w,...S},j){let{basename:T}=y.useContext(yr),k=typeof x=="string"&&Uv.test(x),P,I=!1;if(typeof x=="string"&&k&&(P=x,Wv))try{let Q=new URL(window.location.href),ae=x.startsWith("//")?new URL(Q.protocol+x):new URL(x),xe=Gr(ae.pathname,T);ae.origin===Q.origin&&xe!=null?x=xe+ae.search+ae.hash:I=!0}catch{gr(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=Eb(x,{relative:c}),[N,D,H]=s2(s,S),W=g2(x,{replace:f,state:p,target:g,preventScrollReset:v,relative:c,viewTransition:w});function O(Q){n&&n(Q),Q.defaultPrevented||W(Q)}let F=y.createElement("a",{...S,...H,href:P||C,onClick:I||d?n:O,ref:u2(j,D),target:g,"data-discover":!k&&a==="render"?"true":void 0});return N&&!k?y.createElement(y.Fragment,null,F,y.createElement(l2,{page:C})):F});Vv.displayName="Link";var m2=y.forwardRef(function({"aria-current":n="page",caseSensitive:a=!1,className:s="",end:c=!1,style:d,to:f,viewTransition:p,children:g,...x},v){let w=na(f,{relative:x.relative}),S=qr(),j=y.useContext(Al),{navigator:T,basename:k}=y.useContext(yr),P=j!=null&&b2(w)&&p===!0,I=T.encodeLocation?T.encodeLocation(w).pathname:w.pathname,C=S.pathname,N=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;a||(C=C.toLowerCase(),N=N?N.toLowerCase():null,I=I.toLowerCase()),N&&k&&(N=Gr(N,k)||N);const D=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let H=C===I||!c&&C.startsWith(I)&&C.charAt(D)==="/",W=N!=null&&(N===I||!c&&N.startsWith(I)&&N.charAt(I.length)==="/"),O={isActive:H,isPending:W,isTransitioning:P},F=H?n:void 0,Q;typeof s=="function"?Q=s(O):Q=[s,H?"active":null,W?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let ae=typeof d=="function"?d(O):d;return y.createElement(Vv,{...x,"aria-current":F,className:Q,ref:v,style:ae,to:f,viewTransition:p},typeof g=="function"?g(O):g)});m2.displayName="NavLink";var p2=y.forwardRef(({discover:t="render",fetcherKey:n,navigate:a,reloadDocument:s,replace:c,state:d,method:f=ll,action:p,onSubmit:g,relative:x,preventScrollReset:v,viewTransition:w,...S},j)=>{let T=y2(),k=w2(p,{relative:x}),P=f.toLowerCase()==="get"?"get":"post",I=typeof p=="string"&&Uv.test(p),C=N=>{if(g&&g(N),N.defaultPrevented)return;N.preventDefault();let D=N.nativeEvent.submitter,H=D?.getAttribute("formmethod")||f;T(D||N.currentTarget,{fetcherKey:n,method:H,navigate:a,replace:c,state:d,relative:x,preventScrollReset:v,viewTransition:w})};return y.createElement("form",{ref:j,method:P,action:k,onSubmit:s?g:C,...S,"data-discover":!I&&t==="render"?"true":void 0})});p2.displayName="Form";function h2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gv(t){let n=y.useContext(Ko);return qe(n,h2(t)),n}function g2(t,{target:n,replace:a,state:s,preventScrollReset:c,relative:d,viewTransition:f}={}){let p=Qr(),g=qr(),x=na(t,{relative:d});return y.useCallback(v=>{if(Yb(v,n)){v.preventDefault();let w=a!==void 0?a:Xi(g)===Xi(x);p(t,{replace:w,state:s,preventScrollReset:c,relative:d,viewTransition:f})}},[g,p,x,a,s,n,t,c,d,f])}var v2=0,x2=()=>`__${String(++v2)}__`;function y2(){let{router:t}=Gv("useSubmit"),{basename:n}=y.useContext(yr),a=Lb();return y.useCallback(async(s,c={})=>{let{action:d,method:f,encType:p,formData:g,body:x}=Qb(s,n);if(c.navigate===!1){let v=c.fetcherKey||x2();await t.fetch(v,a,c.action||d,{preventScrollReset:c.preventScrollReset,formData:g,body:x,formMethod:c.method||f,formEncType:c.encType||p,flushSync:c.flushSync})}else await t.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:g,body:x,formMethod:c.method||f,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:a,flushSync:c.flushSync,viewTransition:c.viewTransition})},[t,n,a])}function w2(t,{relative:n}={}){let{basename:a}=y.useContext(yr),s=y.useContext(wr);qe(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),d={...na(t||".",{relative:n})},f=qr();if(t==null){d.search=f.search;let p=new URLSearchParams(d.search),g=p.getAll("index");if(g.some(v=>v==="")){p.delete("index"),g.filter(w=>w).forEach(w=>p.append("index",w));let v=p.toString();d.search=v?`?${v}`:""}}return(!t||t===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(d.pathname=d.pathname==="/"?a:Vr([a,d.pathname])),Xi(d)}function b2(t,{relative:n}={}){let a=y.useContext($v);qe(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Gv("useViewTransitionState"),c=na(t,{relative:n});if(!a.isTransitioning)return!1;let d=Gr(a.currentLocation.pathname,s)||a.currentLocation.pathname,f=Gr(a.nextLocation.pathname,s)||a.nextLocation.pathname;return xl(c.pathname,f)!=null||xl(c.pathname,d)!=null}var oa=Tv();const C2=Rv(oa);var At=function(){return At=Object.assign||function(n){for(var a,s=1,c=arguments.length;s<c;s++){a=arguments[s];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(n[d]=a[d])}return n},At.apply(this,arguments)};function yl(t,n,a){if(a||arguments.length===2)for(var s=0,c=n.length,d;s<c;s++)(d||!(s in n))&&(d||(d=Array.prototype.slice.call(n,0,s)),d[s]=n[s]);return t.concat(d||Array.prototype.slice.call(n))}var Je="-ms-",qi="-moz-",Le="-webkit-",Jv="comm",Dl="rule",vf="decl",k2="@import",Yv="@keyframes",S2="@layer",Kv=Math.abs,xf=String.fromCharCode,Mu=Object.assign;function j2(t,n){return pt(t,0)^45?(((n<<2^pt(t,0))<<2^pt(t,1))<<2^pt(t,2))<<2^pt(t,3):0}function qv(t){return t.trim()}function Ur(t,n){return(t=n.exec(t))?t[0]:t}function Ee(t,n,a){return t.replace(n,a)}function dl(t,n,a){return t.indexOf(n,a)}function pt(t,n){return t.charCodeAt(n)|0}function Fo(t,n,a){return t.slice(n,a)}function Rr(t){return t.length}function Qv(t){return t.length}function Yi(t,n){return n.push(t),t}function E2(t,n){return t.map(n).join("")}function ig(t,n){return t.filter(function(a){return!Ur(a,n)})}var $l=1,Bo=1,Xv=0,Xt=0,ot=0,Qo="";function zl(t,n,a,s,c,d,f,p){return{value:t,root:n,parent:a,type:s,props:c,children:d,line:$l,column:Bo,length:f,return:"",siblings:p}}function yn(t,n){return Mu(zl("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},n)}function No(t){for(;t.root;)t=yn(t.root,{children:[t]});Yi(t,t.siblings)}function P2(){return ot}function R2(){return ot=Xt>0?pt(Qo,--Xt):0,Bo--,ot===10&&(Bo=1,$l--),ot}function pr(){return ot=Xt<Xv?pt(Qo,Xt++):0,Bo++,ot===10&&(Bo=1,$l++),ot}function Vn(){return pt(Qo,Xt)}function ul(){return Xt}function Ll(t,n){return Fo(Qo,t,n)}function Fu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T2(t){return $l=Bo=1,Xv=Rr(Qo=t),Xt=0,[]}function N2(t){return Qo="",t}function Zd(t){return qv(Ll(Xt-1,Bu(t===91?t+2:t===40?t+1:t)))}function I2(t){for(;(ot=Vn())&&ot<33;)pr();return Fu(t)>2||Fu(ot)>3?"":" "}function A2(t,n){for(;--n&&pr()&&!(ot<48||ot>102||ot>57&&ot<65||ot>70&&ot<97););return Ll(t,ul()+(n<6&&Vn()==32&&pr()==32))}function Bu(t){for(;pr();)switch(ot){case t:return Xt;case 34:case 39:t!==34&&t!==39&&Bu(ot);break;case 40:t===41&&Bu(t);break;case 92:pr();break}return Xt}function _2(t,n){for(;pr()&&t+ot!==57;)if(t+ot===84&&Vn()===47)break;return"/*"+Ll(n,Xt-1)+"*"+xf(t===47?t:pr())}function D2(t){for(;!Fu(Vn());)pr();return Ll(t,Xt)}function $2(t){return N2(fl("",null,null,null,[""],t=T2(t),0,[0],t))}function fl(t,n,a,s,c,d,f,p,g){for(var x=0,v=0,w=f,S=0,j=0,T=0,k=1,P=1,I=1,C=0,N="",D=c,H=d,W=s,O=N;P;)switch(T=C,C=pr()){case 40:if(T!=108&&pt(O,w-1)==58){dl(O+=Ee(Zd(C),"&","&\f"),"&\f",Kv(x?p[x-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:O+=Zd(C);break;case 9:case 10:case 13:case 32:O+=I2(T);break;case 92:O+=A2(ul()-1,7);continue;case 47:switch(Vn()){case 42:case 47:Yi(z2(_2(pr(),ul()),n,a,g),g);break;default:O+="/"}break;case 123*k:p[x++]=Rr(O)*I;case 125*k:case 59:case 0:switch(C){case 0:case 125:P=0;case 59+v:I==-1&&(O=Ee(O,/\f/g,"")),j>0&&Rr(O)-w&&Yi(j>32?sg(O+";",s,a,w-1,g):sg(Ee(O," ","")+";",s,a,w-2,g),g);break;case 59:O+=";";default:if(Yi(W=ag(O,n,a,x,v,c,p,N,D=[],H=[],w,d),d),C===123)if(v===0)fl(O,n,W,W,D,d,w,p,H);else switch(S===99&&pt(O,3)===110?100:S){case 100:case 108:case 109:case 115:fl(t,W,W,s&&Yi(ag(t,W,W,0,0,c,p,N,c,D=[],w,H),H),c,H,w,p,s?D:H);break;default:fl(O,W,W,W,[""],H,0,p,H)}}x=v=j=0,k=I=1,N=O="",w=f;break;case 58:w=1+Rr(O),j=T;default:if(k<1){if(C==123)--k;else if(C==125&&k++==0&&R2()==125)continue}switch(O+=xf(C),C*k){case 38:I=v>0?1:(O+="\f",-1);break;case 44:p[x++]=(Rr(O)-1)*I,I=1;break;case 64:Vn()===45&&(O+=Zd(pr())),S=Vn(),v=w=Rr(N=O+=D2(ul())),C++;break;case 45:T===45&&Rr(O)==2&&(k=0)}}return d}function ag(t,n,a,s,c,d,f,p,g,x,v,w){for(var S=c-1,j=c===0?d:[""],T=Qv(j),k=0,P=0,I=0;k<s;++k)for(var C=0,N=Fo(t,S+1,S=Kv(P=f[k])),D=t;C<T;++C)(D=qv(P>0?j[C]+" "+N:Ee(N,/&\f/g,j[C])))&&(g[I++]=D);return zl(t,n,a,c===0?Dl:p,g,x,v,w)}function z2(t,n,a,s){return zl(t,n,a,Jv,xf(P2()),Fo(t,2,-2),0,s)}function sg(t,n,a,s,c){return zl(t,n,a,vf,Fo(t,0,s),Fo(t,s+1,-1),s,c)}function Zv(t,n,a){switch(j2(t,n)){case 5103:return Le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+t+t;case 4789:return qi+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+t+qi+t+Je+t+t;case 5936:switch(pt(t,n+11)){case 114:return Le+t+Je+Ee(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Le+t+Je+Ee(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Le+t+Je+Ee(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Le+t+Je+t+t;case 6165:return Le+t+Je+"flex-"+t+t;case 5187:return Le+t+Ee(t,/(\w+).+(:[^]+)/,Le+"box-$1$2"+Je+"flex-$1$2")+t;case 5443:return Le+t+Je+"flex-item-"+Ee(t,/flex-|-self/g,"")+(Ur(t,/flex-|baseline/)?"":Je+"grid-row-"+Ee(t,/flex-|-self/g,""))+t;case 4675:return Le+t+Je+"flex-line-pack"+Ee(t,/align-content|flex-|-self/g,"")+t;case 5548:return Le+t+Je+Ee(t,"shrink","negative")+t;case 5292:return Le+t+Je+Ee(t,"basis","preferred-size")+t;case 6060:return Le+"box-"+Ee(t,"-grow","")+Le+t+Je+Ee(t,"grow","positive")+t;case 4554:return Le+Ee(t,/([^-])(transform)/g,"$1"+Le+"$2")+t;case 6187:return Ee(Ee(Ee(t,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),t,"")+t;case 5495:case 3959:return Ee(t,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return Ee(Ee(t,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+t+t;case 4200:if(!Ur(t,/flex-|baseline/))return Je+"grid-column-align"+Fo(t,n)+t;break;case 2592:case 3360:return Je+Ee(t,"template-","")+t;case 4384:case 3616:return a&&a.some(function(s,c){return n=c,Ur(s.props,/grid-\w+-end/)})?~dl(t+(a=a[n].value),"span",0)?t:Je+Ee(t,"-start","")+t+Je+"grid-row-span:"+(~dl(a,"span",0)?Ur(a,/\d+/):+Ur(a,/\d+/)-+Ur(t,/\d+/))+";":Je+Ee(t,"-start","")+t;case 4896:case 4128:return a&&a.some(function(s){return Ur(s.props,/grid-\w+-start/)})?t:Je+Ee(Ee(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Ee(t,/(.+)-inline(.+)/,Le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(t)-1-n>6)switch(pt(t,n+1)){case 109:if(pt(t,n+4)!==45)break;case 102:return Ee(t,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+qi+(pt(t,n+3)==108?"$3":"$2-$3"))+t;case 115:return~dl(t,"stretch",0)?Zv(Ee(t,"stretch","fill-available"),n,a)+t:t}break;case 5152:case 5920:return Ee(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,d,f,p,g,x){return Je+c+":"+d+x+(f?Je+c+"-span:"+(p?g:+g-+d)+x:"")+t});case 4949:if(pt(t,n+6)===121)return Ee(t,":",":"+Le)+t;break;case 6444:switch(pt(t,pt(t,14)===45?18:11)){case 120:return Ee(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(pt(t,14)===45?"inline-":"")+"box$3$1"+Le+"$2$3$1"+Je+"$2box$3")+t;case 100:return Ee(t,":",":"+Je)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ee(t,"scroll-","scroll-snap-")+t}return t}function wl(t,n){for(var a="",s=0;s<t.length;s++)a+=n(t[s],s,t,n)||"";return a}function L2(t,n,a,s){switch(t.type){case S2:if(t.children.length)break;case k2:case vf:return t.return=t.return||t.value;case Jv:return"";case Yv:return t.return=t.value+"{"+wl(t.children,s)+"}";case Dl:if(!Rr(t.value=t.props.join(",")))return""}return Rr(a=wl(t.children,s))?t.return=t.value+"{"+a+"}":""}function O2(t){var n=Qv(t);return function(a,s,c,d){for(var f="",p=0;p<n;p++)f+=t[p](a,s,c,d)||"";return f}}function M2(t){return function(n){n.root||(n=n.return)&&t(n)}}function F2(t,n,a,s){if(t.length>-1&&!t.return)switch(t.type){case vf:t.return=Zv(t.value,t.length,a);return;case Yv:return wl([yn(t,{value:Ee(t.value,"@","@"+Le)})],s);case Dl:if(t.length)return E2(a=t.props,function(c){switch(Ur(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":No(yn(t,{props:[Ee(c,/:(read-\w+)/,":"+qi+"$1")]})),No(yn(t,{props:[c]})),Mu(t,{props:ig(a,s)});break;case"::placeholder":No(yn(t,{props:[Ee(c,/:(plac\w+)/,":"+Le+"input-$1")]})),No(yn(t,{props:[Ee(c,/:(plac\w+)/,":"+qi+"$1")]})),No(yn(t,{props:[Ee(c,/:(plac\w+)/,Je+"input-$1")]})),No(yn(t,{props:[c]})),Mu(t,{props:ig(a,s)});break}return""})}}var B2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Ho=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",e0="active",t0="data-styled-version",Ol="6.1.19",yf=`/*!sc*/
`,bl=typeof window<"u"&&typeof document<"u",H2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),Ml=Object.freeze([]),Wo=Object.freeze({});function W2(t,n,a){return a===void 0&&(a=Wo),t.theme!==a.theme&&t.theme||n||a.theme}var r0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),U2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,V2=/(^-|-$)/g;function lg(t){return t.replace(U2,"-").replace(V2,"")}var G2=/(a)(d)/gi,ys=52,cg=function(t){return String.fromCharCode(t+(t>25?39:97))};function Hu(t){var n,a="";for(n=Math.abs(t);n>ys;n=n/ys|0)a=cg(n%ys)+a;return(cg(n%ys)+a).replace(G2,"$1-$2")}var eu,n0=5381,Lo=function(t,n){for(var a=n.length;a;)t=33*t^n.charCodeAt(--a);return t},o0=function(t){return Lo(n0,t)};function J2(t){return Hu(o0(t)>>>0)}function Y2(t){return t.displayName||t.name||"Component"}function tu(t){return typeof t=="string"&&!0}var i0=typeof Symbol=="function"&&Symbol.for,a0=i0?Symbol.for("react.memo"):60115,K2=i0?Symbol.for("react.forward_ref"):60112,q2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Q2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X2=((eu={})[K2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},eu[a0]=s0,eu);function dg(t){return("type"in(n=t)&&n.type.$$typeof)===a0?s0:"$$typeof"in t?X2[t.$$typeof]:q2;var n}var Z2=Object.defineProperty,e5=Object.getOwnPropertyNames,ug=Object.getOwnPropertySymbols,t5=Object.getOwnPropertyDescriptor,r5=Object.getPrototypeOf,fg=Object.prototype;function l0(t,n,a){if(typeof n!="string"){if(fg){var s=r5(n);s&&s!==fg&&l0(t,s,a)}var c=e5(n);ug&&(c=c.concat(ug(n)));for(var d=dg(t),f=dg(n),p=0;p<c.length;++p){var g=c[p];if(!(g in Q2||a&&a[g]||f&&g in f||d&&g in d)){var x=t5(n,g);try{Z2(t,g,x)}catch{}}}}return t}function Uo(t){return typeof t=="function"}function wf(t){return typeof t=="object"&&"styledComponentId"in t}function Un(t,n){return t&&n?"".concat(t," ").concat(n):t||n||""}function mg(t,n){if(t.length===0)return"";for(var a=t[0],s=1;s<t.length;s++)a+=t[s];return a}function Zi(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Wu(t,n,a){if(a===void 0&&(a=!1),!a&&!Zi(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var s=0;s<n.length;s++)t[s]=Wu(t[s],n[s]);else if(Zi(n))for(var s in n)t[s]=Wu(t[s],n[s]);return t}function bf(t,n){Object.defineProperty(t,"toString",{value:n})}function ia(t){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var n5=(function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return t.prototype.indexOfGroup=function(n){for(var a=0,s=0;s<n;s++)a+=this.groupSizes[s];return a},t.prototype.insertRules=function(n,a){if(n>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,d=c;n>=d;)if((d<<=1)<0)throw ia(16,"".concat(n));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var f=c;f<d;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(n+1),g=(f=0,a.length);f<g;f++)this.tag.insertRule(p,a[f])&&(this.groupSizes[n]++,p++)},t.prototype.clearGroup=function(n){if(n<this.length){var a=this.groupSizes[n],s=this.indexOfGroup(n),c=s+a;this.groupSizes[n]=0;for(var d=s;d<c;d++)this.tag.deleteRule(s)}},t.prototype.getGroup=function(n){var a="";if(n>=this.length||this.groupSizes[n]===0)return a;for(var s=this.groupSizes[n],c=this.indexOfGroup(n),d=c+s,f=c;f<d;f++)a+="".concat(this.tag.getRule(f)).concat(yf);return a},t})(),ml=new Map,Cl=new Map,pl=1,ws=function(t){if(ml.has(t))return ml.get(t);for(;Cl.has(pl);)pl++;var n=pl++;return ml.set(t,n),Cl.set(n,t),n},o5=function(t,n){pl=n+1,ml.set(t,n),Cl.set(n,t)},i5="style[".concat(Ho,"][").concat(t0,'="').concat(Ol,'"]'),a5=new RegExp("^".concat(Ho,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),s5=function(t,n,a){for(var s,c=a.split(","),d=0,f=c.length;d<f;d++)(s=c[d])&&t.registerName(n,s)},l5=function(t,n){for(var a,s=((a=n.textContent)!==null&&a!==void 0?a:"").split(yf),c=[],d=0,f=s.length;d<f;d++){var p=s[d].trim();if(p){var g=p.match(a5);if(g){var x=0|parseInt(g[1],10),v=g[2];x!==0&&(o5(v,x),s5(t,v,g[3]),t.getTag().insertRules(x,c)),c.length=0}else c.push(p)}}},pg=function(t){for(var n=document.querySelectorAll(i5),a=0,s=n.length;a<s;a++){var c=n[a];c&&c.getAttribute(Ho)!==e0&&(l5(t,c),c.parentNode&&c.parentNode.removeChild(c))}};function c5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var c0=function(t){var n=document.head,a=t||n,s=document.createElement("style"),c=(function(p){var g=Array.from(p.querySelectorAll("style[".concat(Ho,"]")));return g[g.length-1]})(a),d=c!==void 0?c.nextSibling:null;s.setAttribute(Ho,e0),s.setAttribute(t0,Ol);var f=c5();return f&&s.setAttribute("nonce",f),a.insertBefore(s,d),s},d5=(function(){function t(n){this.element=c0(n),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){if(a.sheet)return a.sheet;for(var s=document.styleSheets,c=0,d=s.length;c<d;c++){var f=s[c];if(f.ownerNode===a)return f}throw ia(17)})(this.element),this.length=0}return t.prototype.insertRule=function(n,a){try{return this.sheet.insertRule(a,n),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.prototype.getRule=function(n){var a=this.sheet.cssRules[n];return a&&a.cssText?a.cssText:""},t})(),u5=(function(){function t(n){this.element=c0(n),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(n,a){if(n<=this.length&&n>=0){var s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[n]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t})(),f5=(function(){function t(n){this.rules=[],this.length=0}return t.prototype.insertRule=function(n,a){return n<=this.length&&(this.rules.splice(n,0,a),this.length++,!0)},t.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},t})(),hg=bl,m5={isServer:!bl,useCSSOMInjection:!H2},d0=(function(){function t(n,a,s){n===void 0&&(n=Wo),a===void 0&&(a={});var c=this;this.options=At(At({},m5),n),this.gs=a,this.names=new Map(s),this.server=!!n.isServer,!this.server&&bl&&hg&&(hg=!1,pg(this)),bf(this,function(){return(function(d){for(var f=d.getTag(),p=f.length,g="",x=function(w){var S=(function(I){return Cl.get(I)})(w);if(S===void 0)return"continue";var j=d.names.get(S),T=f.getGroup(w);if(j===void 0||!j.size||T.length===0)return"continue";var k="".concat(Ho,".g").concat(w,'[id="').concat(S,'"]'),P="";j!==void 0&&j.forEach(function(I){I.length>0&&(P+="".concat(I,","))}),g+="".concat(T).concat(k,'{content:"').concat(P,'"}').concat(yf)},v=0;v<p;v++)x(v);return g})(c)})}return t.registerId=function(n){return ws(n)},t.prototype.rehydrate=function(){!this.server&&bl&&pg(this)},t.prototype.reconstructWithOptions=function(n,a){return a===void 0&&(a=!0),new t(At(At({},this.options),n),this.gs,a&&this.names||void 0)},t.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(n=(function(a){var s=a.useCSSOMInjection,c=a.target;return a.isServer?new f5(c):s?new d5(c):new u5(c)})(this.options),new n5(n)));var n},t.prototype.hasNameForId=function(n,a){return this.names.has(n)&&this.names.get(n).has(a)},t.prototype.registerName=function(n,a){if(ws(n),this.names.has(n))this.names.get(n).add(a);else{var s=new Set;s.add(a),this.names.set(n,s)}},t.prototype.insertRules=function(n,a,s){this.registerName(n,a),this.getTag().insertRules(ws(n),s)},t.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.prototype.clearRules=function(n){this.getTag().clearGroup(ws(n)),this.clearNames(n)},t.prototype.clearTag=function(){this.tag=void 0},t})(),p5=/&/g,h5=/^\s*\/\/.*$/gm;function u0(t,n){return t.map(function(a){return a.type==="rule"&&(a.value="".concat(n," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(n," ")),a.props=a.props.map(function(s){return"".concat(n," ").concat(s)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=u0(a.children,n)),a})}function g5(t){var n,a,s,c=Wo,d=c.options,f=d===void 0?Wo:d,p=c.plugins,g=p===void 0?Ml:p,x=function(S,j,T){return T.startsWith(a)&&T.endsWith(a)&&T.replaceAll(a,"").length>0?".".concat(n):S},v=g.slice();v.push(function(S){S.type===Dl&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(p5,a).replace(s,x))}),f.prefix&&v.push(F2),v.push(L2);var w=function(S,j,T,k){j===void 0&&(j=""),T===void 0&&(T=""),k===void 0&&(k="&"),n=k,a=j,s=new RegExp("\\".concat(a,"\\b"),"g");var P=S.replace(h5,""),I=$2(T||j?"".concat(T," ").concat(j," { ").concat(P," }"):P);f.namespace&&(I=u0(I,f.namespace));var C=[];return wl(I,O2(v.concat(M2(function(N){return C.push(N)})))),C};return w.hash=g.length?g.reduce(function(S,j){return j.name||ia(15),Lo(S,j.name)},n0).toString():"",w}var v5=new d0,Uu=g5(),f0=$e.createContext({shouldForwardProp:void 0,styleSheet:v5,stylis:Uu});f0.Consumer;$e.createContext(void 0);function gg(){return y.useContext(f0)}var x5=(function(){function t(n,a){var s=this;this.inject=function(c,d){d===void 0&&(d=Uu);var f=s.name+d.hash;c.hasNameForId(s.id,f)||c.insertRules(s.id,f,d(s.rules,f,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=a,bf(this,function(){throw ia(12,String(s.name))})}return t.prototype.getName=function(n){return n===void 0&&(n=Uu),this.name+n.hash},t})(),y5=function(t){return t>="A"&&t<="Z"};function vg(t){for(var n="",a=0;a<t.length;a++){var s=t[a];if(a===1&&s==="-"&&t[0]==="-")return t;y5(s)?n+="-"+s.toLowerCase():n+=s}return n.startsWith("ms-")?"-"+n:n}var m0=function(t){return t==null||t===!1||t===""},p0=function(t){var n,a,s=[];for(var c in t){var d=t[c];t.hasOwnProperty(c)&&!m0(d)&&(Array.isArray(d)&&d.isCss||Uo(d)?s.push("".concat(vg(c),":"),d,";"):Zi(d)?s.push.apply(s,yl(yl(["".concat(c," {")],p0(d),!1),["}"],!1)):s.push("".concat(vg(c),": ").concat((n=c,(a=d)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||n in B2||n.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return s};function Gn(t,n,a,s){if(m0(t))return[];if(wf(t))return[".".concat(t.styledComponentId)];if(Uo(t)){if(!Uo(d=t)||d.prototype&&d.prototype.isReactComponent||!n)return[t];var c=t(n);return Gn(c,n,a,s)}var d;return t instanceof x5?a?(t.inject(a,s),[t.getName(s)]):[t]:Zi(t)?p0(t):Array.isArray(t)?Array.prototype.concat.apply(Ml,t.map(function(f){return Gn(f,n,a,s)})):[t.toString()]}function w5(t){for(var n=0;n<t.length;n+=1){var a=t[n];if(Uo(a)&&!wf(a))return!1}return!0}var b5=o0(Ol),C5=(function(){function t(n,a,s){this.rules=n,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&w5(n),this.componentId=a,this.baseHash=Lo(b5,a),this.baseStyle=s,d0.registerId(a)}return t.prototype.generateAndInjectStyles=function(n,a,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,a,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))c=Un(c,this.staticRulesId);else{var d=mg(Gn(this.rules,n,a,s)),f=Hu(Lo(this.baseHash,d)>>>0);if(!a.hasNameForId(this.componentId,f)){var p=s(d,".".concat(f),void 0,this.componentId);a.insertRules(this.componentId,f,p)}c=Un(c,f),this.staticRulesId=f}else{for(var g=Lo(this.baseHash,s.hash),x="",v=0;v<this.rules.length;v++){var w=this.rules[v];if(typeof w=="string")x+=w;else if(w){var S=mg(Gn(w,n,a,s));g=Lo(g,S+v),x+=S}}if(x){var j=Hu(g>>>0);a.hasNameForId(this.componentId,j)||a.insertRules(this.componentId,j,s(x,".".concat(j),void 0,this.componentId)),c=Un(c,j)}}return c},t})(),h0=$e.createContext(void 0);h0.Consumer;var ru={};function k5(t,n,a){var s=wf(t),c=t,d=!tu(t),f=n.attrs,p=f===void 0?Ml:f,g=n.componentId,x=g===void 0?(function(D,H){var W=typeof D!="string"?"sc":lg(D);ru[W]=(ru[W]||0)+1;var O="".concat(W,"-").concat(J2(Ol+W+ru[W]));return H?"".concat(H,"-").concat(O):O})(n.displayName,n.parentComponentId):g,v=n.displayName,w=v===void 0?(function(D){return tu(D)?"styled.".concat(D):"Styled(".concat(Y2(D),")")})(t):v,S=n.displayName&&n.componentId?"".concat(lg(n.displayName),"-").concat(n.componentId):n.componentId||x,j=s&&c.attrs?c.attrs.concat(p).filter(Boolean):p,T=n.shouldForwardProp;if(s&&c.shouldForwardProp){var k=c.shouldForwardProp;if(n.shouldForwardProp){var P=n.shouldForwardProp;T=function(D,H){return k(D,H)&&P(D,H)}}else T=k}var I=new C5(a,S,s?c.componentStyle:void 0);function C(D,H){return(function(W,O,F){var Q=W.attrs,ae=W.componentStyle,xe=W.defaultProps,fe=W.foldedComponentIds,ye=W.styledComponentId,me=W.target,Se=$e.useContext(h0),se=gg(),ee=W.shouldForwardProp||se.shouldForwardProp,$=W2(O,Se,xe)||Wo,K=(function(ve,we,G){for(var ce,pe=At(At({},we),{className:void 0,theme:G}),Ce=0;Ce<ve.length;Ce+=1){var Re=Uo(ce=ve[Ce])?ce(pe):ce;for(var Ne in Re)pe[Ne]=Ne==="className"?Un(pe[Ne],Re[Ne]):Ne==="style"?At(At({},pe[Ne]),Re[Ne]):Re[Ne]}return we.className&&(pe.className=Un(pe.className,we.className)),pe})(Q,O,$),Y=K.as||me,E={};for(var B in K)K[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&K.theme===$||(B==="forwardedAs"?E.as=K.forwardedAs:ee&&!ee(B,Y)||(E[B]=K[B]));var X=(function(ve,we){var G=gg(),ce=ve.generateAndInjectStyles(we,G.styleSheet,G.stylis);return ce})(ae,K),te=Un(fe,ye);return X&&(te+=" "+X),K.className&&(te+=" "+K.className),E[tu(Y)&&!r0.has(Y)?"class":"className"]=te,F&&(E.ref=F),y.createElement(Y,E)})(N,D,H)}C.displayName=w;var N=$e.forwardRef(C);return N.attrs=j,N.componentStyle=I,N.displayName=w,N.shouldForwardProp=T,N.foldedComponentIds=s?Un(c.foldedComponentIds,c.styledComponentId):"",N.styledComponentId=S,N.target=s?c.target:t,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=s?(function(H){for(var W=[],O=1;O<arguments.length;O++)W[O-1]=arguments[O];for(var F=0,Q=W;F<Q.length;F++)Wu(H,Q[F],!0);return H})({},c.defaultProps,D):D}}),bf(N,function(){return".".concat(N.styledComponentId)}),d&&l0(N,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function xg(t,n){for(var a=[t[0]],s=0,c=n.length;s<c;s+=1)a.push(n[s],t[s+1]);return a}var yg=function(t){return Object.assign(t,{isCss:!0})};function S5(t){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];if(Uo(t)||Zi(t))return yg(Gn(xg(Ml,yl([t],n,!0))));var s=t;return n.length===0&&s.length===1&&typeof s[0]=="string"?Gn(s):yg(Gn(xg(s,n)))}function Vu(t,n,a){if(a===void 0&&(a=Wo),!n)throw ia(1,n);var s=function(c){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return t(n,a,S5.apply(void 0,yl([c],d,!1)))};return s.attrs=function(c){return Vu(t,n,At(At({},a),{attrs:Array.prototype.concat(a.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Vu(t,n,At(At({},a),c))},s}var g0=function(t){return Vu(k5,t)},m=g0;r0.forEach(function(t){m[t]=g0(t)});/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E5=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,a,s)=>s?s.toUpperCase():a.toLowerCase()),wg=t=>{const n=E5(t);return n.charAt(0).toUpperCase()+n.slice(1)},v0=(...t)=>t.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=y.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:f,...p},g)=>y.createElement("svg",{ref:g,...P5,width:n,height:n,stroke:t,strokeWidth:s?Number(a)*24/Number(n):a,className:v0("lucide",c),...p},[...f.map(([x,v])=>y.createElement(x,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(t,n)=>{const a=y.forwardRef(({className:s,...c},d)=>y.createElement(R5,{ref:d,iconNode:n,className:v0(`lucide-${j5(wg(t))}`,`lucide-${t}`,s),...c}));return a.displayName=wg(t),a};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],N5=be("activity",T5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],A5=be("archive",I5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Cf=be("arrow-left",_5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$5=be("arrow-right",D5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],L5=be("briefcase",z5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],bg=be("building-2",O5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],x0=be("calendar",M5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],kf=be("chart-column",F5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Sf=be("check",B5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fl=be("chevron-down",H5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],jf=be("chevron-left",W5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],y0=be("chevron-right",U5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],w0=be("chevron-up",V5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],J5=be("chevrons-left",G5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],K5=be("chevrons-right",Y5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],b0=be("circle-alert",q5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],C0=be("circle-check-big",Q5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gu=be("circle-check",X5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Cn=be("clock",Z5);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],tC=be("download",eC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ef=be("external-link",rC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],oC=be("eye-off",nC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],k0=be("eye",iC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],kn=be("file-text",aC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],S0=be("funnel",sC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],j0=be("history",lC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],dC=be("house",cC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],E0=be("loader-circle",uC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Cg=be("map-pin",fC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],pC=be("menu",mC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],gC=be("moon",hC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],hr=be("package",vC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],P0=be("pause",xC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],wC=be("pen",yC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],kl=be("play",bC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Jr=be("plus",CC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],SC=be("search",kC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Jn=be("settings",jC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]],R0=be("ship",EC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Pf=be("square-pen",PC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],TC=be("sun",RC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],IC=be("trash-2",NC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],_C=be("trending-up",AC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],T0=be("triangle-alert",DC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Yn=be("upload",$C);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],LC=be("user",zC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],MC=be("users",OC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],BC=be("workflow",FC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N0=be("x",HC),WC=m.div`
  width: 100%;
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(0.75rem, 3vw, 1.5rem);
`,UC=m.div`
  max-width: 64rem;
  margin: 0 auto;
`,VC=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  /* Stack vertically on very small screens */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`,GC=m.div`
  position: absolute;
  top: clamp(1.25rem, 4vw, 1.5rem);
  left: clamp(1.5rem, 6vw, 2rem);
  right: clamp(1.5rem, 6vw, 2rem);
  height: clamp(0.125rem, 0.5vw, 0.25rem);
  background-color: var(--border);
  border-radius: 9999px;
  
  @media (max-width: 480px) {
    display: none;
  }
`,JC=m.div`
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--primary));
  border-radius: 9999px;
  transition: all 0.5s ease-out;
  width: ${t=>t.width};
  opacity: 0.8;
`,YC=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  max-width: clamp(6rem, 15vw, 8rem);
  
  @media (max-width: 480px) {
    flex-direction: row;
    max-width: none;
    width: 100%;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
  }
`,KC=m.div`
  width: clamp(2.5rem, 6vw, 3rem);
  height: clamp(2.5rem, 6vw, 3rem);
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: var(--card);
  
  ${t=>{switch(t.$status){case"completed":return`
          background-color: #dcfce7;
          border-color: #16a34a;
          color: #15803d;
        `;case"current":return`
          background-color: #dbeafe;
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 0 clamp(2px, 1vw, 4px) #dbeafe, 0 4px 8px -2px rgba(0, 0, 0, 0.1);
          transform: scale(1.05);
          
          @media (min-width: 768px) {
            transform: scale(1.1);
          }
        `;default:return`
          background-color: var(--muted);
          border-color: var(--border);
          color: var(--muted-foreground);
        `}}}
`,qC=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: clamp(0.75rem, 2vw, 0.875rem);
    font-weight: ${t=>t.$status==="current"?"600":"500"};
  }
`,QC=m(Sf)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: #16a34a;
`,XC=m(Cn)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--primary);
`,ZC=m.div`
  margin-top: clamp(0.5rem, 2vw, 0.75rem);
  text-align: center;
  
  @media (max-width: 480px) {
    margin-top: 0;
    text-align: left;
    flex: 1;
  }
`,ek=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  margin: 0;
  color: ${t=>t.$status==="current"?"var(--primary)":"var(--muted-foreground)"};
`,tk=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  margin: clamp(0.125rem, 0.5vw, 0.25rem) 0 0 0;
  line-height: 1.25;
  color: ${t=>{switch(t.$status){case"current":return"var(--foreground)";case"completed":return"var(--foreground)";default:return"var(--muted-foreground)"}}};
  font-weight: ${t=>t.$status==="current"?"600":"400"};
`,rk=m.div`
  background-color: var(--card);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`,nk=m.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  margin: 0 0 clamp(1rem, 3vw, 1.5rem) 0;
`,ok=m.div`
  position: relative;
`,ik=m.div`
  position: absolute;
  top: clamp(1.25rem, 4vw, 1.5rem);
  left: clamp(1rem, 4vw, 1.5rem);
  right: clamp(1rem, 4vw, 1.5rem);
  height: clamp(0.125rem, 0.5vw, 0.25rem);
  background-color: var(--border);
  border-radius: 9999px;
  
  @media (max-width: 640px) {
    display: none;
  }
`,ak=m.div`
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--primary));
  border-radius: 9999px;
  transition: all 0.5s ease-out;
  width: ${t=>t.width};
  max-width: 100%;
  opacity: 0.8;
`,sk=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(4rem, 12vw, 5rem), 1fr));
  gap: clamp(0.5rem, 2vw, 1rem);
  position: relative;
  z-index: 10;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,lk=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
  }
`,ck=m.div`
  width: clamp(2.5rem, 6vw, 3rem);
  height: clamp(2.5rem, 6vw, 3rem);
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  background-color: var(--card);
  
  ${t=>{switch(t.$status){case"completed":return`
          background-color: #dcfce7;
          border-color: #16a34a;
          color: #15803d;
        `;case"current":return`
          background-color: #dbeafe;
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 0 clamp(2px, 1vw, 4px) #dbeafe, 0 4px 8px -2px rgba(0, 0, 0, 0.1);
          transform: scale(1.05);
        `;case"external":return`
          background-color: var(--muted);
          border-color: var(--muted-foreground);
          color: var(--muted-foreground);
        `;case"issue":return`
          background-color: #fee2e2;
          border-color: #ef4444;
          color: #dc2626;
        `;default:return`
          background-color: var(--card);
          border-color: var(--border);
          color: var(--muted-foreground);
        `}}}
`,dk=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: clamp(0.75rem, 2vw, 0.875rem);
    font-weight: 500;
  }
`,uk=m(Sf)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: #16a34a;
`,fk=m(Cn)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--primary);
`,mk=m(b0)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: #dc2626;
`,pk=m.div`
  margin-top: clamp(0.5rem, 2vw, 0.75rem);
  text-align: center;
  
  @media (max-width: 640px) {
    margin-top: 0;
    text-align: left;
    flex: 1;
  }
`,hk=m.p`
  font-size: clamp(0.625rem, 2vw, 0.75rem);
  line-height: 1.25;
  margin: 0;
  color: ${t=>{switch(t.$status){case"current":return"var(--primary)";case"completed":return"#16a34a";case"issue":return"#dc2626";default:return"var(--muted-foreground)"}}};
  font-weight: ${t=>t.$status==="current"?"600":"500"};
`,gk=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  line-height: 1.2;
  
  @media (max-width: 640px) {
    margin-top: 0.125rem;
  }
`;function vk({currentStep:t,totalSteps:n,stepLabels:a,variant:s="creation"}){const c=p=>p<t?"completed":p===t?"current":"pending",d=(p,g)=>{switch(p){case"completed":return o.jsx(QC,{});case"current":return s==="tracking"?o.jsx(XC,{}):o.jsx("span",{children:g});default:return o.jsx("span",{children:g})}},f=n>1?`${(t-1)/(n-1)*100}%`:"0%";return o.jsx(WC,{children:o.jsx(UC,{children:o.jsxs(VC,{children:[o.jsx(GC,{children:o.jsx(JC,{width:f})}),a.map((p,g)=>{const x=g+1,v=c(x);return o.jsxs(YC,{children:[o.jsx(KC,{$status:v,children:o.jsx(qC,{$status:v,children:d(v,x)})}),o.jsxs(ZC,{children:[o.jsxs(ek,{$status:v,children:["Step ",x]}),o.jsx(tk,{$status:v,children:p})]})]},g)})]})})})}function Rf({currentStage:t,stages:n}){const a=(d,f)=>{switch(d){case"completed":return o.jsx(uk,{});case"current":return o.jsx(fk,{});case"issue":return o.jsx(mk,{});default:return o.jsx("span",{children:f+1})}},s=n.filter(d=>d.status==="completed").length,c=n.length>1?`${s/(n.length-1)*100}%`:"0%";return o.jsxs(rk,{children:[o.jsx(nk,{children:"Progress Timeline"}),o.jsxs(ok,{children:[o.jsx(ik,{children:o.jsx(ak,{width:c})}),o.jsx(sk,{children:n.map((d,f)=>o.jsxs(lk,{children:[o.jsx(ck,{$status:d.status,children:o.jsx(dk,{children:a(d.status,f)})}),o.jsxs(pk,{children:[o.jsx(hk,{$status:d.status,children:d.name}),d.description&&o.jsx(gk,{children:d.description})]})]},f))})]})]})}function xk(t){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}Array(12).fill(0);let Ju=1;class yk{constructor(){this.subscribe=n=>(this.subscribers.push(n),()=>{const a=this.subscribers.indexOf(n);this.subscribers.splice(a,1)}),this.publish=n=>{this.subscribers.forEach(a=>a(n))},this.addToast=n=>{this.publish(n),this.toasts=[...this.toasts,n]},this.create=n=>{var a;const{message:s,...c}=n,d=typeof n?.id=="number"||((a=n.id)==null?void 0:a.length)>0?n.id:Ju++,f=this.toasts.find(g=>g.id===d),p=n.dismissible===void 0?!0:n.dismissible;return this.dismissedToasts.has(d)&&this.dismissedToasts.delete(d),f?this.toasts=this.toasts.map(g=>g.id===d?(this.publish({...g,...n,id:d,title:s}),{...g,...n,id:d,dismissible:p,title:s}):g):this.addToast({title:s,...c,dismissible:p,id:d}),d},this.dismiss=n=>(n?(this.dismissedToasts.add(n),requestAnimationFrame(()=>this.subscribers.forEach(a=>a({id:n,dismiss:!0})))):this.toasts.forEach(a=>{this.subscribers.forEach(s=>s({id:a.id,dismiss:!0}))}),n),this.message=(n,a)=>this.create({...a,message:n}),this.error=(n,a)=>this.create({...a,message:n,type:"error"}),this.success=(n,a)=>this.create({...a,type:"success",message:n}),this.info=(n,a)=>this.create({...a,type:"info",message:n}),this.warning=(n,a)=>this.create({...a,type:"warning",message:n}),this.loading=(n,a)=>this.create({...a,type:"loading",message:n}),this.promise=(n,a)=>{if(!a)return;let s;a.loading!==void 0&&(s=this.create({...a,promise:n,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));const c=Promise.resolve(n instanceof Function?n():n);let d=s!==void 0,f;const p=c.then(async x=>{if(f=["resolve",x],$e.isValidElement(x))d=!1,this.create({id:s,type:"default",message:x});else if(bk(x)&&!x.ok){d=!1;const w=typeof a.error=="function"?await a.error(`HTTP error! status: ${x.status}`):a.error,S=typeof a.description=="function"?await a.description(`HTTP error! status: ${x.status}`):a.description,T=typeof w=="object"&&!$e.isValidElement(w)?w:{message:w};this.create({id:s,type:"error",description:S,...T})}else if(x instanceof Error){d=!1;const w=typeof a.error=="function"?await a.error(x):a.error,S=typeof a.description=="function"?await a.description(x):a.description,T=typeof w=="object"&&!$e.isValidElement(w)?w:{message:w};this.create({id:s,type:"error",description:S,...T})}else if(a.success!==void 0){d=!1;const w=typeof a.success=="function"?await a.success(x):a.success,S=typeof a.description=="function"?await a.description(x):a.description,T=typeof w=="object"&&!$e.isValidElement(w)?w:{message:w};this.create({id:s,type:"success",description:S,...T})}}).catch(async x=>{if(f=["reject",x],a.error!==void 0){d=!1;const v=typeof a.error=="function"?await a.error(x):a.error,w=typeof a.description=="function"?await a.description(x):a.description,j=typeof v=="object"&&!$e.isValidElement(v)?v:{message:v};this.create({id:s,type:"error",description:w,...j})}}).finally(()=>{d&&(this.dismiss(s),s=void 0),a.finally==null||a.finally.call(a)}),g=()=>new Promise((x,v)=>p.then(()=>f[0]==="reject"?v(f[1]):x(f[1])).catch(v));return typeof s!="string"&&typeof s!="number"?{unwrap:g}:Object.assign(s,{unwrap:g})},this.custom=(n,a)=>{const s=a?.id||Ju++;return this.create({jsx:n(s),id:s,...a}),s},this.getActiveToasts=()=>this.toasts.filter(n=>!this.dismissedToasts.has(n.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const qt=new yk,wk=(t,n)=>{const a=n?.id||Ju++;return qt.addToast({title:t,...n,id:a}),a},bk=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",Ck=wk,kk=()=>qt.toasts,Sk=()=>qt.getActiveToasts(),Qi=Object.assign(Ck,{success:qt.success,info:qt.info,warning:qt.warning,error:qt.error,custom:qt.custom,message:qt.message,promise:qt.promise,dismiss:qt.dismiss,loading:qt.loading},{getHistory:kk,getToasts:Sk});xk("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");const Bl=[{id:"CONS-001234",title:"Shanghai to Los Angeles - Electronics Consolidation",status:"In Progress",currentStage:3,createdAt:"2025-01-15T08:30:00Z",updatedAt:"2025-01-18T15:22:00Z",totalJobs:3,totalWeight:"2150 kg",totalVolume:"3.8 m³",estimatedDelivery:"2025-02-05",template:"Import LCL",origin:{port:"Shanghai Port (CNSHA)",country:"China",city:"Shanghai"},destination:{port:"Los Angeles Port (USLAX)",country:"United States",city:"Los Angeles"},carrier:"COSCO Shipping",vessel:"COSCO Galaxy",voyageNumber:"CG2501",individualJobs:[{id:"JOB-001001",poNumber:"PO-2025-001",template:"Import LCL",status:"In Progress",currentStage:3,shipper:{company:"ABC Electronics Ltd",contact:"Zhang Wei",email:"zhang.wei@abcelectronics.cn",phone:"+86 21 1235 5678",address:"123 Technology Road",city:"Shanghai",country:"China",postalCode:"200001"},consignee:{company:"XYZ Corp",contact:"John Smith",email:"john.smith@xyzcorp.com",phone:"+1 310 555 0123",address:"556 Business Blvd",city:"Los Angeles",country:"United States",postalCode:"90210"},cargo:{description:"Electronic Components",weight:"750 kg",volume:"1.2 m³",pieces:15,commodityCode:"8552.31"},dates:{cargoReadyDate:"2025-01-20",estimatedDeparture:"2025-01-25",estimatedArrival:"2025-02-03",estimatedDelivery:"2025-02-05"}},{id:"JOB-001002",poNumber:"PO-2025-002",template:"Import LCL",status:"In Progress",currentStage:3,shipper:{company:"DEF Manufacturing",contact:"Li Ming",email:"li.ming@defmfg.cn",phone:"+86 21 2355 6789",address:"789 Industrial Ave",city:"Shanghai",country:"China",postalCode:"200002"},consignee:{company:"XYZ Corp",contact:"John Smith",email:"john.smith@xyzcorp.com",phone:"+1 310 555 0123",address:"556 Business Blvd",city:"Los Angeles",country:"United States",postalCode:"90210"},cargo:{description:"Precision Instruments",weight:"850 kg",volume:"1.5 m³",pieces:8,commodityCode:"9031.80"},dates:{cargoReadyDate:"2025-01-22",estimatedDeparture:"2025-01-25",estimatedArrival:"2025-02-03",estimatedDelivery:"2025-02-05"}},{id:"JOB-001003",poNumber:"PO-2025-003",template:"Import LCL",status:"In Progress",currentStage:2,shipper:{company:"GHI Textiles",contact:"Wang Lei",email:"wang.lei@ghitextiles.cn",phone:"+86 21 3556 7890",address:"321 Fabric Street",city:"Shanghai",country:"China",postalCode:"200003"},consignee:{company:"ABC Retail",contact:"Sarah Johnson",email:"sarah.johnson@abcretail.com",phone:"+1 310 555 0556",address:"789 Retail Plaza",city:"Los Angeles",country:"United States",postalCode:"90211"},cargo:{description:"Cotton Fabrics",weight:"550 kg",volume:"1.2 m³",pieces:12,commodityCode:"5208.12"},dates:{cargoReadyDate:"2025-01-25",estimatedDeparture:"2025-01-25",estimatedArrival:"2025-02-03",estimatedDelivery:"2025-02-05"}}]},{id:"CONS-001235",title:"Hamburg to New York - Auto Parts Consolidation",status:"Completed",currentStage:7,createdAt:"2025-01-08T10:15:00Z",updatedAt:"2025-01-25T16:55:00Z",totalJobs:2,totalWeight:"1800 kg",totalVolume:"2.5 m³",estimatedDelivery:"2025-01-25",template:"Import FCL",origin:{port:"Hamburg Port (DEHAM)",country:"Germany",city:"Hamburg"},destination:{port:"New York Port (USNYC)",country:"United States",city:"New York"},carrier:"Hapag-Lloyd",vessel:"Hamburg Express",voyageNumber:"HE2501",individualJobs:[{id:"JOB-001005",poNumber:"PO-2025-005",template:"Import FCL",status:"Completed",currentStage:7,shipper:{company:"German Auto Parts GmbH",contact:"Hans Mueller",email:"hans.mueller@gaparts.de",phone:"+59 50 1235 5678",address:"Autostraße 123",city:"Hamburg",country:"Germany",postalCode:"20095"},consignee:{company:"USA Motors Inc",contact:"Mike Wilson",email:"mike.wilson@usamotors.com",phone:"+1 212 555 0789",address:"567 Motor Ave",city:"New York",country:"United States",postalCode:"10001"},cargo:{description:"Automotive Parts",weight:"1200 kg",volume:"1.8 m³",pieces:25,commodityCode:"8708.99"},dates:{cargoReadyDate:"2025-01-10",estimatedDeparture:"2025-01-12",estimatedArrival:"2025-01-22",estimatedDelivery:"2025-01-25"}}]}],Vo=[{id:"JOB-002001",consolidationId:null,poNumber:"PO-2025-005",template:"Air Import",status:"In Progress",currentStage:1,createdAt:"2025-01-16T09:20:00Z",updatedAt:"2025-01-19T11:30:00Z",shipper:{company:"Tech Innovations LLC",contact:"Alice Brown",email:"alice.brown@techinnovations.com",phone:"+1 555 123 5567",address:"123 Innovation Dr",city:"San Francisco",country:"United States",postalCode:"95105"},consignee:{company:"European Tech Solutions",contact:"Pierre Dubois",email:"pierre.dubois@eurotech.fr",phone:"+33 1 23 55 67 89",address:"556 Tech Boulevard",city:"Paris",country:"France",postalCode:"75001"},cargo:{description:"Prototype Electronics",weight:"25 kg",volume:"0.3 m³",pieces:3,commodityCode:"8552.39"},dates:{cargoReadyDate:"2025-01-18",estimatedDeparture:"2025-01-20",estimatedArrival:"2025-01-21",estimatedDelivery:"2025-01-22"},flight:{airline:"Air France",flightNumber:"AF083",departure:"SFO",arrival:"CDG"}}],jk=async()=>(await new Promise(t=>setTimeout(t,800)),Bl),Ek=async t=>{await new Promise(n=>setTimeout(n,500));for(const n of Bl){const a=n.individualJobs?.find(s=>s.id===t);if(a)return a}return Vo.find(n=>n.id===t)},Pk=async t=>{await new Promise(a=>setTimeout(a,500));const n={...t,id:`JOB-${Date.now().toString().slice(-6)}`,status:"In Progress",currentStage:1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),consolidationId:null};return Vo.unshift(n),n},Rk=async(t,n)=>{await new Promise(d=>setTimeout(d,500));const a=Vo.findIndex(d=>d.id===t);if(a===-1)throw new Error("Job not found");const[s]=Vo.splice(a,1),c=Bl.find(d=>d.id===n);if(!c)throw new Error("Consolidation not found");return c.individualJobs.push({...s,consolidationId:n,updatedAt:new Date().toISOString()}),c},I0=y.createContext();function Tf(){const t=y.useContext(I0);if(!t)throw new Error("useConsolidation must be used within a ConsolidationProvider");return t}function Tk({children:t}){const[n,a]=y.useState(()=>{const v=new Map;for(const w of Bl)v.set(w.id,w);return v}),s=y.useCallback(v=>{const w=[];if((!v.shipper||!v.shipper.company)&&w.push("Shipper"),(!v.consignee||!v.consignee.company)&&w.push("Consignee"),(!v.origin||!v.origin.city||!v.origin.port)&&w.push("Origin"),(!v.destination||!v.destination.city||!v.destination.port)&&w.push("Destination"),w.length>0)return Qi.error(`Missing required fields: ${w.join(", ")}`),null;const S=`CONS-${Date.now().toString().slice(-6)}`,j={...v,id:S,status:"In Progress",currentStage:1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),origin:v.origin,destination:v.destination};return a(T=>{const k=new Map(T);return k.set(S,j),k}),Qi.success("Consolidation created successfully! Your freight forwarding process has begun."),j},[]),c=y.useCallback(v=>n.get(v),[n]),d=y.useCallback((v,w)=>{a(S=>{const j=new Map(S),T=j.get(v);return T&&j.set(v,{...T,...w,updatedAt:new Date().toISOString()}),j})},[]),f=y.useCallback((v,w)=>{const S=n.get(v);return S?S.individualJobs?.find(j=>j.id===w):null},[n]),p=y.useCallback((v,w,S)=>{a(j=>{const T=new Map(j),k=T.get(v);if(k){const P=k.individualJobs.map(I=>I.id===w?{...I,...S,updatedAt:new Date().toISOString()}:I);T.set(v,{...k,individualJobs:P,updatedAt:new Date().toISOString()})}return T})},[]),g=y.useCallback(()=>Array.from(n.values()),[n]),x={createConsolidation:s,getConsolidation:c,updateConsolidation:d,getJob:f,updateJob:p,getAllConsolidations:g};return o.jsx(I0.Provider,{value:x,children:t})}const Nk=m.input`
  display: flex;
  height: 2.25rem;
  width: 100%;
  min-width: 0;
  border-radius: 0.375rem;
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  background-color: var(--input-background, #f3f3f5);
  color: var(--foreground, #111827);
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  
  &::placeholder {
    color: var(--muted-foreground, #717182);
  }
  
  &::selection {
    background-color: var(--primary, #030213);
    color: var(--primary-foreground, #ffffff);
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[aria-invalid="true"] {
    border-color: var(--destructive, #d4183d);
    box-shadow: 0 0 0 3px rgba(212, 24, 61, 0.2);
  }
  
  /* File input styles */
  &[type="file"] {
    &::file-selector-button {
      color: var(--foreground, #111827);
      display: inline-flex;
      height: 1.75rem;
      border: 0;
      background-color: transparent;
      font-size: 0.875rem;
      font-weight: 500;
      margin-right: 0.5rem;
      cursor: pointer;
    }
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;function Fe({className:t,type:n,...a}){return o.jsx(Nk,{type:n,"data-slot":"input",className:t,...a})}function kg(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function A0(...t){return n=>{let a=!1;const s=t.map(c=>{const d=kg(c,n);return!a&&typeof d=="function"&&(a=!0),d});if(a)return()=>{for(let c=0;c<s.length;c++){const d=s[c];typeof d=="function"?d():kg(t[c],null)}}}}function Ye(...t){return y.useCallback(A0(...t),t)}function Go(t){const n=Ik(t),a=y.forwardRef((s,c)=>{const{children:d,...f}=s,p=y.Children.toArray(d),g=p.find(_k);if(g){const x=g.props.children,v=p.map(w=>w===g?y.Children.count(x)>1?y.Children.only(null):y.isValidElement(x)?x.props.children:null:w);return o.jsx(n,{...f,ref:c,children:y.isValidElement(x)?y.cloneElement(x,void 0,v):null})}return o.jsx(n,{...f,ref:c,children:d})});return a.displayName=`${t}.Slot`,a}var _0=Go("Slot");function Ik(t){const n=y.forwardRef((a,s)=>{const{children:c,...d}=a;if(y.isValidElement(c)){const f=$k(c),p=Dk(d,c.props);return c.type!==y.Fragment&&(p.ref=s?A0(s,f):f),y.cloneElement(c,p)}return y.Children.count(c)>1?y.Children.only(null):null});return n.displayName=`${t}.SlotClone`,n}var Ak=Symbol("radix.slottable");function _k(t){return y.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===Ak}function Dk(t,n){const a={...n};for(const s in n){const c=t[s],d=n[s];/^on[A-Z]/.test(s)?c&&d?a[s]=(...p)=>{const g=d(...p);return c(...p),g}:c&&(a[s]=c):s==="style"?a[s]={...c,...d}:s==="className"&&(a[s]=[c,d].filter(Boolean).join(" "))}return{...t,...a}}function $k(t){let n=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,a=n&&"isReactWarning"in n&&n.isReactWarning;return a?t.ref:(n=Object.getOwnPropertyDescriptor(t,"ref")?.get,a=n&&"isReactWarning"in n&&n.isReactWarning,a?t.props.ref:t.props.ref||t.ref)}var zk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ie=zk.reduce((t,n)=>{const a=Go(`Primitive.${n}`),s=y.forwardRef((c,d)=>{const{asChild:f,...p}=c,g=f?a:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(g,{...p,ref:d})});return s.displayName=`Primitive.${n}`,{...t,[n]:s}},{});function Lk(t,n){t&&oa.flushSync(()=>t.dispatchEvent(n))}var Ok="Label",D0=y.forwardRef((t,n)=>o.jsx(Ie.label,{...t,ref:n,onMouseDown:a=>{a.target.closest("button, input, select, textarea")||(t.onMouseDown?.(a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));D0.displayName=Ok;var Mk=D0;const Fk=m(Mk)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 500;
  user-select: none;
  
  .group[data-disabled="true"] & {
    pointer-events: none;
    opacity: 0.5;
  }
  
  &:has(+ :disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;function Oe({className:t,...n}){return o.jsx(Fk,{"data-slot":"label",className:t,...n})}const Bk=m.textarea`
  resize: none;
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  display: flex;
  min-height: 4rem;
  width: 100%;
  border-radius: 0.375rem;
  background-color: var(--input-background, #f3f3f5);
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: var(--foreground, #111827);
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  
  &::placeholder {
    color: var(--muted-foreground, #717182);
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[aria-invalid="true"] {
    border-color: var(--destructive, #d4183d);
    box-shadow: 0 0 0 3px rgba(212, 24, 61, 0.2);
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;function Nf({className:t,...n}){return o.jsx(Bk,{"data-slot":"textarea",className:t,...n})}function Sg(t,[n,a]){return Math.min(a,Math.max(n,t))}function Be(t,n,{checkForDefaultPrevented:a=!0}={}){return function(c){if(t?.(c),a===!1||!c.defaultPrevented)return n?.(c)}}function Hk(t,n){const a=y.createContext(n),s=d=>{const{children:f,...p}=d,g=y.useMemo(()=>p,Object.values(p));return o.jsx(a.Provider,{value:g,children:f})};s.displayName=t+"Provider";function c(d){const f=y.useContext(a);if(f)return f;if(n!==void 0)return n;throw new Error(`\`${d}\` must be used within \`${t}\``)}return[s,c]}function to(t,n=[]){let a=[];function s(d,f){const p=y.createContext(f),g=a.length;a=[...a,f];const x=w=>{const{scope:S,children:j,...T}=w,k=S?.[t]?.[g]||p,P=y.useMemo(()=>T,Object.values(T));return o.jsx(k.Provider,{value:P,children:j})};x.displayName=d+"Provider";function v(w,S){const j=S?.[t]?.[g]||p,T=y.useContext(j);if(T)return T;if(f!==void 0)return f;throw new Error(`\`${w}\` must be used within \`${d}\``)}return[x,v]}const c=()=>{const d=a.map(f=>y.createContext(f));return function(p){const g=p?.[t]||d;return y.useMemo(()=>({[`__scope${t}`]:{...p,[t]:g}}),[p,g])}};return c.scopeName=t,[s,Wk(c,...n)]}function Wk(...t){const n=t[0];if(t.length===1)return n;const a=()=>{const s=t.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(d){const f=s.reduce((p,{useScope:g,scopeName:x})=>{const w=g(d)[`__scope${x}`];return{...p,...w}},{});return y.useMemo(()=>({[`__scope${n.scopeName}`]:f}),[f])}};return a.scopeName=n.scopeName,a}function $0(t){const n=t+"CollectionProvider",[a,s]=to(n),[c,d]=a(n,{collectionRef:{current:null},itemMap:new Map}),f=k=>{const{scope:P,children:I}=k,C=$e.useRef(null),N=$e.useRef(new Map).current;return o.jsx(c,{scope:P,itemMap:N,collectionRef:C,children:I})};f.displayName=n;const p=t+"CollectionSlot",g=Go(p),x=$e.forwardRef((k,P)=>{const{scope:I,children:C}=k,N=d(p,I),D=Ye(P,N.collectionRef);return o.jsx(g,{ref:D,children:C})});x.displayName=p;const v=t+"CollectionItemSlot",w="data-radix-collection-item",S=Go(v),j=$e.forwardRef((k,P)=>{const{scope:I,children:C,...N}=k,D=$e.useRef(null),H=Ye(P,D),W=d(v,I);return $e.useEffect(()=>(W.itemMap.set(D,{ref:D,...N}),()=>void W.itemMap.delete(D))),o.jsx(S,{[w]:"",ref:H,children:C})});j.displayName=v;function T(k){const P=d(t+"CollectionConsumer",k);return $e.useCallback(()=>{const C=P.collectionRef.current;if(!C)return[];const N=Array.from(C.querySelectorAll(`[${w}]`));return Array.from(P.itemMap.values()).sort((W,O)=>N.indexOf(W.ref.current)-N.indexOf(O.ref.current))},[P.collectionRef,P.itemMap])}return[{Provider:f,Slot:x,ItemSlot:j},T,s]}var Uk=y.createContext(void 0);function z0(t){const n=y.useContext(Uk);return t||n||"ltr"}function Kn(t){const n=y.useRef(t);return y.useEffect(()=>{n.current=t}),y.useMemo(()=>(...a)=>n.current?.(...a),[])}function Vk(t,n=globalThis?.document){const a=Kn(t);y.useEffect(()=>{const s=c=>{c.key==="Escape"&&a(c)};return n.addEventListener("keydown",s,{capture:!0}),()=>n.removeEventListener("keydown",s,{capture:!0})},[a,n])}var Gk="DismissableLayer",Yu="dismissableLayer.update",Jk="dismissableLayer.pointerDownOutside",Yk="dismissableLayer.focusOutside",jg,L0=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),If=y.forwardRef((t,n)=>{const{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:f,onDismiss:p,...g}=t,x=y.useContext(L0),[v,w]=y.useState(null),S=v?.ownerDocument??globalThis?.document,[,j]=y.useState({}),T=Ye(n,O=>w(O)),k=Array.from(x.layers),[P]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),I=k.indexOf(P),C=v?k.indexOf(v):-1,N=x.layersWithOutsidePointerEventsDisabled.size>0,D=C>=I,H=Qk(O=>{const F=O.target,Q=[...x.branches].some(ae=>ae.contains(F));!D||Q||(c?.(O),f?.(O),O.defaultPrevented||p?.())},S),W=Xk(O=>{const F=O.target;[...x.branches].some(ae=>ae.contains(F))||(d?.(O),f?.(O),O.defaultPrevented||p?.())},S);return Vk(O=>{C===x.layers.size-1&&(s?.(O),!O.defaultPrevented&&p&&(O.preventDefault(),p()))},S),y.useEffect(()=>{if(v)return a&&(x.layersWithOutsidePointerEventsDisabled.size===0&&(jg=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(v)),x.layers.add(v),Eg(),()=>{a&&x.layersWithOutsidePointerEventsDisabled.size===1&&(S.body.style.pointerEvents=jg)}},[v,S,a,x]),y.useEffect(()=>()=>{v&&(x.layers.delete(v),x.layersWithOutsidePointerEventsDisabled.delete(v),Eg())},[v,x]),y.useEffect(()=>{const O=()=>j({});return document.addEventListener(Yu,O),()=>document.removeEventListener(Yu,O)},[]),o.jsx(Ie.div,{...g,ref:T,style:{pointerEvents:N?D?"auto":"none":void 0,...t.style},onFocusCapture:Be(t.onFocusCapture,W.onFocusCapture),onBlurCapture:Be(t.onBlurCapture,W.onBlurCapture),onPointerDownCapture:Be(t.onPointerDownCapture,H.onPointerDownCapture)})});If.displayName=Gk;var Kk="DismissableLayerBranch",qk=y.forwardRef((t,n)=>{const a=y.useContext(L0),s=y.useRef(null),c=Ye(n,s);return y.useEffect(()=>{const d=s.current;if(d)return a.branches.add(d),()=>{a.branches.delete(d)}},[a.branches]),o.jsx(Ie.div,{...t,ref:c})});qk.displayName=Kk;function Qk(t,n=globalThis?.document){const a=Kn(t),s=y.useRef(!1),c=y.useRef(()=>{});return y.useEffect(()=>{const d=p=>{if(p.target&&!s.current){let g=function(){O0(Jk,a,x,{discrete:!0})};const x={originalEvent:p};p.pointerType==="touch"?(n.removeEventListener("click",c.current),c.current=g,n.addEventListener("click",c.current,{once:!0})):g()}else n.removeEventListener("click",c.current);s.current=!1},f=window.setTimeout(()=>{n.addEventListener("pointerdown",d)},0);return()=>{window.clearTimeout(f),n.removeEventListener("pointerdown",d),n.removeEventListener("click",c.current)}},[n,a]),{onPointerDownCapture:()=>s.current=!0}}function Xk(t,n=globalThis?.document){const a=Kn(t),s=y.useRef(!1);return y.useEffect(()=>{const c=d=>{d.target&&!s.current&&O0(Yk,a,{originalEvent:d},{discrete:!1})};return n.addEventListener("focusin",c),()=>n.removeEventListener("focusin",c)},[n,a]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function Eg(){const t=new CustomEvent(Yu);document.dispatchEvent(t)}function O0(t,n,a,{discrete:s}){const c=a.originalEvent.target,d=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:a});n&&c.addEventListener(t,n,{once:!0}),s?Lk(c,d):c.dispatchEvent(d)}var nu=0;function M0(){y.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??Pg()),document.body.insertAdjacentElement("beforeend",t[1]??Pg()),nu++,()=>{nu===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),nu--}},[])}function Pg(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var ou="focusScope.autoFocusOnMount",iu="focusScope.autoFocusOnUnmount",Rg={bubbles:!1,cancelable:!0},Zk="FocusScope",Af=y.forwardRef((t,n)=>{const{loop:a=!1,trapped:s=!1,onMountAutoFocus:c,onUnmountAutoFocus:d,...f}=t,[p,g]=y.useState(null),x=Kn(c),v=Kn(d),w=y.useRef(null),S=Ye(n,k=>g(k)),j=y.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;y.useEffect(()=>{if(s){let k=function(N){if(j.paused||!p)return;const D=N.target;p.contains(D)?w.current=D:wn(w.current,{select:!0})},P=function(N){if(j.paused||!p)return;const D=N.relatedTarget;D!==null&&(p.contains(D)||wn(w.current,{select:!0}))},I=function(N){if(document.activeElement===document.body)for(const H of N)H.removedNodes.length>0&&wn(p)};document.addEventListener("focusin",k),document.addEventListener("focusout",P);const C=new MutationObserver(I);return p&&C.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",k),document.removeEventListener("focusout",P),C.disconnect()}}},[s,p,j.paused]),y.useEffect(()=>{if(p){Ng.add(j);const k=document.activeElement;if(!p.contains(k)){const I=new CustomEvent(ou,Rg);p.addEventListener(ou,x),p.dispatchEvent(I),I.defaultPrevented||(eS(iS(F0(p)),{select:!0}),document.activeElement===k&&wn(p))}return()=>{p.removeEventListener(ou,x),setTimeout(()=>{const I=new CustomEvent(iu,Rg);p.addEventListener(iu,v),p.dispatchEvent(I),I.defaultPrevented||wn(k??document.body,{select:!0}),p.removeEventListener(iu,v),Ng.remove(j)},0)}}},[p,x,v,j]);const T=y.useCallback(k=>{if(!a&&!s||j.paused)return;const P=k.key==="Tab"&&!k.altKey&&!k.ctrlKey&&!k.metaKey,I=document.activeElement;if(P&&I){const C=k.currentTarget,[N,D]=tS(C);N&&D?!k.shiftKey&&I===D?(k.preventDefault(),a&&wn(N,{select:!0})):k.shiftKey&&I===N&&(k.preventDefault(),a&&wn(D,{select:!0})):I===C&&k.preventDefault()}},[a,s,j.paused]);return o.jsx(Ie.div,{tabIndex:-1,...f,ref:S,onKeyDown:T})});Af.displayName=Zk;function eS(t,{select:n=!1}={}){const a=document.activeElement;for(const s of t)if(wn(s,{select:n}),document.activeElement!==a)return}function tS(t){const n=F0(t),a=Tg(n,t),s=Tg(n.reverse(),t);return[a,s]}function F0(t){const n=[],a=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const c=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||c?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;a.nextNode();)n.push(a.currentNode);return n}function Tg(t,n){for(const a of t)if(!rS(a,{upTo:n}))return a}function rS(t,{upTo:n}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(n!==void 0&&t===n)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function nS(t){return t instanceof HTMLInputElement&&"select"in t}function wn(t,{select:n=!1}={}){if(t&&t.focus){const a=document.activeElement;t.focus({preventScroll:!0}),t!==a&&nS(t)&&n&&t.select()}}var Ng=oS();function oS(){let t=[];return{add(n){const a=t[0];n!==a&&a?.pause(),t=Ig(t,n),t.unshift(n)},remove(n){t=Ig(t,n),t[0]?.resume()}}}function Ig(t,n){const a=[...t],s=a.indexOf(n);return s!==-1&&a.splice(s,1),a}function iS(t){return t.filter(n=>n.tagName!=="A")}var xt=globalThis?.document?y.useLayoutEffect:()=>{},aS=Nv[" useId ".trim().toString()]||(()=>{}),sS=0;function bn(t){const[n,a]=y.useState(aS());return xt(()=>{a(s=>s??String(sS++))},[t]),t||(n?`radix-${n}`:"")}const lS=["top","right","bottom","left"],Sn=Math.min,Ot=Math.max,Sl=Math.round,bs=Math.floor,Ir=t=>({x:t,y:t}),cS={left:"right",right:"left",bottom:"top",top:"bottom"},dS={start:"end",end:"start"};function Ku(t,n,a){return Ot(t,Sn(n,a))}function Yr(t,n){return typeof t=="function"?t(n):t}function Kr(t){return t.split("-")[0]}function Xo(t){return t.split("-")[1]}function _f(t){return t==="x"?"y":"x"}function Df(t){return t==="y"?"height":"width"}const uS=new Set(["top","bottom"]);function Nr(t){return uS.has(Kr(t))?"y":"x"}function $f(t){return _f(Nr(t))}function fS(t,n,a){a===void 0&&(a=!1);const s=Xo(t),c=$f(t),d=Df(c);let f=c==="x"?s===(a?"end":"start")?"right":"left":s==="start"?"bottom":"top";return n.reference[d]>n.floating[d]&&(f=jl(f)),[f,jl(f)]}function mS(t){const n=jl(t);return[qu(t),n,qu(n)]}function qu(t){return t.replace(/start|end/g,n=>dS[n])}const Ag=["left","right"],_g=["right","left"],pS=["top","bottom"],hS=["bottom","top"];function gS(t,n,a){switch(t){case"top":case"bottom":return a?n?_g:Ag:n?Ag:_g;case"left":case"right":return n?pS:hS;default:return[]}}function vS(t,n,a,s){const c=Xo(t);let d=gS(Kr(t),a==="start",s);return c&&(d=d.map(f=>f+"-"+c),n&&(d=d.concat(d.map(qu)))),d}function jl(t){return t.replace(/left|right|bottom|top/g,n=>cS[n])}function xS(t){return{top:0,right:0,bottom:0,left:0,...t}}function B0(t){return typeof t!="number"?xS(t):{top:t,right:t,bottom:t,left:t}}function El(t){const{x:n,y:a,width:s,height:c}=t;return{width:s,height:c,top:a,left:n,right:n+s,bottom:a+c,x:n,y:a}}function Dg(t,n,a){let{reference:s,floating:c}=t;const d=Nr(n),f=$f(n),p=Df(f),g=Kr(n),x=d==="y",v=s.x+s.width/2-c.width/2,w=s.y+s.height/2-c.height/2,S=s[p]/2-c[p]/2;let j;switch(g){case"top":j={x:v,y:s.y-c.height};break;case"bottom":j={x:v,y:s.y+s.height};break;case"right":j={x:s.x+s.width,y:w};break;case"left":j={x:s.x-c.width,y:w};break;default:j={x:s.x,y:s.y}}switch(Xo(n)){case"start":j[f]-=S*(a&&x?-1:1);break;case"end":j[f]+=S*(a&&x?-1:1);break}return j}const yS=async(t,n,a)=>{const{placement:s="bottom",strategy:c="absolute",middleware:d=[],platform:f}=a,p=d.filter(Boolean),g=await(f.isRTL==null?void 0:f.isRTL(n));let x=await f.getElementRects({reference:t,floating:n,strategy:c}),{x:v,y:w}=Dg(x,s,g),S=s,j={},T=0;for(let k=0;k<p.length;k++){const{name:P,fn:I}=p[k],{x:C,y:N,data:D,reset:H}=await I({x:v,y:w,initialPlacement:s,placement:S,strategy:c,middlewareData:j,rects:x,platform:f,elements:{reference:t,floating:n}});v=C??v,w=N??w,j={...j,[P]:{...j[P],...D}},H&&T<=50&&(T++,typeof H=="object"&&(H.placement&&(S=H.placement),H.rects&&(x=H.rects===!0?await f.getElementRects({reference:t,floating:n,strategy:c}):H.rects),{x:v,y:w}=Dg(x,S,g)),k=-1)}return{x:v,y:w,placement:S,strategy:c,middlewareData:j}};async function ea(t,n){var a;n===void 0&&(n={});const{x:s,y:c,platform:d,rects:f,elements:p,strategy:g}=t,{boundary:x="clippingAncestors",rootBoundary:v="viewport",elementContext:w="floating",altBoundary:S=!1,padding:j=0}=Yr(n,t),T=B0(j),P=p[S?w==="floating"?"reference":"floating":w],I=El(await d.getClippingRect({element:(a=await(d.isElement==null?void 0:d.isElement(P)))==null||a?P:P.contextElement||await(d.getDocumentElement==null?void 0:d.getDocumentElement(p.floating)),boundary:x,rootBoundary:v,strategy:g})),C=w==="floating"?{x:s,y:c,width:f.floating.width,height:f.floating.height}:f.reference,N=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p.floating)),D=await(d.isElement==null?void 0:d.isElement(N))?await(d.getScale==null?void 0:d.getScale(N))||{x:1,y:1}:{x:1,y:1},H=El(d.convertOffsetParentRelativeRectToViewportRelativeRect?await d.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:C,offsetParent:N,strategy:g}):C);return{top:(I.top-H.top+T.top)/D.y,bottom:(H.bottom-I.bottom+T.bottom)/D.y,left:(I.left-H.left+T.left)/D.x,right:(H.right-I.right+T.right)/D.x}}const wS=t=>({name:"arrow",options:t,async fn(n){const{x:a,y:s,placement:c,rects:d,platform:f,elements:p,middlewareData:g}=n,{element:x,padding:v=0}=Yr(t,n)||{};if(x==null)return{};const w=B0(v),S={x:a,y:s},j=$f(c),T=Df(j),k=await f.getDimensions(x),P=j==="y",I=P?"top":"left",C=P?"bottom":"right",N=P?"clientHeight":"clientWidth",D=d.reference[T]+d.reference[j]-S[j]-d.floating[T],H=S[j]-d.reference[j],W=await(f.getOffsetParent==null?void 0:f.getOffsetParent(x));let O=W?W[N]:0;(!O||!await(f.isElement==null?void 0:f.isElement(W)))&&(O=p.floating[N]||d.floating[T]);const F=D/2-H/2,Q=O/2-k[T]/2-1,ae=Sn(w[I],Q),xe=Sn(w[C],Q),fe=ae,ye=O-k[T]-xe,me=O/2-k[T]/2+F,Se=Ku(fe,me,ye),se=!g.arrow&&Xo(c)!=null&&me!==Se&&d.reference[T]/2-(me<fe?ae:xe)-k[T]/2<0,ee=se?me<fe?me-fe:me-ye:0;return{[j]:S[j]+ee,data:{[j]:Se,centerOffset:me-Se-ee,...se&&{alignmentOffset:ee}},reset:se}}}),bS=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var a,s;const{placement:c,middlewareData:d,rects:f,initialPlacement:p,platform:g,elements:x}=n,{mainAxis:v=!0,crossAxis:w=!0,fallbackPlacements:S,fallbackStrategy:j="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:k=!0,...P}=Yr(t,n);if((a=d.arrow)!=null&&a.alignmentOffset)return{};const I=Kr(c),C=Nr(p),N=Kr(p)===p,D=await(g.isRTL==null?void 0:g.isRTL(x.floating)),H=S||(N||!k?[jl(p)]:mS(p)),W=T!=="none";!S&&W&&H.push(...vS(p,k,T,D));const O=[p,...H],F=await ea(n,P),Q=[];let ae=((s=d.flip)==null?void 0:s.overflows)||[];if(v&&Q.push(F[I]),w){const me=fS(c,f,D);Q.push(F[me[0]],F[me[1]])}if(ae=[...ae,{placement:c,overflows:Q}],!Q.every(me=>me<=0)){var xe,fe;const me=(((xe=d.flip)==null?void 0:xe.index)||0)+1,Se=O[me];if(Se&&(!(w==="alignment"?C!==Nr(Se):!1)||ae.every($=>Nr($.placement)===C?$.overflows[0]>0:!0)))return{data:{index:me,overflows:ae},reset:{placement:Se}};let se=(fe=ae.filter(ee=>ee.overflows[0]<=0).sort((ee,$)=>ee.overflows[1]-$.overflows[1])[0])==null?void 0:fe.placement;if(!se)switch(j){case"bestFit":{var ye;const ee=(ye=ae.filter($=>{if(W){const K=Nr($.placement);return K===C||K==="y"}return!0}).map($=>[$.placement,$.overflows.filter(K=>K>0).reduce((K,Y)=>K+Y,0)]).sort(($,K)=>$[1]-K[1])[0])==null?void 0:ye[0];ee&&(se=ee);break}case"initialPlacement":se=p;break}if(c!==se)return{reset:{placement:se}}}return{}}}};function $g(t,n){return{top:t.top-n.height,right:t.right-n.width,bottom:t.bottom-n.height,left:t.left-n.width}}function zg(t){return lS.some(n=>t[n]>=0)}const CS=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(n){const{rects:a}=n,{strategy:s="referenceHidden",...c}=Yr(t,n);switch(s){case"referenceHidden":{const d=await ea(n,{...c,elementContext:"reference"}),f=$g(d,a.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:zg(f)}}}case"escaped":{const d=await ea(n,{...c,altBoundary:!0}),f=$g(d,a.floating);return{data:{escapedOffsets:f,escaped:zg(f)}}}default:return{}}}}},H0=new Set(["left","top"]);async function kS(t,n){const{placement:a,platform:s,elements:c}=t,d=await(s.isRTL==null?void 0:s.isRTL(c.floating)),f=Kr(a),p=Xo(a),g=Nr(a)==="y",x=H0.has(f)?-1:1,v=d&&g?-1:1,w=Yr(n,t);let{mainAxis:S,crossAxis:j,alignmentAxis:T}=typeof w=="number"?{mainAxis:w,crossAxis:0,alignmentAxis:null}:{mainAxis:w.mainAxis||0,crossAxis:w.crossAxis||0,alignmentAxis:w.alignmentAxis};return p&&typeof T=="number"&&(j=p==="end"?T*-1:T),g?{x:j*v,y:S*x}:{x:S*x,y:j*v}}const SS=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){var a,s;const{x:c,y:d,placement:f,middlewareData:p}=n,g=await kS(n,t);return f===((a=p.offset)==null?void 0:a.placement)&&(s=p.arrow)!=null&&s.alignmentOffset?{}:{x:c+g.x,y:d+g.y,data:{...g,placement:f}}}}},jS=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:a,y:s,placement:c}=n,{mainAxis:d=!0,crossAxis:f=!1,limiter:p={fn:P=>{let{x:I,y:C}=P;return{x:I,y:C}}},...g}=Yr(t,n),x={x:a,y:s},v=await ea(n,g),w=Nr(Kr(c)),S=_f(w);let j=x[S],T=x[w];if(d){const P=S==="y"?"top":"left",I=S==="y"?"bottom":"right",C=j+v[P],N=j-v[I];j=Ku(C,j,N)}if(f){const P=w==="y"?"top":"left",I=w==="y"?"bottom":"right",C=T+v[P],N=T-v[I];T=Ku(C,T,N)}const k=p.fn({...n,[S]:j,[w]:T});return{...k,data:{x:k.x-a,y:k.y-s,enabled:{[S]:d,[w]:f}}}}}},ES=function(t){return t===void 0&&(t={}),{options:t,fn(n){const{x:a,y:s,placement:c,rects:d,middlewareData:f}=n,{offset:p=0,mainAxis:g=!0,crossAxis:x=!0}=Yr(t,n),v={x:a,y:s},w=Nr(c),S=_f(w);let j=v[S],T=v[w];const k=Yr(p,n),P=typeof k=="number"?{mainAxis:k,crossAxis:0}:{mainAxis:0,crossAxis:0,...k};if(g){const N=S==="y"?"height":"width",D=d.reference[S]-d.floating[N]+P.mainAxis,H=d.reference[S]+d.reference[N]-P.mainAxis;j<D?j=D:j>H&&(j=H)}if(x){var I,C;const N=S==="y"?"width":"height",D=H0.has(Kr(c)),H=d.reference[w]-d.floating[N]+(D&&((I=f.offset)==null?void 0:I[w])||0)+(D?0:P.crossAxis),W=d.reference[w]+d.reference[N]+(D?0:((C=f.offset)==null?void 0:C[w])||0)-(D?P.crossAxis:0);T<H?T=H:T>W&&(T=W)}return{[S]:j,[w]:T}}}},PS=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(n){var a,s;const{placement:c,rects:d,platform:f,elements:p}=n,{apply:g=()=>{},...x}=Yr(t,n),v=await ea(n,x),w=Kr(c),S=Xo(c),j=Nr(c)==="y",{width:T,height:k}=d.floating;let P,I;w==="top"||w==="bottom"?(P=w,I=S===(await(f.isRTL==null?void 0:f.isRTL(p.floating))?"start":"end")?"left":"right"):(I=w,P=S==="end"?"top":"bottom");const C=k-v.top-v.bottom,N=T-v.left-v.right,D=Sn(k-v[P],C),H=Sn(T-v[I],N),W=!n.middlewareData.shift;let O=D,F=H;if((a=n.middlewareData.shift)!=null&&a.enabled.x&&(F=N),(s=n.middlewareData.shift)!=null&&s.enabled.y&&(O=C),W&&!S){const ae=Ot(v.left,0),xe=Ot(v.right,0),fe=Ot(v.top,0),ye=Ot(v.bottom,0);j?F=T-2*(ae!==0||xe!==0?ae+xe:Ot(v.left,v.right)):O=k-2*(fe!==0||ye!==0?fe+ye:Ot(v.top,v.bottom))}await g({...n,availableWidth:F,availableHeight:O});const Q=await f.getDimensions(p.floating);return T!==Q.width||k!==Q.height?{reset:{rects:!0}}:{}}}};function Hl(){return typeof window<"u"}function Zo(t){return W0(t)?(t.nodeName||"").toLowerCase():"#document"}function Ht(t){var n;return(t==null||(n=t.ownerDocument)==null?void 0:n.defaultView)||window}function _r(t){var n;return(n=(W0(t)?t.ownerDocument:t.document)||window.document)==null?void 0:n.documentElement}function W0(t){return Hl()?t instanceof Node||t instanceof Ht(t).Node:!1}function vr(t){return Hl()?t instanceof Element||t instanceof Ht(t).Element:!1}function Ar(t){return Hl()?t instanceof HTMLElement||t instanceof Ht(t).HTMLElement:!1}function Lg(t){return!Hl()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ht(t).ShadowRoot}const RS=new Set(["inline","contents"]);function aa(t){const{overflow:n,overflowX:a,overflowY:s,display:c}=xr(t);return/auto|scroll|overlay|hidden|clip/.test(n+s+a)&&!RS.has(c)}const TS=new Set(["table","td","th"]);function NS(t){return TS.has(Zo(t))}const IS=[":popover-open",":modal"];function Wl(t){return IS.some(n=>{try{return t.matches(n)}catch{return!1}})}const AS=["transform","translate","scale","rotate","perspective"],_S=["transform","translate","scale","rotate","perspective","filter"],DS=["paint","layout","strict","content"];function zf(t){const n=Lf(),a=vr(t)?xr(t):t;return AS.some(s=>a[s]?a[s]!=="none":!1)||(a.containerType?a.containerType!=="normal":!1)||!n&&(a.backdropFilter?a.backdropFilter!=="none":!1)||!n&&(a.filter?a.filter!=="none":!1)||_S.some(s=>(a.willChange||"").includes(s))||DS.some(s=>(a.contain||"").includes(s))}function $S(t){let n=jn(t);for(;Ar(n)&&!Jo(n);){if(zf(n))return n;if(Wl(n))return null;n=jn(n)}return null}function Lf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const zS=new Set(["html","body","#document"]);function Jo(t){return zS.has(Zo(t))}function xr(t){return Ht(t).getComputedStyle(t)}function Ul(t){return vr(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function jn(t){if(Zo(t)==="html")return t;const n=t.assignedSlot||t.parentNode||Lg(t)&&t.host||_r(t);return Lg(n)?n.host:n}function U0(t){const n=jn(t);return Jo(n)?t.ownerDocument?t.ownerDocument.body:t.body:Ar(n)&&aa(n)?n:U0(n)}function ta(t,n,a){var s;n===void 0&&(n=[]),a===void 0&&(a=!0);const c=U0(t),d=c===((s=t.ownerDocument)==null?void 0:s.body),f=Ht(c);if(d){const p=Qu(f);return n.concat(f,f.visualViewport||[],aa(c)?c:[],p&&a?ta(p):[])}return n.concat(c,ta(c,[],a))}function Qu(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function V0(t){const n=xr(t);let a=parseFloat(n.width)||0,s=parseFloat(n.height)||0;const c=Ar(t),d=c?t.offsetWidth:a,f=c?t.offsetHeight:s,p=Sl(a)!==d||Sl(s)!==f;return p&&(a=d,s=f),{width:a,height:s,$:p}}function Of(t){return vr(t)?t:t.contextElement}function Oo(t){const n=Of(t);if(!Ar(n))return Ir(1);const a=n.getBoundingClientRect(),{width:s,height:c,$:d}=V0(n);let f=(d?Sl(a.width):a.width)/s,p=(d?Sl(a.height):a.height)/c;return(!f||!Number.isFinite(f))&&(f=1),(!p||!Number.isFinite(p))&&(p=1),{x:f,y:p}}const LS=Ir(0);function G0(t){const n=Ht(t);return!Lf()||!n.visualViewport?LS:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function OS(t,n,a){return n===void 0&&(n=!1),!a||n&&a!==Ht(t)?!1:n}function qn(t,n,a,s){n===void 0&&(n=!1),a===void 0&&(a=!1);const c=t.getBoundingClientRect(),d=Of(t);let f=Ir(1);n&&(s?vr(s)&&(f=Oo(s)):f=Oo(t));const p=OS(d,a,s)?G0(d):Ir(0);let g=(c.left+p.x)/f.x,x=(c.top+p.y)/f.y,v=c.width/f.x,w=c.height/f.y;if(d){const S=Ht(d),j=s&&vr(s)?Ht(s):s;let T=S,k=Qu(T);for(;k&&s&&j!==T;){const P=Oo(k),I=k.getBoundingClientRect(),C=xr(k),N=I.left+(k.clientLeft+parseFloat(C.paddingLeft))*P.x,D=I.top+(k.clientTop+parseFloat(C.paddingTop))*P.y;g*=P.x,x*=P.y,v*=P.x,w*=P.y,g+=N,x+=D,T=Ht(k),k=Qu(T)}}return El({width:v,height:w,x:g,y:x})}function Vl(t,n){const a=Ul(t).scrollLeft;return n?n.left+a:qn(_r(t)).left+a}function J0(t,n){const a=t.getBoundingClientRect(),s=a.left+n.scrollLeft-Vl(t,a),c=a.top+n.scrollTop;return{x:s,y:c}}function MS(t){let{elements:n,rect:a,offsetParent:s,strategy:c}=t;const d=c==="fixed",f=_r(s),p=n?Wl(n.floating):!1;if(s===f||p&&d)return a;let g={scrollLeft:0,scrollTop:0},x=Ir(1);const v=Ir(0),w=Ar(s);if((w||!w&&!d)&&((Zo(s)!=="body"||aa(f))&&(g=Ul(s)),Ar(s))){const j=qn(s);x=Oo(s),v.x=j.x+s.clientLeft,v.y=j.y+s.clientTop}const S=f&&!w&&!d?J0(f,g):Ir(0);return{width:a.width*x.x,height:a.height*x.y,x:a.x*x.x-g.scrollLeft*x.x+v.x+S.x,y:a.y*x.y-g.scrollTop*x.y+v.y+S.y}}function FS(t){return Array.from(t.getClientRects())}function BS(t){const n=_r(t),a=Ul(t),s=t.ownerDocument.body,c=Ot(n.scrollWidth,n.clientWidth,s.scrollWidth,s.clientWidth),d=Ot(n.scrollHeight,n.clientHeight,s.scrollHeight,s.clientHeight);let f=-a.scrollLeft+Vl(t);const p=-a.scrollTop;return xr(s).direction==="rtl"&&(f+=Ot(n.clientWidth,s.clientWidth)-c),{width:c,height:d,x:f,y:p}}const Og=25;function HS(t,n){const a=Ht(t),s=_r(t),c=a.visualViewport;let d=s.clientWidth,f=s.clientHeight,p=0,g=0;if(c){d=c.width,f=c.height;const v=Lf();(!v||v&&n==="fixed")&&(p=c.offsetLeft,g=c.offsetTop)}const x=Vl(s);if(x<=0){const v=s.ownerDocument,w=v.body,S=getComputedStyle(w),j=v.compatMode==="CSS1Compat"&&parseFloat(S.marginLeft)+parseFloat(S.marginRight)||0,T=Math.abs(s.clientWidth-w.clientWidth-j);T<=Og&&(d-=T)}else x<=Og&&(d+=x);return{width:d,height:f,x:p,y:g}}const WS=new Set(["absolute","fixed"]);function US(t,n){const a=qn(t,!0,n==="fixed"),s=a.top+t.clientTop,c=a.left+t.clientLeft,d=Ar(t)?Oo(t):Ir(1),f=t.clientWidth*d.x,p=t.clientHeight*d.y,g=c*d.x,x=s*d.y;return{width:f,height:p,x:g,y:x}}function Mg(t,n,a){let s;if(n==="viewport")s=HS(t,a);else if(n==="document")s=BS(_r(t));else if(vr(n))s=US(n,a);else{const c=G0(t);s={x:n.x-c.x,y:n.y-c.y,width:n.width,height:n.height}}return El(s)}function Y0(t,n){const a=jn(t);return a===n||!vr(a)||Jo(a)?!1:xr(a).position==="fixed"||Y0(a,n)}function VS(t,n){const a=n.get(t);if(a)return a;let s=ta(t,[],!1).filter(p=>vr(p)&&Zo(p)!=="body"),c=null;const d=xr(t).position==="fixed";let f=d?jn(t):t;for(;vr(f)&&!Jo(f);){const p=xr(f),g=zf(f);!g&&p.position==="fixed"&&(c=null),(d?!g&&!c:!g&&p.position==="static"&&!!c&&WS.has(c.position)||aa(f)&&!g&&Y0(t,f))?s=s.filter(v=>v!==f):c=p,f=jn(f)}return n.set(t,s),s}function GS(t){let{element:n,boundary:a,rootBoundary:s,strategy:c}=t;const f=[...a==="clippingAncestors"?Wl(n)?[]:VS(n,this._c):[].concat(a),s],p=f[0],g=f.reduce((x,v)=>{const w=Mg(n,v,c);return x.top=Ot(w.top,x.top),x.right=Sn(w.right,x.right),x.bottom=Sn(w.bottom,x.bottom),x.left=Ot(w.left,x.left),x},Mg(n,p,c));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function JS(t){const{width:n,height:a}=V0(t);return{width:n,height:a}}function YS(t,n,a){const s=Ar(n),c=_r(n),d=a==="fixed",f=qn(t,!0,d,n);let p={scrollLeft:0,scrollTop:0};const g=Ir(0);function x(){g.x=Vl(c)}if(s||!s&&!d)if((Zo(n)!=="body"||aa(c))&&(p=Ul(n)),s){const j=qn(n,!0,d,n);g.x=j.x+n.clientLeft,g.y=j.y+n.clientTop}else c&&x();d&&!s&&c&&x();const v=c&&!s&&!d?J0(c,p):Ir(0),w=f.left+p.scrollLeft-g.x-v.x,S=f.top+p.scrollTop-g.y-v.y;return{x:w,y:S,width:f.width,height:f.height}}function au(t){return xr(t).position==="static"}function Fg(t,n){if(!Ar(t)||xr(t).position==="fixed")return null;if(n)return n(t);let a=t.offsetParent;return _r(t)===a&&(a=a.ownerDocument.body),a}function K0(t,n){const a=Ht(t);if(Wl(t))return a;if(!Ar(t)){let c=jn(t);for(;c&&!Jo(c);){if(vr(c)&&!au(c))return c;c=jn(c)}return a}let s=Fg(t,n);for(;s&&NS(s)&&au(s);)s=Fg(s,n);return s&&Jo(s)&&au(s)&&!zf(s)?a:s||$S(t)||a}const KS=async function(t){const n=this.getOffsetParent||K0,a=this.getDimensions,s=await a(t.floating);return{reference:YS(t.reference,await n(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function qS(t){return xr(t).direction==="rtl"}const QS={convertOffsetParentRelativeRectToViewportRelativeRect:MS,getDocumentElement:_r,getClippingRect:GS,getOffsetParent:K0,getElementRects:KS,getClientRects:FS,getDimensions:JS,getScale:Oo,isElement:vr,isRTL:qS};function q0(t,n){return t.x===n.x&&t.y===n.y&&t.width===n.width&&t.height===n.height}function XS(t,n){let a=null,s;const c=_r(t);function d(){var p;clearTimeout(s),(p=a)==null||p.disconnect(),a=null}function f(p,g){p===void 0&&(p=!1),g===void 0&&(g=1),d();const x=t.getBoundingClientRect(),{left:v,top:w,width:S,height:j}=x;if(p||n(),!S||!j)return;const T=bs(w),k=bs(c.clientWidth-(v+S)),P=bs(c.clientHeight-(w+j)),I=bs(v),N={rootMargin:-T+"px "+-k+"px "+-P+"px "+-I+"px",threshold:Ot(0,Sn(1,g))||1};let D=!0;function H(W){const O=W[0].intersectionRatio;if(O!==g){if(!D)return f();O?f(!1,O):s=setTimeout(()=>{f(!1,1e-7)},1e3)}O===1&&!q0(x,t.getBoundingClientRect())&&f(),D=!1}try{a=new IntersectionObserver(H,{...N,root:c.ownerDocument})}catch{a=new IntersectionObserver(H,N)}a.observe(t)}return f(!0),d}function ZS(t,n,a,s){s===void 0&&(s={});const{ancestorScroll:c=!0,ancestorResize:d=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:g=!1}=s,x=Of(t),v=c||d?[...x?ta(x):[],...ta(n)]:[];v.forEach(I=>{c&&I.addEventListener("scroll",a,{passive:!0}),d&&I.addEventListener("resize",a)});const w=x&&p?XS(x,a):null;let S=-1,j=null;f&&(j=new ResizeObserver(I=>{let[C]=I;C&&C.target===x&&j&&(j.unobserve(n),cancelAnimationFrame(S),S=requestAnimationFrame(()=>{var N;(N=j)==null||N.observe(n)})),a()}),x&&!g&&j.observe(x),j.observe(n));let T,k=g?qn(t):null;g&&P();function P(){const I=qn(t);k&&!q0(k,I)&&a(),k=I,T=requestAnimationFrame(P)}return a(),()=>{var I;v.forEach(C=>{c&&C.removeEventListener("scroll",a),d&&C.removeEventListener("resize",a)}),w?.(),(I=j)==null||I.disconnect(),j=null,g&&cancelAnimationFrame(T)}}const ej=SS,tj=jS,rj=bS,nj=PS,oj=CS,Bg=wS,ij=ES,aj=(t,n,a)=>{const s=new Map,c={platform:QS,...a},d={...c.platform,_c:s};return yS(t,n,{...c,platform:d})};var sj=typeof document<"u",lj=function(){},hl=sj?y.useLayoutEffect:lj;function Pl(t,n){if(t===n)return!0;if(typeof t!=typeof n)return!1;if(typeof t=="function"&&t.toString()===n.toString())return!0;let a,s,c;if(t&&n&&typeof t=="object"){if(Array.isArray(t)){if(a=t.length,a!==n.length)return!1;for(s=a;s--!==0;)if(!Pl(t[s],n[s]))return!1;return!0}if(c=Object.keys(t),a=c.length,a!==Object.keys(n).length)return!1;for(s=a;s--!==0;)if(!{}.hasOwnProperty.call(n,c[s]))return!1;for(s=a;s--!==0;){const d=c[s];if(!(d==="_owner"&&t.$$typeof)&&!Pl(t[d],n[d]))return!1}return!0}return t!==t&&n!==n}function Q0(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Hg(t,n){const a=Q0(t);return Math.round(n*a)/a}function su(t){const n=y.useRef(t);return hl(()=>{n.current=t}),n}function cj(t){t===void 0&&(t={});const{placement:n="bottom",strategy:a="absolute",middleware:s=[],platform:c,elements:{reference:d,floating:f}={},transform:p=!0,whileElementsMounted:g,open:x}=t,[v,w]=y.useState({x:0,y:0,strategy:a,placement:n,middlewareData:{},isPositioned:!1}),[S,j]=y.useState(s);Pl(S,s)||j(s);const[T,k]=y.useState(null),[P,I]=y.useState(null),C=y.useCallback($=>{$!==W.current&&(W.current=$,k($))},[]),N=y.useCallback($=>{$!==O.current&&(O.current=$,I($))},[]),D=d||T,H=f||P,W=y.useRef(null),O=y.useRef(null),F=y.useRef(v),Q=g!=null,ae=su(g),xe=su(c),fe=su(x),ye=y.useCallback(()=>{if(!W.current||!O.current)return;const $={placement:n,strategy:a,middleware:S};xe.current&&($.platform=xe.current),aj(W.current,O.current,$).then(K=>{const Y={...K,isPositioned:fe.current!==!1};me.current&&!Pl(F.current,Y)&&(F.current=Y,oa.flushSync(()=>{w(Y)}))})},[S,n,a,xe,fe]);hl(()=>{x===!1&&F.current.isPositioned&&(F.current.isPositioned=!1,w($=>({...$,isPositioned:!1})))},[x]);const me=y.useRef(!1);hl(()=>(me.current=!0,()=>{me.current=!1}),[]),hl(()=>{if(D&&(W.current=D),H&&(O.current=H),D&&H){if(ae.current)return ae.current(D,H,ye);ye()}},[D,H,ye,ae,Q]);const Se=y.useMemo(()=>({reference:W,floating:O,setReference:C,setFloating:N}),[C,N]),se=y.useMemo(()=>({reference:D,floating:H}),[D,H]),ee=y.useMemo(()=>{const $={position:a,left:0,top:0};if(!se.floating)return $;const K=Hg(se.floating,v.x),Y=Hg(se.floating,v.y);return p?{...$,transform:"translate("+K+"px, "+Y+"px)",...Q0(se.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:K,top:Y}},[a,p,se.floating,v.x,v.y]);return y.useMemo(()=>({...v,update:ye,refs:Se,elements:se,floatingStyles:ee}),[v,ye,Se,se,ee])}const dj=t=>{function n(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:t,fn(a){const{element:s,padding:c}=typeof t=="function"?t(a):t;return s&&n(s)?s.current!=null?Bg({element:s.current,padding:c}).fn(a):{}:s?Bg({element:s,padding:c}).fn(a):{}}}},uj=(t,n)=>({...ej(t),options:[t,n]}),fj=(t,n)=>({...tj(t),options:[t,n]}),mj=(t,n)=>({...ij(t),options:[t,n]}),pj=(t,n)=>({...rj(t),options:[t,n]}),hj=(t,n)=>({...nj(t),options:[t,n]}),gj=(t,n)=>({...oj(t),options:[t,n]}),vj=(t,n)=>({...dj(t),options:[t,n]});var xj="Arrow",X0=y.forwardRef((t,n)=>{const{children:a,width:s=10,height:c=5,...d}=t;return o.jsx(Ie.svg,{...d,ref:n,width:s,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?a:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});X0.displayName=xj;var yj=X0;function Z0(t){const[n,a]=y.useState(void 0);return xt(()=>{if(t){a({width:t.offsetWidth,height:t.offsetHeight});const s=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const d=c[0];let f,p;if("borderBoxSize"in d){const g=d.borderBoxSize,x=Array.isArray(g)?g[0]:g;f=x.inlineSize,p=x.blockSize}else f=t.offsetWidth,p=t.offsetHeight;a({width:f,height:p})});return s.observe(t,{box:"border-box"}),()=>s.unobserve(t)}else a(void 0)},[t]),n}var Mf="Popper",[ex,tx]=to(Mf),[wj,rx]=ex(Mf),nx=t=>{const{__scopePopper:n,children:a}=t,[s,c]=y.useState(null);return o.jsx(wj,{scope:n,anchor:s,onAnchorChange:c,children:a})};nx.displayName=Mf;var ox="PopperAnchor",ix=y.forwardRef((t,n)=>{const{__scopePopper:a,virtualRef:s,...c}=t,d=rx(ox,a),f=y.useRef(null),p=Ye(n,f),g=y.useRef(null);return y.useEffect(()=>{const x=g.current;g.current=s?.current||f.current,x!==g.current&&d.onAnchorChange(g.current)}),s?null:o.jsx(Ie.div,{...c,ref:p})});ix.displayName=ox;var Ff="PopperContent",[bj,Cj]=ex(Ff),ax=y.forwardRef((t,n)=>{const{__scopePopper:a,side:s="bottom",sideOffset:c=0,align:d="center",alignOffset:f=0,arrowPadding:p=0,avoidCollisions:g=!0,collisionBoundary:x=[],collisionPadding:v=0,sticky:w="partial",hideWhenDetached:S=!1,updatePositionStrategy:j="optimized",onPlaced:T,...k}=t,P=rx(Ff,a),[I,C]=y.useState(null),N=Ye(n,G=>C(G)),[D,H]=y.useState(null),W=Z0(D),O=W?.width??0,F=W?.height??0,Q=s+(d!=="center"?"-"+d:""),ae=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},xe=Array.isArray(x)?x:[x],fe=xe.length>0,ye={padding:ae,boundary:xe.filter(Sj),altBoundary:fe},{refs:me,floatingStyles:Se,placement:se,isPositioned:ee,middlewareData:$}=cj({strategy:"fixed",placement:Q,whileElementsMounted:(...G)=>ZS(...G,{animationFrame:j==="always"}),elements:{reference:P.anchor},middleware:[uj({mainAxis:c+F,alignmentAxis:f}),g&&fj({mainAxis:!0,crossAxis:!1,limiter:w==="partial"?mj():void 0,...ye}),g&&pj({...ye}),hj({...ye,apply:({elements:G,rects:ce,availableWidth:pe,availableHeight:Ce})=>{const{width:Re,height:Ne}=ce.reference,ht=G.floating.style;ht.setProperty("--radix-popper-available-width",`${pe}px`),ht.setProperty("--radix-popper-available-height",`${Ce}px`),ht.setProperty("--radix-popper-anchor-width",`${Re}px`),ht.setProperty("--radix-popper-anchor-height",`${Ne}px`)}}),D&&vj({element:D,padding:p}),jj({arrowWidth:O,arrowHeight:F}),S&&gj({strategy:"referenceHidden",...ye})]}),[K,Y]=cx(se),E=Kn(T);xt(()=>{ee&&E?.()},[ee,E]);const B=$.arrow?.x,X=$.arrow?.y,te=$.arrow?.centerOffset!==0,[ve,we]=y.useState();return xt(()=>{I&&we(window.getComputedStyle(I).zIndex)},[I]),o.jsx("div",{ref:me.setFloating,"data-radix-popper-content-wrapper":"",style:{...Se,transform:ee?Se.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ve,"--radix-popper-transform-origin":[$.transformOrigin?.x,$.transformOrigin?.y].join(" "),...$.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:o.jsx(bj,{scope:a,placedSide:K,onArrowChange:H,arrowX:B,arrowY:X,shouldHideArrow:te,children:o.jsx(Ie.div,{"data-side":K,"data-align":Y,...k,ref:N,style:{...k.style,animation:ee?void 0:"none"}})})})});ax.displayName=Ff;var sx="PopperArrow",kj={top:"bottom",right:"left",bottom:"top",left:"right"},lx=y.forwardRef(function(n,a){const{__scopePopper:s,...c}=n,d=Cj(sx,s),f=kj[d.placedSide];return o.jsx("span",{ref:d.onArrowChange,style:{position:"absolute",left:d.arrowX,top:d.arrowY,[f]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[d.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[d.placedSide],visibility:d.shouldHideArrow?"hidden":void 0},children:o.jsx(yj,{...c,ref:a,style:{...c.style,display:"block"}})})});lx.displayName=sx;function Sj(t){return t!==null}var jj=t=>({name:"transformOrigin",options:t,fn(n){const{placement:a,rects:s,middlewareData:c}=n,f=c.arrow?.centerOffset!==0,p=f?0:t.arrowWidth,g=f?0:t.arrowHeight,[x,v]=cx(a),w={start:"0%",center:"50%",end:"100%"}[v],S=(c.arrow?.x??0)+p/2,j=(c.arrow?.y??0)+g/2;let T="",k="";return x==="bottom"?(T=f?w:`${S}px`,k=`${-g}px`):x==="top"?(T=f?w:`${S}px`,k=`${s.floating.height+g}px`):x==="right"?(T=`${-g}px`,k=f?w:`${j}px`):x==="left"&&(T=`${s.floating.width+g}px`,k=f?w:`${j}px`),{data:{x:T,y:k}}}});function cx(t){const[n,a="center"]=t.split("-");return[n,a]}var Ej=nx,Pj=ix,Rj=ax,Tj=lx,Nj="Portal",Bf=y.forwardRef((t,n)=>{const{container:a,...s}=t,[c,d]=y.useState(!1);xt(()=>d(!0),[]);const f=a||c&&globalThis?.document?.body;return f?C2.createPortal(o.jsx(Ie.div,{...s,ref:n}),f):null});Bf.displayName=Nj;var Ij=Nv[" useInsertionEffect ".trim().toString()]||xt;function Qn({prop:t,defaultProp:n,onChange:a=()=>{},caller:s}){const[c,d,f]=Aj({defaultProp:n,onChange:a}),p=t!==void 0,g=p?t:c;{const v=y.useRef(t!==void 0);y.useEffect(()=>{const w=v.current;w!==p&&console.warn(`${s} is changing from ${w?"controlled":"uncontrolled"} to ${p?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),v.current=p},[p,s])}const x=y.useCallback(v=>{if(p){const w=_j(v)?v(t):v;w!==t&&f.current?.(w)}else d(v)},[p,t,d,f]);return[g,x]}function Aj({defaultProp:t,onChange:n}){const[a,s]=y.useState(t),c=y.useRef(a),d=y.useRef(n);return Ij(()=>{d.current=n},[n]),y.useEffect(()=>{c.current!==a&&(d.current?.(a),c.current=a)},[a,c]),[a,s,d]}function _j(t){return typeof t=="function"}function dx(t){const n=y.useRef({value:t,previous:t});return y.useMemo(()=>(n.current.value!==t&&(n.current.previous=n.current.value,n.current.value=t),n.current.previous),[t])}var ux=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Dj="VisuallyHidden",$j=y.forwardRef((t,n)=>o.jsx(Ie.span,{...t,ref:n,style:{...ux,...t.style}}));$j.displayName=Dj;var zj=function(t){if(typeof document>"u")return null;var n=Array.isArray(t)?t[0]:t;return n.ownerDocument.body},Io=new WeakMap,Cs=new WeakMap,ks={},lu=0,fx=function(t){return t&&(t.host||fx(t.parentNode))},Lj=function(t,n){return n.map(function(a){if(t.contains(a))return a;var s=fx(a);return s&&t.contains(s)?s:(console.error("aria-hidden",a,"in not contained inside",t,". Doing nothing"),null)}).filter(function(a){return!!a})},Oj=function(t,n,a,s){var c=Lj(n,Array.isArray(t)?t:[t]);ks[a]||(ks[a]=new WeakMap);var d=ks[a],f=[],p=new Set,g=new Set(c),x=function(w){!w||p.has(w)||(p.add(w),x(w.parentNode))};c.forEach(x);var v=function(w){!w||g.has(w)||Array.prototype.forEach.call(w.children,function(S){if(p.has(S))v(S);else try{var j=S.getAttribute(s),T=j!==null&&j!=="false",k=(Io.get(S)||0)+1,P=(d.get(S)||0)+1;Io.set(S,k),d.set(S,P),f.push(S),k===1&&T&&Cs.set(S,!0),P===1&&S.setAttribute(a,"true"),T||S.setAttribute(s,"true")}catch(I){console.error("aria-hidden: cannot operate on ",S,I)}})};return v(n),p.clear(),lu++,function(){f.forEach(function(w){var S=Io.get(w)-1,j=d.get(w)-1;Io.set(w,S),d.set(w,j),S||(Cs.has(w)||w.removeAttribute(s),Cs.delete(w)),j||w.removeAttribute(a)}),lu--,lu||(Io=new WeakMap,Io=new WeakMap,Cs=new WeakMap,ks={})}},mx=function(t,n,a){a===void 0&&(a="data-aria-hidden");var s=Array.from(Array.isArray(t)?t:[t]),c=zj(t);return c?(s.push.apply(s,Array.from(c.querySelectorAll("[aria-live], script"))),Oj(s,c,a,"aria-hidden")):function(){return null}},Tr=function(){return Tr=Object.assign||function(n){for(var a,s=1,c=arguments.length;s<c;s++){a=arguments[s];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(n[d]=a[d])}return n},Tr.apply(this,arguments)};function px(t,n){var a={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&n.indexOf(s)<0&&(a[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(t);c<s.length;c++)n.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(t,s[c])&&(a[s[c]]=t[s[c]]);return a}function Mj(t,n,a){if(a||arguments.length===2)for(var s=0,c=n.length,d;s<c;s++)(d||!(s in n))&&(d||(d=Array.prototype.slice.call(n,0,s)),d[s]=n[s]);return t.concat(d||Array.prototype.slice.call(n))}var gl="right-scroll-bar-position",vl="width-before-scroll-bar",Fj="with-scroll-bars-hidden",Bj="--removed-body-scroll-bar-size";function cu(t,n){return typeof t=="function"?t(n):t&&(t.current=n),t}function Hj(t,n){var a=y.useState(function(){return{value:t,callback:n,facade:{get current(){return a.value},set current(s){var c=a.value;c!==s&&(a.value=s,a.callback(s,c))}}}})[0];return a.callback=n,a.facade}var Wj=typeof window<"u"?y.useLayoutEffect:y.useEffect,Wg=new WeakMap;function Uj(t,n){var a=Hj(null,function(s){return t.forEach(function(c){return cu(c,s)})});return Wj(function(){var s=Wg.get(a);if(s){var c=new Set(s),d=new Set(t),f=a.current;c.forEach(function(p){d.has(p)||cu(p,null)}),d.forEach(function(p){c.has(p)||cu(p,f)})}Wg.set(a,t)},[t]),a}function Vj(t){return t}function Gj(t,n){n===void 0&&(n=Vj);var a=[],s=!1,c={read:function(){if(s)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:t},useMedium:function(d){var f=n(d,s);return a.push(f),function(){a=a.filter(function(p){return p!==f})}},assignSyncMedium:function(d){for(s=!0;a.length;){var f=a;a=[],f.forEach(d)}a={push:function(p){return d(p)},filter:function(){return a}}},assignMedium:function(d){s=!0;var f=[];if(a.length){var p=a;a=[],p.forEach(d),f=a}var g=function(){var v=f;f=[],v.forEach(d)},x=function(){return Promise.resolve().then(g)};x(),a={push:function(v){f.push(v),x()},filter:function(v){return f=f.filter(v),a}}}};return c}function Jj(t){t===void 0&&(t={});var n=Gj(null);return n.options=Tr({async:!0,ssr:!1},t),n}var hx=function(t){var n=t.sideCar,a=px(t,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var s=n.read();if(!s)throw new Error("Sidecar medium not found");return y.createElement(s,Tr({},a))};hx.isSideCarExport=!0;function Yj(t,n){return t.useMedium(n),hx}var gx=Jj(),du=function(){},Gl=y.forwardRef(function(t,n){var a=y.useRef(null),s=y.useState({onScrollCapture:du,onWheelCapture:du,onTouchMoveCapture:du}),c=s[0],d=s[1],f=t.forwardProps,p=t.children,g=t.className,x=t.removeScrollBar,v=t.enabled,w=t.shards,S=t.sideCar,j=t.noRelative,T=t.noIsolation,k=t.inert,P=t.allowPinchZoom,I=t.as,C=I===void 0?"div":I,N=t.gapMode,D=px(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),H=S,W=Uj([a,n]),O=Tr(Tr({},D),c);return y.createElement(y.Fragment,null,v&&y.createElement(H,{sideCar:gx,removeScrollBar:x,shards:w,noRelative:j,noIsolation:T,inert:k,setCallbacks:d,allowPinchZoom:!!P,lockRef:a,gapMode:N}),f?y.cloneElement(y.Children.only(p),Tr(Tr({},O),{ref:W})):y.createElement(C,Tr({},O,{className:g,ref:W}),p))});Gl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Gl.classNames={fullWidth:vl,zeroRight:gl};var Kj=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function qj(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var n=Kj();return n&&t.setAttribute("nonce",n),t}function Qj(t,n){t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}function Xj(t){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(t)}var Zj=function(){var t=0,n=null;return{add:function(a){t==0&&(n=qj())&&(Qj(n,a),Xj(n)),t++},remove:function(){t--,!t&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},eE=function(){var t=Zj();return function(n,a){y.useEffect(function(){return t.add(n),function(){t.remove()}},[n&&a])}},vx=function(){var t=eE(),n=function(a){var s=a.styles,c=a.dynamic;return t(s,c),null};return n},tE={left:0,top:0,right:0,gap:0},uu=function(t){return parseInt(t||"",10)||0},rE=function(t){var n=window.getComputedStyle(document.body),a=n[t==="padding"?"paddingLeft":"marginLeft"],s=n[t==="padding"?"paddingTop":"marginTop"],c=n[t==="padding"?"paddingRight":"marginRight"];return[uu(a),uu(s),uu(c)]},nE=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return tE;var n=rE(t),a=document.documentElement.clientWidth,s=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,s-a+n[2]-n[0])}},oE=vx(),Mo="data-scroll-locked",iE=function(t,n,a,s){var c=t.left,d=t.top,f=t.right,p=t.gap;return a===void 0&&(a="margin"),`
  .`.concat(Fj,` {
   overflow: hidden `).concat(s,`;
   padding-right: `).concat(p,"px ").concat(s,`;
  }
  body[`).concat(Mo,`] {
    overflow: hidden `).concat(s,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(s,";"),a==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(d,`px;
    padding-right: `).concat(f,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p,"px ").concat(s,`;
    `),a==="padding"&&"padding-right: ".concat(p,"px ").concat(s,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(gl,` {
    right: `).concat(p,"px ").concat(s,`;
  }
  
  .`).concat(vl,` {
    margin-right: `).concat(p,"px ").concat(s,`;
  }
  
  .`).concat(gl," .").concat(gl,` {
    right: 0 `).concat(s,`;
  }
  
  .`).concat(vl," .").concat(vl,` {
    margin-right: 0 `).concat(s,`;
  }
  
  body[`).concat(Mo,`] {
    `).concat(Bj,": ").concat(p,`px;
  }
`)},Ug=function(){var t=parseInt(document.body.getAttribute(Mo)||"0",10);return isFinite(t)?t:0},aE=function(){y.useEffect(function(){return document.body.setAttribute(Mo,(Ug()+1).toString()),function(){var t=Ug()-1;t<=0?document.body.removeAttribute(Mo):document.body.setAttribute(Mo,t.toString())}},[])},sE=function(t){var n=t.noRelative,a=t.noImportant,s=t.gapMode,c=s===void 0?"margin":s;aE();var d=y.useMemo(function(){return nE(c)},[c]);return y.createElement(oE,{styles:iE(d,!n,c,a?"":"!important")})},Xu=!1;if(typeof window<"u")try{var Ss=Object.defineProperty({},"passive",{get:function(){return Xu=!0,!0}});window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{Xu=!1}var Ao=Xu?{passive:!1}:!1,lE=function(t){return t.tagName==="TEXTAREA"},xx=function(t,n){if(!(t instanceof Element))return!1;var a=window.getComputedStyle(t);return a[n]!=="hidden"&&!(a.overflowY===a.overflowX&&!lE(t)&&a[n]==="visible")},cE=function(t){return xx(t,"overflowY")},dE=function(t){return xx(t,"overflowX")},Vg=function(t,n){var a=n.ownerDocument,s=n;do{typeof ShadowRoot<"u"&&s instanceof ShadowRoot&&(s=s.host);var c=yx(t,s);if(c){var d=wx(t,s),f=d[1],p=d[2];if(f>p)return!0}s=s.parentNode}while(s&&s!==a.body);return!1},uE=function(t){var n=t.scrollTop,a=t.scrollHeight,s=t.clientHeight;return[n,a,s]},fE=function(t){var n=t.scrollLeft,a=t.scrollWidth,s=t.clientWidth;return[n,a,s]},yx=function(t,n){return t==="v"?cE(n):dE(n)},wx=function(t,n){return t==="v"?uE(n):fE(n)},mE=function(t,n){return t==="h"&&n==="rtl"?-1:1},pE=function(t,n,a,s,c){var d=mE(t,window.getComputedStyle(n).direction),f=d*s,p=a.target,g=n.contains(p),x=!1,v=f>0,w=0,S=0;do{if(!p)break;var j=wx(t,p),T=j[0],k=j[1],P=j[2],I=k-P-d*T;(T||I)&&yx(t,p)&&(w+=I,S+=T);var C=p.parentNode;p=C&&C.nodeType===Node.DOCUMENT_FRAGMENT_NODE?C.host:C}while(!g&&p!==document.body||g&&(n.contains(p)||n===p));return(v&&Math.abs(w)<1||!v&&Math.abs(S)<1)&&(x=!0),x},js=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},Gg=function(t){return[t.deltaX,t.deltaY]},Jg=function(t){return t&&"current"in t?t.current:t},hE=function(t,n){return t[0]===n[0]&&t[1]===n[1]},gE=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},vE=0,_o=[];function xE(t){var n=y.useRef([]),a=y.useRef([0,0]),s=y.useRef(),c=y.useState(vE++)[0],d=y.useState(vx)[0],f=y.useRef(t);y.useEffect(function(){f.current=t},[t]),y.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(c));var k=Mj([t.lockRef.current],(t.shards||[]).map(Jg),!0).filter(Boolean);return k.forEach(function(P){return P.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),k.forEach(function(P){return P.classList.remove("allow-interactivity-".concat(c))})}}},[t.inert,t.lockRef.current,t.shards]);var p=y.useCallback(function(k,P){if("touches"in k&&k.touches.length===2||k.type==="wheel"&&k.ctrlKey)return!f.current.allowPinchZoom;var I=js(k),C=a.current,N="deltaX"in k?k.deltaX:C[0]-I[0],D="deltaY"in k?k.deltaY:C[1]-I[1],H,W=k.target,O=Math.abs(N)>Math.abs(D)?"h":"v";if("touches"in k&&O==="h"&&W.type==="range")return!1;var F=Vg(O,W);if(!F)return!0;if(F?H=O:(H=O==="v"?"h":"v",F=Vg(O,W)),!F)return!1;if(!s.current&&"changedTouches"in k&&(N||D)&&(s.current=H),!H)return!0;var Q=s.current||H;return pE(Q,P,k,Q==="h"?N:D)},[]),g=y.useCallback(function(k){var P=k;if(!(!_o.length||_o[_o.length-1]!==d)){var I="deltaY"in P?Gg(P):js(P),C=n.current.filter(function(H){return H.name===P.type&&(H.target===P.target||P.target===H.shadowParent)&&hE(H.delta,I)})[0];if(C&&C.should){P.cancelable&&P.preventDefault();return}if(!C){var N=(f.current.shards||[]).map(Jg).filter(Boolean).filter(function(H){return H.contains(P.target)}),D=N.length>0?p(P,N[0]):!f.current.noIsolation;D&&P.cancelable&&P.preventDefault()}}},[]),x=y.useCallback(function(k,P,I,C){var N={name:k,delta:P,target:I,should:C,shadowParent:yE(I)};n.current.push(N),setTimeout(function(){n.current=n.current.filter(function(D){return D!==N})},1)},[]),v=y.useCallback(function(k){a.current=js(k),s.current=void 0},[]),w=y.useCallback(function(k){x(k.type,Gg(k),k.target,p(k,t.lockRef.current))},[]),S=y.useCallback(function(k){x(k.type,js(k),k.target,p(k,t.lockRef.current))},[]);y.useEffect(function(){return _o.push(d),t.setCallbacks({onScrollCapture:w,onWheelCapture:w,onTouchMoveCapture:S}),document.addEventListener("wheel",g,Ao),document.addEventListener("touchmove",g,Ao),document.addEventListener("touchstart",v,Ao),function(){_o=_o.filter(function(k){return k!==d}),document.removeEventListener("wheel",g,Ao),document.removeEventListener("touchmove",g,Ao),document.removeEventListener("touchstart",v,Ao)}},[]);var j=t.removeScrollBar,T=t.inert;return y.createElement(y.Fragment,null,T?y.createElement(d,{styles:gE(c)}):null,j?y.createElement(sE,{noRelative:t.noRelative,gapMode:t.gapMode}):null)}function yE(t){for(var n=null;t!==null;)t instanceof ShadowRoot&&(n=t.host,t=t.host),t=t.parentNode;return n}const wE=Yj(gx,xE);var Hf=y.forwardRef(function(t,n){return y.createElement(Gl,Tr({},t,{ref:n,sideCar:wE}))});Hf.classNames=Gl.classNames;var bE=[" ","Enter","ArrowUp","ArrowDown"],CE=[" ","Enter"],Xn="Select",[Jl,Yl,kE]=$0(Xn),[ei,o8]=to(Xn,[kE,tx]),Kl=tx(),[SE,En]=ei(Xn),[jE,EE]=ei(Xn),bx=t=>{const{__scopeSelect:n,children:a,open:s,defaultOpen:c,onOpenChange:d,value:f,defaultValue:p,onValueChange:g,dir:x,name:v,autoComplete:w,disabled:S,required:j,form:T}=t,k=Kl(n),[P,I]=y.useState(null),[C,N]=y.useState(null),[D,H]=y.useState(!1),W=z0(x),[O,F]=Qn({prop:s,defaultProp:c??!1,onChange:d,caller:Xn}),[Q,ae]=Qn({prop:f,defaultProp:p,onChange:g,caller:Xn}),xe=y.useRef(null),fe=P?T||!!P.closest("form"):!0,[ye,me]=y.useState(new Set),Se=Array.from(ye).map(se=>se.props.value).join(";");return o.jsx(Ej,{...k,children:o.jsxs(SE,{required:j,scope:n,trigger:P,onTriggerChange:I,valueNode:C,onValueNodeChange:N,valueNodeHasChildren:D,onValueNodeHasChildrenChange:H,contentId:bn(),value:Q,onValueChange:ae,open:O,onOpenChange:F,dir:W,triggerPointerDownPosRef:xe,disabled:S,children:[o.jsx(Jl.Provider,{scope:n,children:o.jsx(jE,{scope:t.__scopeSelect,onNativeOptionAdd:y.useCallback(se=>{me(ee=>new Set(ee).add(se))},[]),onNativeOptionRemove:y.useCallback(se=>{me(ee=>{const $=new Set(ee);return $.delete(se),$})},[]),children:a})}),fe?o.jsxs(Vx,{"aria-hidden":!0,required:j,tabIndex:-1,name:v,autoComplete:w,value:Q,onChange:se=>ae(se.target.value),disabled:S,form:T,children:[Q===void 0?o.jsx("option",{value:""}):null,Array.from(ye)]},Se):null]})})};bx.displayName=Xn;var Cx="SelectTrigger",kx=y.forwardRef((t,n)=>{const{__scopeSelect:a,disabled:s=!1,...c}=t,d=Kl(a),f=En(Cx,a),p=f.disabled||s,g=Ye(n,f.onTriggerChange),x=Yl(a),v=y.useRef("touch"),[w,S,j]=Jx(k=>{const P=x().filter(N=>!N.disabled),I=P.find(N=>N.value===f.value),C=Yx(P,k,I);C!==void 0&&f.onValueChange(C.value)}),T=k=>{p||(f.onOpenChange(!0),j()),k&&(f.triggerPointerDownPosRef.current={x:Math.round(k.pageX),y:Math.round(k.pageY)})};return o.jsx(Pj,{asChild:!0,...d,children:o.jsx(Ie.button,{type:"button",role:"combobox","aria-controls":f.contentId,"aria-expanded":f.open,"aria-required":f.required,"aria-autocomplete":"none",dir:f.dir,"data-state":f.open?"open":"closed",disabled:p,"data-disabled":p?"":void 0,"data-placeholder":Gx(f.value)?"":void 0,...c,ref:g,onClick:Be(c.onClick,k=>{k.currentTarget.focus(),v.current!=="mouse"&&T(k)}),onPointerDown:Be(c.onPointerDown,k=>{v.current=k.pointerType;const P=k.target;P.hasPointerCapture(k.pointerId)&&P.releasePointerCapture(k.pointerId),k.button===0&&k.ctrlKey===!1&&k.pointerType==="mouse"&&(T(k),k.preventDefault())}),onKeyDown:Be(c.onKeyDown,k=>{const P=w.current!=="";!(k.ctrlKey||k.altKey||k.metaKey)&&k.key.length===1&&S(k.key),!(P&&k.key===" ")&&bE.includes(k.key)&&(T(),k.preventDefault())})})})});kx.displayName=Cx;var Sx="SelectValue",jx=y.forwardRef((t,n)=>{const{__scopeSelect:a,className:s,style:c,children:d,placeholder:f="",...p}=t,g=En(Sx,a),{onValueNodeHasChildrenChange:x}=g,v=d!==void 0,w=Ye(n,g.onValueNodeChange);return xt(()=>{x(v)},[x,v]),o.jsx(Ie.span,{...p,ref:w,style:{pointerEvents:"none"},children:Gx(g.value)?o.jsx(o.Fragment,{children:f}):d})});jx.displayName=Sx;var PE="SelectIcon",Ex=y.forwardRef((t,n)=>{const{__scopeSelect:a,children:s,...c}=t;return o.jsx(Ie.span,{"aria-hidden":!0,...c,ref:n,children:s||"▼"})});Ex.displayName=PE;var RE="SelectPortal",Px=t=>o.jsx(Bf,{asChild:!0,...t});Px.displayName=RE;var Zn="SelectContent",Rx=y.forwardRef((t,n)=>{const a=En(Zn,t.__scopeSelect),[s,c]=y.useState();if(xt(()=>{c(new DocumentFragment)},[]),!a.open){const d=s;return d?oa.createPortal(o.jsx(Tx,{scope:t.__scopeSelect,children:o.jsx(Jl.Slot,{scope:t.__scopeSelect,children:o.jsx("div",{children:t.children})})}),d):null}return o.jsx(Nx,{...t,ref:n})});Rx.displayName=Zn;var fr=10,[Tx,Pn]=ei(Zn),TE="SelectContentImpl",NE=Go("SelectContent.RemoveScroll"),Nx=y.forwardRef((t,n)=>{const{__scopeSelect:a,position:s="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:d,onPointerDownOutside:f,side:p,sideOffset:g,align:x,alignOffset:v,arrowPadding:w,collisionBoundary:S,collisionPadding:j,sticky:T,hideWhenDetached:k,avoidCollisions:P,...I}=t,C=En(Zn,a),[N,D]=y.useState(null),[H,W]=y.useState(null),O=Ye(n,G=>D(G)),[F,Q]=y.useState(null),[ae,xe]=y.useState(null),fe=Yl(a),[ye,me]=y.useState(!1),Se=y.useRef(!1);y.useEffect(()=>{if(N)return mx(N)},[N]),M0();const se=y.useCallback(G=>{const[ce,...pe]=fe().map(Ne=>Ne.ref.current),[Ce]=pe.slice(-1),Re=document.activeElement;for(const Ne of G)if(Ne===Re||(Ne?.scrollIntoView({block:"nearest"}),Ne===ce&&H&&(H.scrollTop=0),Ne===Ce&&H&&(H.scrollTop=H.scrollHeight),Ne?.focus(),document.activeElement!==Re))return},[fe,H]),ee=y.useCallback(()=>se([F,N]),[se,F,N]);y.useEffect(()=>{ye&&ee()},[ye,ee]);const{onOpenChange:$,triggerPointerDownPosRef:K}=C;y.useEffect(()=>{if(N){let G={x:0,y:0};const ce=Ce=>{G={x:Math.abs(Math.round(Ce.pageX)-(K.current?.x??0)),y:Math.abs(Math.round(Ce.pageY)-(K.current?.y??0))}},pe=Ce=>{G.x<=10&&G.y<=10?Ce.preventDefault():N.contains(Ce.target)||$(!1),document.removeEventListener("pointermove",ce),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",ce),document.addEventListener("pointerup",pe,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ce),document.removeEventListener("pointerup",pe,{capture:!0})}}},[N,$,K]),y.useEffect(()=>{const G=()=>$(!1);return window.addEventListener("blur",G),window.addEventListener("resize",G),()=>{window.removeEventListener("blur",G),window.removeEventListener("resize",G)}},[$]);const[Y,E]=Jx(G=>{const ce=fe().filter(Re=>!Re.disabled),pe=ce.find(Re=>Re.ref.current===document.activeElement),Ce=Yx(ce,G,pe);Ce&&setTimeout(()=>Ce.ref.current.focus())}),B=y.useCallback((G,ce,pe)=>{const Ce=!Se.current&&!pe;(C.value!==void 0&&C.value===ce||Ce)&&(Q(G),Ce&&(Se.current=!0))},[C.value]),X=y.useCallback(()=>N?.focus(),[N]),te=y.useCallback((G,ce,pe)=>{const Ce=!Se.current&&!pe;(C.value!==void 0&&C.value===ce||Ce)&&xe(G)},[C.value]),ve=s==="popper"?Zu:Ix,we=ve===Zu?{side:p,sideOffset:g,align:x,alignOffset:v,arrowPadding:w,collisionBoundary:S,collisionPadding:j,sticky:T,hideWhenDetached:k,avoidCollisions:P}:{};return o.jsx(Tx,{scope:a,content:N,viewport:H,onViewportChange:W,itemRefCallback:B,selectedItem:F,onItemLeave:X,itemTextRefCallback:te,focusSelectedItem:ee,selectedItemText:ae,position:s,isPositioned:ye,searchRef:Y,children:o.jsx(Hf,{as:NE,allowPinchZoom:!0,children:o.jsx(Af,{asChild:!0,trapped:C.open,onMountAutoFocus:G=>{G.preventDefault()},onUnmountAutoFocus:Be(c,G=>{C.trigger?.focus({preventScroll:!0}),G.preventDefault()}),children:o.jsx(If,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:G=>G.preventDefault(),onDismiss:()=>C.onOpenChange(!1),children:o.jsx(ve,{role:"listbox",id:C.contentId,"data-state":C.open?"open":"closed",dir:C.dir,onContextMenu:G=>G.preventDefault(),...I,...we,onPlaced:()=>me(!0),ref:O,style:{display:"flex",flexDirection:"column",outline:"none",...I.style},onKeyDown:Be(I.onKeyDown,G=>{const ce=G.ctrlKey||G.altKey||G.metaKey;if(G.key==="Tab"&&G.preventDefault(),!ce&&G.key.length===1&&E(G.key),["ArrowUp","ArrowDown","Home","End"].includes(G.key)){let Ce=fe().filter(Re=>!Re.disabled).map(Re=>Re.ref.current);if(["ArrowUp","End"].includes(G.key)&&(Ce=Ce.slice().reverse()),["ArrowUp","ArrowDown"].includes(G.key)){const Re=G.target,Ne=Ce.indexOf(Re);Ce=Ce.slice(Ne+1)}setTimeout(()=>se(Ce)),G.preventDefault()}})})})})})})});Nx.displayName=TE;var IE="SelectItemAlignedPosition",Ix=y.forwardRef((t,n)=>{const{__scopeSelect:a,onPlaced:s,...c}=t,d=En(Zn,a),f=Pn(Zn,a),[p,g]=y.useState(null),[x,v]=y.useState(null),w=Ye(n,O=>v(O)),S=Yl(a),j=y.useRef(!1),T=y.useRef(!0),{viewport:k,selectedItem:P,selectedItemText:I,focusSelectedItem:C}=f,N=y.useCallback(()=>{if(d.trigger&&d.valueNode&&p&&x&&k&&P&&I){const O=d.trigger.getBoundingClientRect(),F=x.getBoundingClientRect(),Q=d.valueNode.getBoundingClientRect(),ae=I.getBoundingClientRect();if(d.dir!=="rtl"){const Re=ae.left-F.left,Ne=Q.left-Re,ht=O.left-Ne,Zt=O.width+ht,ro=Math.max(Zt,F.width),no=window.innerWidth-fr,Rn=Sg(Ne,[fr,Math.max(fr,no-ro)]);p.style.minWidth=Zt+"px",p.style.left=Rn+"px"}else{const Re=F.right-ae.right,Ne=window.innerWidth-Q.right-Re,ht=window.innerWidth-O.right-Ne,Zt=O.width+ht,ro=Math.max(Zt,F.width),no=window.innerWidth-fr,Rn=Sg(Ne,[fr,Math.max(fr,no-ro)]);p.style.minWidth=Zt+"px",p.style.right=Rn+"px"}const xe=S(),fe=window.innerHeight-fr*2,ye=k.scrollHeight,me=window.getComputedStyle(x),Se=parseInt(me.borderTopWidth,10),se=parseInt(me.paddingTop,10),ee=parseInt(me.borderBottomWidth,10),$=parseInt(me.paddingBottom,10),K=Se+se+ye+$+ee,Y=Math.min(P.offsetHeight*5,K),E=window.getComputedStyle(k),B=parseInt(E.paddingTop,10),X=parseInt(E.paddingBottom,10),te=O.top+O.height/2-fr,ve=fe-te,we=P.offsetHeight/2,G=P.offsetTop+we,ce=Se+se+G,pe=K-ce;if(ce<=te){const Re=xe.length>0&&P===xe[xe.length-1].ref.current;p.style.bottom="0px";const Ne=x.clientHeight-k.offsetTop-k.offsetHeight,ht=Math.max(ve,we+(Re?X:0)+Ne+ee),Zt=ce+ht;p.style.height=Zt+"px"}else{const Re=xe.length>0&&P===xe[0].ref.current;p.style.top="0px";const ht=Math.max(te,Se+k.offsetTop+(Re?B:0)+we)+pe;p.style.height=ht+"px",k.scrollTop=ce-te+k.offsetTop}p.style.margin=`${fr}px 0`,p.style.minHeight=Y+"px",p.style.maxHeight=fe+"px",s?.(),requestAnimationFrame(()=>j.current=!0)}},[S,d.trigger,d.valueNode,p,x,k,P,I,d.dir,s]);xt(()=>N(),[N]);const[D,H]=y.useState();xt(()=>{x&&H(window.getComputedStyle(x).zIndex)},[x]);const W=y.useCallback(O=>{O&&T.current===!0&&(N(),C?.(),T.current=!1)},[N,C]);return o.jsx(_E,{scope:a,contentWrapper:p,shouldExpandOnScrollRef:j,onScrollButtonChange:W,children:o.jsx("div",{ref:g,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:D},children:o.jsx(Ie.div,{...c,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});Ix.displayName=IE;var AE="SelectPopperPosition",Zu=y.forwardRef((t,n)=>{const{__scopeSelect:a,align:s="start",collisionPadding:c=fr,...d}=t,f=Kl(a);return o.jsx(Rj,{...f,...d,ref:n,align:s,collisionPadding:c,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Zu.displayName=AE;var[_E,Wf]=ei(Zn,{}),ef="SelectViewport",Ax=y.forwardRef((t,n)=>{const{__scopeSelect:a,nonce:s,...c}=t,d=Pn(ef,a),f=Wf(ef,a),p=Ye(n,d.onViewportChange),g=y.useRef(0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),o.jsx(Jl.Slot,{scope:a,children:o.jsx(Ie.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:p,style:{position:"relative",flex:1,overflow:"hidden auto",...c.style},onScroll:Be(c.onScroll,x=>{const v=x.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:S}=f;if(S?.current&&w){const j=Math.abs(g.current-v.scrollTop);if(j>0){const T=window.innerHeight-fr*2,k=parseFloat(w.style.minHeight),P=parseFloat(w.style.height),I=Math.max(k,P);if(I<T){const C=I+j,N=Math.min(T,C),D=C-N;w.style.height=N+"px",w.style.bottom==="0px"&&(v.scrollTop=D>0?D:0,w.style.justifyContent="flex-end")}}}g.current=v.scrollTop})})})]})});Ax.displayName=ef;var _x="SelectGroup",[DE,$E]=ei(_x),zE=y.forwardRef((t,n)=>{const{__scopeSelect:a,...s}=t,c=bn();return o.jsx(DE,{scope:a,id:c,children:o.jsx(Ie.div,{role:"group","aria-labelledby":c,...s,ref:n})})});zE.displayName=_x;var Dx="SelectLabel",$x=y.forwardRef((t,n)=>{const{__scopeSelect:a,...s}=t,c=$E(Dx,a);return o.jsx(Ie.div,{id:c.id,...s,ref:n})});$x.displayName=Dx;var Rl="SelectItem",[LE,zx]=ei(Rl),Lx=y.forwardRef((t,n)=>{const{__scopeSelect:a,value:s,disabled:c=!1,textValue:d,...f}=t,p=En(Rl,a),g=Pn(Rl,a),x=p.value===s,[v,w]=y.useState(d??""),[S,j]=y.useState(!1),T=Ye(n,C=>g.itemRefCallback?.(C,s,c)),k=bn(),P=y.useRef("touch"),I=()=>{c||(p.onValueChange(s),p.onOpenChange(!1))};if(s==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return o.jsx(LE,{scope:a,value:s,disabled:c,textId:k,isSelected:x,onItemTextChange:y.useCallback(C=>{w(N=>N||(C?.textContent??"").trim())},[]),children:o.jsx(Jl.ItemSlot,{scope:a,value:s,disabled:c,textValue:v,children:o.jsx(Ie.div,{role:"option","aria-labelledby":k,"data-highlighted":S?"":void 0,"aria-selected":x&&S,"data-state":x?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...f,ref:T,onFocus:Be(f.onFocus,()=>j(!0)),onBlur:Be(f.onBlur,()=>j(!1)),onClick:Be(f.onClick,()=>{P.current!=="mouse"&&I()}),onPointerUp:Be(f.onPointerUp,()=>{P.current==="mouse"&&I()}),onPointerDown:Be(f.onPointerDown,C=>{P.current=C.pointerType}),onPointerMove:Be(f.onPointerMove,C=>{P.current=C.pointerType,c?g.onItemLeave?.():P.current==="mouse"&&C.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Be(f.onPointerLeave,C=>{C.currentTarget===document.activeElement&&g.onItemLeave?.()}),onKeyDown:Be(f.onKeyDown,C=>{g.searchRef?.current!==""&&C.key===" "||(CE.includes(C.key)&&I(),C.key===" "&&C.preventDefault())})})})})});Lx.displayName=Rl;var Ki="SelectItemText",Ox=y.forwardRef((t,n)=>{const{__scopeSelect:a,className:s,style:c,...d}=t,f=En(Ki,a),p=Pn(Ki,a),g=zx(Ki,a),x=EE(Ki,a),[v,w]=y.useState(null),S=Ye(n,I=>w(I),g.onItemTextChange,I=>p.itemTextRefCallback?.(I,g.value,g.disabled)),j=v?.textContent,T=y.useMemo(()=>o.jsx("option",{value:g.value,disabled:g.disabled,children:j},g.value),[g.disabled,g.value,j]),{onNativeOptionAdd:k,onNativeOptionRemove:P}=x;return xt(()=>(k(T),()=>P(T)),[k,P,T]),o.jsxs(o.Fragment,{children:[o.jsx(Ie.span,{id:g.textId,...d,ref:S}),g.isSelected&&f.valueNode&&!f.valueNodeHasChildren?oa.createPortal(d.children,f.valueNode):null]})});Ox.displayName=Ki;var Mx="SelectItemIndicator",Fx=y.forwardRef((t,n)=>{const{__scopeSelect:a,...s}=t;return zx(Mx,a).isSelected?o.jsx(Ie.span,{"aria-hidden":!0,...s,ref:n}):null});Fx.displayName=Mx;var tf="SelectScrollUpButton",Bx=y.forwardRef((t,n)=>{const a=Pn(tf,t.__scopeSelect),s=Wf(tf,t.__scopeSelect),[c,d]=y.useState(!1),f=Ye(n,s.onScrollButtonChange);return xt(()=>{if(a.viewport&&a.isPositioned){let p=function(){const x=g.scrollTop>0;d(x)};const g=a.viewport;return p(),g.addEventListener("scroll",p),()=>g.removeEventListener("scroll",p)}},[a.viewport,a.isPositioned]),c?o.jsx(Wx,{...t,ref:f,onAutoScroll:()=>{const{viewport:p,selectedItem:g}=a;p&&g&&(p.scrollTop=p.scrollTop-g.offsetHeight)}}):null});Bx.displayName=tf;var rf="SelectScrollDownButton",Hx=y.forwardRef((t,n)=>{const a=Pn(rf,t.__scopeSelect),s=Wf(rf,t.__scopeSelect),[c,d]=y.useState(!1),f=Ye(n,s.onScrollButtonChange);return xt(()=>{if(a.viewport&&a.isPositioned){let p=function(){const x=g.scrollHeight-g.clientHeight,v=Math.ceil(g.scrollTop)<x;d(v)};const g=a.viewport;return p(),g.addEventListener("scroll",p),()=>g.removeEventListener("scroll",p)}},[a.viewport,a.isPositioned]),c?o.jsx(Wx,{...t,ref:f,onAutoScroll:()=>{const{viewport:p,selectedItem:g}=a;p&&g&&(p.scrollTop=p.scrollTop+g.offsetHeight)}}):null});Hx.displayName=rf;var Wx=y.forwardRef((t,n)=>{const{__scopeSelect:a,onAutoScroll:s,...c}=t,d=Pn("SelectScrollButton",a),f=y.useRef(null),p=Yl(a),g=y.useCallback(()=>{f.current!==null&&(window.clearInterval(f.current),f.current=null)},[]);return y.useEffect(()=>()=>g(),[g]),xt(()=>{p().find(v=>v.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[p]),o.jsx(Ie.div,{"aria-hidden":!0,...c,ref:n,style:{flexShrink:0,...c.style},onPointerDown:Be(c.onPointerDown,()=>{f.current===null&&(f.current=window.setInterval(s,50))}),onPointerMove:Be(c.onPointerMove,()=>{d.onItemLeave?.(),f.current===null&&(f.current=window.setInterval(s,50))}),onPointerLeave:Be(c.onPointerLeave,()=>{g()})})}),OE="SelectSeparator",Ux=y.forwardRef((t,n)=>{const{__scopeSelect:a,...s}=t;return o.jsx(Ie.div,{"aria-hidden":!0,...s,ref:n})});Ux.displayName=OE;var nf="SelectArrow",ME=y.forwardRef((t,n)=>{const{__scopeSelect:a,...s}=t,c=Kl(a),d=En(nf,a),f=Pn(nf,a);return d.open&&f.position==="popper"?o.jsx(Tj,{...c,...s,ref:n}):null});ME.displayName=nf;var FE="SelectBubbleInput",Vx=y.forwardRef(({__scopeSelect:t,value:n,...a},s)=>{const c=y.useRef(null),d=Ye(s,c),f=dx(n);return y.useEffect(()=>{const p=c.current;if(!p)return;const g=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(g,"value").set;if(f!==n&&v){const w=new Event("change",{bubbles:!0});v.call(p,n),p.dispatchEvent(w)}},[f,n]),o.jsx(Ie.select,{...a,style:{...ux,...a.style},ref:d,defaultValue:n})});Vx.displayName=FE;function Gx(t){return t===""||t===void 0}function Jx(t){const n=Kn(t),a=y.useRef(""),s=y.useRef(0),c=y.useCallback(f=>{const p=a.current+f;n(p),(function g(x){a.current=x,window.clearTimeout(s.current),x!==""&&(s.current=window.setTimeout(()=>g(""),1e3))})(p)},[n]),d=y.useCallback(()=>{a.current="",window.clearTimeout(s.current)},[]);return y.useEffect(()=>()=>window.clearTimeout(s.current),[]),[a,c,d]}function Yx(t,n,a){const c=n.length>1&&Array.from(n).every(x=>x===n[0])?n[0]:n,d=a?t.indexOf(a):-1;let f=BE(t,Math.max(d,0));c.length===1&&(f=f.filter(x=>x!==a));const g=f.find(x=>x.textValue.toLowerCase().startsWith(c.toLowerCase()));return g!==a?g:void 0}function BE(t,n){return t.map((a,s)=>t[(n+s)%t.length])}var HE=bx,WE=kx,UE=jx,VE=Ex,GE=Px,JE=Rx,YE=Ax,KE=$x,qE=Lx,QE=Ox,XE=Fx,ZE=Bx,e3=Hx,t3=Ux;const r3=m(WE)`
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: var(--input-background, #f3f3f5);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  white-space: nowrap;
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  
  height: ${t=>t.$size==="sm"?"2rem":"2.25rem"};
  
  &[data-placeholder] {
    color: var(--muted-foreground, #717182);
  }
  
  svg:not([class*='text-']) {
    color: var(--muted-foreground, #717182);
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[aria-invalid="true"] {
    border-color: var(--destructive, #d4183d);
    box-shadow: 0 0 0 3px rgba(212, 24, 61, 0.2);
  }
  
  [data-slot="select-value"] {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }
`,n3=m(Fl)`
  width: 1rem;
  height: 1rem;
  opacity: 0.5;
`,o3=m(JE)`
  background-color: var(--popover, #ffffff);
  color: var(--popover-foreground, #111827);
  position: relative;
  z-index: 50;
  max-height: var(--radix-select-content-available-height);
  min-width: 8rem;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 0.375rem;
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
  
  &[data-state="open"] {
    animation: fadeIn 0.2s ease-out;
  }
  
  &[data-state="closed"] {
    animation: fadeOut 0.15s ease-in;
  }
  
  ${t=>t.$position==="popper"&&`
    &[data-side="bottom"] {
      transform: translateY(1px);
    }
    
    &[data-side="left"] {
      transform: translateX(-1px);
    }
    
    &[data-side="right"] {
      transform: translateX(1px);
    }
    
    &[data-side="top"] {
      transform: translateY(-1px);
    }
  `}
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`,i3=m(YE)`
  padding: 0.25rem;
  
  ${t=>t.$position==="popper"&&`
    height: var(--radix-select-trigger-height);
    width: 100%;
    min-width: var(--radix-select-trigger-width);
  `}
`;m(KE)`
  color: var(--muted-foreground, #717182);
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
`;const a3=m(qE)`
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 2rem 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
  
  &:focus {
    background-color: var(--accent, #e9ebef);
    color: var(--accent-foreground, #030213);
  }
  
  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
  
  svg:not([class*='text-']) {
    color: var(--muted-foreground, #717182);
  }
  
  svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }
`,s3=m.span`
  position: absolute;
  right: 0.5rem;
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
`,l3=m(Sf)`
  width: 1rem;
  height: 1rem;
`;m(t3)`
  background-color: var(--border, rgba(0, 0, 0, 0.1));
  pointer-events: none;
  margin: 0.25rem -0.25rem;
  height: 1px;
`;const Kx=m.div`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
`,c3=m(w0)`
  width: 1rem;
  height: 1rem;
`,d3=m(Fl)`
  width: 1rem;
  height: 1rem;
`;function Mt({...t}){return o.jsx(HE,{"data-slot":"select",...t})}function Ft({...t}){return o.jsx(UE,{"data-slot":"select-value",...t})}function Qt({className:t,size:n="default",children:a,...s}){return o.jsxs(r3,{"data-slot":"select-trigger","data-size":n,$size:n,className:t,...s,children:[a,o.jsx(VE,{asChild:!0,children:o.jsx(n3,{})})]})}function Bt({className:t,children:n,position:a="popper",...s}){return o.jsx(GE,{children:o.jsxs(o3,{"data-slot":"select-content",$position:a,className:t,position:a,...s,children:[o.jsx(u3,{}),o.jsx(i3,{$position:a,children:n}),o.jsx(f3,{})]})})}function ue({className:t,children:n,...a}){return o.jsxs(a3,{"data-slot":"select-item",className:t,...a,children:[o.jsx(s3,{children:o.jsx(XE,{children:o.jsx(l3,{})})}),o.jsx(QE,{children:n})]})}function u3({className:t,...n}){return o.jsx(ZE,{"data-slot":"select-scroll-up-button",asChild:!0,...n,children:o.jsx(Kx,{className:t,children:o.jsx(c3,{})})})}function f3({className:t,...n}){return o.jsx(e3,{"data-slot":"select-scroll-down-button",asChild:!0,...n,children:o.jsx(Kx,{className:t,children:o.jsx(d3,{})})})}var ql="Switch",[m3,i8]=to(ql),[p3,h3]=m3(ql),qx=y.forwardRef((t,n)=>{const{__scopeSwitch:a,name:s,checked:c,defaultChecked:d,required:f,disabled:p,value:g="on",onCheckedChange:x,form:v,...w}=t,[S,j]=y.useState(null),T=Ye(n,N=>j(N)),k=y.useRef(!1),P=S?v||!!S.closest("form"):!0,[I,C]=Qn({prop:c,defaultProp:d??!1,onChange:x,caller:ql});return o.jsxs(p3,{scope:a,checked:I,disabled:p,children:[o.jsx(Ie.button,{type:"button",role:"switch","aria-checked":I,"aria-required":f,"data-state":ey(I),"data-disabled":p?"":void 0,disabled:p,value:g,...w,ref:T,onClick:Be(t.onClick,N=>{C(D=>!D),P&&(k.current=N.isPropagationStopped(),k.current||N.stopPropagation())})}),P&&o.jsx(Zx,{control:S,bubbles:!k.current,name:s,value:g,checked:I,required:f,disabled:p,form:v,style:{transform:"translateX(-100%)"}})]})});qx.displayName=ql;var Qx="SwitchThumb",Xx=y.forwardRef((t,n)=>{const{__scopeSwitch:a,...s}=t,c=h3(Qx,a);return o.jsx(Ie.span,{"data-state":ey(c.checked),"data-disabled":c.disabled?"":void 0,...s,ref:n})});Xx.displayName=Qx;var g3="SwitchBubbleInput",Zx=y.forwardRef(({__scopeSwitch:t,control:n,checked:a,bubbles:s=!0,...c},d)=>{const f=y.useRef(null),p=Ye(f,d),g=dx(a),x=Z0(n);return y.useEffect(()=>{const v=f.current;if(!v)return;const w=window.HTMLInputElement.prototype,j=Object.getOwnPropertyDescriptor(w,"checked").set;if(g!==a&&j){const T=new Event("click",{bubbles:s});j.call(v,a),v.dispatchEvent(T)}},[g,a,s]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...c,tabIndex:-1,ref:p,style:{...c.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Zx.displayName=g3;function ey(t){return t?"checked":"unchecked"}var v3=qx,x3=Xx;const y3=m(v3)`
  display: inline-flex;
  height: 1.15rem;
  width: 2rem;
  flex-shrink: 0;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid transparent;
  transition: all 0.2s;
  outline: none;
  
  &[data-state="checked"] {
    background-color: var(--primary, #030213);
  }
  
  &[data-state="unchecked"] {
    background-color: var(--switch-background, #cbced4);
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,w3=m(x3)`
  background-color: var(--card, #ffffff);
  pointer-events: none;
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  box-shadow: 0 0 0 0 transparent;
  transition: transform 0.2s;
  
  &[data-state="checked"] {
    transform: translateX(calc(100% - 2px));
  }
  
  &[data-state="unchecked"] {
    transform: translateX(0);
  }
`;function b3({className:t,...n}){return o.jsx(y3,{"data-slot":"switch",className:t,...n,children:o.jsx(w3,{"data-slot":"switch-thumb"})})}const C3=m.div`
  background-color: var(--card, #ffffff);
  color: var(--card-foreground, #111827);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
`,k3=m.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: auto auto;
  align-items: start;
  gap: 0.375rem;
  padding: 1.5rem 1.5rem 0 1.5rem;
  
  &:has([data-slot="card-action"]) {
    grid-template-columns: 1fr auto;
  }
  
  &.border-b {
    padding-bottom: 1.5rem;
  }
`,S3=m.h4`
  line-height: 1;
  margin: 0;
  font-weight: 600;
`;m.p`
  color: var(--muted-foreground, #717182);
  margin: 0;
`;m.div`
  grid-column-start: 2;
  grid-row: 1 / span 2;
  align-self: start;
  justify-self: end;
`;const j3=m.div`
  padding: 0 1.5rem;
  
  &:last-child {
    padding-bottom: 1.5rem;
  }
`;m.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem 1.5rem 1.5rem;
  
  &.border-t {
    padding-top: 1.5rem;
  }
`;function Ae({className:t,...n}){return o.jsx(C3,{"data-slot":"card",className:t,...n})}function We({className:t,...n}){return o.jsx(k3,{"data-slot":"card-header",className:t,...n})}function Ue({className:t,...n}){return o.jsx(S3,{"data-slot":"card-title",className:t,...n})}function ze({className:t,...n}){return o.jsx(j3,{"data-slot":"card-content",className:t,...n})}const ty=[{id:"export-fcl",name:"Export FCL",type:"export",containerType:"fcl",description:"Full Container Load Export",requiredDocuments:["Commercial Invoice","Packing List","Bill of Lading (B/L)","Export License","Certificate of Origin","Insurance Certificate"],optionalDocuments:["Inspection Certificate","Fumigation Certificate","Weight Certificate"]},{id:"export-lcl",name:"Export LCL",type:"export",containerType:"lcl",description:"Less than Container Load Export",requiredDocuments:["Commercial Invoice","Packing List","House Bill of Lading","Export Declaration","Certificate of Origin"],optionalDocuments:["Insurance Certificate","Inspection Certificate"]},{id:"import-fcl",name:"Import FCL",type:"import",containerType:"fcl",description:"Full Container Load Import",requiredDocuments:["Commercial Invoice","Packing List","Bill of Lading (B/L)","Import License","Customs Declaration","Insurance Certificate"],optionalDocuments:["Certificate of Origin","Inspection Certificate","Phytosanitary Certificate"]},{id:"import-lcl",name:"Import LCL",type:"import",containerType:"lcl",description:"Less than Container Load Import",requiredDocuments:["Commercial Invoice","Packing List","House Bill of Lading","Import Declaration","Customs Clearance"],optionalDocuments:["Certificate of Origin","Insurance Certificate"]},{id:"air-export",name:"Air Export",type:"export",containerType:"air",description:"Air Freight Export",requiredDocuments:["Commercial Invoice","Packing List","Air Waybill (AWB)","Export Declaration","Certificate of Origin"],optionalDocuments:["Insurance Certificate","Dangerous Goods Declaration","Temperature Control Certificate"]},{id:"air-import",name:"Air Import",type:"import",containerType:"air",description:"Air Freight Import",requiredDocuments:["Commercial Invoice","Packing List","Air Waybill (AWB)","Import Declaration","Customs Clearance"],optionalDocuments:["Certificate of Origin","Insurance Certificate","Dangerous Goods Declaration"]}],E3=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,P3=m.div`
  text-align: center;
  margin-bottom: clamp(1rem, 4vw, 2rem);
`,R3=m.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(3rem, 8vw, 4rem);
  height: clamp(3rem, 8vw, 4rem);
  background-color: #dbeafe;
  border-radius: 50%;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
`,T3=m(hr)`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  color: var(--primary);
`,N3=m.h2`
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.25rem, 1vw, 0.5rem) 0;
`,I3=m.p`
  color: var(--muted-foreground);
  margin: 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,A3=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
`,_3=m(We)`
  background-color: var(--muted);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
`,D3=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
`,$3=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,z3=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,L3=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Hn=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.375rem, 1vw, 0.5rem);
`,Hr=m(Oe)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
`,Es=m.span`
  color: #ef4444;
`,Ps=m(Fe)`
  background-color: var(--input-background);
  border: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  
  &:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 1px var(--ring);
  }
  
  &:disabled {
    background-color: var(--muted);
    color: var(--muted-foreground);
    opacity: 0.7;
  }
`,O3=m(Nf)`
  background-color: var(--input-background);
  border: 1px solid var(--border);
  min-height: clamp(4rem, 15vw, 6rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  &:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 1px var(--ring);
  }
`,Yg=m(Qt)`
  background-color: var(--input-background);
  border: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  
  &:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 1px var(--ring);
  }
  
  &:disabled {
    background-color: var(--muted);
    color: var(--muted-foreground);
    opacity: 0.7;
  }
`,Rs=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0;
  line-height: 1.3;
`,M3=m(Ae)`
  border: 1px solid #fed7aa;
  background-color: var(--card);
`,F3=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,B3=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,H3=m.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(2rem, 6vw, 2.5rem);
  height: clamp(2rem, 6vw, 2.5rem);
  background-color: #fed7aa;
  border-radius: 50%;
  flex-shrink: 0;
`,W3=m(T0)`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  color: #ea580c;
`,U3=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`,V3=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,G3=m.div`
  flex: 1;
`,J3=m.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  margin: 0;
`,Y3=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  line-height: 1.3;
`,K3=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.375rem, 1vw, 0.5rem);
  padding-top: clamp(0.75rem, 2vw, 1rem);
  border-top: 1px solid #fed7aa;
`,q3=m(Nf)`
  background-color: #fef3cd;
  border: 1px solid #fed7aa;
  min-height: clamp(3rem, 10vw, 4rem);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  &:focus {
    border-color: #ea580c;
    box-shadow: 0 0 0 1px #ea580c;
  }
`,Q3=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: #ea580c;
  margin: 0;
`;function Kg({data:t,updateData:n,updateValidation:a}){y.useEffect(()=>{const c=!!(t.title&&t.template&&t.description&&(!t.hazardous||t.hazardousDetails));a&&a(1,c)},[t,a]);const s=ty.filter(c=>c.containerType==="lcl"||c.containerType==="fcl");return o.jsxs(E3,{children:[o.jsxs(P3,{children:[o.jsx(R3,{children:o.jsx(T3,{})}),o.jsx(N3,{children:"Consolidation Basics"}),o.jsx(I3,{children:"Enter the fundamental details for your freight consolidation"})]}),o.jsxs(A3,{children:[o.jsx(_3,{children:o.jsx(D3,{children:"Consolidation Information"})}),o.jsxs($3,{children:[o.jsxs(z3,{children:[o.jsxs(Hn,{children:[o.jsxs(Hr,{htmlFor:"title",children:["Consolidation Title ",o.jsx(Es,{children:"*"})]}),o.jsx(Ps,{id:"title",placeholder:"e.g., Shanghai to Los Angeles - Electronics",value:t.title||"",onChange:c=>n("title",c.target.value)}),o.jsx(Rs,{children:"Descriptive name for this consolidation"})]}),o.jsxs(Hn,{children:[o.jsxs(Hr,{htmlFor:"template",children:["Shipment Template ",o.jsx(Es,{children:"*"})]}),o.jsxs(Mt,{value:t.template||"",onValueChange:c=>n("template",c),children:[o.jsx(Yg,{id:"template",children:o.jsx(Ft,{placeholder:"Select template"})}),o.jsx(Bt,{children:s.map(c=>o.jsx(ue,{value:c.name,children:c.name},c.id))})]}),o.jsx(Rs,{children:"Choose the type of consolidation shipment"})]})]}),o.jsxs(Hn,{children:[o.jsxs(Hr,{htmlFor:"description",children:["Consolidation Description ",o.jsx(Es,{children:"*"})]}),o.jsx(O3,{id:"description",placeholder:"e.g., Mixed electronics and machinery from multiple suppliers for retail distribution in Los Angeles...",value:t.description||"",onChange:c=>n("description",c.target.value)}),o.jsx(Rs,{children:"Overall description of all cargo in this consolidation"})]}),o.jsxs("div",{children:[o.jsx(Hr,{children:"Estimated Totals (will be updated from individual jobs)"}),o.jsxs(L3,{style:{marginTop:"0.5rem"},children:[o.jsxs(Hn,{children:[o.jsx(Hr,{htmlFor:"estimatedQuantity",children:"Est. Total Pieces"}),o.jsx(Ps,{id:"estimatedQuantity",type:"number",placeholder:"0",value:t.estimatedQuantity||"",onChange:c=>n("estimatedQuantity",c.target.value)})]}),o.jsxs(Hn,{children:[o.jsx(Hr,{htmlFor:"estimatedWeight",children:"Est. Total Weight (kg)"}),o.jsx(Ps,{id:"estimatedWeight",type:"number",step:"0.01",placeholder:"0.00",value:t.estimatedWeight||"",onChange:c=>n("estimatedWeight",c.target.value)})]}),o.jsxs(Hn,{children:[o.jsx(Hr,{htmlFor:"estimatedVolume",children:"Est. Total Volume (m³)"}),o.jsx(Ps,{id:"estimatedVolume",type:"number",step:"0.01",placeholder:"0.00",value:t.estimatedVolume||"",onChange:c=>n("estimatedVolume",c.target.value)})]}),o.jsxs(Hn,{children:[o.jsx(Hr,{htmlFor:"containerSize",children:"Preferred Container"}),o.jsxs(Mt,{value:t.containerSize||"",onValueChange:c=>n("containerSize",c),children:[o.jsx(Yg,{id:"containerSize",children:o.jsx(Ft,{placeholder:"Select size"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"20ft",children:"20ft Standard"}),o.jsx(ue,{value:"40ft",children:"40ft Standard"}),o.jsx(ue,{value:"40ft-hc",children:"40ft High Cube"}),o.jsx(ue,{value:"45ft",children:"45ft High Cube"})]})]})]})]}),o.jsx(Rs,{style:{marginTop:"0.5rem"},children:"These are estimates. Actual totals will be calculated from individual job details."})]})]})]}),o.jsx(M3,{children:o.jsx(F3,{children:o.jsxs(B3,{children:[o.jsx(H3,{children:o.jsx(W3,{})}),o.jsxs(U3,{children:[o.jsxs(V3,{children:[o.jsxs(G3,{children:[o.jsx(J3,{children:"Hazardous Goods Declaration"}),o.jsx(Y3,{children:"Indicate if any cargo in this consolidation contains hazardous materials"})]}),o.jsx(b3,{id:"hazardous",checked:t.hazardous||!1,onCheckedChange:c=>n("hazardous",c)})]}),t.hazardous&&o.jsxs(K3,{children:[o.jsxs(Hr,{htmlFor:"hazardous-details",children:["Hazardous Goods Details ",o.jsx(Es,{children:"*"})]}),o.jsx(q3,{id:"hazardous-details",placeholder:"Provide detailed information about hazardous materials, UN numbers, classifications, packaging requirements, etc.",value:t.hazardousDetails||"",onChange:c=>n("hazardousDetails",c.target.value)}),o.jsx(Q3,{children:"Required when consolidation contains hazardous goods. Include UN numbers, proper shipping names, hazard classes, and packaging groups."})]})]})]})})})]})}const X3=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 0.25rem;
  transition: color 0.2s, box-shadow 0.2s;
  overflow: hidden;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    pointer-events: none;
  }

  &:focus-visible {
    ring: 3px solid rgba(var(--ring-rgb, 107, 114, 128), 0.5);
  }

  ${t=>{switch(t.$variant){case"default":return`
          border-color: transparent;
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          a&:hover {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;case"secondary":return`
          border-color: transparent;
          background-color: var(--secondary, #f1f5f9);
          color: var(--secondary-foreground, #030213);
          
          a&:hover {
            background-color: rgba(241, 245, 249, 0.9);
          }
        `;case"destructive":return`
          border-color: transparent;
          background-color: var(--destructive, #d4183d);
          color: white;
          
          a&:hover {
            background-color: rgba(212, 24, 61, 0.9);
          }
        `;case"outline":return`
          border-color: var(--border, rgba(0, 0, 0, 0.1));
          background-color: transparent;
          color: var(--foreground, #111827);
          
          a&:hover {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;default:return`
          border-color: transparent;
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          a&:hover {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `}}}
`,Z3=m(_0)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 0.25rem;
  transition: color 0.2s, box-shadow 0.2s;
  overflow: hidden;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    pointer-events: none;
  }

  &:focus-visible {
    ring: 3px solid rgba(var(--ring-rgb, 107, 114, 128), 0.5);
  }

  ${t=>{switch(t.$variant){case"default":return`
          border-color: transparent;
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          a&:hover {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;case"secondary":return`
          border-color: transparent;
          background-color: var(--secondary, #f1f5f9);
          color: var(--secondary-foreground, #030213);
          
          a&:hover {
            background-color: rgba(241, 245, 249, 0.9);
          }
        `;case"destructive":return`
          border-color: transparent;
          background-color: var(--destructive, #d4183d);
          color: white;
          
          a&:hover {
            background-color: rgba(212, 24, 61, 0.9);
          }
        `;case"outline":return`
          border-color: var(--border, rgba(0, 0, 0, 0.1));
          background-color: transparent;
          color: var(--foreground, #111827);
          
          a&:hover {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;default:return`
          border-color: transparent;
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          a&:hover {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `}}}
`;function rt({className:t,variant:n="default",asChild:a=!1,...s}){return a?o.jsx(Z3,{"data-slot":"badge",$variant:n,className:t,...s}):o.jsx(X3,{"data-slot":"badge",$variant:n,className:t,...s})}const It=m.div`
  color: var(--danger);
  font-size: 0.75rem;
  margin-top: 0.1rem;
  background: #fff;
  border-radius: 0.25rem;
  padding: 0.1rem 0.25rem;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.09);
  position: relative;
  z-index: 1;
  white-space: nowrap;
  width: fit-content;
`,eP=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,tP=m.div`
  text-align: center;
  margin-bottom: clamp(1rem, 4vw, 2rem);
`,rP=m.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(3rem, 8vw, 4rem);
  height: clamp(3rem, 8vw, 4rem);
  background-color: #dcfce7;
  border-radius: 50%;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
`,nP=m(MC)`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  color: #16a34a;
`,oP=m.h2`
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.25rem, 1vw, 0.5rem) 0;
`,iP=m.p`
  color: var(--muted-foreground);
  margin: 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,aP=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,sP=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,lP=m(Ae)`
  border: 1px solid #bbf7d0;
  background-color: var(--card);
`,cP=m(We)`
  background-color: #dcfce7;
  border-bottom: 1px solid #bbf7d0;
  padding: clamp(1rem, 3vw, 1.5rem);
`,dP=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #15803d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,uP=m(Ae)`
  border: 1px solid #e9d5ff;
  background-color: var(--card);
`,fP=m(We)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
  padding: clamp(1rem, 3vw, 1.5rem);
`,mP=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,pP=m(Ae)`
  border: 1px solid #bfdbfe;
  background-color: var(--card);
`,hP=m(We)`
  background-color: #eff6ff;
  border-bottom: 1px solid #bfdbfe;
  padding: clamp(1rem, 3vw, 1.5rem);
`,gP=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #1d4ed8;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`,vP=m(Ae)`
  border: 1px solid #fed7aa;
  background-color: var(--card);
`,xP=m(We)`
  background-color: #fff7ed;
  border-bottom: 1px solid #fed7aa;
  padding: clamp(1rem, 3vw, 1.5rem);
`,yP=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #c2410c;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,wP=m(Ae)`
  border: 1px solid #99f6e4;
  background-color: var(--card);
`,bP=m(We)`
  background-color: #f0fdfa;
  border-bottom: 1px solid #99f6e4;
  padding: clamp(1rem, 3vw, 1.5rem);
`,CP=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #0f766e;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ts=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`,kP=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,ut=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.25rem, 1vw, 0.5rem);
`,qg=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,SP=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Qg=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ft=m(Oe)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
`,Ns=m.span`
  color: #ef4444;
`,jP=m(rt)`
  background-color: var(--muted);
  color: var(--muted-foreground);
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
`,sa=m(Fe)`
  background-color: var(--card);
  border: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,Is=m(sa)`
  &:focus {
    border-color: #16a34a;
    box-shadow: 0 0 0 1px #16a34a;
  }
`,As=m(sa)`
  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 1px #7c3aed;
  }
`,fu=m(sa)`
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`,mu=m(sa)`
  &:focus {
    border-color: #ea580c;
    box-shadow: 0 0 0 1px #ea580c;
  }
`,pu=m(sa)`
  &:focus {
    border-color: #0d9488;
    box-shadow: 0 0 0 1px #0d9488;
  }
`,EP=m(Qt)`
  background-color: var(--card);
  border: 1px solid var(--border);

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }
`;function PP({data:t,updateData:n,showValidation:a}){const s=(p,g,x)=>{const v=t[p]||{};n(p,{...v,[g]:x})},c=(p,g,x)=>{const v=t[p]||{};n(p,{...v,[g]:x})},d={shipper:["company","address","contact","email"],consignee:["company","address","contact","email"],origin:["port","city","country"],destination:["port","city","country"]},f={};return Object.entries(d).forEach(([p,g])=>{f[p]={},g.forEach(x=>{(!t[p]?.[x]||t[p][x].trim()==="")&&(f[p][x]=!0)})}),o.jsxs(eP,{children:[o.jsxs(tP,{children:[o.jsx(rP,{children:o.jsx(nP,{})}),o.jsx(oP,{children:"Parties & Locations"}),o.jsx(iP,{children:"Define the main parties and locations for this consolidation"})]}),o.jsxs(aP,{children:[o.jsxs(lP,{children:[o.jsx(cP,{children:o.jsxs(dP,{children:[o.jsx(bg,{style:{width:"1.25rem",height:"1.25rem"}}),"Shipper",o.jsx(Ns,{children:"*"})]})}),o.jsxs(Ts,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"shipper-company",children:"Company Name"}),o.jsx(Is,{id:"shipper-company",placeholder:"Company name",value:t.shipper?.company||"",onChange:p=>s("shipper","company",p.target.value)}),a&&f.shipper.company&&o.jsx(It,{children:"Required"})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"shipper-address",children:"Address"}),o.jsx(Is,{id:"shipper-address",placeholder:"Full address",value:t.shipper?.address||"",onChange:p=>s("shipper","address",p.target.value)}),a&&f.shipper.address&&o.jsx(It,{children:"Required"})]}),o.jsxs(qg,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"shipper-contact",children:"Contact Person"}),o.jsx(Is,{id:"shipper-contact",placeholder:"Contact name",value:t.shipper?.contact||"",onChange:p=>s("shipper","contact",p.target.value)}),a&&f.shipper.contact&&o.jsx(It,{children:"Required"})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"shipper-email",children:"Email"}),o.jsx(Is,{id:"shipper-email",type:"email",placeholder:"email@company.com",value:t.shipper?.email||"",onChange:p=>s("shipper","email",p.target.value)}),a&&f.shipper.email&&o.jsx(It,{children:"Required"})]})]})]})]}),o.jsxs(uP,{children:[o.jsx(fP,{children:o.jsxs(mP,{children:[o.jsx(bg,{style:{width:"1.25rem",height:"1.25rem"}}),"Consignee",o.jsx(Ns,{children:"*"})]})}),o.jsxs(Ts,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"consignee-company",children:"Company Name"}),o.jsx(As,{id:"consignee-company",placeholder:"Company name",value:t.consignee?.company||"",onChange:p=>s("consignee","company",p.target.value)}),a&&f.consignee.company&&o.jsx(It,{children:"Required"})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"consignee-address",children:"Address"}),o.jsx(As,{id:"consignee-address",placeholder:"Full address",value:t.consignee?.address||"",onChange:p=>s("consignee","address",p.target.value)}),a&&f.consignee.address&&o.jsx(It,{children:"Required"})]}),o.jsxs(qg,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"consignee-contact",children:"Contact Person"}),o.jsx(As,{id:"consignee-contact",placeholder:"Contact name",value:t.consignee?.contact||"",onChange:p=>s("consignee","contact",p.target.value)}),a&&f.consignee.contact&&o.jsx(It,{children:"Required"})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"consignee-email",children:"Email"}),o.jsx(As,{id:"consignee-email",type:"email",placeholder:"email@company.com",value:t.consignee?.email||"",onChange:p=>s("consignee","email",p.target.value)}),a&&f.consignee.email&&o.jsx(It,{children:"Required"})]})]})]})]})]}),o.jsxs(pP,{children:[o.jsx(hP,{children:o.jsxs(gP,{children:[o.jsx(LC,{style:{width:"1.25rem",height:"1.25rem"}}),"Notify Party",o.jsx(jP,{variant:"secondary",children:"Optional"})]})}),o.jsx(kP,{children:o.jsxs(SP,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"notify-company",children:"Company Name"}),o.jsx(fu,{id:"notify-company",placeholder:"Company name (optional)",value:t.notifyParty?.company||"",onChange:p=>s("notifyParty","company",p.target.value)})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"notify-type",children:"Party Type"}),o.jsx(fu,{id:"notify-type",placeholder:"Party Type (Required)",value:t.notifyParty?.type||"",onChange:p=>s("notifyParty","type",p.target.value)})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"notify-email",children:"Email"}),o.jsx(fu,{id:"notify-email",placeholder:"Email (Required)",value:t.notifyParty?.email||"",onChange:p=>s("notifyParty","email",p.target.value)})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"notify-document",children:"Document Stage"}),o.jsxs(Mt,{children:[o.jsx(EP,{children:o.jsx(Ft,{placeholder:"Select Document"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"all",children:"All Related Documents"}),o.jsx(ue,{value:"mawb",children:"MAWB"}),o.jsx(ue,{value:"packing",children:"Master Packing List"}),o.jsx(ue,{value:"invoice",children:"Master Invoice"})]})]})]})]})})]}),o.jsxs(sP,{children:[o.jsxs(vP,{children:[o.jsx(xP,{children:o.jsxs(yP,{children:[o.jsx(Cg,{style:{width:"1.25rem",height:"1.25rem"}}),"Origin",o.jsx(Ns,{children:"*"})]})}),o.jsxs(Ts,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"origin-port",children:"Port/Airport"}),o.jsx(mu,{id:"origin-port",placeholder:"Port or airport name",value:t.origin?.port||"",onChange:p=>c("origin","port",p.target.value)}),a&&f.origin.port&&o.jsx(It,{children:"Required"})]}),o.jsxs(Qg,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"origin-city",children:"City"}),o.jsx(mu,{id:"origin-city",placeholder:"City name",value:t.origin?.city||"",onChange:p=>c("origin","city",p.target.value)}),a&&f.origin.city&&o.jsx(It,{children:"Required"})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"origin-country",children:"Country"}),o.jsx(mu,{id:"origin-country",placeholder:"Country name",value:t.origin?.country||"",onChange:p=>c("origin","country",p.target.value)}),a&&f.origin.country&&o.jsx(It,{children:"Required"})]})]})]})]}),o.jsxs(wP,{children:[o.jsx(bP,{children:o.jsxs(CP,{children:[o.jsx(Cg,{style:{width:"1.25rem",height:"1.25rem"}}),"Destination",o.jsx(Ns,{children:"*"})]})}),o.jsxs(Ts,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"destination-port",children:"Port/Airport"}),o.jsx(pu,{id:"destination-port",placeholder:"Port or airport name",value:t.destination?.port||"",onChange:p=>c("destination","port",p.target.value)}),a&&f.destination.port&&o.jsx(It,{children:"Required"})]}),o.jsxs(Qg,{children:[o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"destination-city",children:"City"}),o.jsx(pu,{id:"destination-city",placeholder:"City name",value:t.destination?.city||"",onChange:p=>c("destination","city",p.target.value)}),a&&f.destination.city&&o.jsx(It,{children:"Required"})]}),o.jsxs(ut,{children:[o.jsx(ft,{htmlFor:"destination-country",children:"Country"}),o.jsx(pu,{id:"destination-country",placeholder:"Country name",value:t.destination?.country||"",onChange:p=>c("destination","country",p.target.value)}),a&&f.destination.country&&o.jsx(It,{children:"Required"})]})]})]})]})]})]})}const RP=m.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus-visible {
    ring: 3px solid rgba(var(--ring-rgb, 107, 114, 128), 0.5);
  }

  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  /* Variant Styles */
  ${t=>{switch(t.$variant){case"default":return`
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          &:hover:not(:disabled) {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;case"destructive":return`
          background-color: var(--destructive, #d4183d);
          color: white;
          
          &:hover:not(:disabled) {
            background-color: rgba(212, 24, 61, 0.9);
          }
        `;case"outline":return`
          border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
          background-color: var(--background, #ffffff);
          color: var(--foreground, #111827);
          
          &:hover:not(:disabled) {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;case"secondary":return`
          background-color: var(--secondary, #f1f5f9);
          color: var(--secondary-foreground, #030213);
          
          &:hover:not(:disabled) {
            background-color: rgba(241, 245, 249, 0.8);
          }
        `;case"ghost":return`
          background-color: transparent;
          color: var(--foreground, #111827);
          
          &:hover:not(:disabled) {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;case"link":return`
          color: var(--primary, #030213);
          text-decoration: underline;
          text-underline-offset: 4px;
          background-color: transparent;
          
          &:hover:not(:disabled) {
            text-decoration: underline;
          }
        `;default:return`
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          &:hover:not(:disabled) {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `}}}

  /* Size Styles */
  ${t=>{switch(t.$size){case"sm":return`
          height: 2rem;
          padding: 0 0.75rem;
          border-radius: 0.375rem;
          gap: 0.375rem;
          
          &:has(svg) {
            padding: 0 0.625rem;
          }
        `;case"lg":return`
          height: 2.5rem;
          padding: 0 1.5rem;
          border-radius: 0.375rem;
          
          &:has(svg) {
            padding: 0 1rem;
          }
        `;case"icon":return`
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
          border-radius: 0.375rem;
        `;default:return`
          height: 2.25rem;
          padding: 0 1rem;
          
          &:has(svg) {
            padding: 0 0.75rem;
          }
        `}}}
`,TP=m(_0)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:focus-visible {
    ring: 3px solid rgba(var(--ring-rgb, 107, 114, 128), 0.5);
  }

  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  /* Variant Styles */
  ${t=>{switch(t.$variant){case"default":return`
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          &:hover:not(:disabled) {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `;case"destructive":return`
          background-color: var(--destructive, #d4183d);
          color: white;
          
          &:hover:not(:disabled) {
            background-color: rgba(212, 24, 61, 0.9);
          }
        `;case"outline":return`
          border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
          background-color: var(--background, #ffffff);
          color: var(--foreground, #111827);
          
          &:hover:not(:disabled) {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;case"secondary":return`
          background-color: var(--secondary, #f1f5f9);
          color: var(--secondary-foreground, #030213);
          
          &:hover:not(:disabled) {
            background-color: rgba(241, 245, 249, 0.8);
          }
        `;case"ghost":return`
          background-color: transparent;
          color: var(--foreground, #111827);
          
          &:hover:not(:disabled) {
            background-color: var(--accent, #e9ebef);
            color: var(--accent-foreground, #030213);
          }
        `;case"link":return`
          color: var(--primary, #030213);
          text-decoration: underline;
          text-underline-offset: 4px;
          background-color: transparent;
          
          &:hover:not(:disabled) {
            text-decoration: underline;
          }
        `;default:return`
          background-color: var(--primary, #030213);
          color: var(--primary-foreground, #ffffff);
          
          &:hover:not(:disabled) {
            background-color: rgba(3, 2, 19, 0.9);
          }
        `}}}

  /* Size Styles */
  ${t=>{switch(t.$size){case"sm":return`
          height: 2rem;
          padding: 0 0.75rem;
          border-radius: 0.375rem;
          gap: 0.375rem;
          
          &:has(svg) {
            padding: 0 0.625rem;
          }
        `;case"lg":return`
          height: 2.5rem;
          padding: 0 1.5rem;
          border-radius: 0.375rem;
          
          &:has(svg) {
            padding: 0 1rem;
          }
        `;case"icon":return`
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
          border-radius: 0.375rem;
        `;default:return`
          height: 2.25rem;
          padding: 0 1rem;
          
          &:has(svg) {
            padding: 0 0.75rem;
          }
        `}}}
`;function je({className:t,variant:n="default",size:a="default",asChild:s=!1,...c}){return s?o.jsx(TP,{"data-slot":"button",$variant:n,$size:a,className:t,...c}):o.jsx(RP,{"data-slot":"button",$variant:n,$size:a,className:t,...c})}const NP=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,IP=m.div`
  text-align: center;
  margin-bottom: clamp(1rem, 4vw, 2rem);
`,AP=m.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(3rem, 8vw, 4rem);
  height: clamp(3rem, 8vw, 4rem);
  background-color: #e0e7ff;
  border-radius: 50%;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
`,_P=m(kn)`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  color: #4338ca;
`,DP=m.h2`
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.25rem, 1vw, 0.5rem) 0;
`,$P=m.p`
  color: var(--muted-foreground);
  margin: 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,zP=m(Ae)`
  border: 1px solid #c7d2fe;
  background-color: var(--card);
`,LP=m(We)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
  padding: clamp(1rem, 3vw, 1.5rem);
`,OP=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,MP=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,FP=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,_s=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.25rem, 1vw, 0.5rem);
`,Ds=m(Oe)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
`,Xg=m.div`
  position: relative;
`,Zg=m(Fe)`
  background-color: var(--card);
  border: 1px solid var(--border);
  padding-left: clamp(2rem, 6vw, 2.5rem);
  
  &:focus {
    border-color: #4338ca;
    box-shadow: 0 0 0 1px #4338ca;
  }
`,ev=m(x0)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--muted-foreground);
  position: absolute;
  left: clamp(0.5rem, 2vw, 0.75rem);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`,$s=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0;
  line-height: 1.3;
`,BP=m(Ae)`
  border: 1px solid #a7f3d0;
  background-color: var(--card);
`,HP=m(We)`
  background-color: #ecfdf5;
  border-bottom: 1px solid #a7f3d0;
  padding: clamp(1rem, 3vw, 1.5rem);
`,WP=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #047857;
`,UP=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,VP=m(Qt)`
  background-color: var(--card);
  border: 1px solid var(--border);
  
  &:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 1px #10b981;
  }
`,GP=m(Ae)`
  border: 1px solid #fde68a;
  background-color: var(--card);
`,JP=m(We)`
  background-color: #fffbeb;
  border-bottom: 1px solid #fde68a;
  padding: clamp(1rem, 3vw, 1.5rem);
`,YP=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,KP=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,qP=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,QP=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(0.75rem, 3vw, 1rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  transition: border-color 0.2s;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  &:hover {
    border-color: #fde68a;
  }
`,XP=m.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  flex: 1;
  min-width: 0;
`,ZP=m.div`
  flex: 1;
  min-width: 0;
`,e7=m.span`
  color: var(--foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  display: block;
`,t7=m(rt)`
  margin-top: 0.25rem;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
  display: inline-block;
`,r7=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,hu=m(je)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  
  &.generate {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1d4ed8;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
  
  &.upload {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
    }
  }
`,n7=m(Ae)`
  border: 1px solid #e9d5ff;
  background-color: var(--card);
`,o7=m(We)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
  padding: clamp(1rem, 3vw, 1.5rem);
`,i7=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #7c3aed;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,a7=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,s7=m(je)`
  background-color: #f3e8ff;
  border: 1px solid #e9d5ff;
  color: #7c3aed;
  
  &:hover {
    background-color: #e9d5ff;
  }
`,l7=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,c7=m.div`
  text-align: center;
  padding: clamp(1rem, 4vw, 2rem) 0;
  color: var(--muted-foreground);
`,d7=m(kn)`
  width: clamp(2rem, 6vw, 3rem);
  height: clamp(2rem, 6vw, 3rem);
  margin: 0 auto clamp(0.5rem, 2vw, 0.75rem) auto;
  color: var(--muted-foreground);
  opacity: 0.5;
`,u7=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  margin: 0;
`,f7=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: clamp(0.125rem, 0.5vw, 0.25rem) 0 0 0;
  opacity: 0.7;
`,m7=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,p7=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(0.75rem, 3vw, 1rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`,h7=m(Fe)`
  flex: 1;
  background-color: var(--card);
  border: 1px solid var(--border);
  
  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 1px #7c3aed;
  }
`,g7=m(je)`
  color: #dc2626;
  background-color: var(--card);
  border: 1px solid #fecaca;
  
  &:hover {
    background-color: #ef4444;
    color: white;
  }
`,v7=m(Ae)`
  border: 1px solid #fda4af;
  background-color: var(--card);
`,x7=m(We)`
  background-color: #fff1f2;
  border-bottom: 1px solid #fda4af;
  padding: clamp(1rem, 3vw, 1.5rem);
`,y7=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #be185d;
`,w7=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,b7=m(Nf)`
  background-color: var(--card);
  border: 1px solid var(--border);
  min-height: clamp(4rem, 12vw, 6rem);
  resize: vertical;
  
  &:focus {
    border-color: #ec4899;
    box-shadow: 0 0 0 1px #ec4899;
  }
`;function C7({data:t,updateData:n}){const[a,s]=y.useState(t.customDocuments||[]),c=[{name:"MBL (Master Bill of Lading)",canGenerate:!1,required:!0},{name:"LCL Manifest",canGenerate:!0,required:!0},{name:"Delivery Order LCL",canGenerate:!0,required:!0},{name:"Customs Entry",canGenerate:!1,required:!0},{name:"Consolidation Invoice",canGenerate:!0,required:!1},{name:"Container Packing List",canGenerate:!0,required:!1}],d=()=>{const g={id:Date.now(),name:"",uploaded:!1},x=[...a,g];s(x),n("customDocuments",x)},f=(g,x,v)=>{const w=a.map(S=>S.id===g?{...S,[x]:v}:S);s(w),n("customDocuments",w)},p=g=>{const x=a.filter(v=>v.id!==g);s(x),n("customDocuments",x)};return o.jsxs(NP,{children:[o.jsxs(IP,{children:[o.jsx(AP,{children:o.jsx(_P,{})}),o.jsx(DP,{children:"Dates & Documents"}),o.jsx($P,{children:"Set shipping dates and manage consolidation documentation"})]}),o.jsxs(zP,{children:[o.jsx(LP,{children:o.jsxs(OP,{children:[o.jsx(x0,{style:{width:"1.25rem",height:"1.25rem"}}),"Shipping Dates"]})}),o.jsx(MP,{children:o.jsxs(FP,{children:[o.jsxs(_s,{children:[o.jsx(Ds,{htmlFor:"etd",children:"Estimated Departure (ETD)"}),o.jsxs(Xg,{children:[o.jsx(Zg,{id:"etd",type:"date",value:t.etd||"",onChange:g=>n("etd",g.target.value)}),o.jsx(ev,{})]}),o.jsx($s,{children:"When the consolidation leaves origin"})]}),o.jsxs(_s,{children:[o.jsx(Ds,{htmlFor:"eta",children:"Estimated Arrival (ETA)"}),o.jsxs(Xg,{children:[o.jsx(Zg,{id:"eta",type:"date",value:t.eta||"",onChange:g=>n("eta",g.target.value)}),o.jsx(ev,{})]}),o.jsx($s,{children:"When the consolidation arrives at destination"})]})]})})]}),o.jsxs(BP,{children:[o.jsx(HP,{children:o.jsx(WP,{children:"Trade Terms"})}),o.jsx(UP,{children:o.jsxs(_s,{children:[o.jsx(Ds,{htmlFor:"incoterms",children:"Incoterms"}),o.jsxs(Mt,{onValueChange:g=>n("incoterms",g),children:[o.jsx(VP,{id:"incoterms",children:o.jsx(Ft,{placeholder:"Select Incoterms..."})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"fob",children:"FOB - Free on Board"}),o.jsx(ue,{value:"cif",children:"CIF - Cost, Insurance & Freight"}),o.jsx(ue,{value:"cfr",children:"CFR - Cost & Freight"}),o.jsx(ue,{value:"exw",children:"EXW - Ex Works"}),o.jsx(ue,{value:"fca",children:"FCA - Free Carrier"}),o.jsx(ue,{value:"cpt",children:"CPT - Carriage Paid To"}),o.jsx(ue,{value:"cip",children:"CIP - Carriage & Insurance Paid"}),o.jsx(ue,{value:"dap",children:"DAP - Delivered at Place"}),o.jsx(ue,{value:"dpu",children:"DPU - Delivered at Place Unloaded"}),o.jsx(ue,{value:"ddp",children:"DDP - Delivered Duty Paid"})]})]}),o.jsx($s,{children:"Terms of trade for the consolidation"})]})})]}),o.jsxs(GP,{children:[o.jsx(JP,{children:o.jsxs(YP,{children:[o.jsx(kn,{style:{width:"1.25rem",height:"1.25rem"}}),"Required Documents for Consolidation"]})}),o.jsx(KP,{children:o.jsx(qP,{children:c.map((g,x)=>o.jsxs(QP,{children:[o.jsxs(XP,{children:[o.jsx(kn,{style:{width:"1rem",height:"1rem",color:"var(--muted-foreground)"}}),o.jsxs(ZP,{children:[o.jsx(e7,{children:g.name}),g.required&&o.jsx(t7,{children:"Required"})]})]}),o.jsxs(r7,{children:[g.canGenerate&&o.jsxs(hu,{className:"generate",variant:"outline",size:"sm",children:[o.jsx(Jn,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Generate"]}),o.jsxs(hu,{className:"upload",variant:"outline",size:"sm",children:[o.jsx(Yn,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Upload"]})]})]},x))})})]}),o.jsxs(n7,{children:[o.jsx(o7,{children:o.jsxs(i7,{children:[o.jsxs(a7,{children:[o.jsx(Jr,{style:{width:"1.25rem",height:"1.25rem"}}),"Custom Documents"]}),o.jsxs(s7,{variant:"outline",size:"sm",onClick:d,children:[o.jsx(Jr,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Add Document"]})]})}),o.jsx(l7,{children:a.length===0?o.jsxs(c7,{children:[o.jsx(d7,{}),o.jsx(u7,{children:"No custom documents added yet"}),o.jsx(f7,{children:'Click "Add Document" to include additional documentation'})]}):o.jsx(m7,{children:a.map(g=>o.jsxs(p7,{children:[o.jsx(h7,{placeholder:"Document name",value:g.name,onChange:x=>f(g.id,"name",x.target.value)}),o.jsxs(hu,{className:"upload",variant:"outline",size:"sm",children:[o.jsx(Yn,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Upload"]}),o.jsx(g7,{variant:"destructive",size:"sm",onClick:()=>p(g.id),children:"Remove"})]},g.id))})})]}),o.jsxs(v7,{children:[o.jsx(x7,{children:o.jsx(y7,{children:"Special Instructions & Notes"})}),o.jsx(w7,{children:o.jsxs(_s,{children:[o.jsx(Ds,{htmlFor:"instructions",children:"Additional Instructions"}),o.jsx(b7,{id:"instructions",placeholder:"Add any special handling instructions, consolidation requirements, or additional notes for this shipment...",value:t.instructions||"",onChange:g=>n("instructions",g.target.value)}),o.jsx($s,{children:"Special requirements or notes for freight handling and documentation"})]})})]})]})}function k7(t,n){return y.useReducer((a,s)=>n[a][s]??a,t)}var la=t=>{const{present:n,children:a}=t,s=S7(n),c=typeof a=="function"?a({present:s.isPresent}):y.Children.only(a),d=Ye(s.ref,j7(c));return typeof a=="function"||s.isPresent?y.cloneElement(c,{ref:d}):null};la.displayName="Presence";function S7(t){const[n,a]=y.useState(),s=y.useRef(null),c=y.useRef(t),d=y.useRef("none"),f=t?"mounted":"unmounted",[p,g]=k7(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const x=zs(s.current);d.current=p==="mounted"?x:"none"},[p]),xt(()=>{const x=s.current,v=c.current;if(v!==t){const S=d.current,j=zs(x);t?g("MOUNT"):j==="none"||x?.display==="none"?g("UNMOUNT"):g(v&&S!==j?"ANIMATION_OUT":"UNMOUNT"),c.current=t}},[t,g]),xt(()=>{if(n){let x;const v=n.ownerDocument.defaultView??window,w=j=>{const k=zs(s.current).includes(CSS.escape(j.animationName));if(j.target===n&&k&&(g("ANIMATION_END"),!c.current)){const P=n.style.animationFillMode;n.style.animationFillMode="forwards",x=v.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=P)})}},S=j=>{j.target===n&&(d.current=zs(s.current))};return n.addEventListener("animationstart",S),n.addEventListener("animationcancel",w),n.addEventListener("animationend",w),()=>{v.clearTimeout(x),n.removeEventListener("animationstart",S),n.removeEventListener("animationcancel",w),n.removeEventListener("animationend",w)}}else g("ANIMATION_END")},[n,g]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:y.useCallback(x=>{s.current=x?getComputedStyle(x):null,a(x)},[])}}function zs(t){return t?.animationName||"none"}function j7(t){let n=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,a=n&&"isReactWarning"in n&&n.isReactWarning;return a?t.ref:(n=Object.getOwnPropertyDescriptor(t,"ref")?.get,a=n&&"isReactWarning"in n&&n.isReactWarning,a?t.props.ref:t.props.ref||t.ref)}var Ql="Collapsible",[E7,ry]=to(Ql),[P7,Uf]=E7(Ql),ny=y.forwardRef((t,n)=>{const{__scopeCollapsible:a,open:s,defaultOpen:c,disabled:d,onOpenChange:f,...p}=t,[g,x]=Qn({prop:s,defaultProp:c??!1,onChange:f,caller:Ql});return o.jsx(P7,{scope:a,disabled:d,contentId:bn(),open:g,onOpenToggle:y.useCallback(()=>x(v=>!v),[x]),children:o.jsx(Ie.div,{"data-state":Gf(g),"data-disabled":d?"":void 0,...p,ref:n})})});ny.displayName=Ql;var oy="CollapsibleTrigger",iy=y.forwardRef((t,n)=>{const{__scopeCollapsible:a,...s}=t,c=Uf(oy,a);return o.jsx(Ie.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":Gf(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...s,ref:n,onClick:Be(t.onClick,c.onOpenToggle)})});iy.displayName=oy;var Vf="CollapsibleContent",ay=y.forwardRef((t,n)=>{const{forceMount:a,...s}=t,c=Uf(Vf,t.__scopeCollapsible);return o.jsx(la,{present:a||c.open,children:({present:d})=>o.jsx(R7,{...s,ref:n,present:d})})});ay.displayName=Vf;var R7=y.forwardRef((t,n)=>{const{__scopeCollapsible:a,present:s,children:c,...d}=t,f=Uf(Vf,a),[p,g]=y.useState(s),x=y.useRef(null),v=Ye(n,x),w=y.useRef(0),S=w.current,j=y.useRef(0),T=j.current,k=f.open||p,P=y.useRef(k),I=y.useRef(void 0);return y.useEffect(()=>{const C=requestAnimationFrame(()=>P.current=!1);return()=>cancelAnimationFrame(C)},[]),xt(()=>{const C=x.current;if(C){I.current=I.current||{transitionDuration:C.style.transitionDuration,animationName:C.style.animationName},C.style.transitionDuration="0s",C.style.animationName="none";const N=C.getBoundingClientRect();w.current=N.height,j.current=N.width,P.current||(C.style.transitionDuration=I.current.transitionDuration,C.style.animationName=I.current.animationName),g(s)}},[f.open,s]),o.jsx(Ie.div,{"data-state":Gf(f.open),"data-disabled":f.disabled?"":void 0,id:f.contentId,hidden:!k,...d,ref:v,style:{"--radix-collapsible-content-height":S?`${S}px`:void 0,"--radix-collapsible-content-width":T?`${T}px`:void 0,...t.style},children:k&&c})});function Gf(t){return t?"open":"closed"}var T7=ny,N7=iy,I7=ay,br="Accordion",A7=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Jf,_7,D7]=$0(br),[Xl,a8]=to(br,[D7,ry]),Yf=ry(),sy=$e.forwardRef((t,n)=>{const{type:a,...s}=t,c=s,d=s;return o.jsx(Jf.Provider,{scope:t.__scopeAccordion,children:a==="multiple"?o.jsx(O7,{...d,ref:n}):o.jsx(L7,{...c,ref:n})})});sy.displayName=br;var[ly,$7]=Xl(br),[cy,z7]=Xl(br,{collapsible:!1}),L7=$e.forwardRef((t,n)=>{const{value:a,defaultValue:s,onValueChange:c=()=>{},collapsible:d=!1,...f}=t,[p,g]=Qn({prop:a,defaultProp:s??"",onChange:c,caller:br});return o.jsx(ly,{scope:t.__scopeAccordion,value:$e.useMemo(()=>p?[p]:[],[p]),onItemOpen:g,onItemClose:$e.useCallback(()=>d&&g(""),[d,g]),children:o.jsx(cy,{scope:t.__scopeAccordion,collapsible:d,children:o.jsx(dy,{...f,ref:n})})})}),O7=$e.forwardRef((t,n)=>{const{value:a,defaultValue:s,onValueChange:c=()=>{},...d}=t,[f,p]=Qn({prop:a,defaultProp:s??[],onChange:c,caller:br}),g=$e.useCallback(v=>p((w=[])=>[...w,v]),[p]),x=$e.useCallback(v=>p((w=[])=>w.filter(S=>S!==v)),[p]);return o.jsx(ly,{scope:t.__scopeAccordion,value:f,onItemOpen:g,onItemClose:x,children:o.jsx(cy,{scope:t.__scopeAccordion,collapsible:!0,children:o.jsx(dy,{...d,ref:n})})})}),[M7,Zl]=Xl(br),dy=$e.forwardRef((t,n)=>{const{__scopeAccordion:a,disabled:s,dir:c,orientation:d="vertical",...f}=t,p=$e.useRef(null),g=Ye(p,n),x=_7(a),w=z0(c)==="ltr",S=Be(t.onKeyDown,j=>{if(!A7.includes(j.key))return;const T=j.target,k=x().filter(F=>!F.ref.current?.disabled),P=k.findIndex(F=>F.ref.current===T),I=k.length;if(P===-1)return;j.preventDefault();let C=P;const N=0,D=I-1,H=()=>{C=P+1,C>D&&(C=N)},W=()=>{C=P-1,C<N&&(C=D)};switch(j.key){case"Home":C=N;break;case"End":C=D;break;case"ArrowRight":d==="horizontal"&&(w?H():W());break;case"ArrowDown":d==="vertical"&&H();break;case"ArrowLeft":d==="horizontal"&&(w?W():H());break;case"ArrowUp":d==="vertical"&&W();break}const O=C%I;k[O].ref.current?.focus()});return o.jsx(M7,{scope:a,disabled:s,direction:c,orientation:d,children:o.jsx(Jf.Slot,{scope:a,children:o.jsx(Ie.div,{...f,"data-orientation":d,ref:g,onKeyDown:s?void 0:S})})})}),Tl="AccordionItem",[F7,Kf]=Xl(Tl),uy=$e.forwardRef((t,n)=>{const{__scopeAccordion:a,value:s,...c}=t,d=Zl(Tl,a),f=$7(Tl,a),p=Yf(a),g=bn(),x=s&&f.value.includes(s)||!1,v=d.disabled||t.disabled;return o.jsx(F7,{scope:a,open:x,disabled:v,triggerId:g,children:o.jsx(T7,{"data-orientation":d.orientation,"data-state":vy(x),...p,...c,ref:n,disabled:v,open:x,onOpenChange:w=>{w?f.onItemOpen(s):f.onItemClose(s)}})})});uy.displayName=Tl;var fy="AccordionHeader",my=$e.forwardRef((t,n)=>{const{__scopeAccordion:a,...s}=t,c=Zl(br,a),d=Kf(fy,a);return o.jsx(Ie.h3,{"data-orientation":c.orientation,"data-state":vy(d.open),"data-disabled":d.disabled?"":void 0,...s,ref:n})});my.displayName=fy;var of="AccordionTrigger",py=$e.forwardRef((t,n)=>{const{__scopeAccordion:a,...s}=t,c=Zl(br,a),d=Kf(of,a),f=z7(of,a),p=Yf(a);return o.jsx(Jf.ItemSlot,{scope:a,children:o.jsx(N7,{"aria-disabled":d.open&&!f.collapsible||void 0,"data-orientation":c.orientation,id:d.triggerId,...p,...s,ref:n})})});py.displayName=of;var hy="AccordionContent",gy=$e.forwardRef((t,n)=>{const{__scopeAccordion:a,...s}=t,c=Zl(br,a),d=Kf(hy,a),f=Yf(a);return o.jsx(I7,{role:"region","aria-labelledby":d.triggerId,"data-orientation":c.orientation,...f,...s,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});gy.displayName=hy;function vy(t){return t?"open":"closed"}var B7=sy,H7=uy,W7=my,U7=py,V7=gy;const G7=m(H7)`
  border-bottom: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  
  &:last-child {
    border-bottom: 0;
  }
`,J7=m(W7)`
  display: flex;
`,Y7=m(U7)`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 0.375rem;
  padding: 1rem 0;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  outline: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:focus-visible {
    border-color: var(--ring, #6b7280);
    box-shadow: 0 0 0 3px rgba(107, 114, 128, 0.5);
  }
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  
  &[data-state="open"] svg {
    transform: rotate(180deg);
  }
`,K7=m(Fl)`
  color: var(--muted-foreground, #717182);
  pointer-events: none;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  transform: translateY(2px);
  transition: transform 200ms;
`,q7=m(V7)`
  overflow: hidden;
  font-size: 0.875rem;
  
  &[data-state="closed"] {
    animation: accordion-up 0.2s ease-out;
  }
  
  &[data-state="open"] {
    animation: accordion-down 0.2s ease-out;
  }
  
  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
  
  @keyframes accordion-up {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }
`,Q7=m.div`
  padding-top: 0;
  padding-bottom: 1rem;
`;function X7({...t}){return o.jsx(B7,{"data-slot":"accordion",...t})}function Z7({className:t,...n}){return o.jsx(G7,{"data-slot":"accordion-item",className:t,...n})}function eR({className:t,children:n,...a}){return o.jsx(J7,{children:o.jsxs(Y7,{"data-slot":"accordion-trigger",className:t,...a,children:[n,o.jsx(K7,{})]})})}function tR({className:t,children:n,...a}){return o.jsx(q7,{"data-slot":"accordion-content",...a,children:o.jsx(Q7,{className:t,children:n})})}const rR=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,nR=m.div`
  text-align: center;
  margin-bottom: clamp(1rem, 4vw, 2rem);
`,oR=m.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(3rem, 8vw, 4rem);
  height: clamp(3rem, 8vw, 4rem);
  background-color: #dcfce7;
  border-radius: 50%;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
`,iR=m(Gu)`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  color: #16a34a;
`,aR=m.h2`
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.25rem, 1vw, 0.5rem) 0;
`,sR=m.p`
  color: var(--muted-foreground);
  margin: 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,lR=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ls=m(Ae)`
  background-color: var(--card);
  border: 1px solid var(--border);
  
  ${t=>{switch(t.$variant){case"blue":return`
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border: 1px solid #bfdbfe;
        `;case"green":return`
          background: linear-gradient(135deg, #ecfdf5 0%, #dcfce7 100%);
          border: 1px solid #bbf7d0;
        `;case"purple":return`
          background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
          border: 1px solid #e9d5ff;
        `;case"orange":return`
          background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
          border: 1px solid #fdba74;
        `;default:return""}}}
`,Os=m(ze)`
  padding: clamp(0.75rem, 3vw, 1rem);
  text-align: center;
`,Ms=m.div`
  font-size: clamp(1rem, 3vw, 1.25rem);
  
  ${t=>{switch(t.$variant){case"blue":return"color: #1d4ed8;";case"green":return"color: #15803d;";case"purple":return"color: #7c3aed;";case"orange":return"color: #c2410c;";default:return"color: var(--foreground);"}}}
`,Fs=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  margin-top: 0.25rem;
  
  ${t=>{switch(t.$variant){case"blue":return"color: #2563eb;";case"green":return"color: #16a34a;";case"purple":return"color: #9333ea;";case"orange":return"color: #ea580c;";default:return"color: var(--muted-foreground);"}}}
`,cR=m(Ae)`
  border: 1px solid #bfdbfe;
  background-color: var(--card);
`,dR=m(We)`
  background-color: #eff6ff;
  border-bottom: 1px solid #bfdbfe;
  padding: clamp(1rem, 3vw, 1.5rem);
`,uR=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #1d4ed8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,fR=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,mR=m(X7)`
  width: 100%;
`,gu=m(Z7)`
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  background-color: var(--card);
`,vu=m(eR)`
  padding: clamp(0.75rem, 3vw, 1rem);
  
  ${t=>{switch(t.$variant){case"blue":return"color: #1d4ed8;";case"green":return"color: #15803d;";case"indigo":return"color: #4338ca;";default:return"color: var(--foreground);"}}}
  
  &:hover {
    text-decoration: none;
  }
`,xu=m.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,yu=m(rt)`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  
  ${t=>{switch(t.$variant){case"blue":return`
          background-color: #dbeafe;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        `;case"green":return`
          background-color: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
        `;case"indigo":return`
          background-color: #e0e7ff;
          color: #4338ca;
          border: 1px solid #c7d2fe;
        `;default:return`
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 1px solid var(--border);
        `}}}
`,wu=m.span`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,bu=m(tR)`
  padding: 0 clamp(0.75rem, 3vw, 1rem) clamp(0.75rem, 3vw, 1rem) clamp(0.75rem, 3vw, 1rem);
`,Cu=m.div`
  background-color: var(--muted);
  padding: clamp(0.75rem, 3vw, 1rem);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`,tv=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,pR=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Kt=m.div`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  line-height: 1.4;
`,sr=m.strong`
  color: var(--foreground);
`,hR=m.span`
  color: var(--muted-foreground);
  font-style: italic;
`,gR=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,vR=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
`,xR=m.span`
  color: var(--foreground);
  text-transform: capitalize;
`,yR=m.span`
  color: var(--muted-foreground);
`,wR=m.div`
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: #fff7ed;
  border: 1px solid #fed7aa;
  border-radius: 0.5rem;
`,rv=m.strong`
  color: #c2410c;
`,nv=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Vi=m.div`
  padding: clamp(0.5rem, 2vw, 0.75rem);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background-color: var(--card);
  
  ${t=>{switch(t.$variant){case"green":return"border: 1px solid #bbf7d0;";case"purple":return"border: 1px solid #e9d5ff;";case"blue":return"border: 1px solid #bfdbfe;";case"orange":return"border: 1px solid #fed7aa;";case"teal":return"border: 1px solid #99f6e4;";default:return""}}}
`,Gi=m.h4`
  margin: 0 0 clamp(0.25rem, 1vw, 0.5rem) 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  ${t=>{switch(t.$variant){case"green":return"color: #15803d;";case"purple":return"color: #7c3aed;";case"blue":return"color: #1d4ed8;";case"orange":return"color: #c2410c;";case"teal":return"color: #0f766e;";default:return"color: var(--foreground);"}}}
`,bR=m.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,CR=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  background-color: var(--card);
  padding: clamp(0.25rem, 1vw, 0.5rem);
  border-radius: 0.25rem;
  border: 1px solid var(--border);
`,kR=m(Ae)`
  border: 1px solid #fde68a;
  background-color: var(--card);
`,SR=m(We)`
  background-color: #fffbeb;
  border-bottom: 1px solid #fde68a;
  padding: clamp(1rem, 3vw, 1.5rem);
`,jR=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ER=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,PR=m.div`
  border: 2px dashed #fde68a;
  border-radius: 0.5rem;
  padding: clamp(1.5rem, 4vw, 2rem);
  text-align: center;
  background: linear-gradient(to bottom, #fffbeb, var(--card));
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: linear-gradient(to bottom, #fef3c7, var(--card));
  }
`,RR=m(Yn)`
  width: clamp(2rem, 6vw, 3rem);
  height: clamp(2rem, 6vw, 3rem);
  color: #f59e0b;
  margin: 0 auto clamp(0.75rem, 2vw, 1rem) auto;
`,TR=m.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #d97706;
  margin: 0 0 clamp(0.25rem, 1vw, 0.5rem) 0;
`,NR=m.p`
  color: #d97706;
  margin: 0 0 clamp(0.25rem, 1vw, 0.5rem) 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,IR=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0;
`,AR=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: clamp(1rem, 3vw, 1.5rem);
  border-top: 1px solid var(--border);
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,_R=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
`,DR=m(je)`
  background: linear-gradient(to right, #2563eb, #1d4ed8);
  color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  &:hover {
    background: linear-gradient(to right, #1d4ed8, #1e40af);
  }
`;function $R({data:t,onSubmit:n,onBack:a}){const s=d=>!d||typeof d=="object"&&Object.keys(d).length===0?o.jsx(hR,{children:"Not specified"}):typeof d=="object"?o.jsx(gR,{children:Object.entries(d).map(([f,p])=>o.jsxs(vR,{children:[o.jsxs(xR,{children:[f,": "]}),o.jsx(yR,{children:p||"Not specified"})]},f))}):o.jsx("span",{children:d}),c=[{name:"Booking & Preparation",status:"pending"},{name:"Origin Handling",status:"pending"},{name:"Departure & Transit",status:"pending"},{name:"Arrival Notification",status:"pending"},{name:"Destination Clearance",status:"pending"},{name:"Destination Handling",status:"pending"},{name:"Completion & Settlement",status:"pending"}];return o.jsxs(rR,{children:[o.jsxs(nR,{children:[o.jsx(oR,{children:o.jsx(iR,{})}),o.jsx(aR,{children:"Review & Submit"}),o.jsx(sR,{children:"Review all consolidation details before creating the shipment"})]}),o.jsxs(lR,{children:[o.jsx(Ls,{$variant:"blue",children:o.jsxs(Os,{children:[o.jsx(Ms,{$variant:"blue",children:t.template||"Consolidation"}),o.jsx(Fs,{$variant:"blue",children:"Template"})]})}),o.jsx(Ls,{$variant:"green",children:o.jsxs(Os,{children:[o.jsx(Ms,{$variant:"green",children:t.consolidationId||"N/A"}),o.jsx(Fs,{$variant:"green",children:"Consolidation ID"})]})}),o.jsx(Ls,{$variant:"purple",children:o.jsxs(Os,{children:[o.jsxs(Ms,{$variant:"purple",children:[t.totalWeight||"0"," kg"]}),o.jsx(Fs,{$variant:"purple",children:"Total Weight"})]})}),o.jsx(Ls,{$variant:"orange",children:o.jsxs(Os,{children:[o.jsxs(Ms,{$variant:"orange",children:[t.totalVolume||"0"," m³"]}),o.jsx(Fs,{$variant:"orange",children:"Total Volume"})]})})]}),o.jsx(Rf,{currentStage:1,stages:c}),o.jsxs(cR,{children:[o.jsx(dR,{children:o.jsxs(uR,{children:[o.jsx(kn,{style:{width:"1.25rem",height:"1.25rem"}}),"Consolidation Details Review"]})}),o.jsx(fR,{children:o.jsxs(mR,{type:"multiple",children:[o.jsxs(gu,{value:"basics",children:[o.jsx(vu,{$variant:"blue",children:o.jsxs(xu,{children:[o.jsx(yu,{$variant:"blue",variant:"outline",children:"Step 1"}),o.jsx(wu,{children:"Consolidation Basics"})]})}),o.jsx(bu,{children:o.jsxs(Cu,{children:[o.jsxs(tv,{children:[o.jsxs(Kt,{children:[o.jsx(sr,{children:"Template:"})," ",s(t.template)]}),o.jsxs(Kt,{children:[o.jsx(sr,{children:"Consolidation ID:"})," ",s(t.consolidationId)]})]}),o.jsxs(pR,{children:[o.jsxs(Kt,{children:[o.jsx(sr,{children:"Quantity:"})," ",s(t.totalQuantity)]}),o.jsxs(Kt,{children:[o.jsx(sr,{children:"Weight:"})," ",s(t.totalWeight)," kg"]}),o.jsxs(Kt,{children:[o.jsx(sr,{children:"Volume:"})," ",s(t.totalVolume)," m³"]}),o.jsxs(Kt,{children:[o.jsx(sr,{children:"Container:"})," ",s(t.containerSize)]})]}),t.hazardous&&o.jsxs(wR,{children:[o.jsxs(Kt,{children:[o.jsx(rv,{children:"Hazardous Goods:"})," Yes"]}),o.jsxs(Kt,{children:[o.jsx(rv,{children:"Details:"})," ",s(t.hazardousDetails)]})]})]})})]}),o.jsxs(gu,{value:"parties",children:[o.jsx(vu,{$variant:"green",children:o.jsxs(xu,{children:[o.jsx(yu,{$variant:"green",variant:"outline",children:"Step 2"}),o.jsx(wu,{children:"Parties & Locations"})]})}),o.jsx(bu,{children:o.jsxs(Cu,{children:[o.jsxs(nv,{children:[o.jsxs(Vi,{$variant:"green",children:[o.jsx(Gi,{$variant:"green",children:"Shipper"}),s(t.shipper)]}),o.jsxs(Vi,{$variant:"purple",children:[o.jsx(Gi,{$variant:"purple",children:"Consignee"}),s(t.consignee)]})]}),t.notifyParty&&Object.keys(t.notifyParty).length>0&&o.jsxs(Vi,{$variant:"blue",children:[o.jsx(Gi,{$variant:"blue",children:"Notify Party"}),s(t.notifyParty)]}),o.jsxs(nv,{children:[o.jsxs(Vi,{$variant:"orange",children:[o.jsx(Gi,{$variant:"orange",children:"Origin"}),s(t.origin)]}),o.jsxs(Vi,{$variant:"teal",children:[o.jsx(Gi,{$variant:"teal",children:"Destination"}),s(t.destination)]})]})]})})]}),o.jsxs(gu,{value:"documents",children:[o.jsx(vu,{$variant:"indigo",children:o.jsxs(xu,{children:[o.jsx(yu,{$variant:"indigo",variant:"outline",children:"Step 3"}),o.jsx(wu,{children:"Dates & Documents"})]})}),o.jsx(bu,{children:o.jsxs(Cu,{children:[o.jsxs(tv,{children:[o.jsxs(Kt,{children:[o.jsx(sr,{children:"ETD:"})," ",s(t.etd)]}),o.jsxs(Kt,{children:[o.jsx(sr,{children:"ETA:"})," ",s(t.eta)]})]}),o.jsxs(Kt,{children:[o.jsx(sr,{children:"Incoterms:"})," ",s(t.incoterms)]}),t.customDocuments&&t.customDocuments.length>0&&o.jsxs("div",{children:[o.jsx(sr,{children:"Custom Documents:"}),o.jsx(bR,{children:t.customDocuments.map((d,f)=>o.jsx(CR,{children:d.name||"Unnamed document"},f))})]}),o.jsxs(Kt,{children:[o.jsx(sr,{children:"Special Instructions:"})," ",s(t.instructions)]})]})})]})]})})]}),o.jsxs(kR,{children:[o.jsx(SR,{children:o.jsxs(jR,{children:[o.jsx(Yn,{style:{width:"1.25rem",height:"1.25rem"}}),"Final Document Upload"]})}),o.jsx(ER,{children:o.jsxs(PR,{children:[o.jsx(RR,{}),o.jsx(TR,{children:"Upload Any Additional Documents"}),o.jsx(NR,{children:"Drag and drop files here or click to browse"}),o.jsx(IR,{children:"Any last-minute attachments before consolidation creation"})]})})]}),o.jsxs(AR,{children:[o.jsxs(_R,{variant:"outline",onClick:a,children:[o.jsx(jf,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Back to Documents"]}),o.jsxs(DR,{onClick:n,size:"lg",children:[o.jsx(kl,{style:{width:"1.25rem",height:"1.25rem",marginRight:"0.5rem"}}),"Create Consolidation"]})]})]})}const zR=m.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
`,LR=m.div`
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
  margin-left: clamp(1rem, 3vw, 0);
  
  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 4rem; /* Account for mobile menu button */
  }
`,OR=m.div`
  max-width: 64rem;
  margin: 0 auto;
`,MR=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`,FR=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`,BR=m(je)`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem);
  
  &:hover {
    color: var(--foreground);
    background-color: var(--muted);
  }
`,HR=m.div`
  height: 1.5rem;
  width: 1px;
  background-color: var(--border);
  display: none;
  
  @media (min-width: 640px) {
    display: block;
  }
`,WR=m.div`
  min-width: 0;
`,UR=m.h1`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  color: var(--foreground);
  margin: 0;
`,VR=m.p`
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,GR=m.div`
  flex: 1;
  padding: clamp(0.75rem, 3vw, 1.5rem);
  overflow: auto;
`,JR=m.div`
  max-width: 64rem;
  margin: 0 auto;
`,YR=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,KR=m.div`
  min-height: clamp(20rem, 60vh, 37.5rem);
`,qR=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`,ov=m.div`
  display: flex;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    &:first-child {
      justify-content: flex-start;
    }
    
    &:last-child {
      justify-content: flex-end;
    }
  }
`,QR=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  flex: 1;
  
  @media (min-width: 640px) {
    flex: none;
    min-width: 8rem;
  }
  
  &:hover:not(:disabled) {
    background-color: var(--muted);
  }
  
  &:disabled {
    opacity: 0.5;
  }
`,XR=m.div`
  text-align: center;
  order: -1;
  
  @media (min-width: 640px) {
    order: 0;
  }
`,ZR=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0;
`,xy=m(je)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  flex: 1;
  
  @media (min-width: 640px) {
    flex: none;
    min-width: 8rem;
  }
  
  &:hover {
    background-color: var(--primary);
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
  }
`,e4=m(xy)`
  position: relative;
  
  &:disabled {
    cursor: not-allowed;
  }
`,t4=m(E0)`
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,ku=m.span`
  display: inline-flex;
  align-items: center;
`;function r4({isLoading:t=!1}){const n=Qr(),{createConsolidation:a}=Tf(),[s,c]=y.useState(1),[d,f]=y.useState({template:"Import LCL",individualJobs:[]}),[p,g]=y.useState({1:!0,2:!0,3:!0,4:!0}),x=["Basics","Parties & Locations","Dates & Documents","Review & Submit"],v=4,w=(C,N)=>{f(D=>({...D,[C]:N}))},S=(C,N)=>{g(D=>({...D,[C]:N}))},j=()=>{s<v&&p[s]&&c(s+1)},T=()=>{s>1&&!t&&c(s-1)},k=async()=>{try{const C=a(d);n(`/consolidation/${C.id}`)}catch(C){console.error("Error creating consolidation:",C)}},P=()=>{const C={data:d,updateData:w,updateValidation:S};switch(s){case 1:return o.jsx(Kg,{...C});case 2:return o.jsx(PP,{...C});case 3:return o.jsx(C7,{...C});case 4:return o.jsx($R,{data:d,onSubmit:k,onBack:T,isLoading:t});default:return o.jsx(Kg,{...C})}},I=p[s];return o.jsxs(zR,{children:[o.jsx(LR,{children:o.jsx(OR,{children:o.jsx(MR,{children:o.jsxs(FR,{children:[o.jsxs(BR,{variant:"ghost",size:"sm",onClick:()=>window.location.href="/jobs",disabled:t,children:[o.jsx(ku,{children:o.jsx(Cf,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}})}),"Back to Jobs"]}),o.jsx(HR,{}),o.jsxs(WR,{children:[o.jsx(UR,{children:"Create New Consolidation"}),o.jsx(VR,{children:"Set up a new freight consolidation with multiple individual jobs"})]})]})})})}),o.jsx(vk,{currentStep:s,totalSteps:v,stepLabels:x,variant:"creation"}),o.jsx(GR,{children:o.jsx(JR,{children:o.jsxs(YR,{children:[o.jsx(KR,{children:P()}),s<4&&o.jsxs(qR,{children:[o.jsx(ov,{children:o.jsxs(QR,{variant:"outline",onClick:T,disabled:s===1||t,children:[o.jsx(ku,{children:o.jsx(jf,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}})}),"Previous"]})}),o.jsx(XR,{children:o.jsxs(ZR,{children:["Step ",s," of ",v," - ",x[s-1]]})}),o.jsx(ov,{children:t?o.jsxs(e4,{disabled:!0,children:[o.jsx(t4,{style:{width:"1rem",height:"1rem"}}),"Processing..."]}):o.jsxs(xy,{onClick:j,disabled:!I,children:["Next",o.jsx(ku,{children:o.jsx(y0,{style:{width:"1rem",height:"1rem",marginLeft:"0.5rem"}})})]})})]})]})})})]})}const Nl=[{id:1,name:"Booking & Preparation",description:"Initial booking and documentation preparation",tasks:["Receive booking request","Verify cargo details","Prepare initial documentation","Confirm shipping schedule"]},{id:2,name:"Documentation & Compliance",description:"Complete documentation and regulatory compliance",tasks:["Prepare commercial invoice","Generate packing list","Obtain required certificates","Submit regulatory filings"]},{id:3,name:"Collection & Pickup",description:"Cargo collection and warehouse receipt",tasks:["Schedule pickup","Collect cargo from shipper","Inspect cargo condition","Generate warehouse receipt"]},{id:4,name:"Export Clearance",description:"Export customs clearance and departure",tasks:["Submit export declaration","Obtain export clearance","Load cargo for transport","Confirm departure"]},{id:5,name:"Transit & Tracking",description:"In-transit monitoring and updates",tasks:["Monitor shipment progress","Provide tracking updates","Handle transit issues","Confirm arrival at destination"]},{id:6,name:"Import Clearance",description:"Import customs clearance and release",tasks:["Submit import declaration","Pay duties and taxes","Obtain import clearance","Release cargo for delivery"]},{id:7,name:"Completion & Settlement",description:"Final delivery and settlement",tasks:["Deliver to consignee","Obtain delivery confirmation","Generate final invoice","Complete Job"]}],n4=m.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--card);
  border-bottom: 2px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,o4=m.div`
  padding: clamp(0.75rem, 2vw, 1rem);
  border-bottom: 1px solid var(--border);
  background-color: var(--card);
`,i4=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,a4=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(0.5rem, 1.5vw, 0.75rem);
`,s4=m.h2`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: var(--foreground);
  margin: 0;
`,l4=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,c4=m(rt)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
`,d4=m(rt)`
  background-color: var(--muted);
  color: var(--muted-foreground);
  border: 1px solid var(--border);
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
`,u4=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,f4=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
`,m4=m.div`
  padding: clamp(0.75rem, 2vw, 1rem);
  background-color: var(--background);
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: ${t=>t.$collapsed?"0":"500px"};
  opacity: ${t=>t.$collapsed?"0":"1"};
  overflow: hidden;
`,p4=m.div`
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
`,h4=m.h3`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.5rem, 1.5vw, 0.75rem) 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,g4=m.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,v4=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  min-width: 0;
  
  @media (max-width: 767px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,x4=m.div`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  
  ${t=>{switch(t.$status){case"completed":return`
          background-color: #22c55e;
          color: white;
        `;case"current":return`
          background-color: #3b82f6;
          color: white;
        `;case"pending":return`
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 2px solid var(--border);
        `;default:return`
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 2px solid var(--border);
        `}}}
`,y4=m.div`
  text-align: center;
  margin-top: 0.5rem;
  flex: 1;
  
  @media (max-width: 767px) {
    text-align: left;
    margin-top: 0;
    margin-left: 1rem;
  }
`,w4=m.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: ${t=>t.$status==="current"?"var(--foreground)":"var(--muted-foreground)"};
  line-height: 1.2;
`,b4=m.div`
  position: absolute;
  background-color: ${t=>t.$completed?"#22c55e":"var(--border)"};
  
  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    right: -50%;
    height: 2px;
    transform: translateY(-50%);
  }
  
  @media (max-width: 767px) {
    left: 50%;
    top: 100%;
    bottom: -1rem;
    width: 2px;
    transform: translateX(-50%);
  }
  
  &:last-child {
    display: none;
  }
`,C4=m.div`
  border-top: 1px solid var(--border);
  padding-top: clamp(0.75rem, 2vw, 1rem);
`,k4=m.h4`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  margin: 0 0 clamp(0.5rem, 1.5vw, 0.75rem) 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,S4=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.5rem, 1.5vw, 0.75rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,j4=m.div`
  padding: clamp(0.5rem, 1.5vw, 0.75rem);
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--primary);
    transform: translateY(-1px);
  }
`,E4=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,P4=m.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
`,R4=m.div`
  width: clamp(0.5rem, 1.5vw, 0.75rem);
  height: clamp(0.5rem, 1.5vw, 0.75rem);
  border-radius: 50%;
  
  ${t=>{switch(t.$status){case"completed":return"background-color: #22c55e;";case"current":return"background-color: #3b82f6;";case"pending":return"background-color: var(--muted-foreground);";case"delayed":return"background-color: #ef4444;";default:return"background-color: var(--muted-foreground);"}}}
`,T4=m.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  line-height: 1.3;
`,N4=m.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,I4=m.span`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
`,A4=m(je)`
  padding: 0.25rem 0.5rem;
  height: auto;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  background-color: transparent;
  color: var(--primary);
  border: none;
  
  &:hover {
    background-color: var(--muted);
  }
`;function _4({consolidationData:t,onJobClick:n,className:a}){const[s,c]=y.useState(!1),[d,f]=y.useState(!0);if(y.useEffect(()=>{let x=window.scrollY;const v=()=>{const w=window.scrollY;w>300&&w>x&&c(!0),x=w};return window.addEventListener("scroll",v,{passive:!0}),()=>window.removeEventListener("scroll",v)},[]),!t)return null;const p=Nl.map((x,v)=>({name:x.name,status:v<(t.currentStage||1)?"completed":v===(t.currentStage||1)-1?"current":"pending"})),g=(x,v)=>x>v?"pending":x===v?"current":"completed";return o.jsxs(n4,{className:a,children:[o.jsx(o4,{children:o.jsxs(i4,{children:[o.jsxs(a4,{children:[o.jsx(s4,{children:t.id}),o.jsxs(l4,{children:[o.jsx(c4,{children:t.status||"In Progress"}),o.jsxs(d4,{children:[t.origin?.city||"Origin"," → ",t.destination?.city||"Destination"]})]})]}),o.jsx(u4,{children:o.jsx(f4,{variant:"ghost",size:"sm",onClick:()=>c(!s),children:s?o.jsx(Fl,{style:{width:"1rem",height:"1rem"}}):o.jsx(w0,{style:{width:"1rem",height:"1rem"}})})})]})}),o.jsxs(m4,{$collapsed:s,children:[o.jsxs(p4,{children:[o.jsxs(h4,{children:[o.jsx(hr,{style:{width:"1rem",height:"1rem"}}),"Consolidation Progress"]}),o.jsx(g4,{children:p.map((x,v)=>o.jsxs(v4,{children:[o.jsxs(x4,{$status:x.status,children:[x.status==="completed"&&o.jsx(C0,{style:{width:"0.75rem",height:"0.75rem"}}),x.status==="current"&&o.jsx(Cn,{style:{width:"0.75rem",height:"0.75rem"}}),x.status==="pending"&&o.jsx("div",{style:{width:"0.5rem",height:"0.5rem",backgroundColor:"currentColor",borderRadius:"50%"}})]}),o.jsx(y4,{children:o.jsx(w4,{$status:x.status,children:x.name})}),v<p.length-1&&o.jsx(b4,{$completed:x.status==="completed"})]},v))})]}),t.individualJobs&&t.individualJobs.length>0&&o.jsxs(C4,{children:[o.jsxs(k4,{children:["Individual Jobs (",t.individualJobs.length,")"]}),o.jsx(S4,{children:t.individualJobs.map((x,v)=>o.jsxs(j4,{children:[o.jsxs(E4,{children:[o.jsx(P4,{children:x.id}),o.jsx(R4,{$status:g(x.currentStage||1,t.currentStage||1)})]}),o.jsxs(T4,{children:["PO: ",x.poNumber,o.jsx("br",{}),x.shipper?.company," → ",x.consignee?.company]}),o.jsxs(N4,{children:[o.jsxs(I4,{children:["Stage ",x.currentStage||1,"/",Nl.length]}),o.jsx(A4,{variant:"ghost",size:"sm",onClick:()=>n(x.id),children:o.jsx(Ef,{style:{width:"0.75rem",height:"0.75rem"}})})]})]},v))})]})]})]})}const D4=m.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
`,$4=m.div`
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
`,z4=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }
`,L4=m.div`
  flex: 1;
  min-width: 0;
`,O4=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  margin-bottom: clamp(0.5rem, 2vw, 0.75rem);
`,M4=m(je)`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  &:hover {
    color: var(--foreground);
    background-color: var(--muted);
  }
`,F4=m.div`
  height: 1.5rem;
  width: 1px;
  background-color: var(--border);
  display: none;
  
  @media (min-width: 640px) {
    display: block;
  }
`,B4=m(rt)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`,H4=m(rt)`
  background-color: #f3e8ff;
  color: #7c3aed;
  border: 1px solid #e9d5ff;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`,W4=m.h1`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  color: var(--foreground);
  margin: 0;
  word-break: break-word;
`,U4=m.p`
  color: var(--muted-foreground);
  margin: 0;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.4;
`,V4=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,iv=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  white-space: nowrap;
  
  &:hover {
    background-color: var(--muted);
  }
`,G4=m.div`
  flex: 1;
  padding: clamp(0.75rem, 3vw, 1.5rem);
  overflow: auto;
  background-color: var(--muted);
`,J4=m.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,Y4=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Bs=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
`,Hs=m(ze)`
  padding: clamp(0.75rem, 3vw, 1rem);
`,Ws=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin-bottom: 0.25rem;
`,Us=m.div`
  color: var(--foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,K4=m(Ae)`
  border: 2px solid #bfdbfe;
  background-color: #eff6ff;
`,q4=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,Q4=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,X4=m.div`
  align-self: center;
  width: clamp(2rem, 6vw, 2.5rem);
  height: clamp(2rem, 6vw, 2.5rem);
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #bfdbfe;
  flex-shrink: 0;
`,Z4=m(Cn)`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  color: #2563eb;
`,eT=m.div`
  flex: 1;
  min-width: 0;
`,tT=m.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #1e40af;
  margin: 0 0 clamp(0.5rem, 2vw, 0.75rem) 0;
`,rT=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,nT=m.h4`
  color: #1e40af;
  margin: 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,oT=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,iT=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid #bfdbfe;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,aT=m.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  flex: 1;
  min-width: 0;
`,sT=m.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${t=>t.$urgent?"#ef4444":"#eab308"};
  flex-shrink: 0;
`,lT=m.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  flex: 1;
  min-width: 0;
`,cT=m(rt)`
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`,dT=m.div`
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
`,uT=m(je)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  
  &.generate {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1d4ed8;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
  
  &.upload {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
    }
  }
`,fT=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`,mT=m(je)`
  background-color: #16a34a;
  color: white;
  flex: 1;
  
  &:hover {
    background-color: #15803d;
  }
`,pT=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  flex: 1;
  
  &:hover {
    background-color: var(--muted);
  }
`,hT=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,gT=m(Ae)`
  border: 1px solid #e9d5ff;
  background-color: var(--card);
`,vT=m(We)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
  padding: clamp(1rem, 3vw, 1.5rem);
`,xT=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,yT=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,wT=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,bT=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,CT=m.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  flex: 1;
`,kT=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,ST=m(rt)`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  
  ${t=>{switch(t.$color){case"green":return`
          background-color: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
        `;case"yellow":return`
          background-color: #fef3c7;
          color: #a16207;
          border: 1px solid #fde68a;
        `;case"red":return`
          background-color: #fee2e2;
          color: #dc2626;
          border: 1px solid #fecaca;
        `;default:return`
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 1px solid var(--border);
        `}}}
`,jT=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  
  &:hover {
    background-color: var(--muted);
  }
`,ET=m.div`
  margin-top: clamp(0.75rem, 2vw, 1rem);
  padding-top: clamp(0.75rem, 2vw, 1rem);
  border-top: 1px solid #e9d5ff;
`,PT=m(je)`
  width: 100%;
  background-color: #f3e8ff;
  border: 1px solid #e9d5ff;
  color: #7c3aed;
  
  &:hover {
    background-color: #e9d5ff;
  }
`,RT=m(Ae)`
  border: 1px solid #c7d2fe;
  background-color: var(--card);
`,TT=m(We)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
  padding: clamp(1rem, 3vw, 1.5rem);
`,NT=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,IT=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,AT=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,_T=m.div`
  padding: clamp(0.75rem, 3vw, 1rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  transition: border-color 0.2s;
  
  &:hover {
    border-color: #c7d2fe;
  }
`,DT=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`,$T=m.div`
  flex: 1;
  min-width: 0;
`,zT=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`,LT=m.span`
  color: var(--foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,OT=m(rt)`
  background-color: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
`,MT=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  line-height: 1.3;
`,FT=m.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin-top: 0.25rem;
  line-height: 1.3;
`,BT=m(je)`
  background-color: #eef2ff;
  border: 1px solid #c7d2fe;
  color: #4338ca;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  
  &:hover {
    background-color: #e0e7ff;
  }
`,HT=m(Ae)`
  border: 1px solid #fed7aa;
  background-color: var(--card);
`,WT=m(We)`
  background-color: #fff7ed;
  border-bottom: 1px solid #fed7aa;
  padding: clamp(1rem, 3vw, 1.5rem);
`,UT=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #c2410c;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,VT=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,GT=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
  max-height: clamp(12rem, 40vh, 16rem);
  overflow-y: auto;
`,JT=m.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
`,YT=m.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #ea580c;
  margin-top: 0.5rem;
  flex-shrink: 0;
`,KT=m.div`
  flex: 1;
  min-width: 0;
`,qT=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,QT=m.div`
  flex: 1;
  min-width: 0;
`,XT=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  margin: 0;
`,ZT=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  line-height: 1.3;
`,eN=m.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  white-space: nowrap;
`,tN=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
`;function rN(){const{id:t}=Ov(),n=Qr(),{getConsolidation:a}=Tf(),s=a(t);if(!s)return o.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[o.jsx("h2",{children:"Consolidation not found"}),o.jsx("button",{onClick:()=>n("/jobs"),children:"Back to Jobs"})]});const c=Nl.map((w,S)=>({name:w.name,status:S<(s.currentStage||1)?"completed":S===(s.currentStage||1)-1?"current":"pending",description:w.description})),d=c.findIndex(w=>w.status==="current"),f=c[d]||c[0],p=[{name:"Generate MBL (Master Bill of Lading)",type:"generate",urgent:!0},{name:"Upload Consolidation Invoice",type:"upload",urgent:!1},{name:"Generate LCL Manifest",type:"generate",urgent:!0},{name:"Complete Customs Entry",type:"upload",urgent:!1}],g=[{timestamp:s.createdAt||new Date().toISOString(),event:"Consolidation Created",user:"System",details:`Consolidation ${s.id} created successfully`},{timestamp:s.createdAt||new Date().toISOString(),event:"Template Applied",user:"System",details:`${s.template} template applied`},{timestamp:s.updatedAt||new Date().toISOString(),event:"Stage Advanced",user:"System",details:`Advanced to ${f?.name}`}];s.individualJobs&&s.individualJobs.forEach(w=>{g.push({timestamp:w.createdAt||s.createdAt||new Date().toISOString(),event:"Individual Job Added",user:"System",details:`${w.id} added to consolidation`})});const x=w=>new Date(w).toLocaleString(),v=w=>{n(`/consolidation/${s.id}/job/${w}`)};return o.jsxs(D4,{children:[o.jsx(_4,{consolidationData:s,onJobClick:v}),o.jsx($4,{children:o.jsxs(z4,{children:[o.jsxs(L4,{children:[o.jsxs(O4,{children:[o.jsxs(M4,{variant:"ghost",size:"sm",onClick:()=>n("/jobs"),children:[o.jsx(Cf,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Back to Jobs"]}),o.jsx(F4,{}),o.jsx(B4,{children:s.status||"In Progress"}),o.jsxs(H4,{variant:"outline",children:[o.jsx(hr,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Consolidation"]})]}),o.jsx(W4,{children:s.id||s.title}),o.jsxs(U4,{children:[s.template," • ",s.origin?.city," → ",s.destination?.city," • Created ",x(s.createdAt||new Date().toISOString())]})]}),o.jsxs(V4,{children:[o.jsxs(iv,{variant:"outline",size:"sm",children:[o.jsx(Pf,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Edit Details"]}),o.jsxs(iv,{variant:"outline",size:"sm",children:[o.jsx(Jn,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Modify Progress"]})]})]})}),o.jsx(G4,{children:o.jsxs(J4,{children:[o.jsxs(Y4,{children:[o.jsx(Bs,{children:o.jsxs(Hs,{children:[o.jsx(Ws,{children:"Route"}),o.jsxs(Us,{children:[s.origin?.city||"N/A"," → ",s.destination?.city||"N/A"]})]})}),o.jsx(Bs,{children:o.jsxs(Hs,{children:[o.jsx(Ws,{children:"Total Weight"}),o.jsx(Us,{children:s.totalWeight||"0 kg"})]})}),o.jsx(Bs,{children:o.jsxs(Hs,{children:[o.jsx(Ws,{children:"Individual Jobs"}),o.jsxs(Us,{children:[s.individualJobs?.length||0," jobs"]})]})}),o.jsx(Bs,{children:o.jsxs(Hs,{children:[o.jsx(Ws,{children:"Current Stage"}),o.jsxs(Us,{children:["Stage ",s.currentStage||1," of ",c.length]})]})})]}),o.jsx(Rf,{currentStage:s.currentStage||1,stages:c}),o.jsx(K4,{children:o.jsx(q4,{children:o.jsxs(Q4,{children:[o.jsx(X4,{children:o.jsx(Z4,{})}),o.jsxs(eT,{children:[o.jsxs(tT,{children:["Current Stage: ",f?.name]}),o.jsxs(rT,{children:[o.jsx(nT,{children:"Pending Tasks:"}),o.jsx(oT,{children:p.map((w,S)=>o.jsxs(iT,{children:[o.jsxs(aT,{children:[o.jsx(sT,{$urgent:w.urgent}),o.jsx(lT,{children:w.name}),w.urgent&&o.jsx(cT,{children:"Urgent"})]}),o.jsx(dT,{children:o.jsx(uT,{className:w.type,variant:"outline",size:"sm",children:w.type==="generate"?o.jsxs(o.Fragment,{children:[o.jsx(Jn,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Generate"]}):o.jsxs(o.Fragment,{children:[o.jsx(Yn,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Upload"]})})})]},S))})]}),o.jsxs(fT,{children:[o.jsxs(mT,{children:[o.jsx(kl,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Resume Progress"]}),o.jsxs(pT,{variant:"outline",children:[o.jsx(P0,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Pause Consolidation"]})]})]})]})})}),o.jsxs(hT,{children:[o.jsxs(gT,{children:[o.jsx(vT,{children:o.jsxs(xT,{children:[o.jsx(kn,{style:{width:"1.25rem",height:"1.25rem"}}),"Consolidation Documents"]})}),o.jsxs(yT,{children:[o.jsx(wT,{children:[{name:"MBL (Master Bill of Lading)",status:"Missing",color:"red"},{name:"Customs Entry",status:"Missing",color:"red"},{name:"LCL Manifest",status:"Pending",color:"yellow"},{name:"Delivery Order LCL",status:"Generated",color:"green"},{name:"Consolidation Invoice",status:"Pending",color:"yellow"}].map((w,S)=>o.jsxs(bT,{children:[o.jsx(CT,{children:w.name}),o.jsxs(kT,{children:[o.jsx(ST,{$color:w.color,children:w.status}),w.status!=="Generated"&&o.jsx(jT,{variant:"outline",size:"sm",children:w.status==="Pending"?"Generate":"Upload"})]})]},S))}),o.jsx(ET,{children:o.jsxs(PT,{variant:"outline",children:[o.jsx(Jr,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Add Custom Document"]})})]})]}),o.jsxs(RT,{children:[o.jsx(TT,{children:o.jsxs(NT,{children:[o.jsx(hr,{style:{width:"1.25rem",height:"1.25rem"}}),"Individual Jobs Within Consolidation"]})}),o.jsx(IT,{children:o.jsx(AT,{children:s.individualJobs?.map((w,S)=>o.jsx(_T,{children:o.jsxs(DT,{children:[o.jsxs($T,{children:[o.jsxs(zT,{children:[o.jsx(LT,{children:w.id}),o.jsx(OT,{variant:"outline",children:w.template})]}),o.jsxs(MT,{children:["PO: ",w.poNumber," • Stage: ",c[w.currentStage-1]?.name||"N/A"]}),o.jsxs(FT,{children:[w.shipper?.company," → ",w.consignee?.company]})]}),o.jsxs(BT,{variant:"outline",size:"sm",onClick:()=>n(`/consolidation/${s.id}/job/${w.id}`),children:[o.jsx(Ef,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"View Details"]})]})},S))||o.jsx("div",{style:{color:"var(--muted-foreground)",textAlign:"center",padding:"2rem"},children:"No individual jobs added yet"})})})]})]}),o.jsxs(HT,{children:[o.jsx(WT,{children:o.jsxs(UT,{children:[o.jsx(j0,{style:{width:"1.25rem",height:"1.25rem"}}),"Activity History"]})}),o.jsx(VT,{children:o.jsx(GT,{children:g.map((w,S)=>o.jsxs(JT,{children:[o.jsx(YT,{}),o.jsxs(KT,{children:[o.jsxs(qT,{children:[o.jsxs(QT,{children:[o.jsx(XT,{children:w.event}),o.jsx(ZT,{children:w.details})]}),o.jsx(eN,{children:x(w.timestamp)})]}),o.jsxs(tN,{children:["by ",w.user]})]})]},S))})})]})]})})]})}const nN=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,oN=m.h4`
  color: #1e40af;
  margin: 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,iN=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,aN=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid #bfdbfe;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,sN=m.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  flex: 1;
  min-width: 0;
`,lN=m.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${t=>t.$urgent?"#ef4444":"#eab308"};
  flex-shrink: 0;
`,cN=m.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  flex: 1;
  min-width: 0;
`,dN=m(rt)`
  background-color: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`,uN=m.div`
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
`,fN=m(je)`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
  
  &.generate {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1d4ed8;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
  
  &.upload {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
    }
  }
`,mN=m.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
`,pN=m.div`
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
`,hN=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }
`,gN=m.div`
  flex: 1;
  min-width: 0;
`,vN=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  margin-bottom: clamp(0.5rem, 2vw, 0.75rem);
`,xN=m(je)`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  
  &:hover {
    color: var(--foreground);
    background-color: var(--muted);
  }
`,yN=m.div`
  height: 1.5rem;
  width: 1px;
  background-color: var(--border);
  display: none;
  
  @media (min-width: 640px) {
    display: block;
  }
`,wN=m(rt)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`,bN=m(rt)`
  background-color: var(--secondary);
  color: var(--secondary-foreground);
  border: 1px solid var(--border);
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`,av=m(rt)`
  background-color: #f3e8ff;
  color: #7c3aed;
  border: 1px solid #e9d5ff;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`,CN=m.h1`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  color: var(--foreground);
  margin: 0;
  word-break: break-word;
`,kN=m.p`
  color: var(--muted-foreground);
  margin: 0;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.4;
`,SN=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,sv=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  white-space: nowrap;
  
  &:hover {
    background-color: var(--muted);
  }
`,jN=m.div`
  flex: 1;
  padding: clamp(0.75rem, 3vw, 1.5rem);
  overflow: auto;
  background-color: var(--muted);
`,EN=m.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,PN=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Vs=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
`,Gs=m(ze)`
  padding: clamp(0.75rem, 3vw, 1rem);
`,Js=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin-bottom: 0.25rem;
`,Ys=m.div`
  color: var(--foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  word-break: break-word;
`,RN=m(Ae)`
  border: 2px solid #bfdbfe;
  background-color: #eff6ff;
`,TN=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,NN=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,IN=m.div`
  align-self: center;
  width: clamp(2rem, 6vw, 2.5rem);
  height: clamp(2rem, 6vw, 2.5rem);
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #bfdbfe;
  flex-shrink: 0;
`,AN=m(Cn)`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  color: #2563eb;
`,_N=m.div`
  flex: 1;
  min-width: 0;
`,DN=m.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #1e40af;
  margin: 0 0 clamp(0.5rem, 2vw, 0.75rem) 0;
`,$N=m.p`
  color: var(--muted-foreground);
  margin: 0 0 clamp(0.75rem, 2vw, 1rem) 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  line-height: 1.4;
`,zN=m.div`
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 0.5rem;
  margin: clamp(0.75rem, 2vw, 1rem) 0;
`,LN=m.p`
  color: #d97706;
  margin: 0;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.4;
`,ON=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`,lv=m(je)`
  background-color: #16a34a;
  color: white;
  flex: 1;
  
  &:hover {
    background-color: #15803d;
  }
`,MN=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  flex: 1;
  
  &:hover {
    background-color: var(--muted);
  }
`,FN=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  flex: 1;
  
  &:hover {
    background-color: var(--muted);
  }
`,BN=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,HN=m(Ae)`
  border: 1px solid #c7d2fe;
  background-color: var(--card);
`,WN=m(We)`
  background-color: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
  padding: clamp(1rem, 3vw, 1.5rem);
`,UN=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #4338ca;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,VN=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,GN=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`,Ks=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,qs=m.h4`
  color: var(--foreground);
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,lr=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: clamp(0.25rem, 1vw, 0.5rem) 0;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,cr=m.span`
  color: var(--muted-foreground);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  min-width: 120px;
`,dr=m.span`
  color: var(--foreground);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  flex: 1;
  word-break: break-word;
  
  @media (min-width: 640px) {
    text-align: right;
  }
`,JN=m(Ae)`
  border: 1px solid #e9d5ff;
  background-color: var(--card);
`,YN=m(We)`
  background-color: #f3e8ff;
  border-bottom: 1px solid #e9d5ff;
  padding: clamp(1rem, 3vw, 1.5rem);
`,KN=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #7c3aed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,qN=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,QN=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 0.75rem);
`,XN=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,ZN=m.span`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  flex: 1;
`,eI=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,tI=m(rt)`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  
  ${t=>{switch(t.$color){case"green":return`
          background-color: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
        `;case"yellow":return`
          background-color: #fef3c7;
          color: #a16207;
          border: 1px solid #fde68a;
        `;case"red":return`
          background-color: #fee2e2;
          color: #dc2626;
          border: 1px solid #fecaca;
        `;default:return`
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 1px solid var(--border);
        `}}}
`,cv=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  
  &:hover {
    background-color: var(--muted);
  }
`,rI=m.div`
  margin-top: clamp(0.75rem, 2vw, 1rem);
  padding-top: clamp(0.75rem, 2vw, 1rem);
  border-top: 1px solid #e9d5ff;
`,nI=m(je)`
  width: 100%;
  background-color: #f3e8ff;
  border: 1px solid #e9d5ff;
  color: #7c3aed;
  
  &:hover {
    background-color: #e9d5ff;
  }
`,oI=m(Ae)`
  border: 1px solid #fed7aa;
  background-color: var(--card);
`,iI=m(We)`
  background-color: #fff7ed;
  border-bottom: 1px solid #fed7aa;
  padding: clamp(1rem, 3vw, 1.5rem);
`,aI=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: #c2410c;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,sI=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,lI=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
  max-height: clamp(12rem, 40vh, 16rem);
  overflow-y: auto;
`,cI=m.div`
  display: flex;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding: clamp(0.5rem, 2vw, 0.75rem);
  background-color: var(--card);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
`,dI=m.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #ea580c;
  margin-top: 0.5rem;
  flex-shrink: 0;
`,uI=m.div`
  flex: 1;
  min-width: 0;
`,fI=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,mI=m.div`
  flex: 1;
  min-width: 0;
`,pI=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  margin: 0;
`,hI=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  line-height: 1.3;
`,gI=m.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  white-space: nowrap;
`,vI=m.p`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
`;function dv(){const{consolidationId:t,jobId:n}=Ov(),a=Qr(),{getConsolidation:s,getJob:c}=Tf(),[d,f]=y.useState(null),[p,g]=y.useState(null);if(y.useEffect(()=>{if(t){const C=s(t),N=c(t,n);g(C),f(N)}else Ek(n).then(f)},[t,n,s,c]),!d)return o.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[o.jsx("h2",{children:"Job not found"}),o.jsx("button",{onClick:()=>a("/jobs"),children:"Back to Jobs"})]});const x=()=>{a(p?`/consolidation/${p.id}`:"/jobs")},v=Nl.map((C,N)=>{const D=d.currentStage||1;return{name:C.name,status:N<D?"completed":N===D-1?"current":C.name==="Destination Clearance"?"external":"pending",description:C.description}}),w=v.findIndex(C=>C.status==="current"),S=v[w]||v[0];let j=[];p?j=[{name:"Generate MBL (Master Bill of Lading)",type:"generate",urgent:!0},{name:"Upload Consolidation Invoice",type:"upload",urgent:!1},{name:"Generate LCL Manifest",type:"generate",urgent:!0},{name:"Complete Customs Entry",type:"upload",urgent:!1}]:j=[{name:"Upload Commercial Invoice",type:"upload",urgent:!1},{name:"Upload Packing List",type:"upload",urgent:!1},{name:"Generate Job Instructions",type:"generate",urgent:!1}];let T=!1,k="";p&&(T=!0,k="Complete all jobs in this consolidation at the current stage to proceed.");const P=[{timestamp:d.createdAt||new Date().toISOString(),event:"Job Created",user:"System",details:`Individual job ${d.id} created and added to consolidation`},{timestamp:d.createdAt||new Date().toISOString(),event:"Added to Consolidation",user:"System",details:`Job assigned to consolidation ${p?.id||"Standalone"}`},{timestamp:d.updatedAt||new Date().toISOString(),event:"Documentation Started",user:"System",details:"Job documentation preparation initiated"},{timestamp:d.updatedAt||new Date().toISOString(),event:"Stage Advanced",user:"System",details:`Advanced to ${S?.name}`}],I=C=>new Date(C).toLocaleString();return o.jsxs(mN,{children:[o.jsx(pN,{children:o.jsxs(hN,{children:[o.jsxs(gN,{children:[o.jsxs(vN,{children:[o.jsxs(xN,{type:"button",variant:"ghost",size:"sm",onClick:x,children:[o.jsx(Cf,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),p?"Back to Consolidation":"Back to Jobs"]}),o.jsx(yN,{}),o.jsx(wN,{children:d.status||"In Progress"}),o.jsx(bN,{variant:"outline",children:d.template}),p?o.jsxs(av,{variant:"outline",children:[o.jsx(hr,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Part of ",p?.id||"Standalone"]}):o.jsxs(av,{variant:"outline",children:[o.jsx(hr,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Standalone Job"]})]}),o.jsx(CN,{children:d.id}),o.jsxs(kN,{children:["PO: ",d.poNumber," • ",d.template," ",p?` • Part of consolidation ${p?.id||"Standalone"}`:" • Standalone Job"]})]}),o.jsxs(SN,{children:[o.jsxs(sv,{variant:"outline",size:"sm",children:[o.jsx(Pf,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Edit Details"]}),o.jsxs(sv,{variant:"outline",size:"sm",children:[o.jsx(Jn,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Modify Progress"]})]})]})}),o.jsx(jN,{children:o.jsxs(EN,{children:[o.jsxs(PN,{children:[o.jsx(Vs,{children:o.jsxs(Gs,{children:[o.jsx(Js,{children:"PO Number"}),o.jsx(Ys,{children:d.poNumber})]})}),o.jsx(Vs,{children:o.jsxs(Gs,{children:[o.jsx(Js,{children:"Template"}),o.jsx(Ys,{children:d.template})]})}),o.jsx(Vs,{children:o.jsxs(Gs,{children:[o.jsx(Js,{children:"Current Stage"}),o.jsx(Ys,{children:p?.id||"Stage 1 | Booking & Preparation"})]})}),o.jsx(Vs,{children:o.jsxs(Gs,{children:[o.jsx(Js,{children:"Consolidation"}),o.jsx(Ys,{children:p?.id||"Standalone"})]})})]}),o.jsx(Rf,{currentStage:d.currentStage||1,stages:v}),o.jsx(RN,{children:o.jsx(TN,{children:o.jsxs(NN,{children:[o.jsx(IN,{children:o.jsx(AN,{})}),o.jsxs(_N,{children:[o.jsxs(DN,{children:["Current Stage: ",S?.name]}),o.jsx($N,{children:S?.description}),o.jsx(zN,{children:o.jsx(LN,{children:p?`📋 This individual job follows the progress of its parent consolidation ${p?.id||"Standalone"}. Most actions are managed at the consolidation level.`:"📋 This is a standalone job. It can be managed independently or added to a consolidation later."})}),o.jsxs(nN,{children:[o.jsx(oN,{children:"Pending Tasks:"}),o.jsx(iN,{children:j.map((C,N)=>o.jsxs(aN,{children:[o.jsxs(sN,{children:[o.jsx(lN,{$urgent:C.urgent}),o.jsx(cN,{children:C.name}),C.urgent&&o.jsx(dN,{children:"Urgent"})]}),o.jsx(uN,{children:o.jsx(fN,{className:C.type,variant:"outline",size:"sm",children:C.type==="generate"?o.jsxs(o.Fragment,{children:[o.jsx(Jn,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Generate"]}):o.jsxs(o.Fragment,{children:[o.jsx(Yn,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Upload"]})})})]},N))})]}),o.jsxs(ON,{children:[p?o.jsxs(o.Fragment,{children:[o.jsxs(lv,{disabled:T,title:T?k:void 0,children:[o.jsx(kl,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Resume Progress"]}),o.jsxs(MN,{variant:"outline",children:[o.jsx(P0,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Job Paused"]})]}):o.jsxs(lv,{children:[o.jsx(kl,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Progress Job"]}),o.jsxs(FN,{type:"button",variant:"outline",onClick:x,children:[o.jsx(Ef,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),p?"View Consolidation":"Back to Jobs"]})]})]})]})})}),o.jsxs(BN,{children:[o.jsxs(HN,{children:[o.jsx(WN,{children:o.jsxs(UN,{children:[o.jsx(hr,{style:{width:"1.25rem",height:"1.25rem"}}),"Individual Job Details"]})}),o.jsx(VN,{children:o.jsxs(GN,{children:[o.jsxs(Ks,{children:[o.jsx(qs,{children:"Basic Information"}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Job ID:"}),o.jsx(dr,{children:d.id})]}),o.jsxs(lr,{children:[o.jsx(cr,{children:"PO Number:"}),o.jsx(dr,{children:d.poNumber})]}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Template:"}),o.jsx(dr,{children:d.template})]}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Status:"}),o.jsx(dr,{children:d.status||"In Progress"})]})]}),o.jsxs(Ks,{children:[o.jsx(qs,{children:"Consolidation Info"}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Parent Consolidation:"}),o.jsx(dr,{children:p?.id||"Standalone"})]}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Route:"}),o.jsxs(dr,{children:[p?.origin?.city||"N/A"," → ",p?.destination?.city||"N/A"]})]})]}),o.jsxs(Ks,{children:[o.jsx(qs,{children:"Parties"}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Shipper:"}),o.jsx(dr,{children:d.shipper?.company||"Not specified"})]}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Consignee:"}),o.jsx(dr,{children:d.consignee?.company||"Not specified"})]})]}),o.jsxs(Ks,{children:[o.jsx(qs,{children:"Cargo Details"}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Weight:"}),o.jsxs(dr,{children:[d.cargo?.weight||d.weight||"0"," kg"]})]}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Volume:"}),o.jsxs(dr,{children:[d.cargo?.volume||d.volume||"0"," m³"]})]}),o.jsxs(lr,{children:[o.jsx(cr,{children:"Description:"}),o.jsx(dr,{children:d.cargo?.description||"Not specified"})]})]})]})})]}),o.jsxs(JN,{children:[o.jsx(YN,{children:o.jsxs(KN,{children:[o.jsx(kn,{style:{width:"1.25rem",height:"1.25rem"}}),"Job Documents"]})}),o.jsxs(qN,{children:[o.jsx(QN,{children:[{name:"Commercial Invoice",status:"Generated",color:"green"},{name:"Packing List",status:"Generated",color:"green"},{name:"Job Instructions",status:"Pending",color:"yellow"}].map((C,N)=>o.jsxs(XN,{children:[o.jsx(ZN,{children:C.name}),o.jsxs(eI,{children:[o.jsx(tI,{$color:C.color,children:C.status}),C.status!=="Generated"?o.jsx(cv,{variant:"outline",size:"sm",children:C.status==="Pending"?"Generate":"Upload"}):o.jsx(cv,{variant:"outline",size:"sm",children:"View"})]})]},N))}),o.jsx(rI,{children:o.jsxs(nI,{variant:"outline",children:[o.jsx(Jr,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Add Job-Specific Document"]})})]})]})]}),o.jsxs(oI,{children:[o.jsx(iI,{children:o.jsxs(aI,{children:[o.jsx(j0,{style:{width:"1.25rem",height:"1.25rem"}}),"Job Activity History"]})}),o.jsx(sI,{children:o.jsx(lI,{children:P.map((C,N)=>o.jsxs(cI,{children:[o.jsx(dI,{}),o.jsxs(uI,{children:[o.jsxs(fI,{children:[o.jsxs(mI,{children:[o.jsx(pI,{children:`${N+1}. ${C.event}`}),o.jsx(hI,{children:C.details})]}),o.jsx(gI,{children:I(C.timestamp)})]}),o.jsxs(vI,{children:["by ",C.user]})]})]},N))})})]})]})})]})}const xI=m.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
`,yI=m.table`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem;
`,wI=m.thead`
  tr {
    border-bottom: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  }
`,bI=m.tbody`
  tr:last-child {
    border-bottom: 0;
  }
`;m.tfoot`
  background-color: rgba(var(--muted-rgb, 236, 236, 240), 0.5);
  border-top: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  font-weight: 500;
  
  tr:last-child {
    border-bottom: 0;
  }
`;const CI=m.tr`
  border-bottom: 1px solid var(--border, rgba(0, 0, 0, 0.1));
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(var(--muted-rgb, 236, 236, 240), 0.5);
  }
  
  &[data-state="selected"] {
    background-color: var(--muted, #ececf0);
  }
`,kI=m.th`
  color: var(--foreground, #111827);
  height: 2.5rem;
  padding: 0 0.5rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  white-space: nowrap;
  
  &:has([role="checkbox"]) {
    padding-right: 0;
  }
  
  [role="checkbox"] {
    transform: translateY(2px);
  }
`,SI=m.td`
  padding: 0.5rem;
  vertical-align: middle;
  white-space: nowrap;
  
  &:has([role="checkbox"]) {
    padding-right: 0;
  }
  
  [role="checkbox"] {
    transform: translateY(2px);
  }
`;m.caption`
  color: var(--muted-foreground, #717182);
  margin-top: 1rem;
  font-size: 0.875rem;
`;function jI({className:t,...n}){return o.jsx(xI,{"data-slot":"table-container",children:o.jsx(yI,{"data-slot":"table",className:t,...n})})}function EI({className:t,...n}){return o.jsx(wI,{"data-slot":"table-header",className:t,...n})}function PI({className:t,...n}){return o.jsx(bI,{"data-slot":"table-body",className:t,...n})}function yy({className:t,...n}){return o.jsx(CI,{"data-slot":"table-row",className:t,...n})}function RI({className:t,...n}){return o.jsx(kI,{"data-slot":"table-head",className:t,...n})}function TI({className:t,...n}){return o.jsx(SI,{"data-slot":"table-cell",className:t,...n})}const uv=m.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
`,NI=m.div`
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
  margin-left: clamp(1rem, 3vw, 0);
  
  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 4rem; /* Account for mobile menu button */
  }
`,II=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`,AI=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`,_I=m.div`
  min-width: 0; // Prevents overflow
`,DI=m.h1`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  color: var(--foreground);
  margin: 0;
`,$I=m.p`
  color: var(--muted-foreground);
  margin: 0.25rem 0 0 0;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
`,zI=m.div`
  flex: 1;
  padding: clamp(0.75rem, 3vw, 1.5rem);
  background-color: var(--muted);
`,LI=m.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 1.5rem);
`,OI=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Su=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &.blue {
    border-color: #bfdbfe;
  }
  
  &.green {
    border-color: #bbf7d0;
  }
  
  &.purple {
    border-color: #e9d5ff;
  }
`,ju=m(ze)`
  padding: clamp(0.75rem, 3vw, 1rem);
`,Eu=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Pu=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  margin: 0;
  
  &.blue { color: #2563eb; }
  &.green { color: #16a34a; }
  &.purple { color: #9333ea; }
`,Ru=m.p`
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  margin: 0;
  
  &.blue { color: #1d4ed8; }
  &.green { color: #15803d; }
  &.purple { color: #7c3aed; }
`,Tu=m.div`
  width: clamp(2rem, 6vw, 2.5rem);
  height: clamp(2rem, 6vw, 2.5rem);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.blue { background-color: #dbeafe; }
  &.green { background-color: #dcfce7; }
  &.purple { background-color: #f3e8ff; }
`,Nu=m.div`
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  
  &.blue { color: #2563eb; }
  &.green { color: #16a34a; }
  &.purple { color: #9333ea; }
`,MI=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
`,FI=m(We)`
  background-color: var(--muted);
  border-bottom: 1px solid var(--border);
  padding: clamp(0.75rem, 3vw, 1rem);
`,BI=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,HI=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,WI=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,UI=m.div`
  flex: 1;
  min-width: 0;
`,VI=m.div`
  position: relative;
`,GI=m(SC)`
  width: clamp(0.875rem, 2.5vw, 1rem);
  height: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--muted-foreground);
  position: absolute;
  left: clamp(0.5rem, 2vw, 0.75rem);
  top: 50%;
  transform: translateY(-50%);
`,JI=m(Fe)`
  padding-left: clamp(2rem, 6vw, 2.5rem);
  background-color: var(--input-background);
  border: 1px solid var(--border);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  
  &:focus {
    border-color: var(--ring);
    box-shadow: 0 0 0 1px var(--ring);
  }
`,fv=m.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: clamp(10rem, 20vw, 12rem);
  }
`,YI=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  white-space: nowrap;
  
  &:hover {
    background-color: var(--muted);
  }
`,KI=m.div`
  border: 1px solid var(--border);
  background-color: var(--card);
  border-radius: 0.75rem;
  overflow: hidden;
`,qI=m.div`
  background-color: var(--muted);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 1.5rem);
`,QI=m.h3`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  margin: 0;
`,XI=m.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
`,ZI=m(jI)`
  width: 100%;
  min-width: 700px; // Minimum width for proper table layout
`,Do=m(RI)`
  color: var(--muted-foreground);
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  white-space: nowrap;
`,eA=m(yy)`
  &:hover {
    background-color: var(--muted);
  }
  
  transition: background-color 0.2s;
`,$o=m(TI)`
  padding: clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
`,tA=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,rA=m.span`
  color: var(--foreground);
  font-weight: 500;
`,nA=m(rt)`
  background-color: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  white-space: nowrap;
`,oA=m.span`
  color: var(--foreground);
`,iA=m.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
  margin-top: 0.25rem;
`,aA=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,mv=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
`,sA=m.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
`,lA=m.div`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
`,cA=m.div`
  display: flex;
  align-items: center;
  gap: clamp(0.25rem, 1vw, 0.5rem);
  flex-wrap: wrap;
`,Iu=m(je)`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  min-height: clamp(1.75rem, 4vw, 2rem);
  padding: clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 2vw, 0.75rem);
  white-space: nowrap;
  
  &.view {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1d4ed8;
    
    &:hover {
      background-color: #dbeafe;
    }
  }
  
  &.edit {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
    }
  }
  
  &.archive {
    background-color: #fff7ed;
    border: 1px solid #fed7aa;
    color: #ea580c;
    
    &:hover {
      background-color: #ffedd5;
    }
  }
`,pv=m(je)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  min-height: clamp(2.25rem, 6vw, 2.5rem);
  white-space: nowrap;
  
  &:hover {
    background-color: var(--primary);
    opacity: 0.9;
  }
`,dA=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 0.5rem;
  color: var(--muted-foreground);
`,uA=m(E0)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;function fA(){const t=Qr(),[n,a]=y.useState(""),[s,c]=y.useState("all-templates"),[d,f]=y.useState("all-statuses"),[p,g]=y.useState([]),[x,v]=y.useState(!0),[w,S]=y.useState({activeJobs:0,consolidations:0,completed:0});y.useEffect(()=>{j()},[]);const j=async()=>{v(!0);try{const C=await jk(),N=[...C.map(O=>({...O,type:"consolidation"})),...Vo];g(N);const D=N.filter(O=>O.status==="In Progress").length,H=C.length,W=N.filter(O=>O.status==="Completed").length;S({activeJobs:D,consolidations:H,completed:W})}catch(C){console.error("Error loading jobs:",C)}finally{v(!1)}},T=C=>{const N={width:"1rem",height:"1rem"};switch(C){case"In Progress":return o.jsx(Cn,{style:{...N,color:"#2563eb"}});case"Completed":return o.jsx(Gu,{style:{...N,color:"#16a34a"}});case"Issue":return o.jsx(b0,{style:{...N,color:"#dc2626"}});default:return o.jsx(Cn,{style:{...N,color:"#9ca3af"}})}},k=C=>{switch(C){case"In Progress":return o.jsx(rt,{style:{backgroundColor:"#dbeafe",color:"#1d4ed8",border:"1px solid #bfdbfe"},children:"In Progress"});case"Completed":return o.jsx(rt,{style:{backgroundColor:"#dcfce7",color:"#15803d",border:"1px solid #bbf7d0"},children:"Completed"});case"Issue":return o.jsx(rt,{style:{backgroundColor:"#fee2e2",color:"#dc2626",border:"1px solid #fecaca"},children:"Issue"});default:return o.jsx(rt,{variant:"outline",children:C})}},P=C=>{C.type==="consolidation"?t(`/consolidation/${C.id}`):t(`/job/${C.id}`)},I=p.filter(C=>{const N=n===""||C.id.toLowerCase().includes(n.toLowerCase())||C.poNumber&&C.poNumber.toLowerCase().includes(n.toLowerCase()),D=s==="all-templates"||C.template?.toLowerCase().includes(s.replace("-"," ")),H=d==="all-statuses"||C.status?.toLowerCase().replace(" ","-")===d;return N&&D&&H});return x?o.jsx(uv,{children:o.jsxs(dA,{children:[o.jsx(uA,{}),"Loading jobs and consolidations..."]})}):o.jsxs(uv,{children:[o.jsx(NI,{children:o.jsxs(II,{children:[o.jsxs(_I,{children:[o.jsx(DI,{children:"Jobs & Consolidations"}),o.jsx($I,{children:"Track and manage all freight shipments"})]}),o.jsxs(AI,{children:[o.jsxs(pv,{onClick:()=>t("/create"),children:[o.jsx(Jr,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Create Consolidation"]}),o.jsxs(pv,{onClick:()=>t("/job/create"),children:[o.jsx(Jr,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Create Standalone Job"]})]})]})}),o.jsx(zI,{children:o.jsxs(LI,{children:[o.jsxs(OI,{children:[o.jsx(Su,{className:"blue",children:o.jsx(ju,{children:o.jsxs(Eu,{children:[o.jsxs("div",{children:[o.jsx(Pu,{className:"blue",children:"Active Jobs"}),o.jsx(Ru,{className:"blue",children:w.activeJobs})]}),o.jsx(Tu,{className:"blue",children:o.jsx(Nu,{className:"blue",children:o.jsx(hr,{})})})]})})}),o.jsx(Su,{className:"green",children:o.jsx(ju,{children:o.jsxs(Eu,{children:[o.jsxs("div",{children:[o.jsx(Pu,{className:"green",children:"Consolidations"}),o.jsx(Ru,{className:"green",children:w.consolidations})]}),o.jsx(Tu,{className:"green",children:o.jsx(Nu,{className:"green",children:o.jsx(kf,{})})})]})})}),o.jsx(Su,{className:"purple",children:o.jsx(ju,{children:o.jsxs(Eu,{children:[o.jsxs("div",{children:[o.jsx(Pu,{className:"purple",children:"Completed"}),o.jsx(Ru,{className:"purple",children:w.completed})]}),o.jsx(Tu,{className:"purple",children:o.jsx(Nu,{className:"purple",children:o.jsx(Gu,{})})})]})})})]}),o.jsxs(MI,{children:[o.jsx(FI,{children:o.jsxs(BI,{children:[o.jsx(S0,{}),"Search & Filters"]})}),o.jsx(HI,{children:o.jsxs(WI,{children:[o.jsx(UI,{children:o.jsxs(VI,{children:[o.jsx(GI,{}),o.jsx(JI,{placeholder:"Search by Job ID, PO Number, or Consolidation ID...",value:n,onChange:C=>a(C.target.value)})]})}),o.jsx(fv,{children:o.jsxs(Mt,{value:s,onValueChange:c,children:[o.jsx(Qt,{children:o.jsx(Ft,{placeholder:"All Templates"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"all-templates",children:"All Templates"}),o.jsx(ue,{value:"consolidation",children:"Consolidation"}),o.jsx(ue,{value:"import-lcl",children:"Import LCL"}),o.jsx(ue,{value:"export-fcl",children:"Export FCL"}),o.jsx(ue,{value:"air-export",children:"Air Export"})]})]})}),o.jsx(fv,{children:o.jsxs(Mt,{value:d,onValueChange:f,children:[o.jsx(Qt,{children:o.jsx(Ft,{placeholder:"All Statuses"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"all-statuses",children:"All Statuses"}),o.jsx(ue,{value:"in-progress",children:"In Progress"}),o.jsx(ue,{value:"completed",children:"Completed"}),o.jsx(ue,{value:"issue",children:"Issue"})]})]})}),o.jsx(YI,{variant:"outline",children:"Apply Filters"})]})})]}),o.jsxs(KI,{children:[o.jsx(qI,{children:o.jsxs(QI,{children:["All Jobs & Consolidations (",I.length,")"]})}),o.jsx(XI,{children:o.jsxs(ZI,{children:[o.jsx(EI,{children:o.jsxs(yy,{children:[o.jsx(Do,{children:"Job/Consolidation ID"}),o.jsx(Do,{children:"Template"}),o.jsx(Do,{children:"Current Stage"}),o.jsx(Do,{children:"Status"}),o.jsx(Do,{children:"Details"}),o.jsx(Do,{children:"Actions"})]})}),o.jsx(PI,{children:I.map(C=>o.jsxs(eA,{children:[o.jsx($o,{children:o.jsxs(tA,{children:[C.type==="consolidation"?o.jsx(hr,{style:{width:"1rem",height:"1rem",color:"#2563eb"}}):o.jsx("div",{style:{width:"1rem",height:"1rem",backgroundColor:"#d1d5db",borderRadius:"0.25rem"}}),o.jsx(rA,{children:C.id}),C.type==="consolidation"&&C.totalJobs&&o.jsxs(nA,{variant:"outline",children:[C.totalJobs," jobs"]})]})}),o.jsxs($o,{children:[o.jsx(oA,{children:C.template}),C.poNumber&&o.jsxs(iA,{children:["PO: ",C.poNumber]})]}),o.jsx($o,{children:o.jsx("span",{children:C.currentStage||"Stage "+(C.currentStage||1)})}),o.jsx($o,{children:o.jsxs(aA,{children:[T(C.status),k(C.status)]})}),o.jsx($o,{children:C.type==="consolidation"?o.jsxs(mv,{children:[o.jsxs("div",{children:[C.origin?.city," → ",C.destination?.city]}),o.jsx(sA,{children:C.totalWeight})]}):o.jsxs(mv,{children:[C.consolidationId&&o.jsxs(lA,{children:["Part of ",C.consolidationId]}),C.cargo?.description&&o.jsx("div",{children:C.cargo.description})]})}),o.jsx($o,{children:o.jsxs(cA,{children:[o.jsxs(Iu,{className:"view",variant:"outline",size:"sm",onClick:()=>P(C),children:[o.jsx(k0,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"View"]}),o.jsxs(Iu,{className:"edit",variant:"outline",size:"sm",children:[o.jsx(Pf,{style:{width:"0.75rem",height:"0.75rem",marginRight:"0.25rem"}}),"Edit"]}),C.status==="Completed"&&o.jsx(Iu,{className:"archive",variant:"outline",size:"sm",children:o.jsx(A5,{style:{width:"0.75rem",height:"0.75rem"}})})]})})]},C.id))})]})})]})]})})]})}const mA=m.div`
  padding: 0.75rem 1rem;
  margin: 0;
  font-size: 1rem;
  color: var(--foreground);
  border-bottom: 1px solid var(--border);
  background-color: var(--card);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.12s;
  &:hover {
    background-color: var(--muted);
  }
`,pA=m.div`
  max-height: 14rem;
  overflow-y: auto;
  transition: max-height 0.2s;
  background: inherit;
`,hA=m.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background: var(--card);
  border-bottom: 1px solid var(--border);
  align-items: center;
  justify-content: flex-end;
`,gA=m.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
`,vA=m.div`
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 2rem);
  margin-left: clamp(1rem, 3vw, 0);
  
  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 4rem; /* Account for mobile menu button */
  }
`,xA=m.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,yA=m.div`
  flex: 1;
`,wA=m.h1`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--foreground);
  margin: 0 0 0.5rem 0;
`,bA=m.p`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin: 0;
`;m.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1rem);
`;m(je)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  
  &:hover {
    opacity: 0.9;
  }
`;m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
`;const CA=m.div`
  flex: 1;
  padding: clamp(1rem, 3vw, 2rem);
  overflow: auto;
  background-color: var(--muted);
`,kA=m.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 4vw, 2rem);
`,SA=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 3vw, 1.5rem);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,jA=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,EA=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,PA=m.div`
  flex: 1;
`,RA=m.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--foreground);
  margin-bottom: 0.25rem;
`,TA=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
`,NA=m.div`
  width: clamp(2.5rem, 6vw, 3rem);
  height: clamp(2.5rem, 6vw, 3rem);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.primary {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  &.success {
    background-color: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }
  
  &.warning {
    background-color: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }
  
  &.purple {
    background-color: rgba(168, 85, 247, 0.1);
    color: #a855f7;
  }
`,IA=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 4vw, 2rem);
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`,AA=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
`,_A=m(We)`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
`,DA=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$A=m(ze)`
  padding: 0;
`,zA=m.div`
  display: flex;
  flex-direction: column;
`,LA=m.div`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--muted);
  }
`,OA=m.div`
  width: clamp(2rem, 5vw, 2.5rem);
  height: clamp(2rem, 5vw, 2.5rem);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &.created {
    background-color: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }
  
  &.updated {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  &.alert {
    background-color: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }
`,MA=m.div`
  flex: 1;
  min-width: 0;
`,FA=m.p`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  color: var(--foreground);
  margin: 0 0 0.25rem 0;
`,BA=m.p`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
`,HA=m.span`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  color: var(--muted-foreground);
`,WA=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
`,UA=m(We)`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
`,VA=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,GA=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,JA=m.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
`,YA=m(je)`
  width: 100%;
  justify-content: flex-start;
  padding: clamp(0.75rem, 2vw, 1rem);
  height: auto;
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
`,KA=m.div`
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: clamp(0.75rem, 2vw, 1rem);
  
  &.primary {
    background-color: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  
  &.success {
    background-color: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }
  
  &.purple {
    background-color: rgba(168, 85, 247, 0.1);
    color: #a855f7;
  }
`,qA=m.div`
  text-align: left;
  flex: 1;
`,QA=m.div`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin-bottom: 0.25rem;
`,XA=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  line-height: 1.3;
`,ZA=m.div`
  display: flex;
  gap: 1rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
  background-color: var(--card);
  flex-wrap: wrap;
`,e_=m.input`
  flex: 1;
  min-width: 150px;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  color: var(--foreground);
  background-color: var(--background);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`,t_=m.select`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  color: var(--foreground);
  background-color: var(--background);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;function r_(){const t=Qr(),[n,a]=y.useState(""),[s,c]=y.useState("all"),d=[{label:"Active Consolidations",value:"12",icon:hr,className:"primary"},{label:"Pending Actions",value:"7",icon:Cn,className:"warning"},{label:"Completed Jobs",value:"42",icon:C0,className:"success"},{label:"Total Revenue",value:"$284K",icon:_C,className:"purple"}],f=[{id:3,title:"New consolidation created",description:"CONS-789456 for Shanghai → Los Angeles route with 3 individual jobs",time:"2 hours ago",type:"created"},{id:2,title:"Job status updated",description:"JOB-123456 moved to 'Destination Handling' stage",time:"4 hours ago",type:"updated"},{id:1,title:"Document required",description:"Commercial Invoice needed for CONS-456789",time:"6 hours ago",type:"alert"},{id:4,title:"Consolidation completed",description:"CONS-234567 successfully delivered to customers",time:"1 day ago",type:"created"},{id:5,title:"Stage progress",description:"Multiple jobs advanced to 'Departure & Transit'",time:"2 days ago",type:"updated"}],p=[{title:"Create Consolidation",description:"Start a new freight consolidation process",icon:Jr,className:"primary",action:()=>t("/create")},{title:"View All Jobs",description:"Browse and manage your freight jobs",icon:kn,className:"success",action:()=>t("/jobs")},{title:"Vessels Table",description:"View current vessels information",icon:kf,className:"purple",action:()=>t("/vessels")}],g=C=>C,v=f.filter(C=>{const N=n===""||C.title.toLowerCase().includes(n.toLowerCase())||C.description.toLowerCase().includes(n.toLowerCase()),D=s==="all"||C.type===s;return N&&D}).reduce((C,N)=>(C[N.type]||(C[N.type]=[]),C[N.type].push(N),C),{}),w={created:"Created",updated:"Updated",alert:"Alerts"},S=Object.keys(v),[j,T]=y.useState(()=>S.reduce((C,N)=>({...C,[N]:!0}),{})),k=C=>{T(N=>({...N,[C]:!N[C]}))},P=()=>{T(S.reduce((C,N)=>({...C,[N]:!0}),{}))},I=()=>{T(S.reduce((C,N)=>({...C,[N]:!1}),{}))};return o.jsxs(gA,{children:[o.jsx(vA,{children:o.jsx(xA,{children:o.jsxs(yA,{children:[o.jsx(wA,{children:"Welcome back!"}),o.jsx(bA,{children:"Here's what's happening with your freight forwarding operations today."})]})})}),o.jsx(CA,{children:o.jsxs(kA,{children:[o.jsx(SA,{children:d.map((C,N)=>{const D=C.icon;return o.jsx(jA,{children:o.jsxs(EA,{children:[o.jsxs(PA,{children:[o.jsx(RA,{children:C.value}),o.jsx(TA,{children:C.label})]}),o.jsx(NA,{className:C.className,children:o.jsx(D,{style:{width:"1.5rem",height:"1.5rem"}})})]})},N)})}),o.jsxs(IA,{children:[o.jsxs(AA,{children:[o.jsx(_A,{children:o.jsxs(DA,{children:[o.jsx(N5,{style:{width:"1.25rem",height:"1.25rem"}}),"Recent Activity"]})}),o.jsxs($A,{children:[o.jsxs(ZA,{children:[o.jsx(e_,{type:"text",placeholder:"Search activities...",value:n,onChange:C=>a(C.target.value),"aria-label":"Search activities"}),o.jsxs(t_,{value:s,onChange:C=>c(C.target.value),"aria-label":"Filter activity type",children:[o.jsx("option",{value:"all",children:"All Types"}),o.jsx("option",{value:"created",children:"Created"}),o.jsx("option",{value:"updated",children:"Updated"}),o.jsx("option",{value:"alert",children:"Alerts"})]})]}),o.jsxs(hA,{children:[o.jsx(je,{size:"sm",variant:"outline",onClick:I,children:"Expand All"}),o.jsx(je,{size:"sm",variant:"outline",onClick:P,children:"Collapse All"})]}),o.jsx(zA,{children:Object.entries(v).map(([C,N])=>o.jsxs("div",{children:[o.jsxs(mA,{onClick:()=>k(C),"aria-expanded":!j[C],children:[o.jsxs("span",{children:[w[C]||C," (",N.length,")"]}),o.jsx("span",{style:{fontSize:"1.1em",opacity:.7},children:j[C]?"▶":"▼"})]}),!j[C]&&o.jsx(pA,{children:N.map(D=>o.jsxs(LA,{children:[o.jsxs(OA,{className:D.type,children:[D.type==="created"&&o.jsx(Jr,{style:{width:"1rem",height:"1rem"}}),D.type==="updated"&&o.jsx($5,{style:{width:"1rem",height:"1rem"}}),D.type==="alert"&&o.jsx(T0,{style:{width:"1rem",height:"1rem"}})]}),o.jsxs(MA,{children:[o.jsx(FA,{children:D.title}),o.jsx(BA,{children:D.description}),o.jsx(HA,{children:g(D.time)})]})]},D.id))})]},C))})]})]}),o.jsxs(WA,{children:[o.jsx(UA,{children:o.jsxs(VA,{children:[o.jsx(BC,{style:{width:"1.25rem",height:"1.25rem"}}),"Quick Actions"]})}),o.jsx(GA,{children:o.jsx(JA,{children:p.map((C,N)=>{const D=C.icon;return o.jsxs(YA,{variant:"outline",onClick:C.action,children:[o.jsx(KA,{className:C.className,children:o.jsx(D,{style:{width:"1rem",height:"1rem"}})}),o.jsxs(qA,{children:[o.jsx(QA,{children:C.title}),o.jsx(XA,{children:C.description})]})]},N)})})})]})]})]})})]})}const wy=y.createContext();function n_({children:t}){const[n,a]=y.useState(()=>{const p=localStorage.getItem("theme");return p||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});y.useEffect(()=>{const p=document.documentElement;p.classList.remove("light","dark"),p.classList.add(n),localStorage.setItem("theme",n)},[n]);const f={theme:n,toggleTheme:()=>{a(p=>p==="light"?"dark":"light")},setLightTheme:()=>a("light"),setDarkTheme:()=>a("dark"),isDark:n==="dark",isLight:n==="light"};return o.jsx(wy.Provider,{value:f,children:t})}function o_(){const t=y.useContext(wy);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t}const i_=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  border-radius: 50%;
  width: clamp(2.25rem, 6vw, 2.5rem);
  height: clamp(2.25rem, 6vw, 2.5rem);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--muted);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,a_=m.div`
  position: relative;
  width: clamp(1rem, 3vw, 1.25rem);
  height: clamp(1rem, 3vw, 1.25rem);
  display: flex;
  align-items: center;
  justify-content: center;
`,s_=m(TC)`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  transform: ${t=>t.$visible?"rotate(0deg) scale(1)":"rotate(90deg) scale(0)"};
  opacity: ${t=>t.$visible?1:0};
  color: #f59e0b;
`,l_=m(gC)`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  transform: ${t=>t.$visible?"rotate(0deg) scale(1)":"rotate(-90deg) scale(0)"};
  opacity: ${t=>t.$visible?1:0};
  color: #6366f1;
`;function c_({className:t,...n}){const{theme:a,toggleTheme:s}=o_(),c=a==="light";return o.jsx(i_,{variant:"ghost",size:"sm",onClick:s,className:t,title:`Switch to ${c?"dark":"light"} mode`,...n,children:o.jsxs(a_,{children:[o.jsx(s_,{$visible:c}),o.jsx(l_,{$visible:!c})]})})}function d_({isMobileOpen:t,onMobileToggle:n}){const[a,s]=y.useState(!1),c=qr(),d=Qr();y.useEffect(()=>{const F=()=>{s(window.innerWidth<768)};return F(),window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]),y.useEffect(()=>{const F=Q=>{a&&t&&!Q.target.closest("[data-sidebar]")&&n(!1)};return t&&document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}},[a,t,n]),y.useEffect(()=>(a&&t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[a,t]);const f=[{icon:dC,label:"Dashboard",path:"/"},{icon:L5,label:"Jobs",path:"/jobs"},{icon:R0,label:"Vessels",path:"/vessels"},{icon:kf,label:"Tracking",path:"/tracking"},{icon:Jn,label:"Settings",path:"/settings"}],g=(()=>{const F=c.pathname;return F==="/"?"/":F.startsWith("/jobs")||F.startsWith("/create")||F.startsWith("/consolidation")?"/jobs":F})(),x=F=>{d(F),a&&n(!1)},v={desktop:{position:"sticky",top:0,left:0,height:"100vh",width:"16rem",backgroundColor:"var(--sidebar)",borderRight:"1px solid var(--sidebar-border)",display:"flex",flexDirection:"column",zIndex:10,flexShrink:0},mobile:{position:"fixed",top:0,left:0,height:"100vh",width:"16rem",backgroundColor:"var(--sidebar)",borderRight:"1px solid var(--sidebar-border)",display:"flex",flexDirection:"column",zIndex:50,transform:t?"translateX(0)":"translateX(-100%)",transition:"transform 0.3s ease-in-out",boxShadow:t?"0 10px 25px rgba(0, 0, 0, 0.15)":"none"}},w={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:40,display:a&&t?"block":"none"},S={position:"fixed",top:"1rem",left:"1rem",zIndex:60,backgroundColor:"var(--primary)",color:"var(--primary-foreground)",border:"none",borderRadius:"0.5rem",width:"2.5rem",height:"2.5rem",display:a?"flex":"none",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.15)",transition:"all 0.2s ease"},j={padding:"1.5rem",borderBottom:"1px solid var(--sidebar-border)",backgroundColor:"var(--sidebar)"},T={display:"flex",alignItems:"center",gap:"0.75rem"},k={width:"2rem",height:"2rem",backgroundColor:"var(--sidebar-primary)",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center"},P={flex:1,padding:"1rem",backgroundColor:"var(--sidebar)",overflowY:"auto"},I={display:"flex",flexDirection:"column",gap:"0.25rem"},C=F=>({display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem 1rem",borderRadius:"0.5rem",textDecoration:"none",transition:"all 0.2s",cursor:"pointer",border:"1px solid transparent",fontSize:"1rem",fontWeight:"500",minHeight:"2.5rem",backgroundColor:F?"var(--sidebar-accent)":"transparent",color:F?"var(--sidebar-primary)":"var(--sidebar-accent-foreground)",borderColor:F?"var(--sidebar-ring)":"transparent"}),N={backgroundColor:"var(--sidebar-accent)",color:"var(--sidebar-foreground)"},D={padding:"1rem",borderTop:"1px solid var(--sidebar-border)",backgroundColor:"var(--sidebar)",display:"flex",flexDirection:"column",gap:"0.75rem"},H={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem"},W={fontSize:"0.75rem",color:"var(--sidebar-accent-foreground)",textAlign:"center",margin:0,opacity:.7,flex:1},O={position:"absolute",top:"1rem",right:"1rem",backgroundColor:"transparent",color:"var(--sidebar-foreground)",border:"none",padding:"0.25rem",width:"2rem",height:"2rem",borderRadius:"0.25rem",display:a?"flex":"none",alignItems:"center",justifyContent:"center",cursor:"pointer"};return o.jsxs(o.Fragment,{children:[o.jsx("button",{style:S,onClick:()=>n(!t),onMouseEnter:F=>{F.target.style.opacity="0.9"},onMouseLeave:F=>{F.target.style.opacity="1"},children:o.jsx(pC,{style:{width:"1.25rem",height:"1.25rem"}})}),o.jsx("div",{style:w,onClick:()=>n(!1)}),o.jsxs("aside",{"data-sidebar":!0,style:a?v.mobile:v.desktop,children:[o.jsx("button",{style:O,onClick:()=>n(!1),onMouseEnter:F=>{F.target.style.backgroundColor="var(--sidebar-accent)"},onMouseLeave:F=>{F.target.style.backgroundColor="transparent"},children:o.jsx(N0,{style:{width:"1.25rem",height:"1.25rem"}})}),o.jsx("div",{style:j,children:o.jsxs("div",{style:T,children:[o.jsx("div",{style:k,children:o.jsx(hr,{style:{width:"1.25rem",height:"1.25rem",color:"var(--sidebar-primary-foreground)"}})}),o.jsxs("div",{style:{minWidth:0},children:[o.jsx("h2",{style:{fontSize:"1.125rem",color:"var(--sidebar-foreground)",margin:0,fontWeight:"600"},children:"FFWD"}),o.jsx("p",{style:{fontSize:"0.75rem",color:"var(--sidebar-accent-foreground)",margin:0,opacity:.8},children:"Automation"})]})]})}),o.jsx("nav",{style:P,children:o.jsx("div",{style:I,children:f.map((F,Q)=>{const ae=F.path===g,xe=F.icon;return o.jsxs("div",{style:C(ae),onClick:()=>x(F.path),onMouseEnter:fe=>{ae||Object.assign(fe.target.style,N)},onMouseLeave:fe=>{ae||(fe.target.style.backgroundColor="transparent",fe.target.style.color="var(--sidebar-accent-foreground)")},children:[o.jsx(xe,{style:{width:"1.25rem",height:"1.25rem",color:ae?"var(--sidebar-primary)":"var(--sidebar-accent-foreground)"}}),o.jsx("span",{style:{minWidth:0},children:F.label})]},Q)})})}),o.jsx("div",{style:D,children:o.jsxs("div",{style:H,children:[o.jsx("p",{style:W,children:"FFWD Plus v0.0"}),o.jsx(c_,{})]})})]})]})}const by=y.createContext();function u_(){const t=y.useContext(by);if(!t)throw new Error("useJobs must be used within JobProvider");return t}function f_({children:t}){const[n,a]=y.useState(Vo),s=y.useCallback(async d=>{const f=await Pk(d);return a(p=>[f,...p]),f},[]),c=y.useCallback(async(d,f)=>{const p=await Rk(d,f);return a(g=>g.filter(x=>x.id!==d)),p},[]);return o.jsx(by.Provider,{value:{jobs:n,createJob:s,attachToConsolidation:c},children:t})}const m_=m.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  padding: clamp(1rem, 4vw, 2rem);
`,p_=m(Ae)`
  width: 100%;
  max-width: 48rem;
  border: 1px solid var(--border);
  background-color: var(--card);
`,mt=m.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Au=m.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,_u=m.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  color: var(--foreground);
`,Qs=m(Ae)`
  border: 1px solid #fde68a;
  background-color: var(--card);
  margin-bottom: 1.5rem;
`,Xs=m(We)`
  background-color: #fffbeb;
  border-bottom: 1px solid #fde68a;
  padding: 1rem 1.5rem;
`,Zs=m(Ue)`
  font-size: 1rem;
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,el=m(ze)`
  padding: 1.25rem 1.5rem;
`,tl=m.label`
  border: 2px dashed #fde68a;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  text-align: center;
  background: linear-gradient(to bottom, #fffbeb, var(--card));
  cursor: pointer;
  transition: background 0.2s;
  display: block;
  margin-bottom: 0.5rem;
  &:hover {
    background: linear-gradient(to bottom, #fef3c7, var(--card));
  }
`,rl=m.div`
  color: #d97706;
  font-size: 0.98rem;
  margin-bottom: 0.25rem;
`,nl=m(Fe)`
  display: none;
`,ol=m.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.95rem;
  color: var(--foreground);
`;function h_(){const t=Qr(),{createJob:n}=u_(),[a,s]=y.useState({status:"",poNumber:"",client:"",template:"",readyDate:"",shippingMethod:"",hazardous:!1,incoterm:"",origin:"",destination:"",supplier:"",consignee:"",loadingAddress:"",unloadingAddress:"",loadingDate:"",unloadingDate:"",originAgent:"",destinationAgent:""}),[c,d]=y.useState({commercialInvoice:[],packingList:[],purchaseOrder:[],proformaInvoice:[]}),f=(v,w)=>{s(S=>({...S,[v]:w}))},p=v=>{s(w=>({...w,[v]:!w[v]}))},g=(v,w)=>{d(S=>({...S,[v]:Array.from(w)}))},x=async v=>{v.preventDefault();try{const w=await n(a);t(`/job/${w.id}`)}catch(w){console.error("Failed to create job:",w)}};return o.jsx(m_,{children:o.jsxs(p_,{children:[o.jsx(We,{children:o.jsx(Ue,{children:"Create Standalone Job"})}),o.jsx(ze,{children:o.jsxs("form",{onSubmit:x,children:[o.jsxs(Au,{children:[o.jsxs(mt,{children:[o.jsx(Oe,{children:"Status"}),o.jsxs(Mt,{value:a.status,onValueChange:v=>f("status",v),required:!0,children:[o.jsx(Qt,{children:o.jsx(Ft,{placeholder:"Select Status"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"Pending",children:"Pending"}),o.jsx(ue,{value:"Convert-to-Job",children:"Convert to Job"}),o.jsx(ue,{value:"Cancelled",children:"Cancelled"})]})]})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"PO Number"}),o.jsx(Fe,{value:a.poNumber,onChange:v=>f("poNumber",v.target.value),required:!0})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Client"}),o.jsx(Fe,{value:a.client,onChange:v=>f("client",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Template"}),o.jsxs(Mt,{value:a.template,onValueChange:v=>f("template",v),children:[o.jsx(Qt,{children:o.jsx(Ft,{placeholder:"Select Template"})}),o.jsx(Bt,{children:ty.map(v=>o.jsx(ue,{value:v.name,children:v.name},v.id))})]})]})]}),o.jsx(_u,{children:"Shipment Details"}),o.jsxs(Au,{children:[o.jsxs(mt,{children:[o.jsx(Oe,{children:"Ready Date"}),o.jsx(Fe,{type:"date",value:a.readyDate,onChange:v=>f("readyDate",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Shipping Method"}),o.jsxs(Mt,{value:a.shippingMethod,onValueChange:v=>f("shippingMethod",v),children:[o.jsx(Qt,{children:o.jsx(Ft,{placeholder:"Select Shipping Method"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"Sea",children:"Sea"}),o.jsx(ue,{value:"Air",children:"Air"}),o.jsx(ue,{value:"Truck",children:"Truck"}),o.jsx(ue,{value:"Rail",children:"Rail"})]})]})]}),o.jsxs(mt,{style:{justifyContent:"flex-end"},children:[o.jsx(Oe,{children:"Hazardous Goods"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsx("input",{type:"checkbox",checked:a.hazardous,onChange:()=>p("hazardous"),id:"hazardous",style:{width:"1.1em",height:"1.1em"}}),o.jsx(Oe,{htmlFor:"hazardous",style:{margin:0,fontWeight:400},children:"Yes"})]})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Incoterm"}),o.jsxs(Mt,{value:a.incoterm,onValueChange:v=>f("incoterm",v),children:[o.jsx(Qt,{children:o.jsx(Ft,{placeholder:"Select Incoterm"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"fob",children:"FOB - Free on Board"}),o.jsx(ue,{value:"cif",children:"CIF - Cost, Insurance & Freight"}),o.jsx(ue,{value:"cfr",children:"CFR - Cost & Freight"}),o.jsx(ue,{value:"exw",children:"EXW - Ex Works"}),o.jsx(ue,{value:"fca",children:"FCA - Free Carrier"}),o.jsx(ue,{value:"cpt",children:"CPT - Carriage Paid To"}),o.jsx(ue,{value:"cip",children:"CIP - Carriage & Insurance Paid"}),o.jsx(ue,{value:"dap",children:"DAP - Delivered at Place"}),o.jsx(ue,{value:"dpu",children:"DPU - Delivered at Place Unloaded"}),o.jsx(ue,{value:"ddp",children:"DDP - Delivered Duty Paid"})]})]})]})]}),o.jsx(_u,{children:"Locations & Parties"}),o.jsxs(Au,{children:[o.jsxs(mt,{children:[o.jsx(Oe,{children:"Origin"}),o.jsx(Fe,{value:a.origin,onChange:v=>f("origin",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Destination"}),o.jsx(Fe,{value:a.destination,onChange:v=>f("destination",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Supplier"}),o.jsx(Fe,{value:a.supplier,onChange:v=>f("supplier",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Consignee"}),o.jsx(Fe,{value:a.consignee,onChange:v=>f("consignee",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Loading Address"}),o.jsx(Fe,{value:a.loadingAddress,onChange:v=>f("loadingAddress",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Unloading Address"}),o.jsx(Fe,{value:a.unloadingAddress,onChange:v=>f("unloadingAddress",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Loading Date"}),o.jsx(Fe,{type:"date",value:a.loadingDate,onChange:v=>f("loadingDate",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Unloading Date"}),o.jsx(Fe,{type:"date",value:a.unloadingDate,onChange:v=>f("unloadingDate",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Origin Agent"}),o.jsx(Fe,{value:a.originAgent,onChange:v=>f("originAgent",v.target.value)})]}),o.jsxs(mt,{children:[o.jsx(Oe,{children:"Destination Agent"}),o.jsx(Fe,{value:a.destinationAgent,onChange:v=>f("destinationAgent",v.target.value)})]})]}),o.jsx(_u,{children:"Document Uploads"}),o.jsxs(Qs,{children:[o.jsx(Xs,{children:o.jsx(Zs,{children:"Commercial Invoice"})}),o.jsxs(el,{children:[o.jsxs(tl,{children:[o.jsx(rl,{children:"Click or drag files here to upload"}),o.jsx(nl,{type:"file",multiple:!0,onChange:v=>g("commercialInvoice",v.target.files)}),o.jsx(Fe,{as:"span",tabIndex:-1,style:{display:"none"}})]}),c.commercialInvoice.length>0&&o.jsx(ol,{children:c.commercialInvoice.map((v,w)=>o.jsx("li",{children:v.name},w))})]})]}),o.jsxs(Qs,{children:[o.jsx(Xs,{children:o.jsx(Zs,{children:"Packing List"})}),o.jsxs(el,{children:[o.jsxs(tl,{children:[o.jsx(rl,{children:"Click or drag files here to upload"}),o.jsx(nl,{type:"file",multiple:!0,onChange:v=>g("packingList",v.target.files)}),o.jsx(Fe,{as:"span",tabIndex:-1,style:{display:"none"}})]}),c.packingList.length>0&&o.jsx(ol,{children:c.packingList.map((v,w)=>o.jsx("li",{children:v.name},w))})]})]}),o.jsxs(Qs,{children:[o.jsx(Xs,{children:o.jsx(Zs,{children:"Purchase Order"})}),o.jsxs(el,{children:[o.jsxs(tl,{children:[o.jsx(rl,{children:"Click or drag files here to upload"}),o.jsx(nl,{type:"file",multiple:!0,onChange:v=>g("purchaseOrder",v.target.files)}),o.jsx(Fe,{as:"span",tabIndex:-1,style:{display:"none"}})]}),c.purchaseOrder.length>0&&o.jsx(ol,{children:c.purchaseOrder.map((v,w)=>o.jsx("li",{children:v.name},w))})]})]}),o.jsxs(Qs,{children:[o.jsx(Xs,{children:o.jsx(Zs,{children:"Proforma Invoice"})}),o.jsxs(el,{children:[o.jsxs(tl,{children:[o.jsx(rl,{children:"Click or drag files here to upload"}),o.jsx(nl,{type:"file",multiple:!0,onChange:v=>g("proformaInvoice",v.target.files)}),o.jsx(Fe,{as:"span",tabIndex:-1,style:{display:"none"}})]}),c.proformaInvoice.length>0&&o.jsx(ol,{children:c.proformaInvoice.map((v,w)=>o.jsx("li",{children:v.name},w))})]})]}),o.jsxs("div",{style:{marginTop:"2rem",display:"flex",gap:"1rem"},children:[o.jsx(je,{type:"submit",className:"w-full bg-blue-600 text-white",children:"Create Job"}),o.jsx(je,{type:"button",variant:"outline",onClick:()=>t("/jobs"),className:"w-full",children:"Cancel"})]})]})})]})})}var ec="Dialog",[Cy,s8]=to(ec),[g_,Cr]=Cy(ec),ky=t=>{const{__scopeDialog:n,children:a,open:s,defaultOpen:c,onOpenChange:d,modal:f=!0}=t,p=y.useRef(null),g=y.useRef(null),[x,v]=Qn({prop:s,defaultProp:c??!1,onChange:d,caller:ec});return o.jsx(g_,{scope:n,triggerRef:p,contentRef:g,contentId:bn(),titleId:bn(),descriptionId:bn(),open:x,onOpenChange:v,onOpenToggle:y.useCallback(()=>v(w=>!w),[v]),modal:f,children:a})};ky.displayName=ec;var Sy="DialogTrigger",v_=y.forwardRef((t,n)=>{const{__scopeDialog:a,...s}=t,c=Cr(Sy,a),d=Ye(n,c.triggerRef);return o.jsx(Ie.button,{type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":Xf(c.open),...s,ref:d,onClick:Be(t.onClick,c.onOpenToggle)})});v_.displayName=Sy;var qf="DialogPortal",[x_,jy]=Cy(qf,{forceMount:void 0}),Ey=t=>{const{__scopeDialog:n,forceMount:a,children:s,container:c}=t,d=Cr(qf,n);return o.jsx(x_,{scope:n,forceMount:a,children:y.Children.map(s,f=>o.jsx(la,{present:a||d.open,children:o.jsx(Bf,{asChild:!0,container:c,children:f})}))})};Ey.displayName=qf;var Il="DialogOverlay",Py=y.forwardRef((t,n)=>{const a=jy(Il,t.__scopeDialog),{forceMount:s=a.forceMount,...c}=t,d=Cr(Il,t.__scopeDialog);return d.modal?o.jsx(la,{present:s||d.open,children:o.jsx(w_,{...c,ref:n})}):null});Py.displayName=Il;var y_=Go("DialogOverlay.RemoveScroll"),w_=y.forwardRef((t,n)=>{const{__scopeDialog:a,...s}=t,c=Cr(Il,a);return o.jsx(Hf,{as:y_,allowPinchZoom:!0,shards:[c.contentRef],children:o.jsx(Ie.div,{"data-state":Xf(c.open),...s,ref:n,style:{pointerEvents:"auto",...s.style}})})}),eo="DialogContent",Ry=y.forwardRef((t,n)=>{const a=jy(eo,t.__scopeDialog),{forceMount:s=a.forceMount,...c}=t,d=Cr(eo,t.__scopeDialog);return o.jsx(la,{present:s||d.open,children:d.modal?o.jsx(b_,{...c,ref:n}):o.jsx(C_,{...c,ref:n})})});Ry.displayName=eo;var b_=y.forwardRef((t,n)=>{const a=Cr(eo,t.__scopeDialog),s=y.useRef(null),c=Ye(n,a.contentRef,s);return y.useEffect(()=>{const d=s.current;if(d)return mx(d)},[]),o.jsx(Ty,{...t,ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Be(t.onCloseAutoFocus,d=>{d.preventDefault(),a.triggerRef.current?.focus()}),onPointerDownOutside:Be(t.onPointerDownOutside,d=>{const f=d.detail.originalEvent,p=f.button===0&&f.ctrlKey===!0;(f.button===2||p)&&d.preventDefault()}),onFocusOutside:Be(t.onFocusOutside,d=>d.preventDefault())})}),C_=y.forwardRef((t,n)=>{const a=Cr(eo,t.__scopeDialog),s=y.useRef(!1),c=y.useRef(!1);return o.jsx(Ty,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:d=>{t.onCloseAutoFocus?.(d),d.defaultPrevented||(s.current||a.triggerRef.current?.focus(),d.preventDefault()),s.current=!1,c.current=!1},onInteractOutside:d=>{t.onInteractOutside?.(d),d.defaultPrevented||(s.current=!0,d.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const f=d.target;a.triggerRef.current?.contains(f)&&d.preventDefault(),d.detail.originalEvent.type==="focusin"&&c.current&&d.preventDefault()}})}),Ty=y.forwardRef((t,n)=>{const{__scopeDialog:a,trapFocus:s,onOpenAutoFocus:c,onCloseAutoFocus:d,...f}=t,p=Cr(eo,a),g=y.useRef(null),x=Ye(n,g);return M0(),o.jsxs(o.Fragment,{children:[o.jsx(Af,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:c,onUnmountAutoFocus:d,children:o.jsx(If,{role:"dialog",id:p.contentId,"aria-describedby":p.descriptionId,"aria-labelledby":p.titleId,"data-state":Xf(p.open),...f,ref:x,onDismiss:()=>p.onOpenChange(!1)})}),o.jsxs(o.Fragment,{children:[o.jsx(k_,{titleId:p.titleId}),o.jsx(j_,{contentRef:g,descriptionId:p.descriptionId})]})]})}),Qf="DialogTitle",Ny=y.forwardRef((t,n)=>{const{__scopeDialog:a,...s}=t,c=Cr(Qf,a);return o.jsx(Ie.h2,{id:c.titleId,...s,ref:n})});Ny.displayName=Qf;var Iy="DialogDescription",Ay=y.forwardRef((t,n)=>{const{__scopeDialog:a,...s}=t,c=Cr(Iy,a);return o.jsx(Ie.p,{id:c.descriptionId,...s,ref:n})});Ay.displayName=Iy;var _y="DialogClose",Dy=y.forwardRef((t,n)=>{const{__scopeDialog:a,...s}=t,c=Cr(_y,a);return o.jsx(Ie.button,{type:"button",...s,ref:n,onClick:Be(t.onClick,()=>c.onOpenChange(!1))})});Dy.displayName=_y;function Xf(t){return t?"open":"closed"}var $y="DialogTitleWarning",[l8,zy]=Hk($y,{contentName:eo,titleName:Qf,docsSlug:"dialog"}),k_=({titleId:t})=>{const n=zy($y),a=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return y.useEffect(()=>{t&&(document.getElementById(t)||console.error(a))},[a,t]),null},S_="DialogDescriptionWarning",j_=({contentRef:t,descriptionId:n})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zy(S_).contentName}}.`;return y.useEffect(()=>{const c=t.current?.getAttribute("aria-describedby");n&&c&&(document.getElementById(n)||console.warn(s))},[s,t,n]),null},E_=ky,P_=Ey,R_=Py,T_=Ry,N_=Ny,I_=Ay,A_=Dy;function Ly(t){var n,a,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var c=t.length;for(n=0;n<c;n++)t[n]&&(a=Ly(t[n]))&&(s&&(s+=" "),s+=a)}else for(a in t)t[a]&&(s&&(s+=" "),s+=a);return s}function __(){for(var t,n,a=0,s="",c=arguments.length;a<c;a++)(t=arguments[a])&&(n=Ly(t))&&(s&&(s+=" "),s+=n);return s}const Zf="-",D_=t=>{const n=z_(t),{conflictingClassGroups:a,conflictingClassGroupModifiers:s}=t;return{getClassGroupId:f=>{const p=f.split(Zf);return p[0]===""&&p.length!==1&&p.shift(),Oy(p,n)||$_(f)},getConflictingClassGroupIds:(f,p)=>{const g=a[f]||[];return p&&s[f]?[...g,...s[f]]:g}}},Oy=(t,n)=>{if(t.length===0)return n.classGroupId;const a=t[0],s=n.nextPart.get(a),c=s?Oy(t.slice(1),s):void 0;if(c)return c;if(n.validators.length===0)return;const d=t.join(Zf);return n.validators.find(({validator:f})=>f(d))?.classGroupId},hv=/^\[(.+)\]$/,$_=t=>{if(hv.test(t)){const n=hv.exec(t)[1],a=n?.substring(0,n.indexOf(":"));if(a)return"arbitrary.."+a}},z_=t=>{const{theme:n,classGroups:a}=t,s={nextPart:new Map,validators:[]};for(const c in a)af(a[c],s,c,n);return s},af=(t,n,a,s)=>{t.forEach(c=>{if(typeof c=="string"){const d=c===""?n:gv(n,c);d.classGroupId=a;return}if(typeof c=="function"){if(L_(c)){af(c(s),n,a,s);return}n.validators.push({validator:c,classGroupId:a});return}Object.entries(c).forEach(([d,f])=>{af(f,gv(n,d),a,s)})})},gv=(t,n)=>{let a=t;return n.split(Zf).forEach(s=>{a.nextPart.has(s)||a.nextPart.set(s,{nextPart:new Map,validators:[]}),a=a.nextPart.get(s)}),a},L_=t=>t.isThemeGetter,O_=t=>{if(t<1)return{get:()=>{},set:()=>{}};let n=0,a=new Map,s=new Map;const c=(d,f)=>{a.set(d,f),n++,n>t&&(n=0,s=a,a=new Map)};return{get(d){let f=a.get(d);if(f!==void 0)return f;if((f=s.get(d))!==void 0)return c(d,f),f},set(d,f){a.has(d)?a.set(d,f):c(d,f)}}},sf="!",lf=":",M_=lf.length,F_=t=>{const{prefix:n,experimentalParseClassName:a}=t;let s=c=>{const d=[];let f=0,p=0,g=0,x;for(let T=0;T<c.length;T++){let k=c[T];if(f===0&&p===0){if(k===lf){d.push(c.slice(g,T)),g=T+M_;continue}if(k==="/"){x=T;continue}}k==="["?f++:k==="]"?f--:k==="("?p++:k===")"&&p--}const v=d.length===0?c:c.substring(g),w=B_(v),S=w!==v,j=x&&x>g?x-g:void 0;return{modifiers:d,hasImportantModifier:S,baseClassName:w,maybePostfixModifierPosition:j}};if(n){const c=n+lf,d=s;s=f=>f.startsWith(c)?d(f.substring(c.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:f,maybePostfixModifierPosition:void 0}}if(a){const c=s;s=d=>a({className:d,parseClassName:c})}return s},B_=t=>t.endsWith(sf)?t.substring(0,t.length-1):t.startsWith(sf)?t.substring(1):t,H_=t=>{const n=Object.fromEntries(t.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const c=[];let d=[];return s.forEach(f=>{f[0]==="["||n[f]?(c.push(...d.sort(),f),d=[]):d.push(f)}),c.push(...d.sort()),c}},W_=t=>({cache:O_(t.cacheSize),parseClassName:F_(t),sortModifiers:H_(t),...D_(t)}),U_=/\s+/,V_=(t,n)=>{const{parseClassName:a,getClassGroupId:s,getConflictingClassGroupIds:c,sortModifiers:d}=n,f=[],p=t.trim().split(U_);let g="";for(let x=p.length-1;x>=0;x-=1){const v=p[x],{isExternal:w,modifiers:S,hasImportantModifier:j,baseClassName:T,maybePostfixModifierPosition:k}=a(v);if(w){g=v+(g.length>0?" "+g:g);continue}let P=!!k,I=s(P?T.substring(0,k):T);if(!I){if(!P){g=v+(g.length>0?" "+g:g);continue}if(I=s(T),!I){g=v+(g.length>0?" "+g:g);continue}P=!1}const C=d(S).join(":"),N=j?C+sf:C,D=N+I;if(f.includes(D))continue;f.push(D);const H=c(I,P);for(let W=0;W<H.length;++W){const O=H[W];f.push(N+O)}g=v+(g.length>0?" "+g:g)}return g};function G_(){let t=0,n,a,s="";for(;t<arguments.length;)(n=arguments[t++])&&(a=My(n))&&(s&&(s+=" "),s+=a);return s}const My=t=>{if(typeof t=="string")return t;let n,a="";for(let s=0;s<t.length;s++)t[s]&&(n=My(t[s]))&&(a&&(a+=" "),a+=n);return a};function J_(t,...n){let a,s,c,d=f;function f(g){const x=n.reduce((v,w)=>w(v),t());return a=W_(x),s=a.cache.get,c=a.cache.set,d=p,p(g)}function p(g){const x=s(g);if(x)return x;const v=V_(g,a);return c(g,v),v}return function(){return d(G_.apply(null,arguments))}}const st=t=>{const n=a=>a[t]||[];return n.isThemeGetter=!0,n},Fy=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,By=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Y_=/^\d+\/\d+$/,K_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,q_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Q_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,X_=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Z_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,zo=t=>Y_.test(t),Pe=t=>!!t&&!Number.isNaN(Number(t)),xn=t=>!!t&&Number.isInteger(Number(t)),Du=t=>t.endsWith("%")&&Pe(t.slice(0,-1)),Wr=t=>K_.test(t),eD=()=>!0,tD=t=>q_.test(t)&&!Q_.test(t),Hy=()=>!1,rD=t=>X_.test(t),nD=t=>Z_.test(t),oD=t=>!oe(t)&&!ie(t),iD=t=>ti(t,Vy,Hy),oe=t=>Fy.test(t),Wn=t=>ti(t,Gy,tD),$u=t=>ti(t,dD,Pe),vv=t=>ti(t,Wy,Hy),aD=t=>ti(t,Uy,nD),il=t=>ti(t,Jy,rD),ie=t=>By.test(t),Ji=t=>ri(t,Gy),sD=t=>ri(t,uD),xv=t=>ri(t,Wy),lD=t=>ri(t,Vy),cD=t=>ri(t,Uy),al=t=>ri(t,Jy,!0),ti=(t,n,a)=>{const s=Fy.exec(t);return s?s[1]?n(s[1]):a(s[2]):!1},ri=(t,n,a=!1)=>{const s=By.exec(t);return s?s[1]?n(s[1]):a:!1},Wy=t=>t==="position"||t==="percentage",Uy=t=>t==="image"||t==="url",Vy=t=>t==="length"||t==="size"||t==="bg-size",Gy=t=>t==="length",dD=t=>t==="number",uD=t=>t==="family-name",Jy=t=>t==="shadow",fD=()=>{const t=st("color"),n=st("font"),a=st("text"),s=st("font-weight"),c=st("tracking"),d=st("leading"),f=st("breakpoint"),p=st("container"),g=st("spacing"),x=st("radius"),v=st("shadow"),w=st("inset-shadow"),S=st("text-shadow"),j=st("drop-shadow"),T=st("blur"),k=st("perspective"),P=st("aspect"),I=st("ease"),C=st("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],D=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],H=()=>[...D(),ie,oe],W=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],F=()=>[ie,oe,g],Q=()=>[zo,"full","auto",...F()],ae=()=>[xn,"none","subgrid",ie,oe],xe=()=>["auto",{span:["full",xn,ie,oe]},xn,ie,oe],fe=()=>[xn,"auto",ie,oe],ye=()=>["auto","min","max","fr",ie,oe],me=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Se=()=>["start","end","center","stretch","center-safe","end-safe"],se=()=>["auto",...F()],ee=()=>[zo,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...F()],$=()=>[t,ie,oe],K=()=>[...D(),xv,vv,{position:[ie,oe]}],Y=()=>["no-repeat",{repeat:["","x","y","space","round"]}],E=()=>["auto","cover","contain",lD,iD,{size:[ie,oe]}],B=()=>[Du,Ji,Wn],X=()=>["","none","full",x,ie,oe],te=()=>["",Pe,Ji,Wn],ve=()=>["solid","dashed","dotted","double"],we=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],G=()=>[Pe,Du,xv,vv],ce=()=>["","none",T,ie,oe],pe=()=>["none",Pe,ie,oe],Ce=()=>["none",Pe,ie,oe],Re=()=>[Pe,ie,oe],Ne=()=>[zo,"full",...F()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Wr],breakpoint:[Wr],color:[eD],container:[Wr],"drop-shadow":[Wr],ease:["in","out","in-out"],font:[oD],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Wr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Wr],shadow:[Wr],spacing:["px",Pe],text:[Wr],"text-shadow":[Wr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",zo,oe,ie,P]}],container:["container"],columns:[{columns:[Pe,oe,ie,p]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:H()}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Q()}],"inset-x":[{"inset-x":Q()}],"inset-y":[{"inset-y":Q()}],start:[{start:Q()}],end:[{end:Q()}],top:[{top:Q()}],right:[{right:Q()}],bottom:[{bottom:Q()}],left:[{left:Q()}],visibility:["visible","invisible","collapse"],z:[{z:[xn,"auto",ie,oe]}],basis:[{basis:[zo,"full","auto",p,...F()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Pe,zo,"auto","initial","none",oe]}],grow:[{grow:["",Pe,ie,oe]}],shrink:[{shrink:["",Pe,ie,oe]}],order:[{order:[xn,"first","last","none",ie,oe]}],"grid-cols":[{"grid-cols":ae()}],"col-start-end":[{col:xe()}],"col-start":[{"col-start":fe()}],"col-end":[{"col-end":fe()}],"grid-rows":[{"grid-rows":ae()}],"row-start-end":[{row:xe()}],"row-start":[{"row-start":fe()}],"row-end":[{"row-end":fe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ye()}],"auto-rows":[{"auto-rows":ye()}],gap:[{gap:F()}],"gap-x":[{"gap-x":F()}],"gap-y":[{"gap-y":F()}],"justify-content":[{justify:[...me(),"normal"]}],"justify-items":[{"justify-items":[...Se(),"normal"]}],"justify-self":[{"justify-self":["auto",...Se()]}],"align-content":[{content:["normal",...me()]}],"align-items":[{items:[...Se(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Se(),{baseline:["","last"]}]}],"place-content":[{"place-content":me()}],"place-items":[{"place-items":[...Se(),"baseline"]}],"place-self":[{"place-self":["auto",...Se()]}],p:[{p:F()}],px:[{px:F()}],py:[{py:F()}],ps:[{ps:F()}],pe:[{pe:F()}],pt:[{pt:F()}],pr:[{pr:F()}],pb:[{pb:F()}],pl:[{pl:F()}],m:[{m:se()}],mx:[{mx:se()}],my:[{my:se()}],ms:[{ms:se()}],me:[{me:se()}],mt:[{mt:se()}],mr:[{mr:se()}],mb:[{mb:se()}],ml:[{ml:se()}],"space-x":[{"space-x":F()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":F()}],"space-y-reverse":["space-y-reverse"],size:[{size:ee()}],w:[{w:[p,"screen",...ee()]}],"min-w":[{"min-w":[p,"screen","none",...ee()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[f]},...ee()]}],h:[{h:["screen","lh",...ee()]}],"min-h":[{"min-h":["screen","lh","none",...ee()]}],"max-h":[{"max-h":["screen","lh",...ee()]}],"font-size":[{text:["base",a,Ji,Wn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,ie,$u]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Du,oe]}],"font-family":[{font:[sD,oe,n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,ie,oe]}],"line-clamp":[{"line-clamp":[Pe,"none",ie,$u]}],leading:[{leading:[d,...F()]}],"list-image":[{"list-image":["none",ie,oe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ie,oe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ve(),"wavy"]}],"text-decoration-thickness":[{decoration:[Pe,"from-font","auto",ie,Wn]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[Pe,"auto",ie,oe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ie,oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ie,oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:Y()}],"bg-size":[{bg:E()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},xn,ie,oe],radial:["",ie,oe],conic:[xn,ie,oe]},cD,aD]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:B()}],"gradient-via-pos":[{via:B()}],"gradient-to-pos":[{to:B()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:X()}],"rounded-s":[{"rounded-s":X()}],"rounded-e":[{"rounded-e":X()}],"rounded-t":[{"rounded-t":X()}],"rounded-r":[{"rounded-r":X()}],"rounded-b":[{"rounded-b":X()}],"rounded-l":[{"rounded-l":X()}],"rounded-ss":[{"rounded-ss":X()}],"rounded-se":[{"rounded-se":X()}],"rounded-ee":[{"rounded-ee":X()}],"rounded-es":[{"rounded-es":X()}],"rounded-tl":[{"rounded-tl":X()}],"rounded-tr":[{"rounded-tr":X()}],"rounded-br":[{"rounded-br":X()}],"rounded-bl":[{"rounded-bl":X()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ve(),"hidden","none"]}],"divide-style":[{divide:[...ve(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...ve(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Pe,ie,oe]}],"outline-w":[{outline:["",Pe,Ji,Wn]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",v,al,il]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",w,al,il]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[Pe,Wn]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",S,al,il]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[Pe,ie,oe]}],"mix-blend":[{"mix-blend":[...we(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":we()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":G()}],"mask-image-linear-to-pos":[{"mask-linear-to":G()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":G()}],"mask-image-t-to-pos":[{"mask-t-to":G()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":G()}],"mask-image-r-to-pos":[{"mask-r-to":G()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":G()}],"mask-image-b-to-pos":[{"mask-b-to":G()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":G()}],"mask-image-l-to-pos":[{"mask-l-to":G()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":G()}],"mask-image-x-to-pos":[{"mask-x-to":G()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":G()}],"mask-image-y-to-pos":[{"mask-y-to":G()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[ie,oe]}],"mask-image-radial-from-pos":[{"mask-radial-from":G()}],"mask-image-radial-to-pos":[{"mask-radial-to":G()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":D()}],"mask-image-conic-pos":[{"mask-conic":[Pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":G()}],"mask-image-conic-to-pos":[{"mask-conic-to":G()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:Y()}],"mask-size":[{mask:E()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ie,oe]}],filter:[{filter:["","none",ie,oe]}],blur:[{blur:ce()}],brightness:[{brightness:[Pe,ie,oe]}],contrast:[{contrast:[Pe,ie,oe]}],"drop-shadow":[{"drop-shadow":["","none",j,al,il]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",Pe,ie,oe]}],"hue-rotate":[{"hue-rotate":[Pe,ie,oe]}],invert:[{invert:["",Pe,ie,oe]}],saturate:[{saturate:[Pe,ie,oe]}],sepia:[{sepia:["",Pe,ie,oe]}],"backdrop-filter":[{"backdrop-filter":["","none",ie,oe]}],"backdrop-blur":[{"backdrop-blur":ce()}],"backdrop-brightness":[{"backdrop-brightness":[Pe,ie,oe]}],"backdrop-contrast":[{"backdrop-contrast":[Pe,ie,oe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Pe,ie,oe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Pe,ie,oe]}],"backdrop-invert":[{"backdrop-invert":["",Pe,ie,oe]}],"backdrop-opacity":[{"backdrop-opacity":[Pe,ie,oe]}],"backdrop-saturate":[{"backdrop-saturate":[Pe,ie,oe]}],"backdrop-sepia":[{"backdrop-sepia":["",Pe,ie,oe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":F()}],"border-spacing-x":[{"border-spacing-x":F()}],"border-spacing-y":[{"border-spacing-y":F()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ie,oe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Pe,"initial",ie,oe]}],ease:[{ease:["linear","initial",I,ie,oe]}],delay:[{delay:[Pe,ie,oe]}],animate:[{animate:["none",C,ie,oe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[k,ie,oe]}],"perspective-origin":[{"perspective-origin":H()}],rotate:[{rotate:pe()}],"rotate-x":[{"rotate-x":pe()}],"rotate-y":[{"rotate-y":pe()}],"rotate-z":[{"rotate-z":pe()}],scale:[{scale:Ce()}],"scale-x":[{"scale-x":Ce()}],"scale-y":[{"scale-y":Ce()}],"scale-z":[{"scale-z":Ce()}],"scale-3d":["scale-3d"],skew:[{skew:Re()}],"skew-x":[{"skew-x":Re()}],"skew-y":[{"skew-y":Re()}],transform:[{transform:[ie,oe,"","none","gpu","cpu"]}],"transform-origin":[{origin:H()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ne()}],"translate-x":[{"translate-x":Ne()}],"translate-y":[{"translate-y":Ne()}],"translate-z":[{"translate-z":Ne()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ie,oe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ie,oe]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[Pe,Ji,Wn,$u]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},mD=J_(fD);function ni(...t){return mD(__(t))}function yv({...t}){return o.jsx(E_,{"data-slot":"dialog",...t})}function pD({...t}){return o.jsx(P_,{"data-slot":"dialog-portal",...t})}function hD({className:t,...n}){return o.jsx(R_,{"data-slot":"dialog-overlay",className:ni("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",t),...n})}function wv({className:t,children:n,...a}){return o.jsxs(pD,{"data-slot":"dialog-portal",children:[o.jsx(hD,{}),o.jsxs(T_,{"data-slot":"dialog-content",className:ni("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t),...a,children:[n,o.jsxs(A_,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[o.jsx(N0,{}),o.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function bv({className:t,...n}){return o.jsx("div",{"data-slot":"dialog-header",className:ni("flex flex-col gap-2 text-center sm:text-left",t),...n})}function Cv({className:t,...n}){return o.jsx("div",{"data-slot":"dialog-footer",className:ni("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t),...n})}function kv({className:t,...n}){return o.jsx(N_,{"data-slot":"dialog-title",className:ni("text-lg leading-none font-semibold",t),...n})}function Sv({className:t,...n}){return o.jsx(I_,{"data-slot":"dialog-description",className:ni("text-muted-foreground text-sm",t),...n})}let mr=[{id:1,name:"MSC TIANPING",imoNumber:"9305489",mmsiNumber:"636020495",flag:"Liberia",type:"Container Ship"},{id:2,name:"SYNERGY BUSAN",imoNumber:"9450571",mmsiNumber:"477189600",flag:"Hong Kong",type:"Container Ship"},{id:3,name:"VENETIA",imoNumber:"9400203",mmsiNumber:"255805657",flag:"Panama",type:"Container Ship"},{id:4,name:"CMA CGM DUTCH HARBOR",imoNumber:"9389409",mmsiNumber:"356509000",flag:"Panama",type:"Container Ship"},{id:5,name:"GOOD PROSPECT",imoNumber:"9321031",mmsiNumber:"565559000",flag:"Singapore",type:"Container Ship"},{id:6,name:"WIDE JULIET",imoNumber:"9698264",mmsiNumber:"538005752",flag:"Marshall Islands",type:"Cargo"},{id:7,name:"TRANSHIP",imoNumber:"0000000",mmsiNumber:"0000000",flag:"Unknown",type:"Unknown"},{id:8,name:"ZHONG GU JIANG SU",imoNumber:"9400148",mmsiNumber:"563831000",flag:"Singapore",type:"Container Ship"},{id:9,name:"BRIGHT",imoNumber:"9778399",mmsiNumber:"255806057",flag:"Portugal",type:"Container Ship"},{id:10,name:"SYNERGY OAKLAND",imoNumber:"9450583",mmsiNumber:"477192900",flag:"Hong Kong",type:"Container Ship"}];function gD(t){const n=mr.length>0?Math.max(...mr.map(s=>s.id)):0,a={...t,id:n+1};return mr.push(a),a}function vD(t,n){mr=mr.map(a=>a.id===t?{...a,...n}:a)}function xD(t){mr=mr.filter(n=>n.id!==t)}const yD=m.div`
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
`,wD=m.div`
  background-color: var(--card);
  border-bottom: 1px solid var(--border);
  padding: clamp(1rem, 3vw, 2rem);
  margin-left: clamp(1rem, 3vw, 0);
  
  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 4rem;
  }
`,bD=m.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,CD=m.div`
  flex: 1;
`,kD=m.h1`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: var(--foreground);
  margin: 0 0 0.5rem 0;
`,SD=m.p`
  color: var(--muted-foreground);
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  margin: 0;
`,jD=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1rem);
`,zu=m(je)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  
  &:hover {
    opacity: 0.9;
  }
  
  &.secondary {
    background-color: var(--secondary);
    border: 1px solid var(--border);
    color: var(--secondary-foreground);
    
    &:hover {
      background-color: var(--muted);
    }
  }
`,ED=m.div`
  flex: 1;
  padding: clamp(1rem, 3vw, 2rem);
  overflow: auto;
  background-color: var(--muted);
`,PD=m.div`
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 4vw, 2rem);
`,RD=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
`,TD=m(We)`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
`,ND=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ID=m(ze)`
  padding: clamp(1rem, 3vw, 1.5rem);
`,AD=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(0.75rem, 2vw, 1rem);
  
  @media (min-width: 640px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }
`,_D=m(Fe)`
  background-color: var(--input-background);
`,DD=m(Ae)`
  border: 1px solid var(--border);
  background-color: var(--card);
`,$D=m(We)`
  padding: clamp(1rem, 3vw, 1.5rem);
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,zD=m(Ue)`
  font-size: clamp(1rem, 3vw, 1.125rem);
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,LD=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
`,OD=m(ze)`
  padding: 0;
  overflow-x: auto;
`,MD=m.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`,FD=m.thead`
  background-color: var(--muted);
`,jv=m.tr`
  border-bottom: 1px solid var(--border);
  
  &:hover {
    background-color: var(--muted);
  }
`,Ev=m.th`
  padding: clamp(0.75rem, 2vw, 1rem);
  text-align: left;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
  position: relative;
  white-space: nowrap;
`,BD=m.td`
  padding: clamp(0.75rem, 2vw, 1rem);
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`,HD=m.td`
  padding: clamp(0.75rem, 2vw, 1rem);
  width: 120px;
`,WD=m.div`
  display: flex;
  gap: 0.5rem;
`,Pv=m(je)`
  width: 2rem;
  height: 2rem;
  padding: 0;
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
  
  &.danger:hover {
    background-color: var(--destructive);
    color: var(--destructive-foreground);
  }
`,UD=m.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-top: 1px solid var(--border);
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,VD=m.div`
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: var(--muted-foreground);
`,GD=m.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,sl=m(je)`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover:not(:disabled) {
    background-color: var(--muted);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,JD=m(je)`
  background-color: var(--secondary);
  border: 1px solid var(--border);
  color: var(--secondary-foreground);
  
  &:hover {
    background-color: var(--muted);
  }
`,YD=m(rt)`
  font-size: clamp(0.625rem, 1.5vw, 0.75rem);
  
  ${t=>{switch(t.$type){case"Container Ship":return`
          background-color: #dbeafe;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        `;case"Cargo":return`
          background-color: #fef3c7;
          color: #a16207;
          border: 1px solid #fde68a;
        `;default:return`
          background-color: var(--muted);
          color: var(--muted-foreground);
          border: 1px solid var(--border);
        `}}}
`,KD=[{key:"name",label:"Name",visible:!0},{key:"imoNumber",label:"IMO Number",visible:!0},{key:"mmsiNumber",label:"MMSI No",visible:!0},{key:"flag",label:"Flag",visible:!0},{key:"type",label:"Type",visible:!0}];function qD(){const[t,n]=y.useState([]);y.useEffect(()=>{n([...mr])},[]);const[a,s]=y.useState(KD),[c,d]=y.useState(""),[f,p]=y.useState(""),[g,x]=y.useState(""),[v,w]=y.useState(1),[S,j]=y.useState(10),[T,k]=y.useState(!1),[P,I]=y.useState(!1),[C,N]=y.useState(!1),[D,H]=y.useState(null),[W,O]=y.useState({name:"",imoNumber:"",mmsiNumber:"",flag:"",type:""}),F=y.useMemo(()=>[...new Set(t.map(E=>E.flag))].filter(Boolean).sort(),[t]),Q=y.useMemo(()=>[...new Set(t.map(E=>E.type))].filter(Boolean).sort(),[t]),ae=y.useMemo(()=>t.filter(E=>{const B=c===""||Object.values(E).some(ve=>ve.toString().toLowerCase().includes(c.toLowerCase())),X=f===""||E.flag===f,te=g===""||E.type===g;return B&&X&&te}),[t,c,f,g]),xe=Math.ceil(ae.length/S),fe=(v-1)*S,ye=ae.slice(fe,fe+S),me=y.useCallback(()=>{w(1)},[]),Se=()=>{O({name:"",imoNumber:"",mmsiNumber:"",flag:"",type:""}),k(!0)},se=E=>{H(E),O(E),I(!0)},ee=E=>{xD(E),n([...mr]),Qi.success("Vessel deleted successfully")},$=()=>{D?(vD(D.id,W),n([...mr]),Qi.success("Vessel updated successfully"),I(!1)):(gD(W),n([...mr]),Qi.success("Vessel added successfully"),k(!1)),H(null),O({name:"",imoNumber:"",mmsiNumber:"",flag:"",type:""})},K=E=>{s(B=>B.map(X=>X.key===E?{...X,visible:!X.visible}:X))},Y=a.filter(E=>E.visible);return o.jsxs(yD,{children:[o.jsx(wD,{children:o.jsxs(bD,{children:[o.jsxs(CD,{children:[o.jsx(kD,{children:"Vessels"}),o.jsx(SD,{children:"Manage and track vessel information for your freight forwarding operations."})]}),o.jsxs(jD,{children:[o.jsxs(zu,{onClick:Se,children:[o.jsx(Jr,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Add Vessel"]}),o.jsxs(zu,{className:"secondary",children:[o.jsx(Yn,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Import"]}),o.jsxs(zu,{className:"secondary",children:[o.jsx(tC,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Export"]})]})]})}),o.jsx(ED,{children:o.jsxs(PD,{children:[o.jsxs(RD,{children:[o.jsx(TD,{children:o.jsxs(ND,{children:[o.jsx(S0,{style:{width:"1.25rem",height:"1.25rem"}}),"Search & Filters"]})}),o.jsx(ID,{children:o.jsxs(AD,{children:[o.jsxs("div",{children:[o.jsx(Oe,{htmlFor:"search",children:"Search"}),o.jsx(_D,{id:"search",placeholder:"Search vessels by name, IMO, MMSI, flag, or type...",value:c,onChange:E=>{d(E.target.value),me()}})]}),o.jsxs("div",{children:[o.jsx(Oe,{children:"Flag"}),o.jsxs(Mt,{value:f===""?"all":f,onValueChange:E=>{p(E==="all"?"":E),me()},children:[o.jsx(Qt,{children:o.jsx(Ft,{placeholder:"All flags"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"all",children:"All flags"}),F.map(E=>o.jsx(ue,{value:E,children:E},E))]})]})]}),o.jsxs("div",{children:[o.jsx(Oe,{children:"Type"}),o.jsxs(Mt,{value:g===""?"all":g,onValueChange:E=>{x(E==="all"?"":E),me()},children:[o.jsx(Qt,{children:o.jsx(Ft,{placeholder:"All types"})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"all",children:"All types"}),Q.map(E=>o.jsx(ue,{value:E,children:E},E))]})]})]})]})})]}),o.jsxs(DD,{children:[o.jsxs($D,{children:[o.jsxs(zD,{children:[o.jsx(R0,{style:{width:"1.25rem",height:"1.25rem"}}),"Vessel Registry (",ae.length," vessels)"]}),o.jsxs(LD,{children:[o.jsxs(JD,{variant:"outline",onClick:()=>N(!0),children:[o.jsx(Jn,{style:{width:"1rem",height:"1rem",marginRight:"0.5rem"}}),"Columns"]}),o.jsxs(Mt,{value:S.toString(),onValueChange:E=>{j(parseInt(E)),w(1)},children:[o.jsx(Qt,{style:{width:"120px"},children:o.jsx(Ft,{})}),o.jsxs(Bt,{children:[o.jsx(ue,{value:"5",children:"5 per page"}),o.jsx(ue,{value:"10",children:"10 per page"}),o.jsx(ue,{value:"25",children:"25 per page"}),o.jsx(ue,{value:"50",children:"50 per page"})]})]})]})]}),o.jsx(OD,{children:o.jsxs(MD,{children:[o.jsx(FD,{children:o.jsxs(jv,{children:[Y.map(E=>o.jsx(Ev,{children:E.label},E.key)),o.jsx(Ev,{children:"Actions"})]})}),o.jsx("tbody",{children:ye.map(E=>o.jsxs(jv,{children:[Y.map(B=>o.jsx(BD,{children:B.key==="type"?o.jsx(YD,{$type:E[B.key],children:E[B.key]}):E[B.key]},B.key)),o.jsx(HD,{children:o.jsxs(WD,{children:[o.jsx(Pv,{variant:"outline",size:"sm",onClick:()=>se(E),children:o.jsx(wC,{style:{width:"0.875rem",height:"0.875rem"}})}),o.jsx(Pv,{variant:"outline",size:"sm",className:"danger",onClick:()=>ee(E.id),children:o.jsx(IC,{style:{width:"0.875rem",height:"0.875rem"}})})]})})]},E.id))})]})}),o.jsxs(UD,{children:[o.jsxs(VD,{children:["Showing ",fe+1," to ",Math.min(fe+S,ae.length)," of ",ae.length," vessels"]}),o.jsxs(GD,{children:[o.jsx(sl,{onClick:()=>w(1),disabled:v===1,children:o.jsx(J5,{style:{width:"1rem",height:"1rem"}})}),o.jsx(sl,{onClick:()=>w(E=>Math.max(E-1,1)),disabled:v===1,children:o.jsx(jf,{style:{width:"1rem",height:"1rem"}})}),o.jsxs("span",{style:{color:"var(--muted-foreground)",fontSize:"0.875rem"},children:["Page ",v," of ",xe]}),o.jsx(sl,{onClick:()=>w(E=>Math.min(E+1,xe)),disabled:v===xe,children:o.jsx(y0,{style:{width:"1rem",height:"1rem"}})}),o.jsx(sl,{onClick:()=>w(xe),disabled:v===xe,children:o.jsx(K5,{style:{width:"1rem",height:"1rem"}})})]})]})]})]})}),o.jsx(yv,{open:T||P,onOpenChange:E=>{k(!1),I(!1),E||(H(null),O({name:"",imoNumber:"",mmsiNumber:"",flag:"",type:""}))},children:o.jsxs(wv,{style:{maxWidth:"32rem"},children:[o.jsxs(bv,{children:[o.jsx(kv,{children:D?"Edit Vessel":"Add New Vessel"}),o.jsx(Sv,{children:D?"Update the vessel information below.":"Enter the vessel information below."})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsxs("div",{children:[o.jsx(Oe,{htmlFor:"vessel-name",children:"Name"}),o.jsx(Fe,{id:"vessel-name",value:W.name,onChange:E=>O(B=>({...B,name:E.target.value})),placeholder:"Enter vessel name"})]}),o.jsxs("div",{children:[o.jsx(Oe,{htmlFor:"imo-number",children:"IMO Number"}),o.jsx(Fe,{id:"imo-number",value:W.imoNumber,onChange:E=>O(B=>({...B,imoNumber:E.target.value})),placeholder:"Enter IMO number"})]}),o.jsxs("div",{children:[o.jsx(Oe,{htmlFor:"mmsi-number",children:"MMSI Number"}),o.jsx(Fe,{id:"mmsi-number",value:W.mmsiNumber,onChange:E=>O(B=>({...B,mmsiNumber:E.target.value})),placeholder:"Enter MMSI number"})]}),o.jsxs("div",{children:[o.jsx(Oe,{htmlFor:"flag",children:"Flag"}),o.jsx(Fe,{id:"flag",value:W.flag,onChange:E=>O(B=>({...B,flag:E.target.value})),placeholder:"Enter flag state"})]}),o.jsxs("div",{children:[o.jsx(Oe,{htmlFor:"type",children:"Type"}),o.jsx(Fe,{id:"type",value:W.type,onChange:E=>O(B=>({...B,type:E.target.value})),placeholder:"Enter vessel type"})]})]}),o.jsxs(Cv,{children:[o.jsx(je,{variant:"outline",onClick:()=>{k(!1),I(!1),H(null),O({name:"",imoNumber:"",mmsiNumber:"",flag:"",type:""})},children:"Cancel"}),o.jsx(je,{onClick:$,children:D?"Save Changes":"Add Vessel"})]})]})}),o.jsx(yv,{open:C,onOpenChange:N,children:o.jsxs(wv,{style:{maxWidth:"24rem"},children:[o.jsxs(bv,{children:[o.jsx(kv,{children:"Manage Columns"}),o.jsx(Sv,{children:"Choose which columns to display in the table."})]}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:a.map(E=>o.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:o.jsxs("button",{onClick:()=>K(E.key),style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"none",border:"none",cursor:"pointer",padding:"0.5rem",borderRadius:"0.25rem",color:"var(--foreground)"},children:[E.visible?o.jsx(k0,{style:{width:"1rem",height:"1rem",color:"var(--primary)"}}):o.jsx(oC,{style:{width:"1rem",height:"1rem",color:"var(--muted-foreground)"}}),o.jsx("span",{style:{fontSize:"0.875rem"},children:E.label})]})},E.key))}),o.jsx(Cv,{children:o.jsx(je,{onClick:()=>N(!1),children:"Done"})})]})})]})}const QD=m.div`
  border: 1px solid #d1d5db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
`,XD=({mmsi:t="",mapStyle:n="simple",showTrack:a="",showInfo:s="",fleet:c="",lat:d="",lng:f="",zoom:p="",showNames:g="1",scrollWheel:x="1",showMenu:v="0"})=>{const w=y.useRef(null);return y.useEffect(()=>w.current?(window.mst_width="100%",window.mst_height="100%",window.mst_border="0",window.mst_mmsi=t,window.mst_maptype=n,window.mst_showtrack=a,window.mst_showinfo=s,window.mst_fleet=c,window.mst_lat=d,window.mst_lng=f,window.mst_zoom=p,window.mst_shownames=g,window.mst_scrollwheel=x,window.mst_showmenu=v,setTimeout(()=>{if(!document.getElementById("myshiptrackingscript")){const j=document.createElement("script");j.id="myshiptrackingscript",j.src="https://www.myshiptracking.com/js/widgetApi.js",j.async=!0,j.defer=!0,w.current.appendChild(j),console.log("📦 Script appended to container")}},0),()=>{console.log("Cleanup running");const j=document.getElementById("myshiptrackingscript");j&&j.parentNode&&j.parentNode.removeChild(j),w.current&&(w.current.innerHTML="")}):void 0,[t,n,a,s,c,d,f,p,g,x,v]),o.jsx(QD,{id:"myshiptracking",ref:w})},ZD=m.div`
  display: flex;
  flex-direction: column;
`,e8=m.h1`
  margin-top: 2%;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #1f2937;
`,t8=()=>o.jsxs(ZD,{children:[o.jsx(e8,{children:"Ship Tracking"}),o.jsx(XD,{mmsi:"477192900",showTrack:"true",showInfo:"true"})]});function r8(){const[t,n]=y.useState(!0);return o.jsxs("div",{style:{display:"flex",minHeight:"100vh",backgroundColor:"var(--background)",color:"var(--foreground)"},children:[o.jsx(d_,{isMobileOpen:t,onMobileToggle:n}),o.jsx("main",{style:{flex:1,minWidth:0,marginLeft:0},children:o.jsxs(Wb,{children:[o.jsx(ur,{path:"/",element:o.jsx(r_,{})}),o.jsx(ur,{path:"/jobs",element:o.jsx(fA,{})}),o.jsx(ur,{path:"/create",element:o.jsx(r4,{})}),o.jsx(ur,{path:"/consolidation/:id",element:o.jsx(rN,{})}),o.jsx(ur,{path:"/consolidation/:consolidationId/job/:jobId",element:o.jsx(dv,{})}),o.jsx(ur,{path:"/job/:jobId",element:o.jsx(dv,{})}),o.jsx(ur,{path:"/vessels",element:o.jsx(qD,{})}),o.jsx(ur,{path:"/job/create",element:o.jsx(h_,{})}),o.jsx(ur,{path:"/tracking",element:o.jsx(t8,{})}),o.jsx(ur,{path:"*",element:o.jsx(Bb,{to:"/",replace:!0})})]})})]})}function n8(){return o.jsx(n_,{children:o.jsx(Tk,{children:o.jsx(f_,{children:o.jsx(f2,{basename:"/FFWD-frontend",children:o.jsx(r8,{})})})})})}Xw.createRoot(document.getElementById("root")).render(o.jsx(n8,{}));
