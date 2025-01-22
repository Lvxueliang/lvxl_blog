"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1501],{8860:(e,t,l)=>{l.d(t,{xA:()=>y,yg:()=>c});var a=l(7953);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var g=a.createContext({}),o=function(e){var t=a.useContext(g),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},y=function(e){var t=o(e.components);return a.createElement(g.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,g=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),u=o(l),N=n,c=u["".concat(g,".").concat(N)]||u[N]||m[N]||r;return l?a.createElement(c,p(p({ref:t},y),{},{components:l})):a.createElement(c,p({ref:t},y))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,p=new Array(r);p[0]=N;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var o=2;o<r;o++)p[o]=l[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,l)}N.displayName="MDXCreateElement"},7298:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=l(5890),n=(l(7953),l(8860));const r={slug:"HTTP",title:"HTTP",authors:["Lvxl"],tags:["Http","Https","\u7f51\u7edc"]},p="HTTP",i={permalink:"/blog/HTTP",source:"@site/blog/2023-02-04-http.md",title:"HTTP",description:"\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff08Hyper Text Transfer Protocol\uff0cHTTP\uff09\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u8bf7\u6c42-\u54cd\u5e94\u534f\u8bae\uff0c\u5b83\u901a\u5e38\u8fd0\u884c\u5728TCP\u4e4b\u4e0a\u3002\u5b83\u6307\u5b9a\u4e86\u5ba2\u6237\u7aef\u53ef\u80fd\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u4ec0\u4e48\u6837\u7684\u6d88\u606f\u4ee5\u53ca\u5f97\u5230\u4ec0\u4e48\u6837\u7684\u54cd\u5e94\u3002\u8bf7\u6c42\u548c\u54cd\u5e94\u6d88\u606f\u7684\u5934\u4ee5ASCII\u5f62\u5f0f\u7ed9\u51fa\uff1b\u800c\u6d88\u606f\u5185\u5bb9\u5219\u5177\u6709\u4e00\u4e2a\u7c7b\u4f3cMIME\u7684\u683c\u5f0f",date:"2023-02-04T00:00:00.000Z",formattedDate:"February 4, 2023",tags:[{label:"Http",permalink:"/blog/tags/http"},{label:"Https",permalink:"/blog/tags/https"},{label:"\u7f51\u7edc",permalink:"/blog/tags/\u7f51\u7edc"}],readingTime:15.455,hasTruncateMarker:!1,authors:[{name:"Lvxl",title:"\u524d\u7aef\u5c0f\u767d",url:"https://lvxueliang.github.io/lvxl_blog",imageURL:"https://lvxueliang.github.io/lvxl_blog/img/logo.jpeg",key:"Lvxl"}],frontMatter:{slug:"HTTP",title:"HTTP",authors:["Lvxl"],tags:["Http","Https","\u7f51\u7edc"]},prevItem:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/blog/utils"}},g={authorsImageUrls:[void 0]},o=[{value:"http1.0",id:"http10",level:3},{value:"http1.1",id:"http11",level:3},{value:"http2\u7684\u65b0\u7279\u6027",id:"http2\u7684\u65b0\u7279\u6027",level:3},{value:"http2\u5feb\u5728\u54ea\u91cc? \u54ea\u4e2a\u9636\u6bb5\u5feb\u4e86?",id:"http2\u5feb\u5728\u54ea\u91cc-\u54ea\u4e2a\u9636\u6bb5\u5feb\u4e86",level:3},{value:"https \u4e0e http \u533a\u522b",id:"https-\u4e0e-http-\u533a\u522b",level:3},{value:"http\u7f13\u5b58",id:"http\u7f13\u5b58",level:3},{value:"get &amp; post \u533a\u522b",id:"get--post-\u533a\u522b",level:3},{value:"Http\u72b6\u6001\u7801",id:"http\u72b6\u6001\u7801",level:3}],y={toc:o},u="wrapper";function m(e){let{components:t,...l}=e;return(0,n.yg)(u,(0,a.A)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\uff08Hyper Text Transfer Protocol\uff0cHTTP\uff09\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u8bf7\u6c42-\u54cd\u5e94\u534f\u8bae\uff0c\u5b83\u901a\u5e38\u8fd0\u884c\u5728TCP\u4e4b\u4e0a\u3002\u5b83\u6307\u5b9a\u4e86\u5ba2\u6237\u7aef\u53ef\u80fd\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u4ec0\u4e48\u6837\u7684\u6d88\u606f\u4ee5\u53ca\u5f97\u5230\u4ec0\u4e48\u6837\u7684\u54cd\u5e94\u3002\u8bf7\u6c42\u548c\u54cd\u5e94\u6d88\u606f\u7684\u5934\u4ee5ASCII\u5f62\u5f0f\u7ed9\u51fa\uff1b\u800c\u6d88\u606f\u5185\u5bb9\u5219\u5177\u6709\u4e00\u4e2a\u7c7b\u4f3cMIME\u7684\u683c\u5f0f"),(0,n.yg)("h3",{id:"http10"},"http1.0"),(0,n.yg)("p",null,"HTTP1.0\u6700\u65e9\u5728\u7f51\u9875\u4e2d\u4f7f\u7528\u662f\u57281996\u5e74\uff0c\u90a3\u4e2a\u65f6\u5019\u53ea\u662f\u4f7f\u7528\u4e00\u4e9b\u8f83\u4e3a\u7b80\u5355\u7684\u7f51\u9875\u4e0a\u548c\u7f51\u7edc\u8bf7\u6c42\u4e0a,\u662f\u4e00\u79cd\u65e0\u72b6\u6001\u3001\u65e0\u8fde\u63a5\u7684\u5e94\u7528\u5c42\u534f\u8bae\uff0c\u51e0\u5e74\u540e\u88abHTTP1.1\u4ee3\u66ff\u5e76\u5e7f\u6cdb\u4f7f\u7528"),(0,n.yg)("h3",{id:"http11"},"http1.1"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"http1.1\u57fa\u4e8e",(0,n.yg)("strong",{parentName:"li"},"\u6587\u672c\u89e3\u6790"),",\u628a\u6240\u6709\u8bf7\u6c42\u548c\u54cd\u5e94\u4f5c\u4e3a\u7eaf\u6587\u672c"),(0,n.yg)("li",{parentName:"ol"},"http1.1\u52a0\u5165\u4e86\u7f13\u5b58\u5904\u7406 ",(0,n.yg)("strong",{parentName:"li"},"\uff08\u5f3a\u7f13\u5b58\u548c\u534f\u5546\u7f13\u5b58\uff09")),(0,n.yg)("li",{parentName:"ol"},"http1.1\u62e5\u6709\u957f\u8fde\u63a5\uff0c\u5e76\u652f\u6301\u8bf7\u6c42\u7ba1\u9053\u5316\uff08pipelining\uff09\uff0c(\u5141\u8bb8\u5ba2\u6237\u7aef\u4e0d\u7528\u7b49\u5230\u670d\u52a1\u5668\u7684\u54cd\u5e94\u5c31\u80fd\u53d1\u9001\u4e0b\u4e00\u4e2a\u8bf7\u6c42)"),(0,n.yg)("li",{parentName:"ol"},"http1.1\u6d41\u63a7\u5236\u57fa\u4e8etcp\u8fde\u63a5\u3002\u5f53\u8fde\u63a5\u5efa\u7acb\u65f6\uff0c\u4e24\u7aef\u901a\u8fc7\u7cfb\u7edf\u9ed8\u8ba4\u673a\u5236\u5efa\u7acb\u7f13\u51b2\u533a\u3002\u5e76\u901a\u8fc7ack\u62a5\u6587\u6765\u901a\u77e5\u5bf9\u65b9\u63a5\u6536\u7a97\u53e3\u5927\u5c0f\uff0c\u56e0\u4e3ahttp1.1 \u4f9d\u9760\u4f20\u8f93\u5c42\u6765\u907f\u514d\u6d41\u6ea2\u51fa\uff0c\u6bcf\u4e2atcp\u8fde\u63a5\u9700\u8981\u4e00\u4e2a\u72ec\u7acb\u7684\u6d41\u63a7\u5236\u673a\u5236")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"\u7f3a\u70b9"),":\n",(0,n.yg)("strong",{parentName:"p"},"HTTP\u961f\u5934\u963b\u585e"),"\nHTTP1.1\u589e\u52a0\u4e86\u7ba1\u7ebf\u5316\u6280\u672f\uff0c\u5141\u8bb8\u5ba2\u6237\u7aef\u4e0d\u7528\u7b49\u5230\u670d\u52a1\u5668\u7684\u54cd\u5e94\u5c31\u80fd\u53d1\u9001\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u3002\u76ee\u7684\u4e3a\u4e86\u5728\u4e00\u6b21TCP\u8fde\u63a5\u4e0a\u53ef\u4ee5\u5e76\u884c\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\uff0c\u6765\u63d0\u9ad8\u7f51\u7edc\u5229\u7528\u7387\u3002\u4f46\u662f\u5b83\u6709\u4e00\u4e2a\u5f88\u5927\u7684\u7f3a\u70b9\uff0c\u670d\u52a1\u5668\u5fc5\u987b\u6309\u7167\u8bf7\u6c42\u7684\u987a\u5e8f\u6765\u54cd\u5e94\u3002\u5373\u540e\u7eed\u8bf7\u6c42\u7684\u54cd\u5e94\u5fc5\u987b\u7b49\u5230\u7b2c\u4e00\u4e2a\u54cd\u5e94\u53d1\u9001\u4e4b\u540e\u624d\u80fd\u53d1\u9001\uff0c\u5373\u4f7f\u540e\u7eed\u54cd\u5e94\u5df2\u7ecf\u5b8c\u6210\u3002\u8fd9\u5c31\u662fHTTP\u961f\u5934\u963b\u585e\u7684\u6765\u7531\u3002"),(0,n.yg)("h3",{id:"http2\u7684\u65b0\u7279\u6027"},"http2\u7684\u65b0\u7279\u6027"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u5934\u90e8\u538b\u7f29",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"http.1.1 \u4e4b\u524d ",(0,n.yg)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u4f53")," \u4e00\u822c\u4f1a\u6709\u54cd\u5e94\u7684\u538b\u7f29\u7f16\u7801\u8fc7\u7a0b, \u901a\u8fc7",(0,n.yg)("inlineCode",{parentName:"li"},"Content-Encoding")," \u5934\u90e8\u5b57\u6bb5\u6765\u6307\u5b9a, \u4f46\u662f\u6709\u6ca1\u6709\u60f3\u8fc7\u5934\u90e8\u5b57\u6bb5\u672c\u8eab\u7684\u538b\u7f29\u5462?"),(0,n.yg)("li",{parentName:"ul"},"http2 \u9488\u5bf9\u5934\u90e8\u5b57\u6bb5\u4e5f\u91c7\u7528\u4e86\u5bf9\u5e94\u7684\u538b\u7f29\u7b97\u6cd5 ",(0,n.yg)("inlineCode",{parentName:"li"},"HPACK"),", \u5bf9\u8bf7\u6c42\u5934\u8fdb\u884c\u538b\u7f29 "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"hpack")," \u9996\u5148\u5728\u670d\u52a1\u5668\u4e0e\u5ba2\u6237\u7aef\u4e4b\u95f4\u5efa\u7acb\u54c8\u5e0c\u8868, \u5c06\u8981\u7528\u7684\u5b57\u6bb5\u5b58\u653e\u5728\u8fd9\u5f20\u8868\u4e2d,\u90a3\u4e48\u5728\u4f20\u8f93\u7684\u65f6\u5019\u5bf9\u4e8e\u4e4b\u524d\u51fa\u73b0\u8fc7\u7684\u503c\uff0c\u53ea\u9700\u8981\u628a\u7d22\u5f15(\u6bd4\u59820\uff0c1\uff0c2\uff0c...)\u4f20\u7ed9\u5bf9\u65b9\u5373\u53ef\uff0c\u5bf9\u65b9\u62ff\u5230\u7d22\u5f15\u67e5\u8868\u5c31\u884c\u4e86\u3002\u8fd9\u79cd\u4f20\u7d22\u5f15\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8bf4\u8ba9\u8bf7\u6c42\u5934\u5b57\u6bb5\u5f97\u5230\u6781\u5927\u7a0b\u5ea6\u7684\u7cbe\u7b80\u548c\u590d\u7528"))),(0,n.yg)("li",{parentName:"ol"},"\u591a\u8def\u590d\u7528",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u5148\u4e86\u89e3http1.1\u961f\u5934\u963b\u585e"),(0,n.yg)("li",{parentName:"ul"},"HTTP/2 \u590d\u7528TCP\u8fde\u63a5\uff0c\u5728\u4e00\u4e2a\u8fde\u63a5\u91cc\uff0c\u5ba2\u6237\u7aef\u548c\u6d4f\u89c8\u5668\u90fd\u53ef\u4ee5\u540c\u65f6\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\u6216\u56de\u5e94\uff0c\u800c\u4e14\u4e0d\u7528\u6309\u7167\u987a\u5e8f\u4e00\u4e00\u5bf9\u5e94\uff0c\u8fd9\u6837\u5c31\u907f\u514d\u51fa\u73b0\u963b\u585e\u73b0\u8c61\u3002"))),(0,n.yg)("li",{parentName:"ol"},"\u4e8c\u8fdb\u5236\u5206\u5e27",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"http2\u91c7\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f\u4f20\u8f93\u6570\u636e, \u5e27\u662fHTTP2\u901a\u4fe1\u4e2d\u6700\u5c0f\u5355\u4f4d\u4fe1\u606f"),(0,n.yg)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6570\u636e\u6d41\u90fd\u4ee5\u6d88\u606f\u7684\u5f62\u5f0f\u53d1\u9001\uff0c\u800c\u6d88\u606f\u53c8\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u5e27\u7ec4\u6210\u3002\u591a\u4e2a\u5e27\u4e4b\u95f4\u53ef\u4ee5\u4e71\u5e8f\u53d1\u9001\uff0c\u6839\u636e\u5e27\u9996\u90e8\u7684\u6d41\u6807\u8bc6\u53ef\u4ee5\u91cd\u65b0\u7ec4\u88c5\uff0c\u8fd9\u4e5f\u662f\u591a\u8def\u590d\u7528\u540c\u65f6\u53d1\u9001\u6570\u636e\u7684\u5b9e\u73b0\u6761\u4ef6")))),(0,n.yg)("h3",{id:"http2\u5feb\u5728\u54ea\u91cc-\u54ea\u4e2a\u9636\u6bb5\u5feb\u4e86"},"http2\u5feb\u5728\u54ea\u91cc? \u54ea\u4e2a\u9636\u6bb5\u5feb\u4e86?"),(0,n.yg)("p",null,"\u5feb\u5728\u4e86\u591a\u8def\u590d\u7528\u9636\u6bb5, http1 \u540c\u57df\u540d\u4e0b\u5bf9\u591a\u5e76\u53d16\u6761, \u800c\u4e14\u6bcf\u4e2a\u90fd\u662f\u963b\u585e\u7684(\u524d\u9762\u7684\u5904\u7406\u5b8c\u4e86, \u624d\u4f1a\u5904\u7406\u540e\u9762\u7684)\nhttp2\u53ea\u9700\u8981\u4e00\u4e2atcp\u8fde\u63a5, \u6ca1\u6709\u963b\u585e, \u53ef\u4ee5\u5e76\u53d1100\u4e2a\u8bf7\u6c42 (\u53ef\u80fd\u662f\u6d4f\u89c8\u5668\u9650\u5236 ,\u5e76\u4e0d\u662f\u65e0\u9650\u7684)"),(0,n.yg)("h3",{id:"https-\u4e0e-http-\u533a\u522b"},"https \u4e0e http \u533a\u522b"),(0,n.yg)("h3",{id:"http\u7f13\u5b58"},"http\u7f13\u5b58"),(0,n.yg)("p",null,"\u6d4f\u89c8\u5668\u7f13\u5b58\u80fd\u4f18\u5316\u6027\u80fd\uff0c\u800c\u6d4f\u89c8\u5668\u7f13\u5b58\u5206\u4e3a\u5f3a\u7f13\u5b58\u548c\u534f\u5546\u7f13\u5b58\uff0c\u90fd\u662f\u4ece\u5ba2\u6237\u7aef\u8bfb\u53d6\u7f13\u5b58"),(0,n.yg)("p",null,"\u5f3a\u7f13\u5b58:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\u72b6\u6001\u7801: 200\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"cache-control: \u54cd\u5e94\u5934\u8868\u793a\u8d44\u6e90\u662f\u5426\u53ef\u4ee5\u88ab\u7f13\u5b58, \u4ee5\u53ca\u7f13\u5b58\u6709\u6548\u671f,\u53ef\u4ee5\u901a\u8fc7 ",(0,n.yg)("inlineCode",{parentName:"p"},"max-age")," \u5b57\u6bb5\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c",(0,n.yg)("inlineCode",{parentName:"p"},"cache-control: max-age=7776000")," \u53e6\u5916 ",(0,n.yg)("inlineCode",{parentName:"p"},"cache-control")," \u8fd8\u53ef\u4ee5\u8bbe\u7f6e",(0,n.yg)("inlineCode",{parentName:"p"},"private/no-cache")," \u7b49\u5b57\u6bb5"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"public\uff1a\u8d44\u6e90\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u90fd\u53ef\u4ee5\u7f13\u5b58\u3002"),(0,n.yg)("li",{parentName:"ul"},"privite\uff1a\u8d44\u6e90\u53ea\u6709\u5ba2\u6237\u7aef\u53ef\u4ee5\u7f13\u5b58\u3002"),(0,n.yg)("li",{parentName:"ul"},"no-cache\uff1a\u5ba2\u6237\u7aef\u7f13\u5b58\u8d44\u6e90\uff0c\u4f46\u662f\u662f\u5426\u7f13\u5b58\u9700\u8981\u7ecf\u8fc7\u534f\u5546\u7f13\u5b58\u6765\u9a8c\u8bc1\u3002"),(0,n.yg)("li",{parentName:"ul"},"no-store\uff1a\u4e0d\u4f7f\u7528\u7f13\u5b58\u3002"),(0,n.yg)("li",{parentName:"ul"},"max-age\uff1a\u7f13\u5b58\u4fdd\u8d28\u671f\u3002"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"expires: \u8fc7\u671f\u65f6\u95f4 ",(0,n.yg)("inlineCode",{parentName:"p"},"expires: Tue, 18 Apr 2023 06:29:41 GMT")," \u8868\u793a\u7f13\u5b58\u5c06\u5728\u8fd9\u4e2a\u65f6\n\u95f4\u540e\u8fc7\u671f, \u5982\u679c\u670d\u52a1\u5668\u65f6\u95f4\u4e0e\u672c\u5730\u65e5\u671f\u4e0d\u4e00\u81f4, \u7f13\u5b58\u65f6\u95f4\u5c31\u4f1a\u51fa\u9519"))),(0,n.yg)("p",null,"\u534f\u5546\u7f13\u5b58:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\u72b6\u6001\u7801: 304\n")),(0,n.yg)("p",null,"\u534f\u5546\u7f13\u5b58\u5c31\u662f\u5f3a\u7f13\u5b58\u5931\u6548\u540e\uff0c\u6d4f\u89c8\u5668\u643a\u5e26\u7f13\u5b58\u6807\u8bc6\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u7531\u670d\u52a1\u5668\u6839\u636e\u7f13\u5b58\u6807\u8bc6\u6765\u51b3\u5b9a\u662f\u5426\u4f7f\u7528\u7f13\u5b58\u7684\u8fc7\u7a0b"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Last-Modified"),"\u662f\u670d\u52a1\u5668\u54cd\u5e94\u8bf7\u6c42\u65f6\uff0c\u8fd4\u56de\u8be5\u8d44\u6e90\u6587\u4ef6\u5728\u670d\u52a1\u5668\u6700\u540e\u88ab\u4fee\u6539\u7684\u65f6\u95f4\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"If-Modified-Since"),": \u5219\u662f\u5ba2\u6237\u7aef\u518d\u6b21\u53d1\u8d77\u8be5\u8bf7\u6c42\u65f6\uff0c\u643a\u5e26\u4e0a\u6b21\u8bf7\u6c42\u8fd4\u56de\u7684Last-Modified\u503c\uff0c\u901a\u8fc7\u6b64\u5b57\u6bb5\u503c\u544a\u8bc9\u670d\u52a1\u5668\u8be5\u8d44\u6e90\u4e0a\u6b21\u8bf7\u6c42\u8fd4\u56de\u7684\u6700\u540e\u88ab\u4fee\u6539\u65f6\u95f4\u3002\u670d\u52a1\u5668\u6536\u5230\u8be5\u8bf7\u6c42\uff0c\u53d1\u73b0\u8bf7\u6c42\u5934\u542b\u6709",(0,n.yg)("inlineCode",{parentName:"li"},"If-Modified-Since"),"\u5b57\u6bb5\uff0c\u5219\u4f1a\u6839\u636e",(0,n.yg)("inlineCode",{parentName:"li"},"If-Modified-Since"),"\u7684\u5b57\u6bb5\u503c\u4e0e\u8be5\u8d44\u6e90\u5728\u670d\u52a1\u5668\u7684\u6700\u540e\u88ab\u4fee\u6539\u65f6\u95f4\u505a\u5bf9\u6bd4\uff0c\u82e5\u670d\u52a1\u5668\u7684\u8d44\u6e90\u6700\u540e\u88ab\u4fee\u6539\u65f6\u95f4\u5927\u4e8e",(0,n.yg)("inlineCode",{parentName:"li"},"If-Modified-Since"),"\u7684\u5b57\u6bb5\u503c\uff0c\u5219\u91cd\u65b0\u8fd4\u56de\u8d44\u6e90\uff0c\u72b6\u6001\u7801\u4e3a200\uff1b\u5426\u5219\u5219\u8fd4\u56de304\uff0c\u4ee3\u8868\u8d44\u6e90\u65e0\u66f4\u65b0\uff0c\u53ef\u7ee7\u7eed\u4f7f\u7528\u7f13\u5b58\u6587\u4ef6\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Etag"),"\u662f\u670d\u52a1\u5668\u54cd\u5e94\u8bf7\u6c42\u65f6\uff0c\u8fd4\u56de\u5f53\u524d\u8d44\u6e90\u6587\u4ef6\u7684\u4e00\u4e2a\u552f\u4e00\u6807\u8bc6(\u7531\u670d\u52a1\u5668\u751f\u6210)\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"If-None-Match"),"\u662f\u5ba2\u6237\u7aef\u518d\u6b21\u53d1\u8d77\u8be5\u8bf7\u6c42\u65f6\uff0c\u643a\u5e26\u4e0a\u6b21\u8bf7\u6c42\u8fd4\u56de\u7684\u552f\u4e00\u6807\u8bc6Etag\u503c\uff0c\u901a\u8fc7\u6b64\u5b57\u6bb5\u503c\u544a\u8bc9\u670d\u52a1\u5668\u8be5\u8d44\u6e90\u4e0a\u6b21\u8bf7\u6c42\u8fd4\u56de\u7684\u552f\u4e00\u6807\u8bc6\u503c\u3002\u670d\u52a1\u5668\u6536\u5230\u8be5\u8bf7\u6c42\u540e\uff0c\u53d1\u73b0\u8be5\u8bf7\u6c42\u5934\u4e2d\u542b\u6709",(0,n.yg)("inlineCode",{parentName:"li"},"If-None-Match"),"\uff0c\u5219\u4f1a\u6839\u636e",(0,n.yg)("inlineCode",{parentName:"li"},"If-None-Match"),"\u7684\u5b57\u6bb5\u503c\u4e0e\u8be5\u8d44\u6e90\u5728\u670d\u52a1\u5668\u7684Etag\u503c\u505a\u5bf9\u6bd4\uff0c\u4e00\u81f4\u5219\u8fd4\u56de304\uff0c\u4ee3\u8868\u8d44\u6e90\u65e0\u66f4\u65b0\uff0c\u7ee7\u7eed\u4f7f\u7528\u7f13\u5b58\u6587\u4ef6\uff1b\u4e0d\u4e00\u81f4\u5219\u91cd\u65b0\u8fd4\u56de\u8d44\u6e90\u6587\u4ef6\uff0c\u72b6\u6001\u7801\u4e3a200\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"Etag / If-None-Match"),"\u4f18\u5148\u7ea7\u9ad8\u4e8e",(0,n.yg)("inlineCode",{parentName:"li"},"Last-Modified / If-Modified-Since"),"\uff0c\u540c\u65f6\u5b58\u5728\u5219\u53ea\u6709",(0,n.yg)("inlineCode",{parentName:"li"},"Etag / If-None-Match"),"\u751f\u6548\u3002")),(0,n.yg)("h3",{id:"get--post-\u533a\u522b"},"get & post \u533a\u522b"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u6700\u76f4\u89c2\u7684\u533a\u522b\u5c31\u662fget\u628a\u53c2\u6570\u5305\u542b\u5728url\u4e2d, post\u901a\u8fc7request body\u4f20\u9012\u53c2\u6570"),(0,n.yg)("li",{parentName:"ul"},"get\u5728\u6d4f\u89c8\u5668\u56de\u9000\u65f6\u662f\u65e0\u5bb3\u7684, \u800cpost\u4f1a\u518d\u6b21\u63d0\u4ea4\u8bf7\u6c42"),(0,n.yg)("li",{parentName:"ul"},"get\u8bf7\u6c42\u4f1a\u88ab\u6d4f\u89c8\u5668\u4e3b\u52a8\u7f13\u5b58, \u800cpost\u4e0d\u4f1a, \u9664\u975e\u624b\u52a8\u8bbe\u7f6e"),(0,n.yg)("li",{parentName:"ul"},"get\u8bf7\u6c42\u53ea\u80fd\u8fdb\u884curl\u7f16\u7801, \u800cpost\u652f\u6301\u591a\u79cd\u7f16\u7801\u65b9\u5f0f"),(0,n.yg)("li",{parentName:"ul"},"get\u8bf7\u6c42\u5728url\u4e2d\u4f20\u9012\u7684\u53c2\u6570\u957f\u5ea6\u662f\u6709\u9650\u5236\u7684, \u800cpost\u6ca1\u6709"),(0,n.yg)("li",{parentName:"ul"},"\u5bf9\u53c2\u6570\u7684\u6570\u636e\u7c7b\u578b, get\u53ea\u63a5\u53d7ASCII(\u963f\u65af\u514b\u7801)\u5b57\u7b26, \u800cpost\u6ca1\u6709\u9650\u5236"),(0,n.yg)("li",{parentName:"ul"},"get\u5bf9\u6bd4post\u66f4\u4e0d\u5b89\u5168, \u56e0\u4e3a\u53c2\u6570\u76f4\u63a5\u66b4\u9732\u5728url\u4e0a, \u6240\u4ee5\u4e0d\u80fd\u7528\u6765\u4f20\u9012\u654f\u611f\u4fe1\u606f")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u672c\u8d28\u533a\u522b"),"\nget\u4ea7\u751f\u4e00\u4e2atcp\u6570\u636e\u5305, post\u4ea7\u751f\u4e24\u4e2atcp\u6570\u636e\u5305"),(0,n.yg)("p",null,"get: \u6d4f\u89c8\u5668\u4f1a\u628ahttp header\u548cdata\u4e00\u5e76\u53d1\u9001\u51fa\u53bb, \u670d\u52a1\u5668\u54cd\u5e94200 (\u8fd4\u56de\u6570\u636e)"),(0,n.yg)("p",null,"post: \u6d4f\u89c8\u5668\u5148\u53d1\u9001header, \u670d\u52a1\u5668\u54cd\u5e94100 continue, \u6d4f\u89c8\u5668\u518d\u53d1\u9001data, \u670d\u52a1\u5668\u54cd\u5e94200"),(0,n.yg)("h3",{id:"http\u72b6\u6001\u7801"},"Http\u72b6\u6001\u7801"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"1**")," \u4fe1\u8868\u793a\u4e34\u65f6\u54cd\u5e94\u5e76\u9700\u8981\u8bf7\u6c42\u8005\u7ee7\u7eed\u6267\u884c\u64cd\u4f5c\u7684\u72b6\u6001\u4ee3\u7801\u3002",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"100 \uff08\u7ee7\u7eed\uff09 \u8bf7\u6c42\u8005\u5e94\u5f53\u7ee7\u7eed\u63d0\u51fa\u8bf7\u6c42\u3002\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u4ee3\u7801\u8868\u793a\u5df2\u6536\u5230\u8bf7\u6c42\u7684\u7b2c\u4e00\u90e8\u5206\uff0c\u6b63\u5728\u7b49\u5f85\u5176\u4f59\u90e8\u5206\u3002 "),(0,n.yg)("li",{parentName:"ul"},"101 \uff08\u5207\u6362\u534f\u8bae\uff09 \u8bf7\u6c42\u8005\u5df2\u8981\u6c42\u670d\u52a1\u5668\u5207\u6362\u534f\u8bae\uff0c\u670d\u52a1\u5668\u5df2\u786e\u8ba4\u5e76\u51c6\u5907\u5207\u6362\u3002"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"2**")," \u8868\u793a\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\u7684\u72b6\u6001\u4ee3\u7801\u3002",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"200 \uff08\u6210\u529f\uff09 \u670d\u52a1\u5668\u5df2\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\u3002\u901a\u5e38\uff0c\u8fd9\u8868\u793a\u670d\u52a1\u5668\u63d0\u4f9b\u4e86\u8bf7\u6c42\u7684\u7f51\u9875\u3002"),(0,n.yg)("li",{parentName:"ul"},"201 \uff08\u5df2\u521b\u5efa\uff09 \u8bf7\u6c42\u6210\u529f\u5e76\u4e14\u670d\u52a1\u5668\u521b\u5efa\u4e86\u65b0\u7684\u8d44\u6e90\u3002"),(0,n.yg)("li",{parentName:"ul"},"202 \uff08\u5df2\u63a5\u53d7\uff09 \u670d\u52a1\u5668\u5df2\u63a5\u53d7\u8bf7\u6c42\uff0c\u4f46\u5c1a\u672a\u5904\u7406\u3002"),(0,n.yg)("li",{parentName:"ul"},"203 \uff08\u975e\u6388\u6743\u4fe1\u606f\uff09 \u670d\u52a1\u5668\u5df2\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\uff0c\u4f46\u8fd4\u56de\u7684\u4fe1\u606f\u53ef\u80fd\u6765\u81ea\u53e6\u4e00\u6765\u6e90\u3002"),(0,n.yg)("li",{parentName:"ul"},"204 \uff08\u65e0\u5185\u5bb9\uff09 \u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\uff0c\u4f46\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9\u3002"),(0,n.yg)("li",{parentName:"ul"},"205 \uff08\u91cd\u7f6e\u5185\u5bb9\uff09 \u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u8bf7\u6c42\uff0c\u4f46\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9\u3002"),(0,n.yg)("li",{parentName:"ul"},"206 \uff08\u90e8\u5206\u5185\u5bb9\uff09 \u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u90e8\u5206 GET \u8bf7\u6c42\u3002"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"3**")," \u8868\u793a\u8981\u5b8c\u6210\u8bf7\u6c42\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u64cd\u4f5c\u3002 \u901a\u5e38\uff0c\u8fd9\u4e9b\u72b6\u6001\u4ee3\u7801\u7528\u6765\u91cd\u5b9a\u5411\u3002",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"300 \uff08\u591a\u79cd\u9009\u62e9\uff09 \u9488\u5bf9\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u53ef\u6267\u884c\u591a\u79cd\u64cd\u4f5c\u3002\u670d\u52a1\u5668\u53ef\u6839\u636e\u8bf7\u6c42\u8005 (user agent) \u9009\u62e9\u4e00\u9879\u64cd\u4f5c\uff0c\u6216\u63d0\u4f9b\u64cd\u4f5c\u5217\u8868\u4f9b\u8bf7\u6c42\u8005\u9009\u62e9\u3002"),(0,n.yg)("li",{parentName:"ul"},"301 \uff08\u6c38\u4e45\u79fb\u52a8\uff09 \u8bf7\u6c42\u7684\u7f51\u9875\u5df2\u6c38\u4e45\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u54cd\u5e94\uff08\u5bf9 GET \u6216 HEAD \u8bf7\u6c42\u7684\u54cd\u5e94\uff09\u65f6\uff0c\u4f1a\u81ea\u52a8\u5c06\u8bf7\u6c42\u8005\u8f6c\u5230\u65b0\u4f4d\u7f6e\u3002"),(0,n.yg)("li",{parentName:"ul"},"302 \uff08\u4e34\u65f6\u79fb\u52a8\uff09 \u670d\u52a1\u5668\u76ee\u524d\u4ece\u4e0d\u540c\u4f4d\u7f6e\u7684\u7f51\u9875\u54cd\u5e94\u8bf7\u6c42\uff0c\u4f46\u8bf7\u6c42\u8005\u5e94\u7ee7\u7eed\u4f7f\u7528\u539f\u6709\u4f4d\u7f6e\u6765\u8fdb\u884c\u4ee5\u540e\u7684\u8bf7\u6c42\u3002"),(0,n.yg)("li",{parentName:"ul"},"303 \uff08\u67e5\u770b\u5176\u4ed6\u4f4d\u7f6e\uff09 \u8bf7\u6c42\u8005\u5e94\u5f53\u5bf9\u4e0d\u540c\u7684\u4f4d\u7f6e\u4f7f\u7528\u5355\u72ec\u7684 GET \u8bf7\u6c42\u6765\u68c0\u7d22\u54cd\u5e94\u65f6\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u4ee3\u7801\u3002"),(0,n.yg)("li",{parentName:"ul"},"304 \uff08\u672a\u4fee\u6539\uff09 \u81ea\u4ece\u4e0a\u6b21\u8bf7\u6c42\u540e\uff0c\u8bf7\u6c42\u7684\u7f51\u9875\u672a\u4fee\u6539\u8fc7\u3002\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u54cd\u5e94\u65f6\uff0c\u4e0d\u4f1a\u8fd4\u56de\u7f51\u9875\u5185\u5bb9\u3002"),(0,n.yg)("li",{parentName:"ul"},"305 \uff08\u4f7f\u7528\u4ee3\u7406\uff09 \u8bf7\u6c42\u8005\u53ea\u80fd\u4f7f\u7528\u4ee3\u7406\u8bbf\u95ee\u8bf7\u6c42\u7684\u7f51\u9875\u3002\u5982\u679c\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u54cd\u5e94\uff0c\u8fd8\u8868\u793a\u8bf7\u6c42\u8005\u5e94\u4f7f\u7528\u4ee3\u7406\u3002"),(0,n.yg)("li",{parentName:"ul"},"307 \uff08\u4e34\u65f6\u91cd\u5b9a\u5411\uff09 \u670d\u52a1\u5668\u76ee\u524d\u4ece\u4e0d\u540c\u4f4d\u7f6e\u7684\u7f51\u9875\u54cd\u5e94\u8bf7\u6c42\uff0c\u4f46\u8bf7\u6c42\u8005\u5e94\u7ee7\u7eed\u4f7f\u7528\u539f\u6709\u4f4d\u7f6e\u6765\u8fdb\u884c\u4ee5\u540e\u7684\u8bf7\u6c42\u3002"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"4**")," \u5ba2\u6237\u7aef\u9519\u8bef, \u8bf7\u6c42\u5305\u542b\u8bed\u6cd5\u9519\u8bef\u6216\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"400 \uff08\u9519\u8bef\u8bf7\u6c42\uff09 \u670d\u52a1\u5668\u4e0d\u7406\u89e3\u8bf7\u6c42\u7684\u8bed\u6cd5\u3002"),(0,n.yg)("li",{parentName:"ul"},"401 \uff08\u672a\u6388\u6743\uff09 \u8bf7\u6c42\u8981\u6c42\u8eab\u4efd\u9a8c\u8bc1\u3002 \u5bf9\u4e8e\u9700\u8981\u767b\u5f55\u7684\u7f51\u9875\uff0c\u670d\u52a1\u5668\u53ef\u80fd\u8fd4\u56de\u6b64\u54cd\u5e94\u3002"),(0,n.yg)("li",{parentName:"ul"},"403 \uff08\u7981\u6b62\uff09 \u670d\u52a1\u5668\u62d2\u7edd\u8bf7\u6c42\u3002"),(0,n.yg)("li",{parentName:"ul"},"404 \uff08\u672a\u627e\u5230\uff09 \u670d\u52a1\u5668\u627e\u4e0d\u5230\u8bf7\u6c42\u7684\u7f51\u9875\u3002"),(0,n.yg)("li",{parentName:"ul"},"405 \uff08\u65b9\u6cd5\u7981\u7528\uff09 \u7981\u7528\u8bf7\u6c42\u4e2d\u6307\u5b9a\u7684\u65b9\u6cd5\u3002"),(0,n.yg)("li",{parentName:"ul"},"406 \uff08\u4e0d\u63a5\u53d7\uff09 \u65e0\u6cd5\u4f7f\u7528\u8bf7\u6c42\u7684\u5185\u5bb9\u7279\u6027\u54cd\u5e94\u8bf7\u6c42\u7684\u7f51\u9875\u3002"),(0,n.yg)("li",{parentName:"ul"},"407 \uff08\u9700\u8981\u4ee3\u7406\u6388\u6743\uff09 \u6b64\u72b6\u6001\u4ee3\u7801\u4e0e 401\uff08\u672a\u6388\u6743\uff09\u7c7b\u4f3c\uff0c\u4f46\u6307\u5b9a\u8bf7\u6c42\u8005\u5e94\u5f53\u6388\u6743\u4f7f\u7528\u4ee3\u7406\u3002"),(0,n.yg)("li",{parentName:"ul"},"408 \uff08\u8bf7\u6c42\u8d85\u65f6\uff09 \u670d\u52a1\u5668\u7b49\u5019\u8bf7\u6c42\u65f6\u53d1\u751f\u8d85\u65f6\u3002"),(0,n.yg)("li",{parentName:"ul"},"409 \uff08\u51b2\u7a81\uff09 \u670d\u52a1\u5668\u5728\u5b8c\u6210\u8bf7\u6c42\u65f6\u53d1\u751f\u51b2\u7a81\u3002\u670d\u52a1\u5668\u5fc5\u987b\u5728\u54cd\u5e94\u4e2d\u5305\u542b\u6709\u5173\u51b2\u7a81\u7684\u4fe1\u606f\u3002"),(0,n.yg)("li",{parentName:"ul"},"410 \uff08\u5df2\u5220\u9664\uff09 \u5982\u679c\u8bf7\u6c42\u7684\u8d44\u6e90\u5df2\u6c38\u4e45\u5220\u9664\uff0c\u670d\u52a1\u5668\u5c31\u4f1a\u8fd4\u56de\u6b64\u54cd\u5e94\u3002"),(0,n.yg)("li",{parentName:"ul"},"411 \uff08\u9700\u8981\u6709\u6548\u957f\u5ea6\uff09 \u670d\u52a1\u5668\u4e0d\u63a5\u53d7\u4e0d\u542b\u6709\u6548\u5185\u5bb9\u957f\u5ea6\u6807\u5934\u5b57\u6bb5\u7684\u8bf7\u6c42\u3002"),(0,n.yg)("li",{parentName:"ul"},"412 \uff08\u672a\u6ee1\u8db3\u524d\u63d0\u6761\u4ef6\uff09 \u670d\u52a1\u5668\u672a\u6ee1\u8db3\u8bf7\u6c42\u8005\u5728\u8bf7\u6c42\u4e2d\u8bbe\u7f6e\u7684\u5176\u4e2d\u4e00\u4e2a\u524d\u63d0\u6761\u4ef6\u3002"),(0,n.yg)("li",{parentName:"ul"},"413 \uff08\u8bf7\u6c42\u5b9e\u4f53\u8fc7\u5927\uff09 \u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\u8bf7\u6c42\uff0c\u56e0\u4e3a\u8bf7\u6c42\u5b9e\u4f53\u8fc7\u5927\uff0c\u8d85\u51fa\u670d\u52a1\u5668\u7684\u5904\u7406\u80fd\u529b\u3002"),(0,n.yg)("li",{parentName:"ul"},"414 \uff08\u8bf7\u6c42\u7684 URI \u8fc7\u957f\uff09 \u8bf7\u6c42\u7684 URI\uff08\u901a\u5e38\u4e3a\u7f51\u5740\uff09\u8fc7\u957f\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\u3002"),(0,n.yg)("li",{parentName:"ul"},"415 \uff08\u4e0d\u652f\u6301\u7684\u5a92\u4f53\u7c7b\u578b\uff09 \u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53d7\u8bf7\u6c42\u9875\u9762\u7684\u652f\u6301\u3002"),(0,n.yg)("li",{parentName:"ul"},"416 \uff08\u8bf7\u6c42\u8303\u56f4\u4e0d\u7b26\u5408\u8981\u6c42\uff09 \u5982\u679c\u9875\u9762\u65e0\u6cd5\u63d0\u4f9b\u8bf7\u6c42\u7684\u8303\u56f4\uff0c\u5219\u670d\u52a1\u5668\u4f1a\u8fd4\u56de\u6b64\u72b6\u6001\u4ee3\u7801\u3002"),(0,n.yg)("li",{parentName:"ul"},'417 \uff08\u672a\u6ee1\u8db3\u671f\u671b\u503c\uff09 \u670d\u52a1\u5668\u672a\u6ee1\u8db3"\u671f\u671b"\u8bf7\u6c42\u6807\u5934\u5b57\u6bb5\u7684\u8981\u6c42\u3002'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"5**")," \u670d\u52a1\u5668\u9519\u8bef, \u670d\u52a1\u5668\u518d\u5904\u7406\u8bf7\u6c42\u7684\u8fc7\u7a0b\u4e2d\u53d1\u751f\u4e86\u9519\u8bef",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"500 \uff08\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef\uff09 \u670d\u52a1\u5668\u9047\u5230\u9519\u8bef\uff0c\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42\u3002"),(0,n.yg)("li",{parentName:"ul"},"501 \uff08\u5c1a\u672a\u5b9e\u65bd\uff09 \u670d\u52a1\u5668\u4e0d\u5177\u5907\u5b8c\u6210\u8bf7\u6c42\u7684\u529f\u80fd\u3002\u4f8b\u5982\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u8bc6\u522b\u8bf7\u6c42\u65b9\u6cd5\u65f6\u53ef\u80fd\u4f1a\u8fd4\u56de\u6b64\u4ee3\u7801\u3002"),(0,n.yg)("li",{parentName:"ul"},"502 \uff08\u9519\u8bef\u7f51\u5173\uff09 \u670d\u52a1\u5668\u4f5c\u4e3a\u7f51\u5173\u6216\u4ee3\u7406\uff0c\u4ece\u4e0a\u6e38\u670d\u52a1\u5668\u6536\u5230\u65e0\u6548\u54cd\u5e94\u3002"),(0,n.yg)("li",{parentName:"ul"},"503 \uff08\u670d\u52a1\u4e0d\u53ef\u7528\uff09 \u670d\u52a1\u5668\u76ee\u524d\u65e0\u6cd5\u4f7f\u7528\uff08\u7531\u4e8e\u8d85\u8f7d\u6216\u505c\u673a\u7ef4\u62a4\uff09\u3002\u901a\u5e38\uff0c\u8fd9\u53ea\u662f\u6682\u65f6\u72b6\u6001\u3002"),(0,n.yg)("li",{parentName:"ul"},"504 \uff08\u7f51\u5173\u8d85\u65f6\uff09 \u670d\u52a1\u5668\u4f5c\u4e3a\u7f51\u5173\u6216\u4ee3\u7406\uff0c\u4f46\u662f\u6ca1\u6709\u53ca\u65f6\u4ece\u4e0a\u6e38\u670d\u52a1\u5668\u6536\u5230\u8bf7\u6c42\u3002"),(0,n.yg)("li",{parentName:"ul"},"505 \uff08HTTP \u7248\u672c\u4e0d\u53d7\u652f\u6301\uff09 \u670d\u52a1\u5668\u4e0d\u652f\u6301\u8bf7\u6c42\u4e2d\u6240\u7528\u7684 HTTP \u534f\u8bae\u7248\u672c\u3002")))))}m.isMDXComponent=!0}}]);