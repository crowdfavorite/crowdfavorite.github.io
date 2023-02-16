"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[351],{3996:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7294),l=n(5697),s=n.n(l);const r=function(e){let{title:t}=e;return a.createElement("h1",null,t)};r.propTypes={title:s().string.isRequired};const i=r;var c=n(9655),o=n(9414);function d(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(o.Z,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}d.defaultProps={size:"24px",className:""},d.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const p=d,m=function(){return a.createElement(c.rU,{to:"/",className:"action-link"},a.createElement(p,{title:"home",size:"20px"}),a.createElement("span",{className:"action-label"},"Home"))};function u(e){let{size:t,className:n,title:l}=e;return a.createElement(o.Z,{size:t,className:n,title:l,path:a.createElement(a.Fragment,null,a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}u.defaultProps={size:"24px",className:""},u.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const h=u,g=function(e){let{url:t}=e;return a.createElement(c.rU,{className:"action-link",to:t},a.createElement(h,{title:"Next"}),a.createElement("span",{className:"action-label"},"Next"))};g.propTypes={url:s().string.isRequired};const v=g,E=function(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(o.Z,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};E.defaultProps={size:"24px",className:"",title:""},E.propTypes={size:s().string,className:s().string,title:s().string};const f=E,w=function(e){let{downloadUrl:t,downloadFile:n}=e;return a.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},a.createElement(f,{size:"20px"}),a.createElement("span",{className:"action-label"},"Download the code"))};w.propTypes={downloadUrl:s().string.isRequired,downloadFile:s().string.isRequired};const y=w,N=function(e){let{title:t,downloadUrl:n,downloadFile:l,nextUrl:s}=e;return a.createElement("div",{className:"action-bar"},t?a.createElement(i,{title:t}):null,a.createElement("div",{className:"actions"},n&&l?a.createElement(y,{downloadUrl:n,downloadFile:l}):null,a.createElement(m,null),s?a.createElement(v,{url:s}):null))};N.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},N.propTypes={title:s().string,nextUrl:s().string,downloadUrl:s().string,downloadFile:s().string};const b=N},2606:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),l=n(5697),s=n.n(l),r=n(9414);const i=function(e){let{size:t=""}=e;return a.createElement(r.Z,{size:t,title:"Copy to clipboard",path:a.createElement("g",null,a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})};i.defaultProps={size:"24px"},i.propTypes={size:s().string};const c=i,o=function(e){let{code:t}=e;return a.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"code-copy-btn",title:"Copy to clipboard"},a.createElement(c,null))};o.propTypes={code:s().arrayOf(s().element).isRequired};const d=o,p=function(e){let{children:t}=e;return a.createElement("div",{className:"relative"},a.createElement("pre",null,t),a.createElement("div",{className:"absolute top-3 right-4"},a.createElement(d,{code:t})))};p.propTypes={children:s().arrayOf(s().element).isRequired};const m=p},9414:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(5697),s=n.n(l);function r(e){let{size:t,className:n,title:l,path:s}=e;const r="inline-block align-middle"+(n?` ${n}`:"");return a.createElement("i",{className:r,title:l},a.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},s))}r.defaultProps={size:"24px",className:"",path:""},r.propTypes={size:s().string,className:s().string,title:s().string.isRequired,path:s().element};const i=r},5351:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),l=n(8093),s=n(3366),r=n(3996);var i=n(2606);function c(){return a.createElement(a.Fragment,null,a.createElement(r.Z,{title:"Plugin",nextUrl:"/wordpress/plugin/logger"}),a.createElement("div",{className:"parser"},a.createElement(l.D,{rehypePlugins:[s.Z],children:"The Facade pattern is commonly used in PHP applications, where the facade classes simplify the work with complex libraries.\nFacade can be recognized in a class that has a simple interface, but delegates most of the work to other classes.\n\nTo create a custom facade start by creating an empty class extending the core Facade class. \nThe facade class can be places anywhere in the plugin src folders. However it is advisable to place it in the Facade folder.\n\n```\n//src/Facade/MyFacade.php\n\nnamespace Boilerplate\\Facade;\n\nuse Core\\App\\Facade;\n\nclass MyFacade extends Facade\n{\n}\n```\n\nThen we need to bind the facade class to the container. When a facade is called we check its existence in the container instance.\nIf it exists we resolve its dependency. A custom service container should be created as\n\n```\nnamespace Boilerplate\\Providers;\n\nuse Boilerplate\\Facade\\MyFacade;\nuse Boilerplate\\path to MyClass\\MyClass;\nuse Core\\Providers\\AppServiceProvider;\n\nclass MyClassServiceProvider extends AppServiceProvider\n{\n\t/**\n\t * @var array\n\t */\n\tprotected $provides = [\n\t\t'MyFacade::class',\n\t];\n\n\t/**\n\t * Container registration method\n\t */\n\tpublic function register()\n\t{\n\t\t$this->getContainer()->add('MyFacade::class', () => new MyClass());\n\t}\n}\n```\n\nAs illustrated above a static call to MyFacade will resolve a new instance of MyClass. The usage will be as\n\n```\nuse Boilerplate\\Facade\\MyFacade;\n\nclass SomeClass\n{\n    public function someMethod()\n    {\n        MyFacade::someMyClassMethod(); //equivalent to (new MyClass())->someMyClassMethod();\n    }\n}\n\n```\n",components:{pre:i.Z}})),a.createElement(r.Z,{nextUrl:"/wordpress/plugin/logger"}))}}}]);