(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8ZbV":function(t,n,e){"use strict";function o(t,n,e,o,r,a,i){try{var c=t[a](i),_=c.value}catch(t){return void e(t)}c.done?n(_):Promise.resolve(_).then(o,r)}function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,a=[],i=!0,c=!1;try{for(e=e.call(t);!(i=(o=e.next()).done)&&(a.push(o.value),!n||a.length!==n);i=!0);}catch(t){c=!0,r=t}finally{try{i||null==e.return||e.return()}finally{if(c)throw r}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}e.r(n);var i=e("hosL"),c=e("QRet");n.default=function(t){var n=t.uuid,e=r(Object(c.b)({}),2),a=e[0],_=e[1],u=r(Object(c.b)({}),2),s=u[0],l=u[1],f=r(Object(c.b)([]),2),h=f[0],m=f[1],p=r(Object(c.b)(""),2),b=p[0],d=p[1],v=function(){var t,e=(t=function*(){var t=yield fetch("https://valorant-api.com/v1/agents/".concat(n)),e=yield t.json();_(e.data),l(e.data.role),m(e.data.abilities),d(e.data.description)},function(){var n=this,e=arguments;return new Promise((function(r,a){function i(t){o(_,r,a,i,c,"next",t)}function c(t){o(_,r,a,i,c,"throw",t)}var _=t.apply(n,e);i(void 0)}))});return function(){return e.apply(this,arguments)}}();Object(c.a)((function(){v()}),[]);var y=a.displayName,j=a.bustPortrait;return Object(i.h)("main",{className:"agent"},Object(i.h)("div",{className:"imgBox",style:{backgroundImage:"url(".concat(j,")")}}),Object(i.h)("div",{className:"contentBox"},Object(i.h)("div",{className:"contentBox-container"},Object(i.h)("span",{className:"small-role"},s.displayName),Object(i.h)("h1",{className:"name"},y),Object(i.h)("div",{className:"abilities"},Object(i.h)("div",{className:"abl abl--1",onClick:function(){d(a.description)}},Object(i.h)("div",{className:"abl-assign"},"INFO"),Object(i.h)("div",{className:"abl-img",style:{backgroundImage:"url(".concat(s.displayIcon,")")}})),h.map((function(t,n){var e=t.slot,o=t.displayIcon;return Object(i.h)("div",{className:"abl abl-".concat(n),onClick:function(){return function(t){d(h[t].description)}(n)}},Object(i.h)("div",{className:"abl-assign"},e),Object(i.h)("div",{className:"abl-img",style:{backgroundImage:"url(".concat(o,")")}}))}))),Object(i.h)("p",{className:"desx"},b),Object(i.h)("p",{className:"role-desx"},Object(i.h)("span",{className:"bold"},s.displayName),s.description))))}},QRet:function(t,n,e){"use strict";function o(t,n){m.options.__h&&m.options.__h(f,t,p||n),p=0;var e=f.__H||(f.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function r(t){return p=1,function(t,n,e){var r=o(l++,2);return r.t=t,r.__c||(r.__=[e?e(n):s(void 0,n),function(t){var n=r.t(r.__[0],t);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=f),r.__}(s,t)}function a(t,n){var e=o(l++,3);!m.options.__s&&u(e.__H,n)&&(e.__=t,e.__H=n,f.__H.__h.push(e))}function i(){b.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(c),t.__H.__h.forEach(_),t.__H.__h=[]}catch(n){t.__H.__h=[],m.options.__e(n,t.__v)}})),b=[]}function c(t){var n=f;"function"==typeof t.__c&&t.__c(),f=n}function _(t){var n=f;t.__c=t.__(),f=n}function u(t,n){return!t||t.length!==n.length||n.some((function(n,e){return n!==t[e]}))}function s(t,n){return"function"==typeof n?n(t):n}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return a}));var l,f,h,m=e("hosL"),p=0,b=[],d=m.options.__b,v=m.options.__r,y=m.options.diffed,j=m.options.__c,O=m.options.unmount;m.options.__b=function(t){f=null,d&&d(t)},m.options.__r=function(t){v&&v(t),l=0;var n=(f=t.__c).__H;n&&(n.__h.forEach(c),n.__h.forEach(_),n.__h=[])},m.options.diffed=function(t){y&&y(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==b.push(n)&&h===m.options.requestAnimationFrame||((h=m.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(o),g&&cancelAnimationFrame(n),setTimeout(t)},o=setTimeout(e,100);g&&(n=requestAnimationFrame(e))})(i)),f=null},m.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(c),t.__h=t.__h.filter((function(t){return!t.__||_(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],m.options.__e(e,t.__v)}})),j&&j(t,n)},m.options.unmount=function(t){O&&O(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(c)}catch(t){m.options.__e(t,n.__v)}};var g="function"==typeof requestAnimationFrame}}]);
//# sourceMappingURL=route-agent.chunk.31196.js.map