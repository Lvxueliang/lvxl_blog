"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9818],{8860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(7953);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),y=l,m=s["".concat(c,".").concat(y)]||s[y]||g[y]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(5890),l=(r(7953),r(8860));const o={slug:"\u5b89\u5168",title:"\u5b89\u5168",authors:["Lvxl"],tags:["\u524d\u7aef","\u5b89\u5168"]},a="\u7f51\u7edc\u5b89\u5168",i={permalink:"/lvxl_blog/blog/\u5b89\u5168",source:"@site/blog/2023-02-23-\u524d\u7aef\u5b89\u5168.md",title:"\u5b89\u5168",description:"XSS \u653b\u51fb",date:"2023-02-23T00:00:00.000Z",formattedDate:"February 23, 2023",tags:[{label:"\u524d\u7aef",permalink:"/lvxl_blog/blog/tags/\u524d\u7aef"},{label:"\u5b89\u5168",permalink:"/lvxl_blog/blog/tags/\u5b89\u5168"}],readingTime:1.04,hasTruncateMarker:!1,authors:[{name:"Lvxl",title:"\u524d\u7aef\u5c0f\u767d",url:"https://lvxueliang.github.io/lvxl_blog",imageURL:"https://lvxueliang.github.io/lvxl_blog/img/logo.jpeg",key:"Lvxl"}],frontMatter:{slug:"\u5b89\u5168",title:"\u5b89\u5168",authors:["Lvxl"],tags:["\u524d\u7aef","\u5b89\u5168"]},prevItem:{title:"\u6d4f\u89c8\u5668\u6e32\u67d3\u539f\u7406",permalink:"/lvxl_blog/blog/browers"},nextItem:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/lvxl_blog/blog/\u6027\u80fd\u4f18\u5316"}},c={authorsImageUrls:[void 0]},p=[{value:"XSS \u653b\u51fb",id:"xss-\u653b\u51fb",level:3}],u={toc:p},s="wrapper";function g(e){let{components:t,...r}=e;return(0,l.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"xss-\u653b\u51fb"},"XSS \u653b\u51fb"),(0,l.yg)("p",null,"XSS \u653b\u51fb\u662f\u8de8\u7ad9\u811a\u672c\u653b\u51fb, \u662f\u4e00\u79cd\u4ee3\u7801\u6ce8\u5165\u653b\u51fb. \u653b\u51fb\u8005\u901a\u8fc7\u5728\n\u7f51\u7ad9\u6ce8\u5165\u6076\u610f\u811a\u672c\uff0c\u4f7f\u4e4b\u5728\u7528\u6237\u7684\u6d4f\u89c8\u5668\u4e0a\u8fd0\u884c\uff0c\u4ece\u800c\u76d7\u53d6\u7528\u6237\u7684\u4fe1\n\u606f\u5982 cookie \u7b49\u3002"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"CSP \u6307\u7684\u662f\u5185\u5bb9\u5b89\u5168\u7b56\u7565\uff0c\u5b83\u7684\u672c\u8d28\u662f\u5efa\u7acb\u4e00\u4e2a\u767d\u540d\u5355\uff0c\u544a\u8bc9\u6d4f\u89c8\n\u5668\u54ea\u4e9b\u5916\u90e8\u8d44\u6e90\u53ef\u4ee5\u52a0\u8f7d\u548c\u6267\u884c\u3002\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e\u89c4\u5219\uff0c\u5982\u4f55\u62e6\u622a\u7531\n\u6d4f\u89c8\u5668\u81ea\u5df1\u6765\u5b9e\u73b0"),(0,l.yg)("li",{parentName:"ol"},"\u901a\u5e38\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u5f00\u542f CSP\uff0c\u4e00\u79cd\u662f\u8bbe\u7f6e HTTP \u9996\u90e8\u4e2d\u7684\nContent-Security-Policy\uff0c\u4e00\u79cd\u662f\u8bbe\u7f6e meta \u6807\u7b7e\u7684\u65b9\u5f0f ",(0,l.yg)("inlineCode",{parentName:"li"},'<meta http-equiv="Content-Security-Policy">'),"\u5bf9\u4e00\u4e9b\u654f\u611f\u4fe1\u606f\u8fdb\u884c\u4fdd\u62a4\uff0c\u6bd4\u5982 cookie \u4f7f\u7528 http-only\uff0c\u4f7f\u5f97\u811a\u672c\n\u65e0\u6cd5\u83b7\u53d6\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u9a8c\u8bc1\u7801\uff0c\u907f\u514d\u811a\u672c\u4f2a\u88c5\u6210\u7528\u6237\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\u3002")))}g.isMDXComponent=!0}}]);