(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{QRet:function(n,t,o){"use strict";function r(n,t){p.options.__h&&p.options.__h(h,n,v||t),v=0;var o=h.__H||(h.__H={__:[],__h:[]});return n>=o.__.length&&o.__.push({}),o.__[n]}function e(n){return v=1,function(n,t,o){var e=r(s++,2);return e.t=n,e.__c||(e.__=[o?o(t):f(void 0,t),function(n){var t=e.t(e.__[0],n);e.__[0]!==t&&(e.__=[t,e.__[1]],e.__c.setState({}))}],e.__c=h),e.__}(f,n)}function _(n,t){var o=r(s++,3);!p.options.__s&&a(o.__H,t)&&(o.__=n,o.__H=t,h.__H.__h.push(o))}function i(){m.forEach((function(n){if(n.__P)try{n.__H.__h.forEach(c),n.__H.__h.forEach(u),n.__H.__h=[]}catch(t){n.__H.__h=[],p.options.__e(t,n.__v)}})),m=[]}function c(n){var t=h;"function"==typeof n.__c&&n.__c(),h=t}function u(n){var t=h;n.__c=n.__(),h=t}function a(n,t){return!n||n.length!==t.length||t.some((function(t,o){return t!==n[o]}))}function f(n,t){return"function"==typeof t?t(n):t}o.d(t,"b",(function(){return e})),o.d(t,"a",(function(){return _}));var s,h,l,p=o("hosL"),v=0,m=[],d=p.options.__b,y=p.options.__r,b=p.options.diffed,g=p.options.__c,H=p.options.unmount;p.options.__b=function(n){h=null,d&&d(n)},p.options.__r=function(n){y&&y(n),s=0;var t=(h=n.__c).__H;t&&(t.__h.forEach(c),t.__h.forEach(u),t.__h=[])},p.options.diffed=function(n){b&&b(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==m.push(t)&&l===p.options.requestAnimationFrame||((l=p.options.requestAnimationFrame)||function(n){var t,o=function(){clearTimeout(r),j&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(o,100);j&&(t=requestAnimationFrame(o))})(i)),h=null},p.options.__c=function(n,t){t.some((function(n){try{n.__h.forEach(c),n.__h=n.__h.filter((function(n){return!n.__||u(n)}))}catch(o){t.some((function(n){n.__h&&(n.__h=[])})),t=[],p.options.__e(o,n.__v)}})),g&&g(n,t)},p.options.unmount=function(n){H&&H(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(c)}catch(n){p.options.__e(n,t.__v)}};var j="function"==typeof requestAnimationFrame},d3Ft:function(n,t,o){"use strict";function r(n,t,o,r,e,_,i){try{var c=n[_](i),u=c.value}catch(n){return void o(n)}c.done?t(u):Promise.resolve(u).then(r,e)}function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var o=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==o)return;var r,e,_=[],i=!0,c=!1;try{for(o=o.call(n);!(i=(r=o.next()).done)&&(_.push(r.value),!t||_.length!==t);i=!0);}catch(n){c=!0,e=n}finally{try{i||null==o.return||o.return()}finally{if(c)throw e}}return _}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return _(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(n,t){(null==t||t>n.length)&&(t=n.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=n[o];return r}o.r(t);var i=o("hosL"),c=o("ox/y"),u=o("QRet");t.default=function(){var n=e(Object(u.b)([]),2),t=n[0],o=n[1],_=function(){var n,t=(n=function*(){var n=yield fetch("https://valorant-api.com/v1/agents"),t=yield n.json();o(t.data)},function(){var t=this,o=arguments;return new Promise((function(e,_){function i(n){r(u,e,_,i,c,"next",n)}function c(n){r(u,e,_,i,c,"throw",n)}var u=n.apply(t,o);i(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(u.a)((function(){_()}),[]),Object(i.h)("section",null,Object(i.h)("h1",null,"Agents"),Object(i.h)("section",{className:"grid"},t.map((function(n){var t=n.displayName,o=n.displayIcon,r=n.uuid;if("ded3520f-4264-bfed-162d-b080e2abccf9"!=r)return Object(i.h)(c.Link,{href:"/agents/".concat(r),style:{textDecoration:"none"}},Object(i.h)("article",{style:{backgroundImage:"url(".concat(o,")")}},Object(i.h)("h2",null,t)))}))))}}}]);
//# sourceMappingURL=route-agents.chunk.a6950.js.map