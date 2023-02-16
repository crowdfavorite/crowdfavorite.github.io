"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[685],{3996:(e,t,n)=>{n.d(t,{Z:()=>z});var l=n(7294),a=n(5697),r=n.n(a);const s=function(e){let{title:t}=e;return l.createElement("h1",null,t)};s.propTypes={title:r().string.isRequired};const i=s;var o=n(9655),c=n(9414);function d(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}d.defaultProps={size:"24px",className:""},d.propTypes={size:r().string,className:r().string,title:r().string.isRequired};const m=d,p=function(){return l.createElement(o.rU,{to:"/",className:"action-link"},l.createElement(m,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home"))};function u(e){let{size:t,className:n,title:a}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}u.defaultProps={size:"24px",className:""},u.propTypes={size:r().string,className:r().string,title:r().string.isRequired};const h=u,g=function(e){let{url:t}=e;return l.createElement(o.rU,{className:"action-link",to:t},l.createElement(h,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))};g.propTypes={url:r().string.isRequired};const E=g,f=function(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};f.defaultProps={size:"24px",className:"",title:""},f.propTypes={size:r().string,className:r().string,title:r().string};const v=f,N=function(e){let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(v,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))};N.propTypes={downloadUrl:r().string.isRequired,downloadFile:r().string.isRequired};const w=N,b=function(e){let{title:t,downloadUrl:n,downloadFile:a,nextUrl:r}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(i,{title:t}):null,l.createElement("div",{className:"actions"},n&&a?l.createElement(w,{downloadUrl:n,downloadFile:a}):null,l.createElement(p,null),r?l.createElement(E,{url:r}):null))};b.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},b.propTypes={title:r().string,nextUrl:r().string,downloadUrl:r().string,downloadFile:r().string};const z=b},2606:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(7294),a=n(5697),r=n.n(a),s=n(9414);const i=function(e){let{size:t=""}=e;return l.createElement(s.Z,{size:t,title:"Copy to clipboard",path:l.createElement("g",null,l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})};i.defaultProps={size:"24px"},i.propTypes={size:r().string};const o=i,c=function(e){let{code:t}=e;return l.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},l.createElement(o,null))};c.propTypes={code:r().arrayOf(r().element).isRequired};const d=c,m=function(e){let{children:t}=e;return l.createElement("div",{className:"relative"},l.createElement("pre",null,t),l.createElement("div",{className:"absolute top-3 right-4"},l.createElement(d,{code:t})))};m.propTypes={children:r().arrayOf(r().element).isRequired};const p=m},9414:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294),a=n(5697),r=n.n(a);function s(e){let{size:t,className:n,title:a,path:r}=e;const s="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:s,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}s.defaultProps={size:"24px",className:"",path:""},s.propTypes={size:r().string,className:r().string,title:r().string.isRequired,path:r().element};const i=s},6685:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(7294),a=n(8093),r=n(3366),s=n(3996);var i=n(2606);function o(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{title:"Plugin"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[r.Z],children:"The logger service allows the selection of the channel to log to (default: console):\n\nThe available channels are:\n\n<table>\n<thead>\n<tr>\n    <td><b>Channel</b></td>\n    <td><b>Description</b></td>\n</tr>\n</thead>\n<tbody>\n<tr>\n    <td>Console</td>\n    <td>Default console logging.</td>\n</tr>\n<tr>\n    <td>File</td>\n    <td>Log to file.</td>\n</tr>\n<tr>\n    <td>Slack</td>\n    <td>Log to a slack channel.</td>\n</tr>\n</tbody>\n</table>\n\n<br>\n\nTo specify a log channel we chain the Log helper with the channel method.\n\n```\nuse Core\\Facade\\Log;\n\nclass MyClass\n{\n    public function myMethod\n    {\n        //Log::channel('channelName');\n        Log::channel('file')->info('some message', ['logger' => __CLASS__, ....])\n    }\n}\n```\n\nThe registration in the log file will be\n\n```\n2021-03-31 16:25 > INFO > some message {\"logger\":\"MyClass\"}\n```\n",components:{pre:i.Z}})),l.createElement(s.Z,null))}}}]);