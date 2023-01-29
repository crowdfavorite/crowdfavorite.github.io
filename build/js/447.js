"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[447],{1814:(e,t,n)=>{n.d(t,{Z:()=>E});var l=n(7294),a=n(5697),r=n.n(a);const i=function(e){let{title:t}=e;return l.createElement("h1",null,t)};i.propTypes={title:r().string.isRequired};const s=i;var o=n(9655);function c(e){let{size:t,className:n,title:a,path:r}=e;const i="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:i,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}c.defaultProps={size:"24px",className:"",path:""},c.propTypes={size:r().string,className:r().string,title:r().string.isRequired,path:r().string};const d=c;function m(e){let{size:t="",className:n="",title:a=""}=e;return l.createElement(d,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}m.defaultProps={size:"24px",className:""},m.propTypes={size:r().string,className:r().string,title:r().string.isRequired};const u=m,p=function(){return l.createElement(o.rU,{to:"/",className:"action-link"},l.createElement(u,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home"))};function h(e){let{size:t,className:n,title:a}=e;return l.createElement(d,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}h.defaultProps={size:"24px",className:""},h.propTypes={size:r().string,className:r().string,title:r().string.isRequired};const w=h,g=function(e){let{url:t}=e;return l.createElement(o.rU,{className:"action-link",to:t},l.createElement(w,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))};g.propTypes={url:r().string.isRequired};const v=g,b=function(e){let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement("i",{className:"micon micon-download micon-grey micon-xs"}),l.createElement("span",{className:"action-label"},"Download the code"))};b.propTypes={downloadUrl:r().string.isRequired,downloadFile:r().string.isRequired};const f=b,y=function(e){let{title:t,downloadUrl:n,downloadFile:a,nextUrl:r}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(s,{title:t}):null,l.createElement("div",{className:"actions"},n&&a?l.createElement(f,{downloadUrl:n,downloadFile:a}):null,l.createElement(p,null),r?l.createElement(v,{url:r}):null))};y.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},y.propTypes={title:r().string,nextUrl:r().string,downloadUrl:r().string,downloadFile:r().string};const E=y},7447:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(7294),a=n(8093),r=n(3366),i=n(1814);function s(){return l.createElement(l.Fragment,null,l.createElement(i.Z,{title:"Web controllers",nextUrl:"/laravel/web/views"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[r.Z],children:"#### Route params\nA view controller method is responsible to handle the request object. The Request class instance methods help in collecting\nthe route params.  \n```\n//PageController.php\n\nnamespace App/Http/Controllers/Web;\n\nuse Illuminate\\Http\\Request;\n\nclass PageController\n{\n\n    public function viewMethod(Request $request)\n    {\n        $params = $request->only('page', 'order', 'dir');\n        .\n        .\n        .\n        return view('pages.tableView');\n    }\n}\n```\n\nReturning a rendered view can be handled with the view helper method or by initiating the viewFactory class and calling the make method.\n\n```\n//PageController.php\n\nnamespace App/Http/Controllers/Web;\n\nuse Illuminate\\View\\Factory as ViewFactory;\n\nclass PageController\n{\n\n private ViewFactory $viewFactory;\n\n public function __construct(ViewFactory $viewFactory)\n    {\n        $this->viewFactory = $viewFactory;\n    }\n    \n    public function viewMethod(Request $request)\n    {\n        $params = $request->only('page', 'order', 'dir');\n        .\n        .\n        .\n        return $this->viewFactory->make('pages.tableView');\n    }\n}\n```\n\n#### The catch all magic\n\nA request for an non existing method is captured by the magic call method and redirected to the private method formView.\nThe generic blade view `build.blade.php` will be rendered and returned. By passing the variable $method to the builder view, we can load the needded css and js assets.\nFor instance, by calling a non existing users method we would render the builder blade view and call both the users.js and users.css asset files.\n```\nnamespace App/Http/Controllers/Web;\n\nuse Illuminate\\Contracts\\View\\View;\nuse Illuminate\\View\\Factory as ViewFactory;\n\nclass PageController\n{\n   \n    private ViewFactory $viewFactory;\n     \n    public function __construct(ViewFactory $viewFactory)\n    {\n        $this->viewFactory = $viewFactory;\n    }\n\n    public function __call(string $method, $args): View\n    {\n        return $this->formView($method);\n    }\n\n    /**\n     * @param string $method\n     * @return View\n     */\n    private function formView(string $method): View\n    {\n        return $this->viewFactory\n            ->make('pages.builder', [\n                'method' => $method,\n            ]);\n    }\n}\n```\n\n#### Reference\n<p class=\"m-0 mb-05\"><a class=\"link\" href=\"https://laravel.com/docs/8.x/controllers\" target=\"_blank\">Laravel controllers</a></p>\n"})),l.createElement(i.Z,{nextUrl:"/laravel/web/views"}))}}}]);