"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1145],{1145:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(6687),a=n(6355),l=n(9219),c=n(4364),o=n(7017);const i="codeBlockContainer_X7hc",u="codeBlockContent_vqWU",s="codeBlockTitle_B2tn",m="codeBlock_wPnj",d="codeBlockStandalone_LFTq",f="codeBlockLines_fQUY";function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(i){o=!0,a=i}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){var t=e.children,n=e.className,y=void 0===n?"":n,p=e.metastring,v=e.title,b=e.language,k=(0,c.LU)().prism,E=h((0,r.useState)(!1),2),N=E[0],w=E[1];(0,r.useEffect)((function(){w(!0)}),[]);var A=(0,c.bc)(p)||v,B=(0,c.pJ)();if(r.Children.toArray(t).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(l.ZP,g({},l.lG,{key:String(N),theme:B,code:"",language:"text"}),(function(e){var n=e.className,l=e.style;return r.createElement("pre",{tabIndex:0,className:(0,a.Z)(n,d,"thin-scrollbar",i,y,c.kM.common.codeBlock),style:l},r.createElement("code",{className:f},t))}));var S,j=Array.isArray(t)?t.join(""):t,Z=null!==(S=null!=b?b:(0,c.Vo)(y))&&void 0!==S?S:k.defaultLanguage,P=(0,c.nZ)(j,p,Z),C=P.highlightLines,L=P.code;return r.createElement(l.ZP,g({},l.lG,{key:String(N),theme:B,code:L,language:null!=Z?Z:"text"}),(function(e){var t,n,l,d=e.className,h=e.style,p=e.tokens,v=e.getLineProps,b=e.getTokenProps;return r.createElement("div",{className:(0,a.Z)(i,y,(t={},n="language-".concat(Z),l=Z&&!y.includes("language-".concat(Z)),n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t),c.kM.common.codeBlock)},A&&r.createElement("div",{style:h,className:s},A),r.createElement("div",{className:u,style:h},r.createElement("pre",{tabIndex:0,className:(0,a.Z)(d,m,"thin-scrollbar")},r.createElement("code",{className:f},p.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=v({line:e,key:t});return C.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",g({key:t},n),e.map((function(e,t){return r.createElement("span",g({key:t},b({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement(o.Z,{code:L})))}))}}}]);