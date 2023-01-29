"use strict";(self.webpackChunkcrowdfavorite_github_io=self.webpackChunkcrowdfavorite_github_io||[]).push([[772],{9052:(e,n,t)=>{t.d(n,{Z:()=>N});var s=t(7294),a=t(5697),l=t.n(a);const i=function(e){let{title:n}=e;return s.createElement("h1",null,n)};i.propTypes={title:l().string.isRequired};const r=i;var c=t(9655);function o(e){let{size:n,className:t,title:a,path:l}=e;const i="inline-block align-middle"+(t?` ${t}`:"");return s.createElement("i",{className:i,title:a},s.createElement("svg",{className:"micon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:n,width:n,fill:"currentColor"},l))}o.defaultProps={size:"24px",className:"",path:""},o.propTypes={size:l().string,className:l().string,title:l().string.isRequired,path:l().string};const p=o;function u(e){let{size:n="",className:t="",title:a=""}=e;return s.createElement(p,{size:n,className:t,title:a,path:s.createElement("path",{d:"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z"})})}u.defaultProps={size:"24px",className:""},u.propTypes={size:l().string,className:l().string,title:l().string.isRequired};const m=u,d=function(){return s.createElement(c.rU,{to:"/",className:"action-link"},s.createElement(m,{title:"home",size:"20px"}),s.createElement("span",{className:"action-label"},"Home"))};function g(e){let{size:n,className:t,title:a}=e;return s.createElement(p,{size:n,className:t,title:a,path:s.createElement(s.Fragment,null,s.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))})}g.defaultProps={size:"24px",className:""},g.propTypes={size:l().string,className:l().string,title:l().string.isRequired};const h=g,w=function(e){let{url:n}=e;return s.createElement(c.rU,{className:"action-link",to:n},s.createElement(h,{title:"Next"}),s.createElement("span",{className:"action-label"},"Next"))};w.propTypes={url:l().string.isRequired};const b=w,f=function(e){let{size:n="",className:t="",title:a=""}=e;return s.createElement(p,{size:n,className:t,title:a,path:s.createElement("path",{d:"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"})})};f.defaultProps={size:"24px",className:""},f.propTypes={size:l().string,className:l().string,title:l().string.isRequired};const v=f,x=function(e){let{downloadUrl:n,downloadFile:t}=e;return s.createElement("a",{className:"action-link download",href:""+("https://crowdfavorite.github.io"+n),download:t},s.createElement(v,{size:"20px"}),s.createElement("span",{className:"action-label"},"Download the code"))};x.propTypes={downloadUrl:l().string.isRequired,downloadFile:l().string.isRequired};const E=x,k=function(e){let{title:n,downloadUrl:t,downloadFile:a,nextUrl:l}=e;return s.createElement("div",{className:"action-bar"},n?s.createElement(r,{title:n}):null,s.createElement("div",{className:"actions"},t&&a?s.createElement(E,{downloadUrl:t,downloadFile:a}):null,s.createElement(d,null),l?s.createElement(b,{url:l}):null))};k.defaultProps={title:null,nextUrl:null,downloadUrl:null,downloadFile:null},k.propTypes={title:l().string,nextUrl:l().string,downloadUrl:l().string,downloadFile:l().string};const N=k},1772:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var s=t(7294),a=t(8093),l=t(3366),i=t(9052);function r(){return s.createElement(s.Fragment,null,s.createElement(i.Z,{title:"Web assets"}),s.createElement("div",{className:"parser"},s.createElement(a.D,{rehypePlugins:[l.Z],children:"Laravel mix is a preconfigured webpack instance. The latest mix v6 is based on Webpack 5.x. We will start by installing the npm packages dependencies by running \n```\nnpm install\n```\n\n#### Basic setup\n```\n//webpack.mix.js\n\nmix.js('resources/js/app.js', 'public/js')\n    .postCss('resources/css/app.css', 'public/css', [\n        //postCss plugins\n    ]);\n```\n\n#### Assets compilation\nBy running the package.json scripts, all the CSS and JavaScript assets will be compiled and placed the public directory:\n```\nnpm run dev\n\nnpm run prod\n````\n\n#### Advanced setup\nWe would cover with the advanced setup the:\n\n* Compilation of scss files.\n* Eslinting JS with Webpack eslint plugin.\n* PurgeCSS.  \n* Autoprefixing css with autoprefixer.\n* CSS minimization with cssnano.\n* Gzipping with Webpack compression plugin.\n* Cache busting.\n\n\n```\n//webpack.mix.js\n\nconst mix = require('laravel-mix');\nconst ESLintPlugin = require('eslint-webpack-plugin');\nconst CompressionPlugin = require('compression-webpack-plugin');\nconst {CleanWebpackPlugin} = require('clean-webpack-plugin');\nconst purgecss = require('@fullhuman/postcss-purgecss');\nconst cssnano = require('cssnano');\nconst autoprefixer = require('autoprefixer');\n\nconst plugins = [\n    new ESLintPlugin(),\n    new CleanWebpackPlugin({\n        cleanOnceBeforeBuildPatterns: [\n            '**/*.gz',\n            '**/*.js',\n            '**/*.json',\n            '**/*.txt',\n            '**/*.map',\n            '**/*.css'\n        ]\n    }),\n];\n\nconst options = {};\n\nif (mix.inProduction()) {\n    plugins.push(\n        new CompressionPlugin({\n            filename: '[path][base].gz',\n            algorithm: 'gzip',\n            test: new RegExp('\\\\.(js|css)$'),\n            threshold: 10240,\n            minRatio: 0.8\n        })\n    );\n\n    options.postCss = [\n        purgecss({\n            content: [\n                './resources/views/**/*.php',\n            ],\n        }),\n        autoprefixer(),\n        cssnano()\n    ];\n}\n\nmix.webpackConfig({\n    plugins,\n});\n\nmix\n.js('resources/js/app.js', 'public/js')\n.sass('resources/scss/app.scss', 'public/css')\n.options(options)\n.version();\n\n```\n\nThe Laravel mix configuration can me amended by calling the method mix.webpackConfig and passing a webpack 5 compatible configuration object.\nMix allows function call chaining as shown above. We compile js then sass then call postCSS the plugins and finally for cache busting we call the version method.\n\n#### Reference\n<p class=\"m-0 mb-05\"><a class=\"link\" href=\"https://laravel.com/docs/8.x/mix\" target=\"_blank\">Laravel mix</a></p>\n<p class=\"m-0 mb-05\"><a class=\"link\" href=\"https://webpack.js.org/configuration/\" target=\"_blank\">Webpack config</a></p>\n<p class=\"m-0 mb-05\"><a class=\"link\" href=\"https://laravel-mix.com/docs/6.0/installation\" target=\"_blank\">Laravel mix documentation</a></p>\n\n"})),s.createElement(i.Z,null))}}}]);