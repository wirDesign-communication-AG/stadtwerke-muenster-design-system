require=function i(a,u,c){function l(t,e){if(!u[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=u[t]={exports:{}};a[t][0].call(o.exports,function(e){return l(a[t][1][e]||e)},o,o.exports,i,a,u,c)}return u[t].exports}for(var s="function"==typeof require&&require,e=0;e<c.length;e++)l(c[e]);return l}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,i=(r=e("util"))&&r.__esModule?r:{default:r};function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l="ide.side-nav",s="json",f="#c-side-nav__toggle",d=function(){function o(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this._element=e,this.init()}return function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(o,[{key:"_getConfig",value:function(e){return e=a(a({},Default),e),i.default.typeCheckConfig("side-nav","0.0.1",e,DefaultType),e}},{key:"init",value:function(){var e=this,t=sessionStorage.getItem("sidebar-scroll"),n=document.querySelector(f);null!==t&&(this._element.scrollTop=parseInt(t,10)),window.addEventListener("beforeunload",function(){sessionStorage.setItem("sidebar-scroll",e._element.scrollTop)}),n&&n.addEventListener("click",function(e){document.body.classList.toggle("is-nav-close")},!1)}}],[{key:"_DomInterface",value:function(e){var t=i.default.handleData(e,l);if(!t){var n;if(e.hasAttribute("data-"+s)){var r=i.default.getJsonFromElement(e,s);n=JSON.parse(r)}t=new o(e,n),i.default.handleData(e,l,t)}}}]),o}();document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll(".sidebar"),t=0;t<e.length;t++)e[t]&&d._DomInterface(e[t])});var p=d;n.default=p},{util:"util"}],util:[function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=(o=[],function(e){"string"==typeof e&&(e=document.querySelector(e));for(var t=o.length,n=0;n<t;n++)if(e===o[n][0])return o[n];var r=new a(e);return o.push(r),r});function a(e){this[0]=e;var n={};this.data=function(e,t){return"undefined"===r(t)?n[e]||this[0].getAttribute("data-"+e):(n[e]=t,this)}}var l={detectIE11:function(){return!!navigator.userAgent.match(/Trident.*rv:11\./)},setClassIE11:function(){navigator.userAgent.match(/Trident.*rv:11\./)&&document.body.classList.add("ie11")},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n,r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var i=r[o],a=n[o],u=a&&l.isElement(a)?"element":(c=a,{}.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(i).test(u))throw new Error("".concat(e.toUpperCase()," (").concat(t,"): ")+'Option "'.concat(o,'" provided type "').concat(u,'" ')+'but expected type "'.concat(i,'".'))}var c},addClass:function(e,t){void 0!==e&&e.classList.add(t)},removeClass:function(e,t){void 0!==e&&e.classList.remove(t)},hasClass:function(e,t){return void 0!==e&&e.classList.contains(t)},toggleClass:function(e,t){void 0!==e&&(e.classList.contains(t)?e.classList.remove(t):e.classList.add(t))},queryElement:function(e,t){var n=t||document;return e instanceof Element?e:n.querySelector(e)},getSelectorFromElement:function(e,t){var n=e.getAttribute("data-"+t);if((!n||"#"===n)&&"target"===t){var r=e.getAttribute("href");n=r&&"#"!==r?r.trim():""}return n&&document.querySelector(n)?n:null},getJsonFromElement:function(e,t){return e.getAttribute("data-"+t).replace(/[\']/g,'"')},handleData:function(e,t,n){return i(e).data(t,n)},getBreakpoint:function(){var e=document.querySelector("body");return window.getComputedStyle(e,":after").getPropertyValue("content").replace(/["']/g,"")}};l.setClassIE11();var u=l;n.default=u},{}]},{},[1]);