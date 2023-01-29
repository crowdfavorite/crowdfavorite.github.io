"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[696],{9052:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7294),l=n(5697),s=n.n(l);const r=function(e){let{title:t}=e;return a.createElement("h1",null,t)};r.propTypes={title:s().string.isRequired};const i=r;var o=n(9655);function c(e){let{size:t,className:n,title:l,path:s}=e;const r="inline-block align-middle"+(n?` ${n}`:"");return a.createElement("i",{className:r,title:l},a.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:t,width:t,fill:"currentColor"},s))}c.defaultProps={size:"24px",className:"",path:""},c.propTypes={size:s().string,className:s().string,title:s().string.isRequired,path:s().string};const u=c;function d(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(u,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}d.defaultProps={size:"24px",className:""},d.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const p=d,m=function(){return a.createElement(o.rU,{to:"/",className:"action-link"},a.createElement(p,{title:"home",size:"20px"}),a.createElement("span",{className:"action-label"},"Home"))};function h(e){let{size:t,className:n,title:l}=e;return a.createElement(u,{size:t,className:n,title:l,path:a.createElement(a.Fragment,null,a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}h.defaultProps={size:"24px",className:""},h.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const v=h,f=function(e){let{url:t}=e;return a.createElement(o.rU,{className:"action-link",to:t},a.createElement(v,{title:"Next"}),a.createElement("span",{className:"action-label"},"Next"))};f.propTypes={url:s().string.isRequired};const g=f,w=function(e){let{size:t="",className:n="",title:l=""}=e;return a.createElement(u,{size:t,className:n,title:l,path:a.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};w.defaultProps={size:"24px",className:""},w.propTypes={size:s().string,className:s().string,title:s().string.isRequired};const E=w,q=function(e){let{downloadUrl:t,downloadFile:n}=e;return a.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+t),download:n},a.createElement(E,{size:"20px"}),a.createElement("span",{className:"action-label"},"Download the code"))};q.propTypes={downloadUrl:s().string.isRequired,downloadFile:s().string.isRequired};const b=q,N=function(e){let{title:t,downloadUrl:n,downloadFile:l,nextUrl:s}=e;return a.createElement("div",{className:"action-bar"},t?a.createElement(i,{title:t}):null,a.createElement("div",{className:"actions"},n&&l?a.createElement(b,{downloadUrl:n,downloadFile:l}):null,a.createElement(m,null),s?a.createElement(g,{url:s}):null))};N.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},N.propTypes={title:s().string,nextUrl:s().string,downloadUrl:s().string,downloadFile:s().string};const x=N},3696:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294),l=n(8093),s=n(3366),r=n(9052);function i(){return a.createElement(a.Fragment,null,a.createElement(r.Z,{title:"Api request classes",nextUrl:"/laravel/api/actions"}),a.createElement("div",{className:"parser"},a.createElement(l.D,{rehypePlugins:[s.Z],children:"#### Anatomy\n\nA request class extends the BaseRequest class. \nIt contains a single method named `rules` which returns an array containing the request parameters to be validated and the correspondant validation rule.\nA long list of validation rules is to be explored in the Laravel official documentation.\n\n```\nnamespace App\\Http\\Requests\\Api\\Countries;\n\nuse App\\Http\\Requests\\BaseRequest;\n\nclass IndexRequest extends BaseRequest\n{\n    /**\n     * Get the validation rules that apply to the request.\n     *\n     * @return array\n     */\n    public function rules()\n    {\n        return [\n            'cities' => 'sometimes|required|boolean',\n        ];\n    }\n}\n\n```\n\n```\n//App/Http/Requests/BaseRequest.php\n\nnamespace App\\Http\\Requests\\Api;\n\nuse Illuminate\\Contracts\\Validation\\Validator;\nuse Illuminate\\Foundation\\Http\\FormRequest;\nuse Illuminate\\Http\\Exceptions\\HttpResponseException;\n\nclass BaseRequest extends FormRequest\n{\n    /**\n     * Determine if the user is authorized to make this request.\n     *\n     * @return bool\n     */\n    public function authorize()\n    {\n        return true;\n    }\n\n    /**\n     * @param  Validator  $validator\n     */\n    protected function failedValidation(Validator $validator)\n    {\n        throw new HttpResponseException(response()->json([\n            'success' => false,\n            'errors' => $validator->errors(),\n        ], 422));\n    }\n}\n\n```\n\n#### Authorization\nThe base request class contains the method `authorize` which controls if the request can go thru or will be rejected. This method should only return a bool.\n\n#### Http exception\nA failed validation should throw an error in a form of a json object with a 422 status code. \nThe failedValidation method is responsible to throw the Http exception.\n\n#### Request object alteration\n\nThe request object can be programatically altered by adding the validated method in the request class.\n\n```\n public function validated()\n    {\n        return array_merge(parent::validated(), [\n            'my_field' => 'my_value',\n        ]);\n    }\n```\n\n#### Reference\n<p class=\"m-0 mb-05\"><a class=\"link\" href=\"https://laravel.com/docs/8.x/validation\" target=\"_blank\">Laravel validation</a></p>\n\n"})),a.createElement(r.Z,{nextUrl:"/laravel/api/actions"}))}}}]);