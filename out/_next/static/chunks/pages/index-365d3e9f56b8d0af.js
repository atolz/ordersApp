(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},c=r(6273),l=r(387),s=r(7190);var i={};function u(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=l.useRouter(),f=o.default.useMemo((function(){var t=n(c.resolveHref(a,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?c.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,v=e.shallow,x=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,g=n(s.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],N=o.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);o.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),t="undefined"!==typeof y?y:a&&a.locale,n=i[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(a,d,p,{locale:t})}),[p,d,w,y,r,a]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:s,scroll:l}))}(e,a,d,p,h,v,x,y)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof y?y:a&&a.locale,O=a&&a.isLocaleDomain&&c.getDomainLocale(p,E,a&&a.locales,a&&a.domainLocales);k.href=O||c.addBasePath(c.addLocale(p,E,a&&a.defaultLocale))}return o.default.cloneElement(t,k)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,s=a.useRef(),i=n(a.useState(!1),2),u=i[0],f=i[1],d=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||u||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!c&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(7294),o=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},1926:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=(r(7294),r(1664));t.default=function(e){return(0,n.jsx)(a.default,{href:{pathname:e.mylink,query:{name:"test"}},children:(0,n.jsx)("div",{className:"border-1 h-14 rounded-2xl whitespace-nowrap border-".concat(e.color,"-400 px-5 text-").concat(e.color,"-400 flex items-center justify-center cursor-pointer w-full font-semibold"),children:e.text})})}},2138:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);t.default=function(e){return(0,n.jsxs)("div",{className:"flex p-3 rounded-3xl shadow-sm mb-4 items-center",children:[(0,n.jsx)("img",{className:"w-32 h-32 mr-5",src:"https://www.shawacademy.com/assets/course-cards/mycourse/graphic-design.png"}),(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:e.name}),(0,n.jsxs)("p",{className:"text-blue-700 mb-8 font-bold ",children:["USD ",e.price]}),(0,n.jsxs)("p",{className:"text-gray-600 font-bold",children:[e.color," ",(0,n.jsx)("br",{})," X ",e.amt]}),(0,n.jsx)("p",{className:"flex justify-end text-gray-600 italic ml-auto",children:e.status})]})]})}},6193:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);t.default=function(e){return(0,n.jsx)("div",{className:"mr-6 rounded-full h-14 px-6 border text-xl flex items-center justify-center cursor-pointer",children:e.text})}},2892:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=(r(7294),r(6193));t.default=function(){return(0,n.jsx)("div",{className:"flex overflow-x-auto mb-5",children:["All","Paid","Shipped"].map((function(e,t){return(0,n.jsx)(a.default,{text:e},t)}))})}},3678:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(7294),o=r(2138),c=r(2892),l=r(1926);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(){return(0,n.jsxs)("div",{className:"h-screen px-5",children:[(0,n.jsx)("header",{className:"h-28 flex items-center",children:(0,n.jsx)("i",{className:"bi bi-list text-4xl"})}),(0,n.jsx)("h1",{className:"text-4xl font-bold mb-12",children:"My Orders"}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)(c.default,{}),[{id:"86573",products:[{name:"phantom",price:"888",amt:"1",color:"Slate black",status:"Packing"},{name:"Nokia",price:"555",amt:"3",color:"Blue",status:"Processing"}]},{id:"984563",products:[{name:"phantom",price:"888",amt:"2",color:"Slate black",status:"Packing"},{name:"Nokia",price:"555",amt:"1",color:"Blue",status:"Processing"}]}].map((function(e,t){return(0,n.jsxs)("div",{className:"mb-5",children:[(0,n.jsxs)("h2",{className:"text-gray-900 font-bold text-xl",children:["Order ID #",e.id]}),(0,n.jsx)("div",{children:e.products.map((function(e,t){return(0,a.createElement)(o.default,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},e,{key:t}))}))}),(0,n.jsxs)("div",{className:"flex gap-5 items-center mt-5",children:[(0,n.jsx)(l.default,{text:"Messages(2)",mylink:"/messages",color:"blue"}),(0,n.jsx)(l.default,{text:"Order Details",mylink:"/details",color:"red"})]})]},t)}))]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);