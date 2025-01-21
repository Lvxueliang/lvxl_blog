"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2841],{8860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(7953);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),g=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=g(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=g(r),c=l,m=s["".concat(i,".").concat(c)]||s[c]||y[c]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:l,o[1]=p;for(var g=2;g<a;g++)o[g]=r[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>g});var n=r(5890),l=(r(7953),r(8860));const a={slug:"js",title:"JAVASCRIPT",authors:["Lvxl"],tags:["js"]},o="JAVASCRIPT",p={permalink:"/blog/js",source:"@site/blog/2023-02-05-javascript.md",title:"JAVASCRIPT",description:"\u4e8b\u4ef6\u59d4\u6258 DOM\u4e8b\u4ef6\u6d41",date:"2023-02-05T00:00:00.000Z",formattedDate:"February 5, 2023",tags:[{label:"js",permalink:"/blog/tags/js"}],readingTime:2.715,hasTruncateMarker:!1,authors:[{name:"Lvxl",title:"\u524d\u7aef\u5c0f\u767d",url:"https://lvxueliang.github.io/lvxl_blog",imageURL:"https://lvxueliang.github.io/lvxl_blog/img/logo.jpeg",key:"Lvxl"}],frontMatter:{slug:"js",title:"JAVASCRIPT",authors:["Lvxl"],tags:["js"]},prevItem:{title:"\u865a\u62dfdom & diff\u7b97\u6cd5",permalink:"/blog/diff"},nextItem:{title:"\u5de5\u5177\u51fd\u6570",permalink:"/blog/utils"}},i={authorsImageUrls:[void 0]},g=[{value:"\u4e8b\u4ef6\u59d4\u6258 DOM\u4e8b\u4ef6\u6d41",id:"\u4e8b\u4ef6\u59d4\u6258-dom\u4e8b\u4ef6\u6d41",level:3},{value:"\u539f\u578b\u548c\u539f\u578b\u94fe",id:"\u539f\u578b\u548c\u539f\u578b\u94fe",level:3},{value:"\u95ed\u5305",id:"\u95ed\u5305",level:3}],u={toc:g},s="wrapper";function y(e){let{components:t,...r}=e;return(0,l.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"\u4e8b\u4ef6\u59d4\u6258-dom\u4e8b\u4ef6\u6d41"},"\u4e8b\u4ef6\u59d4\u6258 DOM\u4e8b\u4ef6\u6d41"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"dom\u4e8b\u4ef6\u6d41"),": \u5143\u7d20\u4e8b\u4ef6\u54cd\u5e94\u5728dom\u6811\u4e2d\u662f\u4ece\u9876\u5c42\u7684window\u5f00\u59cb\u2018\u6d41\u5411\u2019\u76ee\u6807\u5143\u7d20,\u7136\u540e\u53c8\u4ece \u76ee\u6807\u5143\u7d20\u2018\u6d41\u5411\u2019\u9876\u5c42\u7684window"),(0,l.yg)("p",null,"\u901a\u5e38\u6211\u4eec\u5c06\u8fd9\u79cd\u4e8b\u4ef6\u6d41\u5411\u6c1b\u56f4\u4e09\u4e2a\u9636\u6bb5:"),(0,l.yg)("p",null," ",(0,l.yg)("strong",{parentName:"p"},"\u6355\u83b7\u9636\u6bb5"),": \u662f\u6307\u4e8b\u4ef6\u54cd\u5e94\u4ece\u5916\u5c42window\u5f00\u59cb,\u9010\u7ea7\u5411\u5185\u5c42\u524d\u8fdb,\u76f4\u5230\u76ee\u6807\u5143\u7d20, \u5728\u8be5\u9636\u6bb5,\u4e0d\u4f1a\u5904\u7406\u54cd\u5e94\u5143\u7d20\u7684\u6ce8\u518c\u5192\u6ce1\u4e8b\u4ef6"),(0,l.yg)("p",null," ",(0,l.yg)("strong",{parentName:"p"},"\u76ee\u6807\u9636\u6bb5"),": \u662f\u6307\u89e6\u53d1\u4e8b\u4ef6\u7684\u6700\u5e95\u5c42\u7684\u5143\u7d20"),(0,l.yg)("p",null," ",(0,l.yg)("strong",{parentName:"p"},"\u5192\u6ce1\u9636\u6bb5"),": \u4e0e\u6355\u83b7\u76f8\u53cd, \u662f\u4ece\u6700\u5e95\u5c42\u5f00\u59cb\u4e00\u5c42\u4e00\u5c42\u5f80\u5916\u4f20\u9012\u5230window\u6700\u5916\u5c42"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"    element.addEventListener(\u76d1\u542c\u4e8b\u4ef6\u7c7b\u578b, \u4e8b\u4ef6\u56de\u8c03\u51fd\u6570, \u9ed8\u8ba4 false: \u5192\u6ce1,\u6355\u83b7:true)\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u4e8b\u4ef6\u5192\u6ce1\uff1a"),"\nJS\u4e2d\u5f53\u51fa\u53d1\u67d0\u4e9b\u5177\u6709\u5192\u6ce1\u6027\u8d28\u7684\u4e8b\u4ef6\u662f\uff0c\u9996\u5148\u5728\u89e6\u53d1\u5143\u7d20\u5bfb\u627e\u662f\u5426\u6709\u76f8\u5e94\u7684\u6ce8\u518c\u4e8b\u4ef6\uff0c\u5982\u679c\u6ca1\u6709\u518d\u7ee7\u7eed\u5411\u4e0a\u7ea7\u7236\u5143\u7d20\u5bfb\u627e\u662f\u5426\u6709\u76f8\u5e94\u7684\u6ce8\u518c\u4e8b\u4ef6\u4f5c\u51fa\u76f8\u5e94\uff0c\u8fd9\u5c31\u662f\u4e8b\u4ef6\u5192\u6ce1\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u4e8b\u4ef6\u59d4\u6258\uff1a"),"\n\u5229\u7528\u4e8b\u4ef6\u5192\u6ce1\u7684\u7279\u6027\uff0c\u5c06\u672c\u5e94\u8be5\u6ce8\u518c\u5728\u5b50\u5143\u7d20\u4e0a\u7684\u5904\u7406\u4e8b\u4ef6\u6ce8\u518c\u5728\u7236\u5143\u7d20\u4e0a\uff0c\u8fd9\u6837\u70b9\u51fb\u5b50\u5143\u7d20\u65f6\u53d1\u73b0\u5176\u672c\u8eab\u6ca1\u6709\u76f8\u5e94\u4e8b\u4ef6\u5c31\u5230\u7236\u5143\u7d20\u4e0a\u5bfb\u627e\u4f5c\u51fa\u76f8\u5e94\u3002"),(0,l.yg)("p",null,"\u8fd9\u6837\u505a\u7684\u4f18\u52bf\u6709\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u51cf\u5c11DOM\u64cd\u4f5c\uff0c\u63d0\u9ad8\u6027\u80fd\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u968f\u65f6\u53ef\u4ee5\u6dfb\u52a0\u5b50\u5143\u7d20\uff0c\u6dfb\u52a0\u7684\u5b50\u5143\u7d20\u4f1a\u81ea\u52a8\u6709\u76f8\u5e94\u7684\u5904\u7406\u4e8b\u4ef6\u3002")),(0,l.yg)("h3",{id:"\u539f\u578b\u548c\u539f\u578b\u94fe"},"\u539f\u578b\u548c\u539f\u578b\u94fe"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u539f\u578b")," : \u6bcf\u4e2a\u51fd\u6570\u90fd\u6709prototype\u5c5e\u6027 \u79f0\u4e4b\u4e3a\u539f\u578b, \u56e0\u4e3a\u8fd9\u4e2a\u5c5e\u6027\u503c\u662f\u4e00\u4e2a\u5bf9\u8c61, \u4e5f\u79f0\u4e3a\u539f\u578b\u5bf9\u8c61"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b58\u653e\u4e00\u4e9b\u65b9\u6cd5\u548c\u5c5e\u6027"),(0,l.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b9e\u73b0\u7ee7\u627f")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u539f\u578b\u94fe")," : \u6bcf\u4e2a\u5bf9\u8c61\u90fd\u6709",(0,l.yg)("strong",{parentName:"p"},"proto"),"\u6307\u5411\u4e86\u8fd9\u4e2a\u5bf9\u8c61\u539f\u578b,\u539f\u578b\u4e5f\u662f\u5bf9\u8c61, \u4e5f\u6709",(0,l.yg)("strong",{parentName:"p"},"proto"),"\u5c5e\u6027, \u6307\u5411\u4e86\u539f\u578b\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61,\u8fd9\u6837\u4e00\u5c42\u4e00\u5c42\u7684\u5f62\u6210\u4e86\u8fde\u5f0f\u7ed3\u6784,\u79f0\u4e3a\u539f\u578b\u94fe, \u6700\u9876\u5c42\u627e\u4e0d\u5230\u4e86\u8fd4\u56denull"),(0,l.yg)("h3",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,l.yg)("p",null,"\u51fd\u6570\u5185\u90e8\u8bbf\u95ee\u4e86\u51fd\u6570\u5916\u5c42\u7684\u5f15\u7528, \u5c31\u4f1a\u4ea7\u751f\u95ed\u5305"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u53d8\u91cf\u79c1\u6709\u5316, \u9632\u6b62\u5168\u5c40\u53d8\u91cf\u88ab\u6c61\u67d3")))}y.isMDXComponent=!0}}]);