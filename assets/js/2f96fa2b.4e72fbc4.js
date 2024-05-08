"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3733],{8860:(e,t,l)=>{l.d(t,{xA:()=>i,yg:()=>s});var n=l(7953);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var g=n.createContext({}),u=function(e){var t=n.useContext(g),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},i=function(e){var t=u(e.components);return n.createElement(g.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,g=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),y=u(l),c=a,s=y["".concat(g,".").concat(c)]||y[c]||m[c]||r;return l?n.createElement(s,p(p({ref:t},i),{},{components:l})):n.createElement(s,p({ref:t},i))}));function s(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,p=new Array(r);p[0]=c;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[y]="string"==typeof e?e:a,p[1]=o;for(var u=2;u<r;u++)p[u]=l[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},6623:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=l(3911),a=(l(7953),l(8860));const r={slug:"event loop",title:"Event Loop",authors:["Lvxl"],tags:["Event Loop"]},p="\u4e8b\u4ef6\u5faa\u73af",o={permalink:"/lvxl_blog/blog/event loop",source:"@site/blog/2023-03-08-\u4e8b\u4ef6\u5faa\u73af.md",title:"Event Loop",description:"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",date:"2023-03-08T00:00:00.000Z",formattedDate:"March 8, 2023",tags:[{label:"Event Loop",permalink:"/lvxl_blog/blog/tags/event-loop"}],readingTime:11.93,hasTruncateMarker:!1,authors:[{name:"Lvxl",title:"\u524d\u7aef\u5c0f\u767d",url:"https://lvxueliang.github.io/lvxl_blog",imageURL:"https://lvxueliang.github.io/lvxl_blog/img/logo.jpeg",key:"Lvxl"}],frontMatter:{slug:"event loop",title:"Event Loop",authors:["Lvxl"],tags:["Event Loop"]},prevItem:{title:"css\u8ba1\u7b97\u8fc7\u7a0b",permalink:"/lvxl_blog/blog/css"},nextItem:{title:"\u4f60\u4e0d\u77e5\u9053\u7684 CSS \u4e4b\u5305\u542b\u5757",permalink:"/lvxl_blog/blog/css"}},g={authorsImageUrls:[void 0]},u=[{value:"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",id:"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b",level:2},{value:"\u4f55\u4e3a\u8fdb\u7a0b\uff1f",id:"\u4f55\u4e3a\u8fdb\u7a0b",level:3},{value:"\u4f55\u4e3a\u7ebf\u7a0b\uff1f",id:"\u4f55\u4e3a\u7ebf\u7a0b",level:3},{value:"\u6d4f\u89c8\u5668\u6709\u54ea\u4e9b\u8fdb\u7a0b\u548c\u7ebf\u7a0b\uff1f",id:"\u6d4f\u89c8\u5668\u6709\u54ea\u4e9b\u8fdb\u7a0b\u548c\u7ebf\u7a0b",level:3},{value:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:2},{value:"\u82e5\u5e72\u89e3\u91ca",id:"\u82e5\u5e72\u89e3\u91ca",level:2},{value:"\u4f55\u4e3a\u5f02\u6b65\uff1f",id:"\u4f55\u4e3a\u5f02\u6b65",level:3},{value:"JS\u4e3a\u4f55\u4f1a\u963b\u788d\u6e32\u67d3\uff1f",id:"js\u4e3a\u4f55\u4f1a\u963b\u788d\u6e32\u67d3",level:3},{value:"\u4efb\u52a1\u6709\u4f18\u5148\u7ea7\u5417\uff1f",id:"\u4efb\u52a1\u6709\u4f18\u5148\u7ea7\u5417",level:3}],i={toc:u},y="wrapper";function m(e){let{components:t,...l}=e;return(0,a.yg)(y,(0,n.A)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b"},"\u6d4f\u89c8\u5668\u7684\u8fdb\u7a0b\u6a21\u578b"),(0,a.yg)("h3",{id:"\u4f55\u4e3a\u8fdb\u7a0b"},"\u4f55\u4e3a\u8fdb\u7a0b\uff1f"),(0,a.yg)("p",null,"\u7a0b\u5e8f\u8fd0\u884c\u9700\u8981\u6709\u5b83\u81ea\u5df1\u4e13\u5c5e\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u53ef\u4ee5\u628a\u8fd9\u5757\u5185\u5b58\u7a7a\u95f4\u7b80\u5355\u7684\u7406\u89e3\u4e3a\u8fdb\u7a0b"),(0,a.yg)("img",{src:"http://mdrs.yuanjin.tech/img/202208092057573.png",alt:"image-20220809205743532",style:{zoom:"50%"}}),(0,a.yg)("p",null,"\u6bcf\u4e2a\u5e94\u7528\u81f3\u5c11\u6709\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u8fdb\u7a0b\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u5373\u4f7f\u8981\u901a\u4fe1\uff0c\u4e5f\u9700\u8981\u53cc\u65b9\u540c\u610f\u3002"),(0,a.yg)("h3",{id:"\u4f55\u4e3a\u7ebf\u7a0b"},"\u4f55\u4e3a\u7ebf\u7a0b\uff1f"),(0,a.yg)("p",null,"\u6709\u4e86\u8fdb\u7a0b\u540e\uff0c\u5c31\u53ef\u4ee5\u8fd0\u884c\u7a0b\u5e8f\u7684\u4ee3\u7801\u4e86\u3002"),(0,a.yg)("p",null,"\u8fd0\u884c\u4ee3\u7801\u7684\u300c\u4eba\u300d\u79f0\u4e4b\u4e3a\u300c\u7ebf\u7a0b\u300d\u3002"),(0,a.yg)("p",null,"\u4e00\u4e2a\u8fdb\u7a0b\u81f3\u5c11\u6709\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u6240\u4ee5\u5728\u8fdb\u7a0b\u5f00\u542f\u540e\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u6765\u8fd0\u884c\u4ee3\u7801\uff0c\u8be5\u7ebf\u7a0b\u79f0\u4e4b\u4e3a\u4e3b\u7ebf\u7a0b\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u7a0b\u5e8f\u9700\u8981\u540c\u65f6\u6267\u884c\u591a\u5757\u4ee3\u7801\uff0c\u4e3b\u7ebf\u7a0b\u5c31\u4f1a\u542f\u52a8\u66f4\u591a\u7684\u7ebf\u7a0b\u6765\u6267\u884c\u4ee3\u7801\uff0c\u6240\u4ee5\u4e00\u4e2a\u8fdb\u7a0b\u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u7ebf\u7a0b\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"http://mdrs.yuanjin.tech/img/202208092108499.png",alt:"image-20220809210859457"})),(0,a.yg)("h3",{id:"\u6d4f\u89c8\u5668\u6709\u54ea\u4e9b\u8fdb\u7a0b\u548c\u7ebf\u7a0b"},"\u6d4f\u89c8\u5668\u6709\u54ea\u4e9b\u8fdb\u7a0b\u548c\u7ebf\u7a0b\uff1f"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u662f\u4e00\u4e2a\u591a\u8fdb\u7a0b\u591a\u7ebf\u7a0b\u7684\u5e94\u7528\u7a0b\u5e8f")),(0,a.yg)("p",null,"\u6d4f\u89c8\u5668\u5185\u90e8\u5de5\u4f5c\u6781\u5176\u590d\u6742\u3002"),(0,a.yg)("p",null,"\u4e3a\u4e86\u907f\u514d\u76f8\u4e92\u5f71\u54cd\uff0c\u4e3a\u4e86\u51cf\u5c11\u8fde\u73af\u5d29\u6e83\u7684\u51e0\u7387\uff0c\u5f53\u542f\u52a8\u6d4f\u89c8\u5668\u540e\uff0c\u5b83\u4f1a\u81ea\u52a8\u542f\u52a8\u591a\u4e2a\u8fdb\u7a0b\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"http://mdrs.yuanjin.tech/img/202208092131410.png",alt:"image-20220809213152371"})),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u7684\u4efb\u52a1\u7ba1\u7406\u5668\u4e2d\u67e5\u770b\u5f53\u524d\u7684\u6240\u6709\u8fdb\u7a0b")),(0,a.yg)("p",null,"\u5176\u4e2d\uff0c\u6700\u4e3b\u8981\u7684\u8fdb\u7a0b\u6709\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u8fdb\u7a0b"),(0,a.yg)("p",{parentName:"li"},"\u4e3b\u8981\u8d1f\u8d23\u754c\u9762\u663e\u793a\u3001\u7528\u6237\u4ea4\u4e92\u3001\u5b50\u8fdb\u7a0b\u7ba1\u7406\u7b49\u3002\u6d4f\u89c8\u5668\u8fdb\u7a0b\u5185\u90e8\u4f1a\u542f\u52a8\u591a\u4e2a\u7ebf\u7a0b\u5904\u7406\u4e0d\u540c\u7684\u4efb\u52a1\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u7f51\u7edc\u8fdb\u7a0b"),(0,a.yg)("p",{parentName:"li"},"\u8d1f\u8d23\u52a0\u8f7d\u7f51\u7edc\u8d44\u6e90\u3002\u7f51\u7edc\u8fdb\u7a0b\u5185\u90e8\u4f1a\u542f\u52a8\u591a\u4e2a\u7ebf\u7a0b\u6765\u5904\u7406\u4e0d\u540c\u7684\u7f51\u7edc\u4efb\u52a1\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6e32\u67d3\u8fdb\u7a0b"),"\uff08\u672c\u8282\u8bfe\u91cd\u70b9\u8bb2\u89e3\u7684\u8fdb\u7a0b\uff09"),(0,a.yg)("p",{parentName:"li"},"\u6e32\u67d3\u8fdb\u7a0b\u542f\u52a8\u540e\uff0c\u4f1a\u5f00\u542f\u4e00\u4e2a",(0,a.yg)("strong",{parentName:"p"},"\u6e32\u67d3\u4e3b\u7ebf\u7a0b"),"\uff0c\u4e3b\u7ebf\u7a0b\u8d1f\u8d23\u6267\u884c HTML\u3001CSS\u3001JS \u4ee3\u7801\u3002"),(0,a.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d4f\u89c8\u5668\u4f1a\u4e3a\u6bcf\u4e2a\u6807\u7b7e\u9875\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u6e32\u67d3\u8fdb\u7a0b\uff0c\u4ee5\u4fdd\u8bc1\u4e0d\u540c\u7684\u6807\u7b7e\u9875\u4e4b\u95f4\u4e0d\u76f8\u4e92\u5f71\u54cd\u3002"),(0,a.yg)("blockquote",{parentName:"li"},(0,a.yg)("p",{parentName:"blockquote"},"\u5c06\u6765\u8be5\u9ed8\u8ba4\u6a21\u5f0f\u53ef\u80fd\u4f1a\u6709\u6240\u6539\u53d8\uff0c\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u53c2\u89c1",(0,a.yg)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md#Modes-and-Availability"},"chrome\u5b98\u65b9\u8bf4\u660e\u6587\u6863"))))),(0,a.yg)("h2",{id:"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"),(0,a.yg)("p",null,"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u662f\u6d4f\u89c8\u5668\u4e2d\u6700\u7e41\u5fd9\u7684\u7ebf\u7a0b\uff0c\u9700\u8981\u5b83\u5904\u7406\u7684\u4efb\u52a1\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u89e3\u6790 HTML"),(0,a.yg)("li",{parentName:"ul"},"\u89e3\u6790 CSS"),(0,a.yg)("li",{parentName:"ul"},"\u8ba1\u7b97\u6837\u5f0f"),(0,a.yg)("li",{parentName:"ul"},"\u5e03\u5c40"),(0,a.yg)("li",{parentName:"ul"},"\u5904\u7406\u56fe\u5c42"),(0,a.yg)("li",{parentName:"ul"},"\u6bcf\u79d2\u628a\u9875\u9762\u753b 60 \u6b21"),(0,a.yg)("li",{parentName:"ul"},"\u6267\u884c\u5168\u5c40 JS \u4ee3\u7801"),(0,a.yg)("li",{parentName:"ul"},"\u6267\u884c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570"),(0,a.yg)("li",{parentName:"ul"},"\u6267\u884c\u8ba1\u65f6\u5668\u7684\u56de\u8c03\u51fd\u6570"),(0,a.yg)("li",{parentName:"ul"},"......")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u601d\u8003\u9898\uff1a\u4e3a\u4ec0\u4e48\u6e32\u67d3\u8fdb\u7a0b\u4e0d\u9002\u7528\u591a\u4e2a\u7ebf\u7a0b\u6765\u5904\u7406\u8fd9\u4e9b\u4e8b\u60c5\uff1f")),(0,a.yg)("p",null,"\u8981\u5904\u7406\u8fd9\u4e48\u591a\u7684\u4efb\u52a1\uff0c\u4e3b\u7ebf\u7a0b\u9047\u5230\u4e86\u4e00\u4e2a\u524d\u6240\u672a\u6709\u7684\u96be\u9898\uff1a\u5982\u4f55\u8c03\u5ea6\u4efb\u52a1\uff1f"),(0,a.yg)("p",null,"\u6bd4\u5982\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6211\u6b63\u5728\u6267\u884c\u4e00\u4e2a JS \u51fd\u6570\uff0c\u6267\u884c\u5230\u4e00\u534a\u7684\u65f6\u5019\u7528\u6237\u70b9\u51fb\u4e86\u6309\u94ae\uff0c\u6211\u8be5\u7acb\u5373\u53bb\u6267\u884c\u70b9\u51fb\u4e8b\u4ef6\u7684\u5904\u7406\u51fd\u6570\u5417\uff1f"),(0,a.yg)("li",{parentName:"ul"},"\u6211\u6b63\u5728\u6267\u884c\u4e00\u4e2a JS \u51fd\u6570\uff0c\u6267\u884c\u5230\u4e00\u534a\u7684\u65f6\u5019\u67d0\u4e2a\u8ba1\u65f6\u5668\u5230\u8fbe\u4e86\u65f6\u95f4\uff0c\u6211\u8be5\u7acb\u5373\u53bb\u6267\u884c\u5b83\u7684\u56de\u8c03\u5417\uff1f"),(0,a.yg)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u8fdb\u7a0b\u901a\u77e5\u6211\u201c\u7528\u6237\u70b9\u51fb\u4e86\u6309\u94ae\u201d\uff0c\u4e0e\u6b64\u540c\u65f6\uff0c\u67d0\u4e2a\u8ba1\u65f6\u5668\u4e5f\u5230\u8fbe\u4e86\u65f6\u95f4\uff0c\u6211\u5e94\u8be5\u5904\u7406\u54ea\u4e00\u4e2a\u5462\uff1f"),(0,a.yg)("li",{parentName:"ul"},"......")),(0,a.yg)("p",null,"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u60f3\u51fa\u4e86\u4e00\u4e2a\u7edd\u5999\u7684\u4e3b\u610f\u6765\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\uff1a\u6392\u961f"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"http://mdrs.yuanjin.tech/img/202208092230847.png",alt:"image-20220809223027806"})),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5728\u6700\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u4f1a\u8fdb\u5165\u4e00\u4e2a\u65e0\u9650\u5faa\u73af"),(0,a.yg)("li",{parentName:"ol"},"\u6bcf\u4e00\u6b21\u5faa\u73af\u4f1a\u68c0\u67e5\u6d88\u606f\u961f\u5217\u4e2d\u662f\u5426\u6709\u4efb\u52a1\u5b58\u5728\u3002\u5982\u679c\u6709\uff0c\u5c31\u53d6\u51fa\u7b2c\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\uff0c\u6267\u884c\u5b8c\u4e00\u4e2a\u540e\u8fdb\u5165\u4e0b\u4e00\u6b21\u5faa\u73af\uff1b\u5982\u679c\u6ca1\u6709\uff0c\u5219\u8fdb\u5165\u4f11\u7720\u72b6\u6001\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5176\u4ed6\u6240\u6709\u7ebf\u7a0b\uff08\u5305\u62ec\u5176\u4ed6\u8fdb\u7a0b\u7684\u7ebf\u7a0b\uff09\u53ef\u4ee5\u968f\u65f6\u5411\u6d88\u606f\u961f\u5217\u6dfb\u52a0\u4efb\u52a1\u3002\u65b0\u4efb\u52a1\u4f1a\u52a0\u5230\u6d88\u606f\u961f\u5217\u7684\u672b\u5c3e\u3002\u5728\u6dfb\u52a0\u65b0\u4efb\u52a1\u65f6\uff0c\u5982\u679c\u4e3b\u7ebf\u7a0b\u662f\u4f11\u7720\u72b6\u6001\uff0c\u5219\u4f1a\u5c06\u5176\u5524\u9192\u4ee5\u7ee7\u7eed\u5faa\u73af\u62ff\u53d6\u4efb\u52a1")),(0,a.yg)("p",null,"\u8fd9\u6837\u4e00\u6765\uff0c\u5c31\u53ef\u4ee5\u8ba9\u6bcf\u4e2a\u4efb\u52a1\u6709\u6761\u4e0d\u7d0a\u7684\u3001\u6301\u7eed\u7684\u8fdb\u884c\u4e0b\u53bb\u4e86\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6574\u4e2a\u8fc7\u7a0b\uff0c\u88ab\u79f0\u4e4b\u4e3a\u4e8b\u4ef6\u5faa\u73af\uff08\u6d88\u606f\u5faa\u73af\uff09")),(0,a.yg)("h2",{id:"\u82e5\u5e72\u89e3\u91ca"},"\u82e5\u5e72\u89e3\u91ca"),(0,a.yg)("h3",{id:"\u4f55\u4e3a\u5f02\u6b65"},"\u4f55\u4e3a\u5f02\u6b65\uff1f"),(0,a.yg)("p",null,"\u4ee3\u7801\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u9047\u5230\u4e00\u4e9b\u65e0\u6cd5\u7acb\u5373\u5904\u7406\u7684\u4efb\u52a1\uff0c\u6bd4\u5982\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8ba1\u65f6\u5b8c\u6210\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 \u2014\u2014 ",(0,a.yg)("inlineCode",{parentName:"li"},"setTimeout"),"\u3001",(0,a.yg)("inlineCode",{parentName:"li"},"setInterval")),(0,a.yg)("li",{parentName:"ul"},"\u7f51\u7edc\u901a\u4fe1\u5b8c\u6210\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 -- ",(0,a.yg)("inlineCode",{parentName:"li"},"XHR"),"\u3001",(0,a.yg)("inlineCode",{parentName:"li"},"Fetch")),(0,a.yg)("li",{parentName:"ul"},"\u7528\u6237\u64cd\u4f5c\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1 -- ",(0,a.yg)("inlineCode",{parentName:"li"},"addEventListener"))),(0,a.yg)("p",null,"\u5982\u679c\u8ba9\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u7b49\u5f85\u8fd9\u4e9b\u4efb\u52a1\u7684\u65f6\u673a\u8fbe\u5230\uff0c\u5c31\u4f1a\u5bfc\u81f4\u4e3b\u7ebf\u7a0b\u957f\u671f\u5904\u4e8e\u300c\u963b\u585e\u300d\u7684\u72b6\u6001\uff0c\u4ece\u800c\u5bfc\u81f4\u6d4f\u89c8\u5668\u300c\u5361\u6b7b\u300d"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"http://mdrs.yuanjin.tech/img/202208101043348.png",alt:"image-20220810104344296"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u627f\u62c5\u7740\u6781\u5176\u91cd\u8981\u7684\u5de5\u4f5c\uff0c\u65e0\u8bba\u5982\u4f55\u90fd\u4e0d\u80fd\u963b\u585e\uff01")),(0,a.yg)("p",null,"\u56e0\u6b64\uff0c\u6d4f\u89c8\u5668\u9009\u62e9",(0,a.yg)("strong",{parentName:"p"},"\u5f02\u6b65"),"\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"http://mdrs.yuanjin.tech/img/202208101048899.png",alt:"image-20220810104858857"})),(0,a.yg)("p",null,"\u4f7f\u7528\u5f02\u6b65\u7684\u65b9\u5f0f\uff0c",(0,a.yg)("strong",{parentName:"p"},"\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u6c38\u4e0d\u963b\u585e")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u9762\u8bd5\u9898\uff1a\u5982\u4f55\u7406\u89e3 JS \u7684\u5f02\u6b65\uff1f"),(0,a.yg)("p",{parentName:"blockquote"},"\u53c2\u8003\u7b54\u6848\uff1a"),(0,a.yg)("p",{parentName:"blockquote"},"JS\u662f\u4e00\u95e8\u5355\u7ebf\u7a0b\u7684\u8bed\u8a00\uff0c\u8fd9\u662f\u56e0\u4e3a\u5b83\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u4e2d\uff0c\u800c\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u53ea\u6709\u4e00\u4e2a\u3002"),(0,a.yg)("p",{parentName:"blockquote"},"\u800c\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u627f\u62c5\u7740\u8bf8\u591a\u7684\u5de5\u4f5c\uff0c\u6e32\u67d3\u9875\u9762\u3001\u6267\u884c JS \u90fd\u5728\u5176\u4e2d\u8fd0\u884c\u3002"),(0,a.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u4f7f\u7528\u540c\u6b65\u7684\u65b9\u5f0f\uff0c\u5c31\u6781\u6709\u53ef\u80fd\u5bfc\u81f4\u4e3b\u7ebf\u7a0b\u4ea7\u751f\u963b\u585e\uff0c\u4ece\u800c\u5bfc\u81f4\u6d88\u606f\u961f\u5217\u4e2d\u7684\u5f88\u591a\u5176\u4ed6\u4efb\u52a1\u65e0\u6cd5\u5f97\u5230\u6267\u884c\u3002\u8fd9\u6837\u4e00\u6765\uff0c\u4e00\u65b9\u9762\u4f1a\u5bfc\u81f4\u7e41\u5fd9\u7684\u4e3b\u7ebf\u7a0b\u767d\u767d\u7684\u6d88\u8017\u65f6\u95f4\uff0c\u53e6\u4e00\u65b9\u9762\u5bfc\u81f4\u9875\u9762\u65e0\u6cd5\u53ca\u65f6\u66f4\u65b0\uff0c\u7ed9\u7528\u6237\u9020\u6210\u5361\u6b7b\u73b0\u8c61\u3002"),(0,a.yg)("p",{parentName:"blockquote"},"\u6240\u4ee5\u6d4f\u89c8\u5668\u91c7\u7528\u5f02\u6b65\u7684\u65b9\u5f0f\u6765\u907f\u514d\u3002\u5177\u4f53\u505a\u6cd5\u662f\u5f53\u67d0\u4e9b\u4efb\u52a1\u53d1\u751f\u65f6\uff0c\u6bd4\u5982\u8ba1\u65f6\u5668\u3001\u7f51\u7edc\u3001\u4e8b\u4ef6\u76d1\u542c\uff0c\u4e3b\u7ebf\u7a0b\u5c06\u4efb\u52a1\u4ea4\u7ed9\u5176\u4ed6\u7ebf\u7a0b\u53bb\u5904\u7406\uff0c\u81ea\u8eab\u7acb\u5373\u7ed3\u675f\u4efb\u52a1\u7684\u6267\u884c\uff0c\u8f6c\u800c\u6267\u884c\u540e\u7eed\u4ee3\u7801\u3002\u5f53\u5176\u4ed6\u7ebf\u7a0b\u5b8c\u6210\u65f6\uff0c\u5c06\u4e8b\u5148\u4f20\u9012\u7684\u56de\u8c03\u51fd\u6570\u5305\u88c5\u6210\u4efb\u52a1\uff0c\u52a0\u5165\u5230\u6d88\u606f\u961f\u5217\u7684\u672b\u5c3e\u6392\u961f\uff0c\u7b49\u5f85\u4e3b\u7ebf\u7a0b\u8c03\u5ea6\u6267\u884c\u3002"),(0,a.yg)("p",{parentName:"blockquote"},"\u5728\u8fd9\u79cd\u5f02\u6b65\u6a21\u5f0f\u4e0b\uff0c\u6d4f\u89c8\u5668\u6c38\u4e0d\u963b\u585e\uff0c\u4ece\u800c\u6700\u5927\u9650\u5ea6\u7684\u4fdd\u8bc1\u4e86\u5355\u7ebf\u7a0b\u7684\u6d41\u7545\u8fd0\u884c\u3002")),(0,a.yg)("h3",{id:"js\u4e3a\u4f55\u4f1a\u963b\u788d\u6e32\u67d3"},"JS\u4e3a\u4f55\u4f1a\u963b\u788d\u6e32\u67d3\uff1f"),(0,a.yg)("p",null,"\u5148\u770b\u4ee3\u7801"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<h1>Mr.Yuan is awesome!</h1>\n<button>change</button>\n<script>\n  var h1 = document.querySelector('h1');\n  var btn = document.querySelector('button');\n\n  // \u6b7b\u5faa\u73af\u6307\u5b9a\u7684\u65f6\u95f4\n  function delay(duration) {\n    var start = Date.now();\n    while (Date.now() - start < duration) {}\n  }\n\n  btn.onclick = function () {\n    h1.textContent = '\u8881\u8001\u5e08\u5f88\u5e05\uff01';\n    delay(3000);\n  };\n<\/script>\n")),(0,a.yg)("p",null,"\u70b9\u51fb\u6309\u94ae\u540e\uff0c\u4f1a\u53d1\u751f\u4ec0\u4e48\u5462\uff1f"),(0,a.yg)("p",null,"<\u89c1\u5177\u4f53\u6f14\u793a>"),(0,a.yg)("h3",{id:"\u4efb\u52a1\u6709\u4f18\u5148\u7ea7\u5417"},"\u4efb\u52a1\u6709\u4f18\u5148\u7ea7\u5417\uff1f"),(0,a.yg)("p",null,"\u4efb\u52a1\u6ca1\u6709\u4f18\u5148\u7ea7\uff0c\u5728\u6d88\u606f\u961f\u5217\u4e2d\u5148\u8fdb\u5148\u51fa"),(0,a.yg)("p",null,"\u4f46",(0,a.yg)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217\u662f\u6709\u4f18\u5148\u7ea7\u7684")),(0,a.yg)("p",null,"\u6839\u636e W3C \u7684\u6700\u65b0\u89e3\u91ca:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4efb\u52a1\u90fd\u6709\u4e00\u4e2a\u4efb\u52a1\u7c7b\u578b\uff0c\u540c\u4e00\u4e2a\u7c7b\u578b\u7684\u4efb\u52a1\u5fc5\u987b\u5728\u4e00\u4e2a\u961f\u5217\uff0c\u4e0d\u540c\u7c7b\u578b\u7684\u4efb\u52a1\u53ef\u4ee5\u5206\u5c5e\u4e8e\u4e0d\u540c\u7684\u961f\u5217\u3002\n\u5728\u4e00\u6b21\u4e8b\u4ef6\u5faa\u73af\u4e2d\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4ece\u4e0d\u540c\u7684\u961f\u5217\u4e2d\u53d6\u51fa\u4efb\u52a1\u6267\u884c\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5fc5\u987b\u51c6\u5907\u597d\u4e00\u4e2a\u5fae\u961f\u5217\uff0c\u5fae\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u4f18\u5148\u6240\u6709\u5176\u4ed6\u4efb\u52a1\u6267\u884c\n",(0,a.yg)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint"},"https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint"))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u968f\u7740\u6d4f\u89c8\u5668\u7684\u590d\u6742\u5ea6\u6025\u5267\u63d0\u5347\uff0cW3C \u4e0d\u518d\u4f7f\u7528\u5b8f\u961f\u5217\u7684\u8bf4\u6cd5")),(0,a.yg)("p",null,"\u5728\u76ee\u524d chrome \u7684\u5b9e\u73b0\u4e2d\uff0c\u81f3\u5c11\u5305\u542b\u4e86\u4e0b\u9762\u7684\u961f\u5217\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5ef6\u65f6\u961f\u5217\uff1a\u7528\u4e8e\u5b58\u653e\u8ba1\u65f6\u5668\u5230\u8fbe\u540e\u7684\u56de\u8c03\u4efb\u52a1\uff0c\u4f18\u5148\u7ea7\u300c\u4e2d\u300d"),(0,a.yg)("li",{parentName:"ul"},"\u4ea4\u4e92\u961f\u5217\uff1a\u7528\u4e8e\u5b58\u653e\u7528\u6237\u64cd\u4f5c\u540e\u4ea7\u751f\u7684\u4e8b\u4ef6\u5904\u7406\u4efb\u52a1\uff0c\u4f18\u5148\u7ea7\u300c\u9ad8\u300d"),(0,a.yg)("li",{parentName:"ul"},"\u5fae\u961f\u5217\uff1a\u7528\u6237\u5b58\u653e\u9700\u8981\u6700\u5feb\u6267\u884c\u7684\u4efb\u52a1\uff0c\u4f18\u5148\u7ea7\u300c\u6700\u9ad8\u300d")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6dfb\u52a0\u4efb\u52a1\u5230\u5fae\u961f\u5217\u7684\u4e3b\u8981\u65b9\u5f0f\u4e3b\u8981\u662f\u4f7f\u7528 Promise\u3001MutationObserver"),(0,a.yg)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff1a"),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// \u7acb\u5373\u628a\u4e00\u4e2a\u51fd\u6570\u6dfb\u52a0\u5230\u5fae\u961f\u5217\nPromise.resolve().then(\u51fd\u6570)\n"))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u6d4f\u89c8\u5668\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u7684\u961f\u5217\uff0c\u7531\u4e8e\u548c\u6211\u4eec\u5f00\u53d1\u5173\u7cfb\u4e0d\u5927\uff0c\u4e0d\u4f5c\u8003\u8651")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u9762\u8bd5\u9898\uff1a\u9610\u8ff0\u4e00\u4e0b JS \u7684\u4e8b\u4ef6\u5faa\u73af"),(0,a.yg)("p",{parentName:"blockquote"},"\u53c2\u8003\u7b54\u6848\uff1a"),(0,a.yg)("p",{parentName:"blockquote"},"\u4e8b\u4ef6\u5faa\u73af\u53c8\u53eb\u505a\u6d88\u606f\u5faa\u73af\uff0c\u662f\u6d4f\u89c8\u5668\u6e32\u67d3\u4e3b\u7ebf\u7a0b\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002"),(0,a.yg)("p",{parentName:"blockquote"},"\u5728 Chrome \u7684\u6e90\u7801\u4e2d\uff0c\u5b83\u5f00\u542f\u4e00\u4e2a\u4e0d\u4f1a\u7ed3\u675f\u7684 for \u5faa\u73af\uff0c\u6bcf\u6b21\u5faa\u73af\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u53d6\u51fa\u7b2c\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\uff0c\u800c\u5176\u4ed6\u7ebf\u7a0b\u53ea\u9700\u8981\u5728\u5408\u9002\u7684\u65f6\u5019\u5c06\u4efb\u52a1\u52a0\u5165\u5230\u961f\u5217\u672b\u5c3e\u5373\u53ef\u3002"),(0,a.yg)("p",{parentName:"blockquote"},"\u8fc7\u53bb\u628a\u6d88\u606f\u961f\u5217\u7b80\u5355\u5206\u4e3a\u5b8f\u961f\u5217\u548c\u5fae\u961f\u5217\uff0c\u8fd9\u79cd\u8bf4\u6cd5\u76ee\u524d\u5df2\u65e0\u6cd5\u6ee1\u8db3\u590d\u6742\u7684\u6d4f\u89c8\u5668\u73af\u5883\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u4e00\u79cd\u66f4\u52a0\u7075\u6d3b\u591a\u53d8\u7684\u5904\u7406\u65b9\u5f0f\u3002"),(0,a.yg)("p",{parentName:"blockquote"},"\u6839\u636e W3C \u5b98\u65b9\u7684\u89e3\u91ca\uff0c\u6bcf\u4e2a\u4efb\u52a1\u6709\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u540c\u7c7b\u578b\u7684\u4efb\u52a1\u5fc5\u987b\u5728\u540c\u4e00\u4e2a\u961f\u5217\uff0c\u4e0d\u540c\u7684\u4efb\u52a1\u53ef\u4ee5\u5c5e\u4e8e\u4e0d\u540c\u7684\u961f\u5217\u3002\u4e0d\u540c\u4efb\u52a1\u961f\u5217\u6709\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\uff0c\u5728\u4e00\u6b21\u4e8b\u4ef6\u5faa\u73af\u4e2d\uff0c\u7531\u6d4f\u89c8\u5668\u81ea\u884c\u51b3\u5b9a\u53d6\u54ea\u4e00\u4e2a\u961f\u5217\u7684\u4efb\u52a1\u3002\u4f46\u6d4f\u89c8\u5668\u5fc5\u987b\u6709\u4e00\u4e2a\u5fae\u961f\u5217\uff0c\u5fae\u961f\u5217\u7684\u4efb\u52a1\u4e00\u5b9a\u5177\u6709\u6700\u9ad8\u7684\u4f18\u5148\u7ea7\uff0c\u5fc5\u987b\u4f18\u5148\u8c03\u5ea6\u6267\u884c\u3002")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u9762\u8bd5\u9898\uff1aJS \u4e2d\u7684\u8ba1\u65f6\u5668\u80fd\u505a\u5230\u7cbe\u786e\u8ba1\u65f6\u5417\uff1f\u4e3a\u4ec0\u4e48\uff1f"),(0,a.yg)("p",{parentName:"blockquote"},"\u53c2\u8003\u7b54\u6848\uff1a"),(0,a.yg)("p",{parentName:"blockquote"},"\u4e0d\u884c\uff0c\u56e0\u4e3a\uff1a"),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"\u8ba1\u7b97\u673a\u786c\u4ef6\u6ca1\u6709\u539f\u5b50\u949f\uff0c\u65e0\u6cd5\u505a\u5230\u7cbe\u786e\u8ba1\u65f6"),(0,a.yg)("li",{parentName:"ol"},"\u64cd\u4f5c\u7cfb\u7edf\u7684\u8ba1\u65f6\u51fd\u6570\u672c\u8eab\u5c31\u6709\u5c11\u91cf\u504f\u5dee\uff0c\u7531\u4e8e JS \u7684\u8ba1\u65f6\u5668\u6700\u7ec8\u8c03\u7528\u7684\u662f\u64cd\u4f5c\u7cfb\u7edf\u7684\u51fd\u6570\uff0c\u4e5f\u5c31\u643a\u5e26\u4e86\u8fd9\u4e9b\u504f\u5dee"),(0,a.yg)("li",{parentName:"ol"},"\u6309\u7167 W3C \u7684\u6807\u51c6\uff0c\u6d4f\u89c8\u5668\u5b9e\u73b0\u8ba1\u65f6\u5668\u65f6\uff0c\u5982\u679c\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7 5 \u5c42\uff0c\u5219\u4f1a\u5e26\u6709 4 \u6beb\u79d2\u7684\u6700\u5c11\u65f6\u95f4\uff0c\u8fd9\u6837\u5728\u8ba1\u65f6\u65f6\u95f4\u5c11\u4e8e 4 \u6beb\u79d2\u65f6\u53c8\u5e26\u6765\u4e86\u504f\u5dee"),(0,a.yg)("li",{parentName:"ol"},"\u53d7\u4e8b\u4ef6\u5faa\u73af\u7684\u5f71\u54cd\uff0c\u8ba1\u65f6\u5668\u7684\u56de\u8c03\u51fd\u6570\u53ea\u80fd\u5728\u4e3b\u7ebf\u7a0b\u7a7a\u95f2\u65f6\u8fd0\u884c\uff0c\u56e0\u6b64\u53c8\u5e26\u6765\u4e86\u504f\u5dee"))))}m.isMDXComponent=!0}}]);