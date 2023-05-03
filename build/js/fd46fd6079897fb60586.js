"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[852],{2192:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(7294);const a=e=>{let{title:t}=e;return l.createElement("h1",null,t)};var r=n(9655),i=n(5274);const c=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(i.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})},o=()=>l.createElement(r.rU,{to:"/",className:"action-link"},l.createElement(c,{title:"home",size:"20px"}),l.createElement("span",{className:"action-label"},"Home")),s=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(i.Z,{size:t,className:n,title:a,path:l.createElement(l.Fragment,null,l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})},m=e=>{let{url:t}=e;return l.createElement(r.rU,{className:"action-link",to:t},l.createElement(s,{title:"Next"}),l.createElement("span",{className:"action-label"},"Next"))},u=e=>{let{size:t="24px",className:n="",title:a=""}=e;return l.createElement(i.Z,{size:t,className:n,title:a,path:l.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})},p=e=>{let{downloadUrl:t,downloadFile:n}=e;return l.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},l.createElement(u,{size:"20px"}),l.createElement("span",{className:"action-label"},"Download the code"))},h=e=>{let{title:t,downloadUrl:n,downloadFile:r,nextUrl:i}=e;return l.createElement("div",{className:"action-bar"},t?l.createElement(a,{title:t}):null,l.createElement("div",{className:"actions"},n&&r?l.createElement(p,{downloadUrl:n,downloadFile:r}):null,l.createElement(o,null),i?l.createElement(m,{url:i}):null))}},2873:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7294),a=n(5697),r=n.n(a),i=n(5274);const c=e=>{let{size:t="24px",className:n="",title:a="Copy to clipboard"}=e;return l.createElement(i.Z,{size:t,className:n,title:a,path:l.createElement("g",null,l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z"}))),l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z"}))))})},o=e=>{let{code:t}=e;return l.createElement("button",{type:"button",onClick:()=>navigator.clipboard.writeText(t[0].props.children[0]),className:"copy",title:"Copy to clipboard"},l.createElement(c,null))},s=function(e){let{children:t}=e;return l.createElement("div",{className:"relative"},l.createElement("pre",null,t),l.createElement("div",{className:"absolute top-3 right-4"},l.createElement(o,{code:t})))};s.propTypes={children:r().arrayOf(r().element).isRequired};const m=s},5274:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294);const a=e=>{let{size:t="24px",className:n="",title:a,path:r}=e;const i="inline-block align-middle"+(n?` ${n}`:"");return l.createElement("i",{className:i,title:a},l.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},r))}},6852:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(7294),a=n(8093),r=n(3366),i=n(2192);var c=n(2873);const o=()=>l.createElement(l.Fragment,null,l.createElement(i.Z,{title:"Builder",downloadUrl:"/assets/downloads/patterns/builder/phoneBuilder.php",downloadFile:"phoneBuilder.php"}),l.createElement("div",{className:"parser"},l.createElement(a.D,{rehypePlugins:[r.Z],children:'### How to build?\nWe will start with an abstract class which helps in setting and getting the builder properties.\nThanks to the php maginc method `__set`, the attributes of a build object will be stores in the `$attributes` array.\nFollowing the gradual build up of an object we can return an object or an array representation of the built properties.\n\n```\nabstract class Builder\n{\n\tprotected array $attributes;\n\n\tpublic function __set($arg, $value)\n\t{\n\t\t$this->attributes[$arg] = $value;\n\t}\n\n\tpublic function first(): object\n\t{\n\t\treturn (object) $this->attributes;\n\t}\n\n\tpublic function toArray(): array\n\t{\n\t\treturn (array) $this->attributes;\n\t}\n}\n```\n\n<br>\n\nWe will consider building phones where the main components are pre-defined in the interface below. \nTo build a phone object we need to set the make, the model, the color and the capacity...etc...\n\n```\ninterface PhoneInterface\n{\n\tpublic function setMake(string $make);\n\n\tpublic function setModel(string $model);\n\n\tpublic function setColor(string $color);\n\n\tpublic function setCapacity(string $capacity);\n}\n```\n\nNow it\'s time to put in place a phone builder class.\n\n```\nclass PhoneBuilder extends Builder implements PhoneInterface\n{\n\tpublic function setMake(string $make): self\n\t{\n\t\t$this->make = $make;\n\n\t\treturn $this;\n\t}\n\n\tpublic function setModel(string $model): self\n\t{\n\t\t$this->model = $model;\n\n\t\treturn $this;\n\t}\n\n\tpublic function setColor(string $color): self\n\t{\n\t\t$this->color = $color;\n\n\t\treturn $this;\n\t}\n\n\tpublic function setCapacity(string $capacity): self\n\t{\n\t\t$this->capacity = $capacity;\n\n\t\treturn $this;\n\t}\n}\n```\n\nFinally we can start building phones.\n\n```\n $phones[] = (new PhoneBuilder())\n  \t->setMake(\'Apple\')\n  \t->setModel(\'iPhone 12\')\n\t->setColor(\'gold\')\n\t->setCapacity(\'128\')\n\t->toArray();\n\n$phones[] = (new PhoneBuilder())\n  \t->setMake(\'Samsung\')\n\t->setModel(\'A7\')\n\t->setColor(\'black\')\n\t->setCapacity(\'64\')\n\t->toArray();\n```\n\nThe phones array will look like:\n\n```\n[\n     [\n       "make" => "Apple",\n       "model" => "iPhone 12",\n       "color" => "gold",\n       "capacity" => "128",\n     ],\n     [\n       "make" => "Samsung",\n       "model" => "A7",\n       "color" => "black",\n       "capacity" => "64",\n     ],\n   ]\n```\n\n',components:{pre:c.Z}})),l.createElement(i.Z,null))}}]);