"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[63],{9052:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7294),l=n(5697),s=n.n(l);const r=function(e){let{title:t}=e;return a.createElement("h1",null,t)};r.propTypes={title:s().string.isRequired};const i=r;var c=n(9655);function o(e){let{size:t,className:n,title:l,path:s}=e;const r="inline-block align-middle"+(n?` ${n}`:"");return a.createElement("i",{className:r,title:l},a.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},s))}o.defaultProps={size:"24px",className:"",path:""},o.propTypes={size:s().string,className:s().string,title:s().string.isRequired,path:s().string};const p=o;function m(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(p,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}m.defaultProps={size:"24px",className:""},m.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const d=m,u=function(){return a.createElement(c.rU,{to:"/",className:"action-link"},a.createElement(d,{title:"home",size:"20px"}),a.createElement("span",{className:"action-label"},"Home"))};function y(e){let{size:t,className:n,title:l}=e;return a.createElement(p,{size:t,className:n,title:l,path:a.createElement(a.Fragment,null,a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}y.defaultProps={size:"24px",className:""},y.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const h=y,w=function(e){let{url:t}=e;return a.createElement(c.rU,{className:"action-link",to:t},a.createElement(h,{title:"Next"}),a.createElement("span",{className:"action-label"},"Next"))};w.propTypes={url:s().string.isRequired};const f=w,g=function(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(p,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};g.defaultProps={size:"24px",className:""},g.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const E=g,v=function(e){let{downloadUrl:t,downloadFile:n}=e;return a.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},a.createElement(E,{size:"20px"}),a.createElement("span",{className:"action-label"},"Download the code"))};v.propTypes={downloadUrl:s().string.isRequired,downloadFile:s().string.isRequired};const N=v,P=function(e){let{title:t,downloadUrl:n,downloadFile:l,nextUrl:s}=e;return a.createElement("div",{className:"action-bar"},t?a.createElement(i,{title:t}):null,a.createElement("div",{className:"actions"},n&&l?a.createElement(N,{downloadUrl:n,downloadFile:l}):null,a.createElement(u,null),s?a.createElement(f,{url:s}):null))};P.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},P.propTypes={title:s().string,nextUrl:s().string,downloadUrl:s().string,downloadFile:s().string};const b=P},4063:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294),l=n(8093),s=n(3366),r=n(9052);function i(){return a.createElement(a.Fragment,null,a.createElement(r.Z,{title:"Factory",downloadUrl:"/assets/downloads/patterns/factory/paymentMethods.php",downloadFile:"paymentMethods.php"}),a.createElement("div",{className:"parser"},a.createElement(l.D,{rehypePlugins:[s.Z],children:"### Refactoring\nWe will start with a controller which invokes a PaymentFactory class.\n\n\n```\nclass PaymentController\n{\n    public function pay(string $paymentType)\n    {\n        $payment = (new PaymentFactory($paymentType))();\n    \n        return $payment->pay();\n    }\n}\n```\n\n<br>\n\nThe payment factory class will initiate the appropriate payment class based on the payment type request.\n\n```\nclass PaymentFactory\n{\n    private string $paymentType;\n    private array $paymentMethods = [\n        'stripe' => StripePayment::class,\n        'cash' => CashPayment::class,\n    ];\n    \n    public function __construct(string $paymentType)\n    {\n        $this->paymentType = $paymentType;\n    }\n    \n    public function __invoke()\n    { \n        if (!in_array($this->paymentType, array_keys($this->paymentMethods))) {\n            throw new \\Exception(\"Payment method not supported\");\n        }\n        \n        $paymentClass = $this->paymentMethods[$this->paymentType];\n        \n        return new $paymentClass;\n    }\n}\n```\n\nNow for the implementation of the payment classes we will start by creating a PaymentInterface class.\n\n```\ninterface PaymentInterface\n{\n    public function pay();\n}\n```\n\nThe stripe Payment class would be\n\n```\nclass StripePayment implements PaymentInterface\n{\n    public function pay()\n    {\n        // Logic to pay with the stripe API...\n    }\n}\n```\n\nThe cash on delivery class would be \n\n```\nclass CashPayment implements PaymentInterface\n{\n    public function pay()\n    {\n        // Process the cash on delivery payment method...\n    }\n}\n```\n"})),a.createElement(r.Z,null))}}}]);