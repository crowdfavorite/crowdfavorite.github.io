"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[28],{9052:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(7294),a=n(5697),i=n.n(a);const s=function(e){let{title:t}=e;return l.createElement("h1",null,t)};s.propTypes={title:i().string.isRequired};const r=s;var o=n(9655);function c(e){let{size:t,className:n,title:a,path:i}=e;const s="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:s,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},i))}c.defaultProps={size:"24px",className:"",path:""},c.propTypes={size:i().string,className:i().string,title:i().string.isRequired,path:i().string};const d=c;function m(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(d,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}m.defaultProps={size:"24px",className:""},m.propTypes={size:i().string,className:i().string,title:i().string.isRequired};const u=m,p=function(){return l.createElement(o.rU,{to:"/",className:"action-link"},l.createElement(u,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home"))};function h(e){let{size:t,className:n,title:a}=e;return l.createElement(d,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}h.defaultProps={size:"24px",className:""},h.propTypes={size:i().string,className:i().string,title:i().string.isRequired};const g=h,w=function(e){let{url:t}=e;return l.createElement(o.rU,{className:"action-link",to:t},l.createElement(g,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))};w.propTypes={url:i().string.isRequired};const v=w,E=function(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(d,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};E.defaultProps={size:"24px",className:""},E.propTypes={size:i().string,className:i().string,title:i().string.isRequired};const f=E,N=function(e){let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(f,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))};N.propTypes={downloadUrl:i().string.isRequired,downloadFile:i().string.isRequired};const b=N,z=function(e){let{title:t,downloadUrl:n,downloadFile:a,nextUrl:i}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(r,{title:t}):null,l.createElement("div",{className:"actions"},n&&a?l.createElement(b,{downloadUrl:n,downloadFile:a}):null,l.createElement(p,null),i?l.createElement(v,{url:i}):null))};z.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},z.propTypes={title:i().string,nextUrl:i().string,downloadUrl:i().string,downloadFile:i().string};const y=z},8028:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var l=n(7294),a=n(8093),i=n(3366),s=n(9052);function r(){return l.createElement(l.Fragment,null,l.createElement(s.Z,{title:"Plugin",nextUrl:"/wordpress/plugin/facades"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[i.Z],children:"### Dependency injection\n\nAt it's core a container is simply a dependency injection. \nBy Binding entities to the container with their related arguments, we can allow passing the arguments as dependencies in a constructor method.\n\n```\napp()->add(Controller::class)->addArgument(Model::class);\napp()->add(Model::class);\n\nclass Controller\n{\n    /**\n     * @var $model\n     */\n    public Model $model;\n\n    /**\n     * Construct.\n     *\n     * @param Model $model\n     */\n    public function __construct(Model $model)\n    {\n        $this->model = $model;\n    }\n}\n```\n\n#### Auto Wiring\nBy enabling the auto wiring the container can automatically resolve the classes/objects and all their dependencies. This is achievable by adding type hinting.\n\n```\n/**\n * Construct.\n *\n * @param ViewController $viewController\n */\npublic function __construct(ViewController $viewController)\n{\n    $this->viewController = $viewController;\n}\n```\n\nThe limitation of the auto wiring is that all injection should be objects.\nThe auto wiring is enabled when the container is delegated to the ReflectionContainer class.\n\n\n"})),l.createElement(s.Z,{nextUrl:"/wordpress/plugin/facades"}))}}}]);