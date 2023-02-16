"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[915],{3996:(e,t,n)=>{n.d(t,{Z:()=>N});var l=n(7294),a=n(5697),i=n.n(a);const r=function(e){let{title:t}=e;return l.createElement("h1",null,t)};r.propTypes={title:i().string.isRequired};const o=r;var s=n(9655),c=n(9414);function p(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}p.defaultProps={size:"24px",className:""},p.propTypes={size:i().string,className:i().string,title:i().string.isRequired};const d=p,h=function(){return l.createElement(s.rU,{to:"/",className:"action-link"},l.createElement(d,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home"))};function u(e){let{size:t,className:n,title:a}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}u.defaultProps={size:"24px",className:""},u.propTypes={size:i().string,className:i().string,title:i().string.isRequired};const m=u,g=function(e){let{url:t}=e;return l.createElement(s.rU,{className:"action-link",to:t},l.createElement(m,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))};g.propTypes={url:i().string.isRequired};const f=g,v=function(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};v.defaultProps={size:"24px",className:"",title:""},v.propTypes={size:i().string,className:i().string,title:i().string};const b=v,w=function(e){let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(b,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))};w.propTypes={downloadUrl:i().string.isRequired,downloadFile:i().string.isRequired};const E=w,y=function(e){let{title:t,downloadUrl:n,downloadFile:a,nextUrl:i}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(o,{title:t}):null,l.createElement("div",{className:"actions"},n&&a?l.createElement(E,{downloadUrl:n,downloadFile:a}):null,l.createElement(h,null),i?l.createElement(f,{url:i}):null))};y.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},y.propTypes={title:i().string,nextUrl:i().string,downloadUrl:i().string,downloadFile:i().string};const N=y},2606:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(7294),a=n(5697),i=n.n(a),r=n(9414);const o=function(e){let{size:t=""}=e;return l.createElement(r.Z,{size:t,title:"Copy to clipboard",path:l.createElement("g",null,l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})};o.defaultProps={size:"24px"},o.propTypes={size:i().string};const s=o,c=function(e){let{code:t}=e;return l.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},l.createElement(s,null))};c.propTypes={code:i().arrayOf(i().element).isRequired};const p=c,d=function(e){let{children:t}=e;return l.createElement("div",{className:"relative"},l.createElement("pre",null,t),l.createElement("div",{className:"absolute top-3 right-4"},l.createElement(p,{code:t})))};d.propTypes={children:i().arrayOf(i().element).isRequired};const h=d},9414:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(7294),a=n(5697),i=n.n(a);function r(e){let{size:t,className:n,title:a,path:i}=e;const r="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:r,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},i))}r.defaultProps={size:"24px",className:"",path:""},r.propTypes={size:i().string,className:i().string,title:i().string.isRequired,path:i().element};const o=r},5915:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(7294),a=n(8093),i=n(3366),r=n(3996);var o=n(2606);function s(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{title:"Plugin",nextUrl:"/wordpress/plugin/providers"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[i.Z],children:"### Bootstrap\n\nThe bootstrapping of the plugin starts by initiating the DI container then attaching to it the entities needed to its functionality.\nThe container enables auto wiring responsible for the functioning of the automatic resolving of the classes. Following this we load the core helper methods and the CoreServiceProvider.\nThe CoreServiceProviders loads the config files in /config in the container and binds the addition custom providers added in the src/Providers folder.\n\n\nA list of the bootstraping steps:\n* Initiation of php .env.\n* Requirement of the core helper methods.\n* Creation of the constants (constants.php).\n* Initiation of the PSR container.\n* Binding of the CoreServiceProvider.\n\n#### Initiation of the container\n\n```\n//Container.php\n\n/**\n * Get the globally available instance of the container.\n *\n * @return static\n */\npublic static function getInstance()\n{\n    if (is_null(static::$instance)) {\n        $container = new LeagueContainer();\n\n        $container->delegate(\n            new ReflectionContainer()\n        );\n\n        static::$instance = $container;\n    }\n\n    return static::$instance;\n}\n```\n\n#### Core helper methods\n\n<b>dd</b>  \nThe helper dd was adopted from the Laravel framework which is a shortcut for var_dump and then die.\n\n```\ndd('anything'); is equivalent to var_dump('anything'); die();\n```\n<b>env</b>  \nHelper to retreive a defined parameter in the .env file.\n\n```\nenv('PLUGIN_NAME'); //boilerplate\nenv('LOCALE', 'en'); //defaults to 'en' if 'LOCALE' is not defined in .env\n```\n\n<b>app</b>  \nHelper to resolve the container or one of its entities;\n\n```\napp(); //resolves the container\napp()->get('entity'); //get 'entity'\napp()->add('entity'); //add 'entity' to the container\napp('entity'); //get entity\n```\n\n<b>config</b>  \nHelper to retrieve a config key from the config files. It uses the dot anotation to reach the required key.  \n\n```\nconfig('example.myKey'); //myValue as defined in example.php config file. \n```\n\n<b>base_path</b>  \nReturns the plugin root path.\n```\nbase_path(); // /usr/local/var/www/html/boilerplate/wp-content/plugins/boilerplate\n```\n\n<b>config_path</b>  \nReturns the plugin config folder path.\n```\nconfig_path(); // /usr/local/var/www/html/boilerplate/wp-content/plugins/boilerplate/config\n```\n\n<b>source_path</b>  \nReturns the plugin source folder path.\n```\nsource_path(); // /usr/local/var/www/html/boilerplate/wp-content/plugins/boilerplate/src\n```\n\n\n<b>invoke</b>  \nHelper to invoke an action class. Read more about the invokable classes in the patterns section.\n```\ninvoke(InvokableClass::class, $arg1, $arg2 ...); \n```\n",components:{pre:o.Z}})),l.createElement(r.Z,{nextUrl:"/wordpress/plugin/providers"}))}}}]);