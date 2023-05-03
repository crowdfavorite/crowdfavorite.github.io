"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[441],{2192:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(7294);const a=e=>{let{title:t}=e;return l.createElement("h1",null,t)};var r=n(9655),o=n(5274);const i=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(o.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})},c=()=>l.createElement(r.rU,{to:"/",className:"action-link"},l.createElement(i,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home")),s=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(o.Z,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})},d=e=>{let{url:t}=e;return l.createElement(r.rU,{className:"action-link",to:t},l.createElement(s,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))},m=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(o.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})},h=e=>{let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(m,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))},u=e=>{let{title:t,downloadUrl:n,downloadFile:r,nextUrl:o}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(a,{title:t}):null,l.createElement("div",{className:"actions"},n&&r?l.createElement(h,{downloadUrl:n,downloadFile:r}):null,l.createElement(c,null),o?l.createElement(d,{url:o}):null))}},2873:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(7294),a=n(5697),r=n.n(a),o=n(5274);const i=e=>{let{size:t="24px",className:n="",title:a="Copy to clipboard"}=e;return l.createElement(o.Z,{size:t,className:n,title:a,path:l.createElement("g",null,l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})},c=e=>{let{code:t}=e;return l.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},l.createElement(i,null))},s=function(e){let{children:t}=e;return l.createElement("div",{className:"relative"},l.createElement("pre",null,t),l.createElement("div",{className:"absolute top-3 right-4"},l.createElement(c,{code:t})))};s.propTypes={children:r().arrayOf(r().element).isRequired};const d=s},5274:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294);const a=e=>{let{size:t="24px",className:n="",title:a,path:r}=e;const o="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:o,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}},441:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(7294),a=n(8093),r=n(3366),o=n(2192);var i=n(2873);const c=()=>l.createElement(l.Fragment,null,l.createElement(o.Z,{title:"Plugin"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[r.Z],children:"The logger functionality is based on a PSR-3 interface. Logs can be save to a log file, emails and the database.\nAs a primary implementation we will limit the logging to a file.  \n\nThe implementation of the logger is based on the package monolog.  \n\nCustom log levels are not supported. Only eight RFC 5424 levels are available.\nThe supported log levels / helpers are:\n\n<table>\n<thead>\n<tr>\n    <td><b>Helper</b></td>\n    <td><b>Log level</b></td>\n    <td><b>Description</b></td>\n</tr>\n</thead>\n<tbody>\n<tr>\n    <td>debug</td>\n    <td>DEBUG(100)</td>\n    <td>Debug information.</td>\n</tr>\n<tr>\n    <td>info</td>\n    <td>INFO(200)</td>\n    <td>General events.</td>\n</tr>\n<tr>\n    <td>notice</td>\n    <td>NOTICE(250)</td>\n    <td>Significant events.</td>\n</tr>\n<tr>\n    <td>warning</td>\n    <td>WARNING(300)</td>\n    <td>Exceptional occurences but not errors.</td>\n</tr>\n<tr>\n    <td>error</td>\n    <td>ERROR(400)</td>\n    <td>Runtime errors which do not require immediate action.</td>\n</tr>\n<tr>\n    <td>critical</td>\n    <td>CRITICAL(500)</td>\n    <td>Critical conditions.</td>\n</tr>\n<tr>\n    <td>alert</td>\n    <td>ALERT(550)</td>\n    <td>Immediate action must be taken.</td>\n</tr>\n<tr>\n    <td>emergency</td>\n    <td>EMERGENCY(600)</td>\n    <td>Sytem is unusable.</td>\n</tr>\n</tbody>\n</table>\n\n<br>\n\nThe usage of the logger will be as\n\n```\nuse Core\\Facade\\Log;\n\nclass MyClass\n{\n    public function myMethod\n    {\n        //Log::helperMethod('message', [contextArray]);\n        Log::info('some message', ['logger' => __CLASS__, ....])\n    }\n}\n```\n\nThe registration in the log file will be\n\n```\n2021-03-31 16:25 > INFO > some message {\"logger\":\"MyClass\"}\n```\n\nThe configuration file of the logger is at:\n\n```\n//Core > Config > log.php\n\n[\n\t'defaultChannel' => 'console',\n\t'channels' => [\n\t\t'file' => [\n\t\t\t'dateFormat' => \"Y-m-d H:i:s\",\n\t\t\t'output' => \"%datetime% > %level_name% > %message% %context% %extra%\\n\",\n\t\t],\n\t\t'slack' => [\n\t\t\t'dateFormat' => \"Y-m-d H:i:s\",\n\t\t\t'output' => \"%datetime% > %level_name% > %message% %context% %extra%\\n\",\n\t\t\t'token' => 'xoxb-2883774866-2012686074454-laeDke1lOzZIA2J59FdTiUtv',\n\t\t\t'channel' => '#wordpressbot',\n\t\t\t'bot' => 'wpbot',\n\t\t]\n\t],\n]\n```\n",components:{pre:i.Z}})),l.createElement(o.Z,null))}}]);