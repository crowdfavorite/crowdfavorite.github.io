"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[757],{3996:(e,t,n)=>{n.d(t,{Z:()=>z});var l=n(7294),i=n(5697),r=n.n(i);const a=function(e){let{title:t}=e;return l.createElement("h1",null,t)};a.propTypes={title:r().string.isRequired};const s=a;var o=n(9655),c=n(9414);function p(e){let{size:t="",className:n="",title:i=""}=e;return l.createElement(c.Z,{size:t,className:n,title:i,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}p.defaultProps={size:"24px",className:""},p.propTypes={size:r().string,className:r().string,title:r().string.isRequired};const d=p,m=function(){return l.createElement(o.rU,{to:"/",className:"action-link"},l.createElement(d,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home"))};function u(e){let{size:t,className:n,title:i}=e;return l.createElement(c.Z,{size:t,className:n,title:i,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}u.defaultProps={size:"24px",className:""},u.propTypes={size:r().string,className:r().string,title:r().string.isRequired};const h=u,E=function(e){let{url:t}=e;return l.createElement(o.rU,{className:"action-link",to:t},l.createElement(h,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))};E.propTypes={url:r().string.isRequired};const g=E,v=function(e){let{size:t="",className:n="",title:i=""}=e;return l.createElement(c.Z,{size:t,className:n,title:i,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};v.defaultProps={size:"24px",className:"",title:""},v.propTypes={size:r().string,className:r().string,title:r().string};const f=v,w=function(e){let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(f,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))};w.propTypes={downloadUrl:r().string.isRequired,downloadFile:r().string.isRequired};const N=w,P=function(e){let{title:t,downloadUrl:n,downloadFile:i,nextUrl:r}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(s,{title:t}):null,l.createElement("div",{className:"actions"},n&&i?l.createElement(N,{downloadUrl:n,downloadFile:i}):null,l.createElement(m,null),r?l.createElement(g,{url:r}):null))};P.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},P.propTypes={title:r().string,nextUrl:r().string,downloadUrl:r().string,downloadFile:r().string};const z=P},2606:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7294),i=n(5697),r=n.n(i),a=n(9414);const s=function(e){let{size:t=""}=e;return l.createElement(a.Z,{size:t,title:"Copy to clipboard",path:l.createElement("g",null,l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})};s.defaultProps={size:"24px"},s.propTypes={size:r().string};const o=s,c=function(e){let{code:t}=e;return l.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"code-copy-btn",title:"Copy to clipboard"},l.createElement(o,null))};c.propTypes={code:r().arrayOf(r().element).isRequired};const p=c,d=function(e){let{children:t}=e;return l.createElement("div",{className:"relative"},l.createElement("pre",null,t),l.createElement("div",{className:"absolute top-3 right-4"},l.createElement(p,{code:t})))};d.propTypes={children:r().arrayOf(r().element).isRequired};const m=d},9414:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(7294),i=n(5697),r=n.n(i);function a(e){let{size:t,className:n,title:i,path:r}=e;const a="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:a,title:i},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}a.defaultProps={size:"24px",className:"",path:""},a.propTypes={size:r().string,className:r().string,title:r().string.isRequired,path:r().element};const s=a},6757:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(7294),i=n(8093),r=n(3366),a=n(3996);var s=n(2606);function o(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{title:"Requirement"}),l.createElement("div",{className:"parser"},l.createElement(i.D,{rehypePlugins:[r.Z],children:"### PHP\nThe general php requirements are:\n\n* PHP >= 7.2.5\n* BCMath PHP Extension\n* Ctype PHP Extension\n* Fileinfo PHP extension\n* JSON PHP Extension\n* Mbstring PHP Extension\n* OpenSSL PHP Extension\n* PDO PHP Extension\n* Tokenizer PHP Extension\n* XML PHP Extension\n\n```\nbrew install php@7.4 or php@8.0\n```\nTo validate the installation of the required php extensions run php -i\n\n### Redis\nRedis >=v5 is required if the package CrowdFavorite/Perist is to be used for caching.\n\nIn addition the extension redis.so should be installed and enabled.\n```\ngit clone https://www.github.com/phpredis/phpredis.git\ncd phpredis\nphpize && ./configure && make && sudo make install\n\nAdd extension=redis.so in your php.ini\n```\n",components:{pre:s.Z}})),l.createElement(a.Z,null))}}}]);