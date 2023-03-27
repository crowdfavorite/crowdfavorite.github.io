"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[188],{2192:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(7294);const a=e=>{let{title:t}=e;return l.createElement("h1",null,t)};var r=n(9655),c=n(5274);const s=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})},o=()=>l.createElement(r.rU,{to:"/",className:"action-link"},l.createElement(s,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home")),i=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})},m=e=>{let{url:t}=e;return l.createElement(r.rU,{className:"action-link",to:t},l.createElement(i,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))},p=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})},u=e=>{let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(p,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))},d=e=>{let{title:t,downloadUrl:n,downloadFile:r,nextUrl:c}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(a,{title:t}):null,l.createElement("div",{className:"actions"},n&&r?l.createElement(u,{downloadUrl:n,downloadFile:r}):null,l.createElement(o,null),c?l.createElement(m,{url:c}):null))}},2873:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7294),a=n(5697),r=n.n(a),c=n(5274);const s=e=>{let{size:t="20px",className:n="",title:a="Copy to clipboard"}=e;return l.createElement(c.Z,{size:t,className:n,title:a,path:l.createElement("g",null,l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})},o=e=>{let{code:t}=e;return l.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},l.createElement(s,null))},i=function(e){let{children:t}=e;return l.createElement("div",{className:"relative"},l.createElement("pre",null,t),l.createElement("div",{className:"absolute top-3 right-4"},l.createElement(o,{code:t})))};i.propTypes={children:r().arrayOf(r().element).isRequired};const m=i},5274:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294);const a=e=>{let{size:t="24px",className:n="",title:a,path:r}=e;const c="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:c,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}},7188:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(7294),a=n(8093),r=n(3366),c=n(2192);var s=n(2873);const o=()=>l.createElement(l.Fragment,null,l.createElement(c.Z,{title:"Api routes",nextUrl:"/laravel/api/controllers"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[r.Z],children:"<p class=\"mx-auto fit-content p-3\"><img src=\"/assets/images/singleAction.svg\" height=\"120\"/></p>\n\nGrouped in a the namespace 'Api', all the api requests are directed to the folder api located at:\n\n```\nApp > Http > Controllers > Api\n```\n\nIn the api.php route file, we would define a route as:\n\n```\nRoute::group(['namespace' => 'Api'], function() {\n    Route::get('/paginate', [RouteController::class, 'viewMethod']);\n});\n```\n\nDefining the routes into nested groups is essential to allow the proper scaling of a project.\n\n#### Nested groups\n\n```\nRoute::group(['namespace' => 'Api', function() {\n     \n     ... non authenticated routes\n        \n     Route::group([\n        'middleware' => 'auth',\n    ], function() { \n        ... list of authenticated routes\n    \n        Route::group([\n            'middleware' => 'custom.middleware',\n            'prefix' => 'users',\n            'as' => 'users',\n        ], function() { \n            \n            Route::get('/', [UsersController::class, 'index'])->name('index');\n            \n            Route::get('/paginate', [UsersController::class, 'paginate'])->name('paginate');\n        });\n    });\n    \n    .\n    .\n    .\n});\n```\n\n#### Reference\n<p class=\"m-0 mb-05\"><a class=\"link\" href=\"https://laravel.com/docs/8.x/routing\" target=\"_blank\">Laravel routing</a></p>\n\n",components:{pre:s.Z}})),l.createElement(c.Z,{nextUrl:"/laravel/api/controllers"}))}}]);