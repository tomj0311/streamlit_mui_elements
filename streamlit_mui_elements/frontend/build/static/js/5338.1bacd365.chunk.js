(self.webpackChunkcustom_component_example=self.webpackChunkcustom_component_example||[]).push([[5338],{5338:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return N}});var t=o(1413),r=o(5987),i=o(2791),a=o.t(i,2),s=o(2007),u=o.n(s),c=o(9439),d=o(3073),l=o(3967),p=o(162),f=o(2876),m=o(1464);function v(n,e,o,t,r){var a=i.useState((function(){return r&&o?o(n).matches:t?t(n).matches:e})),s=(0,c.Z)(a,2),u=s[0],d=s[1];return(0,f.Z)((function(){if(o){var e=o(n),t=function(){d(e.matches)};return t(),e.addEventListener("change",t),function(){e.removeEventListener("change",t)}}}),[n,o]),u}var h=(0,t.Z)({},a).useSyncExternalStore;function w(n,e,o,t,r){var a=i.useCallback((function(){return e}),[e]),s=i.useMemo((function(){if(r&&o)return function(){return o(n).matches};if(null!==t){var e=t(n).matches;return function(){return e}}return a}),[a,n,t,r,o]),u=i.useMemo((function(){if(null===o)return[a,function(){return function(){}}];var e=o(n);return[function(){return e.matches},function(n){return e.addEventListener("change",n),function(){e.removeEventListener("change",n)}}]}),[a,o,n]),d=(0,c.Z)(u,2),l=d[0],p=d[1];return h(p,l,s)}function x(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).themeId;return function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,m.Z)();t&&n&&(t=t[n]||t);var r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,i=(0,d.Z)({name:"MuiUseMediaQuery",props:o,theme:t}),a=i.defaultMatches,s=void 0!==a&&a,u=i.matchMedia,c=void 0===u?r?window.matchMedia:null:u,l=i.ssrMatchMedia,p=void 0===l?null:l,f=i.noSsr,x=void 0!==f&&f;var y="function"===typeof e?e(t):e;return y=y.replace(/^@media( ?)/m,""),(void 0!==h?w:v)(y,s,c,p,x)}}x();var y=x({themeId:o(988).Z}),Z=o(184),b=["initialWidth","width"],g=["xs","sm","md","lg","xl"],U=function(n,e){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?g.indexOf(n)<=g.indexOf(e):g.indexOf(n)<g.indexOf(e)},k=function(n,e){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?g.indexOf(e)<=g.indexOf(n):g.indexOf(e)<g.indexOf(n)},D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){var o=n.withTheme,a=void 0!==o&&o,s=n.noSSR,u=void 0!==s&&s,f=n.initialWidth;return function(n){var o=(0,l.Z)(),s=n.theme||o,m=(0,d.Z)({theme:s,name:"MuiWithWidth",props:n}),v=m.initialWidth,h=m.width,w=(0,r.Z)(m,b),x=i.useState(!1),g=(0,c.Z)(x,2),U=g[0],k=g[1];(0,p.Z)((function(){k(!0)}),[]);var D=s.breakpoints.keys.slice().reverse().reduce((function(n,e){var o=y(s.breakpoints.up(e));return!n&&o?e:n}),null),O=(0,t.Z)((0,t.Z)({width:h||(U||u?D:void 0)||v||f},a?{theme:s}:{}),w);return void 0===O.width?null:(0,Z.jsx)(e,(0,t.Z)({},O))}}};function O(n){var e=n.children,o=n.only,t=n.width,r=(0,l.Z)(),i=!0;if(o)if(Array.isArray(o))for(var a=0;a<o.length;a+=1){if(t===o[a]){i=!1;break}}else o&&t===o&&(i=!1);if(i)for(var s=0;s<r.breakpoints.keys.length;s+=1){var u=r.breakpoints.keys[s],c=n["".concat(u,"Up")],d=n["".concat(u,"Down")];if(c&&U(u,t)||d&&k(u,t)){i=!1;break}}return i?e:null}O.propTypes={children:u().node,lgDown:u().bool,lgUp:u().bool,mdDown:u().bool,mdUp:u().bool,only:u().oneOfType([u().oneOf(["xs","sm","md","lg","xl"]),u().arrayOf(u().oneOf(["xs","sm","md","lg","xl"]))]),smDown:u().bool,smUp:u().bool,width:u().string.isRequired,xlDown:u().bool,xlUp:u().bool,xsDown:u().bool,xsUp:u().bool};var E=D()(O),S=o(4942),P=o(3433),T=o(3733),_=o(4419),M=o(4036),C=o(6934),j=o(5878),L=o(1217);function R(n){return(0,L.ZP)("PrivateHiddenCss",n)}(0,j.Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);var W=["children","className","only"],I=(0,C.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((function(n){var e=n.theme,o=n.ownerState,r={display:"none"};return(0,t.Z)({},o.breakpoints.map((function(n){var o=n.breakpoint,t=n.dir;return"only"===t?(0,S.Z)({},e.breakpoints.only(o),r):"up"===t?(0,S.Z)({},e.breakpoints.up(o),r):(0,S.Z)({},e.breakpoints.down(o),r)})).reduce((function(n,e){return Object.keys(e).forEach((function(o){n[o]=e[o]})),n}),{}))}));var A=function(n){for(var e=n.children,o=n.className,i=n.only,a=(0,r.Z)(n,W),s=(0,l.Z)(),u=[],c=0;c<s.breakpoints.keys.length;c+=1){var d=s.breakpoints.keys[c],p=a["".concat(d,"Up")],f=a["".concat(d,"Down")];p&&u.push({breakpoint:d,dir:"up"}),f&&u.push({breakpoint:d,dir:"down"})}i&&(Array.isArray(i)?i:[i]).forEach((function(n){u.push({breakpoint:n,dir:"only"})}));var m=(0,t.Z)((0,t.Z)({},n),{},{breakpoints:u}),v=function(n){var e=n.classes,o=n.breakpoints,t={root:["root"].concat((0,P.Z)(o.map((function(n){var e=n.breakpoint,o=n.dir;return"only"===o?"".concat(o).concat((0,M.Z)(e)):"".concat(e).concat((0,M.Z)(o))}))))};return(0,_.Z)(t,R,e)}(m);return(0,Z.jsx)(I,{className:(0,T.Z)(v.root,o),ownerState:m,children:e})},H=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];var N=function(n){var e=n.implementation,o=void 0===e?"js":e,i=n.lgDown,a=void 0!==i&&i,s=n.lgUp,u=void 0!==s&&s,c=n.mdDown,d=void 0!==c&&c,l=n.mdUp,p=void 0!==l&&l,f=n.smDown,m=void 0!==f&&f,v=n.smUp,h=void 0!==v&&v,w=n.xlDown,x=void 0!==w&&w,y=n.xlUp,b=void 0!==y&&y,g=n.xsDown,U=void 0!==g&&g,k=n.xsUp,D=void 0!==k&&k,O=(0,r.Z)(n,H);return"js"===o?(0,Z.jsx)(E,(0,t.Z)({lgDown:a,lgUp:u,mdDown:d,mdUp:p,smDown:m,smUp:h,xlDown:x,xlUp:b,xsDown:U,xsUp:D},O)):(0,Z.jsx)(A,(0,t.Z)({lgDown:a,lgUp:u,mdDown:d,mdUp:p,smDown:m,smUp:h,xlDown:x,xlUp:b,xsDown:U,xsUp:D},O))}},4036:function(n,e,o){"use strict";var t=o(1122);e.Z=t.Z},162:function(n,e,o){"use strict";var t=o(2876);e.Z=t.Z},3073:function(n,e,o){"use strict";o.d(e,{Z:function(){return r}});var t=o(8748);function r(n){var e=n.theme,o=n.name,r=n.props;return e&&e.components&&e.components[o]&&e.components[o].defaultProps?(0,t.Z)(e.components[o].defaultProps,r):r}},2876:function(n,e,o){"use strict";var t=o(2791),r="undefined"!==typeof window?t.useLayoutEffect:t.useEffect;e.Z=r},888:function(n,e,o){"use strict";var t=o(9047);function r(){}function i(){}i.resetWarningCache=r,n.exports=function(){function n(n,e,o,r,i,a){if(a!==t){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},2007:function(n,e,o){n.exports=o(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=5338.1bacd365.chunk.js.map