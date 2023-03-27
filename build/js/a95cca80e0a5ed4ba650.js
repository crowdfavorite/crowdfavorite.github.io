"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[282],{2192:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7294);const l=e=>{let{title:t}=e;return a.createElement("h1",null,t)};var r=n(9655),c=n(5274);const s=e=>{let{size:t="24px",className:n="",title:l=""}=e;return a.createElement(c.Z,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})},i=()=>a.createElement(r.rU,{to:"/",className:"action-link"},a.createElement(s,{title:"home",size:"20px"}),a.createElement("span",{className:"action-label"},"Home")),o=e=>{let{size:t="24px",className:n="",title:l=""}=e;return a.createElement(c.Z,{size:t,className:n,title:l,path:a.createElement(a.Fragment,null,a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})},m=e=>{let{url:t}=e;return a.createElement(r.rU,{className:"action-link",to:t},a.createElement(o,{title:"Next"}),a.createElement("span",{className:"action-label"},"Next"))},p=e=>{let{size:t="24px",className:n="",title:l=""}=e;return a.createElement(c.Z,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})},h=e=>{let{downloadUrl:t,downloadFile:n}=e;return a.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},a.createElement(p,{size:"20px"}),a.createElement("span",{className:"action-label"},"Download the code"))},y=e=>{let{title:t,downloadUrl:n,downloadFile:r,nextUrl:c}=e;return a.createElement("div",{className:"action-bar"},t?a.createElement(l,{title:t}):null,a.createElement("div",{className:"actions"},n&&r?a.createElement(h,{downloadUrl:n,downloadFile:r}):null,a.createElement(i,null),c?a.createElement(m,{url:c}):null))}},2873:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),l=n(5697),r=n.n(l),c=n(5274);const s=e=>{let{size:t="20px",className:n="",title:l="Copy to clipboard"}=e;return a.createElement(c.Z,{size:t,className:n,title:l,path:a.createElement("g",null,a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})},i=e=>{let{code:t}=e;return a.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},a.createElement(s,null))},o=function(e){let{children:t}=e;return a.createElement("div",{className:"relative"},a.createElement("pre",null,t),a.createElement("div",{className:"absolute top-3 right-4"},a.createElement(i,{code:t})))};o.propTypes={children:r().arrayOf(r().element).isRequired};const m=o},5274:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const l=e=>{let{size:t="24px",className:n="",title:l,path:r}=e;const c="inline-block align-middle"+(n?` ${n}`:"");return a.createElement("i",{className:c,title:l},a.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}},6282:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294),l=n(8093),r=n(3366),c=n(2192);var s=n(2873);const i=()=>a.createElement(a.Fragment,null,a.createElement(c.Z,{title:"Factory",downloadUrl:"/assets/downloads/patterns/factory/paymentMethods.php",downloadFile:"paymentMethods.php"}),a.createElement("div",{className:"parser"},a.createElement(l.D,{rehypePlugins:[r.Z],children:"### Refactoring\nWe will start with a controller which invokes a PaymentFactory class.\n\n\n```\nclass PaymentController\n{\n    public function pay(string $paymentType)\n    {\n        $payment = (new PaymentFactory($paymentType))();\n    \n        return $payment->pay();\n    }\n}\n```\n\n<br>\n\nThe payment factory class will initiate the appropriate payment class based on the payment type request.\n\n```\nclass PaymentFactory\n{\n    private string $paymentType;\n    private array $paymentMethods = [\n        'stripe' => StripePayment::class,\n        'cash' => CashPayment::class,\n    ];\n    \n    public function __construct(string $paymentType)\n    {\n        $this->paymentType = $paymentType;\n    }\n    \n    public function __invoke()\n    { \n        if (!in_array($this->paymentType, array_keys($this->paymentMethods))) {\n            throw new \\Exception(\"Payment method not supported\");\n        }\n        \n        $paymentClass = $this->paymentMethods[$this->paymentType];\n        \n        return new $paymentClass;\n    }\n}\n```\n\nNow for the implementation of the payment classes we will start by creating a PaymentInterface class.\n\n```\ninterface PaymentInterface\n{\n    public function pay();\n}\n```\n\nThe stripe Payment class would be\n\n```\nclass StripePayment implements PaymentInterface\n{\n    public function pay()\n    {\n        // Logic to pay with the stripe API...\n    }\n}\n```\n\nThe cash on delivery class would be \n\n```\nclass CashPayment implements PaymentInterface\n{\n    public function pay()\n    {\n        // Process the cash on delivery payment method...\n    }\n}\n```\n",components:{pre:s.Z}})),a.createElement(c.Z,null))}}]);