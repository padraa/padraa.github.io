(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{767:function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var l=e[i](c),a=l.value}catch(e){return void n(e)}l.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var c=e.apply(t,n);function l(e){r(c,o,i,l,a,"next",e)}function a(e){r(c,o,i,l,a,"throw",e)}l(void 0)}))}}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(){for(var e=location.search,t="",n="",r=[],o=0,l=["flexible","fullwidth","trigger"];o<l.length;o++){var a=l[o];if(null!==(t=e.match(new RegExp("".concat(a,".{1}([^&]+)"))))){n=a,t=t.pop();break}}if(null!==t){switch(n){case"trigger":t.replace(/@/g,"#").split(",").map((function(e){var t={};return e.split("/").forEach((function(e){var n=e.split(":");t[n[0]]=n[1]})),t})).forEach((function(e){r.push(e)}));break;case"fullwidth":var s=t.split("/")[0],d=i(document.querySelectorAll('[data-component="fullwidthcontent"]')).filter((function(e,n,r){if(!0!==isNaN(s)&&n+1===Number(s))return!0;var o=e.querySelector("h3");return!(!o||(o=f(o=o.textContent))!==t.toLowerCase())||void 0})).pop();d&&r.push({element:d,type:"scroll",offset:window.innerWidth<768?-60:-120});break;case"flexible":var p=t.split("/"),m=p[0],h=p[1],y="";["flexible-content","flexibleContentModule"].forEach((function(e){document.querySelectorAll('[data-component="'.concat(e,'"]')).length>0&&(y='[data-component="'.concat(e,'"]'))}));var v=document.querySelectorAll(y),w=null,b=function(e,t){return i(e).filter((function(e){var n=e.querySelector(".content-header");if(n){var r,o=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw i}}}}((n=n.cloneNode(!0)).querySelectorAll("sup"));try{for(o.s();!(r=o.n()).done;){var i=r.value;n.removeChild(i)}}catch(e){o.e(e)}finally{o.f()}if((n=f(n=n.textContent))===t.toLowerCase())return!0}})).pop()};v&&(!0!==isNaN(m)?(w=v[m=Number(m)-1],!0!==isNaN(h)?(v=w.querySelectorAll(".content-section"),w&&(w=v[h=Number(h)-1])):h&&(v=w.querySelectorAll(".content-section"),w=b(v,h))):w=b(v=document.querySelectorAll("".concat(y," .content-section")),t)),w&&r.push({element:w,type:"scroll",offset:window.innerWidth<768?-60:-120})}r.forEach((function(e){var t=e.element,n=e.type,r=e.selector,o=(e.eventName,e.index),i=void 0===o?1:o,c=e.delay,l=void 0===c?.01:c,a=e.center,f=void 0!==a&&a,s=e.offset,d=void 0===s?1:s,p=t||document.querySelectorAll(r);null!==p?t||!r||(p=p[i-1])instanceof HTMLElement==!0?setTimeout((function(){switch(n){case"scroll":!function(e,t,n){u.apply(this,arguments)}(p,f,d);break;default:!function(e,t){e.dispatchEvent(new CustomEvent(t))}(p,eventNname)}}),1e3*l):console.warn("The index ".concat(i," specified for selector ").concat(r," doesn't exist.")):console.warn("The element for selector ".concat(r," doesn't exist."))}))}}function u(){return(u=o(regeneratorRuntime.mark((function e(t,n,r){var o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"scrollRestoration"in history&&(history.scrollRestoration="manual"),n=Boolean(n),r=Number(r),o=function(){var e=tcom_v2.dom.getOffsetTop(t);return n&&(e+=t.clientHeight/2,e-=window.innerHeight/2),r&&(e+=r),e},e.next=6,tcom_v2.getSmoothScroll();case 6:(i=e.sent).scrollWindow(o(),900),setTimeout((function(){window.scrollY!==o()&&i.scrollWindow(o(),500)}),1150);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return e.trim().toLowerCase().replace(/\&/g,"and").replace(/[^\w\s-]/g,"").replace(/\s{2,}/g," ").replace(/\ /g,"-")}n.r(t),n.d(t,"default",(function(){return a}))}}]);