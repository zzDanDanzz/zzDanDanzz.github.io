(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(2957)}])},2957:function(a,b,c){"use strict";c.r(b);var d=c(1799),e=c(5893);c(472);var f=c(4411),g=function(a){var b=a.children,c=(0,f.Z)(function(a){return a.pickedLang});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"bg-zinc-800 max-w-xl mx-auto min-h-full md:mt-10 md:rounded-3xl ".concat("fa"===c?"persian":""),dir:"en"===c?"ltr":"rtl",id:"main-container",children:b}),(0,e.jsx)("div",{className:"bg-gray-900 hidden w-full h-10 md:block"})]})};b.default=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsx)(g,{children:(0,e.jsx)(b,(0,d.Z)({},c))})}},4411:function(a,b,c){"use strict";c.d(b,{Z:function(){return k}});let d=a=>{let b,c=new Set,d=(a,d)=>{let e="function"==typeof a?a(b):a;if(e!==b){let f=b;b=(null!=d?d:"object"!=typeof e)?e:Object.assign({},b,e),c.forEach(a=>a(b,f))}},e=()=>b,f=a=>(c.add(a),()=>c.delete(a)),g=()=>c.clear(),h={setState:d,getState:e,subscribe:f,destroy:g};return b=a(d,e,h),h},e=a=>a?d(a):d;var f=c(7294),g=c(2798);let{useSyncExternalStoreWithSelector:h}=g,i=a=>{let b="function"==typeof a?e(a):a,c=(a,c)=>(function(a,b=a.getState,c){let d=h(a.subscribe,a.getState,a.getServerState||a.getState,b,c);return(0,f.useDebugValue)(d),d})(b,a,c);return Object.assign(c,b),c};var j,k=(j?i(j):i)(function(a){return{pickedLang:"en",setPickedLang:function(b){a(function(){return{pickedLang:b}})}}})},472:function(){},3250:function(a,b,c){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d=c(7294),e="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},f=d.useState,g=d.useEffect,h=d.useLayoutEffect,i=d.useDebugValue;function j(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!e(a,c)}catch(d){return!0}}function k(a,b){return b()}var l="undefined"==typeof window|| void 0===window.document|| void 0===window.document.createElement?k:function(a,b){var c=b(),d=f({inst:{value:c,getSnapshot:b}}),e=d[0].inst,k=d[1];return h(function(){e.value=c,e.getSnapshot=b,j(e)&&k({inst:e})},[a,c,b]),g(function(){return j(e)&&k({inst:e}),a(function(){j(e)&&k({inst:e})})},[a]),i(c),c};b.useSyncExternalStore=void 0!==d.useSyncExternalStore?d.useSyncExternalStore:l},139:function(a,b,c){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d=c(7294),e=c(1688),f="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},g=e.useSyncExternalStore,h=d.useRef,i=d.useEffect,j=d.useMemo,k=d.useDebugValue;b.useSyncExternalStoreWithSelector=function(a,b,c,d,e){var l=h(null);if(null===l.current){var m={hasValue:!1,value:null};l.current=m}else m=l.current;l=j(function(){function a(a){if(!i){if(i=!0,g=a,a=d(a),void 0!==e&&m.hasValue){var b=m.value;if(e(b,a))return h=b}return h=a}if(b=h,f(g,a))return b;var c=d(a);return void 0!==e&&e(b,c)?b:(g=a,h=c)}var g,h,i=!1,j=void 0===c?null:c;return[function(){return a(b())},null===j?void 0:function(){return a(j())}]},[b,c,d,e]);var n=g(a,l[0],l[1]);return i(function(){m.hasValue=!0,m.value=n},[n]),k(n),n}},1688:function(a,b,c){"use strict";a.exports=c(3250)},2798:function(a,b,c){"use strict";a.exports=c(139)},1799:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},e=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),e.forEach(function(b){d(a,b,c[b])})}return a}c.d(b,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])