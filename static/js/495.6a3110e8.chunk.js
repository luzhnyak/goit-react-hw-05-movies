/*! For license information please see 495.6a3110e8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[495],{495:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(861),o=r(439),i=r(791),a=r(689),c=r(87),s=r(697),u=r(184),l=function(){var t,e=(0,a.TH)();return(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsx)(c.rU,{to:null===(t=e.state)||void 0===t?void 0:t.from,className:"btn btn-outline-dark",children:"Go back"})})},h=r(510),f=r(757);function p(){p=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:N(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",v="executing",d="completed",y={};function m(){}function g(){}function w(){}var x={};u(x,a,(function(){return this}));var j=Object.getPrototypeOf,b=j&&j(j(T([])));b&&b!==r&&n.call(b,a)&&(x=b);var L=w.prototype=m.prototype=Object.create(x);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function N(e,r,n){var o=f;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=k(c,n);if(s){if(s===y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?d:"suspendedYield",u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,s,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}var v=function(){var t=(0,i.useState)({}),e=(0,o.Z)(t,2),r=e[0],v=e[1],d=(0,i.useState)(!1),y=(0,o.Z)(d,2),m=y[0],g=y[1],w=(0,a.UO)().movieId;return(0,i.useEffect)((function(){var t;!function(){(t=t||(0,n.Z)(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,(0,s.Mc)(w);case 4:e=t.sent,v(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&console.log("Something went wrong. Try again.");case 11:return t.prev=11,g(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}()}),[w]),m?(0,u.jsx)(h.a,{}):(0,u.jsxs)("div",{children:[(0,u.jsx)(l,{}),(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-4",children:(0,u.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w300/".concat(r.poster_path):f,className:"card-img-top",alt:r.title})}),(0,u.jsxs)("div",{className:"col-8",children:[(0,u.jsx)("h1",{children:r.title}),(0,u.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average)," %"]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:r.overview}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("div",{children:r.genres&&r.genres.map((function(t){return(0,u.jsxs)("span",{children:[t.name," "]},t.id)}))})]})]}),(0,u.jsx)("h2",{className:"mt-3 mb-3",children:"Additional Information"}),(0,u.jsxs)("ul",{className:"nav nav-tabs",children:[(0,u.jsx)("li",{className:"nav-item",children:(0,u.jsx)(c.OL,{className:"nav-link","aria-current":"page",to:"cast",children:"Cast"})}),(0,u.jsx)("li",{className:"nav-item",children:(0,u.jsx)(c.OL,{className:"nav-link","aria-current":"page",to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(h.a,{}),children:(0,u.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=495.6a3110e8.chunk.js.map