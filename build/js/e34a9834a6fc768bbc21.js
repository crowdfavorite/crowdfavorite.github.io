"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[431],{3996:(e,t,n)=>{n.d(t,{Z:()=>z});var a=n(7294),l=n(5697),r=n.n(l);const s=function(e){let{title:t}=e;return a.createElement("h1",null,t)};s.propTypes={title:r().string.isRequired};const i=s;var c=n(9655),o=n(9414);function m(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(o.Z,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}m.defaultProps={size:"24px",className:""},m.propTypes={size:r().string,className:r().string,title:r().string.isRequired};const u=m,d=function(){return a.createElement(c.rU,{to:"/",className:"action-link"},a.createElement(u,{title:"home",size:"20px"}),a.createElement("span",{className:"action-label"},"Home"))};function p(e){let{size:t,className:n,title:l}=e;return a.createElement(o.Z,{size:t,className:n,title:l,path:a.createElement(a.Fragment,null,a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}p.defaultProps={size:"24px",className:""},p.propTypes={size:r().string,className:r().string,title:r().string.isRequired};const h=p,g=function(e){let{url:t}=e;return a.createElement(c.rU,{className:"action-link",to:t},a.createElement(h,{title:"Next"}),a.createElement("span",{className:"action-label"},"Next"))};g.propTypes={url:r().string.isRequired};const E=g,f=function(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(o.Z,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};f.defaultProps={size:"24px",className:"",title:""},f.propTypes={size:r().string,className:r().string,title:r().string};const v=f,w=function(e){let{downloadUrl:t,downloadFile:n}=e;return a.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},a.createElement(v,{size:"20px"}),a.createElement("span",{className:"action-label"},"Download the code"))};w.propTypes={downloadUrl:r().string.isRequired,downloadFile:r().string.isRequired};const N=w,b=function(e){let{title:t,downloadUrl:n,downloadFile:l,nextUrl:r}=e;return a.createElement("div",{className:"action-bar"},t?a.createElement(i,{title:t}):null,a.createElement("div",{className:"actions"},n&&l?a.createElement(N,{downloadUrl:n,downloadFile:l}):null,a.createElement(d,null),r?a.createElement(E,{url:r}):null))};b.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},b.propTypes={title:r().string,nextUrl:r().string,downloadUrl:r().string,downloadFile:r().string};const z=b},2606:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),l=n(5697),r=n.n(l),s=n(9414);const i=function(e){let{size:t=""}=e;return a.createElement(s.Z,{size:t,title:"Copy to clipboard",path:a.createElement("g",null,a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})};i.defaultProps={size:"24px"},i.propTypes={size:r().string};const c=i,o=function(e){let{code:t}=e;return a.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"code-copy-btn",title:"Copy to clipboard"},a.createElement(c,null))};o.propTypes={code:r().arrayOf(r().element).isRequired};const m=o,u=function(e){let{children:t}=e;return a.createElement("div",{className:"relative"},a.createElement("pre",null,t),a.createElement("div",{className:"absolute top-3 right-4"},a.createElement(m,{code:t})))};u.propTypes={children:r().arrayOf(r().element).isRequired};const d=u},9414:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(5697),r=n.n(l);function s(e){let{size:t,className:n,title:l,path:r}=e;const s="inline-block align-middle"+(n?` ${n}`:"");return a.createElement("i",{className:s,title:l},a.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}s.defaultProps={size:"24px",className:"",path:""},s.propTypes={size:r().string,className:r().string,title:r().string.isRequired,path:r().element};const i=s},1431:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),l=n(8093),r=n(3366),s=n(3996);var i=n(2606);function c(){return a.createElement(a.Fragment,null,a.createElement(s.Z,{title:"Api actions"}),a.createElement("div",{className:"parser"},a.createElement(l.D,{rehypePlugins:[r.Z],children:"### Action class\nThe action benefits from a single public method named 'execute'.  \nThe method 'execute' accept one argument which can be:\n* An array of arguments that can be destructured as:\n\n\n  ```\n  public function execute(array $args) {\n    list(\n        'id' => $id,\n        'name' => $name,\n    ) = $args;\n    .\n    .\n    .\n  }\n  ```\n* A request instance could be also used as a single argument which potentially combines:\n    * A file raw data in case the action is used to upload.\n    * And the validated arguments coming from the request class.\n\n\n    ```\n    public function execute(Request $request) {\n        list(\n            'id' => $id,\n            'name' => $name,\n        ) = $request->validated();\n        \n        //File raw data: $request->file('originalFileName'); \n        .\n        .\n        .\n    }\n    ```\n* The action class is responsible to:\n    * Process the business logic as DB queries, Api calls ...\n    * Cache the data;\n    * Transform the data with a transformer class\n    * Event\n    * ... etc.\n* Format the response back to the BaseController.\n\n\n```\n  /**\n  * @param array $data\n  * @return $this\n  */\n  private function formResponse(array $data): self\n  {\n  $this->success = true;\n  \n          $this->data = $data;\n  \n          return $this;\n      }\n```\n",components:{pre:i.Z}})),a.createElement(s.Z,null))}}}]);