"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[727],{2192:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294);const n=e=>{let{title:t}=e;return l.createElement("h1",null,t)};var c=a(9655),s=a(5274);const r=e=>{let{size:t="24px",className:a="",title:n=""}=e;return l.createElement(s.Z,{size:t,className:a,title:n,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})},i=()=>l.createElement(c.rU,{to:"/",className:"action-link"},l.createElement(r,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home")),o=e=>{let{size:t="24px",className:a="",title:n=""}=e;return l.createElement(s.Z,{size:t,className:a,title:n,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})},d=e=>{let{url:t}=e;return l.createElement(c.rU,{className:"action-link",to:t},l.createElement(o,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))},m=e=>{let{size:t="24px",className:a="",title:n=""}=e;return l.createElement(s.Z,{size:t,className:a,title:n,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})},p=e=>{let{downloadUrl:t,downloadFile:a}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:a},l.createElement(m,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))},h=e=>{let{title:t,downloadUrl:a,downloadFile:c,nextUrl:s}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(n,{title:t}):null,l.createElement("div",{className:"actions"},a&&c?l.createElement(p,{downloadUrl:a,downloadFile:c}):null,l.createElement(i,null),s?l.createElement(d,{url:s}):null))}},2873:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(7294),n=a(5697),c=a.n(n),s=a(5274);const r=e=>{let{size:t="20px",className:a="",title:n="Copy to clipboard"}=e;return l.createElement(s.Z,{size:t,className:a,title:n,path:l.createElement("g",null,l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})},i=e=>{let{code:t}=e;return l.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},l.createElement(r,null))},o=function(e){let{children:t}=e;return l.createElement("div",{className:"relative"},l.createElement("pre",null,t),l.createElement("div",{className:"absolute top-3 right-4"},l.createElement(i,{code:t})))};o.propTypes={children:c().arrayOf(c().element).isRequired};const d=o},5274:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);const n=e=>{let{size:t="24px",className:a="",title:n,path:c}=e;const s="inline-block align-middle"+(a?` ${a}`:"");return l.createElement("i",{className:s,title:n},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},c))}},2727:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(7294),n=a(8093),c=a(3366),s=a(2192);var r=a(2873);const i=()=>l.createElement(l.Fragment,null,l.createElement(s.Z,{title:"Plugin",nextUrl:"/wordpress/plugin/logger"}),l.createElement("div",{className:"parser"},l.createElement(n.D,{rehypePlugins:[c.Z],children:"The Facade pattern is commonly used in PHP applications, where the facade classes simplify the work with complex libraries.\nFacade can be recognized in a class that has a simple interface, but delegates most of the work to other classes.\n\nTo create a custom facade start by creating an empty class extending the core Facade class. \nThe facade class can be places anywhere in the plugin src folders. However it is advisable to place it in the Facade folder.\n\n```\n//src/Facade/MyFacade.php\n\nnamespace Boilerplate\\Facade;\n\nuse Core\\App\\Facade;\n\nclass MyFacade extends Facade\n{\n}\n```\n\nThen we need to bind the facade class to the container. When a facade is called we check its existence in the container instance.\nIf it exists we resolve its dependency. A custom service container should be created as\n\n```\nnamespace Boilerplate\\Providers;\n\nuse Boilerplate\\Facade\\MyFacade;\nuse Boilerplate\\path to MyClass\\MyClass;\nuse Core\\Providers\\AppServiceProvider;\n\nclass MyClassServiceProvider extends AppServiceProvider\n{\n\t/**\n\t * @var array\n\t */\n\tprotected $provides = [\n\t\t'MyFacade::class',\n\t];\n\n\t/**\n\t * Container registration method\n\t */\n\tpublic function register()\n\t{\n\t\t$this->getContainer()->add('MyFacade::class', () => new MyClass());\n\t}\n}\n```\n\nAs illustrated above a static call to MyFacade will resolve a new instance of MyClass. The usage will be as\n\n```\nuse Boilerplate\\Facade\\MyFacade;\n\nclass SomeClass\n{\n    public function someMethod()\n    {\n        MyFacade::someMyClassMethod(); //equivalent to (new MyClass())->someMyClassMethod();\n    }\n}\n\n```\n",components:{pre:r.Z}})),l.createElement(s.Z,{nextUrl:"/wordpress/plugin/logger"}))}}]);