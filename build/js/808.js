"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[808],{9052:(e,t,n)=>{n.d(t,{Z:()=>x});var l=n(7294),a=n(5697),s=n.n(a);const r=function(e){let{title:t}=e;return l.createElement("h1",null,t)};r.propTypes={title:s().string.isRequired};const i=r;var o=n(9655);function c(e){let{size:t,className:n,title:a,path:s}=e;const r="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:r,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},s))}c.defaultProps={size:"24px",className:"",path:""},c.propTypes={size:s().string,className:s().string,title:s().string.isRequired,path:s().string};const d=c;function m(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(d,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}m.defaultProps={size:"24px",className:""},m.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const u=m,p=function(){return l.createElement(o.rU,{to:"/",className:"action-link"},l.createElement(u,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home"))};function h(e){let{size:t,className:n,title:a}=e;return l.createElement(d,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}h.defaultProps={size:"24px",className:""},h.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const g=h,w=function(e){let{url:t}=e;return l.createElement(o.rU,{className:"action-link",to:t},l.createElement(g,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))};w.propTypes={url:s().string.isRequired};const v=w,f=function(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(d,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};f.defaultProps={size:"24px",className:""},f.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const N=f,E=function(e){let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(N,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))};E.propTypes={downloadUrl:s().string.isRequired,downloadFile:s().string.isRequired};const b=E,q=function(e){let{title:t,downloadUrl:n,downloadFile:a,nextUrl:s}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(i,{title:t}):null,l.createElement("div",{className:"actions"},n&&a?l.createElement(b,{downloadUrl:n,downloadFile:a}):null,l.createElement(p,null),s?l.createElement(v,{url:s}):null))};q.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},q.propTypes={title:s().string,nextUrl:s().string,downloadUrl:s().string,downloadFile:s().string};const x=q},6808:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(7294),a=n(8093),s=n(3366),r=n(9052);function i(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{title:"Api controllers",nextUrl:"/laravel/api/request"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[s.Z],children:'### Controllers on diet\nA route controller (child ) extends a BaseController abstract class (parent) which:\n* Captures the request in a magic call method if the requested method doesn\'t exist.\n* Validates if a request class exists and if it exists the arguments would be captured as:\n\n```\n$args = $request->validated(); //array\n```\n\n* Forwards the request to an action class which respond with an object containing:\n    * A success attribute boolean (true/false).\n    * A message attribute.\n    * An errors array, empty by default.\n    * A data attribute.\n    * A meta array if required.\n* Responds with a serialized to json object.  \n\n\n#### Anatomy\n\n1- The child controller should contain two arguments to indicate the path to the request classes and the action classes.\n\n```\nnamespace App\\Http\\Controllers\\Api\\Countries;\n\nuse App\\Http\\Controllers\\BaseController;\n\nclass CountryController extends BaseController\n{\n    protected string $requestBasePath = \'App\\\\Http\\\\Requests\\\\Api\\\\Countries\';\n    protected string $actionBasePath = \'App\\\\Actions\\\\Countries\';\n}\n```\n\n2 - A developer can opt to overwrite all the above by creating a method in the child controller class.\n\n#### Naming convention\nWith the abstraction done in the BaseController methods the following naming convention should be respected.\n\n<table>\n<tbody>\n<tr><td>Controller method name</td><td>methodName</td></tr>\n<tr><td>Request class name</td><td>MethodNameRequest</td></tr>\n<tr><td>Action class name</td><td>MethodNameAction</td></tr>\n<tr><td>Action class method name</td><td>execute</td></tr>\n</tbody>\n</table>\n\n\n#### Reference\n<p class="m-0 mb-05"><a class="link" href="https://laravel.com/docs/8.x/controllers" target="_blank">Laravel controllers</a></p>\n\n'})),l.createElement(r.Z,{nextUrl:"/laravel/api/request"}))}}}]);