(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[354],{4021:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/details",function(){return r(5126)}])},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,s=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){s=!0,a=i}finally{try{n||null==c.return||c.return()}finally{if(s)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var s,a=(s=r(7294))&&s.__esModule?s:{default:s},l=r(6273),c=r(387),i=r(7190);var o={};function u(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[t+"%"+r+(s?"%"+s:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,s=c.useRouter(),f=a.default.useMemo((function(){var t=n(l.resolveHref(s,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?l.resolveHref(s,e.as):a||r}}),[s,e.href,e.as]),d=f.href,x=f.as,m=e.children,h=e.replace,p=e.shallow,b=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var y=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,j=n(i.useIntersection({rootMargin:"200px"}),2),g=j[0],N=j[1],w=a.default.useCallback((function(e){g(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,g]);a.default.useEffect((function(){var e=N&&r&&l.isLocalURL(d),t="undefined"!==typeof v?v:s&&s.locale,n=o[d+"%"+x+(t?"%"+t:"")];e&&!n&&u(s,d,x,{locale:t})}),[x,d,N,v,r,s]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,s,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[s?"replace":"push"](r,n,{shallow:a,locale:i,scroll:c}))}(e,s,d,x,h,p,b,v)},onMouseEnter:function(e){l.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(s,d,x,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof v?v:s&&s.locale,_=s&&s.isLocaleDomain&&l.getDomainLocale(x,E,s&&s.locales,s&&s.domainLocales);k.href=_||l.addBasePath(l.addLocale(x,E,s&&s.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,s=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){s=!0,a=i}finally{try{n||null==c.return||c.return()}finally{if(s)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,i=s.useRef(),o=n(s.useState(!1),2),u=o[0],f=o[1],d=s.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||u||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:s,elements:n}),r}(r),s=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(s))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return s.useEffect((function(){if(!l&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var s=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},1926:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=(r(7294),r(1664));t.default=function(e){return"blue"==e.color?(0,n.jsx)(s.default,{href:{pathname:e.mylink},children:(0,n.jsx)("div",{className:"border-1 h-14 rounded-2xl border-blue-400 px-5 text-blue-400 flex items-center justify-center cursor-pointer w-full font-semibold",children:e.text})}):(0,n.jsx)(s.default,{href:{pathname:e.mylink},children:(0,n.jsx)("div",{className:"border-1 h-14 rounded-2xl border-red-400 px-5 text-red-400 flex items-center justify-center cursor-pointer w-full font-semibold",children:e.text})})}},2138:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);t.default=function(e){return(0,n.jsxs)("div",{className:"flex py-3 pl-4 pr-6 rounded-xl shadow-md mb-4 items-center",children:[(0,n.jsx)("img",{className:"w-32 h-32 mr-10 object-cover",src:e.img}),(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:e.name}),(0,n.jsxs)("p",{className:"text-blue-700 mb-8 font-bold ",children:["USD ",e.price]}),(0,n.jsxs)("p",{className:"text-gray-600 font-bold",children:[e.color," ",(0,n.jsx)("br",{})," X ",e.amt]}),(0,n.jsx)("p",{className:"flex justify-end text-gray-600 italic ml-auto",children:e.status})]})]})}},8594:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);t.default=function(e){return(0,n.jsx)("div",{className:"h-28 shadow-2xl shadow-2xl bg-white w-screen p-4 flex items-center",children:e.children})}},5984:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=(r(7294),function(e){return(0,n.jsxs)("div",{className:"flex items-center flex-1",children:[e.active&&(0,n.jsx)("div",{className:"dot bg-blue-500 flex items-center justify-center",children:(0,n.jsx)("i",{className:"bi bi-check-lg text-white"})}),!e.active&&(0,n.jsx)("div",{className:"dot border-2 rounded-full flex items-center justify-center"}),e.active&&(0,n.jsx)("div",{className:"w-full h-1 bg-blue-500"}),!e.active&&(0,n.jsx)("div",{className:"w-full h-1 bg-gray-700"})]})});t.default=function(){return(0,n.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,n.jsx)(s,{active:"true"}),(0,n.jsx)(s,{active:"true"}),(0,n.jsx)(s,{}),(0,n.jsx)(s,{})]})}},5126:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=(r(7294),r(2138)),a=r(1926),l=r(8594),c=r(5984),i=r(1664);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}t.default=function(){return(0,n.jsxs)("div",{className:"flex flex-col h-screen relative justify-between top-0 left-0",children:[(0,n.jsxs)("header",{className:"h-28 flex items-center justify-between sticky w-screen px-4 bg-white top-0 left-0 relative",children:[(0,n.jsx)(i.default,{mylink:!0,href:{pathname:"/"},children:(0,n.jsx)("i",{className:"bi bi-arrow-left text-4xl"})}),(0,n.jsx)("i",{className:"bi bi-three-dots-vertical text-4xl"})]}),(0,n.jsxs)("div",{className:"flex-1 px-5 overflow-y-scroll",children:[(0,n.jsxs)("div",{className:"h-16 shadow-sm rounded-lg items-center flex px-4 mb-3",children:[(0,n.jsx)("img",{className:"mr-7 w-11 object-cover",src:"https://w7.pngwing.com/pngs/283/160/png-transparent-xiaomi-logo-portable-document-format-smartphone-encapsulated-postscript-free-angle-electronics-text.png"}),(0,n.jsx)("p",{className:"mr-7",children:"Xiaomi"}),(0,n.jsx)("i",{className:"bi bi-chevron-right text-2xl text-gray-600 ml-auto font-bold"})]}),(0,n.jsx)(s.default,u({},{name:"phantom",price:"888",amt:"2",color:"Slate black",status:"Packing",img:"https://5.imimg.com/data5/SELLER/Default/2021/1/DR/QH/SI/14753644/iphone-se2-1-250x250.jpg"})),(0,n.jsx)(a.default,{className:"mb-4",text:"View Product",color:"blue"}),(0,n.jsxs)("div",{className:"border-t border-b border-gray-400 py-5 mt-7 flex-1",children:[(0,n.jsx)("h2",{className:"text-gray-900 font-bold text-xl mb-3",children:"Delivery Status"}),(0,n.jsx)(c.default,{}),(0,n.jsxs)("div",{className:"flex justify-between items-center mt-3",children:[(0,n.jsx)("p",{className:"text-gray-600 text-base font-semibold",children:"Parcel packed for sending"}),(0,n.jsx)("p",{className:"text-gray-900 text-base",children:"10 Dec 2020"})]})]}),(0,n.jsxs)("div",{className:"py-5 flex-1",children:[(0,n.jsx)("h2",{className:"text-gray-900 font-bold text-xl mb-3",children:"Payment Information"}),(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("p",{className:"text-gray-600 text-base font-semibold mb-3",children:"Merchandise subtotal"}),(0,n.jsx)("p",{className:"text-gray-900 text-base mb-3",children:"USD 1000"})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[(0,n.jsx)("p",{className:"text-gray-600 text-base font-semibold ",children:"Shipping: Standard Economy"}),(0,n.jsx)("p",{className:"text-gray-900 text-base",children:"USD 10"})]}),(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("p",{className:"text-gray-900 text-base font-semibold",children:"Order Total"}),(0,n.jsx)("p",{className:"text-gray-900 text-base",children:"USD 170"})]})]})]}),(0,n.jsx)(l.default,{children:(0,n.jsxs)("div",{className:"flex gap-5 items-center flex-1",children:[(0,n.jsx)(a.default,{mylink:"/messages",text:"Messages(2)",color:"blue"}),(0,n.jsx)(a.default,{mylink:"/",text:"Cancel Order",color:"red"})]})})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=4021,e(e.s=t);var t}));var t=e.O();_N_E=t}]);