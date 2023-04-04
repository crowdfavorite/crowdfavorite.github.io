/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,r,a,o={2599:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}var a;n.d(t,{Ep:()=>p,J0:()=>i,RQ:()=>U,WK:()=>$,Zn:()=>j,Zq:()=>z,aU:()=>a,cP:()=>d,fp:()=>m,pC:()=>T,q_:()=>l}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const o="popstate";function l(e){return void 0===e&&(e={}),h((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=d(e.location.hash.substr(1));return u("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:p(t))}),(function(e,t){s("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function i(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,n,a){return void 0===n&&(n=null),r({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?d(t):t,{state:n,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function p(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function h(e,t,n,l){void 0===l&&(l={});let{window:s=document.defaultView,v5Compat:d=!1}=l,h=s.history,f=a.Pop,m=null,v=b();function b(){return(h.state||{idx:null}).idx}function y(){f=a.Pop;let e=b(),t=null==e?null:e-v;v=e,m&&m({action:f,location:w.location,delta:t})}function g(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"==typeof e?e:p(e);return i(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==v&&(v=0,h.replaceState(r({},h.state,{idx:v}),""));let w={get action(){return f},get location(){return e(s,h)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(o,y),m=e,()=>{s.removeEventListener(o,y),m=null}},createHref:e=>t(s,e),createURL:g,encodeLocation(e){let t=g(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f=a.Push;let r=u(w.location,e,t);n&&n(r,e),v=b()+1;let o=c(r,v),l=w.createHref(r);try{h.pushState(o,"",l)}catch(e){s.location.assign(l)}d&&m&&m({action:f,location:w.location,delta:1})},replace:function(e,t){f=a.Replace;let r=u(w.location,e,t);n&&n(r,e),v=b();let o=c(r,v),l=w.createHref(r);h.replaceState(o,"",l),d&&m&&m({action:f,location:w.location,delta:0})},go:e=>h.go(e)};return w}var f;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(f||(f={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){void 0===n&&(n="/");let r=j(("string"==typeof t?d(t):t).pathname||"/",n);if(null==r)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let e=0;null==o&&e<a.length;++e)o=C(a[e],S(r));return o}function v(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(i(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(r.length));let s=U([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(i(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:x(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of b(e.path))a(e,t,n);else a(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let l=b(r.join("/")),i=[];return i.push(...l.map((e=>""===e?o:[o,e].join("/")))),a&&i.push(...l),i.map((t=>e.startsWith("/")&&""===t?"/":t))}const y=/^:\w+$/,g=3,w=2,P=1,_=10,k=-2,E=e=>"*"===e;function x(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=k),t&&(r+=w),n.filter((e=>!E(e))).reduce(((e,t)=>e+(y.test(t)?g:""===t?P:_)),r)}function C(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let e=0;e<n.length;++e){let l=n[e],i=e===n.length-1,s="/"===a?t:t.slice(a.length)||"/",c=O({path:l.relativePath,caseSensitive:l.caseSensitive,end:i},s);if(!c)return null;Object.assign(r,c.params);let u=l.route;o.push({params:r,pathname:U([a,c.pathname]),pathnameBase:B(U([a,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(a=U([a,c.pathnameBase]))}return o}function O(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=i[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return s(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(i[n]||"",t),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function S(e){try{return decodeURI(e)}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function j(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function R(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function T(e,t,n,a){let o;void 0===a&&(a=!1),"string"==typeof e?o=d(e):(o=r({},e),i(!o.pathname||!o.pathname.includes("?"),R("?","pathname","search",o)),i(!o.pathname||!o.pathname.includes("#"),R("#","pathname","hash",o)),i(!o.search||!o.search.includes("#"),R("#","search","hash",o)));let l,s=""===e||""===o.pathname,c=s?"/":o.pathname;if(a||null==c)l=n;else{let e=t.length-1;if(c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}l=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?d(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:L(r),hash:A(a)}}(o,l),p=c&&"/"!==c&&c.endsWith("/"),h=(s||"."===c)&&n.endsWith("/");return u.pathname.endsWith("/")||!p&&!h||(u.pathname+="/"),u}const U=e=>e.join("/").replace(/\/\/+/g,"/"),B=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",A=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class W extends Error{}function $(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const I=["post","put","patch","delete"],J=(new Set(I),["get",...I]);new Set(J),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;Symbol("deferred")},7868:(e,t,n)=>{var r=n(7294),a=n(745),o=n(9250),l=n(9655);const i=function(){return r.createElement("p",null,"loading")},s=[{key:"home",exact:!0,path:"/",component:r.lazy((()=>n.e(905).then(n.bind(n,1905))))},{key:"invokable_introduction",path:"/patterns/invoker/introduction",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(887)]).then(n.bind(n,1887))))},{key:"invokable_classes",path:"/patterns/invoker/invokable",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(227)]).then(n.bind(n,8227))))},{key:"builder_introduction",path:"/patterns/builder/introduction",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(175)]).then(n.bind(n,1175))))},{key:"builder_classes",path:"/patterns/builder/builder",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(852)]).then(n.bind(n,6852))))},{key:"factory_introduction",path:"/patterns/factory/introduction",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(405)]).then(n.bind(n,7405))))},{key:"factory_classes",path:"/patterns/factory/factory",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(282)]).then(n.bind(n,6282))))},{key:"plugin_introduction",path:"/wordpress/plugin/introduction",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(36)]).then(n.bind(n,7036))))},{key:"plugin_structure",path:"/wordpress/plugin/structure",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(777)]).then(n.bind(n,6777))))},{key:"plugin_bootstrap",path:"/wordpress/plugin/bootstrap",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(17)]).then(n.bind(n,6017))))},{key:"plugin_providers",path:"/wordpress/plugin/providers",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(814)]).then(n.bind(n,7814))))},{key:"plugin_dependency",path:"/wordpress/plugin/dependency",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(361)]).then(n.bind(n,7361))))},{key:"plugin_facades",path:"/wordpress/plugin/facades",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(727)]).then(n.bind(n,2727))))},{key:"plugin_logger",path:"/wordpress/plugin/logger",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(33)]).then(n.bind(n,7033)))),children:[{key:"plugin_logger_introduction",path:"/wordpress/plugin/logger/introduction",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(441)]).then(n.bind(n,441))))},{key:"plugin_logger_channels",path:"/wordpress/plugin/logger/channels",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(389)]).then(n.bind(n,2389))))}]},{key:"laravel_web_routes",path:"/laravel/web/routes",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(393)]).then(n.bind(n,5393))))},{key:"laravel_web_controllers",path:"/laravel/web/controllers",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(290)]).then(n.bind(n,1290))))},{key:"laravel_web_views",path:"/laravel/web/views",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(233)]).then(n.bind(n,4233))))},{key:"laravel_web_assets",path:"/laravel/web/assets",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(199)]).then(n.bind(n,5199))))},{key:"laravel_api_routes",path:"/laravel/api/routes",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(188)]).then(n.bind(n,7188))))},{key:"laravel_api_controllers",path:"/laravel/api/controllers",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(390)]).then(n.bind(n,7390))))},{key:"laravel_api_request",path:"/laravel/api/request",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(725)]).then(n.bind(n,1725))))},{key:"laravel_api_actions",path:"/laravel/api/actions",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(487)]).then(n.bind(n,6487))))},{key:"laravel_requirement",path:"/laravel/development/requirement",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(420)]).then(n.bind(n,2420))))},{key:"laravel_guidance",path:"/laravel/production/guidance",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(971)]).then(n.bind(n,971))))},{key:"code_php_stan",path:"/code/quality/phpstan",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(359)]).then(n.bind(n,8359))))},{key:"code_php_cs_fixer",path:"/code/style/phpcsfixer",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(709)]).then(n.bind(n,1709))))},{key:"code_php_sniffer",path:"/code/style/phpcodesniffer",component:r.lazy((()=>Promise.all([n.e(736),n.e(612),n.e(728)]).then(n.bind(n,728))))}].map((e=>void 0===e.children?r.createElement(o.AW,{key:e.key,exact:e.exact,path:e.path,element:r.createElement(e.component,null)}):r.createElement(o.AW,{key:e.key,exact:e.exact,path:e.path,element:r.createElement(e.component,null)},e.children.map(((e,t)=>r.createElement(o.AW,{key:`${e.key}_${t}`,exact:e.exact,path:e.path,element:r.createElement(e.component,null)}))))));function c(){return r.createElement(l.UT,null,r.createElement(r.Suspense,{fallback:r.createElement(i,null)},r.createElement(o.Z5,null,s)))}a.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(c,null)))},9250:(e,t,n)=>{var r;n.d(t,{AW:()=>T,F0:()=>U,TH:()=>P,Us:()=>f,WU:()=>k,Z5:()=>B,oQ:()=>g,s0:()=>_});var a=n(2599),o=n(7294);const l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:i,useEffect:s,useLayoutEffect:c,useDebugValue:u}=r||(r=n.t(o,2));function p(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!l(n,e)}catch(e){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement,(r||(r=n.t(o,2))).useSyncExternalStore;const d=o.createContext(null);const h=o.createContext(null);const f=o.createContext(null);const m=o.createContext(null);const v=o.createContext({outlet:null,matches:[]});const b=o.createContext(null);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function g(e,t){let{relative:n}=void 0===t?{}:t;w()||(0,a.J0)(!1);let{basename:r,navigator:l}=o.useContext(f),{hash:i,pathname:s,search:c}=k(e,{relative:n}),u=s;return"/"!==r&&(u="/"===s?r:(0,a.RQ)([r,s])),l.createHref({pathname:u,search:c,hash:i})}function w(){return null!=o.useContext(m)}function P(){return w()||(0,a.J0)(!1),o.useContext(m).location}function _(){w()||(0,a.J0)(!1);let{basename:e,navigator:t}=o.useContext(f),{matches:n}=o.useContext(v),{pathname:r}=P(),l=JSON.stringify((0,a.Zq)(n).map((e=>e.pathnameBase))),i=o.useRef(!1);return o.useEffect((()=>{i.current=!0})),o.useCallback((function(n,o){if(void 0===o&&(o={}),!i.current)return;if("number"==typeof n)return void t.go(n);let s=(0,a.pC)(n,JSON.parse(l),r,"path"===o.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:(0,a.RQ)([e,s.pathname])),(o.replace?t.replace:t.push)(s,o.state,o)}),[e,t,l,r])}function k(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=o.useContext(v),{pathname:l}=P(),i=JSON.stringify((0,a.Zq)(r).map((e=>e.pathnameBase)));return o.useMemo((()=>(0,a.pC)(e,JSON.parse(i),l,"path"===n)),[e,i,l,n])}function E(){let e=function(){var e;let t=o.useContext(b),n=R(j.UseRouteError),r=z(j.UseRouteError);if(t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=(0,a.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:l},n):null,null)}class x extends o.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?o.createElement(v.Provider,{value:this.props.routeContext},o.createElement(b.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C(e){let{routeContext:t,match:n,children:r}=e,a=o.useContext(d);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(v.Provider,{value:t},r)}function O(e,t,n){if(void 0===t&&(t=[]),null==e){if(null==n||!n.errors)return null;e=n.matches}let r=e,l=null==n?void 0:n.errors;if(null!=l){let e=r.findIndex((e=>e.route.id&&(null==l?void 0:l[e.route.id])));e>=0||(0,a.J0)(!1),r=r.slice(0,Math.min(r.length,e+1))}return r.reduceRight(((e,a,i)=>{let s=a.route.id?null==l?void 0:l[a.route.id]:null,c=null;n&&(c=a.route.ErrorBoundary?o.createElement(a.route.ErrorBoundary,null):a.route.errorElement?a.route.errorElement:o.createElement(E,null));let u=t.concat(r.slice(0,i+1)),p=()=>{let t=e;return s?t=c:a.route.Component?t=o.createElement(a.route.Component,null):a.route.element&&(t=a.route.element),o.createElement(C,{match:a,routeContext:{outlet:e,matches:u},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===i)?o.createElement(x,{location:n.location,component:c,error:s,children:p(),routeContext:{outlet:null,matches:u}}):p()}),null)}var S,j;function R(e){let t=o.useContext(h);return t||(0,a.J0)(!1),t}function z(e){let t=function(e){let t=o.useContext(v);return t||(0,a.J0)(!1),t}(),n=t.matches[t.matches.length-1];return n.route.id||(0,a.J0)(!1),n.route.id}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(S||(S={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(j||(j={}));function T(e){(0,a.J0)(!1)}function U(e){let{basename:t="/",children:n=null,location:r,navigationType:l=a.aU.Pop,navigator:i,static:s=!1}=e;w()&&(0,a.J0)(!1);let c=t.replace(/^\/*/,"/"),u=o.useMemo((()=>({basename:c,navigator:i,static:s})),[c,i,s]);"string"==typeof r&&(r=(0,a.cP)(r));let{pathname:p="/",search:d="",hash:h="",state:v=null,key:b="default"}=r,y=o.useMemo((()=>{let e=(0,a.Zn)(p,c);return null==e?null:{location:{pathname:e,search:d,hash:h,state:v,key:b},navigationType:l}}),[c,p,d,h,v,b,l]);return null==y?null:o.createElement(f.Provider,{value:u},o.createElement(m.Provider,{children:n,value:y}))}function B(e){let{children:t,location:n}=e,r=o.useContext(d);return function(e,t){w()||(0,a.J0)(!1);let{navigator:n}=o.useContext(f),r=o.useContext(h),{matches:l}=o.useContext(v),i=l[l.length-1],s=i?i.params:{},c=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let u,p=P();if(t){var d;let e="string"==typeof t?(0,a.cP)(t):t;"/"===c||(null==(d=e.pathname)?void 0:d.startsWith(c))||(0,a.J0)(!1),u=e}else u=p;let b=u.pathname||"/",g="/"===c?b:b.slice(c.length)||"/",_=(0,a.fp)(e,{pathname:g}),k=O(_&&_.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:(0,a.RQ)([c,n.encodeLocation?n.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:(0,a.RQ)([c,n.encodeLocation?n.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r||void 0);return t&&k?o.createElement(m.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:a.aU.Pop}},k):k}(r&&!t?r.router.routes:W(t),n)}var L;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(L||(L={}));new Promise((()=>{}));class A extends o.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,a=L.pending;if(n instanceof Promise)if(this.state.error){L.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?L.error:void 0!==r._data?L.success:L.pending):(L.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else L.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(a===L.error&&r._error instanceof AbortedDeferredError)throw neverSettledPromise;if(a===L.error&&!t)throw r._error;if(a===L.error)return React.createElement(AwaitContext.Provider,{value:r,children:t});if(a===L.success)return React.createElement(AwaitContext.Provider,{value:r,children:e});throw r}}function W(e,t){void 0===t&&(t=[]);let n=[];return o.Children.forEach(e,((e,r)=>{if(!o.isValidElement(e))return;if(e.type===o.Fragment)return void n.push.apply(n,W(e.props.children,t));e.type!==T&&(0,a.J0)(!1),e.props.index&&e.props.children&&(0,a.J0)(!1);let l=[...t,r],i={id:e.props.id||l.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=W(e.props.children,l)),n.push(i)})),n}},53:(e,t)=>{function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,l=a>>>1;r<l;){var i=2*(r+1)-1,s=e[i],c=i+1,u=e[c];if(0>o(s,n))c<a&&0>o(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[i]=n,r=i);else{if(!(c<a&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var l=performance;t.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var c=[],u=[],p=1,d=null,h=3,f=!1,m=!1,v=!1,b="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,g="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function P(e){if(v=!1,w(e),!m)if(null!==r(c))m=!0,U(_);else{var t=r(u);null!==t&&B(P,t.startTime-e)}}function _(e,n){m=!1,v&&(v=!1,y(C),C=-1),f=!0;var o=h;try{for(w(n),d=r(c);null!==d&&(!(d.expirationTime>n)||e&&!j());){var l=d.callback;if("function"==typeof l){d.callback=null,h=d.priorityLevel;var i=l(d.expirationTime<=n);n=t.unstable_now(),"function"==typeof i?d.callback=i:d===r(c)&&a(c),w(n)}else a(c);d=r(c)}if(null!==d)var s=!0;else{var p=r(u);null!==p&&B(P,p.startTime-n),s=!1}return s}finally{d=null,h=o,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,x=null,C=-1,O=5,S=-1;function j(){return!(t.unstable_now()-S<O)}function R(){if(null!==x){var e=t.unstable_now();S=e;var n=!0;try{n=x(!0,e)}finally{n?k():(E=!1,x=null)}}else E=!1}if("function"==typeof g)k=function(){g(R)};else if("undefined"!=typeof MessageChannel){var z=new MessageChannel,T=z.port2;z.port1.onmessage=R,k=function(){T.postMessage(null)}}else k=function(){b(R,0)};function U(e){x=e,E||(E=!0,k())}function B(e,n){C=b((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,U(_))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,a,o){var l=t.unstable_now();switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?l+o:l:o=l,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:p++,callback:a,priorityLevel:e,startTime:o,expirationTime:i=o+i,sortIndex:-1},o>l?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(v?(y(C),C=-1):v=!0,B(P,o-l))):(e.sortIndex=i,n(c,e),m||f||(m=!0,U(_))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},3840:(e,t,n)=>{e.exports=n(53)}},l={};function i(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return o[e](n,n.exports,i),n.exports}i.m=o,e=[],i.O=(t,n,r,a)=>{if(!n){var o=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],l=!0,s=0;s<n.length;s++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](n[s])))?n.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var o={};t=t||[null,n({}),n([]),n(n)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,i.d(a,o),a},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>({17:"66a53058864033594b5a",33:"249249217e5530292474",36:"33283339f0048832f806",175:"c41b637ed199f7bfab64",188:"8868536dd75ffb49e69d",199:"d0e1323c008e99cdee39",227:"007a10a354715ec34c7c",233:"9cf7e1e3b31bf6f350d3",282:"7ac88b52303ea06d1756",290:"459783b0b2bbf12c83c9",359:"3703f625233322d455d8",361:"ee3a4b14d362dc2e268a",389:"6608d8302e6bf9050519",390:"cd3d473393fe43f93377",393:"ee042d259823b49e6a96",405:"d77784db11f38df92bc4",420:"e247e73aadc2e0afd7ce",441:"a8892f8a98de2843d625",487:"b7c26ab12d6f044edb67",612:"9d06554b0fd4c66bbb9c",709:"9aa1732e0f20567e62f5",725:"706787aee6ba5f292d60",727:"464904236ae1e914b9bc",728:"b4400794ae2e66c95213",777:"b30f780a9447a3dd1f42",814:"9c5d0956e50f7bd6131e",852:"fd46fd6079897fb60586",887:"523842db2ab9982dfaed",905:"d41bfa4ea721b41dd660",971:"929f3d12a1ba596154b1"}[e]+".js"),i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},a="crowdfavorite.github.io:",i.l=(e,t,n,o)=>{if(r[e])r[e].push(t);else{var l,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==a+n){l=p;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",a+n),l.src=e),r[e]=[t];var d=(t,n)=>{l.onerror=l.onload=null,clearTimeout(h);var a=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={826:0};i.f.j=(t,n)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=a);var o=i.p+i.u(t),l=new Error;i.l(o,(n=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[o,l,s]=n,c=0;if(o.some((t=>0!==e[t]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(s)var u=s(i)}for(t&&t(n);c<o.length;c++)a=o[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=i.O(void 0,[736],(()=>i(7868)));s=i.O(s)})();