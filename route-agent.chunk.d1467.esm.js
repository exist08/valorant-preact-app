(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8ZbV":function(t,n,_){"use strict";_.r(n);var a=_("hosL"),o=_("QRet");n.default=({uuid:t})=>{const[n,_]=Object(o.b)({}),[e,c]=Object(o.b)({}),[i,s]=Object(o.b)([]),[r,u]=Object(o.b)("");Object(o.a)((()=>{(async()=>{const n=await fetch(`https://valorant-api.com/v1/agents/${t}`),a=await n.json();_(a.data),c(a.data.role),s(a.data.abilities),u(a.data.description)})()}),[]);const{displayName:l,bustPortrait:h}=n;return Object(a.h)("main",{className:"agent"},Object(a.h)("div",{className:"imgBox",style:{backgroundImage:`url(${h})`}}),Object(a.h)("div",{className:"contentBox"},Object(a.h)("div",{className:"contentBox-container"},Object(a.h)("span",{className:"small-role"},e.displayName),Object(a.h)("h1",{className:"name"},l),Object(a.h)("div",{className:"abilities"},Object(a.h)("div",{className:"abl abl--1",onClick:()=>{u(n.description)}},Object(a.h)("div",{className:"abl-assign"},"INFO"),Object(a.h)("div",{className:"abl-img",style:{backgroundImage:`url(${e.displayIcon})`}})),i.map(((t,n)=>{const{slot:_,displayIcon:o}=t;return Object(a.h)("div",{className:`abl abl-${n}`,onClick:()=>(t=>{u(i[t].description)})(n)},Object(a.h)("div",{className:"abl-assign"},_),Object(a.h)("div",{className:"abl-img",style:{backgroundImage:`url(${o})`}}))}))),Object(a.h)("p",{className:"desx"},r),Object(a.h)("p",{className:"role-desx"},Object(a.h)("span",{className:"bold"},e.displayName),e.description))))}},QRet:function(t,n,_){"use strict";function a(t,n){m.options.__h&&m.options.__h(h,t,b||n),b=0;var _=h.__H||(h.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function o(t){return b=1,function(t,n,_){var o=a(l++,2);return o.t=t,o.__c||(o.__=[_?_(n):u(void 0,n),function(t){var n=o.t(o.__[0],t);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}],o.__c=h),o.__}(u,t)}function e(t,n){var _=a(l++,3);!m.options.__s&&r(_.__H,n)&&(_.__=t,_.__H=n,h.__H.__h.push(_))}function c(){p.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(i),t.__H.__h.forEach(s),t.__H.__h=[]}catch(n){t.__H.__h=[],m.options.__e(n,t.__v)}})),p=[]}function i(t){var n=h;"function"==typeof t.__c&&t.__c(),h=n}function s(t){var n=h;t.__c=t.__(),h=n}function r(t,n){return!t||t.length!==n.length||n.some((function(n,_){return n!==t[_]}))}function u(t,n){return"function"==typeof n?n(t):n}_.d(n,"b",(function(){return o})),_.d(n,"a",(function(){return e}));var l,h,f,m=_("hosL"),b=0,p=[],d=m.options.__b,v=m.options.__r,j=m.options.diffed,O=m.options.__c,N=m.options.unmount;m.options.__b=function(t){h=null,d&&d(t)},m.options.__r=function(t){v&&v(t),l=0;var n=(h=t.__c).__H;n&&(n.__h.forEach(i),n.__h.forEach(s),n.__h=[])},m.options.diffed=function(t){j&&j(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==p.push(n)&&f===m.options.requestAnimationFrame||((f=m.options.requestAnimationFrame)||function(t){var n,_=function(){clearTimeout(a),g&&cancelAnimationFrame(n),setTimeout(t)},a=setTimeout(_,100);g&&(n=requestAnimationFrame(_))})(c)),h=null},m.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(i),t.__h=t.__h.filter((function(t){return!t.__||s(t)}))}catch(_){n.some((function(t){t.__h&&(t.__h=[])})),n=[],m.options.__e(_,t.__v)}})),O&&O(t,n)},m.options.unmount=function(t){N&&N(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(i)}catch(t){m.options.__e(t,n.__v)}};var g="function"==typeof requestAnimationFrame}}]);
//# sourceMappingURL=route-agent.chunk.d1467.esm.js.map