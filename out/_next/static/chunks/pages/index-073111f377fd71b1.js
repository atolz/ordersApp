(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),i=r(387),s=r(7190);var c={};function u(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=n(l.resolveHref(o,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?l.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,x=e.shallow,v=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var y=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,g=n(s.useIntersection({rootMargin:"200px"}),2),j=g[0],N=g[1],w=a.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);a.default.useEffect((function(){var e=N&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,n=c[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(o,d,p,{locale:t})}),[p,d,N,b,r,o]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:i}))}(e,o,d,p,h,x,v,b)},onMouseEnter:function(e){l.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,_=o&&o.isLocaleDomain&&l.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);k.href=_||l.addBasePath(l.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,s=o.useRef(),c=n(o.useState(!1),2),u=c[0],f=c[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||u||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return o.useEffect((function(){if(!l&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var i=new Map},1926:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(7294),r(1664));t.default=function(e){return"blue"==e.color?(0,n.jsx)(o.default,{href:{pathname:e.mylink},children:(0,n.jsx)("div",{className:"border-1 h-14 rounded-2xl border-blue-400 px-5 text-blue-400 flex items-center justify-center cursor-pointer w-full font-semibold",children:e.text})}):(0,n.jsx)(o.default,{href:{pathname:e.mylink},children:(0,n.jsx)("div",{className:"border-1 h-14 rounded-2xl border-red-400 px-5 text-red-400 flex items-center justify-center cursor-pointer w-full font-semibold",children:e.text})})}},2138:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);t.default=function(e){return(0,n.jsxs)("div",{className:"flex py-3 pl-4 pr-6 rounded-xl shadow-md mb-4 items-center",children:[(0,n.jsx)("img",{className:"w-32 h-32 mr-10 object-cover rounded-lg",src:e.img}),(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:e.name}),(0,n.jsxs)("p",{className:"text-blue-700 mb-8 font-bold ",children:["USD ",e.price]}),(0,n.jsxs)("p",{className:"text-gray-600 font-bold",children:[e.color," ",(0,n.jsx)("br",{})," X ",e.amt]}),(0,n.jsx)("p",{className:"flex justify-end text-gray-600 italic ml-auto",children:e.status})]})]})}},6193:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);t.default=function(e){return(0,n.jsx)("div",{className:"mr-6 rounded-full h-14 px-9 border text-xl flex items-center justify-center cursor-pointer",children:e.text})}},2892:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(7294),r(6193));t.default=function(){return(0,n.jsx)("div",{className:"flex overflow-x-auto mb-4",children:["All","Paid","Shipped"].map((function(e,t){return(0,n.jsx)(o.default,{text:e},t)}))})}},3678:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294),a=r(2138),l=r(2892),i=r(1926);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(){return(0,n.jsxs)("div",{className:"h-screen px-4",children:[(0,n.jsx)("header",{className:"h-28 flex items-center",children:(0,n.jsx)("i",{className:"bi bi-list text-5xl"})}),(0,n.jsx)("h1",{className:"text-4xl font-bold mb-8",children:"My Orders"}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(l.default,{}),[{id:"86573",products:[{name:"Phantom X",price:"888",amt:"1",color:"Slate black",status:"Packing",img:"https://kshopey.com/pub/media/iphone-13_2.jpg"},{name:"Nokia",price:"555",amt:"3",color:"Blue",status:"Processing",img:"https://thumbor.forbes.com/thumbor/711x384/https://blogs-images.forbes.com/kevinmurnane/files/2019/04/Header_Samsung.jpg?width=960"}]},{id:"984563",products:[{name:"Sony",price:"777",amt:"2",color:"Slate orange",status:"Packing",img:"https://5.imimg.com/data5/CN/LJ/EL/SELLER-17644043/apple-iphone-xr-mobile-phone-250x250.jpg"},{name:"Nokia",price:"666",amt:"1",color:"Wine",status:"Delivered",img:"https://kshopey.com/pub/media/iphone-13_2.jpg"}]}].map((function(e,t){return(0,n.jsxs)("div",{className:"mb-5",children:[(0,n.jsxs)("h2",{className:"text-gray-900 font-bold text-2xl mb-3",children:["Order ID #",e.id]}),(0,n.jsx)("div",{children:e.products.map((function(e,t){return(0,o.createElement)(a.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},e,{key:t}))}))}),(0,n.jsxs)("div",{className:"flex gap-5 items-center mt-5",children:[(0,n.jsx)(i.default,{text:"Messages(2)",mylink:"/messages",color:"blue"}),(0,n.jsx)(i.default,{text:"Order Details",mylink:"/details",color:"red"})]})]},t)}))]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);