"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[372],{9052:(e,t,n)=>{n.d(t,{Z:()=>P});var l=n(7294),a=n(5697),s=n.n(a);const r=function(e){let{title:t}=e;return l.createElement("h1",null,t)};r.propTypes={title:s().string.isRequired};const i=r;var o=n(9655);function c(e){let{size:t,className:n,title:a,path:s}=e;const r="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:r,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},s))}c.defaultProps={size:"24px",className:"",path:""},c.propTypes={size:s().string,className:s().string,title:s().string.isRequired,path:s().string};const p=c;function m(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(p,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}m.defaultProps={size:"24px",className:""},m.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const d=m,u=function(){return l.createElement(o.rU,{to:"/",className:"action-link"},l.createElement(d,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home"))};function h(e){let{size:t,className:n,title:a}=e;return l.createElement(p,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}h.defaultProps={size:"24px",className:""},h.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const g=h,f=function(e){let{url:t}=e;return l.createElement(o.rU,{className:"action-link",to:t},l.createElement(g,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))};f.propTypes={url:s().string.isRequired};const w=f,E=function(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(p,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};E.defaultProps={size:"24px",className:""},E.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const v=E,N=function(e){let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(v,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))};N.propTypes={downloadUrl:s().string.isRequired,downloadFile:s().string.isRequired};const b=N,z=function(e){let{title:t,downloadUrl:n,downloadFile:a,nextUrl:s}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(i,{title:t}):null,l.createElement("div",{className:"actions"},n&&a?l.createElement(b,{downloadUrl:n,downloadFile:a}):null,l.createElement(u,null),s?l.createElement(w,{url:s}):null))};z.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},z.propTypes={title:s().string,nextUrl:s().string,downloadUrl:s().string,downloadFile:s().string};const P=z},6372:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(7294),a=n(8093),s=n(3366),r=n(9052);function i(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{title:"PhpStan"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[s.Z],children:'PHPStan focuses on finding errors in your code without actually running it. \n\n## Installation\n\nThe installation and configuration of the package are detailed below\n\n### Composer\n```\t\ncomposer require --dev nunomaduro/larastan\n```\nIn composer.json the following script should be added\n```\n"phpstan": "vendor/bin/phpstan analyse -c phpstan.neon --memory-limit=2G --no-progress"\n```\nThen run composer update.\n\n### PhpStorm\n\nIn PhpStorm’s preferences php quality tools menu\n\nPhpStorm > Languages & Frameworks > PHP > Quality Tools\n\nPoint to phpstan executable located at \n\nvendor > bin > phpstan\n\nThen click on the validate button.\n\nThe configuration of phpstan is stored in phpstan.neon located at the root of the project folder.\n\n<p class="m-0 mb-05"><a class="link" href="/assets/downloads/quality/phpstan.neon" download="phpstan.neon">PhpStan config</a></p>\n\nIn the inspection options the config file should be selected.\n\n\n### References\n<p class="m-0 mb-05"><a class="link" href="https://github.com/nunomaduro/larastan" target="_blank">Larastan github</a></p>  \n<p class="m-0 mb-05"><a class="link" href="https://www.jetbrains.com/help/phpstorm/using-phpstan.html" target="_blank">Phpstorm docs</a></p> \n'})),l.createElement(r.Z,null))}}}]);