"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[271],{1814:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7294),l=n(5697),s=n.n(l);const r=function(e){let{title:t}=e;return a.createElement("h1",null,t)};r.propTypes={title:s().string.isRequired};const i=r;var c=n(9655);function o(e){let{size:t,className:n,title:l,path:s}=e;const r="inline-block align-middle"+(n?` ${n}`:"");return a.createElement("i",{className:r,title:l},a.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},s))}o.defaultProps={size:"24px",className:"",path:""},o.propTypes={size:s().string,className:s().string,title:s().string.isRequired,path:s().string};const m=o;function d(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(m,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}d.defaultProps={size:"24px",className:""},d.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const u=d,p=function(){return a.createElement(c.rU,{to:"/",className:"action-link"},a.createElement(u,{title:"home",size:"20px"}),a.createElement("span",{className:"action-label"},"Home"))};function h(e){let{size:t,className:n,title:l}=e;return a.createElement(m,{size:t,className:n,title:l,path:a.createElement(a.Fragment,null,a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}h.defaultProps={size:"24px",className:""},h.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const g=h,f=function(e){let{url:t}=e;return a.createElement(c.rU,{className:"action-link",to:t},a.createElement(g,{title:"Next"}),a.createElement("span",{className:"action-label"},"Next"))};f.propTypes={url:s().string.isRequired};const E=f,w=function(e){let{downloadUrl:t,downloadFile:n}=e;return a.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},a.createElement("i",{className:"micon micon-download micon-grey micon-xs"}),a.createElement("span",{className:"action-label"},"Download the code"))};w.propTypes={downloadUrl:s().string.isRequired,downloadFile:s().string.isRequired};const N=w,v=function(e){let{title:t,downloadUrl:n,downloadFile:l,nextUrl:s}=e;return a.createElement("div",{className:"action-bar"},t?a.createElement(i,{title:t}):null,a.createElement("div",{className:"actions"},n&&l?a.createElement(N,{downloadUrl:n,downloadFile:l}):null,a.createElement(p,null),s?a.createElement(E,{url:s}):null))};v.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},v.propTypes={title:s().string,nextUrl:s().string,downloadUrl:s().string,downloadFile:s().string};const b=v},1271:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),l=n(8093),s=n(3366),r=n(1814);var i=n(3286);function c(){return a.createElement(a.Fragment,null,a.createElement(r.Z,{title:"Api actions"}),a.createElement(i.a,{style:{marginBottom:"2rem"}},a.createElement(i.a.Item,{href:"/"},"Home"),a.createElement(i.a.Item,{href:"#/laravel/api/actions",selected:!0},"Api actions")),a.createElement("div",{className:"parser"},a.createElement(l.D,{rehypePlugins:[s.Z],children:"### Action class\nThe action benefits from a single public method named 'execute'.  \nThe method 'execute' accept one argument which can be:\n* An array of arguments that can be destructured as:\n\n\n  ```\n  public function execute(array $args) {\n    list(\n        'id' => $id,\n        'name' => $name,\n    ) = $args;\n    .\n    .\n    .\n  }\n  ```\n* A request instance could be also used as a single argument which potentially combines:\n    * A file raw data in case the action is used to upload.\n    * And the validated arguments coming from the request class.\n\n\n    ```\n    public function execute(Request $request) {\n        list(\n            'id' => $id,\n            'name' => $name,\n        ) = $request->validated();\n        \n        //File raw data: $request->file('originalFileName'); \n        .\n        .\n        .\n    }\n    ```\n* The action class is responsible to:\n    * Process the business logic as DB queries, Api calls ...\n    * Cache the data;\n    * Transform the data with a transformer class\n    * Event\n    * ... etc.\n* Format the response back to the BaseController.\n\n\n```\n  /**\n  * @param array $data\n  * @return $this\n  */\n  private function formResponse(array $data): self\n  {\n  $this->success = true;\n  \n          $this->data = $data;\n  \n          return $this;\n      }\n```\n"})),a.createElement(r.Z,null))}}}]);