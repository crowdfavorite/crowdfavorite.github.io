"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[709],{2192:(e,t,l)=>{l.d(t,{Z:()=>d});var n=l(7294);const a=e=>{let{title:t}=e;return n.createElement("h1",null,t)};var r=l(9655),s=l(5274);const c=e=>{let{size:t="24px",className:l="",title:a=""}=e;return n.createElement(s.Z,{size:t,className:l,title:a,path:n.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})},o=()=>n.createElement(r.rU,{to:"/",className:"action-link"},n.createElement(c,{title:"home",size:"20px"}),n.createElement("span",{className:"action-label"},"Home")),i=e=>{let{size:t="24px",className:l="",title:a=""}=e;return n.createElement(s.Z,{size:t,className:l,title:a,path:n.createElement(n.Fragment,null,n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})},p=e=>{let{url:t}=e;return n.createElement(r.rU,{className:"action-link",to:t},n.createElement(i,{title:"Next"}),n.createElement("span",{className:"action-label"},"Next"))},m=e=>{let{size:t="24px",className:l="",title:a=""}=e;return n.createElement(s.Z,{size:t,className:l,title:a,path:n.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})},h=e=>{let{downloadUrl:t,downloadFile:l}=e;return n.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:l},n.createElement(m,{size:"20px"}),n.createElement("span",{className:"action-label"},"Download the code"))},d=e=>{let{title:t,downloadUrl:l,downloadFile:r,nextUrl:s}=e;return n.createElement("div",{className:"action-bar"},t?n.createElement(a,{title:t}):null,n.createElement("div",{className:"actions"},l&&r?n.createElement(h,{downloadUrl:l,downloadFile:r}):null,n.createElement(o,null),s?n.createElement(p,{url:s}):null))}},2873:(e,t,l)=>{l.d(t,{Z:()=>p});var n=l(7294),a=l(5697),r=l.n(a),s=l(5274);const c=e=>{let{size:t="24px",className:l="",title:a="Copy to clipboard"}=e;return n.createElement(s.Z,{size:t,className:l,title:a,path:n.createElement("g",null,n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),n.createElement("g",null,n.createElement("g",null,n.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})},o=e=>{let{code:t}=e;return n.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},n.createElement(c,null))},i=function(e){let{children:t}=e;return n.createElement("div",{className:"relative"},n.createElement("pre",null,t),n.createElement("div",{className:"absolute top-3 right-4"},n.createElement(o,{code:t})))};i.propTypes={children:r().arrayOf(r().element).isRequired};const p=i},5274:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(7294);const a=e=>{let{size:t="24px",className:l="",title:a,path:r}=e;const s="inline-block align-middle"+(l?` ${l}`:"");return n.createElement("i",{className:s,title:a},n.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}},1709:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var n=l(7294),a=l(8093),r=l(3366),s=l(2192);var c=l(2873);const o=()=>n.createElement(n.Fragment,null,n.createElement(s.Z,{title:"Php CS Fixer"}),n.createElement("div",{className:"parser"},n.createElement(a.D,{rehypePlugins:[r.Z],children:'PHP CS Fixer stands for PHP Coding Standards Fixer.\n\nPhp CS Fixer fixes the code to follow standards as PSR-1, PSR-2, etc., or other community driven. \n\n## Installation\n\nThe installation and configuration of the package are detailed below\n\n### Composer\n```\t\ncomposer require --dev friendsofphp/php-cs-fixer\n```\nIn composer.json the following script should be added \n```\n"php-cs-fixer": "php-cs-fixer --config=./.php_cs"\n```\nThen run composer update.\n\n### PhpStorm\n\nIn PhpStorm’s preferences php quality tools menu \n\nPhpStorm > Languages & Frameworks > PHP > Quality Tools\n\nPoint to php-cs-fixer executable located at \n\nvendor > bin > php-cs-fixer\n\nThen click on the validate button.\n\nLaravel code styling standard follows mainly PSR-2. \n\nHowever the community tailored a preset for Laravel which can be downloaded from:\n\n<p class="m-0 mb-05"><a class="link" href="/assets/downloads/style/php-cs-laravel.php" download="php-cs-laravel.php">Laravel preset</a></p>\n\nThe preset file should be renamed to .php_cs and placed at the root of the Laravel project.\n\nIn the php cs fixer inspection options choose custom as ruleset and point to the file .php_cs\n\n### References\n<p class="m-0 mb-05"><a class="link" href="https://github.com/FriendsOfPHP/PHP-CS-Fixer" target="_blank">PHP CS Fixer github</a></p>\n<p class="m-0 mb-05"><a class="link" href="https://www.jetbrains.com/help/phpstorm/using-php-cs-fixer.html#enabling-tool-inspection" target="_blank">Phpstorm docs</a></p> \n',components:{pre:c.Z}})),n.createElement(s.Z,null))}}]);