(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{6856:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Button",function(){return r(1926)}])},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(i){o=!0,a=i}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},u=r(6273),l=r(387),i=r(7190);var c={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var t,r=!1!==e.prefetch,o=l.useRouter(),s=a.default.useMemo((function(){var t=n(u.resolveHref(o,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,x=n(i.useIntersection({rootMargin:"200px"}),2),E=x[0],_=x[1],g=a.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);a.default.useEffect((function(){var e=_&&r&&u.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,n=c[d+"%"+p+(t?"%"+t:"")];e&&!n&&f(o,d,p,{locale:t})}),[p,d,_,m,r,o]);var k={ref:g,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:l}))}(e,o,d,p,h,y,b,m)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof m?m:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);k.href=M||u.addBasePath(u.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=s},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(i){o=!0,a=i}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,i=o.useRef(),c=n(o.useState(!1),2),f=c[0],s=c[1],d=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=r(7294),a=r(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map},1926:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(7294),r(1664));t.default=function(e){return"blue"==e.color?(0,n.jsx)(o.default,{href:{pathname:e.mylink},children:(0,n.jsx)("div",{className:"border-1 h-14 rounded-2xl border-blue-400 px-5 text-blue-400 flex items-center justify-center cursor-pointer w-full font-semibold",children:e.text})}):(0,n.jsx)(o.default,{href:{pathname:e.mylink},children:(0,n.jsx)("div",{className:"border-1 h-14 rounded-2xl border-red-400 px-5 text-red-400 flex items-center justify-center cursor-pointer w-full font-semibold",children:e.text})})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=6856,e(e.s=t);var t}));var t=e.O();_N_E=t}]);