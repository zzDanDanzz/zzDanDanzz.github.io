(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{296:function(a){function b(a,b,c){function d(){var j=Date.now()-h;j<b&&j>=0?e=setTimeout(d,b-j):(e=null,c||(i=a.apply(g,f),g=f=null))}null==b&&(b=100);var e,f,g,h,i,j=function(){g=this,f=arguments,h=Date.now();var j=c&&!e;return e||(e=setTimeout(d,b)),j&&(i=a.apply(g,f),g=f=null),i};return j.clear=function(){e&&(clearTimeout(e),e=null)},j.flush=function(){e&&(i=a.apply(g,f),g=f=null,clearTimeout(e),e=null)},j}b.debounce=b,a.exports=b},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},9008:function(a,b,c){a.exports=c(5443)},1664:function(a,b,c){a.exports=c(8418)},3460:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(7294),e=c(296),f=c.n(e);function g(a){let{debounce:b,scroll:c,polyfill:e,offsetSize:g}=void 0===a?{debounce:0,scroll:!1,offsetSize:!1}:a,k=e||("undefined"==typeof window?class{}:window.ResizeObserver);if(!k)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[m,n]=(0,d.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),o=(0,d.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:m}),p=b?"number"==typeof b?b:b.scroll:null,q=b?"number"==typeof b?b:b.resize:null,r=(0,d.useRef)(!1);(0,d.useEffect)(()=>(r.current=!0,()=>void(r.current=!1)));let[s,t,u]=(0,d.useMemo)(()=>{let a=()=>{if(!o.current.element)return;let{left:a,top:b,width:c,height:d,bottom:e,right:f,x:h,y:i}=o.current.element.getBoundingClientRect(),j={left:a,top:b,width:c,height:d,bottom:e,right:f,x:h,y:i};o.current.element instanceof HTMLElement&&g&&(j.height=o.current.element.offsetHeight,j.width=o.current.element.offsetWidth),Object.freeze(j),r.current&&!l(o.current.lastBounds,j)&&n(o.current.lastBounds=j)};return[a,q?f()(a,q):a,p?f()(a,p):a]},[n,g,p,q]);function v(){o.current.scrollContainers&&(o.current.scrollContainers.forEach(a=>a.removeEventListener("scroll",u,!0)),o.current.scrollContainers=null),o.current.resizeObserver&&(o.current.resizeObserver.disconnect(),o.current.resizeObserver=null)}function w(){o.current.element&&(o.current.resizeObserver=new k(u),o.current.resizeObserver.observe(o.current.element),c&&o.current.scrollContainers&&o.current.scrollContainers.forEach(a=>a.addEventListener("scroll",u,{capture:!0,passive:!0})))}let x=a=>{a&&a!==o.current.element&&(v(),o.current.element=a,o.current.scrollContainers=j(a),w())};return i(u,Boolean(c)),h(t),(0,d.useEffect)(()=>{v(),w()},[c,u,t]),(0,d.useEffect)(()=>v,[]),[x,m,s]}function h(a){(0,d.useEffect)(()=>{let b=a;return window.addEventListener("resize",b),()=>void window.removeEventListener("resize",b)},[a])}function i(a,b){(0,d.useEffect)(()=>{if(b){let c=a;return window.addEventListener("scroll",c,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",c,!0)}},[a,b])}function j(a){let b=[];if(!a||a===document.body)return b;let{overflow:c,overflowX:d,overflowY:e}=window.getComputedStyle(a);return[c,d,e].some(a=>"auto"===a||"scroll"===a)&&b.push(a),[...b,...j(a.parentElement)]}let k=["x","y","top","bottom","left","right","width","height"],l=(a,b)=>k.every(c=>a[c]===b[c])},2847:function(a,b,c){"use strict";var d=c(7294);let e=d.forwardRef(function(a,b){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:b},a),d.createElement("path",{fillRule:"evenodd",d:"M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z",clipRule:"evenodd"}))});b.Z=e},9396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})},603:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a,b)||function(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(b,{Z:function(){return e}})},1351:function(a,b,c){"use strict";function d(a){throw a}c.d(b,{Z:function(){return d}})}}])