import e from"react";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var l in a)({}).hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(null,arguments)}function a(e){var r,l,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(l=a(e[r]))&&(n&&(n+=" "),n+=l);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,l=0,n="";l<arguments.length;)(e=arguments[l++])&&(r=a(e))&&(n&&(n+=" "),n+=r);return n};var t,s,u=["value","variant","className","as","href","size"],i=(t="style-module_base__ZtmME",s={variants:{variant:{primary:"style-module_primary__bFF4l",secondary:"style-module_secondary__f0lDw",success:"style-module_success__ZG5Xf",danger:"style-module_danger__Rqyyc"},size:{small:"style-module_small__KjQen",medium:"style-module_medium__HWpk0",large:"style-module_large__uev6M"}},defaultVariants:{variant:"primary",size:"medium"}},e=>{var r;if(null==(null==s?void 0:s.variants))return n(t,null==e?void 0:e.class,null==e?void 0:e.className);const{variants:a,defaultVariants:u}=s,i=Object.keys(a).map((r=>{const n=null==e?void 0:e[r],t=null==u?void 0:u[r];if(null===n)return null;const s=l(n)||l(t);return a[r][s]})),o=e&&Object.entries(e).reduce(((e,r)=>{let[a,l]=r;return void 0===l||(e[a]=l),e}),{}),c=null==s||null===(r=s.compoundVariants)||void 0===r?void 0:r.reduce(((e,r)=>{let{class:a,className:l,...n}=r;return Object.entries(n).every((e=>{let[r,a]=e;return Array.isArray(a)?a.includes({...u,...o}[r]):{...u,...o}[r]===a}))?[...e,a,l]:e}),[]);return n(t,i,c,null==e?void 0:e.class,null==e?void 0:e.className)}),o=function(a){var l=a.value,n=a.variant,t=a.className,s=a.as,o=a.href,c=a.size,m=function(e,r){if(null==e)return{};var a,l,n=function(e,r){if(null==e)return{};var a={};for(var l in e)if({}.hasOwnProperty.call(e,l)){if(r.includes(l))continue;a[l]=e[l]}return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)a=t[l],r.includes(a)||{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(a,u);return c&&("sm"===c&&(c="small"),"lg"===c&&(c="large"),"medium"===c&&(c="medium")),"input"===s?e.createElement("input",r({className:i({variant:n,size:c,className:t}),value:l},m)):o?e.createElement("a",r({href:o,role:"button",className:i({variant:n,size:c,className:t})},m),l):e.createElement(e.Fragment,null,e.createElement("button",r({className:i({variant:n,size:c,className:t})},m),l))};export{o as default};
