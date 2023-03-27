"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[361],{2192:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(7294);const a=e=>{let{title:t}=e;return l.createElement("h1",null,t)};var r=n(9655),c=n(5274);const i=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})},o=()=>l.createElement(r.rU,{to:"/",className:"action-link"},l.createElement(i,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home")),s=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})},m=e=>{let{url:t}=e;return l.createElement(r.rU,{className:"action-link",to:t},l.createElement(s,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))},d=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})},h=e=>{let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(d,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))},p=e=>{let{title:t,downloadUrl:n,downloadFile:r,nextUrl:c}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(a,{title:t}):null,l.createElement("div",{className:"actions"},n&&r?l.createElement(h,{downloadUrl:n,downloadFile:r}):null,l.createElement(o,null),c?l.createElement(m,{url:c}):null))}},2873:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7294),a=n(5697),r=n.n(a),c=n(5274);const i=e=>{let{size:t="20px",className:n="",title:a="Copy to clipboard"}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("g",null,l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})},o=e=>{let{code:t}=e;return l.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},l.createElement(i,null))},s=function(e){let{children:t}=e;return l.createElement("div",{className:"relative"},l.createElement("pre",null,t),l.createElement("div",{className:"absolute top-3 right-4"},l.createElement(o,{code:t})))};s.propTypes={children:r().arrayOf(r().element).isRequired};const m=s},5274:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294);const a=e=>{let{size:t="24px",className:n="",title:a,path:r}=e;const c="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:c,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}},7361:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(7294),a=n(8093),r=n(3366),c=n(2192);var i=n(2873);const o=()=>l.createElement(l.Fragment,null,l.createElement(c.Z,{title:"Plugin",nextUrl:"/wordpress/plugin/facades"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[r.Z],children:"### Dependency injection\n\nAt it's core a container is simply a dependency injection. \nBy Binding entities to the container with their related arguments, we can allow passing the arguments as dependencies in a constructor method.\n\n```\napp()->add(Controller::class)->addArgument(Model::class);\napp()->add(Model::class);\n\nclass Controller\n{\n    /**\n     * @var $model\n     */\n    public Model $model;\n\n    /**\n     * Construct.\n     *\n     * @param Model $model\n     */\n    public function __construct(Model $model)\n    {\n        $this->model = $model;\n    }\n}\n```\n\n#### Auto Wiring\nBy enabling the auto wiring the container can automatically resolve the classes/objects and all their dependencies. This is achievable by adding type hinting.\n\n```\n/**\n * Construct.\n *\n * @param ViewController $viewController\n */\npublic function __construct(ViewController $viewController)\n{\n    $this->viewController = $viewController;\n}\n```\n\nThe limitation of the auto wiring is that all injection should be objects.\nThe auto wiring is enabled when the container is delegated to the ReflectionContainer class.\n\n\n",components:{pre:i.Z}})),l.createElement(c.Z,{nextUrl:"/wordpress/plugin/facades"}))}}]);